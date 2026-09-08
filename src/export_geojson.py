from pathlib import Path


def export_geojson(
    gdf,
    filepath,
    columns=None,
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
    """

    filepath = Path(filepath)

    web_gdf = gdf.to_crs("EPSG:4326").copy()

    if columns is not None:
        keep_columns = list(columns)

        if "geometry" not in keep_columns:
            keep_columns.append("geometry")

        web_gdf = web_gdf[keep_columns]

    filepath.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    web_gdf.to_file(
        filepath,
        driver="GeoJSON",
    )

    return web_gdf