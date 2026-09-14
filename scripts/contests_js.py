"""
Shared read/render/write helpers for js/contests.js.

Every field except `title`/`subtitle` is mechanically derived from a
pipeline run, so it's always safe to regenerate:
`update_derived_fields` (used by scripts/run_contest.py, which knows
the full pipeline output) refreshes everything from `scope` through
`results`, leaving only `title`/`subtitle` — the one genuinely
editorial, hand-tweakable field — untouched. `update_results` (used by
scripts/update_contest_results.py, which only has a CSV) narrowly
refreshes just `results` for tools that don't have the rest of the
pipeline output on hand.
"""

import json
import re
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent.parent
CONTESTS_JS = PROJECT_ROOT / "js" / "contests.js"

ENTRY_KEY_PATTERN = re.compile(r"^  (\w+): \{$", flags=re.MULTILINE)


def format_js_number(value):
    """
    Format a number the way JavaScript would stringify it
    (no trailing ".0" on whole numbers).
    """

    value = float(value)

    if value.is_integer():
        return str(int(value))

    return repr(value)


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def js_string_or_null(value):
    return "null" if value is None else js_string(value)


def entry_keys(text):
    return set(ENTRY_KEY_PATTERN.findall(text))


def render_results_block(results):
    """
    results: iterable of {"candidate", "votes", "share"}, already
    sorted descending by votes.
    """

    lines = []

    for row in results:
        lines.append("      {")
        lines.append(f"        candidate: {js_string(row['candidate'])},")
        lines.append(f"        votes: {int(row['votes'])},")
        lines.append(f"        share: {format_js_number(row['share'])},")
        lines.append("      },")

    return "\n".join(lines)


def render_candidates_block(candidates):
    """
    candidates: dict of candidate name -> [dark, mid, light] colors,
    in display order.
    """

    lines = []

    for name, colors in candidates.items():
        color_list = ", ".join(js_string(c) for c in colors)
        lines.append(f"      {js_string(name)}: [{color_list}],")

    return "\n".join(lines)


def render_bounds_block(bounds):
    (west, south), (east, north) = bounds

    return "\n".join([
        "    bounds: [",
        f"      [{format_js_number(west)}, {format_js_number(south)}],",
        f"      [{format_js_number(east)}, {format_js_number(north)}],",
        "    ],",
    ])


def render_participating_counties(participating_counties):
    if participating_counties is None:
        return "    participatingCounties: null,"

    county_list = ", ".join(js_string(c) for c in participating_counties)

    return f"    participatingCounties: [{county_list}],"


def render_body(scope, data, bounds, participating_counties, focus_mask_data, candidates, results):
    """
    Everything in an entry except `title`/`subtitle` — the mechanically
    derived fields, regenerated wholesale on every pipeline run.
    """

    return "\n".join([
        f"    scope: {js_string(scope)},",
        f"    data: {js_string(data)},",
        render_bounds_block(bounds),
        render_participating_counties(participating_counties),
        f"    focusMaskData: {js_string_or_null(focus_mask_data)},",
        "    candidates: {",
        render_candidates_block(candidates),
        "    },",
        "    results: [",
        render_results_block(results),
        "    ],",
    ])


def render_entry(key, title, subtitle, scope, data, bounds, participating_counties, focus_mask_data, candidates, results):
    body = render_body(scope, data, bounds, participating_counties, focus_mask_data, candidates, results)

    return (
        f"  {key}: {{\n"
        f"    title: {js_string(title)},\n"
        f"    subtitle: {js_string(subtitle)},\n"
        f"{body}\n"
        f"  }},\n"
    )


def update_derived_fields(text, key, scope, data, bounds, participating_counties, focus_mask_data, candidates, results):
    """
    Replace everything after `title`/`subtitle` for an existing entry
    (scope, data, bounds, participatingCounties, focusMaskData,
    candidates, results).
    """

    pattern = re.compile(
        r"(\n  " + re.escape(key) + r": \{\n"
        r"    title: .*?,\n"
        r"    subtitle: .*?,\n)"
        r".*?"
        r"(\n  \},\n)",
        flags=re.DOTALL,
    )

    match = pattern.search(text)

    if not match:
        raise ValueError(f"Could not locate entry '{key}' in {CONTESTS_JS}")

    body = render_body(scope, data, bounds, participating_counties, focus_mask_data, candidates, results)

    return (
        text[: match.start()]
        + match.group(1)
        + body
        + match.group(2)
        + text[match.end():]
    )


def update_results(text, key, results):
    """Replace just the `results` array for an existing entry."""

    pattern = re.compile(
        r"(\n  " + re.escape(key) + r": \{\n.*?\n    results: \[\n)"
        r".*?"
        r"(\n    \],\n  \},\n)",
        flags=re.DOTALL,
    )

    match = pattern.search(text)

    if not match:
        raise ValueError(f"Could not locate a results block for '{key}' in {CONTESTS_JS}")

    return (
        text[: match.start()]
        + match.group(1)
        + render_results_block(results)
        + match.group(2)
        + text[match.end():]
    )


def insert_entry(text, entry_text):
    """Insert a newly rendered entry just before the closing `};` of the contests object."""

    marker = "\n};\n"
    idx = text.index(marker)

    return text[: idx + 1] + entry_text + text[idx + 1:]


def upsert_contest(
    text, key, title, subtitle, scope, data, bounds,
    participating_counties, focus_mask_data, candidates, results,
):
    """
    Refresh the derived fields in place if `key` already has an entry
    (title/subtitle untouched); otherwise insert a brand new full entry.
    """

    if key in entry_keys(text):
        return update_derived_fields(
            text, key, scope, data, bounds, participating_counties,
            focus_mask_data, candidates, results,
        )

    entry_text = render_entry(
        key, title, subtitle, scope, data, bounds,
        participating_counties, focus_mask_data, candidates, results,
    )

    return insert_entry(text, entry_text)


def read_contests_js():
    return CONTESTS_JS.read_text()


def write_contests_js(text):
    CONTESTS_JS.write_text(text)
