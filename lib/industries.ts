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
    short: "Towers, townhomes, and the councils that run them",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Residential high-rise strata towers",
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
    short: "Tenant comfort is lease renewal",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Glass commercial office building",
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
    short: "Uptime is the product",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Industrial warehouse facility",
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
    short: "Open doors, comfortable customers",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Retail storefront interior",
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
    short: "No margin for downtime",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Healthcare facility corridor",
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
    slug: "education",
    name: "Education & Institutional",
    short: "Budgets are public, failures are visible",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Institutional campus building",
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
    slug: "residential",
    name: "Residential",
    short: "Homeowners and installs",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Modern single-family home",
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
