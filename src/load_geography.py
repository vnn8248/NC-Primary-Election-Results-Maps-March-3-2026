from pathlib import Path

import geopandas as gpd


def load_geography(filepath):
    """
    Load geography data.

    Parameters
    ----------
    filepath : str or pathlib.Path
        Path to the geography data file.

    Returns
    -------
    geopandas.GeoDataFrame
        Raw geography data.
    """

    filepath = Path(filepath)

    if not filepath.exists():
        raise FileNotFoundError(
            f"Geography data file not found: {filepath}"
        )

    if filepath.suffix.lower() != ".shp":
        raise ValueError(
            f"Expected a shapefile, received: {filepath.suffix}"
        )

    gdf = gpd.read_file(filepath)

    return gdf