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
  Gauge,
  Fuel,
  Thermometer,
  Fan,
  AirVent,
  Waves,
  ClipboardCheck,
  RefreshCw,
  Wrench,
  Siren,
  Network,
  Hammer,
  PlugZap,
  ScanLine,
  Droplet,
  KeyRound,
  Vault,
  House,
  Server,
} from "lucide-react";
import { cities } from "./cities";
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
  primer?: ServicePrimer;
  /** Surfaced in the mega menu and division-card six-item lists. */
  featured?: boolean;
  /** Slug of a parent service. Child pages are hidden from top-level grids and menus. */
  parent?: string;
};

export type DivisionStat = { value: string; label: string; sub?: string };
export type DivisionFAQ = { q: string; a: string };

export type Division = {
  slug: "mechanical" | "power" | "electrical" | "build";
  name: string;
  subtitle: string;
  /** Exact six-item list Brett specified for the woola.ca homepage cards. */
  homepageChips?: string[];
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  /** Looping promo film (muted 1080p MP4 in /public/videos; poster is heroImage). */
  video?: string;
  contactPhone: string;
  contactEmail: string;
  intro: string;
  accent: string;
  heroKeywords: string[];
  stats: DivisionStat[];
  brands: { name: string; domain?: string; src?: string }[];
  certLogos: string[];
  faqs: DivisionFAQ[];
  services: Service[];
};


