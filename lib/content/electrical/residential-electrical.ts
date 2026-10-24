import type { ServiceContent } from "../types";

export const residentialElectrical: ServiceContent = {
  lead: [
    "Woola Electrical does residential work the same way it does commercial work: a licensed electrician, a permit, an inspection, and a tidy finish. Houses, suites, townhomes, and laneway homes across Metro Vancouver.",
  ],
  blocks: [
    {
      heading: "What we do in homes",
      bullets: [
        "Panel and service upgrades, including 100 A to 200 A",
        "EV charger circuits and installs, with the BC Hydro rebate paperwork",
        "Dedicated circuits for heat pumps, ranges, dryers, and hot tubs",
        "Lighting, pot lights, dimmers, and exterior lighting",
        "Troubleshooting: tripping breakers, dead outlets, flickering",
        "Aluminum wiring inspections and remediation",
        "Suite and basement wiring for renovations",
      ],
    },
    {
      heading: "How a residential call runs",
      paragraphs: [
        "You call or send photos, we quote the work, and we book a time that works around your household. The electrician pulls the permit, does the work, and books the inspection. You get the inspection record and the invoice, and nothing else to chase.",
      ],
    },
  ],
  closing: {
    heading: "Book an electrician",
    paragraphs: ["Send a photo of the panel and a note on what you need, and we will come back with a price."],
  },
  cta: { label: "Request a quote", href: "/contact" },
  related: [
    { label: "EV charging", href: "/electrical/ev-chargers", note: "Home and strata charger installs" },
    { label: "Woola Residential", href: "/residential", note: "Heating, cooling, plumbing, and gas for homes" },
  ],
  needsFromBrett: ["NEW PAGE from the Oct 2026 review: confirm Electrical takes residential calls directly and whether there is a minimum call-out."],
};
