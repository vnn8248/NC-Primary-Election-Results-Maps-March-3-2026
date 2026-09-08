import { contests } from "./contests.js";
import { createColorExpression, lightenColor } from "./colors.js";

let contestId = "nc_state_senate_district_18_rep";

let contest = contests[contestId];

// Clicking on precinct to show popup and clicking again to disable popup
let activePopup = null;

const northCarolinaBounds = [
  [-84.45, 33.75],
  [-75.3, 36.7],
];

const map = new mapboxgl.Map({
  accessToken:
    "pk.eyJ1Ijoidm5uODI0OCIsImEiOiJja21jY21kZ2owNHJwMm9wMnN1MW1weHBvIn0.iVbVfO8g55_PijI4265GNw",

  container: "map",

  style: "mapbox://styles/mapbox/light-v11",

  center: [-79.0, 35.5],

  zoom: 8,

  maxBounds: northCarolinaBounds,

  minZoom: 6.3,

  maxZoom: 16,
});

map.on("load", () => {
  buildContestSelector();
  // 1. Customize basemap

  // 2. Add precinct source
  map.addSource("precincts", {
    type: "geojson",
    data: contest.data,
  });

  // 3. Add precinct fill
  map.addLayer({
    id: "precinct-fills",
    type: "fill",
    source: "precincts",
    paint: {
      "fill-color": createColorExpression(contest.candidates),
      "fill-opacity": 0.8,
    },
  });

  // 4. Add precinct borders
  map.addLayer({
    id: "precinct-borders",
    type: "line",
    source: "precincts",
    paint: {
      "line-color": "#ffffff",
      "line-width": 0.25,
      "line-opacity": 0.7,
    },
    filter: ["==", ["get", "participated"], true],
  });

  map.addLayer({
    id: "precinct-hover",
    type: "line",
    source: "precincts",
    filter: ["==", ["get", "participated"], true],
    paint: {
      "line-color": "#333333",
      "line-width": 1,
      "line-opacity": 1,
    },
  });

  // Add major roads layer on top of precincts
  map.addLayer({
    id: "major-roads",

    type: "line",

    source: "composite",

    "source-layer": "road",

    minzoom: 5,

    filter: [
      "all",

      ["match", ["get", "class"], ["motorway", "trunk"], true, false],

      ["match", ["get", "structure"], ["none", "ford"], true, false],
    ],

    layout: {
      "line-cap": "round",
      "line-join": "round",
    },

    paint: {
      "line-color": "#ffffff",

      "line-opacity": 0.7,

      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],

        7,
        ["match", ["get", "class"], "motorway", 1, "trunk", 0.5, 1],

        10,
        ["match", ["get", "class"], "motorway", 2, "trunk", 1.5, 1],

        13,
        ["match", ["get", "class"], "motorway", 3, "trunk", 2, 1],
      ],
    },
  });

  map.addLayer({
    id: "major-road-labels",
    type: "symbol",
    source: "composite",
    "source-layer": "road",

    minzoom: 9,

    filter: [
      "all",
      ["has", "name"],
      ["match", ["get", "class"], ["motorway", "trunk"], true, false],
    ],

    layout: {
      "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],

      "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],

      "symbol-placement": "line",

      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        9,
        9,
        11,
        10,
        14,
        12,
        18,
        15,
      ],

      "text-padding": 2,

      "text-max-angle": 30,

      "text-letter-spacing": 0.01,
    },

    paint: {
      "text-color": "#555555",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
    },
  });

  map.setPaintProperty("road-simple", "line-opacity", 0.65);

  map.setPaintProperty("road-simple", "line-color", "#8a8a8a");

  map.setPaintProperty("settlement-major-label", "text-color", "#000000");

  map.setPaintProperty("settlement-major-label", "text-halo-color", "#ffffff");

  map.setPaintProperty("settlement-major-label", "text-halo-width", 1);

  map.setLayoutProperty("settlement-major-label", "text-size", [
    "interpolate",
    ["linear"],
    ["zoom"],

    7,
    12,
    9,
    15,
    11,
    18,
    13,
    20,
  ]);

  map.setPaintProperty("settlement-minor-label", "text-color", "#000000");

  map.setPaintProperty("settlement-minor-label", "text-halo-color", "#ffffff");

  map.setPaintProperty("settlement-minor-label", "text-halo-width", 1.5);

  map.setPaintProperty("settlement-subdivision-label", "text-color", "#000000");

  map.setPaintProperty(
    "settlement-subdivision-label",
    "text-halo-color",
    "#ffffff",
  );

  map.setPaintProperty("settlement-subdivision-label", "text-halo-width", 1);

  // 5. Move labels to top
  map.moveLayer("settlement-subdivision-label");
  map.moveLayer("settlement-minor-label");
  map.moveLayer("settlement-major-label");
  map.moveLayer("major-road-labels");
  map.moveLayer("precinct-hover");

  //   Don't have county borders in the data, so this is commented out for now. If you add a county borders layer, uncomment this code to add it to the map.
  //   map.addLayer({
  //     id: "county-borders",
  //     type: "line",
  //     source: "counties",

  //     paint: {
  //       "line-color": "#000000",
  //       "line-width": 2,
  //       "line-opacity": 0.9,
  //     },
  //   });

  // 6. Other map setup
  map.on("mouseenter", "precinct-fills", (e) => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "precinct-fills", () => {
    map.getCanvas().style.cursor = "";
  });

  map.on("click", "precinct-fills", (e) => {
    const properties = e.features[0].properties;
    if (properties.participated !== true) {
      return;
    }

    if (activePopup) {
      activePopup.remove();
      activePopup = null;
      return;
    }

    activePopup = new mapboxgl.Popup({
      maxWidth: "340px",
      closeButton: true,
      closeOnClick: true,
    })
      .setLngLat(e.lngLat)
      .setHTML(buildPopupHTML(properties))
      .addTo(map);
  });

  activePopup?.on("close", () => {
    activePopup = null;
  });
});

