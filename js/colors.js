function hexToRgb(hex) {
  hex = hex.replace("#", "");

  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, "0")).join("")
  );
}

function lightenColor(hex, amount) {
  const rgb = hexToRgb(hex);

  return rgbToHex(
    rgb.r + (255 - rgb.r) * amount,
    rgb.g + (255 - rgb.g) * amount,
    rgb.b + (255 - rgb.b) * amount,
  );
}

function createColorExpression(candidates) {
  const expression = [
    "case",

    // Precinct did not participate
    ["!", ["coalesce", ["get", "participated"], false]],
    "#adb9bd",

    // Participating precinct, but zero votes
    ["==", ["coalesce", ["get", "contest_votes"], 0], 0],
    "#71878e",

    // Tie
    ["coalesce", ["get", "is_tie"], false],
    "#355059",
  ];

  for (const [candidate, colors] of Object.entries(candidates)) {
    expression.push(
      ["==", ["get", "winner"], candidate],

      [
        "step",
        ["coalesce", ["get", "margin_of_victory"], 0],

        // 0–5 points
        colors[2],

        // 5–20 points
        5,
        colors[1],

        // 20+ points
        20,
        colors[0],
      ],
    );
  }

  expression.push("#cccccc");

  return expression;
}

export { createColorExpression, lightenColor };
