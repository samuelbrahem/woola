import type { ServiceContent } from "../types";

export const evChargers: ServiceContent = {
  lead: [
    "EV charging in a strata or commercial building is a capacity problem before it is a hardware problem. The chargers are the easy part. The real questions are how many cars your electrical service can feed, and how each owner gets billed fairly for what they use.",
    "Woola Electrical is a CleanBC EV Ready certified planner. We design charging rollouts at the building level: load management, sub-metering, rebate applications, and the installation itself, from permit to energization.",
  ],
  blocks: [
    {
      heading: "EV Ready plans for strata buildings",
      paragraphs: [
        "An EV Ready plan maps how every stall in your parkade gets charging over time, without a service upgrade the building cannot afford. We model your available capacity, design the load-managed distribution, and produce the plan CleanBC requires for its rebates. Councils use it to answer the question owners keep asking: when can I charge at my stall?",
      ],
    },
    {
      heading: "Load management and billing",
      paragraphs: [
        "Load management software shares your building's spare amps across many chargers, so dozens of cars can charge overnight on capacity that would serve only a handful of unmanaged stalls. Sub-metering then bills each owner for exactly the power their car drew. We install and configure networked systems from FLO, ChargePoint, and Wallbox, and hand the billing platform to your council or manager at closeout.",
      ],
    },
    {
      heading: "What we install",
      bullets: [
        "Level 2 chargers for strata stalls, workplaces, and homes",
        "Networked, load-managed strata charging systems",
        "DC fast charging for fleets and commercial sites",
        "Dedicated circuits and sub-panels for charging loads",
        "Sub-metering and billing platform setup",
        "BC Hydro and CleanBC rebate applications",
      ],
    },
    {
      heading: "Rebates and paperwork",
      paragraphs: [
        "CleanBC and BC Hydro both offer charging rebates, each with rules about who applies, when, and with what documentation. We file the paperwork as part of the project, so the rebate does not depend on a volunteer council member's spare evenings.",
      ],
    },
    {
      heading: "When the panel is the real problem",
      paragraphs: [
        "Some buildings genuinely lack the capacity for the charging they want, even with load management. When that is the case we say so early and scope the service upgrade honestly, because a charging rollout built on an overloaded service helps nobody.",
      ],
    },
  ],
  closing: {
    heading: "Charging that outlasts the install",
    paragraphs: [
      "The buildings happiest with their charging five years on are the ones that planned for every stall, not just the first few. Start with the plan. The hardware follows.",
    ],
  },
  cta: { label: "Plan your charging rollout", href: "/contact" },
  related: [
    { label: "Panel & service upgrades", href: "/electrical/panel-upgrades", note: "When capacity runs out" },
    { label: "Electrical service & maintenance", href: "/electrical/electrical", note: "Care for the system behind the chargers" },
    { label: "For property managers", href: "/property-managers", note: "How we work with portfolios" },
  ],
  needsFromBrett: [
    "Confirm whether we service and repair chargers we did not install (the page currently makes no repair claims).",
    "Confirm the billing platforms we hand over (SWTCH appears in division branding; FLO, ChargePoint, and Wallbox are named here).",
  ],
};
