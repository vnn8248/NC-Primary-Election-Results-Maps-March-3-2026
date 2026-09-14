"""
Rule-based title/subtitle formatting for auto-generated contests.js
entries, derived from a raw NCSBE contest name like
"US HOUSE OF REPRESENTATIVES DISTRICT 04 (DEM)".

This won't be pixel-perfect for every contest name (hyphenated school
district names, odd municipal races, etc.) — that's expected. Since
scripts/contests_js.py only replaces an entry's `results` once the
entry already exists, a hand-edited title/subtitle survives future
re-runs.
"""

import re


PARTY_SUBTITLES = {
    "DEM": "Democratic Primary",
    "REP": "Republican Primary",
    "LIB": "Libertarian Primary",
    "GRE": "Green Primary",
}

PARTY_SUFFIX = re.compile(r"^(.*?)\s*\(([A-Z]+)\)$")

LEADING_ZERO = re.compile(r"\b0+(\d+)\b")


def split_party(contest_name):
    """
    Split a raw contest name into (base_name, party_code).
    party_code is None for nonpartisan contests.
    """

    match = PARTY_SUFFIX.match(contest_name.strip())

    if not match:
        return contest_name.strip(), None

    return match.group(1).strip(), match.group(2)


def format_subtitle(party, vote_for):
    if party is not None:
        return PARTY_SUBTITLES.get(party, f"{party.title()} Primary")

    return f"Vote For {vote_for}"


def format_title(base_name):
    title = base_name.title()

    title = re.sub(r"^Us\b", "U.S.", title)
    title = re.sub(r"^Nc\b", "N.C.", title)

    title = title.replace(" Of Representatives", "")

    title = LEADING_ZERO.sub(r"\1", title)

    return title


def format_contest_name(contest_name, vote_for):
    """
    Returns (title, subtitle) for a raw NCSBE contest name.
    """

    base_name, party = split_party(contest_name)

    return format_title(base_name), format_subtitle(party, vote_for)
