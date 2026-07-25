import type { ServiceContent } from "../types";

export const infraredScanning: ServiceContent = {
  lead: [
    "Most electrical failures give off heat before they give out. A loose lug, an overloaded conductor, a breaker with worn contacts: each one runs hot for months before it lets go, and an infrared camera can see it with the panel cover off.",
    "Woola Electrical performs thermographic scanning of panels, switchgear, and connections in commercial and strata buildings, and turns the images into a report your insurer and your maintenance plan can both use.",
  ],
  blocks: [
    {
      heading: "How a scan works",
      paragraphs: [
        "Scanning happens under load, during a normal operating day, because a de-energized panel hides its faults. An electrician removes covers, scans each panel and connection point, and records thermal images alongside visual ones. Anomalies are classified by severity: monitor, repair soon, or repair now. Nothing shuts down and nobody in the building notices.",
      ],
    },
    {
      heading: "What we scan",
      bullets: [
        "Main switchgear and distribution panels",
        "Sub-panels and splitters",
        "Breakers, lugs, and cable terminations",
        "Disconnects and contactors",
        "Connections at high-load building equipment",
      ],
    },
    {
      heading: "The report is the product",
      paragraphs: [
        "You receive a written report with paired thermal and visual images, severity ratings, and specific repair recommendations, not a folder of pictures. Repeat scans build a baseline, so next year's report shows exactly what changed. That history is what a capital plan or a depreciation report wants to lean on.",
      ],
    },
    {
      heading: "Insurance and risk",
      paragraphs: [
        "Insurers increasingly ask commercial buildings for evidence of electrical maintenance, and some request thermographic inspection outright. A current scan report answers that letter with documentation instead of a scramble. It is also simply the cheapest way to find the fault that would otherwise become a claim.",
      ],
    },
    {
      heading: "Scanning inside a maintenance program",
      paragraphs: [
        "A one-time scan is useful; a scheduled one is a strategy. We fold thermography into annual electrical inspection programs, so the scan, the repairs it finds, and the follow-up all land under one program and one report.",
      ],
    },
  ],
  closing: {
    heading: "See the failure coming",
    paragraphs: [
      "The faults that cause panel failures and unplanned outages are visible in infrared long before they let go. A few hours with a camera is the difference between finding one and reading about it in an incident report.",
    ],
  },
  cta: { label: "Schedule a scan", href: "/contact" },
  related: [
    { label: "Electrical service & maintenance", href: "/electrical/electrical", note: "The program scans belong inside" },
    { label: "Panel & service upgrades", href: "/electrical/panel-upgrades", note: "When a scan says replace, not repair" },
    { label: "Generator maintenance & inspections", href: "/power/maintenance-inspections", note: "The same discipline for standby power" },
  ],
  needsFromBrett: [
    "NEW PAGE: confirm infrared scanning is actively sold as a standalone service, not only bundled into maintenance programs.",
    "Confirm thermographer credentials before citing any (e.g. certified thermographer level, ASTTBC affiliation).",
    "Confirm the insurance claim: have client scan reports actually been submitted to insurers on request?",
    "Confirm recommended scan frequency and whether pricing runs per panel or per building.",
  ],
};
