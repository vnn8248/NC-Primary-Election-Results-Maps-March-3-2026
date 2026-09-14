import topojson as tp


DEFAULT_SIMPLIFY_EPSILON = 0.0005


def simplify_geodataframe(gdf, epsilon=DEFAULT_SIMPLIFY_EPSILON):
    """
    Simplify polygon geometry for smaller web map files.

    Uses topology-aware simplification: shared edges between
    neighboring polygons are identified and simplified once,
    consistently, rather than independently per polygon — which would
    introduce gaps or overlaps at shared borders.

    Simplification can introduce a small number of self-intersecting
    geometries; these are repaired with a zero-width buffer.

    Parameters
    ----------
    gdf : geopandas.GeoDataFrame
        Polygon geometry to simplify.

    epsilon : float, default 0.0005
        Simplification tolerance, in the same units as the input
        geometry's CRS. ~0.0005 degrees (roughly 90% smaller output,
        no visible difference at any zoom level a web map is actually
        viewed at) was chosen after comparing several tolerances on
        precinct-level data.

    Returns
    -------
    geopandas.GeoDataFrame
        Same columns and row order, with simplified, repaired geometry.
    """

    topology = tp.Topology(gdf, prequantize=False)

    simplified = topology.toposimplify(
        epsilon=epsilon,
        simplify_algorithm="dp",
        prevent_oversimplify=True,
    )

    result = simplified.to_gdf()

    result["geometry"] = result.geometry.buffer(0)

    return result
