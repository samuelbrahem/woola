import type { ServiceContent } from "../types";

export const panelUpgrades: ServiceContent = {
  lead: [
    "Buildings are being asked to carry loads they were never wired for. Heat pumps replacing gas boilers, EV chargers in the parkade, new equipment in every suite: all of it lands on a panel and a service sized for a different era.",
    "Woola Electrical scopes and delivers panel replacements and service upgrades for buildings across Metro Vancouver. FSR-certified leads run the work, which keeps permits and inspection sign-off in-house from start to finish.",
  ],
  blocks: [
    {
      heading: "When a panel needs replacing",
      paragraphs: [
        "Age alone is not the verdict; condition is. Panels with obsolete breakers you can no longer buy, heat damage at the lugs, corrosion, or known-problem hardware are candidates for replacement. So is any panel that trips constantly because the building's real load has outgrown it. We inspect before we recommend, and if a repair honestly solves it, a repair is what we quote.",
      ],
    },
    {
      heading: "Capacity for electrification",
      paragraphs: [
        "Before a heat pump conversion or a charging rollout, someone has to do the load math. We measure what your service actually carries, model what the new equipment adds, and tell you whether you need a service upgrade, a load-managed workaround, or nothing at all. That answer can move a project budget by six figures, so it is worth getting from an electrician rather than an equipment brochure.",
      ],
    },
    {
      heading: "Service upgrades",
      paragraphs: [
        "Upgrading a building's electrical service, from a bigger panel in a small commercial unit up to a full switchgear replacement, means coordinating the utility, the permits, and a planned outage your tenants can live with. We sequence the cutover for the shortest possible downtime and schedule it around how the building operates.",
      ],
    },
    {
      heading: "What a project includes",
      bullets: [
        "Load measurement and capacity assessment",
        "Panel and sub-panel replacement",
        "Main service and switchgear upgrades",
        "Dedicated circuits for new equipment",
        "Coordination studies for downstream breakers",
        "Arc-flash studies and labelling where required",
        "Utility coordination and planned cutovers",
        "Permits, inspection, and closeout records",
      ],
    },
    {
      heading: "Panels and standby power together",
      paragraphs: [
        "Service upgrades often land alongside generator and transfer-switch projects, and the two scopes share the same distribution gear. Woola Power handles standby generation, so when both are in play you get one coordinated project instead of two contractors negotiating over the same switchboard.",
      ],
    },
  ],
  closing: {
    heading: "Get the load math first",
    paragraphs: [
      "Every electrification project starts with the same question: can the building carry it? Answer that before anyone orders equipment and everything downstream gets cheaper. We can measure your service and give you the number.",
    ],
  },
  cta: { label: "Assess your capacity", href: "/contact" },
  related: [
    { label: "EV charging", href: "/electrical/ev-chargers", note: "The load driving most upgrades" },
    { label: "Integrated contracting", href: "/power/integrated-contracting", note: "Generator and distribution projects" },
    { label: "Infrared scanning", href: "/electrical/infrared-scanning", note: "Check panel condition before deciding" },
  ],
  needsFromBrett: [
    "NEW PAGE: confirm Panel & Service Upgrades is offered as a standalone marketed service under this name.",
    "Confirm we handle utility-side coordination with BC Hydro for service upgrades, and typical project sizes.",
    "Division data references a 1,200-amp service upgrade project (Fraser Valley logistics campus); confirm it is real and citable here.",
    "Confirm load measurement is delivered with metering on site, not calculation only, before we describe it that way.",
  ],
};
