import type { ServiceContent } from "../types";

export const dataCentres: ServiceContent = {
  lead: [
    "A data centre's standby power is only as good as its last test. Woola Power services the generators, transfer switches, UPS systems, and fuel that stand between a utility outage and a dropped data hall, with the test records an uptime commitment depends on.",
  ],
  blocks: [
    {
      heading: "What we service",
      bullets: [
        "Single and paralleled standby generator plants",
        "Automatic transfer switches and paralleling switchgear",
        "UPS systems and battery strings",
        "Day tanks, bulk fuel, and fuel polishing",
        "Load-bank testing to full nameplate, with larger banks brought in as the site requires",
        "CSA C282 inspections and annual reporting",
      ],
    },
    {
      heading: "How we work on live sites",
      paragraphs: [
        "Work is planned around the facility's change windows, with a written method of procedure before anyone opens a cabinet. Testing runs on the facility's schedule, redundancy is maintained throughout, and every visit closes with a report: readings, photos, deficiencies, and the next due dates.",
      ],
    },
  ],
  closing: {
    heading: "Talk to Woola Power",
    paragraphs: ["Send us the site's generator and UPS inventory and the current test schedule, and we will propose a maintenance program."],
  },
  cta: { label: "Request a program proposal", href: "/contact" },
  related: [
    { label: "Maintenance & inspections", href: "/power/maintenance-inspections", note: "The core generator program" },
    { label: "Fuel systems", href: "/power/fuel-systems", note: "Polishing, testing, and tank service" },
  ],
  needsFromBrett: [
    "NEW PAGE from the Oct 2026 review: Woola has not serviced a data centre yet. Copy describes capability only, no past-work claims. Confirm before launch and add references once the first site is signed.",
  ],
};
