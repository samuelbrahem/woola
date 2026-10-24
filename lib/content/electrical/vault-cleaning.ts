import type { ServiceContent } from "../types";

export const vaultCleaning: ServiceContent = {
  lead: [
    "The electrical vault is the one room in the building most people never open, and the one that takes the whole building down when it fails. Dust, moisture, and corrosion build up on bus, insulators, and terminations for years before anything trips.",
    "Woola Electrical cleans, inspects, and maintains electrical vaults and high-voltage rooms in commercial and strata buildings on a planned shutdown, and hands back a report with photos.",
  ],
  blocks: [
    {
      heading: "What a vault visit involves",
      paragraphs: [
        "Vault work starts with planning: a shutdown window agreed with the building, notice to tenants, and coordination with BC Hydro where the utility side is involved. On the day, the room is isolated and verified de-energized before anyone touches equipment.",
      ],
      bullets: [
        "Vacuuming and removal of dust, debris, and pest material",
        "Degreasing and cleaning of bus, insulators, and enclosures",
        "Torque check and inspection of terminations and connections",
        "Visual and infrared inspection of switchgear and transformers",
        "Housekeeping: lighting, labelling, signage, and clear working space",
        "Written report with before-and-after photos and any deficiencies",
      ],
    },
    {
      heading: "How often",
      paragraphs: [
        "Most buildings run a vault clean every three to five years, sooner for parkade vaults and anywhere with moisture or construction dust. We put the next date on the building's maintenance calendar so it does not get forgotten.",
      ],
    },
  ],
  closing: {
    heading: "Book a vault inspection",
    paragraphs: [
      "Tell us the building and when it was last done. We will walk the room, confirm the shutdown requirements, and quote the work.",
    ],
  },
  cta: { label: "Book a vault inspection", href: "/contact" },
  related: [
    { label: "Infrared scanning", href: "/electrical/infrared-scanning", note: "Thermal inspection of the gear in the vault" },
    { label: "Electrical service & maintenance", href: "/electrical/electrical", note: "The program vault work sits inside" },
  ],
  needsFromBrett: [
    "NEW PAGE from the Oct 2026 review: confirm scope (do crews work utility-side equipment or customer-side only?), qualifications, and recommended cleaning interval.",
  ],
};
