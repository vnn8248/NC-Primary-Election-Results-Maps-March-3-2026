"""
Sync candidate vote totals in js/contests.js from contest-summary CSVs.

Each contest entry in js/contests.js keeps its title/subtitle/data/bounds/
candidates hand-authored, but its `results` array (candidate, votes, share)
is regenerated here from data/processed/<key>_contest_summary.csv so vote
totals never have to be copy-pasted by hand.

Usage:
    python scripts/update_contest_results.py
"""

import json
import re
from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parent.parent
PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"
CONTESTS_JS = PROJECT_ROOT / "js" / "contests.js"

SUMMARY_SUFFIX = "_contest_summary.csv"

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


def build_results_block(csv_file):
    """
    Build the inner lines of a `results: [...]` array from a
    contest-summary CSV, matching the existing file's formatting.
    """

    df = pd.read_csv(csv_file)

    lines = []

    for _, row in df.iterrows():
        lines.append("      {")
        lines.append(f"        candidate: {json.dumps(row['choice'], ensure_ascii=False)},")
        lines.append(f"        votes: {int(row['candidate_votes'])},")
        lines.append(f"        share: {format_js_number(row['vote_share'])},")
        lines.append("      },")

    return "\n".join(lines)


def update_contest_results():
    contests_text = CONTESTS_JS.read_text()

    csv_files = sorted(PROCESSED_DIR.glob(f"*{SUMMARY_SUFFIX}"))
    csv_keys = {
        csv_file.name[: -len(SUMMARY_SUFFIX)]: csv_file
        for csv_file in csv_files
    }

    entry_keys = set(ENTRY_KEY_PATTERN.findall(contests_text))

    missing_metadata = sorted(csv_keys.keys() - entry_keys)
    stale_entries = sorted(entry_keys - csv_keys.keys())

    updated = []

    for key in sorted(csv_keys.keys() & entry_keys):
        pattern = re.compile(
            r"(\n  " + re.escape(key) + r": \{\n.*?\n    results: \[\n)"
            r".*?"
            r"(\n    \],\n  \},\n)",
            flags=re.DOTALL,
        )

        match = pattern.search(contests_text)

        if not match:
            raise ValueError(
                f"Could not locate a results block for '{key}' in {CONTESTS_JS}"
            )

        results_block = build_results_block(csv_keys[key])

        contests_text = (
            contests_text[: match.start()]
            + match.group(1)
            + results_block
            + match.group(2)
            + contests_text[match.end():]
        )

        updated.append(key)

    CONTESTS_JS.write_text(contests_text)

    print(f"Updated results for {len(updated)} contest(s):")
    for key in updated:
        print(f"  {key}")

    if missing_metadata:
        print(
            "\nNo entry in contests.js yet — add title/subtitle/data/"
            "bounds/candidates by hand before results can sync:"
        )
        for key in missing_metadata:
            print(f"  {key}")

    if stale_entries:
        print(
            "\nNo matching contest-summary CSV found — results left unchanged:"
        )
        for key in stale_entries:
            print(f"  {key}")


if __name__ == "__main__":
    update_contest_results()
