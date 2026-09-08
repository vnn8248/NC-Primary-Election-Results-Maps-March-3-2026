from pathlib import Path

import pandas as pd


def load_results(filepath):
    """
    Load an election results CSV.

    Parameters
    ----------
    filepath : str or pathlib.Path
        Path to the election results CSV.

    Returns
    -------
    pandas.DataFrame
        Raw election results.
    """

    filepath = Path(filepath)

    if not filepath.exists():
        raise FileNotFoundError(
            f"Election results file not found: {filepath}"
        )

    if filepath.suffix.lower() != ".csv":
        raise ValueError(
            f"Expected a CSV file, received: {filepath.suffix}"
        )

    df = pd.read_csv(filepath)

    return df