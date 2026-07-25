import type { ServiceContent } from "../types";

export const maintenancePlans: ServiceContent = {
  lead: [
    "Most major mechanical failures start small: a worn igniter, a weeping valve, a filter left in place two seasons too long. Caught early, they are quick fixes. Ignored, they take expensive equipment down with them.",
    "The Woola Home Maintenance Plan puts your heating, cooling, and plumbing on a professional service schedule, with a licensed technician going over each system before the season that will test it.",
  ],
  blocks: [
    {
      heading: "What the plan includes",
      bullets: [
        "Annual HVAC maintenance",
        "Heating and cooling inspections",
        "Plumbing system checks",
        "Priority scheduling",
        "Maintenance reminders",
        "Preferred member benefits",
      ],
    },
    {
      heading: "Why homeowners join",
      paragraphs: [
        "The obvious payoff is fewer breakdowns and equipment that lasts longer and runs cheaper. The quieter payoff is that you stop being the person who has to remember when the furnace was last serviced. We track it, remind you, and book the visit. If something does fail between visits, plan members go to the front of the schedule.",
      ],
    },
    {
      heading: "The commercial habit, brought home",
      paragraphs: [
        "Commercial buildings do not run on luck. They run on maintenance schedules, and Woola has built its reputation delivering exactly that. The Home Maintenance Plan applies the same practice to your house: the same technicians, the same checklists and documentation, scaled to a family home instead of an office tower.",
      ],
    },
  ],
  closing: {
    heading: "Stay ahead of the season",
    paragraphs: [
      "Equipment cared for on a schedule runs efficiently, lasts longer, and very rarely fails at the worst possible moment. That is the entire idea behind the plan, and it works.",
    ],
  },
  cta: { label: "Ask about plans", href: "/contact" },
  related: [
    { label: "Heating systems", href: "/residential/heating", note: "What a fall tune-up covers" },
    { label: "Air conditioning and cooling", href: "/residential/cooling", note: "Spring servicing before the heat" },
    { label: "Residential plumbing", href: "/residential/plumbing", note: "Inspections that catch leaks early" },
  ],
  needsFromBrett: [
    "Plan pricing and billing structure (monthly or annual, single tier or multiple).",
    "What the preferred member benefits actually are (repair discounts, waived fees, other).",
    "Whether plan visits include filter replacement and consumables or labour only.",
    "Any service-area limits for residential maintenance plan coverage.",
  ],
};
