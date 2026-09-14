"""
Fixed candidate color palette, assigned by descending vote-total rank
rather than by candidate identity. Colors are lifted verbatim from the
existing us_senate_rep entry in js/contests.js (7 candidates — the
observed max among eligible contests).

Each entry is [dark, mid, light] — used for margin-of-victory shading
(20+ points, 5-20 points, 0-5 points).
"""

PALETTE = [
    ["#e3974e", "#eea941", "#e7c557"],
    ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    ["#af89be", "#b29fde", "#b8b0cb"],
    ["#3278ad", "#72a9cf", "#b7d4e8"],
    ["#c84f4a", "#df7f7b", "#edb3b0"],
    ["#ad8731", "#d7b85d", "#ead99a"],
    ["#287d7d", "#61aaa7", "#a5d6d2"],
]


def colors_for_rank(rank):
    """
    Colors for the candidate at this 0-indexed descending vote-total
    rank (0 = most votes). Cycles with a warning if there are more
    candidates than palette entries.
    """

    if rank >= len(PALETTE):
        print(
            f"Warning: candidate rank {rank} exceeds palette size "
            f"({len(PALETTE)}); reusing colors."
        )

    return PALETTE[rank % len(PALETTE)]
