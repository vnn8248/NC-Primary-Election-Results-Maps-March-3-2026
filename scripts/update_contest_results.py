"""
Sync candidate vote totals in js/contests.js from contest-summary CSVs.

Each contest entry in js/contests.js keeps its title/subtitle/data/bounds/
candidates hand-authored, but its `results` array (candidate, votes, share)
is regenerated here from data/processed/<key>_contest_summary.csv so vote
totals never have to be copy-pasted by hand.

For brand new contests (no entry in contests.js yet), use
scripts/run_contest.py instead — it runs the pipeline and creates the
full entry (title/subtitle/bounds/candidates/results) in one step.

Usage:
    python scripts/update_contest_results.py
"""

import sys
from pathlib import Path

import pandas as pd

PROJECT_ROOT = Path(__file__).resolve().parent.parent

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts import contests_js


PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"
SUMMARY_SUFFIX = "_contest_summary.csv"


def results_from_csv(csv_file):
    df = pd.read_csv(csv_file)

    return [
        {
            "candidate": row["choice"],
            "votes": row["candidate_votes"],
            "share": row["vote_share"],
        }
        for _, row in df.iterrows()
    ]


def update_contest_results():
    text = contests_js.read_contests_js()

    csv_files = sorted(PROCESSED_DIR.glob(f"*{SUMMARY_SUFFIX}"))
    csv_keys = {
        csv_file.name[: -len(SUMMARY_SUFFIX)]: csv_file
        for csv_file in csv_files
    }

    existing_keys = contests_js.entry_keys(text)

    missing_metadata = sorted(csv_keys.keys() - existing_keys)
    stale_entries = sorted(existing_keys - csv_keys.keys())

    updated = []

    for key in sorted(csv_keys.keys() & existing_keys):
        results = results_from_csv(csv_keys[key])
        text = contests_js.update_results(text, key, results)
        updated.append(key)

    contests_js.write_contests_js(text)

    print(f"Updated results for {len(updated)} contest(s):")
    for key in updated:
        print(f"  {key}")

    if missing_metadata:
        print(
            "\nNo entry in contests.js yet — run scripts/run_contest.py to "
            "create it:"
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
