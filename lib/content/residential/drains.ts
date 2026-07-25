import type { ServiceContent } from "../types";

export const drains: ServiceContent = {
  lead: [
    "A slow drain rarely fixes itself. By the time water is backing up, whatever is happening in the pipe has usually been building for a while: grease, roots, scale, or a sagging line that catches everything passing through it.",
    "Woola clears blockages and, more importantly, figures out why they happened. Camera inspections and sewer diagnostics let us show you exactly what is going on underground instead of guessing at it.",
  ],
  blocks: [
    {
      heading: "Our drain and sewer services",
      bullets: [
        "Drain cleaning",
        "Hydro jetting",
        "Camera inspections",
        "Leak detection",
        "Sewer line diagnostics",
        "Drain repairs",
      ],
    },
    {
      heading: "Diagnosis before digging",
      paragraphs: [
        "Nobody should authorize excavation on a hunch. A camera inspection shows the actual condition of the line, and we walk you through the footage so the recommendation makes sense to you, not just to us. If the pipe only needs a proper cleaning, that is exactly what we will tell you.",
      ],
    },
    {
      heading: "Snaking or hydro jetting?",
      paragraphs: [
        "A cable machine punches a hole through a blockage. Hydro jetting scours the pipe wall back to clean. Each has its place, and the camera tells us which one your line actually needs, so you are not paying for the heavy option when the light one will do.",
      ],
    },
    {
      heading: "Older homes, older lines",
      paragraphs: [
        "Plenty of Metro Vancouver houses still drain through their original clay or cast iron lines, where root intrusion and shifting ground are a fact of life. Knowing the condition of yours before it fails is worth a great deal, especially if you are planning a renovation above it.",
      ],
    },
  ],
  closing: {
    heading: "Stop clearing the same drain twice",
    paragraphs: [
      "A recurring backup is your plumbing trying to tell you something. We help you read the message, deal with the cause, and get back to never thinking about your drains.",
    ],
  },
  cta: { label: "Book a visit", href: "/contact" },
  related: [
    { label: "Residential plumbing", href: "/residential/plumbing", note: "Repairs beyond the drain line" },
    { label: "Emergency mechanical services", href: "/residential/emergency", note: "For backups that cannot wait" },
    { label: "Home maintenance plans", href: "/residential/maintenance-plans", note: "Catch problems before the backup" },
  ],
};
