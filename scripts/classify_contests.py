"""
Classify every contest in the raw NCSBE results file by which pipeline
it needs (statewide / district / countywide / local_district), and
write a manifest that scripts/run_all_contests.py can loop over.

Eligibility: single-choice contests only (Vote For == 1) — multi-seat
contests need different summarization and aren't handled by the
current pipelines — and excludes referendums/bonds/amendments, which
aren't candidate races.

Classification heuristic:
- 100/100 counties reporting            -> statewide
- Contest Type "S" (state legislative/  -> district
  judicial/DA districts), any county
  count
- Contest Type "C" (county-level races), one county:
    - name doesn't match "<COUNTY> COUNTY ..." (municipal races,
      independent school districts)     -> unsupported (no county
                                           boundary to scope by; not
                                           run)
    - name contains DISTRICT/WARD/      -> local_district
      TOWNSHIP (a county subdivision)
    - otherwise (county-wide office)    -> countywide

This mirrors the manual analysis done when estimating the bulk run;
formalized here so it's reviewable and repeatable. Inspect the output
manifest before running scripts/run_all_contests.py — hand-edit any
row that's misclassified.

Usage:
    python scripts/classify_contests.py
"""

import re
import sys
from pathlib import Path

import pandas as pd

PROJECT_ROOT = Path(__file__).resolve().parent.parent

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))


RESULTS_FILE = (
    PROJECT_ROOT / "data" / "raw" / "results"
    / "nc_primary_election_results_pct_20260303_RAW.csv"
)

MANIFEST_FILE = PROJECT_ROOT / "data" / "contest_manifest.csv"

REFERENDUM_PATTERN = re.compile(r"REFERENDUM|BOND|AMENDMENT", flags=re.IGNORECASE)
COUNTY_PREFIX_PATTERN = re.compile(r"^([A-Z .'-]+) COUNTY ")
SUBDIVISION_PATTERN = re.compile(r"\b(DISTRICT|WARD|TOWNSHIP)\b")


def load_contest_summary():
    df = pd.read_csv(RESULTS_FILE, dtype=str)
    df["Vote For"] = pd.to_numeric(df["Vote For"], errors="coerce")

    return (
        df.groupby(["Contest Name", "Contest Type"])
        .agg(
            counties=("County", "nunique"),
            vote_for=("Vote For", "max"),
        )
        .reset_index()
    )


def classify_row(row):
    name = row["Contest Name"]

    if row["counties"] == 100:
        return "statewide", None

    if row["Contest Type"] == "S":
        return "district", None

    match = COUNTY_PREFIX_PATTERN.match(name)

    if not match:
        return "unsupported", None

    county = match.group(1)

    if SUBDIVISION_PATTERN.search(name):
        return "local_district", county

    return "countywide", county


def classify_contests():
    summary = load_contest_summary()

    referendum = summary["Contest Name"].str.contains(REFERENDUM_PATTERN, na=False)
    eligible = summary[(summary["vote_for"] == 1) & (~referendum)].copy()

    classified = eligible["Contest Name"].to_frame(name="contest_name")
    pipelines, counties = zip(*eligible.apply(classify_row, axis=1))
    classified["pipeline"] = pipelines
    classified["county"] = counties
    classified["vote_for"] = eligible["vote_for"].astype(int).values

    classified = classified.sort_values(
        ["pipeline", "contest_name"]
    ).reset_index(drop=True)

    return classified


def main():
    classified = classify_contests()

    runnable = classified[classified["pipeline"] != "unsupported"]
    unsupported = classified[classified["pipeline"] == "unsupported"]

    runnable.to_csv(MANIFEST_FILE, index=False)

    print(f"Wrote {len(runnable)} contest(s) to {MANIFEST_FILE}")
    print(runnable["pipeline"].value_counts().to_string())

    if len(unsupported):
        print(
            f"\n{len(unsupported)} contest(s) skipped — no county boundary "
            f"to scope by (municipal races, independent school districts):"
        )
        for name in unsupported["contest_name"]:
            print(f"  {name}")


if __name__ == "__main__":
    main()
