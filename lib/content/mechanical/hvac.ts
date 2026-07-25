import type { ServiceContent } from "../types";

export const hvac: ServiceContent = {
  lead: [
    "Woola services commercial HVAC across Metro Vancouver: the heating plant, the cooling equipment, and the ventilation systems that move air through the building. One licensed team covers all three, so a diagnosis considers the whole system rather than a single piece of equipment.",
    "This page is the map. Each part of the HVAC scope has its own detailed page below, and everything we do is anchored by scheduled preventative maintenance.",
  ],
  blocks: [
    {
      heading: "Commercial HVAC service in Metro Vancouver",
      paragraphs: [
        "Most HVAC problems cross boundaries. A comfort complaint can start at a boiler, a rooftop unit, a stuck damper, or an air handler that lost its balance years ago. Because we maintain heating, cooling, and ventilation equipment under one roof, we can trace an issue to its actual source instead of handing it between contractors.",
      ],
    },
    {
      heading: "Heating systems",
      paragraphs: [
        "Boilers, commercial heat pumps, hydronic distribution, unit heaters, and radiant equipment. We keep heating plants reliable through the season and help owners plan replacements before failures force the decision.",
      ],
    },
    {
      heading: "Cooling systems",
      paragraphs: [
        "Rooftop units, chillers and cooling towers, condensing units, and VRF systems. Cooling equipment is among the largest mechanical investments in a building, and it earns its keep through maintenance, not luck.",
      ],
    },
    {
      heading: "Ventilation and indoor air quality",
      paragraphs: [
        "Air handling units, make-up air units, exhaust fans, energy recovery equipment, and parkade ventilation with gas detection. Ventilation affects air quality, building pressure, moisture control, and life safety, which makes it too important to leave unmeasured.",
      ],
    },
    {
      heading: "Maintenance comes first",
      paragraphs: [
        "Every system on this page performs better on a preventative maintenance program. Scheduled visits with documented condition reporting catch developing issues early and give you a defensible basis for capital planning.",
      ],
    },
  ],
  closing: {
    heading: "Start with the system that worries you",
    paragraphs: [
      "Pick the page that matches the equipment you are dealing with, or contact us and describe the symptom. We will point you to the right starting point and, where it makes sense, propose a maintenance program that covers the whole system.",
    ],
  },
  cta: { label: "Request service", href: "/contact" },
  related: [
    {
      label: "Heating systems",
      href: "/mechanical/heating-systems",
      note: "Boilers, heat pumps, hydronic distribution, unit heaters",
    },
    {
      label: "Cooling systems",
      href: "/mechanical/cooling-systems",
      note: "RTUs, chillers, cooling towers, condensing units, VRF",
    },
    {
      label: "Ventilation and indoor air quality",
      href: "/mechanical/ventilation-iaq",
      note: "AHUs, MAUs, exhaust, energy recovery, parkade systems",
    },
    {
      label: "Preventative maintenance programs",
      href: "/mechanical/preventative-maintenance",
      note: "The foundation for every system on this page",
    },
  ],
};
