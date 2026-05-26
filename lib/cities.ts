export type City = {
  slug: string;
  name: string;
  region: "Sea-to-Sky" | "North Shore" | "Vancouver" | "Tri-Cities" | "South of Fraser" | "Fraser Valley";
  population: number;
  driveTimeMin: number; // from Coquitlam HQ
  postalPrefix: string;
  // Lat/Lng for the SVG map (BC bounding box)
  lat: number;
  lng: number;
  blurb: string;
  hooks: string[]; // local hooks
  responseHours: number;
  techsAssigned: number;
};

export const cities: City[] = [
  {
    slug: "whistler",
    name: "Whistler",
    region: "Sea-to-Sky",
    population: 13982,
    driveTimeMin: 110,
    postalPrefix: "V0N / V8E",
    lat: 50.1163,
    lng: -122.9574,
    blurb:
      "Mountain-climate HVAC, snow-load roof work, and standby power for Whistler's mixed-use towers, chalet developments, and Hwy 99 retail.",
    hooks: [
      "Heat-pump retrofits sized for –20°C design temperatures",
      "Snowmelt boiler and glycol systems",
      "Standby generator service for resort properties",
      "Strata maintenance partnerships in Whistler Village and Creekside",
    ],
    responseHours: 24,
    techsAssigned: 4,
  },
  {
    slug: "squamish",
    name: "Squamish",
    region: "Sea-to-Sky",
    population: 23819,
    driveTimeMin: 70,
    postalPrefix: "V8B",
    lat: 49.7016,
    lng: -123.1558,
    blurb:
      "Servicing Squamish's fast-growing strata complexes, commercial corridors, and Sea-to-Sky industrial parks with a dedicated route truck.",
    hooks: [
      "Ducted heat pump installs in new strata construction",
      "Restaurant kitchen exhaust and gas fitting",
      "EV charger deployments across Garibaldi Estates",
      "On-call building envelope service",
    ],
    responseHours: 8,
    techsAssigned: 3,
  },
  {
    slug: "west-vancouver",
    name: "West Vancouver",
    region: "North Shore",
    population: 44122,
    driveTimeMin: 35,
    postalPrefix: "V7S / V7V / V7W",
    lat: 49.3286,
    lng: -123.1574,
    blurb:
      "Specialist work on West Van's high-end homes and waterfront stratas — heat pumps, hydronics, and discreet maintenance programs.",
    hooks: [
      "Concealed ductless mini-splits for heritage homes",
      "Hydronic in-floor heating and snow-melt",
      "Standby generator installs above Marine Drive",
      "Coordinated maintenance across multi-property portfolios",
    ],
    responseHours: 4,
    techsAssigned: 6,
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    region: "North Shore",
    population: 87000,
    driveTimeMin: 30,
    postalPrefix: "V7G – V7R",
    lat: 49.32,
    lng: -123.0724,
    blurb:
      "From Lonsdale towers to Lynn Valley single-family stock, we run a full North Shore service crew with dedicated dispatch.",
    hooks: [
      "Strata HVAC and plumbing maintenance",
      "Heat pump rebates through CleanBC and BC Hydro",
      "EV charger installs in Lower and Upper Lonsdale",
      "Building envelope and parkade waterproofing",
    ],
    responseHours: 4,
    techsAssigned: 8,
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    region: "Vancouver",
    population: 685000,
    driveTimeMin: 25,
    postalPrefix: "V5K – V6Z",
    lat: 49.2827,
    lng: -123.1207,
    blurb:
      "Largest service footprint — downtown commercial, Kitsilano and Mount Pleasant strata, and Vancouver's restaurant and retail core.",
    hooks: [
      "Downtown commercial HVAC and refrigeration",
      "Rooftop and high-rise crane lifts",
      "Restaurant kitchen gas and exhaust",
      "BC Hydro Power Smart lighting retrofits",
    ],
    responseHours: 2,
    techsAssigned: 18,
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    region: "Vancouver",
    population: 249125,
    driveTimeMin: 20,
    postalPrefix: "V3J – V5J",
    lat: 49.2488,
    lng: -122.9805,
    blurb:
      "Strata-heavy Burnaby coverage from Brentwood to Edmonds, plus Burnaby Lake industrial and Metrotown commercial.",
    hooks: [
      "Brentwood and Metrotown high-rise service",
      "Light industrial mechanical retrofits",
      "Strata council reporting and maintenance contracts",
      "Generator service for data and broadcast facilities",
    ],
    responseHours: 2,
    techsAssigned: 12,
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    region: "Vancouver",
    population: 78916,
    driveTimeMin: 15,
    postalPrefix: "V3L / V3M",
    lat: 49.2057,
    lng: -122.911,
    blurb:
      "Heritage stock meets dense modern strata. We retrofit older boilers, re-pipe century homes, and maintain Quay-area towers.",
    hooks: [
      "Heritage boiler and hydronic restoration",
      "Strata waterfront tower maintenance",
      "Plumbing re-pipes and drain replacements",
      "Royal Columbian-area commercial service",
    ],
    responseHours: 2,
    techsAssigned: 6,
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    region: "Tri-Cities",
    population: 148625,
    driveTimeMin: 5,
    postalPrefix: "V3B – V3K",
    lat: 49.2838,
    lng: -122.7932,
    blurb:
      "Our home base. We're five minutes from City Centre, with the deepest service density anywhere on our map.",
    hooks: [
      "HQ at Fawcett Road — fastest response in the region",
      "Burke Mountain and Westwood Plateau new-build service",
      "Henderson and City Centre strata partnerships",
      "Coordinated mechanical + electrical for property managers",
    ],
    responseHours: 1,
    techsAssigned: 22,
  },
  {
    slug: "port-coquitlam",
    name: "Port Coquitlam",
    region: "Tri-Cities",
    population: 61498,
    driveTimeMin: 10,
    postalPrefix: "V3B / V3C",
    lat: 49.2628,
    lng: -122.7811,
    blurb:
      "Light-industrial corridor work plus quiet, professional residential service from Mary Hill to Citadel.",
    hooks: [
      "Industrial refrigeration in Mary Hill industrial",
      "Furnace and heat-pump replacements in Citadel",
      "Plumbing and gas for downtown PoCo commercial",
      "Generator installs at flood-risk facilities",
    ],
    responseHours: 1,
    techsAssigned: 9,
  },
  {
    slug: "port-moody",
    name: "Port Moody",
    region: "Tri-Cities",
    population: 33551,
    driveTimeMin: 10,
    postalPrefix: "V3H",
    lat: 49.2849,
    lng: -122.8678,
    blurb:
      "Brewery row mechanical, Suter Brook and Klahanie strata, and the waterfront commercial stretch along St. Johns.",
    hooks: [
      "Brewery glycol and steam systems",
      "Strata maintenance Suter Brook to Klahanie",
      "Heat pump installs in Heritage Woods",
      "Common-area lighting retrofits",
    ],
    responseHours: 1,
    techsAssigned: 7,
  },
  {
    slug: "richmond",
    name: "Richmond",
    region: "Vancouver",
    population: 209937,
    driveTimeMin: 35,
    postalPrefix: "V6V – V7E",
    lat: 49.1666,
    lng: -123.1336,
    blurb:
      "From YVR-area logistics to City Centre towers — Richmond gets a full mechanical, plumbing and refrigeration team.",
    hooks: [
      "Cold-storage and food-service refrigeration",
      "City Centre and Brighouse strata service",
      "Steveston heritage and restaurant gas",
      "Backflow testing programs for industrial parks",
    ],
    responseHours: 3,
    techsAssigned: 11,
  },
  {
    slug: "surrey",
    name: "Surrey",
    region: "South of Fraser",
    population: 568322,
    driveTimeMin: 45,
    postalPrefix: "V3R – V4P",
    lat: 49.1913,
    lng: -122.849,
    blurb:
      "Surrey's six town centres each get a different mix. Our dispatch books City Centre highrises one hour, South Surrey townhomes the next.",
    hooks: [
      "Highrise strata service in Surrey City Centre",
      "Townhome plumbing and HVAC across Cloverdale",
      "Light industrial refrigeration in Newton",
      "EV Ready strata planning South Surrey",
    ],
    responseHours: 4,
    techsAssigned: 14,
  },
  {
    slug: "delta",
    name: "Delta",
    region: "South of Fraser",
    population: 108455,
    driveTimeMin: 50,
    postalPrefix: "V4C – V4M",
    lat: 49.0847,
    lng: -123.0586,
    blurb:
      "Tsawwassen and Ladner residential plus Annacis Island and Tilbury industrial — two very different service profiles, one team.",
    hooks: [
      "Industrial mechanical on Annacis and Tilbury",
      "Tsawwassen and Ladner home heat pumps",
      "Flood-zone generator installations",
      "Backflow and cross-connection programs",
    ],
    responseHours: 4,
    techsAssigned: 8,
  },
  {
    slug: "langley",
    name: "Langley",
    region: "South of Fraser",
    population: 132603,
    driveTimeMin: 55,
    postalPrefix: "V1M – V3A",
    lat: 49.1044,
    lng: -122.6604,
    blurb:
      "Willoughby's strata boom, Walnut Grove residential, and Langley City commercial — covered by a Fraser Valley-based crew.",
    hooks: [
      "Willoughby strata new-construction service",
      "Walnut Grove furnace and AC replacements",
      "Commercial gas and rooftop unit service",
      "Murrayville heat-pump retrofits",
    ],
    responseHours: 4,
    techsAssigned: 9,
  },
  {
    slug: "maple-ridge",
    name: "Maple Ridge",
    region: "Fraser Valley",
    population: 90990,
    driveTimeMin: 35,
    postalPrefix: "V2W / V2X / V4R",
    lat: 49.2193,
    lng: -122.601,
    blurb:
      "Single-family-heavy market with growing town-centre density. Strong demand for heat pumps and CleanBC rebate work.",
    hooks: [
      "CleanBC heat pump retrofits",
      "Boiler and furnace replacements",
      "EV charger strata installs",
      "Building envelope on aging stock",
    ],
    responseHours: 3,
    techsAssigned: 6,
  },
  {
    slug: "pitt-meadows",
    name: "Pitt Meadows",
    region: "Fraser Valley",
    population: 19146,
    driveTimeMin: 25,
    postalPrefix: "V3Y",
    lat: 49.225,
    lng: -122.6892,
    blurb:
      "Compact municipality, big industrial logistics presence. We split residential rebate work with industrial mechanical service.",
    hooks: [
      "Logistics-park HVAC and refrigeration",
      "Residential heat-pump CleanBC paperwork",
      "Plumbing service across Bonson and Mitchell",
      "Generator commissioning for warehousing",
    ],
    responseHours: 2,
    techsAssigned: 4,
  },
  {
    slug: "mission",
    name: "Mission",
    region: "Fraser Valley",
    population: 41519,
    driveTimeMin: 55,
    postalPrefix: "V2V / V4S",
    lat: 49.1305,
    lng: -122.3045,
    blurb:
      "Older housing stock that benefits massively from heat-pump retrofits — paired with Mission's industrial north-side mechanical work.",
    hooks: [
      "CleanBC and BC Hydro rebate retrofits",
      "Older furnace and tank replacements",
      "Industrial mechanical on Lougheed corridor",
      "Hatzic and Cedar Valley new-build service",
    ],
    responseHours: 4,
    techsAssigned: 5,
  },
  {
    slug: "abbotsford",
    name: "Abbotsford",
    region: "Fraser Valley",
    population: 153524,
    driveTimeMin: 65,
    postalPrefix: "V2S – V4X",
    lat: 49.0504,
    lng: -122.3045,
    blurb:
      "Furthest east on our footprint. We run a weekly Abbotsford route truck and a dedicated commercial crew for the airport and Sumas Way corridor.",
    hooks: [
      "Airport and Sumas Way commercial HVAC",
      "Agricultural cooling and refrigeration",
      "Heat pump rebates across Clearbrook",
      "Generator installs for rural flood resilience",
    ],
    responseHours: 6,
    techsAssigned: 7,
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export const citiesByRegion = cities.reduce<Record<string, City[]>>((acc, c) => {
  acc[c.region] = acc[c.region] || [];
  acc[c.region].push(c);
  return acc;
}, {});
