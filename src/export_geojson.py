from pathlib import Path


def export_geojson(
    gdf,
    filepath,
    columns=None,
    simplify=False,
):
    """
    Export a GeoDataFrame to GeoJSON for web mapping.

    Reprojects to EPSG:4326 before export.

    Parameters
    ----------
    gdf : GeoDataFrame
        Geography with election results attached.

    filepath : str or Path
        Output GeoJSON path.

    columns : list, optional
        Columns to keep before export.
        Geometry is always preserved.

    simplify : bool, default False
        Simplify geometry before export (see
        src/simplify_geography.py). Off by default — opt in per call
        site, since it's only worth the extra processing time for
        large precinct-level exports.
    """

    filepath = Path(filepath)

    web_gdf = gdf.to_crs("EPSG:4326").copy()

    if columns is not None:
        keep_columns = list(columns)

        if "geometry" not in keep_columns:
            keep_columns.append("geometry")

        web_gdf = web_gdf[keep_columns]

    if simplify:
        from src.simplify_geography import simplify_geodataframe

        web_gdf = simplify_geodataframe(web_gdf)

    filepath.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    web_gdf.to_file(
        filepath,
        driver="GeoJSON",
    )

    return web_gdf