// Highlight precinct border on hover
map.on("mousemove", "precinct-fills", (e) => {
  if (!e.features.length) return;

  const feature = e.features[0];

  if (feature.properties.participated !== true) {
    map.setFilter("precinct-hover", ["==", ["get", "map_key"], ""]);

    map.getCanvas().style.cursor = "";

    return;
  }

  map.setFilter("precinct-hover", [
    "==",
    ["get", "map_key"],
    feature.properties.map_key,
  ]);

  map.getCanvas().style.cursor = "pointer";
});

// Remove highlight precinct border on hover
map.on("mouseleave", "precinct-fills", (e) => {
  map.setFilter("precinct-hover", ["==", ["get", "map_key"], ""]);

  map.getCanvas().style.cursor = "";
});

map.addControl(new mapboxgl.NavigationControl(), "top-right");

map.addControl(
  new mapboxgl.ScaleControl({
    maxWidth: 120,
    unit: "miles",
  }),
  "bottom-right",
);

const triangleBounds = [
  [-79.25, 35.55], // southwest
  [-78.45, 36.25], // northeast
];

map.fitBounds(triangleBounds, {
  padding: 40,
});

document.getElementById("contest-title").textContent = contest.title;

document.getElementById("contest-subtitle").textContent = contest.subtitle;

function buildContestSelector() {
  const select = document.getElementById("contest-select");

  select.innerHTML = "";

  for (const [id, config] of Object.entries(contests)) {
    const option = document.createElement("option");

    option.value = id;

    option.textContent = `${config.title} — ${config.subtitle}`;

    select.appendChild(option);
  }

  select.value = contestId;
}

function buildMarginExplanation(candidates) {
  const firstCandidate = Object.entries(candidates)[0];

  if (!firstCandidate) return;

  const [candidate, colors] = firstCandidate;

  const explanation = document.createElement("div");

  explanation.className = "margin-explanation";

  explanation.innerHTML = `
    <div class="margin-arrow-scale">

      <span
        class="arrow-swatch"
        style="background:${colors[2]}"
      ></span>

      <span
        class="arrow-swatch"
        style="background:${colors[1]}"
      ></span>

      <span
        class="arrow-swatch"
        style="background:${colors[0]}"
      ></span>

      <span class="arrow-line">→</span>

    </div>

    <div class="margin-explanation-text">
      Darker colors indicate a larger margin of victory.
    </div>
  `;

  document.getElementById("candidate-legend").appendChild(explanation);
}

