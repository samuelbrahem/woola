import type { ServiceContent } from "../types";

export const refrigeration: ServiceContent = {
  lead: [
    "When refrigeration fails, the cost is measured in product, not comfort. A walk-in that loses temperature overnight can take a week's inventory with it, and in food service or healthcare the stakes include safety, not just dollars. Woola provides commercial refrigeration service across Metro Vancouver for restaurants, retail, grocery, healthcare, and institutional facilities.",
    "Our focus is uptime. Refrigeration equipment runs around the clock with no off-season and thin temperature margins, so we build service around preventing failures, responding quickly when they happen, and keeping every system's condition documented.",
  ],
  blocks: [
    {
      heading: "Commercial refrigeration services",
      bullets: [
        "Preventative maintenance programs",
        "Refrigeration system repairs",
        "Walk-in coolers and freezers",
        "Reach-in equipment",
        "Condensing units and compressors",
        "Controls and components",
        "Refrigerant leak detection and repairs",
        "Equipment replacements and retrofits",
        "Emergency refrigeration service",
        "Performance assessments and system optimization",
      ],
    },
    {
      heading: "Why refrigeration service is its own discipline",
      paragraphs: [
        "Unlike comfort cooling, refrigeration never gets a rest cycle. Compressors, condensers, evaporators, and door gaskets wear continuously, and a small deficiency compounds fast: a fouled condenser coil raises head pressure, the compressor works harder and hotter, energy use climbs, and the failure that follows arrives without much warning.",
        "Scheduled maintenance interrupts that chain. Coils get cleaned, controls get verified, temperatures and pressures get logged, and drifting performance gets flagged while it is still a service call instead of a spoiled inventory claim.",
      ],
    },
    {
      heading: "Walk-ins, reach-ins, and system components",
      paragraphs: [
        "We service walk-in coolers and freezers, reach-in equipment, and the condensing units, compressors, controls, and components behind them. Where equipment is at the end of its practical life, we handle replacements and retrofits, matching new equipment to the load rather than simply swapping like for like.",
      ],
    },
    {
      heading: "Refrigerant leaks and performance",
      paragraphs: [
        "A slow refrigerant leak quietly degrades capacity and efficiency for months before anyone connects rising energy bills to the cause. Beyond the operating cost, refrigerant loss carries environmental and regulatory weight, so leaks deserve detection and proper repair, not periodic topping up. Our performance assessments look at the whole system to find where capacity, efficiency, or reliability is being lost.",
      ],
    },
  ],
  closing: {
    heading: "Equipment that never sleeps needs a partner who checks on it",
    paragraphs: [
      "Refrigeration is the one system in your building running at full duty every hour of the year. Put it on a maintenance schedule that matches that workload, and the emergency calls get rarer and cheaper.",
    ],
  },
  cta: { label: "Request service", href: "/contact" },
  related: [
    {
      label: "Preventative maintenance programs",
      href: "/mechanical/preventative-maintenance",
      note: "Scheduled coil cleaning, controls checks, and condition logs",
    },
    {
      label: "Cooling systems",
      href: "/mechanical/cooling-systems",
      note: "Comfort cooling, condensing units, and VRF service",
    },
    {
      label: "HVAC retrofits and capital projects",
      href: "/mechanical/retrofits",
      note: "Replace end-of-life refrigeration equipment on a plan",
    },
  ],
  needsFromBrett: [
    "Confirm refrigerant handling credentials (e.g. ODP card requirements) before citing any on the page.",
    "Confirm emergency refrigeration response availability; food-service clients will ask about after-hours coverage specifically.",
  ],
};
