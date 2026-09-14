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
  ashe_county_sheriff_rep: {
    title: "Ashe County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/ashe_county_sheriff_rep.geojson",
    bounds: [
      [-81.74192799087766, 36.24025000039178],
      [-81.24402899156233, 36.588136999894786],
    ],
    participatingCounties: ["ASHE"],
    focusMaskData: "map_data/ashe_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "B. Phil Howell": ["#e3974e", "#eea941", "#e7c557"],
      "Brandon Shepherd": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Earl Cox": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "B. Phil Howell",
        votes: 2634,
        share: 55.53447185325743,
      },
      {
        candidate: "Brandon Shepherd",
        votes: 1852,
        share: 39.04701665612482,
      },
      {
        candidate: "Earl Cox",
        votes: 257,
        share: 5.418511490617752,
      },
    ],
  },
  avery_county_clerk_of_superior_court_rep: {
    title: "Avery County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/avery_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-82.08088699117846, 35.91136100051187],
      [-81.73567299089382, 36.28712899999742],
    ],
    participatingCounties: ["AVERY"],
    focusMaskData: "map_data/avery_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Teresa I. Benfield": ["#e3974e", "#eea941", "#e7c557"],
      "Linda Webb": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Teresa I. Benfield",
        votes: 2124,
        share: 79.34254762794173,
      },
      {
        candidate: "Linda Webb",
        votes: 553,
        share: 20.657452372058273,
      },
    ],
  },
  beaufort_county_board_of_commissioners_rep: {
    title: "Beaufort County Board Of Commissioners",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/beaufort_county_board_of_commissioners_rep.geojson",
    bounds: [
      [-77.19577199094778, 35.216059000031656],
      [-76.46776099130821, 35.739473000302674],
    ],
    participatingCounties: ["BEAUFORT"],
    focusMaskData: "map_data/beaufort_county_board_of_commissioners_rep_focus_mask.geojson",
    candidates: {
      "John T. Edwards": ["#e3974e", "#eea941", "#e7c557"],
      "Ashley Woolard": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Stan Deatherage": ["#af89be", "#b29fde", "#b8b0cb"],
      "C. Travis Martin": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Gary A. Ceres": ["#c84f4a", "#df7f7b", "#edb3b0"],
    },
    results: [
      {
        candidate: "John T. Edwards",
        votes: 2856,
        share: 35.359663241302464,
      },
      {
        candidate: "Ashley Woolard",
        votes: 1856,
        share: 22.978828773059305,
      },
      {
        candidate: "Stan Deatherage",
        votes: 1463,
        share: 18.113160827039746,
      },
      {
        candidate: "C. Travis Martin",
        votes: 1213,
        share: 15.017952209978953,
      },
      {
        candidate: "Gary A. Ceres",
        votes: 689,
        share: 8.530394948619536,
      },
    ],
  },
  beaufort_county_sheriff_rep: {
    title: "Beaufort County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/beaufort_county_sheriff_rep.geojson",
    bounds: [
      [-77.19577199094778, 35.216059000031656],
      [-76.46776099130821, 35.739473000302674],
    ],
    participatingCounties: ["BEAUFORT"],
    focusMaskData: "map_data/beaufort_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Scott Hammonds": ["#e3974e", "#eea941", "#e7c557"],
      "Kelly J. Cox": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Scott Hammonds",
        votes: 4351,
        share: 51.78528921685312,
      },
      {
        candidate: "Kelly J. Cox",
        votes: 4051,
        share: 48.21471078314687,
      },
    ],
  },
  bertie_county_sheriff_dem: {
    title: "Bertie County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/bertie_county_sheriff_dem.geojson",
    bounds: [
      [-77.32762199086062, 35.81186600004032],
      [-76.60621399141944, 36.24657800023221],
    ],
    participatingCounties: ["BERTIE"],
    focusMaskData: "map_data/bertie_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Tyrone M. Ruffin": ["#e3974e", "#eea941", "#e7c557"],
      "Allen White": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tyrone M. Ruffin",
        votes: 2855,
        share: 88.88542963885429,
      },
      {
        candidate: "Allen White",
        votes: 357,
        share: 11.114570361145704,
      },
    ],
  },
  bladen_county_sheriff_dem: {
    title: "Bladen County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/bladen_county_sheriff_dem.geojson",
    bounds: [
      [-78.90199799143065, 34.367535999726776],
      [-78.17650099137116, 34.85618200038567],
    ],
    participatingCounties: ["BLADEN"],
    focusMaskData: "map_data/bladen_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Chris Hunt": ["#e3974e", "#eea941", "#e7c557"],
      "Gary Edwards": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chris Hunt",
        votes: 1448,
        share: 69.01811248808389,
      },
      {
        candidate: "Gary Edwards",
        votes: 650,
        share: 30.981887511916113,
      },
    ],
  },
  bladen_county_sheriff_rep: {
    title: "Bladen County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/bladen_county_sheriff_rep.geojson",
    bounds: [
      [-78.90199799143065, 34.367535999726776],
      [-78.17650099137116, 34.85618200038567],
    ],
    participatingCounties: ["BLADEN"],
    focusMaskData: "map_data/bladen_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Jim McVicker": ["#e3974e", "#eea941", "#e7c557"],
      "Carl Yonge": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jim McVicker",
        votes: 2220,
        share: 78.94736842105263,
      },
      {
        candidate: "Carl Yonge",
        votes: 592,
        share: 21.052631578947366,
      },
    ],
  },
  brunswick_county_sheriff_rep: {
    title: "Brunswick County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/brunswick_county_sheriff_rep.geojson",
    bounds: [
      [-78.65086499169355, 33.75289899980945],
      [-77.89701099090615, 34.37181299968314],
    ],
    participatingCounties: ["BRUNSWICK"],
    focusMaskData: "map_data/brunswick_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Brian M. Chism": ["#e3974e", "#eea941", "#e7c557"],
      "Timothy (Tim) Daniels": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brian M. Chism",
        votes: 14078,
        share: 69.05719611498087,
      },
      {
        candidate: "Timothy (Tim) Daniels",
        votes: 6308,
        share: 30.94280388501913,
      },
    ],
  },
  buncombe_county_sheriff_rep: {
    title: "Buncombe County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/buncombe_county_sheriff_rep.geojson",
    bounds: [
      [-82.88810699101593, 35.416450000601074],
      [-82.16904899089364, 35.82411000060308],
    ],
    participatingCounties: ["BUNCOMBE"],
    focusMaskData: "map_data/buncombe_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Gary Parris": ["#e3974e", "#eea941", "#e7c557"],
      "Vic Morman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Gary Parris",
        votes: 7975,
        share: 74.8545147362493,
      },
      {
        candidate: "Vic Morman",
        votes: 2679,
        share: 25.145485263750704,
      },
    ],
  },
  cabarrus_county_clerk_of_superior_court_rep: {
    title: "Cabarrus County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/cabarrus_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-80.78706899137296, 35.18499799994962],
      [-80.29542099119242, 35.506510000065404],
    ],
    participatingCounties: ["CABARRUS"],
    focusMaskData: "map_data/cabarrus_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Bill Baggs": ["#e3974e", "#eea941", "#e7c557"],
      "Resa Travis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Ben Cox": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Bill Baggs",
        votes: 6048,
        share: 41.99416747673934,
      },
      {
        candidate: "Resa Travis",
        votes: 4851,
        share: 33.68282183030134,
      },
      {
        candidate: "Ben Cox",
        votes: 3503,
        share: 24.32301069295931,
      },
    ],
  },
  carteret_county_sheriff_rep: {
    title: "Carteret County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/carteret_county_sheriff_rep.geojson",
    bounds: [
      [-77.16760299132386, 34.531736000018384],
      [-76.0065569915957, 35.20145300023468],
    ],
    participatingCounties: ["CARTERET"],
    focusMaskData: "map_data/carteret_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "John Nyberg": ["#e3974e", "#eea941", "#e7c557"],
      "Shane Guthrie": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "John Nyberg",
        votes: 9254,
        share: 74.77375565610859,
      },
      {
        candidate: "Shane Guthrie",
        votes: 3122,
        share: 25.2262443438914,
      },
    ],
  },
  caswell_county_board_of_commissioners_at_large_unexpired_dem: {
    title: "Caswell County Board Of Commissioners At-Large (Unexpired)",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/caswell_county_board_of_commissioners_at_large_unexpired_dem.geojson",
    bounds: [
      [-79.53186499142537, 36.24187500037196],
      [-79.13831999125877, 36.541974999872686],
    ],
    participatingCounties: ["CASWELL"],
    focusMaskData: "map_data/caswell_county_board_of_commissioners_at_large_unexpired_dem_focus_mask.geojson",
    candidates: {
      "Jelesa Hardin": ["#e3974e", "#eea941", "#e7c557"],
      "William B. Vernon": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jelesa Hardin",
        votes: 1062,
        share: 63.860493084786526,
      },
      {
        candidate: "William B. Vernon",
        votes: 601,
        share: 36.139506915213474,
      },
    ],
  },
  caswell_county_board_of_commissioners_at_large_unexpired_rep: {
    title: "Caswell County Board Of Commissioners At-Large (Unexpired)",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/caswell_county_board_of_commissioners_at_large_unexpired_rep.geojson",
    bounds: [
      [-79.53186499142537, 36.24187500037196],
      [-79.13831999125877, 36.541974999872686],
    ],
    participatingCounties: ["CASWELL"],
    focusMaskData: "map_data/caswell_county_board_of_commissioners_at_large_unexpired_rep_focus_mask.geojson",
    candidates: {
      "Randy D. Simmons": ["#e3974e", "#eea941", "#e7c557"],
      "E. Claggett": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Randy D. Simmons",
        votes: 973,
        share: 61.00313479623824,
      },
      {
        candidate: "E. Claggett",
        votes: 622,
        share: 38.99686520376176,
      },
    ],
  },
  caswell_county_clerk_of_superior_court_rep: {
    title: "Caswell County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/caswell_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-79.53186499142537, 36.24187500037196],
      [-79.13831999125877, 36.541974999872686],
    ],
    participatingCounties: ["CASWELL"],
    focusMaskData: "map_data/caswell_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Ron Bradsher": ["#e3974e", "#eea941", "#e7c557"],
      "Bettie Lea Knight": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Ron Bradsher",
        votes: 1149,
        share: 73.5595390524968,
      },
      {
        candidate: "Bettie Lea Knight",
        votes: 413,
        share: 26.4404609475032,
      },
    ],
  },
  catawba_county_clerk_of_superior_court_rep: {
    title: "Catawba County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/catawba_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-81.53540299102687, 35.547020000032326],
      [-80.92521299124598, 35.82895799974085],
    ],
    participatingCounties: ["CATAWBA"],
    focusMaskData: "map_data/catawba_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Kim R. Sigmon": ["#e3974e", "#eea941", "#e7c557"],
      "Patty H. Cook": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kim R. Sigmon",
        votes: 11392,
        share: 72.49586356115566,
      },
      {
        candidate: "Patty H. Cook",
        votes: 4322,
        share: 27.50413643884434,
      },
    ],
  },
  catawba_county_sheriff_rep: {
    title: "Catawba County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/catawba_county_sheriff_rep.geojson",
    bounds: [
      [-81.53540299102687, 35.547020000032326],
      [-80.92521299124598, 35.82895799974085],
    ],
    participatingCounties: ["CATAWBA"],
    focusMaskData: "map_data/catawba_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Don Brown": ["#e3974e", "#eea941", "#e7c557"],
      "Willie Armstrong": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "J.D. Slape": ["#af89be", "#b29fde", "#b8b0cb"],
      "William Propst": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Don Brown",
        votes: 12982,
        share: 80.29440870856011,
      },
      {
        candidate: "Willie Armstrong",
        votes: 1676,
        share: 10.366155368629393,
      },
      {
        candidate: "J.D. Slape",
        votes: 1103,
        share: 6.822117763483424,
      },
      {
        candidate: "William Propst",
        votes: 407,
        share: 2.5173181593270657,
      },
    ],
  },
  cherokee_county_board_of_education_at_large_rep: {
    title: "Cherokee County Board Of Education At-Large",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/cherokee_county_board_of_education_at_large_rep.geojson",
    bounds: [
      [-84.3218209914704, 34.98717500024027],
      [-83.69011299096077, 35.29224800066183],
    ],
    participatingCounties: ["CHEROKEE"],
    focusMaskData: "map_data/cherokee_county_board_of_education_at_large_rep_focus_mask.geojson",
    candidates: {
      "Randy Phillips": ["#e3974e", "#eea941", "#e7c557"],
      "Stephen Dartez": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Randy Phillips",
        votes: 2717,
        share: 60.257263251275226,
      },
      {
        candidate: "Stephen Dartez",
        votes: 1792,
        share: 39.742736748724774,
      },
    ],
  },
  cherokee_county_sheriff_rep: {
    title: "Cherokee County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/cherokee_county_sheriff_rep.geojson",
    bounds: [
      [-84.3218209914704, 34.98717500024027],
      [-83.69011299096077, 35.29224800066183],
    ],
    participatingCounties: ["CHEROKEE"],
    focusMaskData: "map_data/cherokee_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Chris Wood": ["#e3974e", "#eea941", "#e7c557"],
      "Sam May": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Dustin D. Smith": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Chris Wood",
        votes: 3788,
        share: 80.9920889459055,
      },
      {
        candidate: "Sam May",
        votes: 499,
        share: 10.66923241394056,
      },
      {
        candidate: "Dustin D. Smith",
        votes: 390,
        share: 8.338678640153944,
      },
    ],
  },
  clay_county_sheriff_rep: {
    title: "Clay County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/clay_county_sheriff_rep.geojson",
    bounds: [
      [-84.00581099128812, 34.98666900019234],
      [-83.48294899115669, 35.16083600040386],
    ],
    participatingCounties: ["CLAY"],
    focusMaskData: "map_data/clay_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Mark Buchanan": ["#e3974e", "#eea941", "#e7c557"],
      "Joe Shook": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mark Buchanan",
        votes: 1977,
        share: 84.88621726062688,
      },
      {
        candidate: "Joe Shook",
        votes: 352,
        share: 15.11378273937312,
      },
    ],
  },
  columbus_county_sheriff_rep: {
    title: "Columbus County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/columbus_county_sheriff_rep.geojson",
    bounds: [
      [-79.07121099103664, 33.94436500018155],
      [-78.16219199174412, 34.48477800028876],
    ],
    participatingCounties: ["COLUMBUS"],
    focusMaskData: "map_data/columbus_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "W. A. (Bill) Rogers": ["#e3974e", "#eea941", "#e7c557"],
      "Joshua McPherson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Ken Elliott": ["#af89be", "#b29fde", "#b8b0cb"],
      "Kevin S. Norris": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "W. A. (Bill) Rogers",
        votes: 2267,
        share: 42.6207933822147,
      },
      {
        candidate: "Joshua McPherson",
        votes: 1713,
        share: 32.20530174844895,
      },
      {
        candidate: "Ken Elliott",
        votes: 788,
        share: 14.814814814814811,
      },
      {
        candidate: "Kevin S. Norris",
        votes: 551,
        share: 10.359090054521529,
      },
    ],
  },
  craven_county_sheriff_rep: {
    title: "Craven County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/craven_county_sheriff_rep.geojson",
    bounds: [
      [-77.47371699155677, 34.80906600018467],
      [-76.65257099172975, 35.41836199990053],
    ],
    participatingCounties: ["CRAVEN"],
    focusMaskData: "map_data/craven_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Chip Hughes": ["#e3974e", "#eea941", "#e7c557"],
      "Calvin Williams": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chip Hughes",
        votes: 7484,
        share: 88.9152904835452,
      },
      {
        candidate: "Calvin Williams",
        votes: 933,
        share: 11.084709516454794,
      },
    ],
  },
  cumberland_county_sheriff_dem: {
    title: "Cumberland County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/cumberland_county_sheriff_dem.geojson",
    bounds: [
      [-79.11292099145011, 34.834862000377825],
      [-78.49470499170005, 35.266900000412384],
    ],
    participatingCounties: ["CUMBERLAND"],
    focusMaskData: "map_data/cumberland_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Troy A. McDuffie": ["#e3974e", "#eea941", "#e7c557"],
      "Johnathan T. Morgan": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Demetrio Perez": ["#af89be", "#b29fde", "#b8b0cb"],
      "Joe Bailer": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Troy A. McDuffie",
        votes: 11161,
        share: 49.509825666504014,
      },
      {
        candidate: "Johnathan T. Morgan",
        votes: 6087,
        share: 27.001730027059395,
      },
      {
        candidate: "Demetrio Perez",
        votes: 3515,
        share: 15.592423368673202,
      },
      {
        candidate: "Joe Bailer",
        votes: 1780,
        share: 7.896020937763386,
      },
    ],
  },
  currituck_county_board_of_commissioners_at_large_dem: {
    title: "Currituck County Board Of Commissioners At-Large",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/currituck_county_board_of_commissioners_at_large_dem.geojson",
    bounds: [
      [-76.31330299076771, 36.0288339997429],
      [-75.70907799155268, 36.55091599969266],
    ],
    participatingCounties: ["CURRITUCK"],
    focusMaskData: "map_data/currituck_county_board_of_commissioners_at_large_dem_focus_mask.geojson",
    candidates: {
      "Reggie Saunders": ["#e3974e", "#eea941", "#e7c557"],
      "Claywood Wilson, Jr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Reggie Saunders",
        votes: 503,
        share: 60.23952095808384,
      },
      {
        candidate: "Claywood Wilson, Jr.",
        votes: 332,
        share: 39.76047904191617,
      },
    ],
  },
  currituck_county_board_of_commissioners_at_large_rep: {
    title: "Currituck County Board Of Commissioners At-Large",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/currituck_county_board_of_commissioners_at_large_rep.geojson",
    bounds: [
      [-76.31330299076771, 36.0288339997429],
      [-75.70907799155268, 36.55091599969266],
    ],
    participatingCounties: ["CURRITUCK"],
    focusMaskData: "map_data/currituck_county_board_of_commissioners_at_large_rep_focus_mask.geojson",
    candidates: {
      "Matt Beickert": ["#e3974e", "#eea941", "#e7c557"],
      "Denise Hall": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Matt Beickert",
        votes: 2554,
        share: 71.62086371284352,
      },
      {
        candidate: "Denise Hall",
        votes: 1012,
        share: 28.379136287156477,
      },
    ],
  },
  dare_county_sheriff_rep: {
    title: "Dare County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/dare_county_sheriff_rep.geojson",
    bounds: [
      [-76.02747899144705, 35.14056500001367],
      [-75.4001189911457, 36.24498399950264],
    ],
    participatingCounties: ["DARE"],
    focusMaskData: "map_data/dare_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Rodney Rawls": ["#e3974e", "#eea941", "#e7c557"],
      "Jimmy Pierce": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Jeff Deringer": ["#af89be", "#b29fde", "#b8b0cb"],
      "Teddy Daniels": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Rodney Rawls",
        votes: 3070,
        share: 41.70062483020918,
      },
      {
        candidate: "Jimmy Pierce",
        votes: 2592,
        share: 35.2078239608802,
      },
      {
        candidate: "Jeff Deringer",
        votes: 999,
        share: 13.56968215158924,
      },
      {
        candidate: "Teddy Daniels",
        votes: 701,
        share: 9.52186905732138,
      },
    ],
  },
  davidson_county_clerk_of_superior_court_rep: {
    title: "Davidson County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/davidson_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-80.48751499146486, 35.50414100030971],
      [-80.04323799090182, 36.02680799976594],
    ],
    participatingCounties: ["DAVIDSON"],
    focusMaskData: "map_data/davidson_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Sandie Tysinger Chappell": ["#e3974e", "#eea941", "#e7c557"],
      "Christopher R. Harmon": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Susan Shell": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Sandie Tysinger Chappell",
        votes: 8792,
        share: 57.299270072992705,
      },
      {
        candidate: "Christopher R. Harmon",
        votes: 3424,
        share: 22.314911366006257,
      },
      {
        candidate: "Susan Shell",
        votes: 3128,
        share: 20.38581856100104,
      },
    ],
  },
  davidson_county_sheriff_rep: {
    title: "Davidson County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/davidson_county_sheriff_rep.geojson",
    bounds: [
      [-80.48751499146486, 35.50414100030971],
      [-80.04323799090182, 36.02680799976594],
    ],
    participatingCounties: ["DAVIDSON"],
    focusMaskData: "map_data/davidson_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Richie Simmons": ["#e3974e", "#eea941", "#e7c557"],
      "Elizabeth Clodfelter": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Richie Simmons",
        votes: 14229,
        share: 89.21003134796238,
      },
      {
        candidate: "Elizabeth Clodfelter",
        votes: 1721,
        share: 10.78996865203762,
      },
    ],
  },
  duplin_county_clerk_of_superior_court_rep: {
    title: "Duplin County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/duplin_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-78.19864199124152, 34.71020099951216],
      [-77.65109299129914, 35.193967000342575],
    ],
    participatingCounties: ["DUPLIN"],
    focusMaskData: "map_data/duplin_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Amy Price": ["#e3974e", "#eea941", "#e7c557"],
      "Crystal Strickland": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Amy Price",
        votes: 2615,
        share: 55.6975505857295,
      },
      {
        candidate: "Crystal Strickland",
        votes: 2080,
        share: 44.3024494142705,
      },
    ],
  },
  duplin_county_sheriff_rep: {
    title: "Duplin County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/duplin_county_sheriff_rep.geojson",
    bounds: [
      [-78.19864199124152, 34.71020099951216],
      [-77.65109299129914, 35.193967000342575],
    ],
    participatingCounties: ["DUPLIN"],
    focusMaskData: "map_data/duplin_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Eric Southerland": ["#e3974e", "#eea941", "#e7c557"],
      "Stratton Stokes": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Tony James": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Eric Southerland",
        votes: 2298,
        share: 48.37894736842105,
      },
      {
        candidate: "Stratton Stokes",
        votes: 1823,
        share: 38.37894736842105,
      },
      {
        candidate: "Tony James",
        votes: 629,
        share: 13.242105263157894,
      },
    ],
  },
  durham_county_clerk_of_superior_court_dem: {
    title: "Durham County Clerk Of Superior Court",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/durham_county_clerk_of_superior_court_dem.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/durham_county_clerk_of_superior_court_dem_focus_mask.geojson",
    candidates: {
      "Aminah Thompson": ["#e3974e", "#eea941", "#e7c557"],
      "A. Beverly Ellis-Maclin": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Aminah Thompson",
        votes: 49687,
        share: 87.10599207601416,
      },
      {
        candidate: "A. Beverly Ellis-Maclin",
        votes: 7355,
        share: 12.894007923985834,
      },
    ],
  },
  forsyth_county_board_of_commissioners_at_large_dem: {
    title: "Forsyth County Board Of Commissioners At-Large",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/forsyth_county_board_of_commissioners_at_large_dem.geojson",
    bounds: [
      [-80.51668199123979, 35.97276199970947],
      [-80.03511899082645, 36.2615149998244],
    ],
    participatingCounties: ["FORSYTH"],
    focusMaskData: "map_data/forsyth_county_board_of_commissioners_at_large_dem_focus_mask.geojson",
    candidates: {
      "Dan Besse": ["#e3974e", "#eea941", "#e7c557"],
      "Quamekia (Que) Shavers": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Dan Besse",
        votes: 19619,
        share: 59.679381882338625,
      },
      {
        candidate: "Quamekia (Que) Shavers",
        votes: 13255,
        share: 40.320618117661375,
      },
    ],
  },
  forsyth_county_board_of_commissioners_at_large_rep: {
    title: "Forsyth County Board Of Commissioners At-Large",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/forsyth_county_board_of_commissioners_at_large_rep.geojson",
    bounds: [
      [-80.51668199123979, 35.97276199970947],
      [-80.03511899082645, 36.2615149998244],
    ],
    participatingCounties: ["FORSYTH"],
    focusMaskData: "map_data/forsyth_county_board_of_commissioners_at_large_rep_focus_mask.geojson",
    candidates: {
      "Terri Mrazek": ["#e3974e", "#eea941", "#e7c557"],
      "Mike P. Barresi, Sr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Terri Mrazek",
        votes: 9197,
        share: 66.3181424862994,
      },
      {
        candidate: "Mike P. Barresi, Sr.",
        votes: 4671,
        share: 33.681857513700606,
      },
    ],
  },
  franklin_county_board_of_commissioners_at_large_seat_06_rep: {
    title: "Franklin County Board Of Commissioners At-Large Seat 6",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/franklin_county_board_of_commissioners_at_large_seat_06_rep.geojson",
    bounds: [
      [-78.54641399102609, 35.8181199999109],
      [-78.00655099105443, 36.26619099956541],
    ],
    participatingCounties: ["FRANKLIN"],
    focusMaskData: "map_data/franklin_county_board_of_commissioners_at_large_seat_06_rep_focus_mask.geojson",
    candidates: {
      "Harry Foy": ["#e3974e", "#eea941", "#e7c557"],
      "Bruce Baker": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Rhonda Folks": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Harry Foy",
        votes: 2767,
        share: 65.77133349179938,
      },
      {
        candidate: "Bruce Baker",
        votes: 1034,
        share: 24.57808414547183,
      },
      {
        candidate: "Rhonda Folks",
        votes: 406,
        share: 9.650582362728786,
      },
    ],
  },
  franklin_county_board_of_education_at_large_seat_07: {
    title: "Franklin County Board Of Education At-Large Seat 7",
    subtitle: "Vote For 1",
    scope: "countywide",
    data: "map_data/franklin_county_board_of_education_at_large_seat_07.geojson",
    bounds: [
      [-78.54641399102609, 35.8181199999109],
      [-78.00655099105443, 36.26619099956541],
    ],
    participatingCounties: ["FRANKLIN"],
    focusMaskData: "map_data/franklin_county_board_of_education_at_large_seat_07_focus_mask.geojson",
    candidates: {
      "Jennifer Paylor": ["#e3974e", "#eea941", "#e7c557"],
      "Paige Sayles": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Nicole Taborn": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Jennifer Paylor",
        votes: 4048,
        share: 39.90142927550517,
      },
      {
        candidate: "Paige Sayles",
        votes: 3902,
        share: 38.46229669788072,
      },
      {
        candidate: "Nicole Taborn",
        votes: 2195,
        share: 21.636274026614096,
      },
    ],
  },
  gaston_county_board_of_commissioners_dallas_twp_rep: {
    title: "Gaston County Board Of Commissioners Dallas Twp",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/gaston_county_board_of_commissioners_dallas_twp_rep.geojson",
    bounds: [
      [-81.45559999163478, 35.148443000537526],
      [-80.92300699076256, 35.41981100047628],
    ],
    participatingCounties: ["GASTON"],
    focusMaskData: "map_data/gaston_county_board_of_commissioners_dallas_twp_rep_focus_mask.geojson",
    candidates: {
      "Cathy Cloninger": ["#e3974e", "#eea941", "#e7c557"],
      "Dennis James Stines": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Cathy Cloninger",
        votes: 10708,
        share: 65.69325153374234,
      },
      {
        candidate: "Dennis James Stines",
        votes: 5592,
        share: 34.306748466257666,
      },
    ],
  },
  gaston_county_board_of_education_gastonia_twp_dem: {
    title: "Gaston County Board Of Education Gastonia Twp",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/gaston_county_board_of_education_gastonia_twp_dem.geojson",
    bounds: [
      [-81.45559999163478, 35.148443000537526],
      [-80.92300699076256, 35.41981100047628],
    ],
    participatingCounties: ["GASTON"],
    focusMaskData: "map_data/gaston_county_board_of_education_gastonia_twp_dem_focus_mask.geojson",
    candidates: {
      "Che'z (Shea) Adams": ["#e3974e", "#eea941", "#e7c557"],
      "Lee Dedmon": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Che'z (Shea) Adams",
        votes: 6382,
        share: 71.02949360044518,
      },
      {
        candidate: "Lee Dedmon",
        votes: 2603,
        share: 28.970506399554814,
      },
    ],
  },
  gaston_county_sheriff_rep: {
    title: "Gaston County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/gaston_county_sheriff_rep.geojson",
    bounds: [
      [-81.45559999163478, 35.148443000537526],
      [-80.92300699076256, 35.41981100047628],
    ],
    participatingCounties: ["GASTON"],
    focusMaskData: "map_data/gaston_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Chad E. Hawkins": ["#e3974e", "#eea941", "#e7c557"],
      "Robbie Waldrop": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chad E. Hawkins",
        votes: 8849,
        share: 52.286693453084375,
      },
      {
        candidate: "Robbie Waldrop",
        votes: 8075,
        share: 47.713306546915625,
      },
    ],
  },
  granville_county_sheriff_rep: {
    title: "Granville County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/granville_county_sheriff_rep.geojson",
    bounds: [
      [-78.80761199117887, 36.021826000381765],
      [-78.45364799072091, 36.54254100036947],
    ],
    participatingCounties: ["GRANVILLE"],
    focusMaskData: "map_data/granville_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Ed Newman": ["#e3974e", "#eea941", "#e7c557"],
      "John (Johnny) Morris": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Charles R. Noblin, Jr.": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Ed Newman",
        votes: 2851,
        share: 56.54502181673939,
      },
      {
        candidate: "John (Johnny) Morris",
        votes: 1648,
        share: 32.685442284807614,
      },
      {
        candidate: "Charles R. Noblin, Jr.",
        votes: 543,
        share: 10.769535898452997,
      },
    ],
  },
  guilford_county_board_of_commissioners_at_large_dem: {
    title: "Guilford County Board Of Commissioners At-Large",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/guilford_county_board_of_commissioners_at_large_dem.geojson",
    bounds: [
      [-80.04686899116554, 35.89985099986212],
      [-79.53240999147594, 36.25718400009489],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/guilford_county_board_of_commissioners_at_large_dem_focus_mask.geojson",
    candidates: {
      "Greg Drumwright": ["#e3974e", "#eea941", "#e7c557"],
      "Amy Kemp": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Toby Andrea Hedgepeth": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Greg Drumwright",
        votes: 19966,
        share: 39.6260866113603,
      },
      {
        candidate: "Amy Kemp",
        votes: 17920,
        share: 35.56543484301195,
      },
      {
        candidate: "Toby Andrea Hedgepeth",
        votes: 12500,
        share: 24.808478545627754,
      },
    ],
  },
  guilford_county_clerk_of_superior_court_dem: {
    title: "Guilford County Clerk Of Superior Court",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/guilford_county_clerk_of_superior_court_dem.geojson",
    bounds: [
      [-80.04686899116554, 35.89985099986212],
      [-79.53240999147594, 36.25718400009489],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/guilford_county_clerk_of_superior_court_dem_focus_mask.geojson",
    candidates: {
      "David Churchill": ["#e3974e", "#eea941", "#e7c557"],
      "Cinnamon Hunter": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "David Churchill",
        votes: 29939,
        share: 60.238224583006385,
      },
      {
        candidate: "Cinnamon Hunter",
        votes: 19762,
        share: 39.76177541699362,
      },
    ],
  },
  guilford_county_sheriff_rep: {
    title: "Guilford County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/guilford_county_sheriff_rep.geojson",
    bounds: [
      [-80.04686899116554, 35.89985099986212],
      [-79.53240999147594, 36.25718400009489],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/guilford_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Phil Byrd": ["#e3974e", "#eea941", "#e7c557"],
      "William (Billy) Queen": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Phil Byrd",
        votes: 17019,
        share: 68.56141481690368,
      },
      {
        candidate: "William (Billy) Queen",
        votes: 7804,
        share: 31.43858518309632,
      },
    ],
  },
  halifax_county_clerk_of_superior_court_dem: {
    title: "Halifax County Clerk Of Superior Court",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/halifax_county_clerk_of_superior_court_dem.geojson",
    bounds: [
      [-78.00655099105443, 36.00360900027319],
      [-77.23036599082536, 36.5120709994768],
    ],
    participatingCounties: ["HALIFAX"],
    focusMaskData: "map_data/halifax_county_clerk_of_superior_court_dem_focus_mask.geojson",
    candidates: {
      "Chris Kidd": ["#e3974e", "#eea941", "#e7c557"],
      "Ronnie Reaves": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chris Kidd",
        votes: 3974,
        share: 60.441064638783274,
      },
      {
        candidate: "Ronnie Reaves",
        votes: 2601,
        share: 39.558935361216726,
      },
    ],
  },
  haywood_county_register_of_deeds_rep: {
    title: "Haywood County Register Of Deeds",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/haywood_county_register_of_deeds_rep.geojson",
    bounds: [
      [-83.2574169914712, 35.29168400016755],
      [-82.74524599083611, 35.790725000225905],
    ],
    participatingCounties: ["HAYWOOD"],
    focusMaskData: "map_data/haywood_county_register_of_deeds_rep_focus_mask.geojson",
    candidates: {
      "Stacy Cutshaw Moore": ["#e3974e", "#eea941", "#e7c557"],
      "Kristina Watson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Stacy Cutshaw Moore",
        votes: 4833,
        share: 68.79715302491103,
      },
      {
        candidate: "Kristina Watson",
        votes: 2192,
        share: 31.202846975088967,
      },
    ],
  },
  haywood_county_sheriff_rep: {
    title: "Haywood County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/haywood_county_sheriff_rep.geojson",
    bounds: [
      [-83.2574169914712, 35.29168400016755],
      [-82.74524599083611, 35.790725000225905],
    ],
    participatingCounties: ["HAYWOOD"],
    focusMaskData: "map_data/haywood_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Mark E. Mease": ["#e3974e", "#eea941", "#e7c557"],
      "William (Bill) Wilke": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mark E. Mease",
        votes: 4482,
        share: 57.80242455506835,
      },
      {
        candidate: "William (Bill) Wilke",
        votes: 3272,
        share: 42.19757544493165,
      },
    ],
  },
  haywood_county_tax_collector_rep: {
    title: "Haywood County Tax Collector",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/haywood_county_tax_collector_rep.geojson",
    bounds: [
      [-83.2574169914712, 35.29168400016755],
      [-82.74524599083611, 35.790725000225905],
    ],
    participatingCounties: ["HAYWOOD"],
    focusMaskData: "map_data/haywood_county_tax_collector_rep_focus_mask.geojson",
    candidates: {
      "Greg West": ["#e3974e", "#eea941", "#e7c557"],
      "Andrew Ferguson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Emily Sapp": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Greg West",
        votes: 3827,
        share: 51.562921045540286,
      },
      {
        candidate: "Andrew Ferguson",
        votes: 1868,
        share: 25.16841821611425,
      },
      {
        candidate: "Emily Sapp",
        votes: 1727,
        share: 23.26866073834546,
      },
    ],
  },
  iredell_county_clerk_of_superior_court_rep: {
    title: "Iredell County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/iredell_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-81.1095069906841, 35.48847300007011],
      [-80.69319699065278, 36.0588099998011],
    ],
    participatingCounties: ["IREDELL"],
    focusMaskData: "map_data/iredell_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Jim Mixson": ["#e3974e", "#eea941", "#e7c557"],
      "H. William Compton, Jr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jim Mixson",
        votes: 10100,
        share: 80.13329101872422,
      },
      {
        candidate: "H. William Compton, Jr.",
        votes: 2504,
        share: 19.866708981275785,
      },
    ],
  },
  jackson_county_board_of_commissioners_chairman_dem: {
    title: "Jackson County Board Of Commissioners Chairman",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/jackson_county_board_of_commissioners_chairman_dem.geojson",
    bounds: [
      [-83.36376599155831, 35.00135400071313],
      [-82.9191849915221, 35.526043000212624],
    ],
    participatingCounties: ["JACKSON"],
    focusMaskData: "map_data/jackson_county_board_of_commissioners_chairman_dem_focus_mask.geojson",
    candidates: {
      "Marcia Almond": ["#e3974e", "#eea941", "#e7c557"],
      "Bobbi Hopp": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Marcia Almond",
        votes: 2495,
        share: 74.12358882947119,
      },
      {
        candidate: "Bobbi Hopp",
        votes: 871,
        share: 25.87641117052882,
      },
    ],
  },
  jackson_county_board_of_commissioners_chairman_rep: {
    title: "Jackson County Board Of Commissioners Chairman",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/jackson_county_board_of_commissioners_chairman_rep.geojson",
    bounds: [
      [-83.36376599155831, 35.00135400071313],
      [-82.9191849915221, 35.526043000212624],
    ],
    participatingCounties: ["JACKSON"],
    focusMaskData: "map_data/jackson_county_board_of_commissioners_chairman_rep_focus_mask.geojson",
    candidates: {
      "David J. Rogers": ["#e3974e", "#eea941", "#e7c557"],
      "Mark A. Letson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Jon Brown": ["#af89be", "#b29fde", "#b8b0cb"],
      "Jarrett Crowe": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "David J. Rogers",
        votes: 1308,
        share: 39.720619495900394,
      },
      {
        candidate: "Mark A. Letson",
        votes: 1024,
        share: 31.096264804129977,
      },
      {
        candidate: "Jon Brown",
        votes: 709,
        share: 21.53051928332827,
      },
      {
        candidate: "Jarrett Crowe",
        votes: 252,
        share: 7.65259641664136,
      },
    ],
  },
  jackson_county_sheriff_rep: {
    title: "Jackson County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/jackson_county_sheriff_rep.geojson",
    bounds: [
      [-83.36376599155831, 35.00135400071313],
      [-82.9191849915221, 35.526043000212624],
    ],
    participatingCounties: ["JACKSON"],
    focusMaskData: "map_data/jackson_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Doug Farmer": ["#e3974e", "#eea941", "#e7c557"],
      "Brandon Elders": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Doug Farmer",
        votes: 2423,
        share: 72.09163939303778,
      },
      {
        candidate: "Brandon Elders",
        votes: 938,
        share: 27.908360606962212,
      },
    ],
  },
  johnston_county_sheriff_rep: {
    title: "Johnston County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/johnston_county_sheriff_rep.geojson",
    bounds: [
      [-78.70890199075369, 35.25466299955155],
      [-78.06478399167396, 35.8181199999109],
    ],
    participatingCounties: ["JOHNSTON"],
    focusMaskData: "map_data/johnston_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Steve Bizzell": ["#e3974e", "#eea941", "#e7c557"],
      "Randy Ackley": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Steve Bizzell",
        votes: 13676,
        share: 75.3415601586602,
      },
      {
        candidate: "Randy Ackley",
        votes: 4476,
        share: 24.658439841339796,
      },
    ],
  },
  jones_county_sheriff_rep: {
    title: "Jones County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/jones_county_sheriff_rep.geojson",
    bounds: [
      [-77.73102599148949, 34.78032300028129],
      [-77.0472489912505, 35.243000999644366],
    ],
    participatingCounties: ["JONES"],
    focusMaskData: "map_data/jones_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Matthew J. Wineman": ["#e3974e", "#eea941", "#e7c557"],
      "Nathan Metts": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Matthew J. Wineman",
        votes: 788,
        share: 77.179236043095,
      },
      {
        candidate: "Nathan Metts",
        votes: 233,
        share: 22.820763956904997,
      },
    ],
  },
  lincoln_county_board_of_education_at_large_rep: {
    title: "Lincoln County Board Of Education At-Large",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/lincoln_county_board_of_education_at_large_rep.geojson",
    bounds: [
      [-81.53759899160796, 35.40007799983661],
      [-80.93973399124314, 35.56813700001765],
    ],
    participatingCounties: ["LINCOLN"],
    focusMaskData: "map_data/lincoln_county_board_of_education_at_large_rep_focus_mask.geojson",
    candidates: {
      "Tony A. Jenkins": ["#e3974e", "#eea941", "#e7c557"],
      "Thomas LaVerde": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tony A. Jenkins",
        votes: 5149,
        share: 57.24291272929405,
      },
      {
        candidate: "Thomas LaVerde",
        votes: 3846,
        share: 42.757087270705945,
      },
    ],
  },
  lincoln_county_clerk_of_superior_court_rep: {
    title: "Lincoln County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/lincoln_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-81.53759899160796, 35.40007799983661],
      [-80.93973399124314, 35.56813700001765],
    ],
    participatingCounties: ["LINCOLN"],
    focusMaskData: "map_data/lincoln_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Stacey Leonard Crouse": ["#e3974e", "#eea941", "#e7c557"],
      "Frank Runyon": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Dawn Short": ["#af89be", "#b29fde", "#b8b0cb"],
      "Phil McNeill": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Stacey Leonard Crouse",
        votes: 3701,
        share: 40.23263398195456,
      },
      {
        candidate: "Frank Runyon",
        votes: 2959,
        share: 32.1665398412871,
      },
      {
        candidate: "Dawn Short",
        votes: 1781,
        share: 19.360800086965973,
      },
      {
        candidate: "Phil McNeill",
        votes: 758,
        share: 8.240026089792368,
      },
    ],
  },
  lincoln_county_register_of_deeds_rep: {
    title: "Lincoln County Register Of Deeds",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/lincoln_county_register_of_deeds_rep.geojson",
    bounds: [
      [-81.53759899160796, 35.40007799983661],
      [-80.93973399124314, 35.56813700001765],
    ],
    participatingCounties: ["LINCOLN"],
    focusMaskData: "map_data/lincoln_county_register_of_deeds_rep_focus_mask.geojson",
    candidates: {
      "Melissa L. Elmore": ["#e3974e", "#eea941", "#e7c557"],
      "Fred R. Hatley": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Melissa L. Elmore",
        votes: 6040,
        share: 64.7374062165059,
      },
      {
        candidate: "Fred R. Hatley",
        votes: 3290,
        share: 35.262593783494104,
      },
    ],
  },
  macon_county_sheriff_rep: {
    title: "Macon County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/macon_county_sheriff_rep.geojson",
    bounds: [
      [-83.73812899165753, 34.993301000411535],
      [-83.10839699102259, 35.33099300012788],
    ],
    participatingCounties: ["MACON"],
    focusMaskData: "map_data/macon_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Brent Holbrooks": ["#e3974e", "#eea941", "#e7c557"],
      "Bob Cook": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brent Holbrooks",
        votes: 4419,
        share: 69.38294865756006,
      },
      {
        candidate: "Bob Cook",
        votes: 1950,
        share: 30.617051342439943,
      },
    ],
  },
  mcdowell_county_sheriff_rep: {
    title: "Mcdowell County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/mcdowell_county_sheriff_rep.geojson",
    bounds: [
      [-82.29501499128583, 35.518002000419415],
      [-81.8241219914254, 35.960050000143475],
    ],
    participatingCounties: ["MCDOWELL"],
    focusMaskData: "map_data/mcdowell_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Nathan Mace": ["#e3974e", "#eea941", "#e7c557"],
      "Bryon Crisp": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "J. S. Calvert": ["#af89be", "#b29fde", "#b8b0cb"],
      "Brent Allen Rumfelt": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Nathan Mace",
        votes: 2617,
        share: 47.85152678734686,
      },
      {
        candidate: "Bryon Crisp",
        votes: 1483,
        share: 27.11647467544341,
      },
      {
        candidate: "J. S. Calvert",
        votes: 1145,
        share: 20.936185774364603,
      },
      {
        candidate: "Brent Allen Rumfelt",
        votes: 224,
        share: 4.095812762845127,
      },
    ],
  },
  mecklenburg_county_sheriff_dem: {
    title: "Mecklenburg County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/mecklenburg_county_sheriff_dem.geojson",
    bounds: [
      [-81.0581989916296, 35.001692000436584],
      [-80.55034899154798, 35.51478499984877],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/mecklenburg_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Garry L. McFadden": ["#e3974e", "#eea941", "#e7c557"],
      "Ricky Ricardo Robbins": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Rodney M. Collins": ["#af89be", "#b29fde", "#b8b0cb"],
      "Antwain Nance": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Garry L. McFadden",
        votes: 33504,
        share: 33.797020164829064,
      },
      {
        candidate: "Ricky Ricardo Robbins",
        votes: 30759,
        share: 31.028012871596744,
      },
      {
        candidate: "Rodney M. Collins",
        votes: 26577,
        share: 26.80943782595099,
      },
      {
        candidate: "Antwain Nance",
        votes: 8293,
        share: 8.365529137623193,
      },
    ],
  },
  mitchell_county_clerk_of_superior_court_rep: {
    title: "Mitchell County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/mitchell_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-82.41673799159969, 35.822727999892635],
      [-81.97903599121541, 36.15897999983889],
    ],
    participatingCounties: ["MITCHELL"],
    focusMaskData: "map_data/mitchell_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Shana W. Buchanan": ["#e3974e", "#eea941", "#e7c557"],
      "David Wheeler": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Shana W. Buchanan",
        votes: 3618,
        share: 84.92957746478874,
      },
      {
        candidate: "David Wheeler",
        votes: 642,
        share: 15.070422535211266,
      },
    ],
  },
  mitchell_county_sheriff_rep: {
    title: "Mitchell County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/mitchell_county_sheriff_rep.geojson",
    bounds: [
      [-82.41673799159969, 35.822727999892635],
      [-81.97903599121541, 36.15897999983889],
    ],
    participatingCounties: ["MITCHELL"],
    focusMaskData: "map_data/mitchell_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Shane Vance": ["#e3974e", "#eea941", "#e7c557"],
      "Cecil Curtis Hobson, Jr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Shane Vance",
        votes: 2265,
        share: 51.50068212824011,
      },
      {
        candidate: "Cecil Curtis Hobson, Jr.",
        votes: 2133,
        share: 48.49931787175989,
      },
    ],
  },
  moore_county_clerk_of_superior_court_rep: {
    title: "Moore County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/moore_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-79.76795699112654, 35.043028000333756],
      [-79.09580799147994, 35.518001999711664],
    ],
    participatingCounties: ["MOORE"],
    focusMaskData: "map_data/moore_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Todd E. Maness": ["#e3974e", "#eea941", "#e7c557"],
      "Deborah A. Duerring": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Todd E. Maness",
        votes: 6503,
        share: 56.13777624309392,
      },
      {
        candidate: "Deborah A. Duerring",
        votes: 5081,
        share: 43.86222375690608,
      },
    ],
  },
  nash_county_clerk_of_superior_court_rep: {
    title: "Nash County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/nash_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-78.25713299134368, 35.72790200027234],
      [-77.69795599103209, 36.20263299981612],
    ],
    participatingCounties: ["NASH"],
    focusMaskData: "map_data/nash_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Linda Thorne": ["#e3974e", "#eea941", "#e7c557"],
      "Ricky D. Jenkins": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Linda Thorne",
        votes: 4130,
        share: 62.68973891924712,
      },
      {
        candidate: "Ricky D. Jenkins",
        votes: 2458,
        share: 37.31026108075288,
      },
    ],
  },
  orange_county_board_of_commissioners_at_large_dem: {
    title: "Orange County Board Of Commissioners At-Large",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/orange_county_board_of_commissioners_at_large_dem.geojson",
    bounds: [
      [-79.26843399108934, 35.86078000005575],
      [-78.95059699070418, 36.243444999723174],
    ],
    participatingCounties: ["ORANGE"],
    focusMaskData: "map_data/orange_county_board_of_commissioners_at_large_dem_focus_mask.geojson",
    candidates: {
      "Karen Stegman": ["#e3974e", "#eea941", "#e7c557"],
      "Adam Beeman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Karen Stegman",
        votes: 20439,
        share: 77.18072653122876,
      },
      {
        candidate: "Adam Beeman",
        votes: 6043,
        share: 22.81927346877124,
      },
    ],
  },
  orange_county_register_of_deeds_dem: {
    title: "Orange County Register Of Deeds",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/orange_county_register_of_deeds_dem.geojson",
    bounds: [
      [-79.26843399108934, 35.86078000005575],
      [-78.95059699070418, 36.243444999723174],
    ],
    participatingCounties: ["ORANGE"],
    focusMaskData: "map_data/orange_county_register_of_deeds_dem_focus_mask.geojson",
    candidates: {
      "Amy Jo McLamb": ["#e3974e", "#eea941", "#e7c557"],
      "Penny Rich": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Amy Jo McLamb",
        votes: 14749,
        share: 55.80189928493058,
      },
      {
        candidate: "Penny Rich",
        votes: 11682,
        share: 44.19810071506943,
      },
    ],
  },
  orange_county_sheriff_dem: {
    title: "Orange County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/orange_county_sheriff_dem.geojson",
    bounds: [
      [-79.26843399108934, 35.86078000005575],
      [-78.95059699070418, 36.243444999723174],
    ],
    participatingCounties: ["ORANGE"],
    focusMaskData: "map_data/orange_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Charles Blackwood": ["#e3974e", "#eea941", "#e7c557"],
      "David LaBarre": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Charles Blackwood",
        votes: 16402,
        share: 58.40128182303721,
      },
      {
        candidate: "David LaBarre",
        votes: 11683,
        share: 41.59871817696279,
      },
    ],
  },
  pasquotank_county_clerk_of_superior_court_rep: {
    title: "Pasquotank County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/pasquotank_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-76.49140499129629, 36.05951700012273],
      [-76.02260699103687, 36.51067700008634],
    ],
    participatingCounties: ["PASQUOTANK"],
    focusMaskData: "map_data/pasquotank_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Jennifer S. Thompson": ["#e3974e", "#eea941", "#e7c557"],
      "Christopher Terry": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jennifer S. Thompson",
        votes: 2204,
        share: 57.38089039312679,
      },
      {
        candidate: "Christopher Terry",
        votes: 1637,
        share: 42.61910960687321,
      },
    ],
  },
  pasquotank_county_sheriff_rep: {
    title: "Pasquotank County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/pasquotank_county_sheriff_rep.geojson",
    bounds: [
      [-76.49140499129629, 36.05951700012273],
      [-76.02260699103687, 36.51067700008634],
    ],
    participatingCounties: ["PASQUOTANK"],
    focusMaskData: "map_data/pasquotank_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Tommy Wooten": ["#e3974e", "#eea941", "#e7c557"],
      "Juanita (Nina) Daniels": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tommy Wooten",
        votes: 3010,
        share: 75.81863979848866,
      },
      {
        candidate: "Juanita (Nina) Daniels",
        votes: 960,
        share: 24.181360201511335,
      },
    ],
  },
  pender_county_clerk_of_superior_court_rep: {
    title: "Pender County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/pender_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.48453799160289, 34.73263000020122],
    ],
    participatingCounties: ["PENDER"],
    focusMaskData: "map_data/pender_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Camille Costin Harrell": ["#e3974e", "#eea941", "#e7c557"],
      "Elizabeth H. Craver": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Camille Costin Harrell",
        votes: 3690,
        share: 57.70132916340891,
      },
      {
        candidate: "Elizabeth H. Craver",
        votes: 2705,
        share: 42.298670836591086,
      },
    ],
  },
  perquimans_county_board_of_education: {
    title: "Perquimans County Board Of Education",
    subtitle: "Vote For 1",
    scope: "countywide",
    data: "map_data/perquimans_county_board_of_education.geojson",
    bounds: [
      [-76.59010699114211, 36.01903599967112],
      [-76.15795299167148, 36.37809199938902],
    ],
    participatingCounties: ["PERQUIMANS"],
    focusMaskData: "map_data/perquimans_county_board_of_education_focus_mask.geojson",
    candidates: {
      "Kristy Corprew": ["#e3974e", "#eea941", "#e7c557"],
      "Matt Winslow": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Annie White": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Kristy Corprew",
        votes: 750,
        share: 38.2457929627741,
      },
      {
        candidate: "Matt Winslow",
        votes: 670,
        share: 34.16624171341153,
      },
      {
        candidate: "Annie White",
        votes: 533,
        share: 27.18001019887812,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 8,
        share: 0.407955124936257,
      },
    ],
  },
  person_county_board_of_commissioners_unexpired_rep: {
    title: "Person County Board Of Commissioners (Unexpired)",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/person_county_board_of_commissioners_unexpired_rep.geojson",
    bounds: [
      [-79.15399699161037, 36.235794000434026],
      [-78.79484499154951, 36.54217900018515],
    ],
    participatingCounties: ["PERSON"],
    focusMaskData: "map_data/person_county_board_of_commissioners_unexpired_rep_focus_mask.geojson",
    candidates: {
      "John R. Byrd, Sr.": ["#e3974e", "#eea941", "#e7c557"],
      "Derrick Sims": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Frank Stoltmann": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "John R. Byrd, Sr.",
        votes: 1351,
        share: 45.36601746138348,
      },
      {
        candidate: "Derrick Sims",
        votes: 1169,
        share: 39.254533243787776,
      },
      {
        candidate: "Frank Stoltmann",
        votes: 458,
        share: 15.379449294828746,
      },
    ],
  },
  person_county_sheriff_rep: {
    title: "Person County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/person_county_sheriff_rep.geojson",
    bounds: [
      [-79.15399699161037, 36.235794000434026],
      [-78.79484499154951, 36.54217900018515],
    ],
    participatingCounties: ["PERSON"],
    focusMaskData: "map_data/person_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Jason (Skeet) Wilborn": ["#e3974e", "#eea941", "#e7c557"],
      "Todd (T.O.) Dunn": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jason (Skeet) Wilborn",
        votes: 1951,
        share: 62.65253692999357,
      },
      {
        candidate: "Todd (T.O.) Dunn",
        votes: 1163,
        share: 37.34746307000642,
      },
    ],
  },
  pitt_county_sheriff_dem: {
    title: "Pitt County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/pitt_county_sheriff_dem.geojson",
    bounds: [
      [-77.70069199093781, 35.32739400027361],
      [-77.08464399117572, 35.833062000026246],
    ],
    participatingCounties: ["PITT"],
    focusMaskData: "map_data/pitt_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Paula S. Dance": ["#e3974e", "#eea941", "#e7c557"],
      "Richie Williams": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Paula S. Dance",
        votes: 11649,
        share: 82.88743418243916,
      },
      {
        candidate: "Richie Williams",
        votes: 2405,
        share: 17.11256581756084,
      },
    ],
  },
  polk_county_sheriff_rep: {
    title: "Polk County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/polk_county_sheriff_rep.geojson",
    bounds: [
      [-82.35925599119007, 35.18508200026704],
      [-81.9628059914483, 35.409508000190606],
    ],
    participatingCounties: ["POLK"],
    focusMaskData: "map_data/polk_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Tim Wright": ["#e3974e", "#eea941", "#e7c557"],
      "Keith Henderson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Clayton Price": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Tim Wright",
        votes: 1424,
        share: 52.7602815857725,
      },
      {
        candidate: "Keith Henderson",
        votes: 650,
        share: 24.08299370137088,
      },
      {
        candidate: "Clayton Price",
        votes: 625,
        share: 23.156724712856615,
      },
    ],
  },
  randolph_county_sheriff_rep: {
    title: "Randolph County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/randolph_county_sheriff_rep.geojson",
    bounds: [
      [-80.06684199067605, 35.50566100040377],
      [-79.54172799087787, 35.920692999726334],
    ],
    participatingCounties: ["RANDOLPH"],
    focusMaskData: "map_data/randolph_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Greg Seabolt": ["#e3974e", "#eea941", "#e7c557"],
      "Brian Arrington": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Chris (Taco) Toriello": ["#af89be", "#b29fde", "#b8b0cb"],
      "Eric Hicks": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Greg Seabolt",
        votes: 9197,
        share: 63.4494653328734,
      },
      {
        candidate: "Brian Arrington",
        votes: 2259,
        share: 15.58468437392204,
      },
      {
        candidate: "Chris (Taco) Toriello",
        votes: 1970,
        share: 13.590893411521217,
      },
      {
        candidate: "Eric Hicks",
        votes: 1069,
        share: 7.37495688168334,
      },
    ],
  },
  rockingham_county_clerk_of_superior_court_rep: {
    title: "Rockingham County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/rockingham_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-80.035119, 36.241463],
      [-79.513638, 36.54247999999999],
    ],
    participatingCounties: ["ROCKINGHAM"],
    focusMaskData: "map_data/rockingham_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Abner M. Bullins": ["#e3974e", "#eea941", "#e7c557"],
      "Kelly Stanfield Carter": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Abner M. Bullins",
        votes: 7469,
        share: 57.72916988715412,
      },
      {
        candidate: "Kelly Stanfield Carter",
        votes: 5469,
        share: 42.27083011284588,
      },
    ],
  },
  rockingham_county_sheriff_dem: {
    title: "Rockingham County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/rockingham_county_sheriff_dem.geojson",
    bounds: [
      [-80.035119, 36.241463],
      [-79.513638, 36.54247999999999],
    ],
    participatingCounties: ["ROCKINGHAM"],
    focusMaskData: "map_data/rockingham_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Franklin Moore": ["#e3974e", "#eea941", "#e7c557"],
      "John Ferrell, Jr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Franklin Moore",
        votes: 2826,
        share: 63.792325056433405,
      },
      {
        candidate: "John Ferrell, Jr.",
        votes: 1604,
        share: 36.207674943566595,
      },
    ],
  },
  rockingham_county_sheriff_rep: {
    title: "Rockingham County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/rockingham_county_sheriff_rep.geojson",
    bounds: [
      [-80.035119, 36.241463],
      [-79.513638, 36.54247999999999],
    ],
    participatingCounties: ["ROCKINGHAM"],
    focusMaskData: "map_data/rockingham_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Billy Parker": ["#e3974e", "#eea941", "#e7c557"],
      "Darren Wright": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Brian Harbour": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Billy Parker",
        votes: 5784,
        share: 43.23839425880242,
      },
      {
        candidate: "Darren Wright",
        votes: 4682,
        share: 35.00037377588398,
      },
      {
        candidate: "Brian Harbour",
        votes: 2911,
        share: 21.7612319653136,
      },
    ],
  },
  rowan_county_clerk_of_superior_court_rep: {
    title: "Rowan County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/rowan_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-80.77158199169146, 35.502033000381395],
      [-80.1828659912653, 35.863473999922256],
    ],
    participatingCounties: ["ROWAN"],
    focusMaskData: "map_data/rowan_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Todd Wyrick": ["#e3974e", "#eea941", "#e7c557"],
      "Harry Warren": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Todd Wyrick",
        votes: 8007,
        share: 65.37393860222078,
      },
      {
        candidate: "Harry Warren",
        votes: 4241,
        share: 34.62606139777923,
      },
    ],
  },
  rowan_county_sheriff_rep: {
    title: "Rowan County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/rowan_county_sheriff_rep.geojson",
    bounds: [
      [-80.77158199169146, 35.502033000381395],
      [-80.1828659912653, 35.863473999922256],
    ],
    participatingCounties: ["ROWAN"],
    focusMaskData: "map_data/rowan_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Jody Burleyson": ["#e3974e", "#eea941", "#e7c557"],
      "Travis Allen": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Tim Harrington": ["#af89be", "#b29fde", "#b8b0cb"],
      "Carl Dangerfield": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Jody Burleyson",
        votes: 6186,
        share: 48.72400756143667,
      },
      {
        candidate: "Travis Allen",
        votes: 5262,
        share: 41.44612476370511,
      },
      {
        candidate: "Tim Harrington",
        votes: 812,
        share: 6.395715185885319,
      },
      {
        candidate: "Carl Dangerfield",
        votes: 436,
        share: 3.4341524889729045,
      },
    ],
  },
  rutherford_county_clerk_of_superior_court_rep: {
    title: "Rutherford County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/rutherford_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Steve H. Owens": ["#e3974e", "#eea941", "#e7c557"],
      "Kandy Keyser Hoyle": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Steve H. Owens",
        votes: 5659,
        share: 62.40626378473754,
      },
      {
        candidate: "Kandy Keyser Hoyle",
        votes: 3409,
        share: 37.59373621526246,
      },
    ],
  },
  rutherford_county_sheriff_rep: {
    title: "Rutherford County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/rutherford_county_sheriff_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Aaron Ellenburg": ["#e3974e", "#eea941", "#e7c557"],
      "Jamie Dunn": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Jason Ray Wease": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Aaron Ellenburg",
        votes: 7460,
        share: 81.03410819031068,
      },
      {
        candidate: "Jamie Dunn",
        votes: 1373,
        share: 14.9141864001738,
      },
      {
        candidate: "Jason Ray Wease",
        votes: 373,
        share: 4.051705409515534,
      },
    ],
  },
  sampson_county_clerk_of_superior_court_rep: {
    title: "Sampson County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/sampson_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-78.67230799081084, 34.55359500007652],
      [-78.11337699089786, 35.31640999984671],
    ],
    participatingCounties: ["SAMPSON"],
    focusMaskData: "map_data/sampson_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "Tammy Grady": ["#e3974e", "#eea941", "#e7c557"],
      "Cashie Phillips Lee": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tammy Grady",
        votes: 3333,
        share: 51.63439194422927,
      },
      {
        candidate: "Cashie Phillips Lee",
        votes: 3122,
        share: 48.36560805577072,
      },
    ],
  },
  sampson_county_schools_board_of_education: {
    title: "Sampson County Schools Board Of Education",
    subtitle: "Vote For 1",
    scope: "countywide",
    data: "map_data/sampson_county_schools_board_of_education.geojson",
    bounds: [
      [-78.67230799081084, 34.55359500007652],
      [-78.11337699089786, 35.31640999984671],
    ],
    participatingCounties: ["SAMPSON"],
    focusMaskData: "map_data/sampson_county_schools_board_of_education_focus_mask.geojson",
    candidates: {
      "Daryll Warren": ["#e3974e", "#eea941", "#e7c557"],
      "Michael S. Elmore": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Krystin Moore McPhail": ["#af89be", "#b29fde", "#b8b0cb"],
      "James Jones": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "E. Sonya M. Powell": ["#c84f4a", "#df7f7b", "#edb3b0"],
      "Mikasa Melvin": ["#ad8731", "#d7b85d", "#ead99a"],
      "Write-In (Miscellaneous)": ["#287d7d", "#61aaa7", "#a5d6d2"],
    },
    results: [
      {
        candidate: "Daryll Warren",
        votes: 1418,
        share: 20.819262956981355,
      },
      {
        candidate: "Michael S. Elmore",
        votes: 1349,
        share: 19.80619585963882,
      },
      {
        candidate: "Krystin Moore McPhail",
        votes: 1287,
        share: 18.895903685215092,
      },
      {
        candidate: "James Jones",
        votes: 992,
        share: 14.56467479077962,
      },
      {
        candidate: "E. Sonya M. Powell",
        votes: 887,
        share: 13.023050946997506,
      },
      {
        candidate: "Mikasa Melvin",
        votes: 866,
        share: 12.71472617824108,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 12,
        share: 0.1761855821465276,
      },
    ],
  },
  sampson_county_sheriff_rep: {
    title: "Sampson County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/sampson_county_sheriff_rep.geojson",
    bounds: [
      [-78.67230799081084, 34.55359500007652],
      [-78.11337699089786, 35.31640999984671],
    ],
    participatingCounties: ["SAMPSON"],
    focusMaskData: "map_data/sampson_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Jimmy Thornton": ["#e3974e", "#eea941", "#e7c557"],
      "Tracy Jackson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jimmy Thornton",
        votes: 4543,
        share: 69.30587337909992,
      },
      {
        candidate: "Tracy Jackson",
        votes: 2012,
        share: 30.694126620900075,
      },
    ],
  },
  scotland_county_board_of_commissioners_spring_hill_twp_rep: {
    title: "Scotland County Board Of Commissioners Spring Hill Twp",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/scotland_county_board_of_commissioners_spring_hill_twp_rep.geojson",
    bounds: [
      [-79.69294399105601, 34.63037900023737],
      [-79.33082499141057, 35.04375599988435],
    ],
    participatingCounties: ["SCOTLAND"],
    focusMaskData: "map_data/scotland_county_board_of_commissioners_spring_hill_twp_rep_focus_mask.geojson",
    candidates: {
      "Bo Frizzell": ["#e3974e", "#eea941", "#e7c557"],
      "Jimmy Watts": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Bo Frizzell",
        votes: 1355,
        share: 63.67481203007519,
      },
      {
        candidate: "Jimmy Watts",
        votes: 773,
        share: 36.32518796992481,
      },
    ],
  },
  scotland_county_clerk_of_superior_court_dem: {
    title: "Scotland County Clerk Of Superior Court",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/scotland_county_clerk_of_superior_court_dem.geojson",
    bounds: [
      [-79.69294399105601, 34.63037900023737],
      [-79.33082499141057, 35.04375599988435],
    ],
    participatingCounties: ["SCOTLAND"],
    focusMaskData: "map_data/scotland_county_clerk_of_superior_court_dem_focus_mask.geojson",
    candidates: {
      "W. Philip McRae": ["#e3974e", "#eea941", "#e7c557"],
      "Addie Pratt": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "W. Philip McRae",
        votes: 1877,
        share: 75.83838383838383,
      },
      {
        candidate: "Addie Pratt",
        votes: 598,
        share: 24.161616161616163,
      },
    ],
  },
  scotland_county_sheriff_rep: {
    title: "Scotland County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/scotland_county_sheriff_rep.geojson",
    bounds: [
      [-79.69294399105601, 34.63037900023737],
      [-79.33082499141057, 35.04375599988435],
    ],
    participatingCounties: ["SCOTLAND"],
    focusMaskData: "map_data/scotland_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Jason L. Butler": ["#e3974e", "#eea941", "#e7c557"],
      "Chris Strickland": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Ronnie Ivey": ["#af89be", "#b29fde", "#b8b0cb"],
      "David Monte": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Jason L. Butler",
        votes: 1139,
        share: 51.819836214740675,
      },
      {
        candidate: "Chris Strickland",
        votes: 751,
        share: 34.16742493175614,
      },
      {
        candidate: "Ronnie Ivey",
        votes: 274,
        share: 12.465878070973613,
      },
      {
        candidate: "David Monte",
        votes: 34,
        share: 1.5468607825295724,
      },
    ],
  },
  stanly_county_board_of_commissioners_at_large_dem: {
    title: "Stanly County Board Of Commissioners At-Large",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/stanly_county_board_of_commissioners_at_large_dem.geojson",
    bounds: [
      [-80.506095990725, 35.14308099936887],
      [-80.05122499175538, 35.504151000015426],
    ],
    participatingCounties: ["STANLY"],
    focusMaskData: "map_data/stanly_county_board_of_commissioners_at_large_dem_focus_mask.geojson",
    candidates: {
      "Gwendolyn Harris": ["#e3974e", "#eea941", "#e7c557"],
      "Kristin Beck": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Gwendolyn Harris",
        votes: 1114,
        share: 62.58426966292134,
      },
      {
        candidate: "Kristin Beck",
        votes: 666,
        share: 37.41573033707865,
      },
    ],
  },
  stokes_county_sheriff_rep: {
    title: "Stokes County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/stokes_county_sheriff_rep.geojson",
    bounds: [
      [-80.45192499163802, 36.25718400009489],
      [-80.02733899068677, 36.55066499972034],
    ],
    participatingCounties: ["STOKES"],
    focusMaskData: "map_data/stokes_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Joey Lemons": ["#e3974e", "#eea941", "#e7c557"],
      "Steven Bingman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Joey Lemons",
        votes: 5010,
        share: 76.67584940312213,
      },
      {
        candidate: "Steven Bingman",
        votes: 1524,
        share: 23.324150596877868,
      },
    ],
  },
  surry_county_clerk_of_superior_court_rep: {
    title: "Surry County Clerk Of Superior Court",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/surry_county_clerk_of_superior_court_rep.geojson",
    bounds: [
      [-80.97364299148163, 36.23630500027055],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY"],
    focusMaskData: "map_data/surry_county_clerk_of_superior_court_rep_focus_mask.geojson",
    candidates: {
      "L. Neil Brendle": ["#e3974e", "#eea941", "#e7c557"],
      "Kyla Barnes Johnson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "L. Neil Brendle",
        votes: 6611,
        share: 58.08293797223687,
      },
      {
        candidate: "Kyla Barnes Johnson",
        votes: 4771,
        share: 41.91706202776314,
      },
    ],
  },
  surry_county_sheriff_rep: {
    title: "Surry County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/surry_county_sheriff_rep.geojson",
    bounds: [
      [-80.97364299148163, 36.23630500027055],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY"],
    focusMaskData: "map_data/surry_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Brandon Johnson": ["#e3974e", "#eea941", "#e7c557"],
      "Steve C. Hiatt": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brandon Johnson",
        votes: 6866,
        share: 58.15194376217499,
      },
      {
        candidate: "Steve C. Hiatt",
        votes: 4941,
        share: 41.84805623782502,
      },
    ],
  },
  swain_county_board_of_commissioners_chairman_dem: {
    title: "Swain County Board Of Commissioners Chairman",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/swain_county_board_of_commissioners_chairman_dem.geojson",
    bounds: [
      [-83.95339199169345, 35.27910900030155],
      [-83.15583499099172, 35.69572300067423],
    ],
    participatingCounties: ["SWAIN"],
    focusMaskData: "map_data/swain_county_board_of_commissioners_chairman_dem_focus_mask.geojson",
    candidates: {
      "Jeramy Shuler": ["#e3974e", "#eea941", "#e7c557"],
      "Edward Larry Simonds": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jeramy Shuler",
        votes: 643,
        share: 67.82700421940928,
      },
      {
        candidate: "Edward Larry Simonds",
        votes: 305,
        share: 32.17299578059072,
      },
    ],
  },
  swain_county_board_of_commissioners_chairman_rep: {
    title: "Swain County Board Of Commissioners Chairman",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/swain_county_board_of_commissioners_chairman_rep.geojson",
    bounds: [
      [-83.95339199169345, 35.27910900030155],
      [-83.15583499099172, 35.69572300067423],
    ],
    participatingCounties: ["SWAIN"],
    focusMaskData: "map_data/swain_county_board_of_commissioners_chairman_rep_focus_mask.geojson",
    candidates: {
      "Robert (Robbie) Brown": ["#e3974e", "#eea941", "#e7c557"],
      "Bobby Jenkins": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Courtney (Wilde) Dills": ["#af89be", "#b29fde", "#b8b0cb"],
      "Eugene Shuler": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Robert (Robbie) Brown",
        votes: 513,
        share: 35.77405857740586,
      },
      {
        candidate: "Bobby Jenkins",
        votes: 443,
        share: 30.892608089260808,
      },
      {
        candidate: "Courtney (Wilde) Dills",
        votes: 349,
        share: 24.337517433751746,
      },
      {
        candidate: "Eugene Shuler",
        votes: 129,
        share: 8.99581589958159,
      },
    ],
  },
  swain_county_sheriff_dem: {
    title: "Swain County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/swain_county_sheriff_dem.geojson",
    bounds: [
      [-83.95339199169345, 35.27910900030155],
      [-83.15583499099172, 35.69572300067423],
    ],
    participatingCounties: ["SWAIN"],
    focusMaskData: "map_data/swain_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "David Southards": ["#e3974e", "#eea941", "#e7c557"],
      "Douglas (Tank) Anthony": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "David Southards",
        votes: 661,
        share: 71.38228941684666,
      },
      {
        candidate: "Douglas (Tank) Anthony",
        votes: 265,
        share: 28.61771058315335,
      },
    ],
  },
  swain_county_sheriff_rep: {
    title: "Swain County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/swain_county_sheriff_rep.geojson",
    bounds: [
      [-83.95339199169345, 35.27910900030155],
      [-83.15583499099172, 35.69572300067423],
    ],
    participatingCounties: ["SWAIN"],
    focusMaskData: "map_data/swain_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Brian E. Kirkland": ["#e3974e", "#eea941", "#e7c557"],
      "Wayne Dover": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brian E. Kirkland",
        votes: 1283,
        share: 87.39782016348774,
      },
      {
        candidate: "Wayne Dover",
        votes: 185,
        share: 12.602179836512262,
      },
    ],
  },
  tyrrell_county_board_of_education: {
    title: "Tyrrell County Board Of Education",
    subtitle: "Vote For 1",
    scope: "countywide",
    data: "map_data/tyrrell_county_board_of_education.geojson",
    bounds: [
      [-76.40597099139036, 35.59800099999521],
      [-75.84004599091486, 36.09672500013943],
    ],
    participatingCounties: ["TYRRELL"],
    focusMaskData: "map_data/tyrrell_county_board_of_education_focus_mask.geojson",
    candidates: {
      "Jana Liverman Rawls": ["#e3974e", "#eea941", "#e7c557"],
      "Joni Marie Liverman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Karen Page Clough": ["#af89be", "#b29fde", "#b8b0cb"],
      "Monica Liverman": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Write-In (Miscellaneous)": ["#c84f4a", "#df7f7b", "#edb3b0"],
    },
    results: [
      {
        candidate: "Jana Liverman Rawls",
        votes: 266,
        share: 37.20279720279721,
      },
      {
        candidate: "Joni Marie Liverman",
        votes: 219,
        share: 30.629370629370623,
      },
      {
        candidate: "Karen Page Clough",
        votes: 146,
        share: 20.41958041958042,
      },
      {
        candidate: "Monica Liverman",
        votes: 82,
        share: 11.468531468531468,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 2,
        share: 0.2797202797202797,
      },
    ],
  },
  union_county_board_of_education_at_large_rep: {
    title: "Union County Board Of Education At-Large",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/union_county_board_of_education_at_large_rep.geojson",
    bounds: [
      [-80.84027799153917, 34.813906000419735],
      [-80.27682899107616, 35.20841200048002],
    ],
    participatingCounties: ["UNION"],
    focusMaskData: "map_data/union_county_board_of_education_at_large_rep_focus_mask.geojson",
    candidates: {
      "Linda O. Robinson": ["#e3974e", "#eea941", "#e7c557"],
      "Sandra Hernandez Greene": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Wilden Harbour": ["#af89be", "#b29fde", "#b8b0cb"],
      "Raven Faherty": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Linda O. Robinson",
        votes: 8454,
        share: 56.47671855167346,
      },
      {
        candidate: "Sandra Hernandez Greene",
        votes: 2252,
        share: 15.044425145300288,
      },
      {
        candidate: "Wilden Harbour",
        votes: 2162,
        share: 14.443182577326477,
      },
      {
        candidate: "Raven Faherty",
        votes: 2101,
        share: 14.03567372569978,
      },
    ],
  },
  union_county_sheriff_rep: {
    title: "Union County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/union_county_sheriff_rep.geojson",
    bounds: [
      [-80.84027799153917, 34.813906000419735],
      [-80.27682899107616, 35.20841200048002],
    ],
    participatingCounties: ["UNION"],
    focusMaskData: "map_data/union_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Eddie Cathey": ["#e3974e", "#eea941", "#e7c557"],
      "Todd Elmore": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Terry Boag": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Eddie Cathey",
        votes: 14132,
        share: 84.45081869248237,
      },
      {
        candidate: "Todd Elmore",
        votes: 2091,
        share: 12.495518106848332,
      },
      {
        candidate: "Terry Boag",
        votes: 511,
        share: 3.053663200669296,
      },
    ],
  },
  vance_county_clerk_of_superior_court_dem: {
    title: "Vance County Clerk Of Superior Court",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/vance_county_clerk_of_superior_court_dem.geojson",
    bounds: [
      [-78.51122399103541, 36.163637000336024],
      [-78.27716499084627, 36.543822000227344],
    ],
    participatingCounties: ["VANCE"],
    focusMaskData: "map_data/vance_county_clerk_of_superior_court_dem_focus_mask.geojson",
    candidates: {
      "Eric Burwell": ["#e3974e", "#eea941", "#e7c557"],
      "Amanda Burnette": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Eric Burwell",
        votes: 2441,
        share: 52.43823845327604,
      },
      {
        candidate: "Amanda Burnette",
        votes: 2214,
        share: 47.56176154672395,
      },
    ],
  },
  vance_county_sheriff_dem: {
    title: "Vance County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/vance_county_sheriff_dem.geojson",
    bounds: [
      [-78.51122399103541, 36.163637000336024],
      [-78.27716499084627, 36.543822000227344],
    ],
    participatingCounties: ["VANCE"],
    focusMaskData: "map_data/vance_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Curtis Brame": ["#e3974e", "#eea941", "#e7c557"],
      "Sterlin M. Walker, Jr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Sean Alston, Sr.": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Curtis Brame",
        votes: 3316,
        share: 70.80931027119368,
      },
      {
        candidate: "Sterlin M. Walker, Jr.",
        votes: 733,
        share: 15.65235959854794,
      },
      {
        candidate: "Sean Alston, Sr.",
        votes: 634,
        share: 13.53833013025838,
      },
    ],
  },
  washington_county_sheriff_dem: {
    title: "Washington County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/washington_county_sheriff_dem.geojson",
    bounds: [
      [-76.84726399097558, 35.69757899943673],
      [-76.35355399113027, 36.02689699966375],
    ],
    participatingCounties: ["WASHINGTON"],
    focusMaskData: "map_data/washington_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Arlo Norman": ["#e3974e", "#eea941", "#e7c557"],
      "William Downing": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Arlo Norman",
        votes: 1382,
        share: 86.70012547051444,
      },
      {
        candidate: "William Downing",
        votes: 212,
        share: 13.29987452948557,
      },
    ],
  },
  watauga_county_clerk_of_superior_court_dem: {
    title: "Watauga County Clerk Of Superior Court",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/watauga_county_clerk_of_superior_court_dem.geojson",
    bounds: [
      [-81.91811899073072, 36.11145900036319],
      [-81.45579199105882, 36.39130900039988],
    ],
    participatingCounties: ["WATAUGA"],
    focusMaskData: "map_data/watauga_county_clerk_of_superior_court_dem_focus_mask.geojson",
    candidates: {
      "Holly Fehl": ["#e3974e", "#eea941", "#e7c557"],
      "Jon Fullen": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Holly Fehl",
        votes: 4119,
        share: 86.22566464308143,
      },
      {
        candidate: "Jon Fullen",
        votes: 658,
        share: 13.774335356918568,
      },
    ],
  },
  wayne_county_board_of_commissioners_at_large_unexpired_rep: {
    title: "Wayne County Board Of Commissioners At-Large (Unexpired)",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/wayne_county_board_of_commissioners_at_large_unexpired_rep.geojson",
    bounds: [
      [-78.30657999093587, 35.14631500008711],
      [-77.79985899167363, 35.59780600001605],
    ],
    participatingCounties: ["WAYNE"],
    focusMaskData: "map_data/wayne_county_board_of_commissioners_at_large_unexpired_rep_focus_mask.geojson",
    candidates: {
      "Kevin Johnson": ["#e3974e", "#eea941", "#e7c557"],
      "Jennifer Smith Strickland": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kevin Johnson",
        votes: 5139,
        share: 55.10991957104557,
      },
      {
        candidate: "Jennifer Smith Strickland",
        votes: 4186,
        share: 44.89008042895442,
      },
    ],
  },
  wayne_county_sheriff_rep: {
    title: "Wayne County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/wayne_county_sheriff_rep.geojson",
    bounds: [
      [-78.30657999093587, 35.14631500008711],
      [-77.79985899167363, 35.59780600001605],
    ],
    participatingCounties: ["WAYNE"],
    focusMaskData: "map_data/wayne_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Larry M. Pierce": ["#e3974e", "#eea941", "#e7c557"],
      "Ricky Hooks": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Stephen (Stevie) Howell": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Larry M. Pierce",
        votes: 4695,
        share: 49.708840656431974,
      },
      {
        candidate: "Ricky Hooks",
        votes: 4064,
        share: 43.02805717310746,
      },
      {
        candidate: "Stephen (Stevie) Howell",
        votes: 686,
        share: 7.263102170460561,
      },
    ],
  },
  wilkes_county_sheriff_rep: {
    title: "Wilkes County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/wilkes_county_sheriff_rep.geojson",
    bounds: [
      [-81.54548799123032, 35.99482900057771],
      [-80.86874599131717, 36.440773000147274],
    ],
    participatingCounties: ["WILKES"],
    focusMaskData: "map_data/wilkes_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Chris Shew": ["#e3974e", "#eea941", "#e7c557"],
      "Jamie Dowell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "David Gambill": ["#af89be", "#b29fde", "#b8b0cb"],
      "Eric L. Byrd": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "David Carson": ["#c84f4a", "#df7f7b", "#edb3b0"],
      "Sharon Call-Diaz": ["#ad8731", "#d7b85d", "#ead99a"],
    },
    results: [
      {
        candidate: "Chris Shew",
        votes: 3583,
        share: 33.67797725350127,
      },
      {
        candidate: "Jamie Dowell",
        votes: 3370,
        share: 31.675909389980266,
      },
      {
        candidate: "David Gambill",
        votes: 1260,
        share: 11.843218347589058,
      },
      {
        candidate: "Eric L. Byrd",
        votes: 1126,
        share: 10.583701475702604,
      },
      {
        candidate: "David Carson",
        votes: 1082,
        share: 10.170128771501082,
      },
      {
        candidate: "Sharon Call-Diaz",
        votes: 218,
        share: 2.049064761725726,
      },
    ],
  },
  wilson_county_sheriff_dem: {
    title: "Wilson County Sheriff",
    subtitle: "Democratic Primary",
    scope: "countywide",
    data: "map_data/wilson_county_sheriff_dem.geojson",
    bounds: [
      [-78.19211699103644, 35.58343600028771],
      [-77.6651309910595, 35.86720799959774],
    ],
    participatingCounties: ["WILSON"],
    focusMaskData: "map_data/wilson_county_sheriff_dem_focus_mask.geojson",
    candidates: {
      "Brandon L. Barbrey": ["#e3974e", "#eea941", "#e7c557"],
      "Christopher C. (Chris) Boykin": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Davonta Ferguson": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Brandon L. Barbrey",
        votes: 3321,
        share: 49.51543163858655,
      },
      {
        candidate: "Christopher C. (Chris) Boykin",
        votes: 2329,
        share: 34.72491426867452,
      },
      {
        candidate: "Davonta Ferguson",
        votes: 1057,
        share: 15.759654092738929,
      },
    ],
  },
  wilson_county_sheriff_rep: {
    title: "Wilson County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/wilson_county_sheriff_rep.geojson",
    bounds: [
      [-78.19211699103644, 35.58343600028771],
      [-77.6651309910595, 35.86720799959774],
    ],
    participatingCounties: ["WILSON"],
    focusMaskData: "map_data/wilson_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Bobby Knight": ["#e3974e", "#eea941", "#e7c557"],
      "Kevin Travis Raper": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Bobby Knight",
        votes: 1944,
        share: 64.28571428571429,
      },
      {
        candidate: "Kevin Travis Raper",
        votes: 1080,
        share: 35.714285714285715,
      },
    ],
  },
  yadkin_county_board_of_education_unexpired: {
    title: "Yadkin County Board Of Education",
    subtitle: "Unexpired Primary",
    scope: "countywide",
    data: "map_data/yadkin_county_board_of_education_unexpired.geojson",
    bounds: [
      [-80.88159099130746, 36.04654500043211],
      [-80.43224099146765, 36.287928999916325],
    ],
    participatingCounties: ["YADKIN"],
    focusMaskData: "map_data/yadkin_county_board_of_education_unexpired_focus_mask.geojson",
    candidates: {
      "Angela Ball Parks": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Alicia Gatton Eads (Write-In)": ["#af89be", "#b29fde", "#b8b0cb"],
      "Tommie Haynes Paul (Write-In)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Angela Ball Parks",
        votes: 5779,
        share: 98.09879477168565,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 102,
        share: 1.7314547615005942,
      },
      {
        candidate: "Alicia Gatton Eads (Write-In)",
        votes: 5,
        share: 0.0848752334068918,
      },
      {
        candidate: "Tommie Haynes Paul (Write-In)",
        votes: 5,
        share: 0.0848752334068918,
      },
    ],
  },
  yadkin_county_sheriff_rep: {
    title: "Yadkin County Sheriff",
    subtitle: "Republican Primary",
    scope: "countywide",
    data: "map_data/yadkin_county_sheriff_rep.geojson",
    bounds: [
      [-80.88159099130746, 36.04654500043211],
      [-80.43224099146765, 36.287928999916325],
    ],
    participatingCounties: ["YADKIN"],
    focusMaskData: "map_data/yadkin_county_sheriff_rep_focus_mask.geojson",
    candidates: {
      "Nick Smitherman": ["#e3974e", "#eea941", "#e7c557"],
      "Robert Reavis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Nick Smitherman",
        votes: 3953,
        share: 63.52241684075205,
      },
      {
        candidate: "Robert Reavis",
        votes: 2270,
        share: 36.47758315924795,
      },
    ],
  },
  district_attorney_district_36_rep: {
    title: "District Attorney District 36",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/district_attorney_district_36_rep.geojson",
    bounds: [
      [-81.98693899159551, 35.55823200037704],
      [-81.32845099114343, 36.12261900022834],
    ],
    participatingCounties: ["BURKE", "CALDWELL"],
    focusMaskData: "map_data/district_attorney_district_36_rep_focus_mask.geojson",
    candidates: {
      "Mitch Walker": ["#e3974e", "#eea941", "#e7c557"],
      "Taylor A. Rockett": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mitch Walker",
        votes: 8605,
        share: 62.64560279557367,
      },
      {
        candidate: "Taylor A. Rockett",
        votes: 5131,
        share: 37.35439720442633,
      },
    ],
  },
  district_attorney_district_40_dem: {
    title: "District Attorney District 40",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/district_attorney_district_40_dem.geojson",
    bounds: [
      [-82.88810699101593, 35.416450000601074],
      [-82.16904899089364, 35.82411000060308],
    ],
    participatingCounties: ["BUNCOMBE"],
    focusMaskData: "map_data/district_attorney_district_40_dem_focus_mask.geojson",
    candidates: {
      "Martin Moore": ["#e3974e", "#eea941", "#e7c557"],
      "Courtney Virginia Booth": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Katie Kurdys": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Martin Moore",
        votes: 16191,
        share: 39.26709189241627,
      },
      {
        candidate: "Courtney Virginia Booth",
        votes: 14869,
        share: 36.06092207697718,
      },
      {
        candidate: "Katie Kurdys",
        votes: 10173,
        share: 24.67198603060655,
      },
    ],
  },
  district_attorney_district_41_rep: {
    title: "District Attorney District 41",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/district_attorney_district_41_rep.geojson",
    bounds: [
      [-82.29501499128583, 35.18061100007776],
      [-81.69198899066494, 35.960050000143475],
    ],
    participatingCounties: ["MCDOWELL", "RUTHERFORD"],
    focusMaskData: "map_data/district_attorney_district_41_rep_focus_mask.geojson",
    candidates: {
      "David Norris": ["#e3974e", "#eea941", "#e7c557"],
      "Ted Bell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "David Norris",
        votes: 9347,
        share: 65.28146389160497,
      },
      {
        candidate: "Ted Bell",
        votes: 4971,
        share: 34.71853610839503,
      },
    ],
  },
  nc_district_court_judge_district_02_seat_02_rep: {
    title: "N.C. District Court Judge District 2 Seat 2",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_02_seat_02_rep.geojson",
    bounds: [
      [-77.40919999166805, 35.00601799969667],
      [-75.73661999168006, 36.09672500013943],
    ],
    participatingCounties: ["BEAUFORT", "HYDE", "MARTIN", "TYRRELL", "WASHINGTON"],
    focusMaskData: "map_data/nc_district_court_judge_district_02_seat_02_rep_focus_mask.geojson",
    candidates: {
      "Lloyd Williams": ["#e3974e", "#eea941", "#e7c557"],
      "Shannon A. Jarvis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lloyd Williams",
        votes: 6210,
        share: 57.58531157270029,
      },
      {
        candidate: "Shannon A. Jarvis",
        votes: 4574,
        share: 42.4146884272997,
      },
    ],
  },
  nc_district_court_judge_district_10_a_seat_01_rep: {
    title: "N.C. District Court Judge District 10A Seat 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_10_a_seat_01_rep.geojson",
    bounds: [
      [-78.75428399092935, 35.78358200027878],
      [-78.253910991134, 36.076442999977246],
    ],
    participatingCounties: ["WAKE"],
    focusMaskData: "map_data/nc_district_court_judge_district_10_a_seat_01_rep_focus_mask.geojson",
    candidates: {
      "Rashad A. Hauter": ["#e3974e", "#eea941", "#e7c557"],
      "Daniel Wright": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Rashad A. Hauter",
        votes: 5927,
        share: 64.40991088893718,
      },
      {
        candidate: "Daniel Wright",
        votes: 3275,
        share: 35.59008911106281,
      },
    ],
  },
  nc_district_court_judge_district_14_seat_03_dem: {
    title: "N.C. District Court Judge District 14 Seat 3",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_14_seat_03_dem.geojson",
    bounds: [
      [-79.11292099145011, 34.834862000377825],
      [-78.49470499170005, 35.266900000412384],
    ],
    participatingCounties: ["CUMBERLAND"],
    focusMaskData: "map_data/nc_district_court_judge_district_14_seat_03_dem_focus_mask.geojson",
    candidates: {
      "Sherry Miller": ["#e3974e", "#eea941", "#e7c557"],
      "Tyran Jamail George": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Sherry Miller",
        votes: 12620,
        share: 56.83916587848488,
      },
      {
        candidate: "Tyran Jamail George",
        votes: 9583,
        share: 43.16083412151512,
      },
    ],
  },
  nc_district_court_judge_district_14_seat_05_dem: {
    title: "N.C. District Court Judge District 14 Seat 5",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_14_seat_05_dem.geojson",
    bounds: [
      [-79.11292099145011, 34.834862000377825],
      [-78.49470499170005, 35.266900000412384],
    ],
    participatingCounties: ["CUMBERLAND"],
    focusMaskData: "map_data/nc_district_court_judge_district_14_seat_05_dem_focus_mask.geojson",
    candidates: {
      "Cheri Siler-Mack": ["#e3974e", "#eea941", "#e7c557"],
      "Brenee Orozco": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Cheri Siler-Mack",
        votes: 14821,
        share: 66.14155658693323,
      },
      {
        candidate: "Brenee Orozco",
        votes: 7587,
        share: 33.858443413066766,
      },
    ],
  },
  nc_district_court_judge_district_16_seat_02_dem: {
    title: "N.C. District Court Judge District 16 Seat 2",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_16_seat_02_dem.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/nc_district_court_judge_district_16_seat_02_dem_focus_mask.geojson",
    candidates: {
      "Doretta L. Walker": ["#e3974e", "#eea941", "#e7c557"],
      "Keith Bishop": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Doretta L. Walker",
        votes: 39473,
        share: 75.1408665194548,
      },
      {
        candidate: "Keith Bishop",
        votes: 13059,
        share: 24.859133480545193,
      },
    ],
  },
  nc_district_court_judge_district_16_seat_05_dem: {
    title: "N.C. District Court Judge District 16 Seat 5",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_16_seat_05_dem.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/nc_district_court_judge_district_16_seat_05_dem_focus_mask.geojson",
    candidates: {
      "Christy A. Hamilton Malott": ["#e3974e", "#eea941", "#e7c557"],
      "Clayton Jones": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Christy A. Hamilton Malott",
        votes: 38905,
        share: 67.52581792935868,
      },
      {
        candidate: "Clayton Jones",
        votes: 18710,
        share: 32.47418207064133,
      },
    ],
  },
  nc_district_court_judge_district_26_seat_18_dem: {
    title: "N.C. District Court Judge District 26 Seat 18",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_26_seat_18_dem.geojson",
    bounds: [
      [-81.0581989916296, 35.001692000436584],
      [-80.55034899154798, 35.51478499984877],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/nc_district_court_judge_district_26_seat_18_dem_focus_mask.geojson",
    candidates: {
      "Habekah Cannon": ["#e3974e", "#eea941", "#e7c557"],
      "Cecilia Oseguera": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Habekah Cannon",
        votes: 50442,
        share: 52.02190526283221,
      },
      {
        candidate: "Cecilia Oseguera",
        votes: 46521,
        share: 47.97809473716779,
      },
    ],
  },
  nc_district_court_judge_district_29_seat_01_rep: {
    title: "N.C. District Court Judge District 29 Seat 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_29_seat_01_rep.geojson",
    bounds: [
      [-79.76795699112654, 34.833717000299934],
      [-79.03477499107328, 35.518001999711664],
    ],
    participatingCounties: ["HOKE", "MOORE"],
    focusMaskData: "map_data/nc_district_court_judge_district_29_seat_01_rep_focus_mask.geojson",
    candidates: {
      "Kimberly Furr Davis": ["#e3974e", "#eea941", "#e7c557"],
      "Lindsey Smith": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kimberly Furr Davis",
        votes: 9161,
        share: 73.93269308368977,
      },
      {
        candidate: "Lindsey Smith",
        votes: 3230,
        share: 26.067306916310223,
      },
    ],
  },
  nc_district_court_judge_district_29_seat_02_rep: {
    title: "N.C. District Court Judge District 29 Seat 2",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_29_seat_02_rep.geojson",
    bounds: [
      [-79.76795699112654, 34.833717000299934],
      [-79.03477499107328, 35.518001999711664],
    ],
    participatingCounties: ["HOKE", "MOORE"],
    focusMaskData: "map_data/nc_district_court_judge_district_29_seat_02_rep_focus_mask.geojson",
    candidates: {
      "Beth Tanner": ["#e3974e", "#eea941", "#e7c557"],
      "Sharlene Anderson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Marissa Curry": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Beth Tanner",
        votes: 6131,
        share: 48.701247120502025,
      },
      {
        candidate: "Sharlene Anderson",
        votes: 5165,
        share: 41.027881483835095,
      },
      {
        candidate: "Marissa Curry",
        votes: 1293,
        share: 10.27087139566288,
      },
    ],
  },
  nc_district_court_judge_district_31_seat_04_dem: {
    title: "N.C. District Court Judge District 31 Seat 4",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_31_seat_04_dem.geojson",
    bounds: [
      [-80.51668199123979, 35.97276199970947],
      [-80.03511899082645, 36.2615149998244],
    ],
    participatingCounties: ["FORSYTH"],
    focusMaskData: "map_data/nc_district_court_judge_district_31_seat_04_dem_focus_mask.geojson",
    candidates: {
      "Cheryl Andrews McDonald": ["#e3974e", "#eea941", "#e7c557"],
      "Lauren A. Tuttle": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Cheryl Andrews McDonald",
        votes: 19987,
        share: 62.60022550739163,
      },
      {
        candidate: "Lauren A. Tuttle",
        votes: 11941,
        share: 37.399774492608366,
      },
    ],
  },
  nc_district_court_judge_district_32_seat_06_unexpired_rep: {
    title: "N.C. District Court Judge District 32 Seat 6 (Unexpired)",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_32_seat_06_unexpired_rep.geojson",
    bounds: [
      [-81.3440339917135, 35.48847300007011],
      [-80.69319699065278, 36.0588099998011],
    ],
    participatingCounties: ["ALEXANDER", "IREDELL"],
    focusMaskData: "map_data/nc_district_court_judge_district_32_seat_06_unexpired_rep_focus_mask.geojson",
    candidates: {
      "Martin J. Gottholm": ["#e3974e", "#eea941", "#e7c557"],
      "Jessie Conley": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Martin J. Gottholm",
        votes: 9158,
        share: 54.237488895469355,
      },
      {
        candidate: "Jessie Conley",
        votes: 7727,
        share: 45.76251110453065,
      },
    ],
  },
  nc_district_court_judge_district_33_seat_04_rep: {
    title: "N.C. District Court Judge District 33 Seat 4",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_33_seat_04_rep.geojson",
    bounds: [
      [-80.70755799098339, 35.50414100030971],
      [-80.04323799090182, 36.06265499997004],
    ],
    participatingCounties: ["DAVIDSON", "DAVIE"],
    focusMaskData: "map_data/nc_district_court_judge_district_33_seat_04_rep_focus_mask.geojson",
    candidates: {
      "Jim Hedrick": ["#e3974e", "#eea941", "#e7c557"],
      "David S. Doherty": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jim Hedrick",
        votes: 14048,
        share: 70.39839639188173,
      },
      {
        candidate: "David S. Doherty",
        votes: 5907,
        share: 29.601603608118264,
      },
    ],
  },
  nc_district_court_judge_district_34_seat_02_rep: {
    title: "N.C. District Court Judge District 34 Seat 2",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_34_seat_02_rep.geojson",
    bounds: [
      [-81.74192799087766, 35.99482900057771],
      [-80.43224099146765, 36.588136999894786],
    ],
    participatingCounties: ["ALLEGHANY", "ASHE", "WILKES", "YADKIN"],
    focusMaskData: "map_data/nc_district_court_judge_district_34_seat_02_rep_focus_mask.geojson",
    candidates: {
      "Andrew Warren": ["#e3974e", "#eea941", "#e7c557"],
      "Kellie Southard Myers": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Andrew Warren",
        votes: 14226,
        share: 68.40409674472279,
      },
      {
        candidate: "Kellie Southard Myers",
        votes: 6571,
        share: 31.595903255277204,
      },
    ],
  },
  nc_district_court_judge_district_35_seat_01_rep: {
    title: "N.C. District Court Judge District 35 Seat 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_35_seat_01_rep.geojson",
    bounds: [
      [-82.96289999074679, 35.6781510000963],
      [-81.45579199105882, 36.39130900039988],
    ],
    participatingCounties: ["AVERY", "MADISON", "MITCHELL", "WATAUGA", "YANCEY"],
    focusMaskData: "map_data/nc_district_court_judge_district_35_seat_01_rep_focus_mask.geojson",
    candidates: {
      "Eric F. Eller": ["#e3974e", "#eea941", "#e7c557"],
      "S. Justin Ray": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Eric F. Eller",
        votes: 5628,
        share: 54.07898529835688,
      },
      {
        candidate: "S. Justin Ray",
        votes: 4779,
        share: 45.92101470164312,
      },
    ],
  },
  nc_district_court_judge_district_36_seat_05_rep: {
    title: "N.C. District Court Judge District 36 Seat 5",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_36_seat_05_rep.geojson",
    bounds: [
      [-81.98693899159551, 35.547020000032326],
      [-80.92521299124598, 36.12261900022834],
    ],
    participatingCounties: ["BURKE", "CALDWELL", "CATAWBA"],
    focusMaskData: "map_data/nc_district_court_judge_district_36_seat_05_rep_focus_mask.geojson",
    candidates: {
      "Gregory R. (Greg) Hayes": ["#e3974e", "#eea941", "#e7c557"],
      "Amber Eades Crouch": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Gregory R. (Greg) Hayes",
        votes: 14747,
        share: 51.12852338522346,
      },
      {
        candidate: "Amber Eades Crouch",
        votes: 14096,
        share: 48.87147661477655,
      },
    ],
  },
  nc_district_court_judge_district_37_seat_04_rep: {
    title: "N.C. District Court Judge District 37 Seat 4",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_37_seat_04_rep.geojson",
    bounds: [
      [-80.06684199067605, 35.50566100040377],
      [-79.54172799087787, 35.920692999726334],
    ],
    participatingCounties: ["RANDOLPH"],
    focusMaskData: "map_data/nc_district_court_judge_district_37_seat_04_rep_focus_mask.geojson",
    candidates: {
      "Jodi M. Allred": ["#e3974e", "#eea941", "#e7c557"],
      "Allison C. Layton": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Geoffrey C. Crawford": ["#af89be", "#b29fde", "#b8b0cb"],
      "Chelsie L. Embler": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Jodi M. Allred",
        votes: 5536,
        share: 39.818744155937566,
      },
      {
        candidate: "Allison C. Layton",
        votes: 4372,
        share: 31.44645040638711,
      },
      {
        candidate: "Geoffrey C. Crawford",
        votes: 2010,
        share: 14.457311371646409,
      },
      {
        candidate: "Chelsie L. Embler",
        votes: 1985,
        share: 14.277494066028916,
      },
    ],
  },
  nc_district_court_judge_district_40_seat_03_dem: {
    title: "N.C. District Court Judge District 40 Seat 3",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_40_seat_03_dem.geojson",
    bounds: [
      [-82.88810699101593, 35.416450000601074],
      [-82.16904899089364, 35.82411000060308],
    ],
    participatingCounties: ["BUNCOMBE"],
    focusMaskData: "map_data/nc_district_court_judge_district_40_seat_03_dem_focus_mask.geojson",
    candidates: {
      "Ben Scales": ["#e3974e", "#eea941", "#e7c557"],
      "James H. Mills": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Ben Scales",
        votes: 20691,
        share: 51.399826108557946,
      },
      {
        candidate: "James H. Mills",
        votes: 19564,
        share: 48.600173891442054,
      },
    ],
  },
  nc_district_court_judge_district_41_seat_01_rep: {
    title: "N.C. District Court Judge District 41 Seat 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_district_court_judge_district_41_seat_01_rep.geojson",
    bounds: [
      [-82.29501499128583, 35.18061100007776],
      [-81.69198899066494, 35.960050000143475],
    ],
    participatingCounties: ["MCDOWELL", "RUTHERFORD"],
    focusMaskData: "map_data/nc_district_court_judge_district_41_seat_01_rep_focus_mask.geojson",
    candidates: {
      "Robert K. Martelle": ["#e3974e", "#eea941", "#e7c557"],
      "Andrew LaBreche": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Robert K. Martelle",
        votes: 8394,
        share: 61.8843998820407,
      },
      {
        candidate: "Andrew LaBreche",
        votes: 5170,
        share: 38.1156001179593,
      },
    ],
  },
  nc_house_of_representatives_district_001_rep: {
    title: "N.C. House District 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_001_rep.geojson",
    bounds: [
      [-76.84726399097558, 35.57028999943414],
      [-75.62146099163223, 36.55091599969266],
    ],
    participatingCounties: ["CHOWAN", "CURRITUCK", "DARE", "PERQUIMANS", "TYRRELL", "WASHINGTON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_001_rep_focus_mask.geojson",
    candidates: {
      "Edward C. Goodwin": ["#e3974e", "#eea941", "#e7c557"],
      "John C. Spruill": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Edward C. Goodwin",
        votes: 5078,
        share: 52.50749663943749,
      },
      {
        candidate: "John C. Spruill",
        votes: 4593,
        share: 47.4925033605625,
      },
    ],
  },
  nc_house_of_representatives_district_004_rep: {
    title: "N.C. House District 4",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_004_rep.geojson",
    bounds: [
      [-78.30657999093587, 34.71020099951216],
      [-77.65109299129914, 35.39378999949244],
    ],
    participatingCounties: ["DUPLIN", "WAYNE"],
    focusMaskData: "map_data/nc_house_of_representatives_district_004_rep_focus_mask.geojson",
    candidates: {
      "Jimmy Dixon": ["#e3974e", "#eea941", "#e7c557"],
      "Marcella Barbour": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jimmy Dixon",
        votes: 5489,
        share: 81.66939443535188,
      },
      {
        candidate: "Marcella Barbour",
        votes: 1232,
        share: 18.330605564648117,
      },
    ],
  },
  nc_house_of_representatives_district_006_dem: {
    title: "N.C. House District 6",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_006_dem.geojson",
    bounds: [
      [-79.22302284755312, 35.192011999664835],
      [-78.63536899082825, 35.58368199983635],
    ],
    participatingCounties: ["HARNETT"],
    focusMaskData: "map_data/nc_house_of_representatives_district_006_dem_focus_mask.geojson",
    candidates: {
      "Tony Spears": ["#e3974e", "#eea941", "#e7c557"],
      "Joshua P. Estep": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tony Spears",
        votes: 2489,
        share: 60.3247697527872,
      },
      {
        candidate: "Joshua P. Estep",
        votes: 1637,
        share: 39.675230247212795,
      },
    ],
  },
  nc_house_of_representatives_district_006_rep: {
    title: "N.C. House District 6",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_006_rep.geojson",
    bounds: [
      [-79.22302284755312, 35.192011999664835],
      [-78.63536899082825, 35.58368199983635],
    ],
    participatingCounties: ["HARNETT"],
    focusMaskData: "map_data/nc_house_of_representatives_district_006_rep_focus_mask.geojson",
    candidates: {
      "Joe Pike": ["#e3974e", "#eea941", "#e7c557"],
      "W. H. (Bill) Morris": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Joe Pike",
        votes: 2139,
        share: 53.394907638542186,
      },
      {
        candidate: "W. H. (Bill) Morris",
        votes: 1867,
        share: 46.605092361457814,
      },
    ],
  },
  nc_house_of_representatives_district_009_dem: {
    title: "N.C. House District 9",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_009_dem.geojson",
    bounds: [
      [-77.51158699081928, 35.32739400027361],
      [-77.08464399117572, 35.79694099999474],
    ],
    participatingCounties: ["PITT"],
    focusMaskData: "map_data/nc_house_of_representatives_district_009_dem_focus_mask.geojson",
    candidates: {
      "Claire Kempner": ["#e3974e", "#eea941", "#e7c557"],
      "Lenton Brown": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Claire Kempner",
        votes: 4797,
        share: 67.21311475409836,
      },
      {
        candidate: "Lenton Brown",
        votes: 2340,
        share: 32.78688524590164,
      },
    ],
  },
  nc_house_of_representatives_district_016_rep: {
    title: "N.C. House District 16",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_016_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.30538799139973, 34.73382999956892],
    ],
    participatingCounties: ["ONSLOW", "PENDER"],
    focusMaskData: "map_data/nc_house_of_representatives_district_016_rep_focus_mask.geojson",
    candidates: {
      "Carson Smith": ["#e3974e", "#eea941", "#e7c557"],
      "Joshua Patti": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Carson Smith",
        votes: 6380,
        share: 76.48046032126588,
      },
      {
        candidate: "Joshua Patti",
        votes: 1962,
        share: 23.519539678734116,
      },
    ],
  },
  nc_house_of_representatives_district_017_rep: {
    title: "N.C. House District 17",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_017_rep.geojson",
    bounds: [
      [-78.65086499169355, 33.812852000277836],
      [-77.93220999094112, 34.37181299968314],
    ],
    participatingCounties: ["BRUNSWICK"],
    focusMaskData: "map_data/nc_house_of_representatives_district_017_rep_focus_mask.geojson",
    candidates: {
      "Frank Iler": ["#e3974e", "#eea941", "#e7c557"],
      "Nia Moore": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Frank Iler",
        votes: 8385,
        share: 74.3812649693959,
      },
      {
        candidate: "Nia Moore",
        votes: 2888,
        share: 25.6187350306041,
      },
    ],
  },
  nc_house_of_representatives_district_022_rep: {
    title: "N.C. House District 22",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_022_rep.geojson",
    bounds: [
      [-78.90199799143065, 34.367535999726776],
      [-78.11337699089786, 35.31640999984671],
    ],
    participatingCounties: ["BLADEN", "SAMPSON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_022_rep_focus_mask.geojson",
    candidates: {
      "Wellie Jackson": ["#e3974e", "#eea941", "#e7c557"],
      "Jerol Kivett": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Wellie Jackson",
        votes: 7155,
        share: 77.23445595854922,
      },
      {
        candidate: "Jerol Kivett",
        votes: 2109,
        share: 22.765544041450777,
      },
    ],
  },
  nc_house_of_representatives_district_023_dem: {
    title: "N.C. House District 23",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_023_dem.geojson",
    bounds: [
      [-77.8284439907689, 35.65884799978037],
      [-76.60621399141944, 36.24657800023221],
    ],
    participatingCounties: ["BERTIE", "EDGECOMBE", "MARTIN"],
    focusMaskData: "map_data/nc_house_of_representatives_district_023_dem_focus_mask.geojson",
    candidates: {
      "Patricia Smith": ["#e3974e", "#eea941", "#e7c557"],
      "Shelly Willingham": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Patricia Smith",
        votes: 5231,
        share: 55.69633730834753,
      },
      {
        candidate: "Shelly Willingham",
        votes: 4161,
        share: 44.30366269165247,
      },
    ],
  },
  nc_house_of_representatives_district_025_dem: {
    title: "N.C. House District 25",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_025_dem.geojson",
    bounds: [
      [-78.25713299134368, 35.72790200027234],
      [-77.69795599103209, 36.20263299981612],
    ],
    participatingCounties: ["NASH"],
    focusMaskData: "map_data/nc_house_of_representatives_district_025_dem_focus_mask.geojson",
    candidates: {
      "Lorenza M. Wilkins": ["#e3974e", "#eea941", "#e7c557"],
      "Harris Walker": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lorenza M. Wilkins",
        votes: 4964,
        share: 57.070590940446074,
      },
      {
        candidate: "Harris Walker",
        votes: 3734,
        share: 42.92940905955392,
      },
    ],
  },
  nc_house_of_representatives_district_026_rep: {
    title: "N.C. House District 26",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_026_rep.geojson",
    bounds: [
      [-78.54305899087515, 35.51452599974246],
      [-78.15134999161957, 35.8181199999109],
    ],
    participatingCounties: ["JOHNSTON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_026_rep_focus_mask.geojson",
    candidates: {
      "Donna McDowell White": ["#e3974e", "#eea941", "#e7c557"],
      "Margie Beth Riedel": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Donna McDowell White",
        votes: 4816,
        share: 70.46086320409655,
      },
      {
        candidate: "Margie Beth Riedel",
        votes: 2019,
        share: 29.53913679590344,
      },
    ],
  },
  nc_house_of_representatives_district_027_dem: {
    title: "N.C. House District 27",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_027_dem.geojson",
    bounds: [
      [-78.32399099089142, 36.00360900027319],
      [-77.06621499095021, 36.54727999952621],
    ],
    participatingCounties: ["HALIFAX", "NORTHAMPTON", "WARREN"],
    focusMaskData: "map_data/nc_house_of_representatives_district_027_dem_focus_mask.geojson",
    candidates: {
      "Rodney D. Pierce": ["#e3974e", "#eea941", "#e7c557"],
      "Michael H. Wray": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Rodney D. Pierce",
        votes: 8715,
        share: 64.17053236138723,
      },
      {
        candidate: "Michael H. Wray",
        votes: 4866,
        share: 35.82946763861277,
      },
    ],
  },
  nc_house_of_representatives_district_028_rep: {
    title: "N.C. House District 28",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_028_rep.geojson",
    bounds: [
      [-78.61477499073322, 35.25466299955155],
      [-78.06478399167396, 35.669213999665985],
    ],
    participatingCounties: ["JOHNSTON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_028_rep_focus_mask.geojson",
    candidates: {
      "Larry C. Strickland": ["#e3974e", "#eea941", "#e7c557"],
      "Eric Bowles, Sr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Larry C. Strickland",
        votes: 7056,
        share: 89.11341247789846,
      },
      {
        candidate: "Eric Bowles, Sr.",
        votes: 862,
        share: 10.88658752210154,
      },
    ],
  },
  nc_house_of_representatives_district_032_dem: {
    title: "N.C. House District 32",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_032_dem.geojson",
    bounds: [
      [-78.80761199117887, 36.021826000381765],
      [-78.2874399911981, 36.543822000227344],
    ],
    participatingCounties: ["GRANVILLE", "VANCE"],
    focusMaskData: "map_data/nc_house_of_representatives_district_032_dem_focus_mask.geojson",
    candidates: {
      "Curtis McRae": ["#e3974e", "#eea941", "#e7c557"],
      "Melissa Elliott": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Curtis McRae",
        votes: 5073,
        share: 63.731155778894475,
      },
      {
        candidate: "Melissa Elliott",
        votes: 2887,
        share: 36.26884422110553,
      },
    ],
  },
  nc_house_of_representatives_district_032_rep: {
    title: "N.C. House District 32",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_032_rep.geojson",
    bounds: [
      [-78.80761199117887, 36.021826000381765],
      [-78.2874399911981, 36.543822000227344],
    ],
    participatingCounties: ["GRANVILLE", "VANCE"],
    focusMaskData: "map_data/nc_house_of_representatives_district_032_rep_focus_mask.geojson",
    candidates: {
      "Frank Sossamon": ["#e3974e", "#eea941", "#e7c557"],
      "Pamela M. Ayscue": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Frank Sossamon",
        votes: 4996,
        share: 88.44043193485572,
      },
      {
        candidate: "Pamela M. Ayscue",
        votes: 653,
        share: 11.559568065144274,
      },
    ],
  },
  nc_house_of_representatives_district_037_dem: {
    title: "N.C. House District 37",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_037_dem.geojson",
    bounds: [
      [-78.93906799065626, 35.51945800030572],
      [-78.56663899122006, 35.68747400036878],
    ],
    participatingCounties: ["WAKE"],
    focusMaskData: "map_data/nc_house_of_representatives_district_037_dem_focus_mask.geojson",
    candidates: {
      "Winn Decker": ["#e3974e", "#eea941", "#e7c557"],
      "Marcus Gadson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Ralph Clements": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Winn Decker",
        votes: 4720,
        share: 50.34129692832765,
      },
      {
        candidate: "Marcus Gadson",
        votes: 3568,
        share: 38.05460750853242,
      },
      {
        candidate: "Ralph Clements",
        votes: 1088,
        share: 11.604095563139932,
      },
    ],
  },
  nc_house_of_representatives_district_038_dem: {
    title: "N.C. House District 38",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_038_dem.geojson",
    bounds: [
      [-78.68035299121597, 35.723759999854295],
      [-78.531971991442, 35.85275599989265],
    ],
    participatingCounties: ["WAKE"],
    focusMaskData: "map_data/nc_house_of_representatives_district_038_dem_focus_mask.geojson",
    candidates: {
      "Abe Jones": ["#e3974e", "#eea941", "#e7c557"],
      "Collin Fearns": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Abe Jones",
        votes: 7417,
        share: 69.63011641006383,
      },
      {
        candidate: "Collin Fearns",
        votes: 3235,
        share: 30.369883589936165,
      },
    ],
  },
  nc_house_of_representatives_district_043_dem: {
    title: "N.C. House District 43",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_043_dem.geojson",
    bounds: [
      [-78.95719599153026, 34.834862000377825],
      [-78.49470499170005, 35.266900000412384],
    ],
    participatingCounties: ["CUMBERLAND"],
    focusMaskData: "map_data/nc_house_of_representatives_district_043_dem_focus_mask.geojson",
    candidates: {
      "Janene Ackles": ["#e3974e", "#eea941", "#e7c557"],
      "Ronald Pittman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Janene Ackles",
        votes: 3913,
        share: 67.0263788968825,
      },
      {
        candidate: "Ronald Pittman",
        votes: 1925,
        share: 32.97362110311751,
      },
    ],
  },
  nc_house_of_representatives_district_043_rep: {
    title: "N.C. House District 43",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_043_rep.geojson",
    bounds: [
      [-78.95719599153026, 34.834862000377825],
      [-78.49470499170005, 35.266900000412384],
    ],
    participatingCounties: ["CUMBERLAND"],
    focusMaskData: "map_data/nc_house_of_representatives_district_043_rep_focus_mask.geojson",
    candidates: {
      "Diane Wheatley": ["#e3974e", "#eea941", "#e7c557"],
      "Clarence Goins, Jr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Diane Wheatley",
        votes: 2397,
        share: 59.49367088607595,
      },
      {
        candidate: "Clarence Goins, Jr.",
        votes: 1632,
        share: 40.50632911392405,
      },
    ],
  },
  nc_house_of_representatives_district_045_dem: {
    title: "N.C. House District 45",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_045_dem.geojson",
    bounds: [
      [-79.08318599135242, 34.914363999855155],
      [-78.89945799139565, 35.06101000020664],
    ],
    participatingCounties: ["CUMBERLAND"],
    focusMaskData: "map_data/nc_house_of_representatives_district_045_dem_focus_mask.geojson",
    candidates: {
      "Frances Jackson": ["#e3974e", "#eea941", "#e7c557"],
      "QuDerrick R. Covington": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Frances Jackson",
        votes: 3373,
        share: 60.01779359430605,
      },
      {
        candidate: "QuDerrick R. Covington",
        votes: 2247,
        share: 39.98220640569395,
      },
    ],
  },
  nc_house_of_representatives_district_048_rep: {
    title: "N.C. House District 48",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_048_rep.geojson",
    bounds: [
      [-79.69294399105601, 34.63037900023737],
      [-79.03477499107328, 35.21373500026156],
    ],
    participatingCounties: ["HOKE", "SCOTLAND"],
    focusMaskData: "map_data/nc_house_of_representatives_district_048_rep_focus_mask.geojson",
    candidates: {
      "Ralph Carter": ["#e3974e", "#eea941", "#e7c557"],
      "Kirk Lowery": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Ralph Carter",
        votes: 2105,
        share: 59.32919954904171,
      },
      {
        candidate: "Kirk Lowery",
        votes: 1443,
        share: 40.67080045095829,
      },
    ],
  },
  nc_house_of_representatives_district_050_dem: {
    title: "N.C. House District 50",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_050_dem.geojson",
    bounds: [
      [-79.53186499142537, 35.86689799983261],
      [-78.95059699070418, 36.541974999872686],
    ],
    participatingCounties: ["CASWELL", "ORANGE"],
    focusMaskData: "map_data/nc_house_of_representatives_district_050_dem_focus_mask.geojson",
    candidates: {
      "Renee A. Price": ["#e3974e", "#eea941", "#e7c557"],
      "Mary Lucas": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Brandall Redd": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Renee A. Price",
        votes: 10189,
        share: 74.01031452022954,
      },
      {
        candidate: "Mary Lucas",
        votes: 3039,
        share: 22.074526040531705,
      },
      {
        candidate: "Brandall Redd",
        votes: 539,
        share: 3.915159439238759,
      },
    ],
  },
  nc_house_of_representatives_district_051_rep: {
    title: "N.C. House District 51",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_051_rep.geojson",
    bounds: [
      [-79.54474199112792, 35.16132299963842],
      [-78.96963999091945, 35.6282879996022],
    ],
    participatingCounties: ["LEE", "MOORE"],
    focusMaskData: "map_data/nc_house_of_representatives_district_051_rep_focus_mask.geojson",
    candidates: {
      "Charles M. Taylor": ["#e3974e", "#eea941", "#e7c557"],
      "Sherry Lynn Womack": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Charles M. Taylor",
        votes: 3005,
        share: 54.16366258111031,
      },
      {
        candidate: "Sherry Lynn Womack",
        votes: 2543,
        share: 45.83633741888969,
      },
    ],
  },
  nc_house_of_representatives_district_055_rep: {
    title: "N.C. House District 55",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_055_rep.geojson",
    bounds: [
      [-80.71428899114245, 34.80673400039623],
      [-79.84847899084187, 35.21106799979455],
    ],
    participatingCounties: ["ANSON", "UNION"],
    focusMaskData: "map_data/nc_house_of_representatives_district_055_rep_focus_mask.geojson",
    candidates: {
      "Clancy Baucom": ["#e3974e", "#eea941", "#e7c557"],
      "John Powell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Richard T. Miller": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Clancy Baucom",
        votes: 4516,
        share: 79.18639312642469,
      },
      {
        candidate: "John Powell",
        votes: 792,
        share: 13.887427669647554,
      },
      {
        candidate: "Richard T. Miller",
        votes: 395,
        share: 6.926179203927757,
      },
    ],
  },
  nc_house_of_representatives_district_059_dem: {
    title: "N.C. House District 59",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_059_dem.geojson",
    bounds: [
      [-79.97228699066623, 35.89985099986212],
      [-79.53240999147594, 36.24868700026305],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/nc_house_of_representatives_district_059_dem_focus_mask.geojson",
    candidates: {
      "Elma Hairston": ["#e3974e", "#eea941", "#e7c557"],
      "C. Bradley Hunt II": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Elma Hairston",
        votes: 4649,
        share: 59.26067558954748,
      },
      {
        candidate: "C. Bradley Hunt II",
        votes: 3196,
        share: 40.73932441045252,
      },
    ],
  },
  nc_house_of_representatives_district_060_dem: {
    title: "N.C. House District 60",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_060_dem.geojson",
    bounds: [
      [-80.04686899116554, 35.91780999987957],
      [-79.90641899103134, 36.06732900006177],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/nc_house_of_representatives_district_060_dem_focus_mask.geojson",
    candidates: {
      "Amanda Cook": ["#e3974e", "#eea941", "#e7c557"],
      "Angie Williams-McMichael": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Joseph (Joe) Alston": ["#af89be", "#b29fde", "#b8b0cb"],
      "Bruce Davis": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Amanda Cook",
        votes: 2958,
        share: 42.4390243902439,
      },
      {
        candidate: "Angie Williams-McMichael",
        votes: 2068,
        share: 29.670014347202297,
      },
      {
        candidate: "Joseph (Joe) Alston",
        votes: 1136,
        share: 16.29842180774749,
      },
      {
        candidate: "Bruce Davis",
        votes: 808,
        share: 11.592539454806312,
      },
    ],
  },
  nc_house_of_representatives_district_065_rep: {
    title: "N.C. House District 65",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_065_rep.geojson",
    bounds: [
      [-80.035119, 36.241463],
      [-79.513638, 36.54247999999999],
    ],
    participatingCounties: ["ROCKINGHAM"],
    focusMaskData: "map_data/nc_house_of_representatives_district_065_rep_focus_mask.geojson",
    candidates: {
      "Seth Woodall": ["#e3974e", "#eea941", "#e7c557"],
      "Reece Pyrtle": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Joseph Gibson III": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Seth Woodall",
        votes: 7670,
        share: 57.52212389380531,
      },
      {
        candidate: "Reece Pyrtle",
        votes: 5204,
        share: 39.02804859757012,
      },
      {
        candidate: "Joseph Gibson III",
        votes: 460,
        share: 3.4498275086245687,
      },
    ],
  },
  nc_house_of_representatives_district_067_dem: {
    title: "N.C. House District 67",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_067_dem.geojson",
    bounds: [
      [-80.506095990725, 35.137163000464746],
      [-79.61430399173922, 35.51148399995678],
    ],
    participatingCounties: ["MONTGOMERY", "STANLY"],
    focusMaskData: "map_data/nc_house_of_representatives_district_067_dem_focus_mask.geojson",
    candidates: {
      "Jocelyn Torres": ["#e3974e", "#eea941", "#e7c557"],
      "Roddrick Howell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jocelyn Torres",
        votes: 1880,
        share: 66.47807637906648,
      },
      {
        candidate: "Roddrick Howell",
        votes: 948,
        share: 33.52192362093352,
      },
    ],
  },
  nc_house_of_representatives_district_073_dem: {
    title: "N.C. House District 73",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_073_dem.geojson",
    bounds: [
      [-80.69846699069821, 35.30341800030697],
      [-80.29542099119242, 35.503318000014254],
    ],
    participatingCounties: ["CABARRUS"],
    focusMaskData: "map_data/nc_house_of_representatives_district_073_dem_focus_mask.geojson",
    candidates: {
      "Kim DeLaney - DECEASED": ["#e3974e", "#eea941", "#e7c557"],
      "Thomas J. Monks": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kim DeLaney - DECEASED",
        votes: 0,
        share: 0,
      },
      {
        candidate: "Thomas J. Monks",
        votes: 0,
        share: 0,
      },
    ],
  },
  nc_house_of_representatives_district_078_rep: {
    title: "N.C. House District 78",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_078_rep.geojson",
    bounds: [
      [-80.06684199067605, 35.1200350002952],
      [-79.3988889917114, 35.90884199987084],
    ],
    participatingCounties: ["MOORE", "RANDOLPH"],
    focusMaskData: "map_data/nc_house_of_representatives_district_078_rep_focus_mask.geojson",
    candidates: {
      "Neal Jackson": ["#e3974e", "#eea941", "#e7c557"],
      "Mark Dutton": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Neal Jackson",
        votes: 8450,
        share: 72.00068166325835,
      },
      {
        candidate: "Mark Dutton",
        votes: 3286,
        share: 27.999318336741652,
      },
    ],
  },
  nc_house_of_representatives_district_079_rep: {
    title: "N.C. House District 79",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_079_rep.geojson",
    bounds: [
      [-77.19577199094778, 34.9504340002283],
      [-75.4001189911457, 36.1188660001305],
    ],
    participatingCounties: ["BEAUFORT", "DARE", "HYDE", "PAMLICO"],
    focusMaskData: "map_data/nc_house_of_representatives_district_079_rep_focus_mask.geojson",
    candidates: {
      "Darren Armstrong": ["#e3974e", "#eea941", "#e7c557"],
      "Keith Kidwell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Darren Armstrong",
        votes: 7447,
        share: 52.27432261687491,
      },
      {
        candidate: "Keith Kidwell",
        votes: 6799,
        share: 47.72567738312509,
      },
    ],
  },
  nc_house_of_representatives_district_080_rep: {
    title: "N.C. House District 80",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_080_rep.geojson",
    bounds: [
      [-80.25945699088444, 35.50414100030971],
      [-80.04323799090182, 36.02680799976594],
    ],
    participatingCounties: ["DAVIDSON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_080_rep_focus_mask.geojson",
    candidates: {
      "Sam Watford": ["#e3974e", "#eea941", "#e7c557"],
      "Joseph Byrne": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Sam Watford",
        votes: 5415,
        share: 74.38186813186813,
      },
      {
        candidate: "Joseph Byrne",
        votes: 1865,
        share: 25.618131868131865,
      },
    ],
  },
  nc_house_of_representatives_district_081_rep: {
    title: "N.C. House District 81",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_081_rep.geojson",
    bounds: [
      [-80.48751499146486, 35.61945300032698],
      [-80.14869299090938, 35.99667700008602],
    ],
    participatingCounties: ["DAVIDSON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_081_rep_focus_mask.geojson",
    candidates: {
      "Larry W. Potts": ["#e3974e", "#eea941", "#e7c557"],
      "Pamela Zanni": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Larry W. Potts",
        votes: 6929,
        share: 83.12140115163147,
      },
      {
        candidate: "Pamela Zanni",
        votes: 1407,
        share: 16.878598848368522,
      },
    ],
  },
  nc_house_of_representatives_district_089_rep: {
    title: "N.C. House District 89",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_089_rep.geojson",
    bounds: [
      [-81.53540299102687, 35.547020000032326],
      [-80.86772599064923, 35.82895799974085],
    ],
    participatingCounties: ["CATAWBA", "IREDELL"],
    focusMaskData: "map_data/nc_house_of_representatives_district_089_rep_focus_mask.geojson",
    candidates: {
      "Mitchell Smith Setzer": ["#e3974e", "#eea941", "#e7c557"],
      "Lisa Deaton Koperski": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mitchell Smith Setzer",
        votes: 8022,
        share: 86.18392780403954,
      },
      {
        candidate: "Lisa Deaton Koperski",
        votes: 1286,
        share: 13.816072195960464,
      },
    ],
  },
  nc_house_of_representatives_district_090_rep: {
    title: "N.C. House District 90",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_090_rep.geojson",
    bounds: [
      [-81.19007699105526, 36.18626999981665],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY", "WILKES"],
    focusMaskData: "map_data/nc_house_of_representatives_district_090_rep_focus_mask.geojson",
    candidates: {
      "Dan Kiger": ["#e3974e", "#eea941", "#e7c557"],
      "Paul Barker": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "A.J. Daoud": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Dan Kiger",
        votes: 7459,
        share: 51.91397550111358,
      },
      {
        candidate: "Paul Barker",
        votes: 5156,
        share: 35.88530066815145,
      },
      {
        candidate: "A.J. Daoud",
        votes: 1753,
        share: 12.200723830734969,
      },
    ],
  },
  nc_house_of_representatives_district_095_rep: {
    title: "N.C. House District 95",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_095_rep.geojson",
    bounds: [
      [-80.96352099152345, 35.48847300007011],
      [-80.73632699113944, 35.64665799986344],
    ],
    participatingCounties: ["IREDELL"],
    focusMaskData: "map_data/nc_house_of_representatives_district_095_rep_focus_mask.geojson",
    candidates: {
      "Richard (Todd) Carver": ["#e3974e", "#eea941", "#e7c557"],
      "Mike Kubiniec": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Richard (Todd) Carver",
        votes: 3181,
        share: 59.49130353469235,
      },
      {
        candidate: "Mike Kubiniec",
        votes: 2166,
        share: 40.50869646530765,
      },
    ],
  },
  nc_house_of_representatives_district_099_dem: {
    title: "N.C. House District 99",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_099_dem.geojson",
    bounds: [
      [-80.79487099106208, 35.25805500048929],
      [-80.67811699156395, 35.37193100055378],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/nc_house_of_representatives_district_099_dem_focus_mask.geojson",
    candidates: {
      "Veleria M. Levy": ["#e3974e", "#eea941", "#e7c557"],
      "Nasif Majeed": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Tucker Neal": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Veleria M. Levy",
        votes: 4966,
        share: 68.56275024161259,
      },
      {
        candidate: "Nasif Majeed",
        votes: 1896,
        share: 26.17699848129228,
      },
      {
        candidate: "Tucker Neal",
        votes: 381,
        share: 5.260251277095127,
      },
    ],
  },
  nc_house_of_representatives_district_105_rep: {
    title: "N.C. House District 105",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_105_rep.geojson",
    bounds: [
      [-80.84519999078135, 35.0396180001443],
      [-80.55034899154798, 35.23410500001824],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/nc_house_of_representatives_district_105_rep_focus_mask.geojson",
    candidates: {
      "Tricia Ann Cotham": ["#e3974e", "#eea941", "#e7c557"],
      "Kelly VanHorn": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tricia Ann Cotham",
        votes: 4372,
        share: 84.5320959010054,
      },
      {
        candidate: "Kelly VanHorn",
        votes: 800,
        share: 15.467904098994586,
      },
    ],
  },
  nc_house_of_representatives_district_106_dem: {
    title: "N.C. House District 106",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_106_dem.geojson",
    bounds: [
      [-80.85804099141606, 35.27872500007393],
      [-80.73275699118327, 35.42553999997502],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/nc_house_of_representatives_district_106_dem_focus_mask.geojson",
    candidates: {
      "Rodney Sadler": ["#e3974e", "#eea941", "#e7c557"],
      "Carla D. Cunningham": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Vermanno Bowman": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Rodney Sadler",
        votes: 7727,
        share: 69.9465918348873,
      },
      {
        candidate: "Carla D. Cunningham",
        votes: 2404,
        share: 21.761564225581605,
      },
      {
        candidate: "Vermanno Bowman",
        votes: 916,
        share: 8.291843939531095,
      },
    ],
  },
  nc_house_of_representatives_district_110_rep: {
    title: "N.C. House District 110",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_110_rep.geojson",
    bounds: [
      [-81.7019629916909, 35.16148000050864],
      [-81.15733699088162, 35.58457600048953],
    ],
    participatingCounties: ["CLEVELAND", "GASTON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_110_rep_focus_mask.geojson",
    candidates: {
      "Caroline Eason": ["#e3974e", "#eea941", "#e7c557"],
      "Kelly Hastings": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Caroline Eason",
        votes: 3584,
        share: 53.62860990573096,
      },
      {
        candidate: "Kelly Hastings",
        votes: 3099,
        share: 46.37139009426904,
      },
    ],
  },
  nc_house_of_representatives_district_113_rep: {
    title: "N.C. House District 113",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_113_rep.geojson",
    bounds: [
      [-82.6084239917344, 35.14418800027327],
      [-81.806358991785, 35.64577099990953],
    ],
    participatingCounties: ["HENDERSON", "MCDOWELL", "POLK", "RUTHERFORD"],
    focusMaskData: "map_data/nc_house_of_representatives_district_113_rep_focus_mask.geojson",
    candidates: {
      "Jake Johnson": ["#e3974e", "#eea941", "#e7c557"],
      "Mike Hager": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jake Johnson",
        votes: 7341,
        share: 61.04274072842175,
      },
      {
        candidate: "Mike Hager",
        votes: 4685,
        share: 38.95725927157825,
      },
    ],
  },
  nc_house_of_representatives_district_117_rep: {
    title: "N.C. House District 117",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_117_rep.geojson",
    bounds: [
      [-82.74513899094796, 35.25280400035818],
      [-82.26146299087989, 35.500220000472574],
    ],
    participatingCounties: ["HENDERSON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_117_rep_focus_mask.geojson",
    candidates: {
      "Jennifer Capps Balkcom": ["#e3974e", "#eea941", "#e7c557"],
      "Christopher Lamar Wilson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jennifer Capps Balkcom",
        votes: 5974,
        share: 76.16983297207702,
      },
      {
        candidate: "Christopher Lamar Wilson",
        votes: 1869,
        share: 23.83016702792299,
      },
    ],
  },
  nc_house_of_representatives_district_118_rep: {
    title: "N.C. House District 118",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_118_rep.geojson",
    bounds: [
      [-83.2574169914712, 35.29168400016755],
      [-82.40860199095378, 36.06591100053538],
    ],
    participatingCounties: ["HAYWOOD", "MADISON"],
    focusMaskData: "map_data/nc_house_of_representatives_district_118_rep_focus_mask.geojson",
    candidates: {
      "James M. (Jimmy) Rogers": ["#e3974e", "#eea941", "#e7c557"],
      "Mark Pless": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "James M. (Jimmy) Rogers",
        votes: 4965,
        share: 54.710743801652896,
      },
      {
        candidate: "Mark Pless",
        votes: 4110,
        share: 45.289256198347104,
      },
    ],
  },
  nc_house_of_representatives_district_119_rep: {
    title: "N.C. House District 119",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_house_of_representatives_district_119_rep.geojson",
    bounds: [
      [-83.95339199169345, 35.00135400071313],
      [-82.57483899099532, 35.69587800063449],
    ],
    participatingCounties: ["JACKSON", "SWAIN", "TRANSYLVANIA"],
    focusMaskData: "map_data/nc_house_of_representatives_district_119_rep_focus_mask.geojson",
    candidates: {
      "Mike Clampitt": ["#e3974e", "#eea941", "#e7c557"],
      "Anna Ferguson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Mike Yow": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Mike Clampitt",
        votes: 4508,
        share: 56.71867136386513,
      },
      {
        candidate: "Anna Ferguson",
        votes: 2988,
        share: 37.59436336185204,
      },
      {
        candidate: "Mike Yow",
        votes: 452,
        share: 5.686965274282838,
      },
    ],
  },
  nc_state_senate_district_01_rep: {
    title: "N.C. State Senate District 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_01_rep.geojson",
    bounds: [
      [-77.89977299129833, 35.14056500001367],
      [-75.4001189911457, 36.55214899996891],
    ],
    participatingCounties: ["BERTIE", "CAMDEN", "CURRITUCK", "DARE", "GATES", "HERTFORD", "NORTHAMPTON", "PASQUOTANK", "PERQUIMANS", "TYRRELL"],
    focusMaskData: "map_data/nc_state_senate_district_01_rep_focus_mask.geojson",
    candidates: {
      "Jerry Tillett": ["#e3974e", "#eea941", "#e7c557"],
      "Jay Lane": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Dave Forsythe": ["#af89be", "#b29fde", "#b8b0cb"],
      "Cole Johnson": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Jerry Tillett",
        votes: 7543,
        share: 37.82658843588586,
      },
      {
        candidate: "Jay Lane",
        votes: 6295,
        share: 31.56812597161627,
      },
      {
        candidate: "Dave Forsythe",
        votes: 3160,
        share: 15.846747906323657,
      },
      {
        candidate: "Cole Johnson",
        votes: 2943,
        share: 14.758537686174217,
      },
    ],
  },
  nc_state_senate_district_05_rep: {
    title: "N.C. State Senate District 5",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_05_rep.geojson",
    bounds: [
      [-77.8284439907689, 35.32739400027361],
      [-77.08464399117572, 36.15449299982806],
    ],
    participatingCounties: ["EDGECOMBE", "PITT"],
    focusMaskData: "map_data/nc_state_senate_district_05_rep_focus_mask.geojson",
    candidates: {
      "Henry Hostetler": ["#e3974e", "#eea941", "#e7c557"],
      "Angelene Mitchell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Henry Hostetler",
        votes: 5377,
        share: 83.28686493184635,
      },
      {
        candidate: "Angelene Mitchell",
        votes: 1079,
        share: 16.713135068153655,
      },
    ],
  },
  nc_state_senate_district_09_rep: {
    title: "N.C. State Senate District 9",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_09_rep.geojson",
    bounds: [
      [-78.90199799143065, 34.253130000025344],
      [-77.0472489912505, 35.287603999668725],
    ],
    participatingCounties: ["BLADEN", "DUPLIN", "JONES", "PENDER", "SAMPSON"],
    focusMaskData: "map_data/nc_state_senate_district_09_rep_focus_mask.geojson",
    candidates: {
      "Brent Jackson": ["#e3974e", "#eea941", "#e7c557"],
      "William W. Barbour": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brent Jackson",
        votes: 15793,
        share: 79.50964104113176,
      },
      {
        candidate: "William W. Barbour",
        votes: 4070,
        share: 20.49035895886825,
      },
    ],
  },
  nc_state_senate_district_10_rep: {
    title: "N.C. State Senate District 10",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_10_rep.geojson",
    bounds: [
      [-78.70890199075369, 35.25466299955155],
      [-78.06478399167396, 35.8181199999109],
    ],
    participatingCounties: ["JOHNSTON"],
    focusMaskData: "map_data/nc_state_senate_district_10_rep_focus_mask.geojson",
    candidates: {
      "Benton Sawrey": ["#e3974e", "#eea941", "#e7c557"],
      "Caitlin Marsh": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Benton Sawrey",
        votes: 14903,
        share: 84.84969255294922,
      },
      {
        candidate: "Caitlin Marsh",
        votes: 2661,
        share: 15.150307447050787,
      },
    ],
  },
  nc_state_senate_district_12_dem: {
    title: "N.C. State Senate District 12",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_12_dem.geojson",
    bounds: [
      [-79.35980699100195, 35.19159199958497],
      [-78.44915799107338, 35.6282879996022],
    ],
    participatingCounties: ["HARNETT", "LEE", "SAMPSON"],
    focusMaskData: "map_data/nc_state_senate_district_12_dem_focus_mask.geojson",
    candidates: {
      "Tanya White Anderson": ["#e3974e", "#eea941", "#e7c557"],
      "Jheri Hardaway": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tanya White Anderson",
        votes: 6498,
        share: 67.58893280632411,
      },
      {
        candidate: "Jheri Hardaway",
        votes: 3116,
        share: 32.41106719367589,
      },
    ],
  },
  nc_state_senate_district_12_rep: {
    title: "N.C. State Senate District 12",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_12_rep.geojson",
    bounds: [
      [-79.35980699100195, 35.19159199958497],
      [-78.44915799107338, 35.6282879996022],
    ],
    participatingCounties: ["HARNETT", "LEE", "SAMPSON"],
    focusMaskData: "map_data/nc_state_senate_district_12_rep_focus_mask.geojson",
    candidates: {
      "Jim Burgin": ["#e3974e", "#eea941", "#e7c557"],
      "Tim McNeill": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jim Burgin",
        votes: 7933,
        share: 76.19093353822512,
      },
      {
        candidate: "Tim McNeill",
        votes: 2479,
        share: 23.809066461774876,
      },
    ],
  },
  nc_state_senate_district_21_rep: {
    title: "N.C. State Senate District 21",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_21_rep.geojson",
    bounds: [
      [-79.76795699112654, 34.834862000377825],
      [-78.49470499170005, 35.518001999711664],
    ],
    participatingCounties: ["CUMBERLAND", "MOORE"],
    focusMaskData: "map_data/nc_state_senate_district_21_rep_focus_mask.geojson",
    candidates: {
      "Tom McInnis": ["#e3974e", "#eea941", "#e7c557"],
      "Ray Daly": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tom McInnis",
        votes: 11564,
        share: 73.29192546583852,
      },
      {
        candidate: "Ray Daly",
        votes: 4214,
        share: 26.70807453416149,
      },
    ],
  },
  nc_state_senate_district_22_dem: {
    title: "N.C. State Senate District 22",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_22_dem.geojson",
    bounds: [
      [-79.0007369908867, 35.91839399970294],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/nc_state_senate_district_22_dem_focus_mask.geojson",
    candidates: {
      "Sophia Chitlik": ["#e3974e", "#eea941", "#e7c557"],
      "Dedreana Freeman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Sophia Chitlik",
        votes: 22739,
        share: 65.51704267150718,
      },
      {
        candidate: "Dedreana Freeman",
        votes: 11968,
        share: 34.482957328492816,
      },
    ],
  },
  nc_state_senate_district_26_rep: {
    title: "N.C. State Senate District 26",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_26_rep.geojson",
    bounds: [
      [-80.04267999098919, 35.89985099986212],
      [-79.513638, 36.54247999999999],
    ],
    participatingCounties: ["GUILFORD", "ROCKINGHAM"],
    focusMaskData: "map_data/nc_state_senate_district_26_rep_focus_mask.geojson",
    candidates: {
      "Sam Page": ["#e3974e", "#eea941", "#e7c557"],
      "Philip E. (Phil) Berger": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Sam Page",
        votes: 13135,
        share: 50.04381453118451,
      },
      {
        candidate: "Philip E. (Phil) Berger",
        votes: 13112,
        share: 49.95618546881549,
      },
    ],
  },
  nc_state_senate_district_30_rep: {
    title: "N.C. State Senate District 30",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_30_rep.geojson",
    bounds: [
      [-80.70755799098339, 35.50414100030971],
      [-80.04323799090182, 36.06265499997004],
    ],
    participatingCounties: ["DAVIDSON", "DAVIE"],
    focusMaskData: "map_data/nc_state_senate_district_30_rep_focus_mask.geojson",
    candidates: {
      "Steve Jarvis": ["#e3974e", "#eea941", "#e7c557"],
      "Eddie Gallimore": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Steve Jarvis",
        votes: 15407,
        share: 75.5393214355756,
      },
      {
        candidate: "Eddie Gallimore",
        votes: 4989,
        share: 24.460678564424395,
      },
    ],
  },
  nc_state_senate_district_32_dem: {
    title: "N.C. State Senate District 32",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_32_dem.geojson",
    bounds: [
      [-80.37253199123167, 35.99435999998439],
      [-80.15853599142812, 36.19478800029067],
    ],
    participatingCounties: ["FORSYTH"],
    focusMaskData: "map_data/nc_state_senate_district_32_dem_focus_mask.geojson",
    candidates: {
      "Paul Lowe, Jr.": ["#e3974e", "#eea941", "#e7c557"],
      "Gardenia Henley": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Paul Lowe, Jr.",
        votes: 11876,
        share: 59.07282132908874,
      },
      {
        candidate: "Gardenia Henley",
        votes: 8228,
        share: 40.92717867091126,
      },
    ],
  },
  nc_state_senate_district_34_rep: {
    title: "N.C. State Senate District 34",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_34_rep.geojson",
    bounds: [
      [-80.78706899137296, 35.18499799994962],
      [-80.29542099119242, 35.506510000065404],
    ],
    participatingCounties: ["CABARRUS"],
    focusMaskData: "map_data/nc_state_senate_district_34_rep_focus_mask.geojson",
    candidates: {
      "Kevin Crutchfield": ["#e3974e", "#eea941", "#e7c557"],
      "Chris Measmer": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kevin Crutchfield",
        votes: 7498,
        share: 53.66831293393458,
      },
      {
        candidate: "Chris Measmer",
        votes: 6473,
        share: 46.33168706606542,
      },
    ],
  },
  nc_state_senate_district_37_dem: {
    title: "N.C. State Senate District 37",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_state_senate_district_37_dem.geojson",
    bounds: [
      [-81.1095069906841, 35.43264500042337],
      [-80.69319699065278, 36.0588099998011],
    ],
    participatingCounties: ["IREDELL", "MECKLENBURG"],
    focusMaskData: "map_data/nc_state_senate_district_37_dem_focus_mask.geojson",
    candidates: {
      "Raygan J. Angel": ["#e3974e", "#eea941", "#e7c557"],
      "Precinda Bjorgen": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Raygan J. Angel",
        votes: 5632,
        share: 62.46672582076309,
      },
      {
        candidate: "Precinda Bjorgen",
        votes: 3384,
        share: 37.53327417923691,
      },
    ],
  },
  nc_superior_court_judge_district_16_b_seat_02_dem: {
    title: "N.C. Superior Court Judge District 16B Seat 2",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_superior_court_judge_district_16_b_seat_02_dem.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/nc_superior_court_judge_district_16_b_seat_02_dem_focus_mask.geojson",
    candidates: {
      "Myra Griffin": ["#e3974e", "#eea941", "#e7c557"],
      "Ameshia Cooper Chester": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Myra Griffin",
        votes: 32512,
        share: 68.83468834688347,
      },
      {
        candidate: "Ameshia Cooper Chester",
        votes: 14720,
        share: 31.16531165311653,
      },
    ],
  },
  nc_superior_court_judge_district_26_c_seat_01_dem: {
    title: "N.C. Superior Court Judge District 26C Seat 1",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/nc_superior_court_judge_district_26_c_seat_01_dem.geojson",
    bounds: [
      [-81.01504999177759, 35.24027700038064],
      [-80.75216699072979, 35.51478499984877],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/nc_superior_court_judge_district_26_c_seat_01_dem_focus_mask.geojson",
    candidates: {
      "George Guise": ["#e3974e", "#eea941", "#e7c557"],
      "Caleb Newman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "George Guise",
        votes: 7369,
        share: 59.58117723156533,
      },
      {
        candidate: "Caleb Newman",
        votes: 4999,
        share: 40.41882276843467,
      },
    ],
  },
  nc_superior_court_judge_district_36_seat_01_rep: {
    title: "N.C. Superior Court Judge District 36 Seat 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/nc_superior_court_judge_district_36_seat_01_rep.geojson",
    bounds: [
      [-81.98693899159551, 35.55823200037704],
      [-81.32845099114343, 36.12261900022834],
    ],
    participatingCounties: ["BURKE", "CALDWELL"],
    focusMaskData: "map_data/nc_superior_court_judge_district_36_seat_01_rep_focus_mask.geojson",
    candidates: {
      "Tim Rooks": ["#e3974e", "#eea941", "#e7c557"],
      "Dale Hamby": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tim Rooks",
        votes: 7900,
        share: 56.2157546431367,
      },
      {
        candidate: "Dale Hamby",
        votes: 6153,
        share: 43.7842453568633,
      },
    ],
  },
  us_house_of_representatives_district_01_rep: {
    title: "U.S. House District 1",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_01_rep.geojson",
    bounds: [
      [-78.66078099057351, 34.531736000018384],
      [-75.4001189911457, 36.55214899996891],
    ],
    participatingCounties: ["BEAUFORT", "BERTIE", "CAMDEN", "CARTERET", "CHOWAN", "CRAVEN", "CURRITUCK", "DARE", "EDGECOMBE", "GATES", "GRANVILLE", "HALIFAX", "HERTFORD", "HYDE", "MARTIN", "NASH", "NORTHAMPTON", "ONSLOW", "PAMLICO", "PASQUOTANK", "PERQUIMANS", "TYRRELL", "VANCE", "WARREN", "WASHINGTON"],
    focusMaskData: "map_data/us_house_of_representatives_district_01_rep_focus_mask.geojson",
    candidates: {
      "Laurie Buckhout": ["#e3974e", "#eea941", "#e7c557"],
      "Asa Buck": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Bobby Hanig": ["#af89be", "#b29fde", "#b8b0cb"],
      "Eric Rouse": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Ashley-Nicole Russell": ["#c84f4a", "#df7f7b", "#edb3b0"],
    },
    results: [
      {
        candidate: "Laurie Buckhout",
        votes: 26624,
        share: 39.51555450011874,
      },
      {
        candidate: "Asa Buck",
        votes: 23227,
        share: 34.4736998337687,
      },
      {
        candidate: "Bobby Hanig",
        votes: 10924,
        share: 16.213488482545714,
      },
      {
        candidate: "Eric Rouse",
        votes: 3626,
        share: 5.38173830444075,
      },
      {
        candidate: "Ashley-Nicole Russell",
        votes: 2975,
        share: 4.415518879126099,
      },
    ],
  },
  us_house_of_representatives_district_03_dem: {
    title: "U.S. House District 3",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_03_dem.geojson",
    bounds: [
      [-78.64104899166462, 34.399705000040676],
      [-77.0472489912505, 35.86720799959774],
    ],
    participatingCounties: ["DUPLIN", "GREENE", "JONES", "LENOIR", "ONSLOW", "PITT", "SAMPSON", "WAYNE", "WILSON"],
    focusMaskData: "map_data/us_house_of_representatives_district_03_dem_focus_mask.geojson",
    candidates: {
      "Raymond Smith": ["#e3974e", "#eea941", "#e7c557"],
      "Allison Jaslow": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Raymond Smith",
        votes: 23552,
        share: 56.653516790147215,
      },
      {
        candidate: "Allison Jaslow",
        votes: 18020,
        share: 43.346483209852785,
      },
    ],
  },
  us_house_of_representatives_district_05_dem: {
    title: "U.S. House District 5",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_05_dem.geojson",
    bounds: [
      [-81.91811899073072, 35.75724500032361],
      [-79.513638, 36.588136999894786],
    ],
    participatingCounties: ["ALEXANDER", "ALLEGHANY", "ASHE", "CALDWELL", "GUILFORD", "ROCKINGHAM", "STOKES", "SURRY", "WATAUGA", "WILKES"],
    focusMaskData: "map_data/us_house_of_representatives_district_05_dem_focus_mask.geojson",
    candidates: {
      "Chuck Hubbard": ["#e3974e", "#eea941", "#e7c557"],
      "Kyah Creekmore": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chuck Hubbard",
        votes: 25655,
        share: 56.70866489832007,
      },
      {
        candidate: "Kyah Creekmore",
        votes: 19585,
        share: 43.29133510167993,
      },
    ],
  },
  us_house_of_representatives_district_05_rep: {
    title: "U.S. House District 5",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_05_rep.geojson",
    bounds: [
      [-81.91811899073072, 35.75724500032361],
      [-79.513638, 36.588136999894786],
    ],
    participatingCounties: ["ALEXANDER", "ALLEGHANY", "ASHE", "CALDWELL", "GUILFORD", "ROCKINGHAM", "STOKES", "SURRY", "WATAUGA", "WILKES"],
    focusMaskData: "map_data/us_house_of_representatives_district_05_rep_focus_mask.geojson",
    candidates: {
      "Virginia Foxx": ["#e3974e", "#eea941", "#e7c557"],
      "Joseph (Joey) Osborne": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Steve Girard": ["#af89be", "#b29fde", "#b8b0cb"],
      "Roman H. (Chad) Williams II": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Virginia Foxx",
        votes: 53627,
        share: 74.53991993772935,
      },
      {
        candidate: "Joseph (Joey) Osborne",
        votes: 7934,
        share: 11.028021794729234,
      },
      {
        candidate: "Steve Girard",
        votes: 6404,
        share: 8.901367730457022,
      },
      {
        candidate: "Roman H. (Chad) Williams II",
        votes: 3979,
        share: 5.530690537084399,
      },
    ],
  },
  us_house_of_representatives_district_06_dem: {
    title: "U.S. House District 6",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_06_dem.geojson",
    bounds: [
      [-80.78706899137296, 35.36279200019012],
      [-79.81459599107977, 36.25892800053514],
    ],
    participatingCounties: ["CABARRUS", "DAVIDSON", "DAVIE", "FORSYTH", "GUILFORD", "ROWAN"],
    focusMaskData: "map_data/us_house_of_representatives_district_06_dem_focus_mask.geojson",
    candidates: {
      "Cyril Jefferson": ["#e3974e", "#eea941", "#e7c557"],
      "Alysa Kassay": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Keith Davenport": ["#af89be", "#b29fde", "#b8b0cb"],
      "Beau Blair": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Cyril Jefferson",
        votes: 15274,
        share: 39.157074371266695,
      },
      {
        candidate: "Alysa Kassay",
        votes: 13316,
        share: 34.13746250672956,
      },
      {
        candidate: "Keith Davenport",
        votes: 6569,
        share: 16.840567077704,
      },
      {
        candidate: "Beau Blair",
        votes: 3848,
        share: 9.86489604429974,
      },
    ],
  },
  us_house_of_representatives_district_07_rep: {
    title: "U.S. House District 7",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_07_rep.geojson",
    bounds: [
      [-79.2137869909481, 33.75289899980945],
      [-77.48453799160289, 35.31640999984671],
    ],
    participatingCounties: ["BLADEN", "BRUNSWICK", "COLUMBUS", "CUMBERLAND", "NEW HANOVER", "PENDER", "ROBESON", "SAMPSON"],
    focusMaskData: "map_data/us_house_of_representatives_district_07_rep_focus_mask.geojson",
    candidates: {
      "David Rouzer": ["#e3974e", "#eea941", "#e7c557"],
      "David Buzzard": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "David Rouzer",
        votes: 43577,
        share: 80.49095845878202,
      },
      {
        candidate: "David Buzzard",
        votes: 10562,
        share: 19.509041541217975,
      },
    ],
  },
  us_house_of_representatives_district_08_dem: {
    title: "U.S. House District 8",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_08_dem.geojson",
    bounds: [
      [-80.85394999079318, 34.33093499981304],
      [-78.93598099153301, 35.51148399995678],
    ],
    participatingCounties: ["ANSON", "CABARRUS", "MECKLENBURG", "MONTGOMERY", "RICHMOND", "ROBESON", "SCOTLAND", "STANLY", "UNION"],
    focusMaskData: "map_data/us_house_of_representatives_district_08_dem_focus_mask.geojson",
    candidates: {
      "Colby Watson": ["#e3974e", "#eea941", "#e7c557"],
      "Kevin Clark": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Jesse Oppenheim": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Colby Watson",
        votes: 18272,
        share: 47.91775936221546,
      },
      {
        candidate: "Kevin Clark",
        votes: 14167,
        share: 37.15252281548306,
      },
      {
        candidate: "Jesse Oppenheim",
        votes: 5693,
        share: 14.92971782230148,
      },
    ],
  },
  us_house_of_representatives_district_09_dem: {
    title: "U.S. House District 9",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_09_dem.geojson",
    bounds: [
      [-80.06684199067605, 34.833717000299934],
      [-78.8989279914242, 36.251782999762334],
    ],
    participatingCounties: ["ALAMANCE", "CHATHAM", "CUMBERLAND", "GUILFORD", "HOKE", "MOORE", "RANDOLPH"],
    focusMaskData: "map_data/us_house_of_representatives_district_09_dem_focus_mask.geojson",
    candidates: {
      "Richard N. Ojeda II": ["#e3974e", "#eea941", "#e7c557"],
      "Nigel W. Bristow": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Lent C. Carr II": ["#af89be", "#b29fde", "#b8b0cb"],
      "Loren Bibler": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Richard N. Ojeda II",
        votes: 18469,
        share: 41.76522466701341,
      },
      {
        candidate: "Nigel W. Bristow",
        votes: 11824,
        share: 26.738427443974583,
      },
      {
        candidate: "Lent C. Carr II",
        votes: 6968,
        share: 15.757219420637252,
      },
      {
        candidate: "Loren Bibler",
        votes: 6960,
        share: 15.739128468374757,
      },
    ],
  },
  us_house_of_representatives_district_10_dem: {
    title: "U.S. House District 10",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_10_dem.geojson",
    bounds: [
      [-81.53759899160796, 35.40007799983661],
      [-80.10307299091399, 36.287928999916325],
    ],
    participatingCounties: ["CATAWBA", "FORSYTH", "IREDELL", "LINCOLN", "YADKIN"],
    focusMaskData: "map_data/us_house_of_representatives_district_10_dem_focus_mask.geojson",
    candidates: {
      "Ashley Bell": ["#e3974e", "#eea941", "#e7c557"],
      "West Caudle": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Harry Morley": ["#af89be", "#b29fde", "#b8b0cb"],
      "Marcus Pearson": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Mir Yarfitz": ["#c84f4a", "#df7f7b", "#edb3b0"],
      "Ralph Scott, Jr.": ["#ad8731", "#d7b85d", "#ead99a"],
    },
    results: [
      {
        candidate: "Ashley Bell",
        votes: 19472,
        share: 47.30691674157576,
      },
      {
        candidate: "West Caudle",
        votes: 6404,
        share: 15.558416948081922,
      },
      {
        candidate: "Harry Morley",
        votes: 4672,
        share: 11.350550278175945,
      },
      {
        candidate: "Marcus Pearson",
        votes: 4070,
        share: 9.88800077743495,
      },
      {
        candidate: "Mir Yarfitz",
        votes: 3952,
        share: 9.601321639415952,
      },
      {
        candidate: "Ralph Scott, Jr.",
        votes: 2591,
        share: 6.294793615315468,
      },
    ],
  },
  us_house_of_representatives_district_10_rep: {
    title: "U.S. House District 10",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_10_rep.geojson",
    bounds: [
      [-81.53759899160796, 35.40007799983661],
      [-80.10307299091399, 36.287928999916325],
    ],
    participatingCounties: ["CATAWBA", "FORSYTH", "IREDELL", "LINCOLN", "YADKIN"],
    focusMaskData: "map_data/us_house_of_representatives_district_10_rep_focus_mask.geojson",
    candidates: {
      "Pat Harrigan": ["#e3974e", "#eea941", "#e7c557"],
      "Matthew Sin": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Pat Harrigan",
        votes: 46270,
        share: 87.66744349078232,
      },
      {
        candidate: "Matthew Sin",
        votes: 6509,
        share: 12.33255650921768,
      },
    ],
  },
  us_house_of_representatives_district_11_dem: {
    title: "U.S. House District 11",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_11_dem.geojson",
    bounds: [
      [-84.3218209914704, 34.98666900019234],
      [-81.73567299089382, 36.28712899999742],
    ],
    participatingCounties: ["AVERY", "BUNCOMBE", "CHEROKEE", "CLAY", "GRAHAM", "HAYWOOD", "HENDERSON", "JACKSON", "MACON", "MADISON", "MCDOWELL", "MITCHELL", "POLK", "SWAIN", "TRANSYLVANIA", "YANCEY"],
    focusMaskData: "map_data/us_house_of_representatives_district_11_dem_focus_mask.geojson",
    candidates: {
      "Jamie Ager": ["#e3974e", "#eea941", "#e7c557"],
      "Richard Hudspeth": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Zelda Briarwood": ["#af89be", "#b29fde", "#b8b0cb"],
      "Paul Maddox": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Lee Whipple": ["#c84f4a", "#df7f7b", "#edb3b0"],
    },
    results: [
      {
        candidate: "Jamie Ager",
        votes: 49193,
        share: 64.65616949687187,
      },
      {
        candidate: "Richard Hudspeth",
        votes: 12063,
        share: 15.854844645391935,
      },
      {
        candidate: "Zelda Briarwood",
        votes: 9893,
        share: 13.002733820514168,
      },
      {
        candidate: "Paul Maddox",
        votes: 3857,
        share: 5.06939698228274,
      },
      {
        candidate: "Lee Whipple",
        votes: 1078,
        share: 1.4168550549392775,
      },
    ],
  },
  us_house_of_representatives_district_11_rep: {
    title: "U.S. House District 11",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_11_rep.geojson",
    bounds: [
      [-84.3218209914704, 34.98666900019234],
      [-81.73567299089382, 36.28712899999742],
    ],
    participatingCounties: ["AVERY", "BUNCOMBE", "CHEROKEE", "CLAY", "GRAHAM", "HAYWOOD", "HENDERSON", "JACKSON", "MACON", "MADISON", "MCDOWELL", "MITCHELL", "POLK", "SWAIN", "TRANSYLVANIA", "YANCEY"],
    focusMaskData: "map_data/us_house_of_representatives_district_11_rep_focus_mask.geojson",
    candidates: {
      "Chuck Edwards": ["#e3974e", "#eea941", "#e7c557"],
      "Adam R. Smith": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chuck Edwards",
        votes: 47795,
        share: 70.09709022644608,
      },
      {
        candidate: "Adam R. Smith",
        votes: 20389,
        share: 29.902909773553915,
      },
    ],
  },
  us_house_of_representatives_district_12_dem: {
    title: "U.S. House District 12",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_12_dem.geojson",
    bounds: [
      [-80.98694599108738, 35.05997700016813],
      [-80.59973299135014, 35.40020300003028],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/us_house_of_representatives_district_12_dem_focus_mask.geojson",
    candidates: {
      "Alma Shealey Adams": ["#e3974e", "#eea941", "#e7c557"],
      "Monaca Maye Williamson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Alma Shealey Adams",
        votes: 54630,
        share: 78.92341698088676,
      },
      {
        candidate: "Monaca Maye Williamson",
        votes: 14589,
        share: 21.076583019113247,
      },
    ],
  },
  us_house_of_representatives_district_12_rep: {
    title: "U.S. House District 12",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_12_rep.geojson",
    bounds: [
      [-80.98694599108738, 35.05997700016813],
      [-80.59973299135014, 35.40020300003028],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/us_house_of_representatives_district_12_rep_focus_mask.geojson",
    candidates: {
      "Jack Codiga": ["#e3974e", "#eea941", "#e7c557"],
      "Addul Ali": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jack Codiga",
        votes: 6569,
        share: 67.36054142739951,
      },
      {
        candidate: "Addul Ali",
        votes: 3183,
        share: 32.639458572600496,
      },
    ],
  },
  us_house_of_representatives_district_13_dem: {
    title: "U.S. House District 13",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_13_dem.geojson",
    bounds: [
      [-79.53186499142537, 35.192011999664835],
      [-78.00655099105443, 36.54254100036947],
    ],
    participatingCounties: ["CASWELL", "FRANKLIN", "GRANVILLE", "HARNETT", "JOHNSTON", "LEE", "PERSON", "WAKE"],
    focusMaskData: "map_data/us_house_of_representatives_district_13_dem_focus_mask.geojson",
    candidates: {
      "Paul Barringer": ["#e3974e", "#eea941", "#e7c557"],
      "Frank Pierce": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Alexander Nicholi": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Paul Barringer",
        votes: 29743,
        share: 59.08774857460715,
      },
      {
        candidate: "Frank Pierce",
        votes: 14794,
        share: 29.389911993166063,
      },
      {
        candidate: "Alexander Nicholi",
        votes: 5800,
        share: 11.522339432226792,
      },
    ],
  },
  us_house_of_representatives_district_13_rep: {
    title: "U.S. House District 13",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_13_rep.geojson",
    bounds: [
      [-79.53186499142537, 35.192011999664835],
      [-78.00655099105443, 36.54254100036947],
    ],
    participatingCounties: ["CASWELL", "FRANKLIN", "GRANVILLE", "HARNETT", "JOHNSTON", "LEE", "PERSON", "WAKE"],
    focusMaskData: "map_data/us_house_of_representatives_district_13_rep_focus_mask.geojson",
    candidates: {
      "Brad Knott": ["#e3974e", "#eea941", "#e7c557"],
      "Sid Sharma": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brad Knott",
        votes: 44038,
        share: 89.92301880628101,
      },
      {
        candidate: "Sid Sharma",
        votes: 4935,
        share: 10.076981193718987,
      },
    ],
  },
  us_house_of_representatives_district_14_dem: {
    title: "U.S. House District 14",
    subtitle: "Democratic Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_14_dem.geojson",
    bounds: [
      [-82.31353899153476, 35.001692000436584],
      [-80.75216699072979, 35.999909000288206],
    ],
    participatingCounties: ["BURKE", "CLEVELAND", "GASTON", "MECKLENBURG", "POLK", "RUTHERFORD"],
    focusMaskData: "map_data/us_house_of_representatives_district_14_dem_focus_mask.geojson",
    candidates: {
      "Lakesha Womack": ["#e3974e", "#eea941", "#e7c557"],
      "Brent Caldwell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Ahmid Kargbo": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Lakesha Womack",
        votes: 20641,
        share: 52.23585980007592,
      },
      {
        candidate: "Brent Caldwell",
        votes: 16513,
        share: 41.78919397697077,
      },
      {
        candidate: "Ahmid Kargbo",
        votes: 2361,
        share: 5.974946222953309,
      },
    ],
  },
  us_house_of_representatives_district_14_rep: {
    title: "U.S. House District 14",
    subtitle: "Republican Primary",
    scope: "district",
    data: "map_data/us_house_of_representatives_district_14_rep.geojson",
    bounds: [
      [-82.31353899153476, 35.001692000436584],
      [-80.75216699072979, 35.999909000288206],
    ],
    participatingCounties: ["BURKE", "CLEVELAND", "GASTON", "MECKLENBURG", "POLK", "RUTHERFORD"],
    focusMaskData: "map_data/us_house_of_representatives_district_14_rep_focus_mask.geojson",
    candidates: {
      "Tim Moore": ["#e3974e", "#eea941", "#e7c557"],
      "Kate Barr": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tim Moore",
        votes: 42545,
        share: 83.02435407072048,
      },
      {
        candidate: "Kate Barr",
        votes: 8699,
        share: 16.975645929279526,
      },
    ],
  },
  bertie_county_board_of_commissioners_district_05_dem: {
    title: "Bertie County Board Of Commissioners District 5",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/bertie_county_board_of_commissioners_district_05_dem.geojson",
    bounds: [
      [-77.32762199086062, 35.81186600004032],
      [-76.60621399141944, 36.24657800023221],
    ],
    participatingCounties: ["BERTIE"],
    focusMaskData: "map_data/bertie_county_board_of_commissioners_district_05_dem_focus_mask.geojson",
    candidates: {
      "Ronald (Ron) Roberson": ["#e3974e", "#eea941", "#e7c557"],
      "Aaron L. Rascoe": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Ronald (Ron) Roberson",
        votes: 1593,
        share: 51.32087628865979,
      },
      {
        candidate: "Aaron L. Rascoe",
        votes: 1511,
        share: 48.6791237113402,
      },
    ],
  },
  bladen_county_board_of_commissioners_district_03_rep: {
    title: "Bladen County Board Of Commissioners District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/bladen_county_board_of_commissioners_district_03_rep.geojson",
    bounds: [
      [-78.90199799143065, 34.543795000054615],
      [-78.3739329910589, 34.85618200038567],
    ],
    participatingCounties: ["BLADEN"],
    focusMaskData: "map_data/bladen_county_board_of_commissioners_district_03_rep_focus_mask.geojson",
    candidates: {
      "Cameron McGill": ["#e3974e", "#eea941", "#e7c557"],
      "Joe Allen, Jr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Judy Bowen": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Cameron McGill",
        votes: 567,
        share: 51.4052583862194,
      },
      {
        candidate: "Joe Allen, Jr.",
        votes: 368,
        share: 33.36355394378966,
      },
      {
        candidate: "Judy Bowen",
        votes: 168,
        share: 15.231187669990934,
      },
    ],
  },
  bladen_county_board_of_education_district_01_dem: {
    title: "Bladen County Board Of Education District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/bladen_county_board_of_education_district_01_dem.geojson",
    bounds: [
      [-78.7212649917323, 34.367535999726776],
      [-78.17650099137116, 34.85618200038567],
    ],
    participatingCounties: ["BLADEN"],
    focusMaskData: "map_data/bladen_county_board_of_education_district_01_dem_focus_mask.geojson",
    candidates: {
      "Theresa Jacobs": ["#e3974e", "#eea941", "#e7c557"],
      "Gary N. Rhoda": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Theresa Jacobs",
        votes: 643,
        share: 56.95305580159433,
      },
      {
        candidate: "Gary N. Rhoda",
        votes: 486,
        share: 43.04694419840567,
      },
    ],
  },
  bladen_county_board_of_education_district_02_rep: {
    title: "Bladen County Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/bladen_county_board_of_education_district_02_rep.geojson",
    bounds: [
      [-78.86935799080268, 34.4535899998766],
      [-78.55727299137709, 34.71547899983999],
    ],
    participatingCounties: ["BLADEN"],
    focusMaskData: "map_data/bladen_county_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Walter Hester": ["#e3974e", "#eea941", "#e7c557"],
      "Mackie Singletary": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Walter Hester",
        votes: 650,
        share: 53.941908713692946,
      },
      {
        candidate: "Mackie Singletary",
        votes: 555,
        share: 46.058091286307054,
      },
    ],
  },
  brunswick_county_board_of_commissioners_district_01_rep: {
    title: "Brunswick County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/brunswick_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-78.65086499169355, 33.75289899980945],
      [-77.89701099090615, 34.37181299968314],
    ],
    participatingCounties: ["BRUNSWICK"],
    focusMaskData: "map_data/brunswick_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Randy Thompson": ["#e3974e", "#eea941", "#e7c557"],
      "Clif Cheek": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Randy Thompson",
        votes: 12958,
        share: 66.50926448698866,
      },
      {
        candidate: "Clif Cheek",
        votes: 6525,
        share: 33.490735513011344,
      },
    ],
  },
  brunswick_county_board_of_commissioners_district_02_rep: {
    title: "Brunswick County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/brunswick_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-78.65086499169355, 33.75289899980945],
      [-77.89701099090615, 34.37181299968314],
    ],
    participatingCounties: ["BRUNSWICK"],
    focusMaskData: "map_data/brunswick_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "Patti Hewett": ["#e3974e", "#eea941", "#e7c557"],
      "Marty Cooke": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Patti Hewett",
        votes: 9967,
        share: 52.00897516176164,
      },
      {
        candidate: "Marty Cooke",
        votes: 9197,
        share: 47.99102483823836,
      },
    ],
  },
  buncombe_county_board_of_commissioners_district_02_dem: {
    title: "Buncombe County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/buncombe_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-82.88810699101593, 35.4229670003747],
      [-82.33505399091794, 35.82411000060308],
    ],
    participatingCounties: ["BUNCOMBE"],
    focusMaskData: "map_data/buncombe_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Lonnie Israel": ["#e3974e", "#eea941", "#e7c557"],
      "Terry Threadwell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lonnie Israel",
        votes: 5704,
        share: 57.68608414239482,
      },
      {
        candidate: "Terry Threadwell",
        votes: 4184,
        share: 42.31391585760518,
      },
    ],
  },
  carteret_county_board_of_commissioners_district_01_rep: {
    title: "Carteret County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/carteret_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-77.16760299132386, 34.672475000086344],
      [-76.86719599098757, 34.81132200001198],
    ],
    participatingCounties: ["CARTERET"],
    focusMaskData: "map_data/carteret_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Steven Overby": ["#e3974e", "#eea941", "#e7c557"],
      "David Quinn": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Steven Overby",
        votes: 990,
        share: 51.832460732984295,
      },
      {
        candidate: "David Quinn",
        votes: 920,
        share: 48.167539267015705,
      },
    ],
  },
  carteret_county_board_of_commissioners_district_03_rep: {
    title: "Carteret County Board Of Commissioners District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/carteret_county_board_of_commissioners_district_03_rep.geojson",
    bounds: [
      [-76.96083299094374, 34.71357999995965],
      [-76.67428799168063, 34.780842000168164],
    ],
    participatingCounties: ["CARTERET"],
    focusMaskData: "map_data/carteret_county_board_of_commissioners_district_03_rep_focus_mask.geojson",
    candidates: {
      "Jimmy Paylor": ["#e3974e", "#eea941", "#e7c557"],
      "Bryan Nicklow": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jimmy Paylor",
        votes: 2861,
        share: 85.50508069336522,
      },
      {
        candidate: "Bryan Nicklow",
        votes: 485,
        share: 14.494919306634788,
      },
    ],
  },
  carteret_county_board_of_commissioners_district_06_rep: {
    title: "Carteret County Board Of Commissioners District 6",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/carteret_county_board_of_commissioners_district_06_rep.geojson",
    bounds: [
      [-76.79563899156278, 34.531736000018384],
      [-76.0065569915957, 35.20145300023468],
    ],
    participatingCounties: ["CARTERET"],
    focusMaskData: "map_data/carteret_county_board_of_commissioners_district_06_rep_focus_mask.geojson",
    candidates: {
      "Chris Chadwick": ["#e3974e", "#eea941", "#e7c557"],
      "Kane Gillikin": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Chris Chadwick",
        votes: 1481,
        share: 72.27916056612982,
      },
      {
        candidate: "Kane Gillikin",
        votes: 568,
        share: 27.720839433870182,
      },
    ],
  },
  carteret_county_board_of_education_district_01_rep: {
    title: "Carteret County Board Of Education District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/carteret_county_board_of_education_district_01_rep.geojson",
    bounds: [
      [-77.16760299132386, 34.672475000086344],
      [-76.86719599098757, 34.81132200001198],
    ],
    participatingCounties: ["CARTERET"],
    focusMaskData: "map_data/carteret_county_board_of_education_district_01_rep_focus_mask.geojson",
    candidates: {
      "Anne Scott": ["#e3974e", "#eea941", "#e7c557"],
      "Stephanie Krzich": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Anne Scott",
        votes: 1283,
        share: 68.97849462365592,
      },
      {
        candidate: "Stephanie Krzich",
        votes: 577,
        share: 31.021505376344088,
      },
    ],
  },
  caswell_county_board_of_commissioners_district_01_rep: {
    title: "Caswell County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/caswell_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-79.52535199165271, 36.276117000167396],
      [-79.13831999125877, 36.541974999872686],
    ],
    participatingCounties: ["CASWELL"],
    focusMaskData: "map_data/caswell_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Cathy Lucas": ["#e3974e", "#eea941", "#e7c557"],
      "Frank Rose": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Cathy Lucas",
        votes: 237,
        share: 52.317880794701985,
      },
      {
        candidate: "Frank Rose",
        votes: 216,
        share: 47.682119205298015,
      },
    ],
  },
  caswell_county_board_of_education_district_01: {
    title: "Caswell County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/caswell_county_board_of_education_district_01.geojson",
    bounds: [
      [-79.52535199165271, 36.3052480003057],
      [-79.29320199119294, 36.54159199965758],
    ],
    participatingCounties: ["CASWELL"],
    focusMaskData: "map_data/caswell_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Vennie Beggarly": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Vennie Beggarly",
        votes: 456,
        share: 96.40591966173362,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 17,
        share: 3.5940803382663846,
      },
    ],
  },
  caswell_county_board_of_education_district_02: {
    title: "Caswell County Board Of Education District 2",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/caswell_county_board_of_education_district_02.geojson",
    bounds: [
      [-79.51981999114749, 36.24187500037196],
      [-79.13831999125877, 36.541974999872686],
    ],
    participatingCounties: ["CASWELL"],
    focusMaskData: "map_data/caswell_county_board_of_education_district_02_focus_mask.geojson",
    candidates: {
      "Joel Lillard": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Joel Lillard",
        votes: 560,
        share: 97.3913043478261,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 15,
        share: 2.608695652173913,
      },
    ],
  },
  caswell_county_board_of_education_district_05: {
    title: "Caswell County Board Of Education District 5",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/caswell_county_board_of_education_district_05.geojson",
    bounds: [
      [-79.53186499142537, 36.24187500037196],
      [-79.1482389906958, 36.45077399977244],
    ],
    participatingCounties: ["CASWELL"],
    focusMaskData: "map_data/caswell_county_board_of_education_district_05_focus_mask.geojson",
    candidates: {
      "Nicole Smith": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Ed5 (Write-In)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Nicole Smith",
        votes: 549,
        share: 98.38709677419357,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 9,
        share: 1.6129032258064515,
      },
      {
        candidate: "Ed5 (Write-In)",
        votes: 0,
        share: 0,
      },
    ],
  },
  chatham_county_board_of_commissioners_district_03_dem: {
    title: "Chatham County Board Of Commissioners District 3",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/chatham_county_board_of_commissioners_district_03_dem.geojson",
    bounds: [
      [-79.55580399086958, 35.51503900018258],
      [-78.90607099132465, 35.87680999986797],
    ],
    participatingCounties: ["CHATHAM"],
    focusMaskData: "map_data/chatham_county_board_of_commissioners_district_03_dem_focus_mask.geojson",
    candidates: {
      "Michael R. (Mike) Roberson": ["#e3974e", "#eea941", "#e7c557"],
      "Kate O'Brien": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Michael R. (Mike) Roberson",
        votes: 6575,
        share: 52.265500794912555,
      },
      {
        candidate: "Kate O'Brien",
        votes: 6005,
        share: 47.73449920508744,
      },
    ],
  },
  chatham_county_board_of_commissioners_district_05_dem: {
    title: "Chatham County Board Of Commissioners District 5",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/chatham_county_board_of_commissioners_district_05_dem.geojson",
    bounds: [
      [-79.55580399086958, 35.51503900018258],
      [-78.90607099132465, 35.87680999986797],
    ],
    participatingCounties: ["CHATHAM"],
    focusMaskData: "map_data/chatham_county_board_of_commissioners_district_05_dem_focus_mask.geojson",
    candidates: {
      "Franklin Gomez Flores": ["#e3974e", "#eea941", "#e7c557"],
      "Lynn Gaines": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Franklin Gomez Flores",
        votes: 7334,
        share: 59.87427545105722,
      },
      {
        candidate: "Lynn Gaines",
        votes: 4915,
        share: 40.12572454894277,
      },
    ],
  },
  cherokee_county_board_of_commissioners_district_i_rep: {
    title: "Cherokee County Board Of Commissioners District I",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/cherokee_county_board_of_commissioners_district_i_rep.geojson",
    bounds: [
      [-84.3218209914704, 34.98717500024027],
      [-83.69011299096077, 35.29224800066183],
    ],
    participatingCounties: ["CHEROKEE"],
    focusMaskData: "map_data/cherokee_county_board_of_commissioners_district_i_rep_focus_mask.geojson",
    candidates: {
      "Jeana Conley": ["#e3974e", "#eea941", "#e7c557"],
      "Cal Stiles": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Steve Jordan": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Jeana Conley",
        votes: 2437,
        share: 51.93947144075022,
      },
      {
        candidate: "Cal Stiles",
        votes: 1165,
        share: 24.82949701619778,
      },
      {
        candidate: "Steve Jordan",
        votes: 1090,
        share: 23.231031543052,
      },
    ],
  },
  cherokee_county_board_of_commissioners_district_iii_rep: {
    title: "Cherokee County Board Of Commissioners District Iii",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/cherokee_county_board_of_commissioners_district_iii_rep.geojson",
    bounds: [
      [-84.3218209914704, 34.98717500024027],
      [-83.69011299096077, 35.29224800066183],
    ],
    participatingCounties: ["CHEROKEE"],
    focusMaskData: "map_data/cherokee_county_board_of_commissioners_district_iii_rep_focus_mask.geojson",
    candidates: {
      "Steve Coleman": ["#e3974e", "#eea941", "#e7c557"],
      "Mark Stalcup": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Steve Coleman",
        votes: 2512,
        share: 54.360528024237176,
      },
      {
        candidate: "Mark Stalcup",
        votes: 2109,
        share: 45.639471975762824,
      },
    ],
  },
  cherokee_county_board_of_commissioners_district_iv_rep: {
    title: "Cherokee County Board Of Commissioners District Iv",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/cherokee_county_board_of_commissioners_district_iv_rep.geojson",
    bounds: [
      [-84.3218209914704, 34.98717500024027],
      [-83.69011299096077, 35.29224800066183],
    ],
    participatingCounties: ["CHEROKEE"],
    focusMaskData: "map_data/cherokee_county_board_of_commissioners_district_iv_rep_focus_mask.geojson",
    candidates: {
      "Sue Lynn Ledford": ["#e3974e", "#eea941", "#e7c557"],
      "Barry Killian": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Dan Eichenbaum": ["#af89be", "#b29fde", "#b8b0cb"],
      "Tom O'Leske": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Sue Lynn Ledford",
        votes: 2137,
        share: 45.477761225792726,
      },
      {
        candidate: "Barry Killian",
        votes: 1555,
        share: 33.09214726537561,
      },
      {
        candidate: "Dan Eichenbaum",
        votes: 897,
        share: 19.089167908065548,
      },
      {
        candidate: "Tom O'Leske",
        votes: 110,
        share: 2.3409236007661205,
      },
    ],
  },
  cherokee_county_board_of_education_district_ii_rep: {
    title: "Cherokee County Board Of Education District Ii",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/cherokee_county_board_of_education_district_ii_rep.geojson",
    bounds: [
      [-84.3218209914704, 34.98717500024027],
      [-83.69011299096077, 35.29224800066183],
    ],
    participatingCounties: ["CHEROKEE"],
    focusMaskData: "map_data/cherokee_county_board_of_education_district_ii_rep_focus_mask.geojson",
    candidates: {
      "David Ricks": ["#e3974e", "#eea941", "#e7c557"],
      "Jeannie Gaddis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "David Ricks",
        votes: 2310,
        share: 50.62458908612755,
      },
      {
        candidate: "Jeannie Gaddis",
        votes: 2253,
        share: 49.37541091387245,
      },
    ],
  },
  columbus_county_board_of_commissioners_district_06_rep: {
    title: "Columbus County Board Of Commissioners District 6",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/columbus_county_board_of_commissioners_district_06_rep.geojson",
    bounds: [
      [-79.07121099103664, 34.06925800013113],
      [-78.67028799168662, 34.48477800028876],
    ],
    participatingCounties: ["COLUMBUS"],
    focusMaskData: "map_data/columbus_county_board_of_commissioners_district_06_rep_focus_mask.geojson",
    candidates: {
      "Jeanne McPherson": ["#e3974e", "#eea941", "#e7c557"],
      "Ricky Bullard": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Jody (JL) Hinson": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Jeanne McPherson",
        votes: 666,
        share: 53.70967741935484,
      },
      {
        candidate: "Ricky Bullard",
        votes: 525,
        share: 42.33870967741936,
      },
      {
        candidate: "Jody (JL) Hinson",
        votes: 49,
        share: 3.951612903225806,
      },
    ],
  },
  columbus_county_board_of_commissioners_district_07_dem: {
    title: "Columbus County Board Of Commissioners District 7",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/columbus_county_board_of_commissioners_district_07_dem.geojson",
    bounds: [
      [-78.90651299125426, 33.94436500018155],
      [-78.43965799157263, 34.39085899995539],
    ],
    participatingCounties: ["COLUMBUS"],
    focusMaskData: "map_data/columbus_county_board_of_commissioners_district_07_dem_focus_mask.geojson",
    candidates: {
      "Jeff Register": ["#e3974e", "#eea941", "#e7c557"],
      "Alonzo McArthur": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jeff Register",
        votes: 134,
        share: 72.04301075268818,
      },
      {
        candidate: "Alonzo McArthur",
        votes: 52,
        share: 27.956989247311824,
      },
    ],
  },
  craven_county_board_of_commissioners_district_01_rep: {
    title: "Craven County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/craven_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-77.35254999108876, 35.040337999684226],
      [-76.89591899153906, 35.41836199990053],
    ],
    participatingCounties: ["CRAVEN"],
    focusMaskData: "map_data/craven_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Joshua D. Whitford": ["#e3974e", "#eea941", "#e7c557"],
      "John Chittick": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Craig Lewis": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Joshua D. Whitford",
        votes: 700,
        share: 41.44464179988159,
      },
      {
        candidate: "John Chittick",
        votes: 529,
        share: 31.32030787448194,
      },
      {
        candidate: "Craig Lewis",
        votes: 460,
        share: 27.23505032563647,
      },
    ],
  },
  craven_county_board_of_commissioners_district_04_rep: {
    title: "Craven County Board Of Commissioners District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/craven_county_board_of_commissioners_district_04_rep.geojson",
    bounds: [
      [-77.209027990785, 35.05467499988469],
      [-77.02316799122973, 35.1953059997737],
    ],
    participatingCounties: ["CRAVEN"],
    focusMaskData: "map_data/craven_county_board_of_commissioners_district_04_rep_focus_mask.geojson",
    candidates: {
      "Guy D. Smith": ["#e3974e", "#eea941", "#e7c557"],
      "E. T. Mitchell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Guy D. Smith",
        votes: 1227,
        share: 77.60910815939279,
      },
      {
        candidate: "E. T. Mitchell",
        votes: 354,
        share: 22.39089184060721,
      },
    ],
  },
  craven_county_board_of_commissioners_district_07_rep: {
    title: "Craven County Board Of Commissioners District 7",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/craven_county_board_of_commissioners_district_07_rep.geojson",
    bounds: [
      [-77.1160649910235, 34.968583999410285],
      [-76.93280999112146, 35.12399100022203],
    ],
    participatingCounties: ["CRAVEN"],
    focusMaskData: "map_data/craven_county_board_of_commissioners_district_07_rep_focus_mask.geojson",
    candidates: {
      "Denny Bucher": ["#e3974e", "#eea941", "#e7c557"],
      "Greg Muse": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Denny Bucher",
        votes: 1303,
        share: 72.75265214963707,
      },
      {
        candidate: "Greg Muse",
        votes: 488,
        share: 27.247347850362925,
      },
    ],
  },
  craven_county_board_of_education_district_06_rep: {
    title: "Craven County Board Of Education District 6",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/craven_county_board_of_education_district_06_rep.geojson",
    bounds: [
      [-77.10885099119513, 34.80906600018467],
      [-76.83933299120433, 35.102766999868905],
    ],
    participatingCounties: ["CRAVEN"],
    focusMaskData: "map_data/craven_county_board_of_education_district_06_rep_focus_mask.geojson",
    candidates: {
      "Tracy Jacques Derby": ["#e3974e", "#eea941", "#e7c557"],
      "Lauren Riggs Kitzinger": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tracy Jacques Derby",
        votes: 495,
        share: 56.442417331813,
      },
      {
        candidate: "Lauren Riggs Kitzinger",
        votes: 382,
        share: 43.557582668187,
      },
    ],
  },
  currituck_county_board_of_commissioners_district_03_rep: {
    title: "Currituck County Board Of Commissioners District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/currituck_county_board_of_commissioners_district_03_rep.geojson",
    bounds: [
      [-76.31330299076771, 36.0288339997429],
      [-75.70907799155268, 36.55091599969266],
    ],
    participatingCounties: ["CURRITUCK"],
    focusMaskData: "map_data/currituck_county_board_of_commissioners_district_03_rep_focus_mask.geojson",
    candidates: {
      "Mike Payment": ["#e3974e", "#eea941", "#e7c557"],
      "Ronda Galko": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mike Payment",
        votes: 2422,
        share: 67.9382889200561,
      },
      {
        candidate: "Ronda Galko",
        votes: 1143,
        share: 32.0617110799439,
      },
    ],
  },
  currituck_county_board_of_commissioners_district_05_rep: {
    title: "Currituck County Board Of Commissioners District 5",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/currituck_county_board_of_commissioners_district_05_rep.geojson",
    bounds: [
      [-76.31330299076771, 36.0288339997429],
      [-75.70907799155268, 36.55091599969266],
    ],
    participatingCounties: ["CURRITUCK"],
    focusMaskData: "map_data/currituck_county_board_of_commissioners_district_05_rep_focus_mask.geojson",
    candidates: {
      "Steve Hedrick": ["#e3974e", "#eea941", "#e7c557"],
      "Charles J. Gray": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Steve Hedrick",
        votes: 1977,
        share: 57.90861159929701,
      },
      {
        candidate: "Charles J. Gray",
        votes: 1437,
        share: 42.09138840070299,
      },
    ],
  },
  dare_county_board_of_commissioners_district_01_rep: {
    title: "Dare County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/dare_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-76.02747899144705, 35.14056500001367],
      [-75.4001189911457, 36.24498399950264],
    ],
    participatingCounties: ["DARE"],
    focusMaskData: "map_data/dare_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "David Twiddy": ["#e3974e", "#eea941", "#e7c557"],
      "Mike Burrus": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Edgar L. Barnes": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "David Twiddy",
        votes: 2773,
        share: 40.21171693735499,
      },
      {
        candidate: "Mike Burrus",
        votes: 2207,
        share: 32.004060324825986,
      },
      {
        candidate: "Edgar L. Barnes",
        votes: 1916,
        share: 27.784222737819025,
      },
    ],
  },
  dare_county_board_of_commissioners_district_02_rep: {
    title: "Dare County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/dare_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-76.02747899144705, 35.14056500001367],
      [-75.4001189911457, 36.24498399950264],
    ],
    participatingCounties: ["DARE"],
    focusMaskData: "map_data/dare_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "Rob Ross": ["#e3974e", "#eea941", "#e7c557"],
      "Christian Thomas Hayman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Rob Ross",
        votes: 4111,
        share: 65.43052681839885,
      },
      {
        candidate: "Christian Thomas Hayman",
        votes: 2172,
        share: 34.56947318160115,
      },
    ],
  },
  dare_county_board_of_education_district_01_rep: {
    title: "Dare County Board Of Education District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/dare_county_board_of_education_district_01_rep.geojson",
    bounds: [
      [-76.02747899144705, 35.14056500001367],
      [-75.4001189911457, 36.24498399950264],
    ],
    participatingCounties: ["DARE"],
    focusMaskData: "map_data/dare_county_board_of_education_district_01_rep_focus_mask.geojson",
    candidates: {
      "Stephen Nichols": ["#e3974e", "#eea941", "#e7c557"],
      "Christie Baer": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Shannon Walters": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Stephen Nichols",
        votes: 2733,
        share: 43.025818639798494,
      },
      {
        candidate: "Christie Baer",
        votes: 2063,
        share: 32.477959697733,
      },
      {
        candidate: "Shannon Walters",
        votes: 1556,
        share: 24.49622166246851,
      },
    ],
  },
  duplin_county_board_of_commissioners_district_02_rep: {
    title: "Duplin County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/duplin_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-77.94849599160477, 34.83227599977949],
      [-77.65109299129914, 35.1778529995942],
    ],
    participatingCounties: ["DUPLIN"],
    focusMaskData: "map_data/duplin_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "Dexter Edwards": ["#e3974e", "#eea941", "#e7c557"],
      "Tiffany Ferrell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Dexter Edwards",
        votes: 754,
        share: 73.99411187438666,
      },
      {
        candidate: "Tiffany Ferrell",
        votes: 265,
        share: 26.005888125613343,
      },
    ],
  },
  durham_county_board_of_education_district_01: {
    title: "Durham County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/durham_county_board_of_education_district_01.geojson",
    bounds: [
      [-78.9294999907958, 35.86697799969018],
      [-78.80497499142568, 36.08143699985641],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/durham_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Natalie Bent Kitaif": ["#e3974e", "#eea941", "#e7c557"],
      "Dilcy Burton": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Davit Melikian": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Natalie Bent Kitaif",
        votes: 7602,
        share: 68.61010830324909,
      },
      {
        candidate: "Dilcy Burton",
        votes: 2402,
        share: 21.67870036101083,
      },
      {
        candidate: "Davit Melikian",
        votes: 907,
        share: 8.185920577617328,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 169,
        share: 1.5252707581227436,
      },
    ],
  },
  durham_county_board_of_education_district_03: {
    title: "Durham County Board Of Education District 3",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/durham_county_board_of_education_district_03.geojson",
    bounds: [
      [-79.01630499067694, 35.8632100000935],
      [-78.8914339996317, 36.03816400027502],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/durham_county_board_of_education_district_03_focus_mask.geojson",
    candidates: {
      "Gabby Rivero": ["#e3974e", "#eea941", "#e7c557"],
      "Lauren Sartain": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Peter Crawford": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Gabby Rivero",
        votes: 9917,
        share: 52.39881644298848,
      },
      {
        candidate: "Lauren Sartain",
        votes: 6357,
        share: 33.58871393849731,
      },
      {
        candidate: "Peter Crawford",
        votes: 2553,
        share: 13.489379689316284,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 99,
        share: 0.5230899291979287,
      },
    ],
  },
  durham_county_board_of_education_district_04: {
    title: "Durham County Board Of Education District 4",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/durham_county_board_of_education_district_04.geojson",
    bounds: [
      [-78.9858439906802, 35.91839399970294],
      [-78.69931599106128, 36.239319999857365],
    ],
    participatingCounties: ["DURHAM"],
    focusMaskData: "map_data/durham_county_board_of_education_district_04_focus_mask.geojson",
    candidates: {
      "Xavier Cason": ["#e3974e", "#eea941", "#e7c557"],
      "Kristy Moore": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Jerome Leathers": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Xavier Cason",
        votes: 8545,
        share: 50.76941358208068,
      },
      {
        candidate: "Kristy Moore",
        votes: 5174,
        share: 30.74089477749391,
      },
      {
        candidate: "Jerome Leathers",
        votes: 2987,
        share: 17.747014437644822,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 125,
        share: 0.7426772027805835,
      },
    ],
  },
  edgecombe_county_board_of_commissioners_district_06_dem: {
    title: "Edgecombe County Board Of Commissioners District 6",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/edgecombe_county_board_of_commissioners_district_06_dem.geojson",
    bounds: [
      [-77.8284439907689, 35.72290000029943],
      [-77.50642199149276, 35.97789300006679],
    ],
    participatingCounties: ["EDGECOMBE"],
    focusMaskData: "map_data/edgecombe_county_board_of_commissioners_district_06_dem_focus_mask.geojson",
    candidates: {
      "David Batts": ["#e3974e", "#eea941", "#e7c557"],
      "Donald C. Boswell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "David Batts",
        votes: 337,
        share: 67.53507014028057,
      },
      {
        candidate: "Donald C. Boswell",
        votes: 162,
        share: 32.46492985971944,
      },
    ],
  },
  edgecombe_county_board_of_education_district_01: {
    title: "Edgecombe County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/edgecombe_county_board_of_education_district_01.geojson",
    bounds: [
      [-77.81659099147079, 35.81867899975693],
      [-77.51514199107964, 36.07853199966344],
    ],
    participatingCounties: ["EDGECOMBE"],
    focusMaskData: "map_data/edgecombe_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Evelyn Shaw Wilson": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Evelyn Shaw Wilson",
        votes: 745,
        share: 90.30303030303033,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 80,
        share: 9.696969696969695,
      },
    ],
  },
  edgecombe_county_board_of_education_district_03: {
    title: "Edgecombe County Board Of Education District 3",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/edgecombe_county_board_of_education_district_03.geojson",
    bounds: [
      [-77.64088599151411, 35.72290000029943],
      [-77.34241799139262, 36.03777499977816],
    ],
    participatingCounties: ["EDGECOMBE"],
    focusMaskData: "map_data/edgecombe_county_board_of_education_district_03_focus_mask.geojson",
    candidates: {
      "Evelyn J. Johnson": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Evelyn J. Johnson",
        votes: 682,
        share: 96.875,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 22,
        share: 3.125,
      },
    ],
  },
  edgecombe_county_board_of_education_district_05: {
    title: "Edgecombe County Board Of Education District 5",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/edgecombe_county_board_of_education_district_05.geojson",
    bounds: [
      [-77.81659099147079, 35.81867899975693],
      [-77.54109099129029, 35.97789300006679],
    ],
    participatingCounties: ["EDGECOMBE"],
    focusMaskData: "map_data/edgecombe_county_board_of_education_district_05_focus_mask.geojson",
    candidates: {
      "Gloria F. Davis": ["#e3974e", "#eea941", "#e7c557"],
      "Ann Elise Kent": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Gloria F. Davis",
        votes: 1034,
        share: 84.47712418300654,
      },
      {
        candidate: "Ann Elise Kent",
        votes: 185,
        share: 15.11437908496732,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 5,
        share: 0.4084967320261438,
      },
    ],
  },
  edgecombe_county_board_of_education_district_07: {
    title: "Edgecombe County Board Of Education District 7",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/edgecombe_county_board_of_education_district_07.geojson",
    bounds: [
      [-77.8284439907689, 35.781679999940785],
      [-77.63963999121522, 35.97789300006679],
    ],
    participatingCounties: ["EDGECOMBE"],
    focusMaskData: "map_data/edgecombe_county_board_of_education_district_07_focus_mask.geojson",
    candidates: {
      "Crystal Wimes-Anderson": ["#e3974e", "#eea941", "#e7c557"],
      "Jewel J. Calhoun": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Crystal Wimes-Anderson",
        votes: 361,
        share: 49.31693989071038,
      },
      {
        candidate: "Jewel J. Calhoun",
        votes: 352,
        share: 48.08743169398907,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 19,
        share: 2.5956284153005464,
      },
    ],
  },
  forsyth_county_board_of_commissioners_district_b_dem: {
    title: "Forsyth County Board Of Commissioners District B",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/forsyth_county_board_of_commissioners_district_b_dem.geojson",
    bounds: [
      [-80.51668199123979, 35.97276199970947],
      [-80.03511899082645, 36.2615149998244],
    ],
    participatingCounties: ["FORSYTH"],
    focusMaskData: "map_data/forsyth_county_board_of_commissioners_district_b_dem_focus_mask.geojson",
    candidates: {
      "Marsie West": ["#e3974e", "#eea941", "#e7c557"],
      "Adam Hill": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Marsie West",
        votes: 13430,
        share: 62.23066586349103,
      },
      {
        candidate: "Adam Hill",
        votes: 8151,
        share: 37.76933413650897,
      },
    ],
  },
  franklin_county_board_of_education_district_01: {
    title: "Franklin County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/franklin_county_board_of_education_district_01.geojson",
    bounds: [
      [-78.54641399102609, 35.983831999568956],
      [-78.43124699086437, 36.077247000396],
    ],
    participatingCounties: ["FRANKLIN"],
    focusMaskData: "map_data/franklin_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Scott Graham": ["#e3974e", "#eea941", "#e7c557"],
      "Meghan Jordan": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Frank Toler": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Scott Graham",
        votes: 1071,
        share: 48.57142857142857,
      },
      {
        candidate: "Meghan Jordan",
        votes: 856,
        share: 38.82086167800453,
      },
      {
        candidate: "Frank Toler",
        votes: 278,
        share: 12.607709750566892,
      },
    ],
  },
  franklin_county_board_of_education_district_05: {
    title: "Franklin County Board Of Education District 5",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/franklin_county_board_of_education_district_05.geojson",
    bounds: [
      [-78.47052799062844, 35.931196000298065],
      [-78.23073599067828, 36.06652700038432],
    ],
    participatingCounties: ["FRANKLIN"],
    focusMaskData: "map_data/franklin_county_board_of_education_district_05_focus_mask.geojson",
    candidates: {
      "Jonathan Vanderford": ["#e3974e", "#eea941", "#e7c557"],
      "Chris Perry": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "D. Ashley Cooper": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Jonathan Vanderford",
        votes: 829,
        share: 42.84237726098191,
      },
      {
        candidate: "Chris Perry",
        votes: 619,
        share: 31.989664082687337,
      },
      {
        candidate: "D. Ashley Cooper",
        votes: 487,
        share: 25.167958656330747,
      },
    ],
  },
  gates_county_board_of_education_district_01: {
    title: "Gates County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/gates_county_board_of_education_district_01.geojson",
    bounds: [
      [-76.95066199077544, 36.296137999761385],
      [-76.45371099110253, 36.55214899996891],
    ],
    participatingCounties: ["GATES"],
    focusMaskData: "map_data/gates_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Sallie J. Ryan": ["#e3974e", "#eea941", "#e7c557"],
      "Brian Silvers": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Sallie J. Ryan",
        votes: 1378,
        share: 61.68307967770814,
      },
      {
        candidate: "Brian Silvers",
        votes: 848,
        share: 37.95881826320501,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 8,
        share: 0.3581020590868397,
      },
    ],
  },
  gates_county_board_of_education_district_02_unexpired: {
    title: "Gates County Board Of Education District 2",
    subtitle: "Unexpired Primary",
    scope: "local_district",
    data: "map_data/gates_county_board_of_education_district_02_unexpired.geojson",
    bounds: [
      [-76.95066199077544, 36.296137999761385],
      [-76.45371099110253, 36.55214899996891],
    ],
    participatingCounties: ["GATES"],
    focusMaskData: "map_data/gates_county_board_of_education_district_02_unexpired_focus_mask.geojson",
    candidates: {
      "Angela (JoJo) Legg": ["#e3974e", "#eea941", "#e7c557"],
      "Adam Williams": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Shari Earhart": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Angela (JoJo) Legg",
        votes: 1211,
        share: 53.56037151702786,
      },
      {
        candidate: "Adam Williams",
        votes: 724,
        share: 32.02122954444936,
      },
      {
        candidate: "Shari Earhart",
        votes: 323,
        share: 14.285714285714285,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 3,
        share: 0.1326846528084918,
      },
    ],
  },
  gates_county_board_of_education_district_03: {
    title: "Gates County Board Of Education District 3",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/gates_county_board_of_education_district_03.geojson",
    bounds: [
      [-76.95066199077544, 36.296137999761385],
      [-76.45371099110253, 36.55214899996891],
    ],
    participatingCounties: ["GATES"],
    focusMaskData: "map_data/gates_county_board_of_education_district_03_focus_mask.geojson",
    candidates: {
      "Danny Hale": ["#e3974e", "#eea941", "#e7c557"],
      "Lola N. Rountree": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Danny Hale",
        votes: 1202,
        share: 52.07972270363952,
      },
      {
        candidate: "Lola N. Rountree",
        votes: 1103,
        share: 47.79029462738302,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 3,
        share: 0.1299826689774696,
      },
    ],
  },
  gates_county_board_of_education_district_05: {
    title: "Gates County Board Of Education District 5",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/gates_county_board_of_education_district_05.geojson",
    bounds: [
      [-76.95066199077544, 36.296137999761385],
      [-76.45371099110253, 36.55214899996891],
    ],
    participatingCounties: ["GATES"],
    focusMaskData: "map_data/gates_county_board_of_education_district_05_focus_mask.geojson",
    candidates: {
      "Nick Lolies": ["#e3974e", "#eea941", "#e7c557"],
      "L. Ray Brothers": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Nick Lolies",
        votes: 1377,
        share: 61.63831692032229,
      },
      {
        candidate: "L. Ray Brothers",
        votes: 853,
        share: 38.18263205013429,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 4,
        share: 0.1790510295434198,
      },
    ],
  },
  granville_county_board_of_commissioners_district_02_dem: {
    title: "Granville County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/granville_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-78.7974819916061, 36.180380000195534],
      [-78.45364799072091, 36.54254100036947],
    ],
    participatingCounties: ["GRANVILLE"],
    focusMaskData: "map_data/granville_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Tonya N. Sneed": ["#e3974e", "#eea941", "#e7c557"],
      "Robert (Rob) Williford II": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tonya N. Sneed",
        votes: 476,
        share: 55.34883720930232,
      },
      {
        candidate: "Robert (Rob) Williford II",
        votes: 384,
        share: 44.65116279069768,
      },
    ],
  },
  granville_county_board_of_education_district_01: {
    title: "Granville County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/granville_county_board_of_education_district_01.geojson",
    bounds: [
      [-78.80311799143297, 36.17716200003809],
      [-78.45364799072091, 36.54254100036947],
    ],
    participatingCounties: ["GRANVILLE"],
    focusMaskData: "map_data/granville_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Gayzelle J. Parker": ["#e3974e", "#eea941", "#e7c557"],
      "Sammy Bullock": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Abigail Thompson": ["#af89be", "#b29fde", "#b8b0cb"],
      "Stella Y. Hawley": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Write-In (Miscellaneous)": ["#c84f4a", "#df7f7b", "#edb3b0"],
    },
    results: [
      {
        candidate: "Gayzelle J. Parker",
        votes: 673,
        share: 50.33657442034405,
      },
      {
        candidate: "Sammy Bullock",
        votes: 309,
        share: 23.111443530291695,
      },
      {
        candidate: "Abigail Thompson",
        votes: 272,
        share: 20.344053851907255,
      },
      {
        candidate: "Stella Y. Hawley",
        votes: 79,
        share: 5.908750934928945,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 4,
        share: 0.2991772625280479,
      },
    ],
  },
  granville_county_board_of_education_district_02: {
    title: "Granville County Board Of Education District 2",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/granville_county_board_of_education_district_02.geojson",
    bounds: [
      [-78.7974819916061, 36.180380000195534],
      [-78.45364799072091, 36.54254100036947],
    ],
    participatingCounties: ["GRANVILLE"],
    focusMaskData: "map_data/granville_county_board_of_education_district_02_focus_mask.geojson",
    candidates: {
      "Helen D. Lindsey": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Helen D. Lindsey",
        votes: 1450,
        share: 97.84075573549258,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 32,
        share: 2.1592442645074224,
      },
    ],
  },
  granville_county_board_of_education_district_06: {
    title: "Granville County Board Of Education District 6",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/granville_county_board_of_education_district_06.geojson",
    bounds: [
      [-78.67122899101405, 36.021826000381765],
      [-78.49661399127639, 36.201340999605634],
    ],
    participatingCounties: ["GRANVILLE"],
    focusMaskData: "map_data/granville_county_board_of_education_district_06_focus_mask.geojson",
    candidates: {
      "Jennifer B. Lavrack": ["#e3974e", "#eea941", "#e7c557"],
      "Paul Latorre": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Jennifer B. Lavrack",
        votes: 891,
        share: 69.06976744186046,
      },
      {
        candidate: "Paul Latorre",
        votes: 393,
        share: 30.465116279069765,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 6,
        share: 0.4651162790697674,
      },
    ],
  },
  greene_county_board_of_commissioners_district_04_dem: {
    title: "Greene County Board Of Commissioners District 4",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/greene_county_board_of_commissioners_district_04_dem.geojson",
    bounds: [
      [-77.82674399127508, 35.34732399997361],
      [-77.47434599146031, 35.65229499992457],
    ],
    participatingCounties: ["GREENE"],
    focusMaskData: "map_data/greene_county_board_of_commissioners_district_04_dem_focus_mask.geojson",
    candidates: {
      "Tyrone Sutton, Jr.": ["#e3974e", "#eea941", "#e7c557"],
      "Bennie Heath": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tyrone Sutton, Jr.",
        votes: 1046,
        share: 72.68936761640028,
      },
      {
        candidate: "Bennie Heath",
        votes: 393,
        share: 27.31063238359972,
      },
    ],
  },
  guilford_county_board_of_commissioners_district_07_dem: {
    title: "Guilford County Board Of Commissioners District 7",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/guilford_county_board_of_commissioners_district_07_dem.geojson",
    bounds: [
      [-79.82103599084076, 35.95304500036248],
      [-79.61998099126339, 36.152910000091154],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/guilford_county_board_of_commissioners_district_07_dem_focus_mask.geojson",
    candidates: {
      "Lisa McMillan": ["#e3974e", "#eea941", "#e7c557"],
      "Walter T. Johnson III": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lisa McMillan",
        votes: 3666,
        share: 50.23982458544607,
      },
      {
        candidate: "Walter T. Johnson III",
        votes: 3631,
        share: 49.76017541455393,
      },
    ],
  },
  guilford_county_board_of_education_district_04_dem: {
    title: "Guilford County Board Of Education District 4",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/guilford_county_board_of_education_district_04_dem.geojson",
    bounds: [
      [-79.82413299089532, 35.95331200047488],
      [-79.53240999147594, 36.24868700026305],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/guilford_county_board_of_education_district_04_dem_focus_mask.geojson",
    candidates: {
      "Ebony Burnett": ["#e3974e", "#eea941", "#e7c557"],
      "Irish Spencer": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Michelle L. Linster": ["#af89be", "#b29fde", "#b8b0cb"],
      "Sherry Smith Walker": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Ebony Burnett",
        votes: 3583,
        share: 50.55735854381261,
      },
      {
        candidate: "Irish Spencer",
        votes: 1997,
        share: 28.17835473402004,
      },
      {
        candidate: "Michelle L. Linster",
        votes: 853,
        share: 12.036122477776209,
      },
      {
        candidate: "Sherry Smith Walker",
        votes: 654,
        share: 9.22816424439114,
      },
    ],
  },
  guilford_county_board_of_education_district_06_dem: {
    title: "Guilford County Board Of Education District 6",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/guilford_county_board_of_education_district_06_dem.geojson",
    bounds: [
      [-80.04267999098919, 35.99630400041594],
      [-79.86442499146416, 36.15057700001073],
    ],
    participatingCounties: ["GUILFORD"],
    focusMaskData: "map_data/guilford_county_board_of_education_district_06_dem_focus_mask.geojson",
    candidates: {
      "Khem D. Irby": ["#e3974e", "#eea941", "#e7c557"],
      "Chris Gillespie": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Khem D. Irby",
        votes: 3924,
        share: 65.16107605446696,
      },
      {
        candidate: "Chris Gillespie",
        votes: 2098,
        share: 34.83892394553305,
      },
    ],
  },
  harnett_county_board_of_commissioners_district_02_rep: {
    title: "Harnett County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/harnett_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-79.11253057985746, 35.207974519381516],
      [-78.52985099160493, 35.521498000267115],
    ],
    participatingCounties: ["HARNETT"],
    focusMaskData: "map_data/harnett_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "Dewayne Lee": ["#e3974e", "#eea941", "#e7c557"],
      "Eric Stevenson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Dewayne Lee",
        votes: 1038,
        share: 60.879765395894424,
      },
      {
        candidate: "Eric Stevenson",
        votes: 667,
        share: 39.12023460410557,
      },
    ],
  },
  henderson_county_board_of_commissioners_district_03_rep: {
    title: "Henderson County Board Of Commissioners District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/henderson_county_board_of_commissioners_district_03_rep.geojson",
    bounds: [
      [-82.74513899094796, 35.14418800027327],
      [-82.26146299087989, 35.500220000472574],
    ],
    participatingCounties: ["HENDERSON"],
    focusMaskData: "map_data/henderson_county_board_of_commissioners_district_03_rep_focus_mask.geojson",
    candidates: {
      "Rudd Orr": ["#e3974e", "#eea941", "#e7c557"],
      "Steven D. Wyatt": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Rudd Orr",
        votes: 6214,
        share: 56.33215483637023,
      },
      {
        candidate: "Steven D. Wyatt",
        votes: 4817,
        share: 43.66784516362977,
      },
    ],
  },
  henderson_county_board_of_commissioners_district_04_rep: {
    title: "Henderson County Board Of Commissioners District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/henderson_county_board_of_commissioners_district_04_rep.geojson",
    bounds: [
      [-82.74513899094796, 35.14418800027327],
      [-82.26146299087989, 35.500220000472574],
    ],
    participatingCounties: ["HENDERSON"],
    focusMaskData: "map_data/henderson_county_board_of_commissioners_district_04_rep_focus_mask.geojson",
    candidates: {
      "Rebecca K. McCall": ["#e3974e", "#eea941", "#e7c557"],
      "Tom Appleby": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Rebecca K. McCall",
        votes: 7285,
        share: 67.59138986825015,
      },
      {
        candidate: "Tom Appleby",
        votes: 3493,
        share: 32.40861013174986,
      },
    ],
  },
  jackson_county_board_of_commissioners_district_01_dem: {
    title: "Jackson County Board Of Commissioners District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/jackson_county_board_of_commissioners_district_01_dem.geojson",
    bounds: [
      [-83.36376599155831, 35.00135400071313],
      [-82.9191849915221, 35.526043000212624],
    ],
    participatingCounties: ["JACKSON"],
    focusMaskData: "map_data/jackson_county_board_of_commissioners_district_01_dem_focus_mask.geojson",
    candidates: {
      "Casey Walawender": ["#e3974e", "#eea941", "#e7c557"],
      "Julie Extine Painter": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "John A. Herrera": ["#af89be", "#b29fde", "#b8b0cb"],
      "German (Worm) Vivas": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Casey Walawender",
        votes: 1342,
        share: 39.62208444050783,
      },
      {
        candidate: "Julie Extine Painter",
        votes: 1194,
        share: 35.25243578387954,
      },
      {
        candidate: "John A. Herrera",
        votes: 714,
        share: 21.08060230292294,
      },
      {
        candidate: "German (Worm) Vivas",
        votes: 137,
        share: 4.044877472689696,
      },
    ],
  },
  jackson_county_board_of_commissioners_district_01_rep: {
    title: "Jackson County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/jackson_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-83.36376599155831, 35.00135400071313],
      [-82.9191849915221, 35.526043000212624],
    ],
    participatingCounties: ["JACKSON"],
    focusMaskData: "map_data/jackson_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Steven J. Sutton": ["#e3974e", "#eea941", "#e7c557"],
      "Anthony K. Sequoyah": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Steven J. Sutton",
        votes: 1713,
        share: 53.481111458008115,
      },
      {
        candidate: "Anthony K. Sequoyah",
        votes: 1490,
        share: 46.518888541991885,
      },
    ],
  },
  jackson_county_board_of_commissioners_district_02_dem: {
    title: "Jackson County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/jackson_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-83.36376599155831, 35.00135400071313],
      [-82.9191849915221, 35.526043000212624],
    ],
    participatingCounties: ["JACKSON"],
    focusMaskData: "map_data/jackson_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Sean Bridgers": ["#e3974e", "#eea941", "#e7c557"],
      "Frances O. Owens": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Sean Bridgers",
        votes: 2314,
        share: 69.13654018524052,
      },
      {
        candidate: "Frances O. Owens",
        votes: 1033,
        share: 30.863459814759487,
      },
    ],
  },
  johnston_county_board_of_commissioners_district_03_rep: {
    title: "Johnston County Board Of Commissioners District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/johnston_county_board_of_commissioners_district_03_rep.geojson",
    bounds: [
      [-78.70890199075369, 35.25466299955155],
      [-78.06478399167396, 35.8181199999109],
    ],
    participatingCounties: ["JOHNSTON"],
    focusMaskData: "map_data/johnston_county_board_of_commissioners_district_03_rep_focus_mask.geojson",
    candidates: {
      "Adam Caldwell": ["#e3974e", "#eea941", "#e7c557"],
      "Mike Rose": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Chad M. Stewart": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Adam Caldwell",
        votes: 8482,
        share: 48.34150233671492,
      },
      {
        candidate: "Mike Rose",
        votes: 6528,
        share: 37.20506098256013,
      },
      {
        candidate: "Chad M. Stewart",
        votes: 2536,
        share: 14.453436680724952,
      },
    ],
  },
  johnston_county_board_of_commissioners_district_07_rep: {
    title: "Johnston County Board Of Commissioners District 7",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/johnston_county_board_of_commissioners_district_07_rep.geojson",
    bounds: [
      [-78.70890199075369, 35.25466299955155],
      [-78.06478399167396, 35.8181199999109],
    ],
    participatingCounties: ["JOHNSTON"],
    focusMaskData: "map_data/johnston_county_board_of_commissioners_district_07_rep_focus_mask.geojson",
    candidates: {
      "R.S. (Butch) Lawter, Jr.": ["#e3974e", "#eea941", "#e7c557"],
      "Keith Branch": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "R.S. (Butch) Lawter, Jr.",
        votes: 10293,
        share: 59.66610631267753,
      },
      {
        candidate: "Keith Branch",
        votes: 6958,
        share: 40.33389368732247,
      },
    ],
  },
  johnston_county_board_of_education_district_02_rep: {
    title: "Johnston County Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/johnston_county_board_of_education_district_02_rep.geojson",
    bounds: [
      [-78.70890199075369, 35.25466299955155],
      [-78.06478399167396, 35.8181199999109],
    ],
    participatingCounties: ["JOHNSTON"],
    focusMaskData: "map_data/johnston_county_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Terry Tippett": ["#e3974e", "#eea941", "#e7c557"],
      "Jeremy Jenkins": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Terry Tippett",
        votes: 12185,
        share: 72.98155246765691,
      },
      {
        candidate: "Jeremy Jenkins",
        votes: 4511,
        share: 27.018447532343075,
      },
    ],
  },
  jones_county_board_of_commissioners_district_01_dem: {
    title: "Jones County Board Of Commissioners District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/jones_county_board_of_commissioners_district_01_dem.geojson",
    bounds: [
      [-77.52995199089746, 34.930951000109985],
      [-77.25364499121557, 35.243000999644366],
    ],
    participatingCounties: ["JONES"],
    focusMaskData: "map_data/jones_county_board_of_commissioners_district_01_dem_focus_mask.geojson",
    candidates: {
      "Lou Miller": ["#e3974e", "#eea941", "#e7c557"],
      "Kenneth Dillahunt": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lou Miller",
        votes: 169,
        share: 79.34272300469483,
      },
      {
        candidate: "Kenneth Dillahunt",
        votes: 44,
        share: 20.657276995305164,
      },
    ],
  },
  jones_county_board_of_commissioners_district_02_dem: {
    title: "Jones County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/jones_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-77.41643399173722, 34.78032300028129],
      [-77.0472489912505, 35.11315400029644],
    ],
    participatingCounties: ["JONES"],
    focusMaskData: "map_data/jones_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Brittney Meadows": ["#e3974e", "#eea941", "#e7c557"],
      "Cara A. Dunn": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brittney Meadows",
        votes: 124,
        share: 63.589743589743584,
      },
      {
        candidate: "Cara A. Dunn",
        votes: 71,
        share: 36.41025641025641,
      },
    ],
  },
  lenoir_county_board_of_commissioners_district_02_rep: {
    title: "Lenoir County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/lenoir_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-77.83088599177844, 35.21501500009469],
      [-77.61629999166634, 35.37196599948815],
    ],
    participatingCounties: ["LENOIR"],
    focusMaskData: "map_data/lenoir_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "BJ Murphy": ["#e3974e", "#eea941", "#e7c557"],
      "Stephen LaRoque": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "BJ Murphy",
        votes: 836,
        share: 90.77090119435395,
      },
      {
        candidate: "Stephen LaRoque",
        votes: 85,
        share: 9.229098805646036,
      },
    ],
  },
  lenoir_county_board_of_education_district_01_rep: {
    title: "Lenoir County Board Of Education District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/lenoir_county_board_of_education_district_01_rep.geojson",
    bounds: [
      [-77.8342489917249, 35.00813800018973],
      [-77.57217199157799, 35.26709600006353],
    ],
    participatingCounties: ["LENOIR"],
    focusMaskData: "map_data/lenoir_county_board_of_education_district_01_rep_focus_mask.geojson",
    candidates: {
      "Billy Davis": ["#e3974e", "#eea941", "#e7c557"],
      "Michelle Davis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Billy Davis",
        votes: 457,
        share: 57.34002509410288,
      },
      {
        candidate: "Michelle Davis",
        votes: 340,
        share: 42.65997490589712,
      },
    ],
  },
  lincoln_county_board_of_education_district_02_rep: {
    title: "Lincoln County Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/lincoln_county_board_of_education_district_02_rep.geojson",
    bounds: [
      [-81.53759899160796, 35.40007799983661],
      [-80.93973399124314, 35.56813700001765],
    ],
    participatingCounties: ["LINCOLN"],
    focusMaskData: "map_data/lincoln_county_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Jennifer S. Raimey": ["#e3974e", "#eea941", "#e7c557"],
      "Kirk Herbertson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jennifer S. Raimey",
        votes: 6054,
        share: 69.48238264661998,
      },
      {
        candidate: "Kirk Herbertson",
        votes: 2659,
        share: 30.517617353380004,
      },
    ],
  },
  macon_county_board_of_commissioners_district_01_rep: {
    title: "Macon County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/macon_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-83.73812899165753, 34.993301000411535],
      [-83.10839699102259, 35.33099300012788],
    ],
    participatingCounties: ["MACON"],
    focusMaskData: "map_data/macon_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "John Shearl": ["#e3974e", "#eea941", "#e7c557"],
      "Joey Wilson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Don Willis": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "John Shearl",
        votes: 2415,
        share: 38.28471781864299,
      },
      {
        candidate: "Joey Wilson",
        votes: 1964,
        share: 31.135066582117943,
      },
      {
        candidate: "Don Willis",
        votes: 1929,
        share: 30.580215599239065,
      },
    ],
  },
  mcdowell_county_board_of_education_marion_district_rep: {
    title: "Mcdowell County Board Of Education Marion District",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/mcdowell_county_board_of_education_marion_district_rep.geojson",
    bounds: [
      [-82.29501499128583, 35.518002000419415],
      [-81.8241219914254, 35.960050000143475],
    ],
    participatingCounties: ["MCDOWELL"],
    focusMaskData: "map_data/mcdowell_county_board_of_education_marion_district_rep_focus_mask.geojson",
    candidates: {
      "Marvin F. Greer": ["#e3974e", "#eea941", "#e7c557"],
      "Angela Allen-Helms": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Marvin F. Greer",
        votes: 2615,
        share: 51.01443620756926,
      },
      {
        candidate: "Angela Allen-Helms",
        votes: 2511,
        share: 48.985563792430746,
      },
    ],
  },
  mecklenburg_county_board_of_commissioners_district_01_dem: {
    title: "Mecklenburg County Board Of Commissioners District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/mecklenburg_county_board_of_commissioners_district_01_dem.geojson",
    bounds: [
      [-81.00385399103814, 35.29792900011692],
      [-80.73275699118327, 35.51478499984877],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/mecklenburg_county_board_of_commissioners_district_01_dem_focus_mask.geojson",
    candidates: {
      "Morris (Mac) McAdoo": ["#e3974e", "#eea941", "#e7c557"],
      "Jessica Finkel": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Adam Pasiak": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Morris (Mac) McAdoo",
        votes: 8568,
        share: 49.38613176551962,
      },
      {
        candidate: "Jessica Finkel",
        votes: 5661,
        share: 32.630122773646896,
      },
      {
        candidate: "Adam Pasiak",
        votes: 3120,
        share: 17.98374546083348,
      },
    ],
  },
  mecklenburg_county_board_of_commissioners_district_02_dem: {
    title: "Mecklenburg County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/mecklenburg_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-81.0520289909816, 35.09151100007816],
      [-80.82918799074356, 35.33384400046307],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/mecklenburg_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Monifa (Mo) Drayton": ["#e3974e", "#eea941", "#e7c557"],
      "Vilma D. Leake": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Monifa (Mo) Drayton",
        votes: 8261,
        share: 51.93637621023514,
      },
      {
        candidate: "Vilma D. Leake",
        votes: 7645,
        share: 48.06362378976487,
      },
    ],
  },
  mecklenburg_county_board_of_commissioners_district_03_dem: {
    title: "Mecklenburg County Board Of Commissioners District 3",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/mecklenburg_county_board_of_commissioners_district_03_dem.geojson",
    bounds: [
      [-80.8555999912272, 35.220625000108065],
      [-80.66609499113441, 35.37193100055378],
    ],
    participatingCounties: ["MECKLENBURG"],
    focusMaskData: "map_data/mecklenburg_county_board_of_commissioners_district_03_dem_focus_mask.geojson",
    candidates: {
      "George Dunlap": ["#e3974e", "#eea941", "#e7c557"],
      "Phil Carey": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "George Dunlap",
        votes: 14603,
        share: 80.87168411142494,
      },
      {
        candidate: "Phil Carey",
        votes: 3454,
        share: 19.128315888575067,
      },
    ],
  },
  moore_county_board_of_commissioners_district_iii_rep: {
    title: "Moore County Board Of Commissioners District Iii",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/moore_county_board_of_commissioners_district_iii_rep.geojson",
    bounds: [
      [-79.76795699112654, 35.043028000333756],
      [-79.09580799147994, 35.518001999711664],
    ],
    participatingCounties: ["MOORE"],
    focusMaskData: "map_data/moore_county_board_of_commissioners_district_iii_rep_focus_mask.geojson",
    candidates: {
      "Cameron Dockery": ["#e3974e", "#eea941", "#e7c557"],
      "Curtis Self": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Cameron Dockery",
        votes: 6161,
        share: 56.22889477046636,
      },
      {
        candidate: "Curtis Self",
        votes: 4796,
        share: 43.77110522953363,
      },
    ],
  },
  nash_county_board_of_commissioners_district_02_dem: {
    title: "Nash County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/nash_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-77.876948991693, 35.908809999555295],
      [-77.73299799111452, 36.07900800010494],
    ],
    participatingCounties: ["NASH"],
    focusMaskData: "map_data/nash_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Quentin T. Sumner": ["#e3974e", "#eea941", "#e7c557"],
      "Deborah Joyner Battle": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Robert E. Cordell": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Quentin T. Sumner",
        votes: 672,
        share: 52.37724084177708,
      },
      {
        candidate: "Deborah Joyner Battle",
        votes: 513,
        share: 39.98441153546376,
      },
      {
        candidate: "Robert E. Cordell",
        votes: 98,
        share: 7.638347622759158,
      },
    ],
  },
  nash_county_board_of_commissioners_district_05_rep: {
    title: "Nash County Board Of Commissioners District 5",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/nash_county_board_of_commissioners_district_05_rep.geojson",
    bounds: [
      [-78.1316289912423, 35.787919999545366],
      [-77.80905999170123, 35.99001799983881],
    ],
    participatingCounties: ["NASH"],
    focusMaskData: "map_data/nash_county_board_of_commissioners_district_05_rep_focus_mask.geojson",
    candidates: {
      "DeLeon Parker": ["#e3974e", "#eea941", "#e7c557"],
      "Kent Smith": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "DeLeon Parker",
        votes: 857,
        share: 61.039886039886035,
      },
      {
        candidate: "Kent Smith",
        votes: 547,
        share: 38.960113960113965,
      },
    ],
  },
  nash_county_board_of_commissioners_district_07_rep: {
    title: "Nash County Board Of Commissioners District 7",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/nash_county_board_of_commissioners_district_07_rep.geojson",
    bounds: [
      [-77.9557759910972, 35.88364199993007],
      [-77.73299799111452, 36.09483800023366],
    ],
    participatingCounties: ["NASH"],
    focusMaskData: "map_data/nash_county_board_of_commissioners_district_07_rep_focus_mask.geojson",
    candidates: {
      "Jerry Barnes": ["#e3974e", "#eea941", "#e7c557"],
      "Robbie B. Davis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jerry Barnes",
        votes: 881,
        share: 60.88458880442295,
      },
      {
        candidate: "Robbie B. Davis",
        votes: 566,
        share: 39.11541119557705,
      },
    ],
  },
  northampton_county_board_of_commissioners_district_04_dem: {
    title: "Northampton County Board Of Commissioners District 4",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/northampton_county_board_of_commissioners_district_04_dem.geojson",
    bounds: [
      [-77.89977299129833, 36.16490599953421],
      [-77.06621499095021, 36.54727999952621],
    ],
    participatingCounties: ["NORTHAMPTON"],
    focusMaskData: "map_data/northampton_county_board_of_commissioners_district_04_dem_focus_mask.geojson",
    candidates: {
      "Melvetta Broadnax Taylor": ["#e3974e", "#eea941", "#e7c557"],
      "Lemuel Ricks": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Melvetta Broadnax Taylor",
        votes: 1987,
        share: 57.594202898550726,
      },
      {
        candidate: "Lemuel Ricks",
        votes: 1463,
        share: 42.40579710144928,
      },
    ],
  },
  northampton_county_board_of_commissioners_district_05_dem: {
    title: "Northampton County Board Of Commissioners District 5",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/northampton_county_board_of_commissioners_district_05_dem.geojson",
    bounds: [
      [-77.89977299129833, 36.16490599953421],
      [-77.06621499095021, 36.54727999952621],
    ],
    participatingCounties: ["NORTHAMPTON"],
    focusMaskData: "map_data/northampton_county_board_of_commissioners_district_05_dem_focus_mask.geojson",
    candidates: {
      "Kelvin Edwards": ["#e3974e", "#eea941", "#e7c557"],
      "Clinton McCray Williams": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Wallace Ransom": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Kelvin Edwards",
        votes: 1781,
        share: 53.05332141793267,
      },
      {
        candidate: "Clinton McCray Williams",
        votes: 1168,
        share: 34.79296991361335,
      },
      {
        candidate: "Wallace Ransom",
        votes: 408,
        share: 12.153708668453977,
      },
    ],
  },
  orange_county_board_of_commissioners_district_01_dem: {
    title: "Orange County Board Of Commissioners District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/orange_county_board_of_commissioners_district_01_dem.geojson",
    bounds: [
      [-79.14857899114402, 35.86078000005575],
      [-79.0007369908867, 35.98661999991525],
    ],
    participatingCounties: ["ORANGE"],
    focusMaskData: "map_data/orange_county_board_of_commissioners_district_01_dem_focus_mask.geojson",
    candidates: {
      "Jamezetta Bedford": ["#e3974e", "#eea941", "#e7c557"],
      "Maria T. Palmer": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jamezetta Bedford",
        votes: 9055,
        share: 57.09691657733779,
      },
      {
        candidate: "Maria T. Palmer",
        votes: 6804,
        share: 42.903083422662206,
      },
    ],
  },
  orange_county_board_of_commissioners_district_02_dem: {
    title: "Orange County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/orange_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-79.26843399108934, 35.86689799983261],
      [-78.95059699070418, 36.243444999723174],
    ],
    participatingCounties: ["ORANGE"],
    focusMaskData: "map_data/orange_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Beth Bronson": ["#e3974e", "#eea941", "#e7c557"],
      "Earl McKee": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Beth Bronson",
        votes: 5483,
        share: 50.114249154556255,
      },
      {
        candidate: "Earl McKee",
        votes: 5458,
        share: 49.885750845443745,
      },
    ],
  },
  pamlico_county_board_of_education_district_04_dem: {
    title: "Pamlico County Board Of Education District 4",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/pamlico_county_board_of_education_district_04_dem.geojson",
    bounds: [
      [-76.81915299069597, 35.04614800003332],
      [-76.30413599071146, 35.36185700005215],
    ],
    participatingCounties: ["PAMLICO"],
    focusMaskData: "map_data/pamlico_county_board_of_education_district_04_dem_focus_mask.geojson",
    candidates: {
      "Myra Stokes Carter": ["#e3974e", "#eea941", "#e7c557"],
      "Carinna A. Smith": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Myra Stokes Carter",
        votes: 135,
        share: 82.3170731707317,
      },
      {
        candidate: "Carinna A. Smith",
        votes: 29,
        share: 17.682926829268293,
      },
    ],
  },
  pender_county_board_of_commissioners_district_01_rep: {
    title: "Pender County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/pender_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.48453799160289, 34.73263000020122],
    ],
    participatingCounties: ["PENDER"],
    focusMaskData: "map_data/pender_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Shayne Frey": ["#e3974e", "#eea941", "#e7c557"],
      "Joe Cina": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Shayne Frey",
        votes: 4500,
        share: 73.51739911779121,
      },
      {
        candidate: "Joe Cina",
        votes: 1621,
        share: 26.48260088220879,
      },
    ],
  },
  pender_county_board_of_commissioners_district_02_rep: {
    title: "Pender County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/pender_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.48453799160289, 34.73263000020122],
    ],
    participatingCounties: ["PENDER"],
    focusMaskData: "map_data/pender_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "Ryan Collins": ["#e3974e", "#eea941", "#e7c557"],
      "Randy Burton": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Ryan Collins",
        votes: 4021,
        share: 62.78888194878201,
      },
      {
        candidate: "Randy Burton",
        votes: 2383,
        share: 37.21111805121799,
      },
    ],
  },
  pender_county_board_of_commissioners_district_03_rep: {
    title: "Pender County Board Of Commissioners District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/pender_county_board_of_commissioners_district_03_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.48453799160289, 34.73263000020122],
    ],
    participatingCounties: ["PENDER"],
    focusMaskData: "map_data/pender_county_board_of_commissioners_district_03_rep_focus_mask.geojson",
    candidates: {
      "Andy Jessie DeVane": ["#e3974e", "#eea941", "#e7c557"],
      "David Fallin": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Andy Jessie DeVane",
        votes: 3384,
        share: 53.84248210023866,
      },
      {
        candidate: "David Fallin",
        votes: 2901,
        share: 46.15751789976134,
      },
    ],
  },
  pender_county_board_of_commissioners_district_04_unexpired_rep: {
    title: "Pender County Board Of Commissioners District 4 (Unexpired)",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/pender_county_board_of_commissioners_district_04_unexpired_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.48453799160289, 34.73263000020122],
    ],
    participatingCounties: ["PENDER"],
    focusMaskData: "map_data/pender_county_board_of_commissioners_district_04_unexpired_rep_focus_mask.geojson",
    candidates: {
      "Jimmy T. Tate": ["#e3974e", "#eea941", "#e7c557"],
      "Max Southworth-Beckwith": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jimmy T. Tate",
        votes: 4173,
        share: 64.21975992613112,
      },
      {
        candidate: "Max Southworth-Beckwith",
        votes: 2325,
        share: 35.78024007386888,
      },
    ],
  },
  pender_county_board_of_education_district_01_rep: {
    title: "Pender County Board Of Education District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/pender_county_board_of_education_district_01_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.48453799160289, 34.73263000020122],
    ],
    participatingCounties: ["PENDER"],
    focusMaskData: "map_data/pender_county_board_of_education_district_01_rep_focus_mask.geojson",
    candidates: {
      "Jennifer R. Hansen": ["#e3974e", "#eea941", "#e7c557"],
      "Sam Guidry": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jennifer R. Hansen",
        votes: 3843,
        share: 61.488,
      },
      {
        candidate: "Sam Guidry",
        votes: 2407,
        share: 38.512,
      },
    ],
  },
  pender_county_board_of_education_district_02_rep: {
    title: "Pender County Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/pender_county_board_of_education_district_02_rep.geojson",
    bounds: [
      [-78.27253599084969, 34.253130000025344],
      [-77.48453799160289, 34.73263000020122],
    ],
    participatingCounties: ["PENDER"],
    focusMaskData: "map_data/pender_county_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Jason K. Jordan": ["#e3974e", "#eea941", "#e7c557"],
      "Kim McGahey": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jason K. Jordan",
        votes: 3417,
        share: 55.49780737372097,
      },
      {
        candidate: "Kim McGahey",
        votes: 2740,
        share: 44.50219262627903,
      },
    ],
  },
  pitt_county_board_of_commissioners_district_01_dem: {
    title: "Pitt County Board Of Commissioners District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/pitt_county_board_of_commissioners_district_01_dem.geojson",
    bounds: [
      [-77.46181599162675, 35.54438699965194],
      [-77.37910099087685, 35.62315799985014],
    ],
    participatingCounties: ["PITT"],
    focusMaskData: "map_data/pitt_county_board_of_commissioners_district_01_dem_focus_mask.geojson",
    candidates: {
      "Ann Floyd Huggins": ["#e3974e", "#eea941", "#e7c557"],
      "Marvion J. Wilcox": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Ann Floyd Huggins",
        votes: 1827,
        share: 73.6990722065349,
      },
      {
        candidate: "Marvion J. Wilcox",
        votes: 652,
        share: 26.300927793465107,
      },
    ],
  },
  pitt_county_board_of_commissioners_district_02_dem: {
    title: "Pitt County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/pitt_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-77.5571069914862, 35.51696999976566],
      [-77.08464399117572, 35.833062000026246],
    ],
    participatingCounties: ["PITT"],
    focusMaskData: "map_data/pitt_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Mary Perkins-Williams": ["#e3974e", "#eea941", "#e7c557"],
      "Clemmie Jenkins German": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mary Perkins-Williams",
        votes: 1062,
        share: 54.91209927611168,
      },
      {
        candidate: "Clemmie Jenkins German",
        votes: 872,
        share: 45.08790072388831,
      },
    ],
  },
  pitt_county_board_of_commissioners_district_06_rep: {
    title: "Pitt County Board Of Commissioners District 6",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/pitt_county_board_of_commissioners_district_06_rep.geojson",
    bounds: [
      [-77.47126699159679, 35.32739400027361],
      [-77.09962499111522, 35.609093000135736],
    ],
    participatingCounties: ["PITT"],
    focusMaskData: "map_data/pitt_county_board_of_commissioners_district_06_rep_focus_mask.geojson",
    candidates: {
      "Gary Weaver": ["#e3974e", "#eea941", "#e7c557"],
      "Ralph Whitehurst": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Richard C. Zeck": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Gary Weaver",
        votes: 739,
        share: 44.625603864734295,
      },
      {
        candidate: "Ralph Whitehurst",
        votes: 593,
        share: 35.809178743961354,
      },
      {
        candidate: "Richard C. Zeck",
        votes: 324,
        share: 19.565217391304348,
      },
    ],
  },
  randolph_county_board_of_commissioners_district_03_rep: {
    title: "Randolph County Board Of Commissioners District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/randolph_county_board_of_commissioners_district_03_rep.geojson",
    bounds: [
      [-80.06684199067605, 35.50566100040377],
      [-79.54172799087787, 35.920692999726334],
    ],
    participatingCounties: ["RANDOLPH"],
    focusMaskData: "map_data/randolph_county_board_of_commissioners_district_03_rep_focus_mask.geojson",
    candidates: {
      "David L. Allen": ["#e3974e", "#eea941", "#e7c557"],
      "Carrie Guess-Slatosky": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "David L. Allen",
        votes: 7647,
        share: 53.78015331598566,
      },
      {
        candidate: "Carrie Guess-Slatosky",
        votes: 6572,
        share: 46.21984668401435,
      },
    ],
  },
  robeson_county_board_of_commissioners_district_02_dem: {
    title: "Robeson County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-79.46150599120541, 34.29934199995195],
      [-78.93598099153301, 34.790902000081054],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Melvin Ellison": ["#e3974e", "#eea941", "#e7c557"],
      "Pauline H. Campbell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Melvin Ellison",
        votes: 872,
        share: 53.827160493827165,
      },
      {
        candidate: "Pauline H. Campbell",
        votes: 748,
        share: 46.17283950617284,
      },
    ],
  },
  robeson_county_board_of_commissioners_district_04_rep: {
    title: "Robeson County Board Of Commissioners District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_commissioners_district_04_rep.geojson",
    bounds: [
      [-79.46150599120541, 34.59624299959056],
      [-79.11376299081063, 34.853006999828494],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_commissioners_district_04_rep_focus_mask.geojson",
    candidates: {
      "Faline Locklear Dial": ["#e3974e", "#eea941", "#e7c557"],
      "Scott Bell": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Faline Locklear Dial",
        votes: 234,
        share: 74.76038338658148,
      },
      {
        candidate: "Scott Bell",
        votes: 79,
        share: 25.23961661341853,
      },
    ],
  },
  robeson_county_board_of_commissioners_district_08_dem: {
    title: "Robeson County Board Of Commissioners District 8",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_commissioners_district_08_dem.geojson",
    bounds: [
      [-79.13075999173331, 34.641967999553565],
      [-78.85441699079817, 34.95271500015154],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_commissioners_district_08_dem_focus_mask.geojson",
    candidates: {
      "Mike Ferguson": ["#e3974e", "#eea941", "#e7c557"],
      "Michael Seago": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Mike Ferguson",
        votes: 397,
        share: 66.49916247906198,
      },
      {
        candidate: "Michael Seago",
        votes: 200,
        share: 33.50083752093803,
      },
    ],
  },
  robeson_county_board_of_commissioners_district_08_rep: {
    title: "Robeson County Board Of Commissioners District 8",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_commissioners_district_08_rep.geojson",
    bounds: [
      [-79.13075999173331, 34.641967999553565],
      [-78.85441699079817, 34.95271500015154],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_commissioners_district_08_rep_focus_mask.geojson",
    candidates: {
      "Lance Herndon": ["#e3974e", "#eea941", "#e7c557"],
      "Harold Smith": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lance Herndon",
        votes: 241,
        share: 51.716738197424895,
      },
      {
        candidate: "Harold Smith",
        votes: 225,
        share: 48.283261802575105,
      },
    ],
  },
  robeson_county_board_of_education_district_02: {
    title: "Robeson County Board Of Education District 2",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_education_district_02.geojson",
    bounds: [
      [-79.46150599120541, 34.29934199995195],
      [-78.9598869914589, 34.790902000081054],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_education_district_02_focus_mask.geojson",
    candidates: {
      "Melissa Davis Ocean": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Melissa Davis Ocean",
        votes: 1448,
        share: 96.72678690714764,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 49,
        share: 3.2732130928523713,
      },
    ],
  },
  robeson_county_board_of_education_district_03: {
    title: "Robeson County Board Of Education District 3",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_education_district_03.geojson",
    bounds: [
      [-79.36601799116504, 34.40366699958764],
      [-78.85441699079817, 34.93091899967771],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_education_district_03_focus_mask.geojson",
    candidates: {
      "Linda O. Emanuel": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Linda O. Emanuel",
        votes: 424,
        share: 96.58314350797266,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 15,
        share: 3.416856492027335,
      },
    ],
  },
  robeson_county_board_of_education_district_06: {
    title: "Robeson County Board Of Education District 6",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_education_district_06.geojson",
    bounds: [
      [-79.23168799150234, 34.578053999711805],
      [-78.86865999090946, 34.95271500015154],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_education_district_06_focus_mask.geojson",
    candidates: {
      "Crystal Monroe": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Crystal Monroe",
        votes: 794,
        share: 95.54753309265944,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 37,
        share: 4.452466907340553,
      },
    ],
  },
  robeson_county_board_of_education_district_08: {
    title: "Robeson County Board Of Education District 8",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/robeson_county_board_of_education_district_08.geojson",
    bounds: [
      [-79.19202099159442, 34.40366699958764],
      [-78.80543099096033, 34.95271500015154],
    ],
    participatingCounties: ["ROBESON"],
    focusMaskData: "map_data/robeson_county_board_of_education_district_08_focus_mask.geojson",
    candidates: {
      "Tre' Britt": ["#e3974e", "#eea941", "#e7c557"],
      "Write-In (Miscellaneous)": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Tre' Britt",
        votes: 992,
        share: 96.12403100775194,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 40,
        share: 3.875968992248062,
      },
    ],
  },
  rutherford_county_board_of_commissioners_district_01_rep: {
    title: "Rutherford County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/rutherford_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Allen Hardin": ["#e3974e", "#eea941", "#e7c557"],
      "Clark Poole": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Jim Owens": ["#af89be", "#b29fde", "#b8b0cb"],
      "Brian Thompson": ["#3278ad", "#72a9cf", "#b7d4e8"],
      "Anthony R. Morrow": ["#c84f4a", "#df7f7b", "#edb3b0"],
    },
    results: [
      {
        candidate: "Allen Hardin",
        votes: 3000,
        share: 35.27751646284102,
      },
      {
        candidate: "Clark Poole",
        votes: 2113,
        share: 24.847130761994354,
      },
      {
        candidate: "Jim Owens",
        votes: 1240,
        share: 14.581373471307622,
      },
      {
        candidate: "Brian Thompson",
        votes: 1218,
        share: 14.322671683913452,
      },
      {
        candidate: "Anthony R. Morrow",
        votes: 933,
        share: 10.971307619943556,
      },
    ],
  },
  rutherford_county_board_of_commissioners_district_04_rep: {
    title: "Rutherford County Board Of Commissioners District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/rutherford_county_board_of_commissioners_district_04_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_board_of_commissioners_district_04_rep_focus_mask.geojson",
    candidates: {
      "Adam Yelton": ["#e3974e", "#eea941", "#e7c557"],
      "Jason Toney": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Adam Yelton",
        votes: 5331,
        share: 61.70853107998611,
      },
      {
        candidate: "Jason Toney",
        votes: 3308,
        share: 38.29146892001389,
      },
    ],
  },
  rutherford_county_board_of_commissioners_district_05_rep: {
    title: "Rutherford County Board Of Commissioners District 5",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/rutherford_county_board_of_commissioners_district_05_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_board_of_commissioners_district_05_rep_focus_mask.geojson",
    candidates: {
      "Scott J. Haynes": ["#e3974e", "#eea941", "#e7c557"],
      "Lazarus (Laz) Margolin": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Chris St. Clair": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Scott J. Haynes",
        votes: 4830,
        share: 56.0389836407936,
      },
      {
        candidate: "Lazarus (Laz) Margolin",
        votes: 2015,
        share: 23.378582202111613,
      },
      {
        candidate: "Chris St. Clair",
        votes: 1774,
        share: 20.582434157094788,
      },
    ],
  },
  rutherford_county_board_of_education_district_01_dem: {
    title: "Rutherford County Board Of Education District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/rutherford_county_board_of_education_district_01_dem.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_board_of_education_district_01_dem_focus_mask.geojson",
    candidates: {
      "Erica Carson Davenport": ["#e3974e", "#eea941", "#e7c557"],
      "Douglas Morales": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Erica Carson Davenport",
        votes: 1624,
        share: 82.3947234906139,
      },
      {
        candidate: "Douglas Morales",
        votes: 347,
        share: 17.605276509386098,
      },
    ],
  },
  rutherford_county_board_of_education_district_01_rep: {
    title: "Rutherford County Board Of Education District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/rutherford_county_board_of_education_district_01_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_board_of_education_district_01_rep_focus_mask.geojson",
    candidates: {
      "Joshua Millwood": ["#e3974e", "#eea941", "#e7c557"],
      "Brandi Edney Nanney": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Joshua Millwood",
        votes: 5151,
        share: 61.00911998104939,
      },
      {
        candidate: "Brandi Edney Nanney",
        votes: 3292,
        share: 38.990880018950605,
      },
    ],
  },
  rutherford_county_board_of_education_district_02_rep: {
    title: "Rutherford County Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/rutherford_county_board_of_education_district_02_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Kala Suttle": ["#e3974e", "#eea941", "#e7c557"],
      "Baylee Short": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kala Suttle",
        votes: 4939,
        share: 60.616102110947466,
      },
      {
        candidate: "Baylee Short",
        votes: 3209,
        share: 39.38389788905253,
      },
    ],
  },
  rutherford_county_board_of_education_district_03_rep: {
    title: "Rutherford County Board Of Education District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/rutherford_county_board_of_education_district_03_rep.geojson",
    bounds: [
      [-82.28050299119256, 35.18061100007776],
      [-81.69198899066494, 35.613588000034696],
    ],
    participatingCounties: ["RUTHERFORD"],
    focusMaskData: "map_data/rutherford_county_board_of_education_district_03_rep_focus_mask.geojson",
    candidates: {
      "April Mayse": ["#e3974e", "#eea941", "#e7c557"],
      "Tonja Caldwell Pratt": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "April Mayse",
        votes: 6293,
        share: 76.68778942237388,
      },
      {
        candidate: "Tonja Caldwell Pratt",
        votes: 1913,
        share: 23.31221057762613,
      },
    ],
  },
  stanly_county_board_of_commissioners_district_01_rep: {
    title: "Stanly County Board Of Commissioners District 1",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/stanly_county_board_of_commissioners_district_01_rep.geojson",
    bounds: [
      [-80.506095990725, 35.14308099936887],
      [-80.05122499175538, 35.504151000015426],
    ],
    participatingCounties: ["STANLY"],
    focusMaskData: "map_data/stanly_county_board_of_commissioners_district_01_rep_focus_mask.geojson",
    candidates: {
      "Lane Furr": ["#e3974e", "#eea941", "#e7c557"],
      "Mike Barbee": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lane Furr",
        votes: 3177,
        share: 68.45507433742728,
      },
      {
        candidate: "Mike Barbee",
        votes: 1464,
        share: 31.54492566257272,
      },
    ],
  },
  stanly_county_board_of_commissioners_district_02_rep: {
    title: "Stanly County Board Of Commissioners District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/stanly_county_board_of_commissioners_district_02_rep.geojson",
    bounds: [
      [-80.506095990725, 35.14308099936887],
      [-80.05122499175538, 35.504151000015426],
    ],
    participatingCounties: ["STANLY"],
    focusMaskData: "map_data/stanly_county_board_of_commissioners_district_02_rep_focus_mask.geojson",
    candidates: {
      "Shaun Morgan": ["#e3974e", "#eea941", "#e7c557"],
      "Bill Sorenson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Shaun Morgan",
        votes: 3048,
        share: 65.98830915782638,
      },
      {
        candidate: "Bill Sorenson",
        votes: 1571,
        share: 34.01169084217363,
      },
    ],
  },
  stanly_county_board_of_commissioners_district_04_rep: {
    title: "Stanly County Board Of Commissioners District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/stanly_county_board_of_commissioners_district_04_rep.geojson",
    bounds: [
      [-80.506095990725, 35.14308099936887],
      [-80.05122499175538, 35.504151000015426],
    ],
    participatingCounties: ["STANLY"],
    focusMaskData: "map_data/stanly_county_board_of_commissioners_district_04_rep_focus_mask.geojson",
    candidates: {
      "Trent Hatley": ["#e3974e", "#eea941", "#e7c557"],
      "James Cagle": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Trent Hatley",
        votes: 3572,
        share: 77.16569453445669,
      },
      {
        candidate: "James Cagle",
        votes: 1057,
        share: 22.834305465543313,
      },
    ],
  },
  surry_county_board_of_commissioners_central_district_rep: {
    title: "Surry County Board Of Commissioners Central District",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/surry_county_board_of_commissioners_central_district_rep.geojson",
    bounds: [
      [-80.97364299148163, 36.23630500027055],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY"],
    focusMaskData: "map_data/surry_county_board_of_commissioners_central_district_rep_focus_mask.geojson",
    candidates: {
      "Brandon K. Whitaker": ["#e3974e", "#eea941", "#e7c557"],
      "T.J. Bledsoe": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Ricky Thomas": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Brandon K. Whitaker",
        votes: 4666,
        share: 41.735241502683365,
      },
      {
        candidate: "T.J. Bledsoe",
        votes: 3928,
        share: 35.13416815742397,
      },
      {
        candidate: "Ricky Thomas",
        votes: 2586,
        share: 23.130590339892663,
      },
    ],
  },
  surry_county_board_of_commissioners_mount_airy_district_rep: {
    title: "Surry County Board Of Commissioners Mount Airy District",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/surry_county_board_of_commissioners_mount_airy_district_rep.geojson",
    bounds: [
      [-80.97364299148163, 36.23630500027055],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY"],
    focusMaskData: "map_data/surry_county_board_of_commissioners_mount_airy_district_rep_focus_mask.geojson",
    candidates: {
      "Frank Fleming": ["#e3974e", "#eea941", "#e7c557"],
      "Steve Yokeley": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Frank Fleming",
        votes: 8046,
        share: 70.77139590113465,
      },
      {
        candidate: "Steve Yokeley",
        votes: 3323,
        share: 29.228604098865336,
      },
    ],
  },
  surry_county_schools_board_of_education_district_02_rep: {
    title: "Surry County Schools Board Of Education District 2",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/surry_county_schools_board_of_education_district_02_rep.geojson",
    bounds: [
      [-80.97364299148163, 36.24165099999027],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY"],
    focusMaskData: "map_data/surry_county_schools_board_of_education_district_02_rep_focus_mask.geojson",
    candidates: {
      "Jill Inman": ["#e3974e", "#eea941", "#e7c557"],
      "Tony L. Hutchens": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jill Inman",
        votes: 5381,
        share: 60.59684684684685,
      },
      {
        candidate: "Tony L. Hutchens",
        votes: 3499,
        share: 39.40315315315315,
      },
    ],
  },
  surry_county_schools_board_of_education_district_03_rep: {
    title: "Surry County Schools Board Of Education District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/surry_county_schools_board_of_education_district_03_rep.geojson",
    bounds: [
      [-80.97364299148163, 36.24165099999027],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY"],
    focusMaskData: "map_data/surry_county_schools_board_of_education_district_03_rep_focus_mask.geojson",
    candidates: {
      "Kent Whitaker": ["#e3974e", "#eea941", "#e7c557"],
      "Jessica Inman George": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kent Whitaker",
        votes: 5573,
        share: 62.70252025202521,
      },
      {
        candidate: "Jessica Inman George",
        votes: 3315,
        share: 37.2974797479748,
      },
    ],
  },
  surry_county_schools_board_of_education_district_04_rep: {
    title: "Surry County Schools Board Of Education District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/surry_county_schools_board_of_education_district_04_rep.geojson",
    bounds: [
      [-80.97364299148163, 36.24165099999027],
      [-80.44033999145975, 36.56234900042459],
    ],
    participatingCounties: ["SURRY"],
    focusMaskData: "map_data/surry_county_schools_board_of_education_district_04_rep_focus_mask.geojson",
    candidates: {
      "Jade McCormick Kiger": ["#e3974e", "#eea941", "#e7c557"],
      "Charles McBride": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Jade McCormick Kiger",
        votes: 4896,
        share: 55.66166439290586,
      },
      {
        candidate: "Charles McBride",
        votes: 3900,
        share: 44.33833560709413,
      },
    ],
  },
  union_county_board_of_education_district_03_rep: {
    title: "Union County Board Of Education District 3",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/union_county_board_of_education_district_03_rep.geojson",
    bounds: [
      [-80.68744499178216, 34.886763000467],
      [-80.39084499082355, 35.12487000006006],
    ],
    participatingCounties: ["UNION"],
    focusMaskData: "map_data/union_county_board_of_education_district_03_rep_focus_mask.geojson",
    candidates: {
      "Barry Tucker": ["#e3974e", "#eea941", "#e7c557"],
      "Terri Blumer": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Barry Tucker",
        votes: 1676,
        share: 53.8560411311054,
      },
      {
        candidate: "Terri Blumer",
        votes: 1436,
        share: 46.1439588688946,
      },
    ],
  },
  union_county_board_of_education_district_04_dem: {
    title: "Union County Board Of Education District 4",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/union_county_board_of_education_district_04_dem.geojson",
    bounds: [
      [-80.68139799103264, 34.980881999740475],
      [-80.27682899107616, 35.20841200048002],
    ],
    participatingCounties: ["UNION"],
    focusMaskData: "map_data/union_county_board_of_education_district_04_dem_focus_mask.geojson",
    candidates: {
      "Brittany Cabuno": ["#e3974e", "#eea941", "#e7c557"],
      "Derrick Lewis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Brittany Cabuno",
        votes: 1183,
        share: 71.09375,
      },
      {
        candidate: "Derrick Lewis",
        votes: 481,
        share: 28.90625,
      },
    ],
  },
  vance_county_board_of_commissioners_district_04_rep: {
    title: "Vance County Board Of Commissioners District 4",
    subtitle: "Republican Primary",
    scope: "local_district",
    data: "map_data/vance_county_board_of_commissioners_district_04_rep.geojson",
    bounds: [
      [-78.51045299118493, 36.163637000336024],
      [-78.27716499084627, 36.384725000136605],
    ],
    participatingCounties: ["VANCE"],
    focusMaskData: "map_data/vance_county_board_of_commissioners_district_04_rep_focus_mask.geojson",
    candidates: {
      "Kelley Wade Perdue": ["#e3974e", "#eea941", "#e7c557"],
      "Dan Brummitt": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Kelley Wade Perdue",
        votes: 189,
        share: 54.6242774566474,
      },
      {
        candidate: "Dan Brummitt",
        votes: 157,
        share: 45.3757225433526,
      },
    ],
  },
  vance_county_board_of_education_district_01_dem: {
    title: "Vance County Board Of Education District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/vance_county_board_of_education_district_01_dem.geojson",
    bounds: [
      [-78.51122399103541, 36.2304919997253],
      [-78.2874399911981, 36.543822000227344],
    ],
    participatingCounties: ["VANCE"],
    focusMaskData: "map_data/vance_county_board_of_education_district_01_dem_focus_mask.geojson",
    candidates: {
      "Gloria Jefferson White": ["#e3974e", "#eea941", "#e7c557"],
      "Cassandra Evans": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Gloria Jefferson White",
        votes: 432,
        share: 54.68354430379747,
      },
      {
        candidate: "Cassandra Evans",
        votes: 358,
        share: 45.31645569620253,
      },
    ],
  },
  vance_county_board_of_education_district_02_dem: {
    title: "Vance County Board Of Education District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/vance_county_board_of_education_district_02_dem.geojson",
    bounds: [
      [-78.51122399103541, 36.23444799992058],
      [-78.27716499084627, 36.543822000227344],
    ],
    participatingCounties: ["VANCE"],
    focusMaskData: "map_data/vance_county_board_of_education_district_02_dem_focus_mask.geojson",
    candidates: {
      "Randy Oxendine": ["#e3974e", "#eea941", "#e7c557"],
      "William Earl Purvis": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Randy Oxendine",
        votes: 451,
        share: 69.38461538461539,
      },
      {
        candidate: "William Earl Purvis",
        votes: 199,
        share: 30.615384615384617,
      },
    ],
  },
  vance_county_board_of_education_district_07_dem: {
    title: "Vance County Board Of Education District 7",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/vance_county_board_of_education_district_07_dem.geojson",
    bounds: [
      [-78.51045299118493, 36.2304919997253],
      [-78.36932999133747, 36.384725000136605],
    ],
    participatingCounties: ["VANCE"],
    focusMaskData: "map_data/vance_county_board_of_education_district_07_dem_focus_mask.geojson",
    candidates: {
      "Angela Cooper Lyons": ["#e3974e", "#eea941", "#e7c557"],
      "Ruth McCune Hartness": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Blakely Lee Bates": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Angela Cooper Lyons",
        votes: 495,
        share: 52.99785867237687,
      },
      {
        candidate: "Ruth McCune Hartness",
        votes: 326,
        share: 34.90364025695932,
      },
      {
        candidate: "Blakely Lee Bates",
        votes: 113,
        share: 12.098501070663811,
      },
    ],
  },
  warren_county_board_of_commissioners_district_02_dem: {
    title: "Warren County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/warren_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-78.32399099089142, 36.20263299981612],
      [-77.89952299089815, 36.54459599997114],
    ],
    participatingCounties: ["WARREN"],
    focusMaskData: "map_data/warren_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "R. Lorenzo Wilkins": ["#e3974e", "#eea941", "#e7c557"],
      "Douglass Gross": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "R. Lorenzo Wilkins",
        votes: 2520,
        share: 88.54532677442025,
      },
      {
        candidate: "Douglass Gross",
        votes: 326,
        share: 11.454673225579764,
      },
    ],
  },
  warren_county_board_of_commissioners_district_03_dem: {
    title: "Warren County Board Of Commissioners District 3",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/warren_county_board_of_commissioners_district_03_dem.geojson",
    bounds: [
      [-78.32399099089142, 36.20263299981612],
      [-77.89952299089815, 36.54459599997114],
    ],
    participatingCounties: ["WARREN"],
    focusMaskData: "map_data/warren_county_board_of_commissioners_district_03_dem_focus_mask.geojson",
    candidates: {
      "Victor Hunt": ["#e3974e", "#eea941", "#e7c557"],
      "Tyrone Simes, Sr.": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Victor Hunt",
        votes: 1753,
        share: 61.122733612273365,
      },
      {
        candidate: "Tyrone Simes, Sr.",
        votes: 1115,
        share: 38.877266387726635,
      },
    ],
  },
  warren_county_board_of_education_district_01: {
    title: "Warren County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/warren_county_board_of_education_district_01.geojson",
    bounds: [
      [-78.32399099089142, 36.20263299981612],
      [-77.89952299089815, 36.54459599997114],
    ],
    participatingCounties: ["WARREN"],
    focusMaskData: "map_data/warren_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Stanley Jones, Jr.": ["#e3974e", "#eea941", "#e7c557"],
      "Victoria Lehman": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Stanley Jones, Jr.",
        votes: 2305,
        share: 65.81953169617361,
      },
      {
        candidate: "Victoria Lehman",
        votes: 1183,
        share: 33.780696744717304,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 14,
        share: 0.3997715591090805,
      },
    ],
  },
  warren_county_board_of_education_district_02: {
    title: "Warren County Board Of Education District 2",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/warren_county_board_of_education_district_02.geojson",
    bounds: [
      [-78.32399099089142, 36.20263299981612],
      [-77.89952299089815, 36.54459599997114],
    ],
    participatingCounties: ["WARREN"],
    focusMaskData: "map_data/warren_county_board_of_education_district_02_focus_mask.geojson",
    candidates: {
      "Ulysses S. Ross": ["#e3974e", "#eea941", "#e7c557"],
      "Laquisha Taylor": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Linda Byrd-Russ": ["#af89be", "#b29fde", "#b8b0cb"],
      "Write-In (Miscellaneous)": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Ulysses S. Ross",
        votes: 1831,
        share: 52.82746682054241,
      },
      {
        candidate: "Laquisha Taylor",
        votes: 1079,
        share: 31.130986728216964,
      },
      {
        candidate: "Linda Byrd-Russ",
        votes: 542,
        share: 15.637622619734564,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 14,
        share: 0.4039238315060588,
      },
    ],
  },
  warren_county_board_of_education_district_04: {
    title: "Warren County Board Of Education District 4",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/warren_county_board_of_education_district_04.geojson",
    bounds: [
      [-78.32399099089142, 36.20263299981612],
      [-77.89952299089815, 36.54459599997114],
    ],
    participatingCounties: ["WARREN"],
    focusMaskData: "map_data/warren_county_board_of_education_district_04_focus_mask.geojson",
    candidates: {
      "Ebony Talley-Brame": ["#e3974e", "#eea941", "#e7c557"],
      "Eushownda Burton": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Write-In (Miscellaneous)": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Ebony Talley-Brame",
        votes: 2094,
        share: 61.861152141802066,
      },
      {
        candidate: "Eushownda Burton",
        votes: 1266,
        share: 37.400295420974885,
      },
      {
        candidate: "Write-In (Miscellaneous)",
        votes: 25,
        share: 0.7385524372230428,
      },
    ],
  },
  washington_county_board_of_education_district_01_dem: {
    title: "Washington County Board Of Education District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/washington_county_board_of_education_district_01_dem.geojson",
    bounds: [
      [-76.84726399097558, 35.69757899943673],
      [-76.35355399113027, 36.02689699966375],
    ],
    participatingCounties: ["WASHINGTON"],
    focusMaskData: "map_data/washington_county_board_of_education_district_01_dem_focus_mask.geojson",
    candidates: {
      "Sherri Blount Gilliam": ["#e3974e", "#eea941", "#e7c557"],
      "Gregory Boston": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Khandus Jackson": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Sherri Blount Gilliam",
        votes: 853,
        share: 54.89060489060489,
      },
      {
        candidate: "Gregory Boston",
        votes: 397,
        share: 25.54697554697555,
      },
      {
        candidate: "Khandus Jackson",
        votes: 304,
        share: 19.56241956241956,
      },
    ],
  },
  washington_county_board_of_education_district_02_dem: {
    title: "Washington County Board Of Education District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/washington_county_board_of_education_district_02_dem.geojson",
    bounds: [
      [-76.84726399097558, 35.69757899943673],
      [-76.35355399113027, 36.02689699966375],
    ],
    participatingCounties: ["WASHINGTON"],
    focusMaskData: "map_data/washington_county_board_of_education_district_02_dem_focus_mask.geojson",
    candidates: {
      "Lois Clark": ["#e3974e", "#eea941", "#e7c557"],
      "Julie Tallerico Simpson": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Lois Clark",
        votes: 892,
        share: 57.14285714285714,
      },
      {
        candidate: "Julie Tallerico Simpson",
        votes: 669,
        share: 42.857142857142854,
      },
    ],
  },
  watauga_county_board_of_commissioners_district_02_dem: {
    title: "Watauga County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/watauga_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-81.72660799114729, 36.16134400013568],
      [-81.58245999068004, 36.25840399984058],
    ],
    participatingCounties: ["WATAUGA"],
    focusMaskData: "map_data/watauga_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Ray Russell": ["#e3974e", "#eea941", "#e7c557"],
      "David Luther": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Ray Russell",
        votes: 607,
        share: 51.4406779661017,
      },
      {
        candidate: "David Luther",
        votes: 573,
        share: 48.559322033898304,
      },
    ],
  },
  watauga_county_board_of_education_district_01: {
    title: "Watauga County Board Of Education District 1",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/watauga_county_board_of_education_district_01.geojson",
    bounds: [
      [-81.77944899126453, 36.1712310001302],
      [-81.66700899075542, 36.265453000303786],
    ],
    participatingCounties: ["WATAUGA"],
    focusMaskData: "map_data/watauga_county_board_of_education_district_01_focus_mask.geojson",
    candidates: {
      "Ellen Lamont": ["#e3974e", "#eea941", "#e7c557"],
      "Yolanda Adams": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Carrie McClain": ["#af89be", "#b29fde", "#b8b0cb"],
    },
    results: [
      {
        candidate: "Ellen Lamont",
        votes: 572,
        share: 57.37211634904714,
      },
      {
        candidate: "Yolanda Adams",
        votes: 290,
        share: 29.087261785356063,
      },
      {
        candidate: "Carrie McClain",
        votes: 135,
        share: 13.54062186559679,
      },
    ],
  },
  watauga_county_board_of_education_district_04: {
    title: "Watauga County Board Of Education District 4",
    subtitle: "Vote For 1",
    scope: "local_district",
    data: "map_data/watauga_county_board_of_education_district_04.geojson",
    bounds: [
      [-81.80490499169186, 36.1712310001302],
      [-81.566571991183, 36.39130900039988],
    ],
    participatingCounties: ["WATAUGA"],
    focusMaskData: "map_data/watauga_county_board_of_education_district_04_focus_mask.geojson",
    candidates: {
      "Megan (Chayyim) Kornhauser": ["#e3974e", "#eea941", "#e7c557"],
      "Chad Cole": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
      "Betsy Rosenbalm": ["#af89be", "#b29fde", "#b8b0cb"],
      "David Aaron Grig": ["#3278ad", "#72a9cf", "#b7d4e8"],
    },
    results: [
      {
        candidate: "Megan (Chayyim) Kornhauser",
        votes: 687,
        share: 45.496688741721854,
      },
      {
        candidate: "Chad Cole",
        votes: 651,
        share: 43.11258278145695,
      },
      {
        candidate: "Betsy Rosenbalm",
        votes: 124,
        share: 8.211920529801324,
      },
      {
        candidate: "David Aaron Grig",
        votes: 48,
        share: 3.1788079470198674,
      },
    ],
  },
  wilson_county_board_of_commissioners_district_01_dem: {
    title: "Wilson County Board Of Commissioners District 1",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/wilson_county_board_of_commissioners_district_01_dem.geojson",
    bounds: [
      [-78.03802299158333, 35.652545999692926],
      [-77.71928499147299, 35.86720799959774],
    ],
    participatingCounties: ["WILSON"],
    focusMaskData: "map_data/wilson_county_board_of_commissioners_district_01_dem_focus_mask.geojson",
    candidates: {
      "Leslie Thomas Atkinson": ["#e3974e", "#eea941", "#e7c557"],
      "Johnnie E. Chestnut": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Leslie Thomas Atkinson",
        votes: 632,
        share: 68.84531590413944,
      },
      {
        candidate: "Johnnie E. Chestnut",
        votes: 286,
        share: 31.154684095860567,
      },
    ],
  },
  wilson_county_board_of_commissioners_district_02_dem: {
    title: "Wilson County Board Of Commissioners District 2",
    subtitle: "Democratic Primary",
    scope: "local_district",
    data: "map_data/wilson_county_board_of_commissioners_district_02_dem.geojson",
    bounds: [
      [-77.96534999141272, 35.58343600028771],
      [-77.6651309910595, 35.86720799959774],
    ],
    participatingCounties: ["WILSON"],
    focusMaskData: "map_data/wilson_county_board_of_commissioners_district_02_dem_focus_mask.geojson",
    candidates: {
      "Sherry Lucas": ["#e3974e", "#eea941", "#e7c557"],
      "Kahmahl Simmons": ["#5bc7a3", "#77e5c1", "#a0e6a1"],
    },
    results: [
      {
        candidate: "Sherry Lucas",
        votes: 677,
        share: 70.08281573498965,
      },
      {
        candidate: "Kahmahl Simmons",
        votes: 289,
        share: 29.91718426501035,
      },
    ],
  },
};

export { contests };
