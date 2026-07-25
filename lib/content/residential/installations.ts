import type { ServiceContent } from "../types";

export const installations: ServiceContent = {
  lead: [
    "New mechanical equipment is one of the larger cheques you will write for your home, and the installation matters more than the logo on the box. A mid-range furnace installed with care will outperform a premium one installed badly, every time.",
    "Woola installs heat pumps, air conditioners, furnaces, boilers, and water heaters across Metro Vancouver: sized to the house, finished to current code, and set up so the equipment can be serviced easily for the rest of its life.",
  ],
  blocks: [
    {
      heading: "Sizing comes first",
      paragraphs: [
        "Before we recommend equipment, we look at the home it has to serve: the building, the ductwork or piping, the insulation, and how you live in the space. Correct sizing decides how comfortable the system feels and what it costs to run, so we get that right before talking models.",
      ],
    },
    {
      heading: "Our installation services",
      bullets: [
        "Heat pumps",
        "Air conditioners",
        "Furnaces",
        "Boilers",
        "Water heaters",
        "Plumbing fixtures and piping upgrades",
      ],
    },
    {
      heading: "Rebates without the homework",
      paragraphs: [
        "CleanBC and FortisBC both offer rebates on heat pumps and other qualifying high-efficiency equipment. We know which products qualify and we handle the applications ourselves, so the rebate arrives without you spending your evenings on it.",
      ],
    },
    {
      heading: "Already have a quote?",
      paragraphs: [
        "If another contractor has quoted you a replacement, we are happy to give you a free second opinion. Sometimes we confirm the quote is fair. Sometimes we find the proposed equipment is oversized, undersized, or more than the situation calls for. Either way you decide with better information.",
      ],
    },
  ],
  closing: {
    heading: "An install you never have to think about",
    paragraphs: [
      "The best compliment an installation can receive is silence: no callbacks, no odd noises, no surprises on the utility bill. That is the finish line we work toward on every project.",
    ],
  },
  cta: { label: "Request a quote", href: "/contact" },
  related: [
    { label: "Get a free second opinion", href: "/second-opinion", note: "Already have a quote? Have us check it" },
    { label: "Heating systems", href: "/residential/heating", note: "Furnaces, boilers, and heat pumps" },
    { label: "Air conditioning and cooling", href: "/residential/cooling", note: "Cooling equipment done right" },
    { label: "Hot water systems", href: "/residential/hot-water", note: "Tanks and tankless heaters" },
  ],
};
