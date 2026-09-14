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
    focusMaskData: "map_data/us_house_of_representatives_district_04_dem_focus_mask.geojson",
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
    focusMaskData: "map_data/nc_state_senate_district_17_rep_focus_mask.geojson",
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
      [-78.80761199117887, 35.783509999663366],
      [-78.253910991134, 36.54254100036947],
    ],
    participatingCounties: ["GRANVILLE", "WAKE"],
    focusMaskData: "map_data/nc_state_senate_district_18_rep_focus_mask.geojson",
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
    focusMaskData: "map_data/nc_house_of_representatives_district_035_rep_focus_mask.geojson",
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
      [-84.3218209914704, 33.75289899980945],
      [-75.4001189911457, 36.588136999894786],
    ],
    participatingCounties: null,
    focusMaskData: null,
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
      [-84.3218209914704, 33.75289899980945],
      [-75.4001189911457, 36.588136999894786],
    ],
    participatingCounties: null,
    focusMaskData: null,
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
    focusMaskData: "map_data/durham_county_sheriff_dem_focus_mask.geojson",
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
      [-78.95831399107372, 35.902500000388855],
      [-78.88596299078158, 36.03723999993787],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/durham_county_board_of_education_district_02_focus_mask.geojson",
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
      [-84.03888099163704, 35.21691200003398],
      [-83.58238599085233, 35.46646700062739],
    ],
    participatingCounties: ["GRAHAM"],
    focusMaskData: "map_data/graham_county_sheriff_rep_focus_mask.geojson",
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
  alamance_county_clerk_of_superior_court_rep: {
    title: "Alamance County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/alamance_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-79.54242799109755, 35.843302999849996],
      [-79.23696899143181, 36.24967299961993],
    ],
    participatingCounties: ["ALAMANCE"],
    focusMaskData: "map_data/alamance_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Kristie Miller Culler": ["#e3974e", "#eea941", "#e7c557"],
      "Steve McGilvray": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kristie Miller Culler",
        votes: 10047,
        share: 73.38397487400482,
      },
      {
        candidate: "Steve McGilvray",
        votes: 3644,
        share: 26.61602512599518,
      },
    ],
  },
  alamance_county_sheriff_rep: {
    title: "Alamance County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/alamance_county_sheriff_rep.geojson",
    bounds: [
      [-79.54242799109755, 35.843302999849996],
      [-79.23696899143181, 36.24967299961993],
    ],
    participatingCounties: ["ALAMANCE"],
    focusMaskData: "map_data/alamance_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Terry S. Johnson": ["#e3974e", "#eea941", "#e7c557"],
      "Billy Clayton": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Dana Byrd Pasour": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Terry S. Johnson",
        votes: 8397,
        share: 57.17301014502622,
      },
      {
        candidate: "Billy Clayton",
        votes: 6194,
        share: 42.17335058214748,
      },
      {
        candidate: "Dana Byrd Pasour",
        votes: 96,
        share: 0.653639272826309,
      },
    ],
  },
  alexander_county_clerk_of_superior_court_rep: {
    title: "Alexander County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/alexander_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-81.3440339917135, 35.77659400013096],
      [-81.00339999061806, 36.04565200055031],
    ],
    participatingCounties: ["ALEXANDER"],
    focusMaskData: "map_data/alexander_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Edwin P. Chapman": ["#e3974e", "#eea941", "#e7c557"],
      "Lisa Hines": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Edwin P. Chapman",
        votes: 4028,
        share: 82.54098360655738,
      },
      {
        candidate: "Lisa Hines",
        votes: 852,
        share: 17.45901639344262,
      },
    ],
  },
  alexander_county_register_of_deeds_rep: {
    title: "Alexander County Register Of Deeds",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/alexander_county_register_of_deeds_rep.geojson",
    bounds: [
      [-81.3440339917135, 35.77659400013096],
      [-81.00339999061806, 36.04565200055031],
    ],
    participatingCounties: ["ALEXANDER"],
    focusMaskData: "map_data/alexander_county_register_of_deeds_rep_focus_mask.geojson",
    candidates: {
      "Kevin Powell": ["#e3974e", "#eea941", "#e7c557"],
      "Scott H. Hines": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kevin Powell",
        votes: 3289,
        share: 67.8704085843995,
      },
      {
        candidate: "Scott H. Hines",
        votes: 1557,
        share: 32.129591415600494,
      },
    ],
  },
  anson_county_board_of_education_at_large_dem: {
    title: "Anson County Board Of Education At-Large",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/anson_county_board_of_education_at_large_dem.geojson",
    bounds: [
      [-80.32082799092962, 34.80673400039623],
      [-79.84847899084187, 35.21130000037445],
    ],
    participatingCounties: ["ANSON"],
    focusMaskData: "map_data/anson_county_board_of_education_at_large_dem_focus_mask.geojson",
    candidates: {
      "Lorri Burns Bennett": ["#e3974e", "#eea941", "#e7c557"],
      "Ida Cason": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Marilynn Bennett": ["#af89be", "#b29fde", "#b8b0cb"],
      "Tracy Harrington": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Glenn Caulder": ["#c84f4a", "#df7f7b", "#edb3b0"],
      "William (Bug) Polk": ["#ad8731", "#d7b85d", "#ead99a"],
    },
    results: [
      {
        candidate: "Lorri Burns Bennett",
        votes: 570,
        share: 24.91258741258741,
      },
      {
        candidate: "Ida Cason",
        votes: 517,
        share: 22.596153846153847,
      },
      {
        candidate: "Marilynn Bennett",
        votes: 503,
        share: 21.984265734265733,
      },
      {
        candidate: "Tracy Harrington",
        votes: 404,
        share: 17.657342657342657,
      },
      {
        candidate: "Glenn Caulder",
        votes: 256,
        share: 11.188811188811188,
      },
      {
        candidate: "William (Bug) Polk",
        votes: 38,
        share: 1.6608391608391608,
      },
    ],
  },
  anson_county_sheriff_dem: {
    title: "Anson County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/anson_county_sheriff_dem.geojson",
    bounds: [
      [-80.32082799092962, 34.80673400039623],
      [-79.84847899084187, 35.21130000037445],
    ],
    participatingCounties: ["ANSON"],
    focusMaskData: "map_data/anson_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Tim Watkins": ["#e3974e", "#eea941", "#e7c557"],
      "Gerald Cannon, Sr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Davara Ponds": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Tim Watkins",
        votes: 1038,
        share: 46.65168539325843,
      },
      {
        candidate: "Gerald Cannon, Sr.",
        votes: 890,
        share: 40,
      },
      {
        candidate: "Davara Ponds",
        votes: 297,
        share: 13.348314606741576,
      },
    ],
  },
  district_attorney_district_09_rep: {
    title: "District Attorney District 9",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/district_attorney_district_09_rep.geojson",
    bounds: [
      [-78.30657999093587, 35.00813800018973],
      [-77.39079399154919, 35.65229499992457],
    ],
    participatingCounties: ["GREENE", "LENOIR", "WAYNE"],
    focusMaskData: "map_data/district_attorney_district_09_rep_focus_mask.geojson",
    candidates: {
      "Jeff Cannon": ["#e3974e", "#eea941", "#e7c557"],
      "Mike Muskus": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jeff Cannon",
        votes: 7347,
        share: 58.02859173840928,
      },
      {
        candidate: "Mike Muskus",
        votes: 5314,
        share: 41.97140826159071,
      },
    ],
  },
  district_attorney_district_10_dem: {
    title: "District Attorney District 10",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/district_attorney_district_10_dem.geojson",
    bounds: [
      [-78.9950479913208, 35.51945800030572],
      [-78.253910991134, 36.076442999977246],
    ],
    participatingCounties: ["WAKE"],
    focusMaskData: "map_data/district_attorney_district_10_dem_focus_mask.geojson",
    candidates: {
      "Wiley Nickel": ["#e3974e", "#eea941", "#e7c557"],
      "Sherita Walton": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Melanie Shekita": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Wiley Nickel",
        votes: 64402,
        share: 48.96410677493176,
      },
      {
        candidate: "Sherita Walton",
        votes: 40123,
        share: 30.50505972066996,
      },
      {
        candidate: "Melanie Shekita",
        votes: 27004,
        share: 20.53083350439827,
      },
    ],
  },
  district_attorney_district_15_rep: {
    title: "District Attorney District 15",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/district_attorney_district_15_rep.geojson",
    bounds: [
      [-79.07121099103664, 33.75289899980945],
      [-77.89701099090615, 34.85618200038567],
    ],
    participatingCounties: ["BLADEN", "BRUNSWICK", "COLUMBUS"],
    focusMaskData: "map_data/district_attorney_district_15_rep_focus_mask.geojson",
    candidates: {
      "J.K. Somers": ["#e3974e", "#eea941", "#e7c557"],
      "Jenna Earley": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "J.K. Somers",
        votes: 14183,
        share: 52.6935651657007,
      },
      {
        candidate: "Jenna Earley",
        votes: 12733,
        share: 47.306434834299296,
      },
    ],
  },
  district_attorney_district_16_dem: {
    title: "District Attorney District 16",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/district_attorney_district_16_dem.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/district_attorney_district_16_dem_focus_mask.geojson",
    candidates: {
      "Satana Deberry": ["#e3974e", "#eea941", "#e7c557"],
      "Jonathan Wilson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Satana Deberry",
        votes: 36011,
        share: 61.17349278882905,
      },
      {
        candidate: "Jonathan Wilson",
        votes: 22856,
        share: 38.82650721117095,
      },
    ],
  },
  district_attorney_district_19_rep: {
    title: "District Attorney District 19",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/district_attorney_district_19_rep.geojson",
    bounds: [
      [-81.53540299102687, 35.547020000032326],
      [-80.92521299124598, 35.82895799974085],
    ],
    participatingCounties: ["CATAWBA"],
    focusMaskData: "map_data/district_attorney_district_19_rep_focus_mask.geojson",
    candidates: {
      "D. Scott Reilly": ["#e3974e", "#eea941", "#e7c557"],
      "Adam Everett": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "D. Scott Reilly",
        votes: 12086,
        share: 78.35332252836305,
      },
      {
        candidate: "Adam Everett",
        votes: 3339,
        share: 21.646677471636952,
      },
    ],
  },
  district_attorney_district_21_dem: {
    title: "District Attorney District 21",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/district_attorney_district_21_dem.geojson",
    bounds: [
      [-80.32082799092962, 34.63037900023737],
      [-79.33082499141057, 35.21130000037445],
    ],
    participatingCounties: ["ANSON", "RICHMOND", "SCOTLAND"],
    focusMaskData: "map_data/district_attorney_district_21_dem_focus_mask.geojson",
    candidates: {
      "Jamie Adams": ["#e3974e", "#eea941", "#e7c557"],
      "Herman Little": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jamie Adams",
        votes: 4283,
        share: 60.1291590621929,
      },
      {
        candidate: "Herman Little",
        votes: 2840,
        share: 39.8708409378071,
      },
    ],
  },
  alexander_county_board_of_education_district_02_rep: {
    title: "Alexander County Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/alexander_county_board_of_education_district_02_rep.geojson",
    bounds: [
      [-81.3440339917135, 35.796281000593844],
      [-81.18597399079677, 36.006402000039856],
    ],
    participatingCounties: ["ALEXANDER"],
    focusMaskData: "map_data/alexander_county_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Chris Smith": ["#e3974e", "#eea941", "#e7c557"],
      "Rob Arguelles": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chris Smith",
        votes: 483,
        share: 68.12411847672779,
      },
      {
        candidate: "Rob Arguelles",
        votes: 226,
        share: 31.875881523272216,
      },
    ],
  },
  anson_county_board_of_commissioners_district_02_rep: {
    title: "Anson County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/anson_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-80.32082799092962, 34.80673400039623],
      [-79.84847899084187, 35.21130000037445],
    ],
    participatingCounties: ["ANSON"],
    focusMaskData: "map_data/anson_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "William (Boogie) Short": ["#e3974e", "#eea941", "#e7c557"],
      "Charles Holley": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "William (Boogie) Short",
        votes: 722,
        share: 70.02909796314259,
      },
      {
        candidate: "Charles Holley",
        votes: 309,
        share: 29.97090203685742,
      },
    ],
  },
  beaufort_county_board_of_education_district_02_rep: {
    title: "Beaufort County Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/beaufort_county_board_of_education_district_02_rep.geojson",
    bounds: [
      [-77.1912299917439, 35.216059000031656],
      [-76.59049699128632, 35.5540809996077],
    ],
    participatingCounties: ["BEAUFORT"],
    focusMaskData: "map_data/beaufort_county_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Charles Hickman": ["#e3974e", "#eea941", "#e7c557"],
      "Austin Garrison": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Charles Hickman",
        votes: 582,
        share: 79.291553133515,
      },
      {
        candidate: "Austin Garrison",
        votes: 152,
        share: 20.708446866485016,
      },
    ],
  },
  beaufort_county_board_of_education_district_04_rep: {
    title: "Beaufort County Board Of Education District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/beaufort_county_board_of_education_district_04_rep.geojson",
    bounds: [
      [-77.1912299917439, 35.34349200004905],
      [-77.0019769908206, 35.5540809996077],
    ],
    participatingCounties: ["BEAUFORT"],
    focusMaskData: "map_data/beaufort_county_board_of_education_district_04_rep_focus_mask.geojson",
    candidates: {
      "Terry Williams": ["#e3974e", "#eea941", "#e7c557"],
      "Jesse Woolard": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Terry Williams",
        votes: 528,
        share: 76.96793002915452,
      },
      {
        candidate: "Jesse Woolard",
        votes: 158,
        share: 23.03206997084548,
      },
    ],
  },
  beaufort_county_board_of_education_district_06_rep: {
    title: "Beaufort County Board Of Education District 6",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/beaufort_county_board_of_education_district_06_rep.geojson",
    bounds: [
      [-77.08979399136318, 35.40319199987601],
      [-76.95623699115356, 35.585883999587],
    ],
    participatingCounties: ["BEAUFORT"],
    focusMaskData: "map_data/beaufort_county_board_of_education_district_06_rep_focus_mask.geojson",
    candidates: {
      "Monica Davis": ["#e3974e", "#eea941", "#e7c557"],
      "Steven P. Rader": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Monica Davis",
        votes: 635,
        share: 59.905660377358494,
      },
      {
        candidate: "Steven P. Rader",
        votes: 425,
        share: 40.09433962264151,
      },
    ],
  },
  beaufort_county_board_of_education_district_08_rep: {
    title: "Beaufort County Board Of Education District 8",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/beaufort_county_board_of_education_district_08_rep.geojson",
    bounds: [
      [-76.99150199070307, 35.39832199951553],
      [-76.60030799074241, 35.70550700001978],
    ],
    participatingCounties: ["BEAUFORT"],
    focusMaskData: "map_data/beaufort_county_board_of_education_district_08_rep_focus_mask.geojson",
    candidates: {
      "Jennifer Cox Cornelius": ["#e3974e", "#eea941", "#e7c557"],
      "Donald W. Shreve": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Phillip M. Paul": ["#af89be", "#b29fde", "#b8b0cb"],
      "George Armistead": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Jennifer Cox Cornelius",
        votes: 804,
        share: 57.5107296137339,
      },
      {
        candidate: "Donald W. Shreve",
        votes: 278,
        share: 19.88555078683834,
      },
      {
        candidate: "Phillip M. Paul",
        votes: 189,
        share: 13.519313304721033,
      },
      {
        candidate: "George Armistead",
        votes: 127,
        share: 9.084406294706724,
      },
    ],
  },
  nc_court_of_appeals_judge_seat_01_rep: {
    title: "N.C. Court Of Appeals Judge Seat 1",
    subtitle: "Republican Primary",
    scope: "statewide",
    data: "map_data/nc_court_of_appeals_judge_seat_01_rep.geojson",
    bounds: [
      [-84.3218209914704, 33.75289899980945],
      [-75.4001189911457, 36.588136999894786],
    ],
    participatingCounties: null,
    focusMaskData: null,
    candidates: {
      "Michael C. Byrne": ["#e3974e", "#eea941", "#e7c557"],
      "Matt Smith": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Michael C. Byrne",
        votes: 301726,
        share: 51.54405295750587,
      },
      {
        candidate: "Matt Smith",
        votes: 283649,
        share: 48.45594704249413,
      },
    ],
  },
  nc_court_of_appeals_judge_seat_03_dem: {
    title: "N.C. Court Of Appeals Judge Seat 3",
    subtitle: "Democratic Primary",
    scope: "statewide",
    data: "map_data/nc_court_of_appeals_judge_seat_03_dem.geojson",
    bounds: [
      [-84.3218209914704, 33.75289899980945],
      [-75.4001189911457, 36.588136999894786],
    ],
    participatingCounties: null,
    focusMaskData: null,
    candidates: {
      "Christine Marie Walczyk": ["#e3974e", "#eea941", "#e7c557"],
      "James Weldon Whalen": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Christine Marie Walczyk",
        votes: 492796,
        share: 62.33497478372952,
      },
      {
        candidate: "James Weldon Whalen",
        votes: 297765,
        share: 37.66502521627047,
      },
    ],
  },
};

export { contests };
