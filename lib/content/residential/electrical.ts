import type { ServiceContent } from "../types";

export const electrical: ServiceContent = {
  lead: [
    "Older homes across Metro Vancouver are being asked to do things their wiring was never sized for: a heat pump, an EV in the garage, an induction range, a suite downstairs. Woola Electrical's licensed electricians handle the upgrades that make that possible, with the permit pulled and the inspection booked.",
    "The same crews work in strata and commercial buildings all week, so panel work, service upgrades, and charger installs are routine for them rather than a special project.",
  ],
  blocks: [
    {
      heading: "Panel and service upgrades",
      paragraphs: [
        "If your panel is full, still on fuses, or rated at 100 amps and you are adding a heat pump or EV charger, a service upgrade is usually the first step. We size the new service for what you actually plan to add, coordinate the BC Hydro disconnect, and leave you with a labelled panel and the inspection paperwork.",
      ],
    },
    {
      heading: "What we do in homes",
      bullets: [
        "Panel replacements and 200-amp service upgrades",
        "Level 2 EV charger installation",
        "New circuits for ranges, dryers, hot tubs, and workshops",
        "Lighting, pot lights, and dimmer upgrades",
        "Outlets, switches, GFCI and AFCI protection",
        "Troubleshooting tripping breakers and dead circuits",
        "Electrical for suites and renovations",
      ],
    },
    {
      heading: "EV chargers, done once",
      paragraphs: [
        "A home charger install is a load calculation first and a mounting job second. We check that the panel can carry the charger, add a load-management device if it can't, and run the circuit properly so it passes inspection and keeps up with the car. Rebate paperwork is handled for you where a program applies.",
      ],
    },
    {
      heading: "Permitted and inspected",
      paragraphs: [
        "Every job that needs a permit gets one. That protects your insurance, your resale, and the next person who opens the panel. You get the permit number and inspection result with the invoice.",
      ],
    },
  ],
  closing: {
    heading: "Wiring that keeps up with the house",
    paragraphs: [
      "Electrical work is invisible when it is done right. Upgrade the service once, do the circuits properly, and the heat pump, the charger, and the kitchen just work.",
    ],
  },
  cta: { label: "Book an electrician", href: "/contact" },
  related: [
    { label: "Standby generators", href: "/residential/generators", note: "Backup power for outages" },
    { label: "Heating", href: "/residential/heating", note: "Heat pump installs need the right circuit" },
    { label: "Get a free second opinion", href: "/second-opinion", note: "Already have an electrical quote?" },
  ],
  needsFromBrett: [
    "Confirm residential electrical is dispatched through Woola Electrical and which municipalities it covers for homes.",
    "Confirm which EV charger brands Woola installs and whether any rebate programs are currently active.",
  ],
};
