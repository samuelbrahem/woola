import {
  Flame,
  Snowflake,
  Droplets,
  ShowerHead,
  Waves,
  Fuel,
  Wind,
  Wrench,
  Hammer,
  CalendarCheck,
  Siren,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ResidentialService = {
  slug: string;
  name: string;
  navName: string;
  pageTitle: string;
  short: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  /** Page figure. Reuses existing approved renders/photos until dedicated residential photography lands. */
  image: string;
  imageAlt: string;
};

/**
 * The homeowner-facing service tree. Residential customers don't think in
 * divisions; they think about a broken furnace or a leaking pipe. Long-form
 * page copy lives in lib/content/residential/.
 */
export const residentialServices: ResidentialService[] = [
  {
    slug: "heating",
    image: "/equipment-renders/combi-boiler.webp",
    imageAlt: "Cutaway render of a wall-hung condensing combi boiler",
    name: "Heating",
    navName: "Heating",
    pageTitle: "Residential Heating Systems",
    short: "Furnaces, boilers, heat pumps",
    description:
      "Furnace, boiler, heat pump, and radiant heating service, repair, and installation, with seasonal tune-ups that keep winter boring.",
    icon: Flame,
    highlights: [
      "Furnace and boiler service, repair, installation",
      "Cold-climate heat pump installs",
      "Radiant floor and hydronic systems",
      "CleanBC rebate paperwork handled",
    ],
  },
  {
    slug: "cooling",
    image: "/equipment-renders/mini-split.webp",
    imageAlt: "Cutaway render of a ductless mini-split indoor head",
    name: "Air Conditioning & Cooling",
    navName: "Cooling",
    pageTitle: "Residential Air Conditioning & Cooling",
    short: "AC, heat pumps, mini-splits",
    description:
      "Central air, heat pump cooling, and ductless mini-splits, sized for your home and maintained so they're ready before the first hot week.",
    icon: Snowflake,
    highlights: [
      "Central AC and condensing units",
      "Ductless mini-split systems",
      "Seasonal maintenance and inspections",
      "Refrigerant diagnostics and repairs",
    ],
  },
  {
    slug: "plumbing",
    image: "/equipment-renders/sink-plumbing.webp",
    imageAlt: "Under-sink plumbing assembly with P-trap and shutoff valves",
    name: "Plumbing",
    navName: "Plumbing",
    pageTitle: "Residential Plumbing Services",
    short: "Repairs, fixtures, repiping",
    description:
      "From dripping fixtures to whole-home repiping, plumbing work that's explained clearly, priced up front, and done properly the first time.",
    icon: Droplets,
    highlights: [
      "General plumbing repairs",
      "Fixture installation and replacement",
      "Water line repairs and repiping",
      "Leak detection and inspections",
    ],
  },
  {
    slug: "hot-water",
    image: "/equipment-renders/tankless.webp",
    imageAlt: "Cutaway render of a tankless gas water heater",
    name: "Hot Water",
    navName: "Hot Water",
    pageTitle: "Residential Hot Water Systems",
    short: "Tanks & tankless systems",
    description:
      "Hot water tank replacement, tankless water heaters, and repairs, with honest sizing advice so you buy the right system, not the biggest one.",
    icon: ShowerHead,
    highlights: [
      "Tank replacement, often same-week",
      "Tankless water heater installs",
      "Expansion tanks and repairs",
      "Annual maintenance",
    ],
  },
  {
    slug: "drains",
    image: "/equipment-renders/drain-auger.webp",
    imageAlt: "Drum-style drain cleaning machine with steel cable",
    name: "Drains & Sewer",
    navName: "Drains",
    pageTitle: "Residential Drain Cleaning & Sewer Services",
    short: "Cleaning, jetting, cameras",
    description:
      "Slow drains and recurring backups diagnosed with cameras, cleared with the right tool, and explained so it's less likely to happen again.",
    icon: Waves,
    highlights: [
      "Drain cleaning and hydro jetting",
      "Camera inspections",
      "Sewer line diagnostics",
      "Leak detection and drain repairs",
    ],
  },
  {
    slug: "gas-fitting",
    image: "/equipment-renders/gas-fireplace.webp",
    imageAlt: "Cutaway render of a gas fireplace insert",
    name: "Gas Fitting",
    navName: "Gas Fitting",
    pageTitle: "Residential Gas Fitting Services",
    short: "Lines, fireplaces, BBQs",
    description:
      "Licensed gas fitters for new lines, appliance connections, fireplaces, and outdoor living, with safety and code compliance non-negotiable.",
    icon: Fuel,
    highlights: [
      "Gas line installation",
      "Fireplace and appliance connections",
      "BBQ and patio heater hookups",
      "Gas leak testing and repairs",
    ],
  },
  {
    slug: "indoor-air-quality",
    image: "/equipment-renders/hrv.webp",
    imageAlt: "Cutaway render of a heat recovery ventilator",
    name: "Indoor Air Quality",
    navName: "Air Quality",
    pageTitle: "Residential Indoor Air Quality",
    short: "Ventilation, filtration, HRVs",
    description:
      "HRVs, filtration, humidity control, and ventilation improvements that make the air in your home healthier and your HVAC work easier.",
    icon: Wind,
    highlights: [
      "HRV and ERV systems",
      "High-efficiency filtration and purification",
      "Whole-home humidifiers",
      "IAQ assessments",
    ],
  },
  {
    slug: "repairs",
    image: "/equipment-renders/service-gauges.webp",
    imageAlt: "Refrigeration manifold gauges beside a multimeter",
    name: "Repairs",
    navName: "Repairs",
    pageTitle: "Residential Mechanical Repairs",
    short: "Honest mechanical diagnosis",
    description:
      "Heating, cooling, plumbing, and gas appliance repairs with a clear diagnosis and your options explained, not pressure to replace.",
    icon: Wrench,
    highlights: [
      "Heating and cooling repairs",
      "Plumbing and boiler repairs",
      "Gas appliance repairs",
      "Mechanical diagnostics",
    ],
  },
  {
    slug: "installations",
    image: "/equipment-renders/home-heat-pump.webp",
    imageAlt: "Cutaway render of a residential heat pump outdoor unit",
    name: "Installations & Replacement",
    navName: "Installations",
    pageTitle: "Residential Equipment Installation & Replacement",
    short: "Sized right, installed right",
    description:
      "Heat pumps, furnaces, ACs, boilers, and water heaters installed to current code with proper sizing, because installation quality outlasts brand names.",
    icon: Hammer,
    highlights: [
      "Heat pumps, furnaces, and ACs",
      "Boilers and water heaters",
      "Plumbing fixtures and piping upgrades",
      "Permits and inspections handled",
    ],
  },
  {
    slug: "maintenance-plans",
    image: "/equipment-renders/filter-service.webp",
    imageAlt: "Fresh furnace filter halfway into its rack",
    name: "Home Maintenance Plans",
    navName: "Maintenance",
    pageTitle: "Residential Home Maintenance Plans",
    short: "Seasonal care, priority booking",
    description:
      "Annual heating, cooling, and plumbing maintenance with priority scheduling and reminders, so small issues get caught before they cost you.",
    icon: CalendarCheck,
    highlights: [
      "Annual HVAC maintenance",
      "Plumbing system checks",
      "Priority scheduling",
      "Maintenance reminders",
    ],
  },
  {
    slug: "emergency",
    image: "/equipment-renders/burst-pipe.webp",
    imageAlt: "Burst copper pipe beside a brass shutoff valve",
    name: "Emergency Service",
    navName: "Emergency",
    pageTitle: "Residential Emergency Mechanical Services",
    short: "No heat, leaks, urgent repairs",
    description:
      "Lost heat in January, a burst pipe, a failed water heater: call and a real person will help you triage, then we get a technician moving.",
    icon: Siren,
    highlights: [
      "Heating and cooling emergencies",
      "Plumbing emergencies and water leaks",
      "Gas system concerns",
      "Urgent mechanical repairs",
    ],
  },
];

export function getResidentialService(slug: string) {
  return residentialServices.find((s) => s.slug === slug) ?? null;
}
