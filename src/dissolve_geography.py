def dissolve_counties(gdf, county_col="county_nam"):
    """
    Dissolve precinct polygons into one polygon per county.

    Parameters
    ----------
    gdf : geopandas.GeoDataFrame
        Precinct-level geography.

    county_col : str, default "county_nam"
        Column identifying each precinct's county.

    Returns
    -------
    geopandas.GeoDataFrame
        One row per county, with a single dissolved polygon.
    """

    gdf = gdf.copy()

    gdf[county_col] = (
        gdf[county_col]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    return gdf.dissolve(
        by=county_col,
        as_index=False,
    )[[county_col, "geometry"]]
