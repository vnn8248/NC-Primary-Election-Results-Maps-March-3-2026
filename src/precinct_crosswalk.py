import pandas as pd
import re


def normalize_precinct_id(value):
    """
    Create a comparison-only precinct ID.

    Removes leading zeros from:
    whole-number precinct IDs
    the integer portion of decimal precinct IDs

    Leaves non-numeric IDs unchanged.

    Examples:
        "01"     -> "1"
        "010"    -> "10"

        "01.1"   -> "1.1"
        "078.1"  -> "78.1"
        "08.2"   -> "8.2"

        "01-01"  -> "01-01"
        "20-06A" -> "20-06A"
        "CV"     -> "CV"
    """

    if pd.isna(value):
        return pd.NA

    value = str(value).strip().upper()

    # Whole-number IDs
    if re.fullmatch(r"\d+", value):
        return str(int(value))

    # Decimal IDs
    if re.fullmatch(r"\d+\.\d+", value):
        integer_part, decimal_part = value.split(".", 1)

        return f"{int(integer_part)}.{decimal_part}"

    return value


def prepare_results_precincts(
    df,
    county_col="county",
    precinct_col="precinct",
):
    """
    Prepare unique precinct IDs from election results
    for crosswalk analysis.
    """

    precincts = (
        df[
            [
                county_col,
                precinct_col,
            ]
        ]
        .drop_duplicates()
        .copy()
    )

    precincts = precincts.rename(
        columns={
            county_col: "county",
            precinct_col: "results_precinct_id",
        }
    )

    precincts["county"] = (
        precincts["county"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    precincts["results_precinct_id"] = (
        precincts["results_precinct_id"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    precincts["normalized_id"] = (
        precincts["results_precinct_id"]
        .apply(normalize_precinct_id)
    )

    return precincts


def prepare_geography_precincts(
    gdf,
    county_col,
    precinct_col,
):
    """
    Prepare unique precinct IDs from geography
    for crosswalk analysis.
    """

    precincts = (
        gdf[
            [
                county_col,
                precinct_col,
            ]
        ]
        .drop_duplicates()
        .copy()
    )

    precincts = precincts.rename(
        columns={
            county_col: "county",
            precinct_col: "geo_precinct_id",
        }
    )

    precincts["county"] = (
        precincts["county"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    precincts["geo_precinct_id"] = (
        precincts["geo_precinct_id"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    precincts["normalized_id"] = (
        precincts["geo_precinct_id"]
        .apply(normalize_precinct_id)
    )

    return precincts

def crosswalk_diagnosis(
    results_precincts,
    geography_precincts,
):
    """
    Find possible geography matches for each
    results precinct using county + normalized ID.

    This is for diagnostics only. Ambiguous matches
    should not be applied automatically.
    """

    matches = results_precincts.merge(
        geography_precincts,
        on=[
            "county",
            "normalized_id",
        ],
        how="left",
    )

    matches["exact_match"] = (
        matches["results_precinct_id"]
        == matches["geo_precinct_id"]
    )

    return matches

def find_ambiguous_matches(matches):
    """
    Return results precincts that match more than one
    geography precinct after normalization.
    """

    match_counts = (
        matches[
            matches["geo_precinct_id"].notna()
        ]
        .groupby(
            [
                "county",
                "results_precinct_id",
            ],
            as_index=False,
        )
        .agg(
            match_count=("geo_precinct_id", "nunique")
        )
    )

    ambiguous = match_counts[
        match_counts["match_count"] > 1
    ]

    return ambiguous


def _classify_match_method(row):
    """
    Classify how a results precinct ID matched
    the geography precinct ID.
    """

    results_id = str(row["results_precinct_id"])
    geo_id = str(row["geo_precinct_id"])

    if results_id == geo_id:
        return "exact"

    if "." in results_id or "." in geo_id:
        return "decimal_leading_zero"

    return "leading_zero"



def build_proposed_crosswalk(matches):
    """
    Build a proposed crosswalk from safe, unambiguous matches.

    Match methods:
        exact
        leading_zero
        decimal_leading_zero

    Ambiguous matches are excluded for manual review.
    """

    matches = matches.copy()

    matches["match_count"] = (
        matches.groupby(
            ["county", "results_precinct_id"]
        )["geo_precinct_id"]
        .transform("nunique")
    )

    resolved = matches[
        matches["geo_precinct_id"].notna()
        & (
            matches["exact_match"]
            | (matches["match_count"] == 1)
        )
    ].copy()

    resolved["match_method"] = resolved.apply(
        _classify_match_method,
        axis=1,
    )

    crosswalk = (
        resolved[
            [
                "county",
                "results_precinct_id",
                "geo_precinct_id",
                "match_method",
            ]
        ]
        .drop_duplicates()
        .sort_values(
            [
                "county",
                "results_precinct_id",
            ]
        )
        .reset_index(drop=True)
    )

    return crosswalk



def apply_crosswalk(
    df,
    crosswalk,
    county_col="county",
    precinct_col="precinct",
):
    """
    Apply an explicit precinct crosswalk to election results.

    Adds:
        geo_id
        match_method
    """

    mapped = df.merge(
        crosswalk,
        left_on=[
            county_col,
            precinct_col,
        ],
        right_on=[
            "county",
            "results_precinct_id",
        ],
        how="left",
        validate="many_to_one",
        suffixes=("", "_crosswalk"),
    )

    return mapped