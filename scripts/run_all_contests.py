"""
Run scripts/run_contest.py's run_contest() for every row in a contest
manifest (see scripts/classify_contests.py), in one process — calling
the function directly rather than spawning a subprocess per contest,
and continuing past individual failures instead of stopping the batch.

Usage:
    # Full run
    python scripts/run_all_contests.py

    # Preview what would run without actually running the pipelines
    python scripts/run_all_contests.py --dry-run

    # Try a handful first (recommended before the full run)
    python scripts/run_all_contests.py --limit 15

    # Just one pipeline type
    python scripts/run_all_contests.py --only statewide
"""

import argparse
import sys
import time
from pathlib import Path

import pandas as pd

PROJECT_ROOT = Path(__file__).resolve().parent.parent

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.run_contest import run_contest, PIPELINES


DEFAULT_MANIFEST_FILE = PROJECT_ROOT / "data" / "contest_manifest.csv"


def load_manifest(manifest_file, only=None, limit=None):
    df = pd.read_csv(manifest_file)
    df["county"] = df["county"].where(df["county"].notna(), None)

    if only:
        df = df[df["pipeline"] == only]

    if limit:
        df = df.head(limit)

    return df.to_dict("records")


def run_all_contests(manifest_file, only=None, limit=None, dry_run=False):
    rows = load_manifest(manifest_file, only=only, limit=limit)

    if not rows:
        print("No contests matched — check --only / --limit / the manifest file.")
        return

    print(f"{len(rows)} contest(s) to run" + (" (dry run)" if dry_run else "") + "\n")

    failures = []
    start = time.time()

    for i, row in enumerate(rows, start=1):
        label = f"[{i}/{len(rows)}] {row['pipeline']:<14} {row['contest_name']}"

        if dry_run:
            print(label)
            continue

        try:
            run_contest(row["contest_name"], row["pipeline"], row["county"], row["vote_for"])
        except Exception as error:
            print(f"{label}  FAILED: {error}")
            failures.append((row["contest_name"], str(error)))
        else:
            print(label)

    elapsed = time.time() - start

    if dry_run:
        return

    succeeded = len(rows) - len(failures)

    print(f"\n{succeeded}/{len(rows)} succeeded in {elapsed:.1f}s")

    if failures:
        print(f"\n{len(failures)} failure(s):")
        for name, error in failures:
            print(f"  {name}: {error}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)

    parser.add_argument("--manifest", type=Path, default=DEFAULT_MANIFEST_FILE)
    parser.add_argument("--only", choices=sorted(PIPELINES), default=None)
    parser.add_argument("--limit", type=int, default=None)
    parser.add_argument("--dry-run", action="store_true")

    args = parser.parse_args()

    run_all_contests(
        args.manifest, only=args.only, limit=args.limit, dry_run=args.dry_run
    )


if __name__ == "__main__":
    main()
