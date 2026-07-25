import type { ServiceContent } from "../types";

export const repairs: ServiceContent = {
  lead: [
    "Mechanical systems do not check your calendar before they fail. When the furnace quits or a pipe starts weeping, what you need is a clear diagnosis, honest options, and a repair that lasts. What you do not need is a sales pitch for a new system.",
    "Woola repairs heating, cooling, plumbing, and gas equipment in homes across Metro Vancouver. Our technicians also maintain commercial mechanical systems, so most failures are ones they have seen and solved many times before.",
  ],
  blocks: [
    {
      heading: "Our repair services",
      bullets: [
        "Heating repairs",
        "Cooling repairs",
        "Plumbing repairs",
        "Boiler and hydronic repairs",
        "Gas appliance repairs",
        "Mechanical diagnostics",
      ],
    },
    {
      heading: "Diagnose first, then decide",
      paragraphs: [
        "Guesswork gets expensive fast. We take the time to find what actually failed, show you the evidence, and price out your options before any work starts. Repairs are completed with quality parts and tested before we leave, because a repair that has not been verified is just a theory.",
      ],
    },
    {
      heading: "When repair is not the answer",
      paragraphs: [
        "Sometimes a system really is done, and pouring repair money into it would be doing you a disservice. When that is the case we say so, explain the reasoning, and give you time and information to decide. There is no pressure and no countdown clock: it is your equipment, your home, and your call.",
      ],
    },
  ],
  closing: {
    heading: "Fixed properly the first time",
    paragraphs: [
      "The measure of a good repair is that you never call about the same problem again. That is the outcome we aim for on every visit, and it is why homeowners who find us during a breakdown tend to keep our number afterwards.",
    ],
  },
  cta: { label: "Book a repair", href: "/contact" },
  related: [
    { label: "Emergency mechanical services", href: "/residential/emergency", note: "When it cannot wait for an appointment" },
    { label: "Home maintenance plans", href: "/residential/maintenance-plans", note: "Fewer breakdowns to begin with" },
    { label: "Equipment installation and replacement", href: "/residential/installations", note: "If replacement is the right call" },
  ],
};
