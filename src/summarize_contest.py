import pandas as pd


def summarize_precinct_results(df):
    """
    Summarize candidate results within each precinct.

    Returns one row per:
        county + precinct + candidate

    Includes:
        candidate_votes
        precinct_votes
        vote_share
    """

    results = (
        df.groupby(
            [
                "county",
                "precinct",
                "choice",
            ],
            dropna=False,
            as_index=False,
        )
        .agg(
            candidate_votes=("total_votes", "sum")
        )
    )

    results["contest_votes"] = results.groupby(["county", "precinct"])["candidate_votes"].transform("sum")

    results["vote_share"] = (results["candidate_votes"] / results["contest_votes"]) * 100

    results = results.sort_values(["county", "precinct", "candidate_votes"], ascending=[True, True, False]).reset_index(drop=True)

    return results

def summarize_precinct_winners(results):
    """
    Calculate the winner and margin of victory
    for each precinct.

    Returns one row per county + precinct with:
        winner
        winner_votes
        winner_share
        runner_up
        runner_up_votes
        runner_up_share
        contest_votes
        margin_of_victory
        is_tie
    """

    summaries = []

    for (county, precinct), group in results.groupby(["county", "precinct"]):
        group = group.sort_values("candidate_votes", ascending=False)

        first = group.iloc[0]
        second = group.iloc[1] if len(group) > 1 else None

        winner = first["choice"]
        winner_votes = first["candidate_votes"]
        winner_share = first["vote_share"] 
        contest_votes = first["contest_votes"]

        if second is not None:
            runner_up = second["choice"]
            runner_up_votes = second["candidate_votes"]
            runner_up_share = second["vote_share"]
        else:
            runner_up = None
            runner_up_votes = 0
            runner_up_share = 0.0

        margin_of_victory = (winner_share - runner_up_share)

        is_tie = (contest_votes > 0 and winner_votes == runner_up_votes)

        summaries.append({
            "county": county,
            "precinct": precinct,
            "winner": winner,
            "winner_votes": winner_votes,
            "winner_share": winner_share,
            "runner_up": runner_up,
            "runner_up_votes": runner_up_votes,
            "runner_up_share": runner_up_share,
            "contest_votes": contest_votes,
            "margin_of_victory": margin_of_victory,
            "is_tie": is_tie,
        })

    return pd.DataFrame(summaries)


def build_precinct_candidate_lists(results):
    """
    Convert candidate-level precinct results into
    a list of dictionaries for each precinct.

    This is useful for map popups.

    Example:
        [
            {
                "candidate": "Candidate A",
                "votes": 100,
                "share": 0.50,
            },
            {
                "candidate": "Candidate B",
                "votes": 60,
                "share": 0.30,
            },
        ]
    """

    precinct_results = (
        results.groupby(
            [
                "county",
                "precinct",
            ],
            sort=False,
        )
        .apply(
            lambda group: [
                {
                    "candidate": row["choice"],
                    "votes": int(row["candidate_votes"]),
                    "share": row["vote_share"] if pd.notnull(row["vote_share"]) else "0",
                }
                for _, row in group.iterrows()
            ],
            include_groups=False,
        )
        .rename("results")
        .reset_index()
    )

    return precinct_results


def summarize_contest_results(df):
    """
    Summarize candidate results across the entire contest.

    Returns one row per candidate with:
        candidate_votes
        contest_votes
        vote_share
    """

    results = (
        df.groupby(
            "choice",
            dropna=False,
            as_index=False,
        )
        .agg(
            candidate_votes=("total_votes", "sum")
        )
    )

    contest_votes = results["candidate_votes"].sum()

    results["contest_votes"] = contest_votes

    results["vote_share"] = (
        (results["candidate_votes"]
        / contest_votes) * 100
    ) if contest_votes > 0 else 0

    results = results.sort_values(
        "candidate_votes",
        ascending=False,
    ).reset_index(drop=True)

    return results