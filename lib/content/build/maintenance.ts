import type { ServiceContent } from "../types";

export const maintenance: ServiceContent = {
  lead: [
    "A building falls apart on a schedule, so its maintenance should run on one too. Roof drains clog before the November storms, sealant joints give a little more each winter, and the parkade membrane wears exactly where the tires go.",
    "Woola Build runs quarterly and annual maintenance packages for strata and commercial properties: one contract, one dispatcher, and one monthly invoice covering the trades a building actually needs.",
  ],
  blocks: [
    {
      heading: "What a package covers",
      bullets: [
        "Roof inspections and drain clearing",
        "Parkade sweeps and membrane condition checks",
        "Exterior sealant and envelope reviews",
        "Common-area repairs and door hardware",
        "Exterior cleaning and pressure washing",
        "Irrigation startup and winterization",
        "Life-safety system checks",
        "Small carpentry and painting",
      ],
    },
    {
      heading: "One contract instead of a vendor list",
      paragraphs: [
        "Most managers inherit a phone list: a roofer, a painter, a pressure-washing outfit, a handyman, each with their own invoice and their own excuses. A maintenance package collapses that into one accountable contract with a defined scope, pre-agreed unit rates for extras, and a single monthly invoice line-itemized by building and trade.",
      ],
    },
    {
      heading: "Documentation your council can use",
      paragraphs: [
        "Every visit closes with a photo-documented condition report. Over a year those reports become a running record of the building's health, which is exactly what your depreciation report and your budget meeting want to see. When we recommend spending money, the photos come with the recommendation.",
      ],
    },
    {
      heading: "A schedule built per building",
      paragraphs: [
        "A wood-frame strata and a concrete office tower do not need the same visits. Packages are scoped per asset: the frequency, the checklist, and the trades on the truck all match the building, and the scope adjusts at renewal as the building ages.",
      ],
    },
    {
      heading: "Where mechanical fits",
      paragraphs: [
        "Boilers, rooftop units, and pumps live under their own program with Woola Mechanical, and plenty of clients run both. The two schedules coordinate, so the building gets one calendar instead of two more vendors.",
      ],
    },
  ],
  closing: {
    heading: "Boring on purpose",
    paragraphs: [
      "Good maintenance looks uneventful: no surprise invoices, no emergency levies, a building that simply keeps working. That is the product, and the buildings that have it planned for it.",
    ],
  },
  cta: { label: "Request a maintenance proposal", href: "/contact" },
  related: [
    { label: "Mechanical preventative maintenance", href: "/mechanical/preventative-maintenance", note: "The mechanical counterpart to this program" },
    { label: "Property services", href: "/build/property-services", note: "On-call work between scheduled visits" },
    { label: "Building envelope", href: "/build/envelope", note: "Deeper care for roofs, decks, and sealants" },
  ],
  needsFromBrett: [
    "Confirm standard package inclusions: irrigation and life-safety appear in division data, verify both are self-performed or coordinated through partners.",
  ],
};
