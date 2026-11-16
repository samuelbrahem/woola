export type Industry = {
  slug: string;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
  description: string;
  pressures: string[];
  systems: { name: string; href: string }[];
  xrayType: "strata" | "office" | "warehouse" | "house";
};

export const industries: Industry[] = [
  {
    slug: "strata",
    name: "Strata & Multi-Family",
    short: "Towers, townhomes and strata councils",
    image: "/field/08-12-2026-build-8.jpg",
    imageAlt: "Woola Build crew at a wood-frame strata building",
    description:
      "Woola's home turf. Boiler plants, parkades, envelopes, standby power, and the council reporting that keeps assessments boring.",
    pressures: [
      "Council approvals for every major spend",
      "Depreciation reports that age fast",
      "Residents living above every repair",
    ],
    systems: [
      { name: "HVAC & Heat Pumps", href: "/mechanical/hvac" },
      { name: "Plumbing & Repipes", href: "/mechanical/plumbing" },
      { name: "Building Envelope", href: "/build/envelope" },
      { name: "EV Charging", href: "/electrical/ev-chargers" },
      { name: "Maintenance Packages", href: "/build/maintenance" },
    ],
    xrayType: "strata",
  },
  {
    slug: "office",
    name: "Office & Mixed-Use",
    short: "Office buildings and mixed-use",
    image: "/field/10-25-2024-mattmatt-28.jpg",
    imageAlt: "Woola technician on an office rooftop above the city",
    description:
      "Comfort complaints, tenant improvements, and base-building systems that must never interrupt business hours.",
    pressures: [
      "Downtime costs measured per tenant hour",
      "TI turnarounds between leases",
      "Energy costs against NOI",
    ],
    systems: [
      { name: "Commercial HVAC", href: "/mechanical/hvac" },
      { name: "Electrical & Panels", href: "/electrical/electrical" },
      { name: "LED Retrofits", href: "/electrical/led-lighting" },
      { name: "Tenant Improvements", href: "/build/construction" },
      { name: "Standby Power", href: "/power/generators" },
    ],
    xrayType: "office",
  },
  {
    slug: "industrial",
    name: "Industrial & Warehouse",
    short: "Plants, warehouses and distribution",
    image: "/field/01-21-2025-lift-langley-7.jpg",
    imageAlt: "Woola technician on a lift inside a warehouse",
    description:
      "Process cooling, heavy electrical distribution, gas heating, and dock-to-roof maintenance for facilities that can't stop.",
    pressures: [
      "Production halts when systems fail",
      "Heavy motor and process loads",
      "Compliance logs for refrigerant and gas",
    ],
    systems: [
      { name: "Refrigeration", href: "/mechanical/refrigeration" },
      { name: "Gas & Unit Heaters", href: "/mechanical/gas" },
      { name: "Electrical Distribution", href: "/electrical/electrical" },
      { name: "High-Bay LED", href: "/electrical/led-lighting" },
      { name: "Standby Generators", href: "/power/generators" },
    ],
    xrayType: "warehouse",
  },
  {
    slug: "retail",
    name: "Retail & Restaurant",
    short: "Stores, restaurants and commercial kitchens",
    image: "/field/10-25-2024-mattmatt-11.jpg",
    imageAlt: "Woola van outside a row of street-front shops",
    description:
      "Kitchen gas, walk-in refrigeration, storefront comfort, and after-hours service windows that don't cost you customers.",
    pressures: [
      "Repairs only after closing time",
      "Food loss when refrigeration fails",
      "Multiple locations, one facilities lead",
    ],
    systems: [
      { name: "Commercial Refrigeration", href: "/mechanical/refrigeration" },
      { name: "Kitchen Gas", href: "/mechanical/gas" },
      { name: "HVAC", href: "/mechanical/hvac" },
      { name: "Lighting & Signage Power", href: "/electrical/led-lighting" },
    ],
    xrayType: "office",
  },
  {
    slug: "healthcare",
    name: "Healthcare & Care Facilities",
    short: "Clinics, labs and care homes",
    image: "/field/07-28-2026-mech-4.jpg",
    imageAlt: "High-pressure steam and heating piping in a facility plant room",
    description:
      "Life-safety power, air quality, and redundancy for facilities where the occupants can't simply go home during an outage.",
    pressures: [
      "Life-safety systems under regulation",
      "Vulnerable occupants on site 24/7",
      "Strict infection-control protocols",
    ],
    systems: [
      { name: "Standby Generators", href: "/power/generators" },
      { name: "CSA C282 Testing", href: "/power/c282-testing" },
      { name: "UPS & Battery", href: "/power/ups-battery" },
      { name: "HVAC & Air Quality", href: "/mechanical/hvac" },
    ],
    xrayType: "office",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Hotels",
    short: "Hotels and hospitality",
    image: "/field/08-07-2024-crane-hotel-1.jpg",
    imageAlt: "Crane lifting rooftop equipment onto a hotel tower",
    description:
      "Domestic hot water that never runs short, suite comfort, commercial kitchens, pool and spa plant, and work windows that respect occupancy.",
    pressures: [
      "Comfort complaints become public reviews",
      "Hot water and kitchen gas can't go down",
      "Work scheduled around occupancy, not trades",
    ],
    systems: [
      { name: "Boilers & Hot Water", href: "/mechanical/gas" },
      { name: "HVAC & Suite Comfort", href: "/mechanical/hvac" },
      { name: "Kitchen Refrigeration", href: "/mechanical/refrigeration" },
      { name: "Standby Generators", href: "/power/generators" },
      { name: "Tenant Improvements", href: "/build/construction" },
    ],
    xrayType: "office",
  },
  {
    slug: "education",
    name: "Education & Institutional",
    short: "Schools, campuses and public buildings",
    image: "/field/08-05-2026-build-4.jpg",
    imageAlt: "Ceiling work in an institutional corridor",
    description:
      "Campus boilers, summer shutdown windows, and capital planning that has to survive a public budget process.",
    pressures: [
      "Work compressed into school breaks",
      "Public procurement and reporting",
      "Aging plants, capped budgets",
    ],
    systems: [
      { name: "Boilers & Hydronics", href: "/mechanical/gas" },
      { name: "Electrical Upgrades", href: "/electrical/electrical" },
      { name: "Maintenance Programs", href: "/build/maintenance" },
      { name: "LED Retrofits", href: "/electrical/led-lighting" },
    ],
    xrayType: "office",
  },
  {
    slug: "municipal",
    name: "Municipal & Public",
    short: "Civic buildings, recreation centres and public works",
    image: "/field/08-11-2026-van-16.jpg",
    imageAlt: "Woola van pulling up to a community facility",
    description:
      "City halls, recreation centres, fire halls, works yards, and the standby power and mechanical plants behind them, serviced under procurement-ready reporting.",
    pressures: [
      "Procurement rules and vendor prequalification",
      "Public buildings that cannot close for repairs",
      "Standby power that must pass every annual test",
    ],
    systems: [
      { name: "Standby Generators", href: "/power/generators" },
      { name: "Commercial HVAC", href: "/mechanical/hvac" },
      { name: "Electrical Service", href: "/electrical/electrical" },
      { name: "LED Retrofits", href: "/electrical/led-lighting" },
      { name: "Building Maintenance", href: "/build/maintenance" },
    ],
    xrayType: "office",
  },
  {
    slug: "residential",
    name: "Residential",
    short: "Homes and residential installs",
    image: "/field/10-25-2024-mattmatt-7.jpg",
    imageAlt: "Woola Mechanical van with ladders on a residential street",
    description:
      "Heat pumps, hot water, gas, EV chargers, and standby power for your home, with rebates filed for you.",
    pressures: [
      "Confusing quotes and rebate paperwork",
      "One shot at the right-sized system",
      "Strangers working in your home",
    ],
    systems: [
      { name: "Heat Pumps", href: "/mechanical/hvac" },
      { name: "Hot Water", href: "/mechanical/plumbing" },
      { name: "EV Chargers", href: "/electrical/ev-chargers" },
      { name: "Home Standby Power", href: "/power/generators" },
    ],
    xrayType: "house",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
