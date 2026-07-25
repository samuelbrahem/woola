import type { ServiceContent } from "../types";

export const tenantImprovements: ServiceContent = {
  lead: [
    "A tenant improvement lives or dies on its schedule, and electrical sits on the critical path of every one. Lighting, power, and data have to be roughed in before the walls close, inspected on time, and finished before a move-in date that was fixed months ago.",
    "Woola Electrical delivers the electrical scope of commercial fit-outs: offices, retail units, clinics, and light industrial space. Our leads are FSR-certified, so permits and inspection sign-off stay in-house instead of waiting on a third party.",
  ],
  blocks: [
    {
      heading: "Electrical fit-outs for leased space",
      paragraphs: [
        "We take a space from bare shell, or from the previous tenant's layout, to your tenant's spec: new circuits and sub-panels, lighting layouts, receptacle and equipment power, and connections for the mechanical systems the space needs. Where the base building's capacity looks tight, we confirm the load math before anyone signs a lease amendment.",
      ],
    },
    {
      heading: "Scope we deliver",
      bullets: [
        "Sub-panels and distribution for the demised space",
        "Lighting layouts with dimming and occupancy controls",
        "Receptacle and equipment power, including server and kitchen circuits",
        "Structured data cabling (Cat 6/6A) and rack terminations",
        "Access control and camera cabling with your security integrator",
        "Exit and emergency lighting to code",
        "Permits, inspections, and closeout documentation",
      ],
    },
    {
      heading: "One team with Woola Build",
      paragraphs: [
        "Many of our TI projects run under Woola Build, our general contracting division, with electrical self-performed rather than subbed out. One project manager owns the schedule, and the electrician roughing in your circuits answers to the same company as the crew framing the walls. When electrical is the only scope you need, we work directly for you or your GC just as comfortably.",
      ],
    },
    {
      heading: "Lighting and data on one mobilization",
      paragraphs: [
        "The same crews that run your power also run structured cabling, so the network and the lighting controls go in together instead of on two separate schedules. Fewer trades in the space means fewer collisions in the final weeks, when there is no float left to absorb them.",
      ],
    },
  ],
  closing: {
    heading: "Built backwards from move-in",
    paragraphs: [
      "Fit-out schedules do not move, so we plan electrical from the occupancy date back: rough-in milestones, inspection dates, and finish work sequenced against the other trades. Bring us the drawings, or bring us a floor plan and a wish list, and we will price it either way.",
    ],
  },
  cta: { label: "Price your fit-out", href: "/contact" },
  related: [
    { label: "Construction & renos", href: "/build/construction", note: "Full TI delivery under Woola Build" },
    { label: "Lighting upgrades", href: "/electrical/led-lighting", note: "Efficient lighting for the new space" },
    { label: "Low voltage & data", href: "/electrical/low-voltage", note: "Structured cabling and security" },
  ],
  needsFromBrett: [
    "NEW PAGE: confirm Woola Electrical markets TI work directly, or whether TI enquiries should route through Woola Build.",
    "Confirm typical TI project size and one or two real examples we can reference.",
    "Confirm whether we offer electrical design (design-build) or work plan-and-spec only.",
    "Confirm data cabling and security rough-in are standard TI inclusions, or handled by the low-voltage team as a separate scope.",
  ],
};
