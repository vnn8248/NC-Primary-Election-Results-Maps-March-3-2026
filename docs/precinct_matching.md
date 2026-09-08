# Precinct matching

Election results precinct IDs do not always match the precinct IDs used in the statewide precinct geography.

Matching is done using county + precinct ID.

Raw precinct IDs are preserved. Normalization is used only to discover safe candidate matches.

## Match methods

Crosswalk records use these match methods:

- `exact` — result and geography IDs are identical
- `leading_zero` — numeric IDs differ only by leading zeros
- `decimal_leading_zero` — decimal precinct IDs differ only by leading zeros before the decimal
- `no_geometry` — a valid election result unit has no corresponding precinct polygon

Examples:

| Results ID | Geography ID | Match method         |
| ---------- | ------------ | -------------------- |
| `01-01`    | `01-01`      | exact                |
| `1`        | `01`         | leading_zero         |
| `1.1`      | `01.1`       | decimal_leading_zero |
| `CV`       | —            | no_geometry          |

Ambiguous normalized matches are not accepted automatically and require review.

Crosswalk files are versioned by election/geography vintage.
