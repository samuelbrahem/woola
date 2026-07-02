import {
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
  Lightbulb,
  Cable,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServicePrimer = {
  what: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  parts: { term: string; def: string }[];
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  primer: ServicePrimer;
};

export type DivisionStat = { value: string; label: string; sub?: string };
export type DivisionFAQ = { q: string; a: string };
export type Testimonial = { quote: string; author: string; role: string; org: string };
export type FeaturedProject = { title: string; tag: string; summary: string; image: string; alt: string };

export type Division = {
  slug: "mechanical" | "power" | "electrical" | "build";
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

const WM = "https://upload.wikimedia.org/wikipedia/commons";

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
        primer: {
          what:
            "HVAC stands for Heating, Ventilation, and Air Conditioning. It's the equipment that heats, cools, and moves fresh air through your building. In a strata that might be a rooftop unit on top of the building, a furnace in a mechanical room, or a heat pump on your balcony. A ductless mini-split is the small wall-mounted unit you see in newer suites — it heats and cools without any ductwork.",
          image: `${WM}/1/16/HYUNDAI_-_Air_conditioner_mini_split_%28model_BMS-12HD%29.jpg`,
          imageAlt: "Wall-mounted indoor head of a ductless mini-split heat pump",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Heat pump", def: "A single box that heats in winter and cools in summer by moving heat, not burning fuel." },
            { term: "Furnace", def: "Burns natural gas to blow hot air through ducts. Only heats." },
            { term: "RTU", def: "Rooftop unit — a packaged commercial HVAC box that sits on the roof." },
            { term: "Ductless mini-split", def: "A wall-mounted head paired with an outdoor condenser — no ducts needed." },
            { term: "VRF", def: "Variable refrigerant flow — a big-building version of mini-splits that heats and cools different zones at once." },
          ],
        },
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
        primer: {
          what:
            "Plumbing is the network of pipes and fixtures that brings clean water into your building and takes waste water out. It covers your water heater (either a tank in a closet or a tankless unit on the wall), your drains, and the shut-offs behind every sink and toilet. A backflow preventer is a small brass valve that stops dirty water from flowing backwards into the drinking supply — cities require them to be tested every year.",
          image: `${WM}/e/ec/Tankless_water_heaters.jpg`,
          imageAlt: "Wall-mounted tankless (on-demand) gas water heaters",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Tank water heater", def: "The tall cylinder in a closet that stores 40–75 gallons of hot water." },
            { term: "Tankless", def: "A small wall box that heats water only when you turn on a tap — no storage." },
            { term: "Backflow preventer", def: "A brass valve that stops dirty water from siphoning into the drinking supply." },
            { term: "Drain stack", def: "The vertical pipe that carries wastewater from every floor down to the sewer." },
            { term: "Re-pipe", def: "Replacing old failing pipe (often copper or galvanized) throughout a building or suite." },
          ],
        },
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
        primer: {
          what:
            "Gas services install and maintain natural gas lines and everything that burns them — boilers, fireplaces, ranges, patio hookups, and rooftop heaters. A condensing boiler is a wall-hung box that heats water for hot-water heating loops; the newer models are up to 96% efficient. Only licensed Class A and Class B gas fitters can legally do this work in BC.",
          image: `${WM}/8/88/Vitodens_200_condensing_boiler.JPG`,
          imageAlt: "Viessmann Vitodens 200 wall-hung condensing gas boiler",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Condensing boiler", def: "A high-efficiency wall-hung box that burns gas to heat water for hot-water heat loops." },
            { term: "Class A ticket", def: "The higher gas licence — required for commercial and larger residential work." },
            { term: "Combustion analysis", def: "A digital meter check to confirm a burner is running clean and efficient." },
            { term: "Rough-in", def: "The initial pipe run before drywall goes up — the gas line to your BBQ or range." },
          ],
        },
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
        primer: {
          what:
            "Commercial refrigeration is the cooling equipment used by grocers, restaurants, and labs. A walk-in cooler is exactly what it sounds like — a room-sized insulated box, usually with the compressor rack on the roof or in a back room. Newer systems use A2L or natural refrigerants that are less harmful to the atmosphere than the older R-22 refrigerant, which is being phased out.",
          image: `${WM}/1/19/Walk-in_cooler_%283894648278%29.jpg`,
          imageAlt: "Interior of a walk-in cooler with insulated walls",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Walk-in", def: "A room-sized insulated cooler or freezer with a heavy door and a separate compressor." },
            { term: "Compressor rack", def: "The pump and motor assembly that makes the refrigerant cold. Usually on the roof." },
            { term: "Glycol loop", def: "A closed circuit of chilled glycol that carries cold from a plant to many display cases." },
            { term: "Refrigerant recovery", def: "Legally required capture of old refrigerant into a cylinder — you can't vent it to the air." },
          ],
        },
      },
    ],
  },
  {
    slug: "power",
    name: "Woola Power Systems",
    subtitle: "Standby Generators & Backup Power",
    tagline: "Standby power. Permanent peace of mind.",
    description:
      "Generator-first standby power services — annual CSA C282 inspections, load bank testing, transfer switch service, and 24/7 emergency response for BC's most critical facilities.",
    contactPhone: "604-829-9156",
    contactEmail: "service@woolapower.ca",
    intro:
      "Woola Power was built around the most demanding electrical asset in any building — the emergency standby generator. We are factory-authorized service providers for Generac, Kohler, and Cummins, own our own load banks, and dispatch 24/7 across BC.",
    heroImage:
      "https://images.unsplash.com/photo-1705051278299-7e64ba21437a?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Industrial standby diesel generator unit",
    accent: "from-ink-800/10 via-brand-500/10 to-transparent",
    heroKeywords: ["Generators", "Standby Power", "Load Bank", "CSA C282", "Transfer Switch", "Fuel Polishing"],
    stats: [
      { value: "180+", label: "Generators under contract", sub: "Annual CSA C282 inspections" },
      { value: "850 kW", label: "On-site load bank capacity", sub: "Resistive + reactive testing" },
      { value: "3", label: "OEMs factory-authorized", sub: "Generac, Kohler, Cummins" },
      { value: "24/7", label: "Emergency generator response", sub: "Every day of the year" },
    ],
    brands: [
      "Generac",
      "Kohler",
      "Cummins",
      "Caterpillar",
      "Onan",
      "ASCO",
      "Eaton",
      "Zenith",
      "Russelectric",
      "Deep Sea Electronics",
      "Woodward",
      "Murphy",
    ],
    certLogos: ["logo-egsa", "logo-worksafe-bc", "logo-asttbc", "logo-isn", "logo-comply-works", "logo-contractor-check"],
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
        title: "Fraser Valley hospital drill",
        tag: "Load bank testing",
        summary:
          "Full 850 kW resistive load bank test on a Kohler standby with parallel gear. Complete written report to satisfy CSA Z32 and health authority audit within 5 business days.",
        image:
          "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?w=1200&q=80&auto=format&fit=crop",
        alt: "Load bank testing setup at a hospital generator",
      },
      {
        title: "Data centre transfer switch",
        tag: "ATS overhaul",
        summary:
          "In-place refurbishment of a 2500A ASCO ATS during a scheduled 4-hour window. New contacts, control board, and a fully documented commissioning packet handed back.",
        image:
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80&auto=format&fit=crop",
        alt: "Automatic transfer switch inside an electrical enclosure",
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
        q: "What's included in a standard generator maintenance package?",
        a: "Quarterly visual + battery checks, semi-annual oil/filter/coolant service, annual load-bank testing, ATS exercise and inspection, fuel polishing as scheduled, and an emergency-call SLA. All photo-documented.",
      },
      {
        q: "Do you handle diesel fuel testing and polishing?",
        a: "Yes. Diesel goes bad in a tank — water, microbes, and sludge. We test annually and polish (filter) fuel on schedule so your generator actually starts when the grid drops.",
      },
      {
        q: "Can you upgrade or replace an ATS on a live building?",
        a: "Yes, with a written outage plan. Most ATS work happens in a scheduled 2–6 hour window with a portable generator hooked up as a temporary bridge for essential loads.",
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
        primer: {
          what:
            "A standby generator is the backup power system that automatically starts when the utility grid drops. It runs on diesel or natural gas and keeps life-safety systems, elevators, refrigeration, and life-critical equipment running until the grid comes back. In BC, hospitals, high-rises, and any building with an occupied basement are required to have one, and required by CSA C282 to test it annually with a load bank.",
          image: `${WM}/b/b4/Generac_SB-375_commercial_generator_Ann_Arbor_Michigan.JPG`,
          imageAlt: "Commercial standby diesel generator in a weatherproof enclosure outside a building",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "ATS", def: "Automatic Transfer Switch — the brain that senses grid loss and starts the generator in seconds." },
            { term: "Load bank", def: "A big resistor pack that fakes a building's electrical load so we can test the generator at full output." },
            { term: "CSA C282", def: "The Canadian standard that requires yearly load-bank testing of emergency generators." },
            { term: "Fuel polishing", def: "Filtering the diesel in the storage tank so it stays clean — old diesel grows sludge and won't start." },
            { term: "kW rating", def: "How much power the generator can produce. A single-family house needs ~20 kW; a hospital wing might need 750 kW." },
          ],
        },
      },
    ],
  },
  {
    slug: "electrical",
    name: "Woola Electrical",
    subtitle: "Commercial Electrical, EV & Lighting",
    tagline: "Every circuit accounted for.",
    description:
      "Full-service commercial and strata electrical — service upgrades, panel work, EV charger installations, LED lighting retrofits, and low-voltage data and security cabling.",
    contactPhone: "604-829-9160",
    contactEmail: "service@woolaelectrical.ca",
    intro:
      "Woola Electrical is our journeyman-led division for everything downstream of your main disconnect. FSR-certified for permit sign-off, BC Hydro Power Smart Alliance for rebate work, and a CleanBC EV Ready planner for strata charging rollouts.",
    heroImage:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Electric vehicle charging at a Level 2 charging station",
    accent: "from-brand-400/15 via-brand-500/5 to-transparent",
    heroKeywords: ["Electrical", "EV Charging", "LED Retrofit", "Low Voltage", "Power Smart", "FSR"],
    stats: [
      { value: "1,200+", label: "EV chargers commissioned", sub: "L2 + DCFC across BC" },
      { value: "18", label: "Licensed electricians", sub: "FSR-B and FSR-A on staff" },
      { value: "$1.6M", label: "Rebates captured for clients", sub: "BC Hydro + CleanBC in 2025" },
      { value: "24/7", label: "Emergency electrical", sub: "Contracted clients" },
    ],
    brands: [
      "Eaton",
      "Schneider Electric",
      "Siemens",
      "ABB",
      "Square D",
      "FLO",
      "ChargePoint",
      "Wallbox",
      "EVBox",
      "SWTCH",
      "Lutron",
      "Philips",
    ],
    certLogos: ["logo-bc-hydro", "logo-worksafe-bc", "logo-asttbc", "logo-isn", "logo-comply-works", "logo-contractor-check"],
    testimonial: {
      quote:
        "We needed a 240-stall strata EV rollout to work under a single meter — load managed, sub-billed, and rebate-eligible. Woola Electrical ran the whole thing including the BC Hydro paperwork.",
      author: "Ravi Sandhu",
      role: "Strata Council President",
      org: "Elmbridge Park Strata",
    },
    featured: [
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
      {
        title: "Downtown office LED retrofit",
        tag: "Lighting",
        summary:
          "12,000 sq ft LED troffer swap across four floors with Lutron dimming controls. BC Hydro Power Smart rebate captured, 63% reduction in lighting energy, 18-month payback.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
        alt: "Modern office with LED panel ceiling lighting",
      },
    ],
    faqs: [
      {
        q: "Are your electricians FSR-certified?",
        a: "Every electrical lead carries a Field Safety Representative ticket (FSR-B or FSR-A). We pull our own permits and sign off without coordinating with a third-party FSR.",
      },
      {
        q: "Can you handle EV-Ready planning for strata buildings?",
        a: "Yes. We're a CleanBC EV Ready certified planner. We model load management at the building level, design the L2/DCFC mix, and file the BC Hydro and CleanBC rebate paperwork.",
      },
      {
        q: "Do you install LED lighting under BC Hydro rebates?",
        a: "Yes — we're a BC Hydro Power Smart Alliance contractor. We complete pre-audit, install, and post-verification for rebate-eligible retrofits and submit the paperwork on your behalf.",
      },
      {
        q: "Do you do low-voltage data, security, and access control?",
        a: "Yes. We run structured cabling (Cat 6/6A), install access-control panels, and coordinate with security integrators. If you're already using a security provider, we cable and terminate, and hand over.",
      },
      {
        q: "Can you do arc-flash and short-circuit studies?",
        a: "Yes. We produce engineered arc-flash studies with appropriate labelling, coordination studies for downstream breakers, and infrared thermography baseline reports for insurance.",
      },
    ],
    services: [
      {
        slug: "electrical",
        name: "Commercial Electrical",
        short: "Service upgrades, panels, wiring",
        description:
          "Service upgrades, panel replacements, dedicated circuits, common-area work, infrared thermography, and arc-flash studies for strata and commercial buildings.",
        icon: Plug,
        highlights: [
          "FSR-certified field operators",
          "In-house permit and inspection",
          "Infrared thermography reporting",
          "Arc-flash and coordination studies",
        ],
        primer: {
          what:
            "Electrical services cover everything downstream of your main disconnect — the panel with the breakers, the wiring in the walls, and the outlets, switches, and lights it feeds. In a commercial building it also means the big grey cabinets called switchgear, which take utility voltage in and split it out to sub-panels around the building.",
          image: `${WM}/e/ef/OpenClosedPanelboardEEUU%28GE%29CloseupTop.jpg`,
          imageAlt: "Open commercial electrical panelboard showing circuit breakers",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Panel", def: "The metal box holding your breakers. Each breaker feeds one circuit." },
            { term: "Breaker", def: "A switch that trips off if the circuit pulls too much current, protecting the wire from overheating." },
            { term: "Switchgear", def: "The big commercial-scale breaker cabinets that take utility power in and distribute it." },
            { term: "FSR", def: "Field Safety Representative — the licence a lead electrician needs to pull permits and sign off in BC." },
            { term: "Arc-flash", def: "A sudden electrical explosion inside gear. Studies label your gear with the required safe-approach distance." },
          ],
        },
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
        primer: {
          what:
            "An EV charger is a box that plugs into your building's electrical system and delivers power to a car. Level 2 (240 volts, the same as your dryer) is what almost every home and strata uses — it fills a car overnight. DC fast charging is what you see at highway rest stops; it costs a lot more to install but tops a car up in 30 minutes. For strata buildings, the trick is load management — spreading power fairly across many stalls so the building doesn't need a costly service upgrade.",
          image: `${WM}/e/e9/Tesla_Wall_Connector_EV_charging_station_installed_outdoors_in_Newton_MA_1.jpg`,
          imageAlt: "Wall-mounted Level 2 EV charging station outside a residence",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Level 2", def: "240-volt AC charging. About 40 km of range per hour." },
            { term: "DC Fast Charge", def: "High-voltage DC charging. 100+ km of range in 10 minutes, but $50k+ install." },
            { term: "EV Ready", def: "A BC building-code standard: every stall wired or ready to be wired for future L2 charging." },
            { term: "Load management", def: "Software that shares limited amps between many chargers so no single stall hogs it." },
          ],
        },
      },
      {
        slug: "led-lighting",
        name: "LED Lighting Retrofits",
        short: "BC Hydro Power Smart",
        description:
          "Replace fluorescent troffers and legacy bulbs with efficient LED equivalents. Photometric studies, dimming controls, occupancy sensors, and BC Hydro rebate paperwork handled.",
        icon: Lightbulb,
        highlights: [
          "BC Hydro Power Smart Alliance",
          "Photometric design in-house",
          "Occupancy and daylight sensing",
          "Payback modelling for owners",
        ],
        primer: {
          what:
            "An LED lighting retrofit swaps older fluorescent or incandescent fixtures for LEDs. The math is simple — LEDs use 50–70% less energy for the same brightness and last 3–5x longer, so most jobs pay back in 18 to 36 months. BC Hydro Power Smart offers cash rebates that reduce the up-front cost by 30–50%. The most common commercial retrofit is a troffer: the rectangular panel light you see in office and hallway ceilings.",
          image: `${WM}/f/f0/LEDTroffer.jpg`,
          imageAlt: "Retrofit LED troffer panel installed in a suspended commercial ceiling",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Troffer", def: "The rectangular panel light in a drop ceiling — most common commercial fixture." },
            { term: "Lumens per watt", def: "How efficient a light is. LEDs hit 100+; fluorescents ~60; incandescent ~15." },
            { term: "Photometric study", def: "A computer model of how bright each spot in a room will be after the retrofit." },
            { term: "Occupancy sensor", def: "A wall or ceiling sensor that turns lights off when a room is empty — often 20% more savings." },
          ],
        },
      },
      {
        slug: "low-voltage",
        name: "Low Voltage & Data",
        short: "Structured cabling & security",
        description:
          "Structured cabling (Cat 6/6A), data racks, access control wiring, camera runs, PoE and fiber trunks, and coordination with your security or IT integrator.",
        icon: Cable,
        highlights: [
          "Structured cabling to TIA-568",
          "Access control terminations",
          "Camera and PoE runs",
          "Fiber backbone installs",
        ],
        primer: {
          what:
            "Low-voltage covers the wiring that carries data, video, and small control signals rather than lighting or power — Cat 6 network cable, security camera runs, door access wiring, fibre-optic backbones. It sits inside walls and ceilings but usually terminates at a data rack (the tall cabinet in a small server closet). PoE means Power over Ethernet — one cable that carries data and just enough power to run a camera or access point.",
          image: `${WM}/e/ea/Server_Rack_with_Spaghetti-Like_Mass_of_Network_Cables.jpg`,
          imageAlt: "Server rack with structured cabling and patch cords",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Cat 6 / 6A", def: "The blue or white network cable behind every wall jack. Cat 6A handles 10 Gbps." },
            { term: "Structured cabling", def: "Neat, labelled, standards-based cabling — every cable traceable from jack to rack." },
            { term: "PoE", def: "Power over Ethernet — one cable carries both data and power to a camera or Wi-Fi access point." },
            { term: "Access control", def: "The card readers and controllers that lock or unlock doors electronically." },
          ],
        },
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
        primer: {
          what:
            "Building maintenance is planned, recurring work that keeps a property in good shape — inspections, cleaning, small repairs, and life-safety checks. Most strata and commercial buildings sign an annual PM (preventative maintenance) contract with a fixed scope and price. The alternative — waiting until something breaks — always costs more and shows up at the worst time.",
          image: `${WM}/e/ef/Modern-Trade-Painter.jpg`,
          imageAlt: "A professional trade painter performing interior building maintenance",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "PM", def: "Preventative maintenance — scheduled inspections and small repairs done before failures." },
            { term: "Work order", def: "A single line item of work — dispatched, tracked, photographed, and closed out." },
            { term: "Condition report", def: "A visual + written summary of an asset's health after an inspection." },
            { term: "Life-safety", def: "Fire alarms, sprinklers, emergency lighting — the stuff that keeps people alive in a crisis." },
          ],
        },
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
        primer: {
          what:
            "The building envelope is the outer shell — roof, walls, windows, and sealants — that keeps water and air where they belong. On flat commercial roofs the surface is usually a rubbery membrane like EPDM or TPO. When a joint or a membrane fails, water gets in and finds framing, insulation, and drywall to ruin. Envelope work is finding those failures before they turn into a $200k restoration.",
          image: `${WM}/1/14/FinishedEPDMcoveredRoof.jpg`,
          imageAlt: "Flat commercial roof covered with EPDM membrane roofing",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "EPDM / TPO", def: "Two common rubbery membranes for flat roofs. EPDM is black; TPO is usually white." },
            { term: "Sealant joint", def: "The caulking line between two building materials. Fails every 10–15 years." },
            { term: "Traffic deck", def: "The waterproof membrane on a parkade or plaza deck that cars drive on." },
            { term: "Tie-off / anchor", def: "The fall-protection point on a roof so workers can be tied off safely." },
          ],
        },
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
        primer: {
          what:
            "Construction and renovation work covers new or reconfigured interior space — tenant improvements in a leased office, an amenity rebuild in a tower, or a suite reno. Most of the work happens after framing and drywall go up. A tenant improvement (TI) is when a landlord finishes bare shell space to a tenant's spec. Every project we run at $250k+ has a Gold Seal Certified project manager coordinating trades, permits, and inspections.",
          image: `${WM}/b/bb/Drywall_installation_in_unidentified_home_%2810926427913%29.jpg`,
          imageAlt: "Interior construction — installing drywall on framed walls",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "TI", def: "Tenant Improvement — the fit-out of a leased space to a tenant's requirements." },
            { term: "Gold Seal PM", def: "The Canadian Construction Association's project manager certification." },
            { term: "Permit", def: "The city-issued authorization to build. Required for structural, plumbing, gas, and electrical." },
            { term: "Substantial completion", def: "The formal milestone where a project is usable, even if minor items remain." },
          ],
        },
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
        primer: {
          what:
            "Property services is the catch-all for the small stuff — painting a hallway, fixing a lobby door closer, replacing a fence board, hanging new numerals on suite doors. These are the jobs too small to bid as a project but too many to ignore. We dispatch them same-week and close each one with a photo-documented work order that shows before, during, and after.",
          image: `${WM}/e/ef/Modern-Trade-Painter.jpg`,
          imageAlt: "Trade painter refreshing interior walls in a building common area",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Work order", def: "A single dispatched task with a scope, price, and closeout photos." },
            { term: "Same-week dispatch", def: "Non-emergency requests scheduled within the same week for contracted clients." },
            { term: "Common-area refresh", def: "Paint, hardware, and small carpentry updates in lobbies and hallways." },
          ],
        },
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
