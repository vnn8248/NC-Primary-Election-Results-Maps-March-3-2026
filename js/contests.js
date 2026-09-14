const contests = {
  us_house_of_representatives_district_04_dem: {
    title: "U.S. House District 4",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_04_dem.geojson",
    bounds: [
      [-79.37018899068106, 35.54047599983429],
      [-78.69931599106128, 36.243444999723174],
    ],
    participatingCounties: ["CHATHAM", "DURHAM", "ORANGE", "WAKE"],
    candidates: {
      "Valerie P. Foushee": ["#e3974e", "#eea941", "#e7c557"],
      "Nida Allam": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Mary Patterson": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Valerie P. Foushee",
        votes: 61776,
        share: 49.16318491106602,
      },
      {
        candidate: "Nida Allam",
        votes: 60605,
        share: 48.23126815486849,
      },
      {
        candidate: "Mary Patterson",
        votes: 3274,
        share: 2.605546934065497,
      },
    ],
  },
  nc_state_senate_district_17_rep: {
    title: "N.C. State Senate District 17",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_17_rep.geojson",
    bounds: [
      [-78.95593299087653, 35.62147399985783],
      [-78.74121599094627, 35.92755199976352],
    ],
    participatingCounties: ["WAKE"],
    candidates: {
      "Shirley Johnson": ["#e3974e", "#eea941", "#e7c557"],
      "Sarah Al-Baghdadi": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Shirley Johnson",
        votes: 4331,
        share: 90.09777407946744,
      },
      {
        candidate: "Sarah Al-Baghdadi",
        votes: 476,
        share: 9.902225920532556,
      },
    ],
  },
  nc_state_senate_district_18_rep: {
    title: "N.C. State Senate District 18",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_18_rep.geojson",
    bounds: [
      [-78.80762299092058, 35.783509999663366],
      [-78.25371099138387, 36.54254100036947],
    ],
    participatingCounties: ["GRANVILLE", "WAKE"],
    candidates: {
      "Chris Stock": ["#e3974e", "#eea941", "#e7c557"],
      "Cheryl Caulfield": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chris Stock",
        votes: 7636,
        share: 60.564720812182735,
      },
      {
        candidate: "Cheryl Caulfield",
        votes: 4972,
        share: 39.43527918781726,
      },
    ],
  },
  nc_house_of_representatives_district_035_rep: {
    title: "N.C. House District 35",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_035_rep.geojson",
    bounds: [
      [-78.75428399092935, 35.78358200027878],
      [-78.31048799160175, 36.076442999977246],
    ],
    participatingCounties: ["WAKE"],
    candidates: {
      "Mike Schietzelt": ["#e3974e", "#eea941", "#e7c557"],
      "Michele Joyner-Dinwiddie": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mike Schietzelt",
        votes: 5047,
        share: 90.98611862267892,
      },
      {
        candidate: "Michele Joyner-Dinwiddie",
        votes: 500,
        share: 9.013881377321074,
      },
    ],
  },
  us_senate_rep: {
    title: "U.S. Senate Republican Primary",
    subtitle: "Republican Primary",
    scope: "statewide",
    data: "map_data/us_senate_rep.geojson",
    bounds: [
      [-84.3218209914704, 33.75287799999573],
      [-75.4001189911457, 36.588136999894786],
    ],
    participatingCounties: null,
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
        votes: 405140,
        share: 64.57402247993318,
      },
      {
        candidate: "Donald M. (Don) Brown",
        votes: 97891,
        share: 15.602546365659128,
      },
      {
        candidate: "Thomas Johnson",
        votes: 35534,
        share: 5.6636553161918,
      },
      {
        candidate: "Michele Morrow",
        votes: 35065,
        share: 5.588902844100452,
      },
      {
        candidate: "Elizabeth A. Temple",
        votes: 23892,
        share: 3.8080726294381297,
      },
      {
        candidate: "Richard Dansie",
        votes: 14996,
        share: 2.3901664637139706,
      },
      {
        candidate: "Margot Dupre",
        votes: 14886,
        share: 2.3726339009633346,
      },
    ],
  },
  us_senate_dem: {
    title: "U.S. Senate Democratic Primary",
    subtitle: "Democratic Primary",
    scope: "statewide",
    data: "map_data/us_senate_dem.geojson",
    bounds: [
      [-84.3218209914704, 33.75287799999573],
      [-75.4001189911457, 36.588136999894786],
    ],
    participatingCounties: null,
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
        votes: 761345,
        share: 91.97709467173256,
      },
      {
        candidate: "Justin E. Dues",
        votes: 22295,
        share: 2.6934298192097903,
      },
      {
        candidate: "Marcus W. Williams",
        votes: 20336,
        share: 2.456765588851774,
      },
      {
        candidate: "Daryl Farrow",
        votes: 9727,
        share: 1.1751061606393196,
      },
      {
        candidate: "Orrick Quick",
        votes: 7275,
        share: 0.8788832444382697,
      },
      {
        candidate: "Robert Colon",
        votes: 6777,
        share: 0.8187205151282686,
      },
    ],
  },
  durham_county_sheriff_dem: {
    title: "Durham County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/durham_county_sheriff_dem.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    candidates: {
      "Clarence F. Birkhead": ["#e3974e", "#eea941", "#e7c557"],
      "Johnny D. Hawkins": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Clarence F. Birkhead",
        votes: 49914,
        share: 85.75257271462195,
      },
      {
        candidate: "Johnny D. Hawkins",
        votes: 8293,
        share: 14.247427285378048,
      },
    ],
  },
  durham_county_board_of_education_district_02: {
    title: "Durham County Board Of Education District 02",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/durham_county_board_of_education_district_02.geojson",
    bounds: [
      [-78.9583799916683, 35.90250000038127],
      [-78.8857599916494, 36.03723999993787],
    ],
    participatingCounties: ["DURHAM"],
    candidates: {
      "Nadeen Bir": ["#e3974e", "#eea941", "#e7c557"],
      "Bettina Umstead": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Rachel Waltz": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Nadeen Bir",
        votes: 9415,
        share: 61.23975543124756,
      },
      {
        candidate: "Bettina Umstead",
        votes: 4169,
        share: 27.1172108755041,
      },
      {
        candidate: "Rachel Waltz",
        votes: 1691,
        share: 10.99908937166645,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 99,
        share: 0.6439443215818915,
      },
    ],
  },
  graham_county_sheriff_rep: {
    title: "Graham County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/graham_county_sheriff_rep.geojson",
    bounds: [
      [-84.03888099163704, 35.216893000137176],
      [-83.58238599085233, 35.466513999923585],
    ],
    participatingCounties: ["GRAHAM"],
    candidates: {
      "Caleb Stiles": ["#e3974e", "#eea941", "#e7c557"],
      "Cody George": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Joseph Jones": ["#af89be", "#b29fde", "#b8b0cb"],
      "Terry Grey": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Leon Allen": ["#c84f4a", "#df7f7b", "#edb3b0"],
      "Mitch Millsaps": ["#ad8731", "#d7b85d", "#ead99a"],
    },
    results: [
      {
        candidate: "Caleb Stiles",
        votes: 655,
        share: 33.64149974319466,
      },
      {
        candidate: "Cody George",
        votes: 490,
        share: 25.166923472008214,
      },
      {
        candidate: "Joseph Jones",
        votes: 385,
        share: 19.774011299435028,
      },
      {
        candidate: "Terry Grey",
        votes: 223,
        share: 11.453518233179247,
      },
      {
        candidate: "Leon Allen",
        votes: 125,
        share: 6.4201335387776055,
      },
      {
        candidate: "Mitch Millsaps",
        votes: 69,
        share: 3.5439137134052388,
      },
    ],
  },
};

export { contests };
