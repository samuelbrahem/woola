import type { ServiceContent } from "../types";

export const preventativeMaintenance: ServiceContent = {
  lead: [
    "A preventative maintenance agreement (PMA) puts every mechanical system in your building on a schedule: inspected, serviced, and documented by the same crew, with a report after each visit. Fewer emergency calls, a service history you own, and replacement decisions made with notice instead of under pressure.",
  ],
  blocks: [
    {
      heading: "What the agreement covers",
      paragraphs: [
        "We start with a walk-through and an equipment inventory, then build a calendar for the building. A typical program includes:",
      ],
      bullets: [
        "Spring and fall HVAC visits: rooftop units, heat pumps, make-up air, and fan coils",
        "Boiler and hydronic plant service before and after heating season",
        "Pump, expansion tank, and domestic hot water checks",
        "Backflow testing and gas safety inspections on their due dates",
        "Drain and sump maintenance ahead of the wet season",
        "Filter changes, belt and bearing checks, and combustion tuning",
        "Refrigeration and controls checks where the building has them",
      ],
    },
    {
      heading: "What you receive",
      paragraphs: [
        "Every visit closes with a digital report: equipment condition, photos, anything developing, and a recommendation sorted into fix now, plan for, or watch. One contract, one invoice, and priority dispatch on the emergency line between visits.",
      ],
    },
  ],
  closing: {
    heading: "Set up a program for your building",
    paragraphs: [
      "Send us the address and a list of the equipment you know about. We will walk the building and come back with a proposed schedule and a fixed annual price.",
    ],
  },
  cta: { label: "Request a maintenance proposal", href: "/contact" },
  needsFromBrett: [
    "Confirm the typical visit cadence (quarterly vs. spring/fall) and whether backflow and gas inspections are included by default or priced separately.",
    "Confirm the name of the reporting platform so the page can reference it.",
  ],
};
