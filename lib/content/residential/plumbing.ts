import type { ServiceContent } from "../types";

export const plumbing: ServiceContent = {
  lead: [
    "A dripping fixture is an annoyance. A failed water line is a very bad week. Residential plumbing covers everything in between, and the value of a good plumber is knowing which is which before it costs you money.",
    "Woola handles plumbing repairs, fixture upgrades, renovations, and full repiping for homes across Metro Vancouver. We arrive prepared, protect your floors and finishes while we work, and explain what we recommend in plain language.",
  ],
  blocks: [
    {
      heading: "Our plumbing services",
      bullets: [
        "General plumbing repairs",
        "Fixture installation and replacement",
        "Water line repairs",
        "Repiping",
        "Leak detection",
        "Preventative plumbing inspections",
      ],
    },
    {
      heading: "Fix the cause, not just the symptom",
      paragraphs: [
        "A leak that keeps coming back has a reason, and patching over it only postpones the conversation. Our technicians trace problems to their source, so the repair you pay for actually ends the problem.",
        "Many older homes in the region are still running on their original supply piping, which does not last forever. When repiping is genuinely worth discussing, we will tell you plainly. When it is not, we will tell you that too.",
      ],
    },
    {
      heading: "Respect for your home",
      paragraphs: [
        "Plumbing work happens in the middle of your daily life, so how we work matters as much as what we fix. Expect tidy workmanship, protected surfaces, honest scheduling, and a technician who cleans up properly and walks you through what was done before leaving. These are the same crews trusted inside occupied commercial buildings, and it shows in how they treat a family home.",
      ],
    },
  ],
  closing: {
    heading: "Plumbing you stop thinking about",
    paragraphs: [
      "Good plumbing is invisible. Water arrives, drains carry it away, and none of it crosses your mind. That is the standard we work to on every call.",
    ],
  },
  cta: { label: "Talk to a technician", href: "/contact" },
  related: [
    { label: "Drain cleaning and sewer services", href: "/residential/drains", note: "For blockages and backups" },
    { label: "Hot water systems", href: "/residential/hot-water", note: "Tanks, tankless, and repairs" },
    { label: "Home maintenance plans", href: "/residential/maintenance-plans", note: "Annual plumbing checks included" },
  ],
};
