from src.validation import (
    assert_columns_exist,
    assert_not_empty,
    assert_values_in,
)


REQUIRED_COLUMNS = [
    "contest_name",
    "county",
    "precinct",
    "real_precinct",
]


def filter_contest(df, contest_name, real_precincts_only=True):
    """
    Filter cleaned election results to one contest.

    Parameters
    ----------
    df : pandas.DataFrame
        Cleaned election results.

    contest_name : str
        Exact contest name to select.

    real_precincts_only : bool, default True
        If True, keep only rows where real_precinct == "Y".

    Returns
    -------
    pandas.DataFrame
        Rows belonging to the selected contest.
    """

    assert_columns_exist(
        df,
        REQUIRED_COLUMNS,
        label="Election results",
    )

    assert_values_in(
        df,
        "real_precinct",
        ["Y", "N"],
        label="Election results",
    )

    contest = df[df["contest_name"] == contest_name].copy()

    assert_not_empty(
        contest,
        label=f"Contest '{contest_name}'",
    )

    if real_precincts_only:
        contest = contest[contest["real_precinct"] == "Y"].copy()

        assert_not_empty(
            contest,
            label=f"Real precinct rows for '{contest_name}'",
        )

    return contest