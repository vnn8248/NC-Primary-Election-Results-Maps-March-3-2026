"""
Generate map_data/county_borders.geojson by dissolving the statewide
precinct shapefile into one polygon per county.

Static geography — run once, and only re-run if the underlying precinct
shapefile changes.

Usage:
    python scripts/generate_county_borders.py
"""

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from src.load_geography import load_geography
from src.dissolve_geography import dissolve_counties
from src.export_geojson import export_geojson

SHAPEFILE = (
    PROJECT_ROOT
    / "data"
    / "raw"
    / "geography"
    / "SBE_PRECINCTS_20251212"
    / "SBE_PRECINCTS_20251212.shp"
)

OUTPUT_FILE = PROJECT_ROOT / "map_data" / "county_borders.geojson"


def generate_county_borders():
    geography = load_geography(SHAPEFILE)

    counties = dissolve_counties(geography)

    export_geojson(counties, OUTPUT_FILE)

    print(f"Wrote {len(counties)} county polygons to {OUTPUT_FILE}")


if __name__ == "__main__":
    generate_county_borders()