export const divisions: Division[] = [
  {
    slug: "mechanical",
    name: "Woola Mechanical",
    subtitle: "HVAC, Plumbing & Gas",
    homepageChips: ["HVAC", "Plumbing", "Gas Services", "Refrigeration", "Commercial", "Residential"],
    tagline: "HVAC, plumbing, gas and refrigeration.",
    description:
      "Full-spectrum mechanical services for strata, commercial and high-end residential properties, from heat-pump retrofits to industrial refrigeration.",
    contactPhone: "604-732-1441",
    contactEmail: "dispatch@woolamech.ca",
    intro:
      "HVAC, hydronic, plumbing, gas, and refrigeration service for strata, commercial, and residential buildings across Metro Vancouver.",
    heroImage: "/field/01-08-2025-surrey-mech-1.jpg",
    heroImageAlt: "Woola Mechanical technicians working on copper piping in a mechanical room",
    video: "/videos/mechanical.mp4",
    accent: "from-brand-500/15 via-brand-400/5 to-transparent",
    heroKeywords: ["HVAC", "Plumbing", "Gas", "Refrigeration", "Heat Pumps", "Hydronics"],
    // Only figures Woola can stand behind indefinitely: service-model facts and
    // counts derived from site data (see lib/cities.ts). Headcount, assets under
    // contract, response-time and first-visit-fix figures come back in here
    // once Woola supplies audited numbers it is comfortable maintaining.
    stats: [
      { value: "24/7", label: "Emergency dispatch", sub: "Contracted clients, Metro Vancouver" },
      { value: `${cities.length}+`, label: "Municipalities served", sub: "Abbotsford to Whistler" },
      { value: "4", label: "Trades, one team", sub: "HVAC, plumbing, gas, refrigeration" },
      { value: "1", label: "Point of contact", sub: "Your dispatcher, one text thread" },
    ],
    brands: [
      { name: "Mitsubishi Electric", domain: "mitsubishielectric.com", src: "/brand/logos/mitsubishi-electric.png" },
      { name: "Daikin", domain: "daikin.com", src: "/brand/logos/daikin.png" },
      { name: "Carrier", domain: "carrier.com", src: "/brand/logos/carrier.png" },
      { name: "Trane", domain: "trane.com", src: "/brand/logos/trane.png" },
      { name: "Viessmann", domain: "viessmann.us", src: "/brand/logos/viessmann.png" },
      { name: "IBC Boilers", domain: "ibcboiler.com", src: "/brand/logos/ibc-boilers.png" },
      { name: "Lochinvar", domain: "lochinvar.com", src: "/brand/logos/lochinvar.png" },
      { name: "Rinnai", domain: "rinnai.us", src: "/brand/logos/rinnai.png" },
      { name: "Navien", domain: "navieninc.com", src: "/brand/logos/navien.png" },
      { name: "Honeywell", domain: "honeywell.com", src: "/brand/logos/honeywell.png" },
      { name: "Belimo", domain: "belimo.com", src: "/brand/logos/belimo.png" },
      { name: "Grundfos", domain: "grundfos.com", src: "/brand/logos/grundfos.png" },
    ],
    certLogos: ["logo-teca", "logo-worksafe-bc", "logo-asttbc", "logo-hpcn", "logo-pama-member", "logo-interprovincial-standard"],
    faqs: [
      {
        q: "Do you service residential or only commercial mechanical systems?",
        a: "Both. We service strata, commercial, and high-end residential. Roughly 60% of our work is multi-residential strata, 30% commercial, and 10% high-end single-family.",
      },
      {
        q: "Are your technicians licensed for both gas and refrigeration?",
        a: "Our techs hold Class A or B gas tickets and ODP refrigeration trade qualifications. About a third are dual-ticketed, which means one truck-roll handles work that competitors split across two visits.",
      },
      {
        q: "Can you handle CleanBC and FortisBC rebate paperwork?",
        a: "Yes. We're a registered CleanBC Better Homes contractor and a FortisBC trade ally. Rebate paperwork is filed in-house, so you don't chase it.",
      },
      {
        q: "How fast is your emergency response?",
        a: "Contracted clients in Metro Vancouver see a sub-4-hour response 24/7. For non-contracted callers we aim for same-day, depending on dispatch load.",
      },
      {
        q: "Do you offer fixed-price maintenance contracts?",
        a: "Yes. Most strata and commercial clients sign annual fixed-price PM contracts covering inspections, filter changes, water treatment, and combustion analysis. We then quote remedial work separately at agreed unit rates.",
      },
    ],
    services: [
      {
        slug: "hvac",
        name: "HVAC & Heat Pumps",
        short: "Heating, cooling, ventilation",
        featured: true,
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
            "HVAC stands for Heating, Ventilation, and Air Conditioning. It's the equipment that heats, cools, and moves fresh air through your building. In a strata that might be a rooftop unit on top of the building, a furnace in a mechanical room, or a heat pump on your balcony. A ductless mini-split is the small wall-mounted unit you see in newer suites. It heats and cools without any ductwork.",
          image: "/field/07-03-2024-crane-26.jpg",
          imageAlt: "Rooftop unit being crane-lifted onto a roof",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Heat pump", def: "A single box that heats in winter and cools in summer by moving heat, not burning fuel." },
            { term: "Furnace", def: "Burns natural gas to blow hot air through ducts. Only heats." },
            { term: "RTU", def: "Rooftop unit: a packaged commercial HVAC box that sits on the roof." },
            { term: "Ductless mini-split", def: "A wall-mounted head paired with an outdoor condenser. No ducts needed." },
            { term: "VRF", def: "Variable refrigerant flow: a big-building version of mini-splits that heats and cools different zones at once." },
            { term: "Ton / BTU", def: "How heating and cooling power is measured. A typical suite needs about one ton (12,000 BTU) of cooling." },
            { term: "Condenser", def: "The outdoor half of an AC or heat pump: the box with the big fan." },
            { term: "MERV filter", def: "The furnace filter rating. Higher MERV catches finer dust. Most buildings run MERV 8–13." },
            { term: "Make-up air unit", def: "A rooftop fan that pushes fresh air into hallways so suites don't go stale." },
            { term: "Refrigerant", def: "The fluid that moves heat through the system. Older R-22 setups are being phased out for cleaner types." },
          ],
        },
      },
      {
        slug: "heating-systems",
        name: "Heating Systems",
        short: "Boilers, hydronics, radiant",
        parent: "hvac",
        description:
          "Commercial boiler plants, heat pumps, hydronic distribution, unit heaters, and radiant systems. Maintained, diagnosed, optimized, and replaced before they fail in season.",
        icon: Thermometer,
        highlights: [
          "Combustion analysis and system optimization",
          "Pumps, expansion tanks, heat exchangers",
          "Boiler plant retrofits and capital upgrades",
          "Emergency heating repairs",
        ],
      },
      {
        slug: "cooling-systems",
        name: "Cooling Systems",
        short: "RTUs, chillers, VRF",
        parent: "hvac",
        description:
          "Rooftop units, chillers and cooling towers, condensing units, and VRF systems. Seasonal start-ups, refrigerant leak detection, and capital equipment upgrades.",
        icon: Fan,
        highlights: [
          "All major RTU manufacturers serviced",
          "Air-cooled and water-cooled chiller plants",
          "VRF / VRV diagnostics and commissioning support",
          "Emergency cooling repairs",
        ],
      },
      {
        slug: "ventilation-iaq",
        name: "Ventilation & Air Quality",
        short: "AHUs, MAUs, exhaust, IAQ",
        parent: "hvac",
        description:
          "Air handling units, make-up air, exhaust fans, ERVs and HRVs, parkade ventilation and gas detection, building pressurization, and airflow balancing.",
        icon: AirVent,
        highlights: [
          "Parkade gas detection and code compliance",
          "Airflow diagnostics and balancing",
          "Filtration and IAQ improvements",
          "ERV / HRV service programs",
        ],
      },
      {
        slug: "plumbing",
        name: "Plumbing",
        short: "Domestic water systems",
        featured: true,
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
            "Plumbing is the network of pipes and fixtures that brings clean water into your building and takes waste water out. It covers your water heater (either a tank in a closet or a tankless unit on the wall), your drains, and the shut-offs behind every sink and toilet. A backflow preventer is a small brass valve that stops dirty water from flowing backwards into the drinking supply. Cities require them to be tested every year.",
          image: "/field/01-08-2025-surrey-mech-13.jpg",
          imageAlt: "Technician working on copper water piping",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Tank water heater", def: "The tall cylinder in a closet that stores 40–75 gallons of hot water." },
            { term: "Tankless", def: "A small wall box that heats water only when you turn on a tap, with no storage." },
            { term: "Backflow preventer", def: "A brass valve that stops dirty water from siphoning into the drinking supply." },
            { term: "Drain stack", def: "The vertical pipe that carries wastewater from every floor down to the sewer." },
            { term: "Re-pipe", def: "Replacing old failing pipe (often copper or galvanized) throughout a building or suite." },
            { term: "Pressure reducing valve", def: "A bell-shaped valve that drops street water pressure to a safe level. When it fails, taps bang and fixtures drip." },
            { term: "Recirculation line", def: "A loop that keeps hot water moving so upper floors get hot water in seconds, not minutes." },
            { term: "Sump pump", def: "The pump in a parkade pit that keeps groundwater out of the building." },
            { term: "P-trap", def: "The U-bend under every sink. The water sitting in it blocks sewer gas from coming up." },
            { term: "Water hammer", def: "The bang in the walls when a valve slams shut. A small arrestor absorbs the shock." },
          ],
        },
      },
      {
        slug: "drainage",
        name: "Drainage",
        short: "Drains, jetting, CCTV",
        featured: true,
        description:
          "Commercial drain cleaning, hydro jetting, CCTV camera inspections, leak detection, hydrovac excavation, catch basins, and sewer and storm maintenance.",
        icon: Waves,
        highlights: [
          "Hydro jetting and root removal",
          "CCTV inspections with recorded footage",
          "Hydrovac daylighting for repairs",
          "Preventative drain programs",
        ],
      },
      {
        slug: "gas",
        name: "Gas Services",
        short: "Licensed gas fitting",
        featured: true,
        description:
          "Boilers, hydronic systems, rooftop units, restaurant lines, fireplaces, and BBQ rough-ins, installed and maintained by ticketed Class A and B gas fitters.",
        icon: Flame,
        highlights: [
          "Class A & B gas fitters on staff",
          "Boiler tune-ups and combustion analysis",
          "Hydronic system commissioning",
          "FortisBC partner contractor",
        ],
        primer: {
          what:
            "Gas services install and maintain natural gas lines and everything that burns them: boilers, fireplaces, ranges, patio hookups, and rooftop heaters. A condensing boiler is a wall-hung box that heats water for hot-water heating loops; the newer models are up to 96% efficient. Only licensed Class A and Class B gas fitters can legally do this work in BC.",
          image: "/field/01-08-2025-surrey-mech-10.jpg",
          imageAlt: "Technician at a boiler's copper and gas piping",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Condensing boiler", def: "A high-efficiency wall-hung box that burns gas to heat water for hot-water heat loops." },
            { term: "Class A ticket", def: "The higher gas licence, required for commercial and larger residential work." },
            { term: "Combustion analysis", def: "A digital meter check to confirm a burner is running clean and efficient." },
            { term: "Rough-in", def: "The initial pipe run before drywall goes up: the gas line to your BBQ or range." },
            { term: "BTU load", def: "The total gas demand of your appliances. It decides the pipe size a fitter must run." },
            { term: "Direct vent", def: "A sealed two-pipe setup that pulls outdoor air in and pushes exhaust out. No chimney needed." },
            { term: "Hydronics", def: "Heating with hot water pumped through pipes: baseboards, in-floor loops, and rooftop coils." },
            { term: "Gas pressure test", def: "A licensed leak check on the piping system, required after most alterations." },
            { term: "Snowmelt system", def: "A heated glycol loop under a driveway or ramp that keeps it ice-free in winter." },
          ],
        },
      },
      {
        slug: "refrigeration",
        name: "Refrigeration",
        short: "Commercial cooling",
        featured: true,
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
            "Commercial refrigeration is the cooling equipment used by grocers, restaurants, and labs. A walk-in cooler is exactly what it sounds like: a room-sized insulated box, usually with the compressor rack on the roof or in a back room. Newer systems use A2L or natural refrigerants that are less harmful to the atmosphere than the older R-22 refrigerant, which is being phased out.",
          image: "/field/02-24-2025-dan-new-west-9.jpg",
          imageAlt: "Overhead grooved glycol piping in an industrial facility",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Walk-in", def: "A room-sized insulated cooler or freezer with a heavy door and a separate compressor." },
            { term: "Compressor rack", def: "The pump and motor assembly that makes the refrigerant cold. Usually on the roof." },
            { term: "Glycol loop", def: "A closed circuit of chilled glycol that carries cold from a plant to many display cases." },
            { term: "Refrigerant recovery", def: "Legally required capture of old refrigerant into a cylinder. You can't vent it to the air." },
            { term: "Reach-in", def: "The standard upright commercial fridge or freezer with doors, the workhorse of every kitchen." },
            { term: "Condensing unit", def: "The compressor-and-fan package that makes the cold. Usually on the roof or behind the building." },
            { term: "Defrost cycle", def: "A timed heat cycle that melts frost off the coils. When it fails, cases ice up and then warm up." },
            { term: "Case controller", def: "The small digital brain on each display case that holds temperature and logs alarms." },
            { term: "R-22 phase-out", def: "The old refrigerant is banned from new supply, so aging systems either retrofit or replace." },
          ],
        },
      },
      {
        slug: "preventative-maintenance",
        name: "Preventative Maintenance",
        short: "Planned mechanical care",
        featured: true,
        description:
          "Scheduled inspections, servicing, and digital condition reporting across every mechanical system in the building, built around a baseline and a plan, not a checklist.",
        icon: ClipboardCheck,
        highlights: [
          "Program built from an equipment baseline",
          "Digital reports with prioritized deficiencies",
          "One team across HVAC, plumbing, gas, refrigeration",
          "Feeds capital planning and budgeting",
        ],
      },
      {
        slug: "retrofits",
        name: "Retrofits & Capital Projects",
        short: "Replacements, planned right",
        description:
          "Boiler, RTU, chiller, and plumbing infrastructure replacements planned from maintenance history, competitively priced, and executed in occupied buildings.",
        icon: RefreshCw,
        highlights: [
          "Repair-versus-replace cases you can defend",
          "Scheduled around occupancy, not emergencies",
          "In-house electrical and construction coordination",
          "Commissioning and closeout documentation",
        ],
      },
    ],
  },
  {
    slug: "power",
    name: "Woola Power",
    subtitle: "Standby Generators & Backup Power",
    homepageChips: [
      "Inspections & Maintenance",
      "Repairs, Service, Troubleshooting",
      "Fuel Services",
      "Generator Sales & Replacement",
      "Emergency Service",
      "Electrical Contracting",
    ],
    tagline: "Generator service, testing and backup power.",
    description:
      "Commercial critical power partner: generator maintenance and inspections, CSA C282 testing, repairs, fuel services, replacements, and 24/7 emergency response for BC's most critical facilities.",
    contactPhone: "604-829-9156",
    contactEmail: "service@woolapower.ca",
    intro:
      "Woola Power was built around the most demanding electrical asset in any building: the emergency standby generator.",
    heroImage: "/field/07-28-2026-power-1.jpg",
    heroImageAlt: "Cummins standby diesel generator in a Woola-serviced generator room",
    video: "/videos/power.mp4",
    accent: "from-ink-800/10 via-brand-500/10 to-transparent",
    heroKeywords: ["Generators", "Standby Power", "Load Bank", "CSA C282", "Transfer Switch", "Fuel Polishing"],
    stats: [
      { value: "3", label: "OEMs factory-authorized", sub: "Generac, Kohler, Cummins" },
      { value: "CSA C282", label: "Annual testing and reporting", sub: "Inspections, load bank, fuel" },
      { value: "Own", label: "Load banks", sub: "No third-party rental or scheduling" },
      { value: "24/7", label: "Emergency generator response", sub: "Every day of the year" },
    ],
    brands: [
      { name: "Generac", domain: "generac.com", src: "/brand/logos/generac.png" },
      { name: "Kohler", domain: "kohler.com", src: "/brand/logos/kohler.png" },
      { name: "Cummins", domain: "cummins.com", src: "/brand/logos/cummins.png" },
      { name: "Caterpillar", domain: "cat.com", src: "/brand/logos/caterpillar.png" },
      { name: "Onan", domain: "cummins.com", src: "/brand/logos/onan.png" },
      { name: "ASCO", domain: "ascopower.com", src: "/brand/logos/asco.png" },
      { name: "Eaton", domain: "eaton.com", src: "/brand/logos/eaton.png" },
      { name: "Zenith", domain: "zenithcontrols.com", src: "/brand/logos/zenith.png" },
      { name: "Russelectric", domain: "russelectric.com", src: "/brand/logos/russelectric.png" },
      { name: "Deep Sea Electronics", domain: "deepseaelectronics.com", src: "/brand/logos/deep-sea-electronics.png" },
      { name: "Woodward", domain: "woodward.com", src: "/brand/logos/woodward.png" },
      { name: "Murphy", domain: "fwmurphy.com", src: "/brand/logos/murphy.png" },
    ],
    certLogos: ["logo-egsa", "logo-worksafe-bc", "logo-asttbc", "logo-isn", "logo-comply-works", "logo-contractor-check"],
    faqs: [
      {
        q: "Which generator brands do you service?",
        a: "Generac, Kohler, and Cummins make up most of our work, and we routinely service Caterpillar and Onan units as well. Our techs carry brand-specific diagnostic software.",
      },
      {
        q: "Do you do load-bank testing in-house?",
        a: "Yes. We own and operate our own resistive and reactive load banks and bring in larger units when a site calls for it, so annual CSA C282 testing runs on our schedule, not a rental company's.",
      },
      {
        q: "What's included in a standard generator maintenance package?",
        a: "Quarterly visual + battery checks, semi-annual oil/filter/coolant service, annual load-bank testing, ATS exercise and inspection, fuel polishing as scheduled, and an emergency-call SLA. All photo-documented.",
      },
      {
        q: "Do you handle diesel fuel testing and polishing?",
        a: "Yes. Diesel goes bad in a tank: water, microbes, and sludge. We test annually and polish (filter) fuel on schedule so your generator actually starts when the grid drops.",
      },
      {
        q: "Can you upgrade or replace an ATS on a live building?",
        a: "Yes, with a written outage plan. Most ATS work happens in a scheduled 2–6 hour window with a portable generator hooked up as a temporary bridge for essential loads.",
      },
    ],
    services: [
      {
        slug: "maintenance-inspections",
        name: "Maintenance & Inspections",
        short: "Generator PM programs",
        featured: true,
        description:
          "Scheduled preventative maintenance and full-system inspections for standby generators: engine, cooling, fuel, batteries, transfer switch, and controls, photo-documented every visit.",
        icon: ClipboardCheck,
        highlights: [
          "Complete-system inspections, not start-stop checks",
          "Digital reports with prioritized deficiencies",
          "Battery, fuel, and ATS failure points covered",
          "Supports reserve fund and lifecycle planning",
        ],
      },
      {
        slug: "repairs-troubleshooting",
        name: "Repairs & Troubleshooting",
        short: "Root-cause generator service",
        featured: true,
        description:
          "No-starts, alarm faults, shutdowns, and failed tests diagnosed to root cause with manufacturer procedures, then repaired and verified under load.",
        icon: Wrench,
        highlights: [
          "Structured diagnostics before parts swapping",
          "Engine, electrical, ATS, and controls repair",
          "Diagnostic software for the major generator brands",
          "Functional testing after every repair",
        ],
      },
      {
        slug: "generators",
        name: "Generator Replacement & Retrofits",
        short: "Sales, installs, modernization",
        featured: true,
        description:
          "Aging or failed generator? New building? We assess, size, and install standby generators, retrofit controls and transfer switches, and manage the full project from concrete pad to commissioning.",
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
          image: "/field/07-28-2026-power-1.jpg",
          imageAlt: "Commercial Cummins standby generator in a generator room",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "ATS", def: "Automatic Transfer Switch: the brain that senses grid loss and starts the generator in seconds." },
            { term: "Load bank", def: "A big resistor pack that fakes a building's electrical load so we can test the generator at full output." },
            { term: "CSA C282", def: "The Canadian standard that requires yearly load-bank testing of emergency generators." },
            { term: "Fuel polishing", def: "Filtering the diesel in the storage tank so it stays clean. Old diesel grows sludge and won't start." },
            { term: "kW rating", def: "How much power the generator can produce. A single-family house needs ~20 kW; a hospital wing might need 750 kW." },
            { term: "Standby vs portable", def: "A standby unit is permanently wired and starts itself. A portable is wheeled out and plugged in." },
            { term: "Genset", def: "Short for generator set: the engine and alternator packaged together." },
            { term: "Transfer time", def: "The few seconds between the grid dropping and your generator picking up the load." },
            { term: "Diesel vs natural gas", def: "Diesel stores energy on-site but needs fuel care; natural gas runs as long as the utility line stays up." },
            { term: "Weekly exercise", def: "A short automatic self-test run, so problems show up on a Tuesday morning, not during an outage." },
          ],
        },
      },
      {
        slug: "c282-testing",
        name: "CSA C282 & Load Bank Testing",
        short: "Annual compliance testing",
        description:
          "Annual CSA C282 emergency generator inspections and resistive load bank testing, with the compliance report your AHJ, insurer, and strata council actually need on file.",
        icon: Gauge,
        highlights: [
          "Own fleet of load banks, no rental delays",
          "C282 reports filed and archived for you",
          "Wet-stacking diagnosis and correction",
          "Deficiency quotes within 48 hours",
        ],
        primer: {
          what:
            "CSA C282 is the Canadian standard for emergency power in buildings. If your building has an emergency generator, the standard requires a full annual test under real load, not just letting it idle. A load bank is a portable resistor pack that safely fakes your building's electrical demand so the generator can be pushed to full output and proven, without touching your live power. Skip the test and you risk failed insurance claims, AHJ orders, and a generator that dies the one night it matters.",
          image: "/field/07-28-2026-power-9.jpg",
          imageAlt: "Woola Power technician testing a standby generator",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "CSA C282", def: "The Canadian standard for emergency electrical power supply in buildings. It mandates annual full-load testing." },
            { term: "Load bank", def: "A big resistor pack that simulates your building's load so the generator can be tested at full output." },
            { term: "AHJ", def: "Authority Having Jurisdiction: the fire department or safety authority that can demand your test records." },
            { term: "Wet stacking", def: "Unburned fuel building up in a diesel that only ever idles. Full-load testing burns it off." },
            { term: "Two-hour test", def: "The annual C282 run: stepped loading up to full nameplate rating, logged at intervals." },
            { term: "Monthly exercise", def: "The lighter on-load run the standard requires between annual tests." },
            { term: "Test log", def: "The record book of every run, reading, and repair, and the first thing an inspector or adjuster asks for." },
            { term: "Deficiency report", def: "The written list of anything that failed or drifted out of spec, with a repair quote attached." },
          ],
        },
      },
      {
        slug: "transfer-switches",
        name: "Transfer Switches & Controls",
        short: "ATS service & upgrades",
        description:
          "Automatic transfer switch inspection, testing, repair, and replacement, plus generator controllers, remote annunciators, and paralleling gear for multi-unit plants.",
        icon: Plug,
        highlights: [
          "ASCO, Zenith, Cummins, Generac ATS service",
          "Infrared scans on every inspection",
          "Controller retrofits for obsolete gear",
          "Remote monitoring setup",
        ],
        primer: {
          what:
            "The automatic transfer switch, or ATS, is the decision-maker of your backup power system. It watches utility power around the clock; the moment the grid drops, it signals the generator to start and flips the building's critical circuits over, usually in under ten seconds. When power returns, it transfers back and cools the generator down. Most backup power failures we investigate turn out to be a transfer switch problem, not a generator problem, which is why it deserves its own inspection.",
          image: "/field/07-28-2026-electrical-10.jpg",
          imageAlt: "Woola technician testing wiring inside an automatic transfer switch",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "ATS", def: "Automatic Transfer Switch. It senses grid loss, starts the generator, and moves the load over." },
            { term: "Open vs closed transition", def: "Open breaks power for a blink during transfer; closed overlaps both sources for zero interruption." },
            { term: "Bypass isolation", def: "An ATS design that lets us service the switch without killing power to the building." },
            { term: "Annunciator", def: "The small remote panel, often at the concierge desk, that shows generator status and alarms." },
            { term: "Paralleling gear", def: "Switchgear that lets multiple generators share one building load as a coordinated plant." },
            { term: "Exercise clock", def: "The timer inside the ATS that runs the generator's weekly self-test automatically." },
            { term: "Infrared scan", def: "A thermal camera pass over lugs and contacts. Hot spots show loose connections before they fail." },
            { term: "Retransfer delay", def: "The wait after utility power returns before switching back, so a flickering grid doesn't bounce your building." },
          ],
        },
      },
      {
        slug: "fuel-systems",
        name: "Fuel Services",
        short: "Diesel quality & tank service",
        featured: true,
        description:
          "Diesel fuel polishing, tank cleaning and inspection, day tank and transfer pump service, fuel sampling with lab analysis, and biocide treatment programs.",
        icon: Fuel,
        highlights: [
          "On-site polishing rigs, no downtime",
          "Lab fuel analysis with written results",
          "Tank integrity inspections",
          "Annual fuel programs for critical sites",
        ],
        primer: {
          what:
            "Diesel goes bad. Sitting in a tank for a year or two, it absorbs water, grows microbial sludge, and oxidizes, and the first time anyone finds out is when the generator starves mid-outage. Fuel polishing pumps the tank contents through fine filters and water separators until the fuel meets spec again, without replacing it. For buildings that depend on stored diesel, an annual sample-and-polish program costs a fraction of one emergency fuel swap, or one failed outage.",
          image: "/field/07-28-2026-power-5.jpg",
          imageAlt: "Woola Power technician beside a standby generator",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Fuel polishing", def: "Circulating stored diesel through filters and water separators until it's clean enough to burn reliably." },
            { term: "Diesel bug", def: "Microbes that live at the fuel-water interface and grow sludge that clogs filters." },
            { term: "Day tank", def: "The small tank beside the generator that gravity-feeds the engine, refilled from main storage by pumps." },
            { term: "Fuel sampling", def: "Pulling fuel from the tank bottom for lab analysis: water, sediment, and microbial counts." },
            { term: "Biocide", def: "A treatment dosed into the tank to kill microbial growth before it becomes sludge." },
            { term: "Water separator", def: "A filter stage that pulls suspended and free water out of diesel. Water is what lets the bug grow." },
            { term: "Tank integrity test", def: "Inspection of the tank, lines, and containment for leaks and corrosion, required for older tanks." },
            { term: "Runtime capacity", def: "How many hours your stored fuel actually buys you at full load. C282 sets the minimum for your building class." },
          ],
        },
      },
      {
        slug: "ups-battery",
        name: "UPS & Battery Systems",
        short: "Uninterruptible power",
        description:
          "UPS supply, installation, battery replacement, and preventative maintenance for server rooms, access control, fire panels, and elevator recall systems.",
        icon: BatteryCharging,
        highlights: [
          "APC, Eaton, Vertiv service",
          "Battery replacement programs",
          "Runtime testing and reporting",
          "Bridges the gap until the generator picks up",
        ],
        primer: {
          what:
            "A generator takes about ten seconds to start. For servers, access control, cameras, and fire panels, ten seconds of dead power is a crash, a locked door, or a false alarm. A UPS (uninterruptible power supply) is a battery system that carries those critical loads through the gap instantly, then hands off to the generator or shuts equipment down gracefully. The batteries inside are consumables: they quietly age out in three to five years, which is why UPS units fail exactly when they're needed unless someone is testing them.",
          image: "/field/07-28-2026-power-11.jpg",
          imageAlt: "Generator battery bank under inspection",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "UPS", def: "Uninterruptible power supply: a battery unit that holds critical loads up with zero interruption." },
            { term: "Runtime", def: "How long the batteries can carry the load, usually sized to bridge the generator start, not to run for hours." },
            { term: "VRLA vs lithium", def: "Sealed lead-acid batteries are cheaper but last 3–5 years; lithium costs more and lasts 8–10." },
            { term: "Online double-conversion", def: "The commercial-grade UPS type that rebuilds clean power continuously, with no transfer blink at all." },
            { term: "Battery string", def: "Batteries wired in series inside the UPS. One weak cell drags down the whole string." },
            { term: "Runtime test", def: "A controlled discharge that proves actual capacity, the only way to catch aging batteries early." },
            { term: "Elevator recall", def: "The code-required feature that brings elevators to the lobby on fire alarm, often UPS-backed." },
            { term: "Graceful shutdown", def: "The UPS telling servers to save and power off cleanly before the batteries run dry." },
          ],
        },
      },
      {
        slug: "emergency-service",
        name: "Emergency Service",
        short: "24/7 generator response",
        featured: true,
        description:
          "When a generator won't start or a building is running on backup power, our dispatch triages by phone, sends a technician, and keeps you informed through to the follow-up report.",
        icon: Siren,
        highlights: [
          "24/7 dispatch, every day of the year",
          "Phone triage before the truck rolls",
          "Temporary power options when repairs take time",
          "Written follow-up report after every callout",
        ],
      },
      {
        slug: "integrated-contracting",
        name: "Integrated Contracting",
        short: "Turnkey power projects",
        featured: true,
        description:
          "Generator and electrical infrastructure projects delivered by one team: electrical, mechanical, civil, concrete, and commissioning coordinated in-house across Woola's divisions.",
        icon: Network,
        highlights: [
          "One proposal, one project team",
          "Self-performed civil, concrete, and electrical",
          "ATS, switchgear, and distribution upgrades",
          "Ongoing service after commissioning",
        ],
      },
      {
        slug: "data-centres",
        name: "Data Centre Power",
        short: "Generators, UPS, and fuel for data halls",
        description:
          "Standby generator, transfer switch, UPS, and fuel system service for data centres and server rooms, with the testing and reporting an uptime commitment depends on.",
        icon: Server,
        highlights: [
          "Multi-unit and paralleled generator plants",
          "CSA C282 and load-bank testing at scale",
          "UPS and battery string programs",
          "Fuel polishing and runtime verification",
        ],
      },
    ],
  },
  {
    slug: "electrical",
    name: "Woola Electrical",
    subtitle: "Commercial Electrical, EV & Lighting",
    homepageChips: [
      "Service & Maintenance",
      "Tenant Improvements",
      "Lighting Upgrades",
      "Electrical Car Charging",
      "Panel & Service Upgrades",
      "Infrared Scanning",
    ],
    tagline: "Commercial electrical service, upgrades and EV charging.",
    description:
      "Full-service commercial and strata electrical: service upgrades, panel work, EV charger installations, LED lighting retrofits, high-voltage service and distribution work, and low-voltage data and security cabling.",
    contactPhone: "604-829-9160",
    contactEmail: "service@woolaelectrical.ca",
    intro:
      "Electrical service, panel and service upgrades, EV charging, lighting, and high- and low-voltage work for buildings across Metro Vancouver.",
    heroImage: "/field/07-23-2026-electrical-4.jpg",
    heroImageAlt: "Woola electrician working in a multi-unit meter bank room",
    video: "/videos/electrical.mp4",
    accent: "from-brand-400/15 via-brand-500/5 to-transparent",
    heroKeywords: ["Electrical", "EV Charging", "LED Retrofit", "High Voltage", "Low Voltage", "Power Smart", "FSR"],
    stats: [
      { value: "FSR", label: "Field Safety Representatives on staff", sub: "Permit sign-off in house" },
      { value: "EV Ready", label: "CleanBC planner", sub: "Strata charging rollouts" },
      { value: "Power Smart", label: "BC Hydro Alliance member", sub: "Rebate paperwork handled" },
      { value: "24/7", label: "Emergency electrical", sub: "Contracted clients" },
    ],
    brands: [
      { name: "Eaton", domain: "eaton.com", src: "/brand/logos/eaton.png" },
      { name: "Schneider Electric", domain: "se.com", src: "/brand/logos/schneider-electric.png" },
      { name: "Siemens", domain: "siemens.com", src: "/brand/logos/siemens.png" },
      { name: "ABB", domain: "abb.com", src: "/brand/logos/abb.png" },
      { name: "Square D", domain: "schneider-electric.com", src: "/brand/logos/square-d.png" },
      { name: "FLO", domain: "flo.com", src: "/brand/logos/flo.png" },
      { name: "ChargePoint", domain: "chargepoint.com", src: "/brand/logos/chargepoint.png" },
      { name: "Wallbox", domain: "wallbox.com", src: "/brand/logos/wallbox.png" },
      { name: "EVBox", domain: "evbox.com", src: "/brand/logos/evbox.png" },
      { name: "SWTCH", domain: "swtchenergy.com", src: "/brand/logos/swtch.png" },
      { name: "Lutron", domain: "lutron.com", src: "/brand/logos/lutron.png" },
      { name: "Philips", domain: "philips.com", src: "/brand/logos/philips.png" },
    ],
    certLogos: ["logo-bc-hydro", "logo-worksafe-bc", "logo-asttbc", "logo-isn", "logo-comply-works", "logo-contractor-check"],
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
        a: "Yes. We're a BC Hydro Power Smart Alliance contractor. We complete pre-audit, install, and post-verification for rebate-eligible retrofits and submit the paperwork on your behalf.",
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
        name: "Electrical Service & Maintenance",
        short: "Service calls, panels, wiring",
        featured: true,
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
            "Electrical services cover everything downstream of your main disconnect: the panel with the breakers, the wiring in the walls, and the outlets, switches, and lights it feeds. In a commercial building it also means the big grey cabinets called switchgear, which take utility voltage in and split it out to sub-panels around the building.",
          image: "/field/07-23-2026-electrical-1.jpg",
          imageAlt: "Woola electrician at a commercial distribution panel",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Panel", def: "The metal box holding your breakers. Each breaker feeds one circuit." },
            { term: "Breaker", def: "A switch that trips off if the circuit pulls too much current, protecting the wire from overheating." },
            { term: "Switchgear", def: "The big commercial-scale breaker cabinets that take utility power in and distribute it." },
            { term: "FSR", def: "Field Safety Representative: the licence a lead electrician needs to pull permits and sign off in BC." },
            { term: "Arc-flash", def: "A sudden electrical explosion inside gear. Studies label your gear with the required safe-approach distance." },
            { term: "240V outlet", def: "The larger outlet for dryers, ranges, and EV chargers, twice the voltage of a regular plug. Often called 220V." },
            { term: "100A vs 200A service", def: "How much total power your panel can deliver. Heat pumps and EV chargers often push older 100-amp buildings to upgrade." },
            { term: "GFCI outlet", def: "The outlet with the test button. It cuts power in milliseconds if electricity leaks. Required near water." },
            { term: "Sub-panel", def: "A second, smaller breaker panel fed from the main one, common for suites, garages, and EV chargers." },
            { term: "Dedicated circuit", def: "A breaker serving one appliance only, so a kettle can't trip your fridge." },
            { term: "Aluminum wiring", def: "Common in 1960s–70s buildings. Safe when maintained, but connections need periodic inspection." },
          ],
        },
      },
      {
        slug: "ev-chargers",
        name: "EV Charging",
        short: "Level 2 & DC fast charging",
        featured: true,
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
            "An EV charger is a box that plugs into your building's electrical system and delivers power to a car. Level 2 (240 volts, the same as your dryer) is what almost every home and strata uses; it fills a car overnight. DC fast charging is what you see at highway rest stops; it costs a lot more to install but tops a car up in 30 minutes. For strata buildings, the trick is load management: spreading power fairly across many stalls so the building doesn't need a costly service upgrade.",
          image: "/field/07-23-2026-electrical-4.jpg",
          imageAlt: "Woola electrician at a commercial meter bank",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Level 2", def: "240-volt AC charging. About 40 km of range per hour." },
            { term: "DC Fast Charge", def: "High-voltage DC charging. 100+ km of range in 10 minutes, but $50k+ install." },
            { term: "EV Ready", def: "A BC building-code standard: every stall wired or ready to be wired for future L2 charging." },
            { term: "Load management", def: "Software that shares limited amps between many chargers so no single stall hogs it." },
            { term: "Level 1", def: "Charging from a regular wall outlet: 6–8 km of range per hour. Fine as a trickle, slow for daily driving." },
            { term: "Charging speed", def: "A Level 2 charger adds roughly 30–50 km of range per hour, so overnight covers almost any commute." },
            { term: "J1772 vs NACS", def: "The two plug shapes. J1772 fits most EVs today; NACS is the Tesla-style plug most makers are adopting." },
            { term: "Dedicated 40A circuit", def: "What a typical Level 2 charger needs from the panel. We confirm your panel has room before quoting." },
            { term: "Sub-meter", def: "A small meter on each charger so the strata bills each owner for exactly the power they used." },
          ],
        },
      },
      {
        slug: "led-lighting",
        name: "Lighting Upgrades",
        short: "LED retrofits & controls",
        featured: true,
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
            "An LED lighting retrofit swaps older fluorescent or incandescent fixtures for LEDs. The math is simple: LEDs use 50–70% less energy for the same brightness and last 3–5x longer, so most jobs pay back in 18 to 36 months. BC Hydro Power Smart offers cash rebates that reduce the up-front cost by 30–50%. The most common commercial retrofit is a troffer: the rectangular panel light you see in office and hallway ceilings.",
          image: "/field/08-05-2026-build-4.jpg",
          imageAlt: "Ceiling work in a commercial corridor",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Troffer", def: "The rectangular panel light in a drop ceiling, the most common commercial fixture." },
            { term: "Lumens per watt", def: "How efficient a light is. LEDs hit 100+; fluorescents ~60; incandescent ~15." },
            { term: "Photometric study", def: "A computer model of how bright each spot in a room will be after the retrofit." },
            { term: "Occupancy sensor", def: "A wall or ceiling sensor that turns lights off when a room is empty, often good for 20% more savings." },
            { term: "Colour temperature", def: "Measured in kelvin. 3000K is warm white, 4000K is neutral, 5000K is cool daylight." },
            { term: "CRI", def: "Colour rendering index: how true colours look under the light. 80+ is standard, 90+ is premium." },
            { term: "Wattage equivalent", def: "A \"60W-equivalent\" LED gives the same light using about 9 watts." },
            { term: "Retrofit kit vs new fixture", def: "A kit re-uses the existing housing and swaps the guts; a new fixture replaces everything." },
            { term: "Emergency & exit lighting", def: "Battery-backed lights and EXIT signs, tested annually by code." },
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
            "Low-voltage covers the wiring that carries data, video, and small control signals rather than lighting or power: Cat 6 network cable, security camera runs, door access wiring, fibre-optic backbones. It sits inside walls and ceilings but usually terminates at a data rack (the tall cabinet in a small server closet). PoE means Power over Ethernet: one cable that carries data and just enough power to run a camera or access point.",
          image: "/field/07-28-2026-electrical-12.jpg",
          imageAlt: "Woola electrician pulling cable in an electrical room",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Cat 6 / 6A", def: "The blue or white network cable behind every wall jack. Cat 6A handles 10 Gbps." },
            { term: "Structured cabling", def: "Neat, labelled, standards-based cabling, with every cable traceable from jack to rack." },
            { term: "PoE", def: "Power over Ethernet: one cable carries both data and power to a camera or Wi-Fi access point." },
            { term: "Access control", def: "The card readers and controllers that lock or unlock doors electronically." },
            { term: "Low voltage", def: "Data, cameras, access control, and intercoms: systems that run on communication-level power, not 120V." },
            { term: "Cat 6 vs fibre", def: "Copper Cat 6 handles most in-suite and office runs; fibre carries more data between floors or buildings." },
            { term: "Patch panel", def: "The organized wall of ports in the network room where every cable in the building terminates." },
            { term: "NVR", def: "Network video recorder: the box that stores your camera footage." },
            { term: "Wireless access point", def: "A ceiling-mounted radio that broadcasts Wi-Fi. Several placed right beat one router turned up loud." },
            { term: "Enterphone", def: "The lobby intercom that calls a suite and unlocks the front door." },
          ],
        },
      },
      {
        slug: "tenant-improvements",
        name: "Tenant Improvements",
        short: "Commercial fit-out electrical",
        featured: true,
        description:
          "Electrical fit-outs for leased commercial space: lighting, power, and data rough-ins, panel work, and inspections, coordinated with landlords, tenants, and Woola Build.",
        icon: Hammer,
        highlights: [
          "Permit-to-inspection handled in-house",
          "Coordinated with Woola Build fit-out crews",
          "Occupied-building scheduling",
          "As-built documentation on closeout",
        ],
      },
      {
        slug: "panel-upgrades",
        name: "Panel & Service Upgrades",
        short: "Capacity for what's next",
        featured: true,
        description:
          "Service upgrades, panel and switchgear replacements, and distribution modifications that make room for heat pumps, EV charging, and modern building loads.",
        icon: PlugZap,
        highlights: [
          "Load calculations before you commit",
          "Aging and obsolete panel replacement",
          "Utility coordination handled",
          "Minimal-outage cutover planning",
        ],
      },
      {
        slug: "infrared-scanning",
        name: "Infrared Scanning",
        short: "Thermal electrical inspection",
        featured: true,
        description:
          "Thermographic scans of panels, switchgear, and connections that find hot spots before they become failures, with reports insurers and owners can act on.",
        icon: ScanLine,
        highlights: [
          "Non-invasive, no-outage inspections",
          "Annotated thermal reports",
          "Supports insurance requirements",
          "Repairs quoted from findings",
        ],
      },
      {
        slug: "vault-cleaning",
        name: "Electrical Vault Cleaning & Maintenance",
        short: "High-voltage rooms and vaults",
        featured: false,
        description:
          "Scheduled cleaning, inspection, and maintenance of electrical vaults and high-voltage rooms in commercial and strata buildings, coordinated with BC Hydro shutdowns where required.",
        icon: Vault,
        highlights: [
          "Shutdown planning and utility coordination",
          "Vacuuming, degreasing, and debris removal",
          "Bus, insulator, and termination inspection",
          "Written report with photos after every visit",
        ],
      },
      {
        slug: "residential-electrical",
        name: "Residential Electrical",
        short: "Homes, suites, and townhomes",
        featured: false,
        description:
          "Panel upgrades, EV charger installs, lighting, and repairs for houses, suites, and townhomes across Metro Vancouver, permitted and inspected.",
        icon: House,
        highlights: [
          "Permits pulled and inspections booked by us",
          "EV charger and heat pump circuits",
          "Panel and service upgrades to 200 A",
          "Clean finish: concealed runs, patched and tidy",
        ],
      },
      {
        slug: "restoration",
        name: "Electrical Restoration",
        short: "After fire, flood, or failure",
        featured: false,
        description:
          "Electrical restoration after fire, water, or equipment failure: make-safe, damage assessment, temporary power, and rebuild of the affected systems with insurer-ready documentation.",
        icon: RefreshCw,
        highlights: [
          "Same-day make-safe and temporary power",
          "Damage assessment with photos and scope",
          "Coordination with restoration contractors and adjusters",
          "Permitted rebuild and final inspection",
        ],
      },
    ],
  },
  {
    slug: "build",
    name: "Woola Build",
    subtitle: "Building Maintenance & Construction",
    homepageChips: [
      "Building Envelope",
      "Waterline Re-piping",
      "Maintenance Packages",
      "Construction & Renos",
      "Property Services",
      "Turnkey Project Solutions",
    ],
    tagline: "Repairs, building maintenance, renovations and construction support.",
    description:
      "A single trade-coordinated partner for strata and commercial property maintenance, building envelope, interior renovations and small-cap construction.",
    contactPhone: "604-800-3617",
    contactEmail: "estimates@woolabuild.ca",
    intro:
      "Repairs, building maintenance, envelope work, renovations, and construction project management from one in-house team.",
    heroImage: "/field/08-12-2026-build-7.jpg",
    heroImageAlt: "Crane lifting rooftop equipment over a Woola Build strata project",
    video: "/videos/build.mp4",
    accent: "from-brand-400/10 via-ink-800/5 to-transparent",
    heroKeywords: ["Maintenance", "Envelope", "Renovations", "Property Services", "Roofing", "Construction PM"],
    stats: [
      { value: "Same week", label: "Service dispatch", sub: "Routine work, contracted clients" },
      { value: "Gold Seal", label: "Certified project managers", sub: "Construction and envelope projects" },
      { value: "4", label: "Divisions on one PO", sub: "Mechanical and electrical in house" },
      { value: "24/7", label: "Emergency building response", sub: "Contracted clients" },
    ],
    brands: [
      { name: "Soprema", domain: "soprema.com", src: "/brand/logos/soprema.png" },
      { name: "Sika", domain: "sika.com", src: "/brand/logos/sika.png" },
      { name: "Tremco", domain: "tremcosealants.com", src: "/brand/logos/tremco.png" },
      { name: "Henry", domain: "henry.com", src: "/brand/logos/henry.png" },
      { name: "GAF", domain: "gaf.com", src: "/brand/logos/gaf.png" },
      { name: "IKO", domain: "iko.com", src: "/brand/logos/iko.png" },
      { name: "Hardie", domain: "jameshardie.com", src: "/brand/logos/hardie.png" },
      { name: "Benjamin Moore", domain: "benjaminmoore.com", src: "/brand/logos/benjamin-moore.png" },
      { name: "Sherwin-Williams", domain: "sherwin-williams.com", src: "/brand/logos/sherwin-williams.png" },
      { name: "Schluter", domain: "schluter.com", src: "/brand/logos/schluter.png" },
      { name: "Kohler Plumbing", domain: "kohler.com", src: "/brand/logos/kohler.png" },
      { name: "Schlage", domain: "schlage.com", src: "/brand/logos/schlage.png" },
    ],
    certLogos: ["logo-boma", "logo-pama-member", "logo-cci-bc", "logo-worksafe-bc", "logo-contractor-check", "logo-comply-works"],
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
        a: "Yes. Bylaw review, council approvals, permit applications and inspections are all handled by our PM team. Strata councils get a single point of contact through every phase.",
      },
    ],
    services: [
      {
        slug: "maintenance",
        name: "Maintenance Packages",
        short: "Proactive building care",
        featured: true,
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
            "Building maintenance is planned, recurring work that keeps a property in good shape: inspections, cleaning, small repairs, and life-safety checks. Most strata and commercial buildings sign an annual PM (preventative maintenance) contract with a fixed scope and price. The alternative, waiting until something breaks, always costs more and shows up at the worst time.",
          image: "/field/08-12-2026-build-8.jpg",
          imageAlt: "Woola Build crew at a wood-frame residential building",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "PM", def: "Preventative maintenance: scheduled inspections and small repairs done before failures." },
            { term: "Work order", def: "A single line item of work: dispatched, tracked, photographed, and closed out." },
            { term: "Condition report", def: "A visual + written summary of an asset's health after an inspection." },
            { term: "Life-safety", def: "Fire alarms, sprinklers, emergency lighting: the stuff that keeps people alive in a crisis." },
            { term: "Preventative vs reactive", def: "Scheduled small work that heads off big emergency invoices. Cheaper every time." },
            { term: "Annual fire inspection", def: "The code-required test of alarms, extinguishers, and emergency lights, with a report your insurer can see." },
            { term: "Backflow test", def: "The yearly certification of the valves that protect the city water supply. Cities fine buildings that skip it." },
            { term: "Roof anchor certification", def: "Annual inspection of the tie-off points that window cleaners and trades clip into." },
            { term: "Depreciation report", def: "BC's long-range strata planning document. Good maintenance records make yours accurate." },
          ],
        },
      },
      {
        slug: "envelope",
        name: "Building Envelope",
        short: "Roof, cladding, sealants",
        featured: true,
        description:
          "Targeted envelope repairs, sealant renewal, parkade waterproofing, deck membranes, and roofing, paired with engineer-led scoping for larger remediation.",
        icon: Layers,
        highlights: [
          "Sealant joint replacement programs",
          "Parkade traffic-deck systems",
          "Roof anchor and tie-off audits",
          "BC building code compliant",
        ],
        primer: {
          what:
            "The building envelope is the outer shell (roof, walls, windows, and sealants) that keeps water and air where they belong. On flat commercial roofs the surface is usually a rubbery membrane like EPDM or TPO. When a joint or a membrane fails, water gets in and finds framing, insulation, and drywall to ruin. Envelope work is finding those failures before they turn into a $200k restoration.",
          image: "/field/08-12-2026-build-5.jpg",
          imageAlt: "Woola Build crew member on a townhome roof",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "EPDM / TPO", def: "Two common rubbery membranes for flat roofs. EPDM is black; TPO is usually white." },
            { term: "Sealant joint", def: "The caulking line between two building materials. Fails every 10–15 years." },
            { term: "Traffic deck", def: "The waterproof membrane on a parkade or plaza deck that cars drive on." },
            { term: "Tie-off / anchor", def: "The fall-protection point on a roof so workers can be tied off safely." },
            { term: "Building envelope", def: "Everything separating inside from outside: roof, walls, windows, decks, and the seals between them." },
            { term: "Rainscreen", def: "The drainage gap behind the cladding that lets walls dry, the fix that ended BC's leaky-condo era." },
            { term: "Flashing", def: "The bent metal that steers water away from joints, windows, and roof edges." },
            { term: "Membrane", def: "The waterproof layer under decks, roofs, and planters. Invisible when working, expensive when not." },
            { term: "Water ingress", def: "The engineer's term for a leak. A small stain usually means a bigger path behind the wall." },
          ],
        },
      },
      {
        slug: "construction",
        name: "Construction & Renos",
        short: "Tenant improvements",
        featured: true,
        description:
          "Tenant improvements, suite renovations, amenity rebuilds, and small commercial fit-outs, managed by Gold Seal certified project managers.",
        icon: HardHat,
        highlights: [
          "Gold Seal certified PMs",
          "In-house mechanical & electrical",
          "Strata bylaw & permit handling",
          "Fixed-price proposals",
        ],
        primer: {
          what:
            "Construction and renovation work covers new or reconfigured interior space: tenant improvements in a leased office, an amenity rebuild in a tower, or a suite reno. Most of the work happens after framing and drywall go up. A tenant improvement (TI) is when a landlord finishes bare shell space to a tenant's spec. Every project we run at $250k+ has a Gold Seal Certified project manager coordinating trades, permits, and inspections.",
          image: "/field/08-10-2026-build-2.jpg",
          imageAlt: "Corridor ceiling opened for repiping and restoration",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "TI", def: "Tenant Improvement: the fit-out of a leased space to a tenant's requirements." },
            { term: "Gold Seal PM", def: "The Canadian Construction Association's project manager certification." },
            { term: "Permit", def: "The city-issued authorization to build. Required for structural, plumbing, gas, and electrical." },
            { term: "Substantial completion", def: "The formal milestone where a project is usable, even if minor items remain." },
            { term: "Change order", def: "A signed scope-and-price adjustment mid-project, so there are no surprises on the final invoice." },
            { term: "Fixed price vs cost-plus", def: "Fixed price locks the number up front; cost-plus bills actual costs plus a fee. We quote fixed." },
            { term: "Deficiency list", def: "The walkthrough punch list of small fixes before a project is signed off." },
            { term: "Holdback", def: "The 10% BC law requires the owner to hold until lien periods expire. It protects you." },
            { term: "Strata alteration approval", def: "Council sign-off, and often an alteration agreement, required before suite renovations start." },
          ],
        },
      },
      {
        slug: "property-services",
        name: "Property Services",
        short: "On-call building work",
        featured: true,
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
            "Property services is the catch-all for the small stuff: painting a hallway, fixing a lobby door closer, replacing a fence board, hanging new numerals on suite doors. These are the jobs too small to bid as a project but too many to ignore. We dispatch them same-week and close each one with a photo-documented work order that shows before, during, and after.",
          image: "/field/08-12-2026-build-6.jpg",
          imageAlt: "Crane lifting materials over a residential site",
          imageCredit: "Wikimedia Commons",
          parts: [
            { term: "Work order", def: "A single dispatched task with a scope, price, and closeout photos." },
            { term: "Same-week dispatch", def: "Non-emergency requests scheduled within the same week for contracted clients." },
            { term: "Common-area refresh", def: "Paint, hardware, and small carpentry updates in lobbies and hallways." },
            { term: "Common property", def: "Hallways, lobbies, parkades, and exteriors: what the strata, not the owner, maintains." },
            { term: "Door closer", def: "The arm at the top of a door that controls its swing. The most-replaced part in any building." },
            { term: "Patch and paint", def: "Drywall repair plus colour-matched paint after any wall is opened, done as one visit." },
            { term: "Preventative walk-through", def: "A scheduled building tour that catches small issues before they become work orders." },
            { term: "Photo closeout", def: "Every job ends with before, during, and after photos attached to the work order." },
          ],
        },
      },
      {
        slug: "waterline-repiping",
        name: "Waterline Re-piping",
        short: "Domestic water renewal",
        featured: true,
        description:
          "Building water line replacement and full re-piping projects, planned and executed with Woola Mechanical's plumbers in occupied buildings, suite by suite.",
        icon: Droplet,
        highlights: [
          "Occupied-building phasing plans",
          "In-house plumbing and drywall repair",
          "Water shutdowns communicated ahead",
          "Closeout documentation for the strata",
        ],
      },
      {
        slug: "turnkey-projects",
        name: "Turnkey Project Solutions",
        short: "Multi-trade projects",
        featured: true,
        description:
          "Projects that span trades: mechanical, electrical, civil, concrete, and finishing delivered under one contract, one schedule, and one project manager.",
        icon: KeyRound,
        highlights: [
          "Self-performed core trades",
          "Gold Seal project management",
          "Single proposal and invoice",
          "Service continuity after handover",
        ],
      },
    ],
  },
];

