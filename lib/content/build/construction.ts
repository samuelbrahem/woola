import type { ServiceContent } from "../types";

export const construction: ServiceContent = {
  lead: [
    "Renovation projects go wrong in the gaps: between trades, between the quote and the invoice, between what the drawings say and what the strata bylaws allow. Closing those gaps is most of what a good general contractor actually does.",
    "Woola Build is a licensed BC general contractor for tenant improvements, suite renovations, amenity rebuilds, and small commercial construction, with Gold Seal certified project managers running every project over $250,000.",
  ],
  blocks: [
    {
      heading: "What we build",
      bullets: [
        "Tenant improvements and commercial fit-outs",
        "Lobby, gym, and amenity room rebuilds",
        "Suite renovations in strata buildings",
        "Office and retail renovations",
        "Small-cap commercial construction",
      ],
    },
    {
      heading: "Fixed price, honestly quoted",
      paragraphs: [
        "We quote fixed-price, not cost-plus, and we hold the number. Changes happen on real projects, but they happen through signed change orders with a price attached before the work proceeds, so the final invoice is never a reveal.",
      ],
    },
    {
      heading: "In-house trades change the schedule",
      paragraphs: [
        "Mechanical, electrical, plumbing, gas, carpentry, and painting are self-performed by Woola crews rather than subbed out, which means the schedule depends on our own people instead of a subcontractor's other jobs. Specialty scopes, such as elevators and fire systems, go to vetted partners we have worked with for years.",
      ],
    },
    {
      heading: "Strata paperwork, handled",
      paragraphs: [
        "Renovating in a strata means bylaw review, council approvals, alteration agreements, permits, and inspections before anyone swings a hammer. Our PM team runs that process and gives the council a single point of contact from application to sign-off.",
      ],
    },
    {
      heading: "A Gold Seal PM on the big ones",
      paragraphs: [
        "Gold Seal is the Canadian Construction Association's certification for project managers, and every Woola project over $250,000 gets one. What that buys you is process: schedule discipline, documented changes, deficiency walkthroughs, and a closeout package with the warranties in it.",
      ],
    },
  ],
  closing: {
    heading: "The quote is the contract",
    paragraphs: [
      "Most construction disputes are really estimating disputes that surfaced late. We would rather lose a bid on an honest number than win one on a hopeful one; the projects run better that way, and so do the relationships.",
    ],
  },
  cta: { label: "Get a construction quote", href: "/contact" },
  related: [
    { label: "Turnkey project solutions", href: "/build/turnkey-projects", note: "Multi-trade projects, one contract" },
    { label: "Tenant improvement electrical", href: "/electrical/tenant-improvements", note: "The electrical scope, self-performed" },
    { label: "Building envelope", href: "/build/envelope", note: "Exterior repair and remediation" },
  ],
  needsFromBrett: [
    "Confirm the published sweet-spot range ($50k to $2M appears in division FAQs) and the $250,000 Gold Seal threshold.",
  ],
};
