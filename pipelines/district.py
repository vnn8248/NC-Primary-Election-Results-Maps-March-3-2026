from src.load_results import load_results
from src.clean_results import clean_results
from src.filter_contest import filter_contest
from src.summarize_contest import (
    summarize_precinct_results,
    summarize_precinct_winners,
    build_precinct_candidate_lists,
    summarize_contest_results
)
from src.precinct_crosswalk import apply_crosswalk
from src.load_geography import load_geography
from src.join_geography import join_precinct_geography
from src.export_geojson import export_geojson


def build_district_map(
    results_file,
    geography_file,
    crosswalk,
    contest_name,
    contest_summary_file,
    output_file,
    web_columns=None,
):
    """
    Build a precinct-level GeoJSON for a district contest.

    Uses statewide precinct geography, but only precincts
    appearing in the contest results are marked as participating.
    """

    results = load_results(results_file)
    results = clean_results(results)

    contest_all = filter_contest(
        results,
        contest_name,
        real_precincts_only=False,
    )

    contest = filter_contest(
        results,
        contest_name,
    )

    candidate_results = summarize_precinct_results(
        contest
    )

    contest_results = summarize_contest_results(contest_all)

    contest_results.to_csv(contest_summary_file, index=False)

    precinct_summary = summarize_precinct_winners(
        candidate_results
    )

    popup_results = build_precinct_candidate_lists(
        candidate_results
    )

    map_results = precinct_summary.merge(
        popup_results,
        on=["county", "precinct"],
        how="left",
        validate="one_to_one",
    )

    map_results = apply_crosswalk(
        map_results,
        crosswalk,
    )

    geography = load_geography(
        geography_file
    )

    # Filter for participating counties
    participating_counties = (
        contest["county"]
        .dropna()
        .unique()
    )

    geography = geography[
        geography["county_nam"]
        .astype("string")
        .str.strip()
        .str.upper()
        .isin(participating_counties)
    ].copy()

    mapped = join_precinct_geography(
        geography,
        map_results,
    )

    return export_geojson(
        mapped,
        output_file,
        columns=web_columns,
        simplify=True,
    )