import { contests } from "./contests.js";
import { createColorExpression } from "./colors.js";

const SCOPE_ORDER = ["statewide", "district", "countywide", "local_district"];

const SCOPE_LABELS = {
  statewide: "Statewide",
  district: "Districts",
  countywide: "County-wide",
  local_district: "County Districts",
};

function getCountyFilter() {
  const params = new URLSearchParams(window.location.search);
  const county = params.get("county");

  return county ? county.trim().toUpperCase() : null;
}

function contestMatchesCounty(config, county) {
  if (!county) return true;

  // Statewide contests have every county participating.
  if (config.participatingCounties === null) return true;

  return config.participatingCounties.includes(county);
}

function countyDisplayName(county) {
  return county
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// Fetched once and reused both as the county-borders source data and
// as the shapes behind the focus mask, rather than fetching this
// (large) file twice.
const countyBordersPromise = fetch("map_data/county_borders.geojson").then(
  (response) => response.json(),
);

let countyFeaturesByName = null;

countyBordersPromise.then((data) => {
  countyFeaturesByName = new Map(
    data.features.map((feature) => [feature.properties.county_nam, feature]),
  );
});

const countyFilter = getCountyFilter();

let contestId = "nc_state_senate_district_18_rep";

if (countyFilter && !contestMatchesCounty(contests[contestId], countyFilter)) {
  const firstMatch = Object.keys(contests).find((id) =>
    contestMatchesCounty(contests[id], countyFilter),
  );

  if (firstMatch) {
    contestId = firstMatch;
  }
}

let contest = contests[contestId];

if (countyFilter) {
  const label = document.querySelector(".contest-select-label");

  if (label) {
    label.textContent = `Contests in ${countyDisplayName(countyFilter)} County`;
  }
}

// Clicking on precinct to show popup and clicking again to disable popup
let activePopup = null;

const northCarolinaBounds = [
  [-84.45, 33.75],
  [-75.3, 36.7],
];

const map = new mapboxgl.Map({
  accessToken:
    "pk.eyJ1Ijoidm5uODI0OCIsImEiOiJjbXR0NThjOWgwNjJ6MnptenMyMTZ1YXlwIn0.mrPMMzcCJNZqwzaruOdiIQ",

  container: "map",

  style: "mapbox://styles/mapbox/light-v11",

  center: [-79.0, 35.5],

  zoom: 8,

  maxBounds: northCarolinaBounds,

  minZoom: 6.3,

  maxZoom: 16,
});

map.on("load", async () => {
  buildContestSelector();
  // 1. Customize basemap

  // 2. Add precinct source
  map.addSource("precincts", {
    type: "geojson",
    data: contest.data,
  });

  // 2b. Add county borders source (reusing the same fetch the focus
  // mask uses, rather than letting Mapbox fetch this large file again)
  const countyBordersData = await countyBordersPromise;

  map.addSource("counties", {
    type: "geojson",
    data: countyBordersData,
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

  map.addLayer({
    id: "county-borders",
    type: "line",
    source: "counties",

    paint: {
      "line-color": "#000000",
      "line-width": 1.25,
      "line-opacity": 0.55,
    },
  });

  // Keep county borders above precinct fills, but below roads/labels
  map.moveLayer("county-borders", "major-roads");

  setCountyBordersEmphasis(contest.participatingCounties);

  // 5b. Add a focus mask: a translucent veil over everything outside
  // the current contest's bounds, so roads/labels/basemap outside the
  // contest area read as quieter background instead of competing with
  // the precinct choropleth. Sits above roads/labels/county-borders
  // (added last, so it renders on top of them), but has no effect
  // where there's no hole cut in it — see updateFocusMask.
  map.addSource("focus-mask", {
    type: "geojson",
    data: EMPTY_FEATURE_COLLECTION,
  });

  map.addLayer({
    id: "focus-mask",
    type: "fill",
    source: "focus-mask",

    paint: {
      "fill-color": "#f4f3f1",
      "fill-opacity": 0.65,
    },
  });

  updateFocusMask(contest);

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

  // Fit the initial view only after all label/paint overrides above are
  // applied — doing this before "load" (or before the overrides run)
  // lets Mapbox render the first frame's labels with the base style's
  // default colors, which can stick until the next zoom/pan forces a
  // re-render.
  const triangleBounds = [
    [-79.25, 35.55], // southwest
    [-78.45, 36.25], // northeast
  ];

  map.fitBounds(triangleBounds, {
    padding: 40,
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

document.getElementById("contest-title").textContent = contest.title;

document.getElementById("contest-subtitle").textContent = contest.subtitle;

function setCountyBordersEmphasis(participatingCounties) {
  if (!map.getLayer("county-borders")) return;

  // Statewide contest (or no contest context): every county is equal.
  if (!participatingCounties) {
    map.setPaintProperty("county-borders", "line-width", 1.25);
    map.setPaintProperty("county-borders", "line-opacity", 0.55);
    return;
  }

  const isParticipating = [
    "in",
    ["get", "county_nam"],
    ["literal", participatingCounties],
  ];

  map.setPaintProperty("county-borders", "line-width", [
    "case",
    isParticipating,
    1.75,
    0.5,
  ]);

  map.setPaintProperty("county-borders", "line-opacity", [
    "case",
    isParticipating,
    0.8,
    0.2,
  ]);
}

const EMPTY_FEATURE_COLLECTION = { type: "FeatureCollection", features: [] };

// Generous box around North Carolina — the outer ring of the focus
// mask. Only its extent matters (it just needs to cover the visible
// map at any zoom the app allows), not precision.
const FOCUS_MASK_OUTER_BBOX = [-90, 30, -70, 40];

// A county polygon's exterior ring(s), reversed so the fill renderer
// treats them as holes (cutouts) rather than filled area.
function exteriorRingsAsHoles(geometry) {
  if (geometry.type === "Polygon") {
    return [geometry.coordinates[0].slice().reverse()];
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.map((polygon) => polygon[0].slice().reverse());
  }

  return [];
}

// The spotlight hole is the exact union shape of the participating
// counties — same source data as the county-borders layer, so the
// mask edge lines up with the county border line itself.
function focusMaskFeature(participatingCounties) {
  if (!countyFeaturesByName) return null;

  const [outerWest, outerSouth, outerEast, outerNorth] = FOCUS_MASK_OUTER_BBOX;

  const outerRing = [
    [outerWest, outerSouth],
    [outerEast, outerSouth],
    [outerEast, outerNorth],
    [outerWest, outerNorth],
    [outerWest, outerSouth],
  ];

  const holes = participatingCounties.flatMap((county) => {
    const feature = countyFeaturesByName.get(county);

    return feature ? exteriorRingsAsHoles(feature.geometry) : [];
  });

  if (holes.length === 0) return null;

  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [outerRing, ...holes],
    },
  };
}

function updateFocusMask(contest) {
  const source = map.getSource("focus-mask");

  if (!source) return;

  // Statewide contests: every county is in play, nothing to mute.
  if (!contest.participatingCounties) {
    source.setData(EMPTY_FEATURE_COLLECTION);
    return;
  }

  // County shapes may not have finished loading yet — retry once they have.
  if (!countyFeaturesByName) {
    countyBordersPromise.then(() => updateFocusMask(contest));
    return;
  }

  const feature = focusMaskFeature(contest.participatingCounties);

  source.setData(feature || EMPTY_FEATURE_COLLECTION);
}

function buildContestSelector() {
  const select = document.getElementById("contest-select");

  select.innerHTML = "";

  const grouped = new Map();

  for (const [id, config] of Object.entries(contests)) {
    if (!contestMatchesCounty(config, countyFilter)) continue;

    const scope = config.scope || "district";

    if (!grouped.has(scope)) {
      grouped.set(scope, []);
    }

    grouped.get(scope).push([id, config]);
  }

  for (const scope of SCOPE_ORDER) {
    const entries = grouped.get(scope);

    if (!entries || entries.length === 0) continue;

    const optgroup = document.createElement("optgroup");

    optgroup.label = SCOPE_LABELS[scope] || scope;

    for (const [id, config] of entries) {
      const option = document.createElement("option");

      option.value = id;

      option.textContent = `${config.title} — ${config.subtitle}`;

      optgroup.appendChild(option);
    }

    select.appendChild(optgroup);
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

  setCountyBordersEmphasis(contest.participatingCounties);
  updateFocusMask(contest);

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