function buildCandidateLegend(contest) {
  const container = document.getElementById("candidate-legend");

  container.innerHTML = "";

  const candidates = contest.candidates;
  const results = contest.results;

  // Column headers
  const header = document.createElement("div");

  header.className = "candidate-result-header";

  header.innerHTML = `
    <span>Candidate</span>
    <span>Votes</span>
    <span>Share</span>
  `;

  container.appendChild(header);

  // Find overall winner by vote total
  const winningResult = results.reduce((leader, result) => {
    return Number(result.votes) > Number(leader.votes) ? result : leader;
  });

  for (const [candidate, colors] of Object.entries(candidates)) {
    // Match this candidate to their result row
    const result = results.find((result) => result.candidate === candidate);

    if (!result) continue;

    const isWinner = result.candidate === winningResult.candidate;

    const row = document.createElement("div");

    row.className = `candidate-legend-row${isWinner ? " contest-winner" : ""}`;

    row.innerHTML = `
      <div class="candidate-result-row">

        <span class="candidate-name">
          ${candidate}
        </span>

        <span class="candidate-total">
          ${Number(result.votes).toLocaleString()}
        </span>

        <span class="candidate-share">
          ${Number(result.share).toFixed(1)}%
        </span>

      </div>

      <div class="candidate-scale">

        <div class="margin-bin">
          <span
            class="candidate-swatch"
            style="background:${colors[2]}"
          ></span>

          <span class="margin-label">
            0–5 pts
          </span>
        </div>

        <div class="margin-bin">
          <span
            class="candidate-swatch"
            style="background:${colors[1]}"
          ></span>

          <span class="margin-label">
            5–20 pts
          </span>
        </div>

        <div class="margin-bin">
          <span
            class="candidate-swatch"
            style="background:${colors[0]}"
          ></span>

          <span class="margin-label">
            20+ pts
          </span>
        </div>

      </div>
    `;

    container.appendChild(row);
  }

  buildMarginExplanation(contest.candidates);
}

buildCandidateLegend(contest);

function buildPopupHTML(properties) {
  let results = properties.results;

  if (typeof results === "string") {
    results = JSON.parse(results);
  }

  results = results || [];

  let rows = results
    .map((result) => {
      const isWinner = result.candidate === properties.winner;

      return `
        <tr class="${isWinner ? "contest-winner" : ""}">
            <td>
                ${isWinner && properties.is_tie !== true ? "<strong>" : ""}
                ${result.candidate}
                ${isWinner && properties.is_tie !== true ? "</strong>" : ""}
            </td>

            <td>
                ${Number(result.votes).toLocaleString()}
            </td>

            <td>
                ${Number(result.share).toFixed(1)}%
            </td>
        </tr>
      `;
    })
    .join("");

  return `
        <div class="popup">

            <div class="popup-county">
                ${properties.county} County
            </div>

            <h3>
                Precinct ${properties.precinct}
            </h3>

            <h3>${properties.enr_desc !== properties.precinct ? properties.enr_desc : ""}</h3>

            <table class="results-table">

                <thead>
                    <tr>
                        <th>Candidate</th>
                        <th>Votes</th>
                        <th>Share</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>

            </table>

            <div class="popup-summary">

                <div>
                    <span>Margin of Victory: </span>
                    <strong>
                        ${properties.contest_votes == 0 ? "No votes cast in this contest" : properties.is_tie ? "Tie" : Number(properties.margin_of_victory).toFixed(1) + " points"}
                    </strong>
                </div>

                <div>
                    <span>Total Votes: </span>
                    <strong>
                        ${Number(properties.contest_votes).toLocaleString()}
                    </strong>
                </div>

            </div>

        </div>
    `;
}

async function loadContest(id) {
  contestId = id;
  contest = contests[contestId];

  // Close existing popup
  if (activePopup) {
    activePopup.remove();
    activePopup = null;
  }

  // Clear hover
  map.setFilter("precinct-hover", ["==", ["get", "map_key"], ""]);

  // Change GeoJSON
  map.getSource("precincts").setData(contest.data);

  // Rebuild election colors
  map.setPaintProperty(
    "precinct-fills",
    "fill-color",
    createColorExpression(contest.candidates),
  );

  // Update title
  document.getElementById("contest-title").textContent = contest.title;

  document.getElementById("contest-subtitle").textContent = contest.subtitle;

  // Rebuild legend
  buildCandidateLegend(contest);
}

document.getElementById("contest-select").addEventListener("change", (e) => {
  loadContest(e.target.value);

  if (contest.bounds) {
    map.fitBounds(contest.bounds, {
      padding: {
        top: 60,
        bottom: 60,
        left: 340,
        right: 60,
      },
      maxZoom: 11,
      duration: 700,
    });
  }
});

document.getElementById("contest-select").addEventListener("change", (e) => {
  loadContest(e.target.value);
});