export const allServices = divisions.flatMap((d) =>
  d.services.map((s) => ({ ...s, division: d }))
);

/** Services shown in division-page grids (excludes child pages like HVAC's sub-services). */
export function topLevelServices(d: Division) {
  return d.services.filter((s) => !s.parent);
}

/** The six-per-division lists surfaced in menus and homepage cards. */
export function featuredServices(d: Division) {
  return d.services.filter((s) => s.featured);
}

/** Child services of a parent (e.g. Heating / Cooling / Ventilation under HVAC). */
export function childServices(d: Division, parentSlug: string) {
  return d.services.filter((s) => s.parent === parentSlug);
}

/** Services that have a Learning Hub primer. */
export function primerServices(d: Division) {
  return d.services.filter((s): s is Service & { primer: ServicePrimer } => Boolean(s.primer));
}

// Lowercase a service name for mid-sentence use, preserving acronyms (HVAC, LED, EV).
export function lowerName(name: string) {
  return name
    .split(" ")
    .map((w) => (/[A-Z]{2,}/.test(w) ? w : w.toLowerCase()))
    .join(" ");
}

/** Division name without the "Woola " prefix, for headings that already sit under the brand. */
export function shortName(d: Division) {
  return d.name.replace(/^Woola\s+/, "");
}

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
