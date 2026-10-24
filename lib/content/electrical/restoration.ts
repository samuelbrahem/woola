import type { ServiceContent } from "../types";

export const restoration: ServiceContent = {
  lead: [
    "After a fire, a flood, or a major equipment failure, the electrical system is usually the first thing that has to be made safe and the last thing that gets rebuilt. Woola Electrical handles both ends: make-safe on the day, and the permitted rebuild once the scope is settled.",
  ],
  blocks: [
    {
      heading: "Make-safe and temporary power",
      paragraphs: [
        "On arrival we isolate damaged circuits, remove hazards, and get temporary power to what the building needs to keep running: life safety, sump pumps, drying equipment, and the suites that can stay occupied.",
      ],
    },
    {
      heading: "Assessment and scope",
      paragraphs: [
        "We document the damage with photos and a written scope that an adjuster can read, test what can be saved, and separate repair from replacement. Where restoration contractors are on site, we work to their schedule so drying and demolition are not waiting on us.",
      ],
    },
    {
      heading: "Rebuild",
      bullets: [
        "Replacement of damaged panels, feeders, branch wiring, and devices",
        "Permits, inspections, and BC Safety Authority paperwork handled by us",
        "Upgrades folded in where the rebuild makes them cheap to do",
        "Final test, inspection sign-off, and a closeout package for the file",
      ],
    },
  ],
  closing: {
    heading: "Call the restoration line",
    paragraphs: ["If the building has had a fire or a flood, call dispatch. Make-safe comes first, and the paperwork follows."],
  },
  cta: { label: "Request service", href: "/contact" },
  related: [
    { label: "Panel & service upgrades", href: "/electrical/panel-upgrades", note: "When a rebuild is the time to upgrade" },
    { label: "Woola Build", href: "/build", note: "Repairs and reconstruction after the electrical is done" },
  ],
  needsFromBrett: ["NEW PAGE from the Oct 2026 review: confirm restoration scope, which restoration contractors and insurers Woola already works with, and response commitment."],
};
