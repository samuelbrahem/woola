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
    image: "/equipment-renders/boiler.webp",
    imageAlt: "Cutaway render of a high-efficiency boiler",
    name: "Heating",
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
    image: "/equipment-renders/heat-pump.webp",
    imageAlt: "Cutaway render of a heat pump outdoor unit",
    name: "Air Conditioning & Cooling",
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
    image: "/primers/plumbing.jpg",
    imageAlt: "Wall-hung tankless water heaters in a mechanical closet",
    name: "Plumbing",
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
    image: "/equipment-renders/water-heater.webp",
    imageAlt: "Cutaway render of a residential hot water tank",
    name: "Hot Water",
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
    image: "/equipment-renders/pump.webp",
    imageAlt: "Cutaway render of a sump pump",
    name: "Drains & Sewer",
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
    image: "/primers/gas.jpg",
    imageAlt: "Wall-hung condensing gas boiler",
    name: "Gas Fitting",
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
    image: "/equipment/hvac/erv-hrv.jpg",
    imageAlt: "Heat recovery ventilator with heat exchanger core",
    name: "Indoor Air Quality",
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
    image: "/equipment-renders/controls.webp",
    imageAlt: "Smart thermostat render",
    name: "Repairs",
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
    image: "/equipment-renders/gas-heater.webp",
    imageAlt: "Cutaway render of a high-efficiency furnace",
    name: "Installations & Replacement",
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
    image: "/equipment/maintenance/hvac-filter.webp",
    imageAlt: "Pleated HVAC air filter",
    name: "Home Maintenance Plans",
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
    image: "/primers/hvac.jpg",
    imageAlt: "Ductless mini-split indoor unit on a wall",
    name: "Emergency Service",
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
