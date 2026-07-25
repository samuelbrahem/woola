import type { ServiceContent } from "../types";

export const cooling: ServiceContent = {
  lead: [
    "Air conditioning used to be optional in Vancouver. After the last few summers, most homeowners have stopped thinking of it that way. Cooling is now part of how a house stays livable in July, and it deserves the same professional attention as your furnace.",
    "Woola installs and services central air conditioning, heat pumps, and ductless mini-splits across Metro Vancouver. We size the equipment to the actual house, install it cleanly, and stand behind it with maintenance and repair.",
  ],
  blocks: [
    {
      heading: "Right-sized, properly installed",
      paragraphs: [
        "An oversized air conditioner short-cycles and leaves the house clammy. An undersized one runs flat out and never catches up. Before we quote anything, we look at the home itself: square footage, insulation, windows, and ductwork. The unit we recommend is the one the house needs, not the one on special this month.",
      ],
    },
    {
      heading: "Our cooling services",
      bullets: [
        "Central air conditioning systems",
        "Heat pump cooling systems",
        "Ductless mini-split systems",
        "Condensing units",
        "Seasonal maintenance and inspections",
        "Refrigerant diagnostics and repairs",
        "Equipment replacement and installation",
      ],
    },
    {
      heading: "One system for heating and cooling",
      paragraphs: [
        "For many homes the smartest cooling upgrade is a heat pump, which cools in summer and heats efficiently the rest of the year. Qualifying units are eligible for CleanBC and FortisBC rebates, and we take care of the rebate paperwork as part of the job.",
      ],
    },
    {
      heading: "After the install",
      paragraphs: [
        "Cooling equipment does its hardest work in short, intense stretches, which makes annual maintenance worth taking seriously. Coil cleaning, refrigerant checks, and a proper inspection each spring keep the system efficient and catch small problems while they are still small. Our work does not end when the equipment starts up.",
      ],
    },
  ],
  closing: {
    heading: "Ready before the heat arrives",
    paragraphs: [
      "The worst week to discover a cooling problem is the week everyone else discovers theirs. Book your service in spring, and summer takes care of itself.",
    ],
  },
  cta: { label: "Request a quote", href: "/contact" },
  related: [
    { label: "Heating systems", href: "/residential/heating", note: "Heat pumps work year-round" },
    { label: "Indoor air quality", href: "/residential/indoor-air-quality", note: "Filtration and humidity, sorted" },
    { label: "Home maintenance plans", href: "/residential/maintenance-plans", note: "Spring servicing, on schedule" },
    { label: "Get a free second opinion", href: "/second-opinion", note: "Compare a quote you already have" },
  ],
};
