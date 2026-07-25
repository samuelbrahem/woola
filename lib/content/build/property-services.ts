import type { ServiceContent } from "../types";

export const propertyServices: ServiceContent = {
  lead: [
    "Every property manager carries a list of small jobs that never quite get done: the lobby door closer, the broken fence board, the scuffed hallway that needs paint. None of them justify a contractor mobilization on their own, which is exactly why they pile up.",
    "Woola Build's property services crew exists for that list. Send it over, and the jobs come back done, photographed, and invoiced on one line.",
  ],
  blocks: [
    {
      heading: "The long tail of building work",
      bullets: [
        "Carpentry repairs and door hardware",
        "Interior painting and drywall repair",
        "Fencing and gate repairs",
        "Common-room and lobby refreshes",
        "Signage, suite numerals, and hardware swaps",
        "Pressure washing and exterior touch-ups",
      ],
    },
    {
      heading: "Same-week dispatch",
      paragraphs: [
        "Contracted clients get routine work scheduled within the week, from one dispatcher who knows the building. No sourcing three quotes for a $400 job, and no chasing a handyman who stopped answering.",
      ],
    },
    {
      heading: "Photo-documented closeout",
      paragraphs: [
        "Each job closes as a work order with before, during, and after photos attached. Managers forward them straight to owners and councils, which turns 'did that ever get done?' into a link.",
      ],
    },
    {
      heading: "How the work is priced",
      paragraphs: [
        "Small jobs run on pre-agreed unit rates, so a work order carries a known price before the truck rolls, and crews are insured and bonded like any other Woola trade. Larger requests get a quick written quote instead of disappearing into an estimating queue.",
      ],
    },
    {
      heading: "Reporting your board will actually read",
      paragraphs: [
        "Completed work rolls up into strata board reporting: what was done, what it cost, and what we noticed while we were there. Small-job crews see more of a building than anyone else does, and we pass along what they find before it grows into a big job.",
      ],
    },
  ],
  closing: {
    heading: "Built for the small stuff",
    paragraphs: [
      "You already know what needs doing; it is sitting in your inbox flagged for later. Forward it as-is. We will sort it, schedule it, and start clearing it.",
    ],
  },
  cta: { label: "Send us your list", href: "/contact" },
  related: [
    { label: "Maintenance packages", href: "/build/maintenance", note: "Put recurring work on a schedule" },
    { label: "Construction & renos", href: "/build/construction", note: "For the jobs that outgrow a work order" },
    { label: "For property managers", href: "/property-managers", note: "How we support portfolios" },
  ],
  needsFromBrett: [
    "Confirm same-week dispatch applies to contracted clients only, and how non-contract requests are handled.",
  ],
};
