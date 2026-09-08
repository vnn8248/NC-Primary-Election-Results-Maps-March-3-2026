North Carolina Primary Election Maps - March 3, 2026

Reusable precinct-level election mapping pipelines for the North Carolina primary election on March 3, 2026.

The project processes North Carolina election results and precinct geography into GeoJSON files for interactive Mapbox maps.

## Project structure

- `src/` — reusable data-processing functions
- `pipelines/` — contest-scope pipelines
- `notebooks/` — exploration and diagnostics
- `data/crosswalks/` — reviewed precinct ID crosswalks
- `map/` — Mapbox map and frontend files
- `docs/` — methodology and data documentation

## Current pipelines

- statewide contests
- multi-county district contests
- countywide contests
- local district contests

## Basic workflow

1. Load and clean election results.
2. Filter to a contest.
3. Summarize candidate results by precinct.
4. Match election contest precinct IDs to geography precinct IDs.
5. Join results to precinct polygons.
6. Export EPSG:4326 GeoJSON.
7. Render with Mapbox GL JS.

## Environment

This project uses Python, pandas, GeoPandas, Jupyter, and Mapbox GL JS.

Create or activate a Python environment and install dependencies from `requirements.txt`.

## Data

Raw election results and GIS data are not committed to the repository. See `docs/data_sources.md`.

Reviewed precinct crosswalks are committed because they document how result units were matched to geography.
