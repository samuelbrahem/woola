import {
  Wrench,
  Flame,
  Snowflake,
  Droplets,
  Wind,
  Zap,
  BatteryCharging,
  Plug,
  Building2,
  HardHat,
  Layers,
  ShieldCheck,
  Cog,
  Settings,
  Lightbulb,
  Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export type DivisionStat = { value: string; label: string; sub?: string };
export type DivisionFAQ = { q: string; a: string };
export type Testimonial = { quote: string; author: string; role: string; org: string };
export type FeaturedProject = { title: string; tag: string; summary: string; image: string; alt: string };

export type Division = {
  slug: "mechanical" | "power" | "build";
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  contactPhone: string;
  contactEmail: string;
  intro: string;
  accent: string;
  heroKeywords: string[];
  stats: DivisionStat[];
  brands: string[];
  certLogos: string[];
  testimonial: Testimonial;
  featured: FeaturedProject[];
  faqs: DivisionFAQ[];
  services: Service[];
};

export const divisions: Division[] = [
  {
    slug: "mechanical",
    name: "Woola Mechanical",
    subtitle: "HVAC, Plumbing & Gas",
    tagline: "Engineered comfort. Verified reliability.",
    description:
      "Full-spectrum mechanical services for strata, commercial and high-end residential properties — from heat-pump retrofits to industrial refrigeration.",
    contactPhone: "604-732-1441",
    contactEmail: "dispatch@woolamech.ca",
    intro:
      "We design, install, service and maintain the systems that keep buildings comfortable and code-compliant. Our technicians are certified across HVAC, hydronics, gas, and refrigeration — so one team handles what most companies split across four.",
    heroImage:
      "https://images.unsplash.com/photo-1603516084021-1cfa399b64ca?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Rooftop HVAC equipment on a commercial building",
    accent: "from-brand-500/15 via-brand-400/5 to-transparent",
    heroKeywords: ["HVAC", "Plumbing", "Gas", "Refrigeration", "Heat Pumps", "Hydronics"],
    stats: [
      { value: "32", label: "Mechanical technicians", sub: "Red Seal & gas-ticketed" },
      { value: "< 4 hr", label: "Emergency response", sub: "Contracted clients, Metro Van" },
      { value: "2,400+", label: "Assets under contract", sub: "Boilers, RTUs, heat pumps" },
      { value: "98%", label: "First-visit fix rate", sub: "12-month rolling average" },
    ],
    brands: [
      "Mitsubishi Electric",
      "Daikin",
      "Carrier",
      "Trane",
      "Viessmann",
      "IBC Boilers",
      "Lochinvar",
      "Rinnai",
      "Navien",
      "Honeywell",
      "Belimo",
      "Grundfos",
    ],
    certLogos: ["logo-teca", "logo-worksafe-bc", "logo-asttbc", "logo-hpcn", "logo-pama-member", "logo-interprovincial-standard"],
    testimonial: {
      quote:
        "We had three vendors for HVAC, plumbing and boilers — and three sets of finger-pointing. Woola Mechanical took over our whole portfolio in 90 days, and I have one phone number now.",
      author: "Marisa Chen",
      role: "Senior Property Manager",
      org: "Pacific Coast Strata Group",
    },
    featured: [
      {
        title: "32-storey Coal Harbour boiler swap",
        tag: "Hydronics retrofit",
        summary:
          "Replaced two atmospheric boilers with high-efficiency condensing units over a single weekend with zero hot-water downtime. CleanBC rebate captured in-house.",
        image:
          "https://images.unsplash.com/photo-1594233078955-e1f73a02ebb2?w=1200&q=80&auto=format&fit=crop",
        alt: "Industrial boiler room with high-efficiency boilers",
      },
      {
        title: "Surrey strata heat-pump conversion",
        tag: "Decarbonization",
        summary:
          "184 ductless heat-pump heads across 92 suites — coordinated with the strata, two electrical sub-trades, and FortisBC. Completed three weeks ahead of schedule.",
        image:
          "https://images.unsplash.com/photo-1681042803902-f79c240d8f03?w=1200&q=80&auto=format&fit=crop",
        alt: "Rooftop HVAC heat pump units on a multi-family building",
      },
      {
        title: "Richmond cold-storage refrigeration",
        tag: "Industrial refrigeration",
        summary:
          "Glycol-loop conversion off R-22 to a natural refrigerant solution. EPA-compliant recovery, leak detection, and 24/7 SLA monitoring after commissioning.",
        image:
          "https://images.unsplash.com/photo-1721613877687-c9099b698faa?w=1200&q=80&auto=format&fit=crop",
        alt: "Commercial walk-in refrigerator interior",
      },
    ],
    faqs: [
      {
        q: "Do you service residential or only commercial mechanical systems?",
        a: "Both — we service strata, commercial, and high-end residential. Roughly 60% of our work is multi-residential strata, 30% commercial, and 10% high-end single-family.",
      },
      {
        q: "Are your technicians licensed for both gas and refrigeration?",
        a: "Our techs hold Class A or B gas tickets and ODP refrigeration trade qualifications. About a third are dual-ticketed, which means one truck-roll handles work that competitors split across two visits.",
      },
      {
        q: "Can you handle CleanBC and FortisBC rebate paperwork?",
        a: "Yes. We're a registered CleanBC Better Homes contractor and a FortisBC trade ally. Rebate paperwork is filed in-house — you don't chase it.",
      },
      {
        q: "How fast is your emergency response?",
        a: "Contracted clients in Metro Vancouver see a sub-4-hour response 24/7. For non-contracted callers we aim for same-day, depending on dispatch load.",
      },
      {
        q: "Do you offer fixed-price maintenance contracts?",
        a: "Yes — most strata and commercial clients sign annual fixed-price PM contracts covering inspections, filter changes, water treatment, and combustion analysis. We then quote remedial work separately at agreed unit rates.",
      },
    ],
    services: [
      {
        slug: "hvac",
        name: "HVAC & Heat Pumps",
        short: "Heating, cooling, ventilation",
        description:
          "Central furnaces, ducted and ductless heat pumps, air conditioners, RTUs, VRF systems, make-up air, and exhaust. We hold TECA Quality First and CleanBC Better Homes registrations.",
        icon: Wind,
        highlights: [
          "Cold-climate heat-pump specialists",
          "TECA Quality First certified",
          "CleanBC rebate paperwork handled in-house",
          "24/7 emergency response",
        ],
      },
      {
        slug: "plumbing",
        name: "Plumbing",
        short: "Domestic water & drainage",
        description:
          "Re-pipes, drain replacements, hot water tanks, tankless systems, backflow testing and certification, fixture replacement, and emergency leak response.",
        icon: Droplets,
        highlights: [
          "Cross Connection Control certified",
          "Annual backflow testing programs",
          "Tankless and hybrid hot-water expertise",
          "Pressure and water-loss diagnostics",
        ],
      },
      {
        slug: "gas",
        name: "Gas Services",
        short: "Licensed gas fitting",
        description:
          "Boilers, hydronic systems, rooftop units, restaurant lines, fireplaces, and BBQ rough-ins — installed and maintained by ticketed Class A and B gas fitters.",
        icon: Flame,
        highlights: [
          "Class A & B gas fitters on staff",
          "Boiler tune-ups and combustion analysis",
          "Hydronic system commissioning",
          "FortisBC partner contractor",
        ],
      },
      {
        slug: "refrigeration",
        name: "Refrigeration",
        short: "Commercial cooling",
        description:
          "Walk-ins, reach-ins, ice plants, glycol systems, condensing units, leak detection, and refrigerant recovery for grocery, food service, and lab clients.",
        icon: Snowflake,
        highlights: [
          "ODP refrigeration trade qualified",
          "A2L and natural refrigerant ready",
          "EPA-compliant leak management",
          "Preventative service contracts",
        ],
      },
    ],
  },
  {
    slug: "power",
    name: "Woola Power Systems",
    subtitle: "Generators, Electrical & EV",
    tagline: "Standby power. Permanent peace of mind.",
    description:
      "Generator-led electrical services — from emergency standby and load bank testing to full electrical installs and EV charger deployments.",
    contactPhone: "604-829-9156",
    contactEmail: "service@woolapower.ca",
    intro:
      "Woola Power was built around the most demanding electrical assets in any building — emergency standby generators, transfer switches, and EV infrastructure. We are factory-authorized service providers for Generac, Kohler, and Cummins, and our electricians are FSR-certified.",
    heroImage:
      "https://images.unsplash.com/photo-1705051278299-7e64ba21437a?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Industrial standby diesel generator unit",
    accent: "from-ink-800/10 via-brand-500/10 to-transparent",
    heroKeywords: ["Generators", "Electrical", "EV Charging", "Load Bank", "Power Smart", "Transfer Switch"],
    stats: [
      { value: "180+", label: "Generators under contract", sub: "Annual CSA C282 inspections" },
      { value: "850 kW", label: "On-site load bank capacity", sub: "Resistive + reactive testing" },
      { value: "1,200", label: "EV chargers commissioned", sub: "L2 + DCFC across BC" },
      { value: "24/7", label: "Emergency generator response", sub: "Authorized for 3 OEMs" },
    ],
    brands: [
      "Generac",
      "Kohler",
      "Cummins",
      "Caterpillar",
      "ASCO",
      "Eaton",
      "Schneider Electric",
      "FLO",
      "ChargePoint",
      "Wallbox",
      "EVBox",
      "SWTCH",
    ],
    certLogos: ["logo-bc-hydro", "logo-egsa", "logo-worksafe-bc", "logo-asttbc", "logo-isn", "logo-comply-works"],
    testimonial: {
      quote:
        "After a fire alarm test failed our annual standby drill, Woola Power had load-bank trucks on site the next morning. They isolated a fuel-polishing issue our previous vendor missed for three years.",
      author: "Daniel Akande",
      role: "Director of Facilities",
      org: "Cascade Healthcare Properties",
    },
    featured: [
      {
        title: "Downtown Vancouver tower standby",
        tag: "Generator program",
        summary:
          "Three 750 kW Generac units, CSA C282 annual load-bank testing, ATS overhauls, and a fuel-polishing rotation that's caught two contaminated batches in 18 months.",
        image:
          "https://images.unsplash.com/photo-1658260867231-535a1f7c98b9?w=1200&q=80&auto=format&fit=crop",
        alt: "Industrial standby generator at a commercial facility",
      },
      {
        title: "Surrey strata EV-Ready rollout",
        tag: "EV charging",
        summary:
          "EV-Ready master plan for a 240-stall strata: load management design, FLO and Wallbox installs, BC Hydro rebate paperwork, and a billing platform handover to the council.",
        image:
          "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1200&q=80&auto=format&fit=crop",
        alt: "Electric vehicle charging at a Level 2 station",
      },
      {
        title: "Fraser Valley logistics campus",
        tag: "Commercial electrical",
        summary:
          "1,200-amp service upgrade, arc-flash and coordination study, infrared thermography baseline, and a roll-forward maintenance plan executed during planned downtime windows.",
        image:
          "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?w=1200&q=80&auto=format&fit=crop",
        alt: "Industrial electrical panel and switchgear",
      },
    ],
    faqs: [
      {
        q: "Which generator OEMs are you authorized for?",
        a: "We're factory-authorized service providers for Generac, Kohler, and Cummins, and routinely service Caterpillar and Onan units as well. Our techs carry brand-specific diagnostic software.",
      },
      {
        q: "Do you do load-bank testing in-house?",
        a: "Yes — we own and operate resistive and reactive load banks up to 850 kW. We can run annual CSA C282 testing without subcontracting, which keeps schedules tight and costs predictable.",
      },
      {
        q: "Are your electricians FSR-certified?",
        a: "Every electrical lead carries a Field Safety Representative ticket (FSR-B or FSR-A). We pull our own permits and sign off without coordinating with a third-party FSR.",
      },
      {
        q: "Can you handle EV-Ready planning for strata buildings?",
        a: "Yes. We're a CleanBC EV Ready certified planner. We model load management at the building level, design the L2/DCFC mix, and file the BC Hydro and CleanBC rebate paperwork.",
      },
      {
        q: "What's included in a standard generator maintenance package?",
        a: "Quarterly visual + battery checks, semi-annual oil/filter/coolant service, annual load-bank testing, ATS exercise and inspection, fuel polishing as scheduled, and an emergency-call SLA. All photo-documented.",
      },
    ],
    services: [
      {
        slug: "generators",
        name: "Standby Generators",
        short: "Emergency power systems",
        description:
          "Annual preventative maintenance, oil and filter service, load bank testing to ASHRAE 90.1 and CSA C282, transfer-switch inspections, fuel polishing, and 24/7 emergency response.",
        icon: Zap,
        highlights: [
          "CSA C282 annual inspections",
          "Load bank testing in-house",
          "Generac, Kohler, Cummins certified",
          "24/7 emergency dispatch",
        ],
      },
      {
        slug: "electrical",
        name: "Electrical Services",
        short: "Commercial & strata electrical",
        description:
          "Service upgrades, common-area lighting retrofits, BC Hydro Power Smart projects, panel replacements, infrared thermal imaging, and arc-flash studies.",
        icon: Plug,
        highlights: [
          "FSR-certified field operators",
          "BC Hydro Power Smart Alliance",
          "Infrared thermography reporting",
          "Arc-flash and coordination studies",
        ],
      },
      {
        slug: "ev-chargers",
        name: "EV Charger Installs",
        short: "Level 2 & DC fast charging",
        description:
          "Single-stall residential and strata Level 2, networked fleets, and DC fast charging. CleanBC and BC Hydro rebate-eligible installs with EV Ready planning for strata.",
        icon: BatteryCharging,
        highlights: [
          "CleanBC EV Ready certified planner",
          "Strata load management design",
          "FLO, ChargePoint, Wallbox installer",
          "Permit-to-energization handled",
        ],
      },
    ],
  },
  {
    slug: "build",
    name: "Woola Build",
    subtitle: "Building Maintenance & Construction",
    tagline: "Prevent problems before they cost you.",
    description:
      "A single trade-coordinated partner for strata and commercial property maintenance, building envelope, interior renovations and small-cap construction.",
    contactPhone: "604-800-3617",
    contactEmail: "estimates@woolabuild.ca",
    intro:
      "Most property managers juggle a dozen vendors. Woola Build collapses that into one accountable partner — with maintenance packages, envelope work, interior and exterior trades, and construction project management coordinated by an in-house team.",
    heroImage:
      "https://images.unsplash.com/photo-1553946550-4b8f3eea5451?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Construction project manager on a building site",
    accent: "from-brand-400/10 via-ink-800/5 to-transparent",
    heroKeywords: ["Maintenance", "Envelope", "Renovations", "Property Services", "Roofing", "Construction PM"],
    stats: [
      { value: "120+", label: "Buildings under maintenance", sub: "Quarterly + annual programs" },
      { value: "Same week", label: "Service dispatch", sub: "Routine work, contracted clients" },
      { value: "$8.4M", label: "Annual construction volume", sub: "Tenant improvements & renos" },
      { value: "Gold Seal", label: "Certified project managers", sub: "On every $250k+ project" },
    ],
    brands: [
      "Soprema",
      "Sika",
      "Tremco",
      "Henry",
      "GAF",
      "IKO",
      "Hardie",
      "Benjamin Moore",
      "Sherwin-Williams",
      "Schluter",
      "Kohler Plumbing",
      "Schlage",
    ],
    certLogos: ["logo-boma", "logo-pama-member", "logo-cci-bc", "logo-worksafe-bc", "logo-contractor-check", "logo-comply-works"],
    testimonial: {
      quote:
        "Three years ago we tracked twenty-two trades for a portfolio of nine buildings. Woola Build is now our single line item for maintenance, envelope and reno work. Budgeting got obvious.",
      author: "Sandra Polizzi",
      role: "Portfolio Manager",
      org: "Westcoast Real Estate Council",
    },
    featured: [
      {
        title: "West End strata parkade rehab",
        tag: "Building envelope",
        summary:
          "Full waterproofing membrane replacement on a two-level parkade — 22,000 sq ft — completed in occupied condition over six weekend phases. Zero vehicle relocation required.",
        image:
          "https://images.unsplash.com/photo-1619335680796-54f13b88c6ba?w=1200&q=80&auto=format&fit=crop",
        alt: "Concrete parking garage interior",
      },
      {
        title: "Yaletown amenity rebuild",
        tag: "Construction",
        summary:
          "Lobby, gym and party room reno for a 180-unit tower. Gold Seal PM, in-house mechanical and electrical coordination, fixed-price proposal honored within 1.8% variance.",
        image:
          "https://images.unsplash.com/photo-1668911128139-4db2cc34aa5f?w=1200&q=80&auto=format&fit=crop",
        alt: "Modern condo lobby interior",
      },
      {
        title: "Coquitlam HQ campus maintenance",
        tag: "Recurring program",
        summary:
          "Quarterly maintenance contract across six buildings — roof, drainage, parkade, life-safety, exterior cleaning, and small carpentry. Single PO, single invoice, single dispatcher.",
        image:
          "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=1200&q=80&auto=format&fit=crop",
        alt: "Construction and maintenance crew on a building site",
      },
    ],
    faqs: [
      {
        q: "What size project does Woola Build handle?",
        a: "Maintenance items from $500 to multi-million-dollar tenant improvements. Our sweet spot for construction is $50k to $2M projects where a Gold Seal PM and in-house trades make a real difference.",
      },
      {
        q: "Are you general contractors or just maintenance?",
        a: "Both. We hold a BC general contractor license and run construction projects with Gold Seal PMs. The maintenance side is intentionally separate so routine work doesn't get throttled by project schedules.",
      },
      {
        q: "Do you self-perform or sub everything out?",
        a: "Mechanical, electrical, generator, plumbing, gas, carpentry, painting and exterior trades are self-performed. Specialty trades (elevators, fire systems, deep envelope engineering) are subbed to vetted partners we've worked with for years.",
      },
      {
        q: "How do you bill recurring maintenance work?",
        a: "Annual fixed-price contracts with a defined scope, plus pre-agreed unit rates for ad-hoc work. You see one invoice per month, line-itemized by building and trade.",
      },
      {
        q: "Can you handle strata bylaw and permit paperwork?",
        a: "Yes — bylaw review, council approvals, permit applications and inspections are all handled by our PM team. Strata councils get a single point of contact through every phase.",
      },
    ],
    services: [
      {
        slug: "maintenance",
        name: "Maintenance Packages",
        short: "Proactive building care",
        description:
          "Quarterly and annual maintenance plans covering roof, drainage, parkade, common areas, irrigation, life-safety and exterior cleaning. One contract. One invoice.",
        icon: ShieldCheck,
        highlights: [
          "Custom schedules per asset",
          "Digital condition reporting",
          "Single PO across trades",
          "BOMA and PAMA aligned",
        ],
      },
      {
        slug: "envelope",
        name: "Building Envelope",
        short: "Roof, cladding, sealants",
        description:
          "Targeted envelope repairs, sealant renewal, parkade waterproofing, deck membranes, and roofing — paired with engineer-led scoping for larger remediation.",
        icon: Layers,
        highlights: [
          "Sealant joint replacement programs",
          "Parkade traffic-deck systems",
          "Roof anchor and tie-off audits",
          "BC building code compliant",
        ],
      },
      {
        slug: "construction",
        name: "Construction & Renos",
        short: "Tenant improvements",
        description:
          "Tenant improvements, suite renovations, amenity rebuilds, and small commercial fit-outs — managed by Gold Seal certified project managers.",
        icon: HardHat,
        highlights: [
          "Gold Seal certified PMs",
          "In-house mechanical & electrical",
          "Strata bylaw & permit handling",
          "Fixed-price proposals",
        ],
      },
      {
        slug: "property-services",
        name: "Property Services",
        short: "On-call building work",
        description:
          "Carpentry, painting, fencing, hardware replacement, common-room refreshes and the long tail of small jobs that property managers never have time to source.",
        icon: Building2,
        highlights: [
          "Same-week dispatch",
          "Insured & bonded",
          "Photo-documented work orders",
          "Strata board reporting",
        ],
      },
    ],
  },
];

export const allServices = divisions.flatMap((d) =>
  d.services.map((s) => ({ ...s, division: d }))
);

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug);
}

export function getService(divisionSlug: string, serviceSlug: string) {
  const division = getDivision(divisionSlug);
  if (!division) return null;
  const service = division.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { division, service };
}
