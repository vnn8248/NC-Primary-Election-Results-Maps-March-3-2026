def assert_columns_exist(df, columns, label="DataFrame"):
    """
    Verify that required columns exist.
    """

    missing = [
        column
        for column in columns
        if column not in df.columns
    ]

    if missing:
        raise ValueError(
            f"{label} is missing required columns: {missing}"
        )


def assert_unique(df, columns, label="DataFrame"):
    """
    Verify that rows are unique on the specified columns.
    """

    duplicates = df[
        df.duplicated(columns, keep=False)
    ]

    if not duplicates.empty:
        raise ValueError(
            f"{label} is not unique on {columns}. "
            f"Found {len(duplicates)} duplicate rows."
        )


def assert_no_missing(df, columns, label="DataFrame"):
    """
    Verify that specified columns contain no missing values.
    """

    missing_counts = (
        df[columns]
        .isna()
        .sum()
    )

    missing_counts = missing_counts[
        missing_counts > 0
    ]

    if not missing_counts.empty:
        raise ValueError(
            f"{label} contains missing values:\n"
            f"{missing_counts.to_string()}"
        )


def assert_not_empty(df, label="DataFrame"):
    """
    Verify that a DataFrame contains at least one row.
    """

    if df.empty:
        raise ValueError(
            f"{label} contains no rows."
        )

def assert_values_in(df, column, allowed_values, label="DataFrame"):
    """
    Verify that non-missing values belong to an expected set.
    """

    unexpected = set(
        df[column]
        .dropna()
        .unique()
    ) - set(allowed_values)

    if unexpected:
        raise ValueError(
            f"{label} contains unexpected values "
            f"in '{column}': {sorted(unexpected)}"
        )