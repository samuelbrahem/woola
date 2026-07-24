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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServicePrimer = {
  what: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  parts: { term: string; def: string }[];
};

export type EquipmentItem = { name: string; image: string; alt: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  primer: ServicePrimer;
  equipment?: EquipmentItem[];
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
  /** Looping 20-30s promo film. Drop an MP4 in /public/videos and set the path here. */
  video?: string;
  contactPhone: string;
  contactEmail: string;
  intro: string;
  accent: string;
  heroKeywords: string[];
  stats: DivisionStat[];
  brands: { name: string; domain?: string }[];
  certLogos: string[];
  testimonial: Testimonial;
  featured: FeaturedProject[];
  faqs: DivisionFAQ[];
  services: Service[];
};

const EQUIPMENT = {
  hvac: [
    { name: "RTUs", image: "/equipment/hvac/rtus.jpg", alt: "Rooftop packaged HVAC units on a commercial roof" },
    { name: "VRF / VRV", image: "/equipment/hvac/vrf.jpg", alt: "Daikin variable refrigerant flow outdoor condenser" },
    { name: "Water-source heat pumps", image: "/equipment/hvac/water-source-heat-pumps.jpg", alt: "Water-to-air heat pump" },
    { name: "Fan coil units", image: "/equipment/hvac/fan-coil-units.jpg", alt: "Carrier fan coil unit" },
    { name: "ERVs / HRVs", image: "/equipment/hvac/erv-hrv.jpg", alt: "Heat recovery ventilator with heat exchanger" },
    { name: "AHUs", image: "/equipment/hvac/ahu.jpg", alt: "Commercial air handling unit" },
    { name: "Boilers", image: "/equipment/hvac/boilers.jpg", alt: "Commercial boiler in a mechanical room" },
    { name: "Cooling towers", image: "/equipment/hvac/cooling-towers.jpg", alt: "Induced-draft cooling tower on a rooftop" },
    { name: "Fans", image: "/equipment/hvac/fans.jpg", alt: "Belt-driven industrial exhaust fan" },
    { name: "Controls", image: "/equipment/hvac/controls.jpg", alt: "Building smart thermostat" },
    { name: "Ductwork", image: "/equipment/hvac/ductwork.jpg", alt: "Galvanized HVAC ductwork in a ceiling" },
  ],
  plumbing: [
    { name: "Tank water heaters", image: "/equipment/plumbing/tank-water-heater.jpg", alt: "Residential gas tank water heater" },
    { name: "Tankless water heaters", image: "/equipment/plumbing/tankless-water-heater.jpg", alt: "Wall-hung tankless water heaters" },
    { name: "Backflow preventers", image: "/equipment/plumbing/backflow-preventer.jpg", alt: "Backflow preventer assembly" },
    { name: "Sump pumps", image: "/equipment/plumbing/sump-pump.jpg", alt: "AC-powered sump pump" },
    { name: "Water softeners", image: "/equipment/plumbing/water-softener.jpg", alt: "Residential water softener" },
  ],
  gas: [
    { name: "Condensing boilers", image: "/equipment/gas/condensing-boiler.jpg", alt: "Wall-hung gas condensing boiler" },
    { name: "Gas furnaces", image: "/equipment/gas/gas-furnace.jpg", alt: "High-efficiency forced-air gas furnace" },
    { name: "Gas fireplaces", image: "/equipment/gas/gas-fireplace.jpg", alt: "Gas log fireplace" },
    { name: "Gas ranges", image: "/equipment/gas/gas-range.jpg", alt: "Gas cooking range" },
    { name: "Gas meters", image: "/equipment/gas/gas-meter.jpg", alt: "Residential natural gas meter" },
    { name: "Regulators & valves", image: "/equipment/gas/gas-regulator.jpg", alt: "Gas pressure regulator valve" },
  ],
  refrigeration: [
    { name: "Walk-in coolers", image: "/equipment/refrigeration/walk-in-cooler.jpg", alt: "Insulated walk-in cooler room" },
    { name: "Walk-in freezers", image: "/equipment/refrigeration/walk-in-freezer.jpg", alt: "Interior of a walk-in freezer" },
    { name: "Ice machines", image: "/equipment/refrigeration/ice-machine.jpg", alt: "Commercial Hoshizaki ice machine" },
    { name: "Display cases", image: "/equipment/refrigeration/display-case.jpg", alt: "Retail refrigerated display case" },
  ],
  generators: [
    { name: "Diesel generators", image: "/equipment/generators/diesel-generator.jpg", alt: "Enclosed 200 kW diesel standby generator" },
    { name: "Natural gas generators", image: "/equipment/generators/natural-gas-generator.jpg", alt: "Enclosed natural gas standby generator" },
    { name: "Automatic transfer switches", image: "/equipment/generators/ats.jpg", alt: "Automatic transfer switch in a power room" },
    { name: "Load banks", image: "/equipment/generators/load-bank.jpg", alt: "Portable 200 kW resistive load bank" },
    { name: "Fuel tanks", image: "/equipment/generators/fuel-tank.jpg", alt: "Aboveground diesel fuel storage tank" },
    { name: "Batteries & chargers", image: "/equipment/generators/batteries.jpg", alt: "UPS backup batteries" },
  ],
  "c282-testing": [
    { name: "Load banks", image: "/equipment/generators/load-bank.jpg", alt: "Portable 200 kW resistive load bank" },
    { name: "Diesel generators", image: "/equipment/generators/diesel-generator.jpg", alt: "Enclosed 200 kW diesel standby generator" },
    { name: "Automatic transfer switches", image: "/equipment/generators/ats.jpg", alt: "Automatic transfer switch in a power room" },
    { name: "Batteries & chargers", image: "/equipment/generators/batteries.jpg", alt: "Starting batteries and chargers" },
  ],
  "transfer-switches": [
    { name: "Automatic transfer switches", image: "/equipment/generators/ats.jpg", alt: "Automatic transfer switch in a power room" },
    { name: "Switchgear", image: "/equipment/electrical/switchgear.jpg", alt: "Industrial electrical switchgear" },
    { name: "Panelboards", image: "/equipment/electrical/panelboard.jpg", alt: "Open commercial circuit breaker panel" },
    { name: "Generator controllers", image: "/equipment/generators/natural-gas-generator.jpg", alt: "Standby generator with onboard controller" },
  ],
  "fuel-systems": [
    { name: "Fuel storage tanks", image: "/equipment/generators/fuel-tank.jpg", alt: "Aboveground diesel fuel storage tank" },
    { name: "Diesel gensets", image: "/equipment/generators/diesel-generator.jpg", alt: "Enclosed diesel standby generator" },
    { name: "Natural gas gensets", image: "/equipment/generators/natural-gas-generator.jpg", alt: "Enclosed natural gas standby generator" },
    { name: "Meters & regulators", image: "/equipment/gas/gas-meter.jpg", alt: "Natural gas meter and regulator" },
  ],
  "ups-battery": [
    { name: "UPS systems", image: "/equipment/ups-battery/ups-unit.jpg", alt: "Commercial rack-mounted uninterruptible power supply" },
    { name: "Battery banks & chargers", image: "/equipment/generators/batteries.jpg", alt: "Backup battery bank" },
    { name: "Automatic transfer switches", image: "/equipment/generators/ats.jpg", alt: "Automatic transfer switch in a power room" },
    { name: "Panelboards", image: "/equipment/electrical/panelboard.jpg", alt: "Open commercial circuit breaker panel" },
  ],
  electrical: [
    { name: "Panelboards", image: "/equipment/electrical/panelboard.jpg", alt: "Open Eaton circuit breaker panel" },
    { name: "Switchgear", image: "/equipment/electrical/switchgear.jpg", alt: "Industrial electrical switchgear" },
    { name: "Meter bases", image: "/equipment/electrical/meter-base.jpg", alt: "Electric utility meter on a wall" },
    { name: "VFDs", image: "/equipment/electrical/vfd.jpg", alt: "Variable frequency drive for a three-phase motor" },
  ],
  "ev-chargers": [
    { name: "Level 2 chargers", image: "/equipment/ev-chargers/level-2.jpg", alt: "Wall-mounted ChargePoint Level 2 EVSE" },
    { name: "DC fast chargers", image: "/equipment/ev-chargers/dc-fast-charger.jpg", alt: "EVgo DC fast charging station" },
    { name: "Networked stations", image: "/equipment/ev-chargers/networked-station.jpg", alt: "ChargePoint networked Level 2 station" },
    { name: "Parking pedestals", image: "/equipment/ev-chargers/pedestal.jpg", alt: "EV charging pedestal in a parking lot" },
  ],
  "led-lighting": [
    { name: "LED troffers", image: "/equipment/led-lighting/led-troffer.jpg", alt: "LED troffer ceiling fixture" },
    { name: "High-bay LEDs", image: "/equipment/led-lighting/high-bay.jpeg", alt: "Industrial LED high-bay fixture" },
    { name: "Exit signs", image: "/equipment/led-lighting/exit-sign.jpg", alt: "Illuminated red LED exit sign" },
    { name: "Emergency lights", image: "/equipment/led-lighting/emergency-light.jpg", alt: "Ceiling emergency lighting fixture" },
    { name: "Occupancy sensors", image: "/equipment/led-lighting/occupancy-sensor.jpg", alt: "Wall switch with PIR occupancy sensor" },
    { name: "Area lights", image: "/equipment/led-lighting/area-light.jpg", alt: "Pole-mounted parking lot area lights" },
  ],
  "low-voltage": [
    { name: "Structured cabling", image: "/equipment/low-voltage/patch-panel.jpg", alt: "Rack-mounted patch panels and Ethernet switches" },
    { name: "Cat 6 / 6A cable", image: "/equipment/low-voltage/cat6-cable.jpg", alt: "Category 6 twisted pair Ethernet cable" },
    { name: "Fiber optics", image: "/equipment/low-voltage/fiber.jpg", alt: "Illuminated fiber optic cable" },
    { name: "Wi-Fi access points", image: "/equipment/low-voltage/wifi-ap.jpg", alt: "Ubiquiti UniFi wireless access point" },
    { name: "Security cameras", image: "/equipment/low-voltage/security-camera.jpg", alt: "Axis brand IP CCTV security cameras" },
    { name: "Network switches", image: "/equipment/low-voltage/network-switch.jpg", alt: "Rack-mounted network switches" },
  ],
  maintenance: [
    { name: "Fire extinguishers", image: "/equipment/maintenance/fire-extinguisher.jpg", alt: "Wall-mounted fire extinguisher" },
    { name: "Emergency lighting", image: "/equipment/maintenance/emergency-light.jpg", alt: "Emergency ceiling light" },
    { name: "Sprinkler heads", image: "/equipment/maintenance/sprinkler-head.jpg", alt: "Fire sprinkler head in a ceiling" },
    { name: "HVAC filters", image: "/equipment/maintenance/hvac-filter.webp", alt: "Pleated HVAC air filter" },
    { name: "Building signage", image: "/equipment/maintenance/signage.jpg", alt: "Exterior monument sign" },
  ],
  envelope: [
    { name: "EPDM membrane", image: "/equipment/envelope/epdm-membrane.jpg", alt: "EPDM rubber membrane on a flat roof" },
    { name: "Asphalt shingles", image: "/equipment/envelope/asphalt-shingle.jpg", alt: "Asphalt shingle roofing close-up" },
    { name: "Sealant joints", image: "/equipment/envelope/sealant-joint.jpg", alt: "Caulking between concrete panels" },
    { name: "Downspouts", image: "/equipment/envelope/downspout.jpg", alt: "Rain gutter downspouts" },
    { name: "Skylights", image: "/equipment/envelope/skylight.jpg", alt: "Residential roof skylight" },
  ],
  construction: [
    { name: "Drywall", image: "/equipment/construction/drywall.jpg", alt: "Drywall installation on interior framing" },
    { name: "Steel stud framing", image: "/equipment/construction/steel-stud-framing.jpg", alt: "Light-gauge steel stud interior framing" },
    { name: "Drop ceilings", image: "/equipment/construction/drop-ceiling.jpg", alt: "Suspended office drop ceiling tiles" },
    { name: "Door hardware", image: "/equipment/construction/door-hardware.jpg", alt: "Overhead door closer hardware" },
    { name: "Commercial flooring", image: "/equipment/construction/flooring.jpg", alt: "Vinyl plank commercial flooring" },
    { name: "Insulation", image: "/equipment/construction/insulation.jpg", alt: "Fiberglass batt insulation installed" },
    { name: "Interior painting", image: "/equipment/construction/painting.jpg", alt: "Interior wall painting with rollers" },
  ],
  "property-services": [
    { name: "Interior painting", image: "/equipment/property-services/painting.jpg", alt: "Interior wall painting" },
    { name: "Fencing", image: "/equipment/property-services/fencing.jpg", alt: "Chain-link fence" },
    { name: "Signage", image: "/equipment/property-services/signage.jpg", alt: "Exterior building signage" },
    { name: "Power washing", image: "/equipment/property-services/power-washing.jpg", alt: "Power washing a building facade" },
    { name: "Door hardware", image: "/equipment/property-services/door-hardware.jpg", alt: "Door closer hardware" },
  ],
} satisfies Record<string, EquipmentItem[]>;

