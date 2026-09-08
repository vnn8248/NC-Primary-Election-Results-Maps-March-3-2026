# Methodology

## Precinct results

Election results are filtered to real precinct reporting units before aggregation.

Candidate votes are summed within each county and precinct.

For each precinct, the pipeline calculates:

- candidate votes
- contest votes
- vote share
- winner
- runner-up
- margin of victory
- tie status

## Participation

A precinct is marked as `participated = true` when a contest result successfully joins to that precinct polygon.

For district and local contests, precincts in participating counties may remain in the map even if they did not participate in the contest. These are displayed separately from participating precincts.

## Ties

A precinct is marked as a tie when the top two candidates have the same vote total and at least one vote was cast.

## Zero-vote precincts

Participating precincts with zero contest votes are treated separately from precincts that did not participate.

## Map styling

Candidate color and margin styling are presentation decisions handled in JavaScript rather than in the core election-processing pipeline.

Opacity or voter-density encoding is not currently part of the standard pipeline.
