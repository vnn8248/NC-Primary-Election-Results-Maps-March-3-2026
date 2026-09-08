def join_precinct_geography(
    geography,
    results,
    geography_county_col="county_nam",
    geography_precinct_col="prec_id",
):
    """
    Join precinct-level election results to precinct polygons.

    Returns one row per geography precinct.

    Precincts with no election-results match remain in the
    GeoDataFrame with missing result fields.
    """

    geography = geography.copy()

    geography["county_join"] = (
        geography[geography_county_col]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    geography["precinct_join"] = (
        geography[geography_precinct_col]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    merged = geography.merge(
        results,
        left_on=[
            "county_join",
            "precinct_join",
        ],
        right_on=[
            "county",
            "geo_precinct_id",
        ],
        how="left",
        validate="one_to_one",
    )

    merged["participated"] = (
        merged["results_precinct_id"].notna()
    )

    merged["enr_desc"] = merged["enr_desc"].str.title()

    merged["map_key"] = merged["county"] + "_" + merged["precinct"]

    merged["is_tie"] = (
        merged["is_tie"]
        .fillna(False)
        .astype(bool)
    )


    return merged