export const divisions: Division[] = [
  {
    slug: "mechanical",
    name: "Woola Mechanical",
    subtitle: "HVAC, Plumbing & Gas",
    tagline: "Engineered comfort. Verified reliability.",
    description:
      "Full-spectrum mechanical services for strata, commercial and high-end residential properties, from heat-pump retrofits to industrial refrigeration.",
    contactPhone: "604-732-1441",
    contactEmail: "dispatch@woolamech.ca",
    intro:
      "We design, install, service and maintain the systems that keep buildings comfortable and code-compliant. Our technicians are certified across HVAC, hydronics, gas, and refrigeration, so one team handles what most companies split across four.",
    heroImage:
      "https://images.unsplash.com/photo-1527738697320-513f6648bc26?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Aerial view of commercial rooftop HVAC units on a high-rise",
    accent: "from-brand-500/15 via-brand-400/5 to-transparent",
    heroKeywords: ["HVAC", "Plumbing", "Gas", "Refrigeration", "Heat Pumps", "Hydronics"],
    stats: [
      { value: "32", label: "Mechanical technicians", sub: "Red Seal & gas-ticketed" },
      { value: "< 4 hr", label: "Emergency response", sub: "Contracted clients, Metro Van" },
      { value: "2,400+", label: "Assets under contract", sub: "Boilers, RTUs, heat pumps" },
      { value: "98%", label: "First-visit fix rate", sub: "12-month rolling average" },
    ],
    brands: [
      { name: "Mitsubishi Electric", domain: "mitsubishielectric.com" },
      { name: "Daikin", domain: "daikin.com" },
      { name: "Carrier", domain: "carrier.com" },
      { name: "Trane", domain: "trane.com" },
      { name: "Viessmann", domain: "viessmann.us" },
      { name: "IBC Boilers", domain: "ibcboiler.com" },
      { name: "Lochinvar", domain: "lochinvar.com" },
      { name: "Rinnai", domain: "rinnai.us" },
      { name: "Navien", domain: "navieninc.com" },
      { name: "Honeywell", domain: "honeywell.com" },
      { name: "Belimo", domain: "belimo.com" },
      { name: "Grundfos", domain: "grundfos.com" },
    ],
    certLogos: ["logo-teca", "logo-worksafe-bc", "logo-asttbc", "logo-hpcn", "logo-pama-member", "logo-interprovincial-standard"],
    testimonial: {
      quote:
        "We had three vendors for HVAC, plumbing and boilers, and three sets of finger-pointing. Woola Mechanical took over our whole portfolio in 90 days, and I have one phone number now.",
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
          "https://images.unsplash.com/photo-1563456020159-b74d67e78c26?w=1200&q=80&auto=format&fit=crop",
        alt: "Commercial mechanical plant room with insulated piping",
      },
      {
        title: "Surrey strata heat-pump conversion",
        tag: "Decarbonization",
        summary:
          "184 ductless heat-pump heads across 92 suites, coordinated with the strata, two electrical sub-trades, and FortisBC. Completed three weeks ahead of schedule.",
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
          "https://images.unsplash.com/photo-1592228533283-d78f7c1cf453?w=1200&q=80&auto=format&fit=crop",
        alt: "Cold-storage warehouse with racked frozen inventory",
      },
    ],
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
          image: "/primers/hvac.jpg",
          imageAlt: "Wall-mounted indoor head of a ductless mini-split heat pump",
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
        equipment: EQUIPMENT.hvac,
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
            "Plumbing is the network of pipes and fixtures that brings clean water into your building and takes waste water out. It covers your water heater (either a tank in a closet or a tankless unit on the wall), your drains, and the shut-offs behind every sink and toilet. A backflow preventer is a small brass valve that stops dirty water from flowing backwards into the drinking supply. Cities require them to be tested every year.",
          image: "/primers/plumbing.jpg",
          imageAlt: "Wall-mounted tankless (on-demand) gas water heaters",
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
        equipment: EQUIPMENT.plumbing,
      },
      {
        slug: "gas",
        name: "Gas Services",
        short: "Licensed gas fitting",
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
          image: "/primers/gas.jpg",
          imageAlt: "Viessmann Vitodens 200 wall-hung condensing gas boiler",
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
        equipment: EQUIPMENT.gas,
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
            "Commercial refrigeration is the cooling equipment used by grocers, restaurants, and labs. A walk-in cooler is exactly what it sounds like: a room-sized insulated box, usually with the compressor rack on the roof or in a back room. Newer systems use A2L or natural refrigerants that are less harmful to the atmosphere than the older R-22 refrigerant, which is being phased out.",
          image: "/primers/refrigeration.jpg",
          imageAlt: "Interior of a walk-in cooler with insulated walls",
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
        equipment: EQUIPMENT.refrigeration,
      },
    ],
  },
  {
    slug: "power",
    name: "Woola Power Systems",
    subtitle: "Standby Generators & Backup Power",
    tagline: "Standby power. Permanent peace of mind.",
    description:
      "Generator-first standby power services: annual CSA C282 inspections, load bank testing, transfer switch service, and 24/7 emergency response for BC's most critical facilities.",
    contactPhone: "604-829-9156",
    contactEmail: "service@woolapower.ca",
    intro:
      "Woola Power was built around the most demanding electrical asset in any building: the emergency standby generator. We are factory-authorized service providers for Generac, Kohler, and Cummins, own our own load banks, and dispatch 24/7 across BC.",
    heroImage:
      "https://images.unsplash.com/photo-1637296001293-43ec1ac4e5ed?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Industrial diesel generator engine room",
    accent: "from-ink-800/10 via-brand-500/10 to-transparent",
    heroKeywords: ["Generators", "Standby Power", "Load Bank", "CSA C282", "Transfer Switch", "Fuel Polishing"],
    stats: [
      { value: "180+", label: "Generators under contract", sub: "Annual CSA C282 inspections" },
      { value: "850 kW", label: "On-site load bank capacity", sub: "Resistive + reactive testing" },
      { value: "3", label: "OEMs factory-authorized", sub: "Generac, Kohler, Cummins" },
      { value: "24/7", label: "Emergency generator response", sub: "Every day of the year" },
    ],
    brands: [
      { name: "Generac", domain: "generac.com" },
      { name: "Kohler", domain: "kohler.com" },
      { name: "Cummins", domain: "cummins.com" },
      { name: "Caterpillar", domain: "cat.com" },
      { name: "Onan", domain: "cummins.com" },
      { name: "ASCO", domain: "ascopower.com" },
      { name: "Eaton", domain: "eaton.com" },
      { name: "Zenith", domain: "zenithcontrols.com" },
      { name: "Russelectric", domain: "russelectric.com" },
      { name: "Deep Sea Electronics", domain: "deepseaelectronics.com" },
      { name: "Woodward", domain: "woodward.com" },
      { name: "Murphy", domain: "fwmurphy.com" },
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
          "https://images.unsplash.com/photo-1636867759143-c28c1e909bd3?w=1200&q=80&auto=format&fit=crop",
        alt: "Containerized standby generators at an industrial power yard",
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
        a: "Yes. We own and operate resistive and reactive load banks up to 850 kW. We can run annual CSA C282 testing without subcontracting, which keeps schedules tight and costs predictable.",
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
        slug: "generators",
        name: "Standby Generators",
        short: "Emergency power systems",
        description:
          "Generator supply, installation, and preventative maintenance: oil and filter service, coolant and battery checks, minor repair, and 24/7 emergency response for Generac, Kohler, and Cummins units.",
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
          image: "/primers/generators.jpg",
          imageAlt: "Commercial standby diesel generator in a weatherproof enclosure outside a building",
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
        equipment: EQUIPMENT.generators,
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
          image: "/primers/c282-testing.jpg",
          imageAlt: "Portable resistive load bank used for annual generator testing",
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
        equipment: EQUIPMENT["c282-testing"],
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
          image: "/primers/transfer-switches.jpg",
          imageAlt: "Automatic transfer switch cabinet in a building power room",
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
        equipment: EQUIPMENT["transfer-switches"],
      },
      {
        slug: "fuel-systems",
        name: "Fuel Systems & Polishing",
        short: "Diesel quality & tank service",
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
          image: "/primers/fuel-systems.jpg",
          imageAlt: "Aboveground diesel storage tank for a standby generator",
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
        equipment: EQUIPMENT["fuel-systems"],
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
          image: "/primers/ups-battery.jpg",
          imageAlt: "Commercial rack-mounted uninterruptible power supply system",
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
        equipment: EQUIPMENT["ups-battery"],
      },
    ],
  },
  {
    slug: "electrical",
    name: "Woola Electrical",
    subtitle: "Commercial Electrical, EV & Lighting",
    tagline: "Every circuit accounted for.",
    description:
      "Full-service commercial and strata electrical: service upgrades, panel work, EV charger installations, LED lighting retrofits, and low-voltage data and security cabling.",
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
      { name: "Eaton", domain: "eaton.com" },
      { name: "Schneider Electric", domain: "se.com" },
      { name: "Siemens", domain: "siemens.com" },
      { name: "ABB", domain: "abb.com" },
      { name: "Square D", domain: "schneider-electric.com" },
      { name: "FLO", domain: "flo.com" },
      { name: "ChargePoint", domain: "chargepoint.com" },
      { name: "Wallbox", domain: "wallbox.com" },
      { name: "EVBox", domain: "evbox.com" },
      { name: "SWTCH", domain: "swtchenergy.com" },
      { name: "Lutron", domain: "lutron.com" },
      { name: "Philips", domain: "philips.com" },
    ],
    certLogos: ["logo-bc-hydro", "logo-worksafe-bc", "logo-asttbc", "logo-isn", "logo-comply-works", "logo-contractor-check"],
    testimonial: {
      quote:
        "We needed a 240-stall strata EV rollout to work under a single meter: load managed, sub-billed, and rebate-eligible. Woola Electrical ran the whole thing including the BC Hydro paperwork.",
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
            "Electrical services cover everything downstream of your main disconnect: the panel with the breakers, the wiring in the walls, and the outlets, switches, and lights it feeds. In a commercial building it also means the big grey cabinets called switchgear, which take utility voltage in and split it out to sub-panels around the building.",
          image: "/primers/electrical.jpg",
          imageAlt: "Open commercial electrical panelboard showing circuit breakers",
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
        equipment: EQUIPMENT.electrical,
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
            "An EV charger is a box that plugs into your building's electrical system and delivers power to a car. Level 2 (240 volts, the same as your dryer) is what almost every home and strata uses; it fills a car overnight. DC fast charging is what you see at highway rest stops; it costs a lot more to install but tops a car up in 30 minutes. For strata buildings, the trick is load management: spreading power fairly across many stalls so the building doesn't need a costly service upgrade.",
          image: "/primers/ev-chargers.jpg",
          imageAlt: "Wall-mounted Level 2 EV charging station outside a residence",
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
        equipment: EQUIPMENT["ev-chargers"],
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
            "An LED lighting retrofit swaps older fluorescent or incandescent fixtures for LEDs. The math is simple: LEDs use 50–70% less energy for the same brightness and last 3–5x longer, so most jobs pay back in 18 to 36 months. BC Hydro Power Smart offers cash rebates that reduce the up-front cost by 30–50%. The most common commercial retrofit is a troffer: the rectangular panel light you see in office and hallway ceilings.",
          image: "/primers/led-lighting.jpg",
          imageAlt: "Retrofit LED troffer panel installed in a suspended commercial ceiling",
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
        equipment: EQUIPMENT["led-lighting"],
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
          image: "/primers/low-voltage.jpg",
          imageAlt: "Server rack with structured cabling and patch cords",
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
        equipment: EQUIPMENT["low-voltage"],
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
      "Most property managers juggle a dozen vendors. Woola Build collapses that into one accountable partner, with maintenance packages, envelope work, interior and exterior trades, and construction project management coordinated by an in-house team.",
    heroImage:
      "https://images.unsplash.com/photo-1632862378069-4ad0348cea4f?w=1400&q=80&auto=format&fit=crop",
    heroImageAlt: "Project team reviewing construction plans on site",
    accent: "from-brand-400/10 via-ink-800/5 to-transparent",
    heroKeywords: ["Maintenance", "Envelope", "Renovations", "Property Services", "Roofing", "Construction PM"],
    stats: [
      { value: "120+", label: "Buildings under maintenance", sub: "Quarterly + annual programs" },
      { value: "Same week", label: "Service dispatch", sub: "Routine work, contracted clients" },
      { value: "$8.4M", label: "Annual construction volume", sub: "Tenant improvements & renos" },
      { value: "Gold Seal", label: "Certified project managers", sub: "On every $250k+ project" },
    ],
    brands: [
      { name: "Soprema", domain: "soprema.com" },
      { name: "Sika", domain: "sika.com" },
      { name: "Tremco", domain: "tremcosealants.com" },
      { name: "Henry", domain: "henry.com" },
      { name: "GAF", domain: "gaf.com" },
      { name: "IKO", domain: "iko.com" },
      { name: "Hardie", domain: "jameshardie.com" },
      { name: "Benjamin Moore", domain: "benjaminmoore.com" },
      { name: "Sherwin-Williams", domain: "sherwin-williams.com" },
      { name: "Schluter", domain: "schluter.com" },
      { name: "Kohler Plumbing", domain: "kohler.com" },
      { name: "Schlage", domain: "schlage.com" },
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
          "Full waterproofing membrane replacement on a two-level parkade (22,000 sq ft), completed in occupied condition over six weekend phases. Zero vehicle relocation required.",
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
          "Quarterly maintenance contract across six buildings: roof, drainage, parkade, life-safety, exterior cleaning, and small carpentry. Single PO, single invoice, single dispatcher.",
        image:
          "https://images.unsplash.com/photo-1718152521364-b9655b8a7926?w=1200&q=80&auto=format&fit=crop",
        alt: "Technician pressure washing a commercial walkway",
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
        a: "Yes. Bylaw review, council approvals, permit applications and inspections are all handled by our PM team. Strata councils get a single point of contact through every phase.",
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
            "Building maintenance is planned, recurring work that keeps a property in good shape: inspections, cleaning, small repairs, and life-safety checks. Most strata and commercial buildings sign an annual PM (preventative maintenance) contract with a fixed scope and price. The alternative, waiting until something breaks, always costs more and shows up at the worst time.",
          image: "/primers/maintenance.jpg",
          imageAlt: "A professional trade painter performing interior building maintenance",
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
        equipment: EQUIPMENT.maintenance,
      },
      {
        slug: "envelope",
        name: "Building Envelope",
        short: "Roof, cladding, sealants",
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
          image: "/primers/envelope.jpg",
          imageAlt: "Flat commercial roof covered with EPDM membrane roofing",
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
        equipment: EQUIPMENT.envelope,
      },
      {
        slug: "construction",
        name: "Construction & Renos",
        short: "Tenant improvements",
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
          image: "/primers/construction.jpg",
          imageAlt: "Interior construction: installing drywall on framed walls",
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
        equipment: EQUIPMENT.construction,
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
            "Property services is the catch-all for the small stuff: painting a hallway, fixing a lobby door closer, replacing a fence board, hanging new numerals on suite doors. These are the jobs too small to bid as a project but too many to ignore. We dispatch them same-week and close each one with a photo-documented work order that shows before, during, and after.",
          image: "/primers/property-services.jpg",
          imageAlt: "Worker pressure-washing an exterior building surface",
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
        equipment: EQUIPMENT["property-services"],
      },
    ],
  },
];

export const allServices = divisions.flatMap((d) =>
  d.services.map((s) => ({ ...s, division: d }))
);

// Lowercase a service name for mid-sentence use, preserving acronyms (HVAC, LED, EV).
export function lowerName(name: string) {
  return name
    .split(" ")
    .map((w) => (/[A-Z]{2,}/.test(w) ? w : w.toLowerCase()))
    .join(" ");
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
