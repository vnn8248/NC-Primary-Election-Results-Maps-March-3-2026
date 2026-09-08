import pandas as pd


COLUMN_RENAMES = {
    "County": "county",
    "Election Date": "election_date",
    "Precinct": "precinct",
    "Contest Group ID": "contest_group_id",
    "Contest Type": "contest_type",
    "Contest Name": "contest_name",
    "Choice": "choice",
    "Choice Party": "choice_party",
    "Vote For": "vote_for",
    "Election Day": "election_day",
    "Early Voting": "early_voting",
    "Absentee by Mail": "absentee_by_mail",
    "Provisional": "provisional",
    "Total Votes": "total_votes",
    "Real Precinct": "real_precinct",
}


REQUIRED_COLUMNS = list(COLUMN_RENAMES.keys())


NUMERIC_COLUMNS = [
    "contest_group_id",
    "vote_for",
    "election_day",
    "early_voting",
    "absentee_by_mail",
    "provisional",
    "total_votes",
]


def clean_results(df):
    """
    Clean raw NCSBE election results.

    This function:
    - verifies expected columns exist
    - renames columns to snake_case
    - cleans string fields
    - preserves precinct IDs as strings
    - converts election_date to datetime
    - ensures vote/count columns are numeric

    Parameters
    ----------
    df : pandas.DataFrame
        Raw election results DataFrame.

    Returns
    -------
    pandas.DataFrame
        Cleaned election results.
    """

    df = df.copy()

    _validate_columns(df)

    df = _rename_columns(df)
    df = _clean_strings(df)
    df = _clean_dates(df)
    df = _clean_numeric_columns(df)

    return df


def _validate_columns(df):
    """
    Verify that all expected NCSBE columns are present.
    """

    missing = [
        column
        for column in REQUIRED_COLUMNS
        if column not in df.columns
    ]

    if missing:
        raise ValueError(
            f"Missing required election-results columns: {missing}"
        )


def _rename_columns(df):
    """
    Rename NCSBE columns to snake_case.
    """

    return df.rename(columns=COLUMN_RENAMES)


def _clean_strings(df):
    """
    Clean text columns without changing meaningful precinct IDs.
    """

    # County names become our consistent geographic key.
    df["county"] = (
        df["county"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    # IMPORTANT:
    # Do not remove leading zeros.
    # "1", "01", and "010" remain distinct values.
    df["precinct"] = (
        df["precinct"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    df["contest_type"] = (
        df["contest_type"]
        .astype("string")
        .str.strip()
    )

    df["contest_name"] = (
        df["contest_name"]
        .astype("string")
        .str.strip()
    )

    df["choice"] = (
        df["choice"]
        .astype("string")
        .str.strip()
    )

    df["choice_party"] = (
        df["choice_party"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    df["real_precinct"] = (
        df["real_precinct"]
        .astype("string")
        .str.strip()
        .str.upper()
    )

    return df


def _clean_dates(df):
    """
    Convert election date to pandas datetime.
    """

    df["election_date"] = pd.to_datetime(
        df["election_date"],
        errors="raise"
    )

    return df


def _clean_numeric_columns(df):
    """
    Ensure vote/count fields are numeric.
    """

    for column in NUMERIC_COLUMNS:
        df[column] = pd.to_numeric(
            df[column],
            errors="raise"
        )

    return df