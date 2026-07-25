import type { ServiceContent } from "../types";

export const ledLighting: ServiceContent = {
  lead: [
    "Lighting is usually the easiest energy win a commercial building has. Fixtures run thousands of hours a year, LED replacements draw a fraction of the power for the same light, and BC Hydro pays rebates that shorten the payback further.",
    "Woola Electrical is a BC Hydro Power Smart Alliance contractor. We handle the whole retrofit: audit, photometric design, installation, and the rebate paperwork that many buildings leave unclaimed.",
  ],
  blocks: [
    {
      heading: "What a lighting upgrade includes",
      paragraphs: [
        "Most commercial retrofits swap fluorescent troffers and legacy fixtures for LED equivalents, then add controls: occupancy sensors where rooms sit empty, daylight dimming near windows, schedules for parkades and exteriors. We model the result in a photometric study first, so you see light levels on paper before a single fixture comes down.",
      ],
    },
    {
      heading: "Where upgrades pay off fastest",
      bullets: [
        "Office floors full of fluorescent troffers",
        "Parkades lit around the clock",
        "Corridors and stairwells that never switch off",
        "Warehouse high-bay lighting",
        "Building exteriors and site lighting",
        "Common rooms with dated fixtures",
      ],
    },
    {
      heading: "Rebates, handled start to finish",
      paragraphs: [
        "Power Smart rebates require pre-approval before work starts and verification after, and missing that sequence forfeits the money. As an Alliance contractor we run the process end to end: pre-audit, application, install, post-verification, submission. The rebate lands with you, not with us.",
      ],
    },
    {
      heading: "Controls and dimming",
      paragraphs: [
        "New fixtures are half the value. Occupancy sensing, daylight harvesting, and dimming systems such as Lutron keep the savings compounding after the retrofit, and they change how the space feels to the people working in it.",
      ],
    },
    {
      heading: "A business case, not a brochure",
      paragraphs: [
        "Before you commit, we model the numbers for your building: current consumption, projected consumption, rebate value, and the maintenance savings from longer fixture life. It goes to your council or ownership as a one-page case they can approve or challenge.",
      ],
    },
  ],
  closing: {
    heading: "Start with the audit",
    paragraphs: [
      "A walkthrough tells us which spaces qualify for rebates, which fixtures are worth replacing, and which are already fine. If the payback is not there, we will say so and leave your fixtures alone.",
    ],
  },
  cta: { label: "Book a lighting audit", href: "/contact" },
  related: [
    { label: "Electrical service & maintenance", href: "/electrical/electrical", note: "Keep the rest of the system healthy" },
    { label: "Tenant improvement electrical", href: "/electrical/tenant-improvements", note: "Lighting for new fit-outs" },
    { label: "Mechanical retrofits", href: "/mechanical/retrofits", note: "The other big energy upgrade" },
  ],
  needsFromBrett: [
    "Confirm which savings and payback figures we can publish (source material claims 50-70% energy reduction and 18-36 month paybacks; nothing is stated here until confirmed).",
    "Confirm photometric design is done in-house, and whether the lighting audit is free.",
  ],
};
