"""
Run a pipeline for one contest and create/update its js/contests.js entry
in a single step.

For a contest with no entry yet, this generates the full entry (title,
subtitle, data path, bounds, candidate colors assigned by descending
vote-total rank, results). For a contest that already has an entry, only
`results` is refreshed — hand-edited metadata is left alone.

Usage:
    python scripts/run_contest.py \\
        --contest-name "ALAMANCE COUNTY SHERIFF (REP)" \\
        --pipeline countywide \\
        --county ALAMANCE

    python scripts/run_contest.py \\
        --contest-name "US SENATE (REP)" \\
        --pipeline statewide
"""

import argparse
import sys
from pathlib import Path

import pandas as pd
import pydash

PROJECT_ROOT = Path(__file__).resolve().parent.parent

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts import contests_js
from scripts.generators.naming import format_contest_name
from scripts.generators.palette import colors_for_rank

from pipelines.statewide import build_statewide_map
from pipelines.district import build_district_map
from pipelines.countywide import build_countywide_map
from pipelines.local_district import build_local_district_map


RESULTS_FILE = (
    PROJECT_ROOT / "data" / "raw" / "results"
    / "nc_primary_election_results_pct_20260303_RAW.csv"
)

SHAPEFILE = (
    PROJECT_ROOT / "data" / "raw" / "geography"
    / "SBE_PRECINCTS_20251212" / "SBE_PRECINCTS_20251212.shp"
)

CROSSWALK_FILE = PROJECT_ROOT / "data" / "crosswalks" / "precinct_crosswalk_2026.csv"

WEB_COLUMNS = [
    "county",
    "precinct",
    "enr_desc",
    "winner",
    "winner_votes",
    "winner_share",
    "runner_up",
    "runner_up_votes",
    "runner_up_share",
    "contest_votes",
    "margin_of_victory",
    "is_tie",
    "results",
    "participated",
    "map_key",
    "geometry",
]

PIPELINES = {"statewide", "district", "countywide", "local_district"}
COUNTY_SCOPED = {"countywide", "local_district"}


def run_pipeline(pipeline, contest_name, county, contest_summary_file, output_file):
    crosswalk_df = pd.read_csv(CROSSWALK_FILE)

    kwargs = dict(
        results_file=RESULTS_FILE,
        geography_file=SHAPEFILE,
        crosswalk=crosswalk_df,
        contest_name=contest_name,
        contest_summary_file=contest_summary_file,
        output_file=output_file,
        web_columns=WEB_COLUMNS,
    )

    if pipeline == "statewide":
        return build_statewide_map(**kwargs)

    if pipeline == "district":
        return build_district_map(**kwargs)

    if pipeline == "countywide":
        return build_countywide_map(county=county, **kwargs)

    if pipeline == "local_district":
        return build_local_district_map(county=county, **kwargs)

    raise ValueError(f"Unknown pipeline: {pipeline}")


def compute_bounds(web_precincts):
    participated = web_precincts[web_precincts["participated"]]

    west, south, east, north = participated.total_bounds

    return [[west, south], [east, north]]


def build_candidates_and_results(contest_summary_file):
    df = pd.read_csv(contest_summary_file)

    candidates = {}
    results = []

    for rank, row in enumerate(df.itertuples()):
        candidates[row.choice] = colors_for_rank(rank)
        results.append({
            "candidate": row.choice,
            "votes": row.candidate_votes,
            "share": row.vote_share,
        })

    return candidates, results


def run_contest(contest_name, pipeline, county, vote_for):
    if pipeline not in PIPELINES:
        raise ValueError(f"--pipeline must be one of {sorted(PIPELINES)}")

    if pipeline in COUNTY_SCOPED and not county:
        raise ValueError(f"--county is required for pipeline={pipeline}")

    key = pydash.snake_case(contest_name)

    contest_summary_file = PROJECT_ROOT / "data" / "processed" / f"{key}_contest_summary.csv"
    output_file = PROJECT_ROOT / "map_data" / f"{key}.geojson"

    web_precincts = run_pipeline(
        pipeline, contest_name, county, contest_summary_file, output_file
    )

    bounds = compute_bounds(web_precincts)
    candidates, results = build_candidates_and_results(contest_summary_file)
    title, subtitle = format_contest_name(contest_name, vote_for)
    data = f"map_data/{key}.geojson"

    text = contests_js.read_contests_js()
    is_new = key not in contests_js.entry_keys(text)

    text = contests_js.upsert_contest(
        text, key, title, subtitle, data, bounds, candidates, results
    )

    contests_js.write_contests_js(text)

    action = "Created new entry" if is_new else "Updated results for"
    print(f"{action} '{key}' ({title} — {subtitle})")


def main():
    parser = argparse.ArgumentParser(description=__doc__)

    parser.add_argument("--contest-name", required=True)
    parser.add_argument("--pipeline", required=True, choices=sorted(PIPELINES))
    parser.add_argument("--county", default=None)
    parser.add_argument("--vote-for", type=int, default=1)

    args = parser.parse_args()

    run_contest(args.contest_name, args.pipeline, args.county, args.vote_for)


if __name__ == "__main__":
    main()
