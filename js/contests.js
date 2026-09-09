const contests = {
  us_house_of_representatives_district_04_dem: {
    title: "U.S. House District 4",
    subtitle: "Democratic Primary",
    data: "data/us_house_of_representatives_district_04_dem.geojson",
    bounds: [
      [-79.37018899068106, 35.54047599983429],
      [-78.69931599106128, 36.243444999723174],
    ],
    candidates: {
      "Nida Allam": ["#e3974e", "#eea941", "#e7c557"],
      "Valerie P. Foushee": ["#af89be", "#b29fde", "#b8b0cb"],
      "Mary Patterson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Nida Allam",
        votes: 33684,
        share: 49.978485689274,
      },
      {
        candidate: "Valerie P. Foushee",
        votes: 31760,
        share: 47.12375921776933,
      },
      {
        candidate: "Mary Patterson",
        votes: 1953,
        share: 2.89775509295666,
      },
    ],
  },
  nc_state_senate_district_17_rep: {
    title: "N.C. State Senate District 17",
    subtitle: "Republican Primary",
    data: "data/nc_state_senate_district_17_rep.geojson",
    bounds: [
      [-78.95593299087653, 35.62147399985783],
      [-78.74121599094627, 35.92755199976352],
    ],
    candidates: {
      "Shirley Johnson": ["#e3974e", "#eea941", "#e7c557"],
      "Sarah Al-Baghdadi": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Shirley Johnson",
        votes: 2906,
        share: 90.926158,
      },
      {
        candidate: "Sarah Al-Baghdadi",
        votes: 290,
        share: 9.073842,
      },
    ],
  },
  nc_state_senate_district_18_rep: {
    title: "N.C. State Senate District 18",
    subtitle: "Republican Primary",
    data: "data/nc_state_senate_district_18_rep.geojson",
    bounds: [
      [-78.80762299092058, 35.783509999663366],
      [-78.25371099138387, 36.54254100036947],
    ],
    candidates: {
      "Chris Stock": ["#e3974e", "#eea941", "#e7c557"],
      "Cheryl Caulfield": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Chris Stock",
        votes: 6048,
        share: 61.632528278813815,
      },
      {
        candidate: "Cheryl Caulfield",
        votes: 3765,
        share: 38.367471721186185,
      },
    ],
  },
  nc_house_of_representatives_district_035_rep: {
    title: "N.C. House District 35",
    subtitle: "Republican Primary",
    data: "data/nc_house_of_representatives_district_035_rep.geojson",
    bounds: [
      [-78.75428399092935, 35.78358200027878],
      [-78.31048799160175, 36.076442999977246],
    ],
    candidates: {
      "Mike Schietzelt": ["#e3974e", "#eea941", "#e7c557"],
      "Michele Joyner-Dinwiddie": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Mike Schietzelt",
        votes: 3242,
        share: 91.22115925717502,
      },
      {
        candidate: "Michele Joyner-Dinwiddie",
        votes: 312,
        share: 8.77884074282498,
      },
    ],
  },
  us_senate_rep_contest_summary: {
    title: "U.S. Senate Republican Primary",
    subtitle: "Republican Primary",
    data: "data/us_senate_rep.geojson",
    bounds: [
      [-84.3218209914704, 33.75287799999573],
      [-75.4001189911457, 36.588136999894786],
    ],
    candidates: {
      "Michael Whatley": ["#e3974e", "#eea941", "#e7c557"],
      "Donald M. (Don) Brown": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Thomas Johnson": ["#af89be", "#b29fde", "#b8b0cb"],
      "Michele Morrow": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Elizabeth A. Temple": ["#c84f4a", "#df7f7b", "#edb3b0"],
      "Richard Dansie": ["#ad8731", "#d7b85d", "#ead99a"],
      "Margot Dupre": ["#287d7d", "#61aaa7", "#a5d6d2"],
    },
    results: [
      {
        candidate: "Michael Whatley",
        votes: 340816,
        share: 64.647905,
      },
      {
        candidate: "Donald M. (Don) Brown",
        votes: 82382,
        share: 15.626683,
      },
      {
        candidate: "Thomas Johnson",
        votes: 29501,
        share: 5.595916,
      },
      {
        candidate: "Michele Morrow",
        votes: 29371,
        share: 5.571257,
      },
      {
        candidate: "Elizabeth A. Temple",
        votes: 20047,
        share: 3.802628,
      },
      {
        candidate: "Richard Dansie",
        votes: 12654,
        share: 2.400282,
      },
      {
        candidate: "Margot Dupre",
        votes: 12417,
        share: 2.355327,
      },
    ],
  },
  us_senate_dem_contest_summary: {
    title: "U.S. Senate Democratic Primary",
    subtitle: "Democratic Primary",
    data: "data/us_senate_dem.geojson",
    bounds: [
      [-84.3218209914704, 33.75287799999573],
      [-75.4001189911457, 36.588136999894786],
    ],
    candidates: {
      "Roy Cooper": ["#e3974e", "#eea941", "#e7c557"],
      "Justin E. Dues": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Marcus W. Williams": ["#af89be", "#b29fde", "#b8b0cb"],
      "Daryl Farrow": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Orrick Quick": ["#c84f4a", "#df7f7b", "#edb3b0"],
      "Robert Colon": ["#ad8731", "#d7b85d", "#ead99a"],
    },
    results: [
      {
        candidate: "Roy Cooper",
        votes: 577401,
        share: 91.35600299983861,
      },
      {
        candidate: "Justin E. Dues",
        votes: 18171,
        share: 2.8750035599350667,
      },
      {
        candidate: "Marcus W. Williams",
        votes: 16809,
        share: 2.6595088238923856,
      },
      {
        candidate: "Daryl Farrow",
        votes: 8250,
        share: 1.3053095244876067,
      },
      {
        candidate: "Orrick Quick",
        votes: 5908,
        share: 0.9347598388694278,
      },
      {
        candidate: "Robert Colon",
        votes: 5495,
        share: 0.8694152529768968,
      },
    ],
  },
  durham_county_sheriff_dem: {
    title: "Durham County Sheriff",
    subtitle: "Democratic Primary",
    data: "data/durham_county_sheriff_dem.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.69931599106128, 36.239319999857365],
    ],
    candidates: {
      "Clarence F. Birkhead": ["#e3974e", "#eea941", "#e7c557"],
      "Johnny D. Hawkins": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Clarence F. Birkhead",
        votes: 22807,
        share: 83.71691810740374,
      },
      {
        candidate: "Johnny D. Hawkins",
        votes: 4436,
        share: 16.283081892596265,
      },
    ],
  },
  durham_county_board_of_education_district_02: {
    title: "Durham County Board Of Education District 02",
    subtitle: "Vote For 1",
    data: "data/durham_county_board_of_education_district_02.geojson",
    bounds: [
      [-78.9583799916683, 35.90250000038127],
      [-78.8857599916494, 36.03723999993787],
    ],
    candidates: {
      "Nadeen Bir": ["#e3974e", "#eea941", "#e7c557"],
      "Bettina Umstead": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Rachel Waltz": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Nadeen Bir",
        votes: 5163,
        share: 65.09077155824508,
      },
      {
        candidate: "Bettina Umstead",
        votes: 1860,
        share: 23.44931921331316,
      },
      {
        candidate: "Rachel Waltz",
        votes: 879,
        share: 11.081694402420576,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 30,
        share: 0.37821482602118006,
      },
    ],
  },
};

export { contests };
