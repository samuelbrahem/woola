import type { ServiceContent } from "../types";

export const integratedContracting: ServiceContent = {
  lead: [
    "Power projects rarely exist in isolation. Replace a generator and you're suddenly managing civil excavation, a concrete foundation, mechanical modifications, and electrical upgrades. Build out EV charging and you've added trenching, distribution upgrades, and site restoration to what looked like an electrical job.",
    "The traditional answer is four contractors, four schedules, and a property manager stuck relaying messages between them. Woola's answer is integrated contracting: our in-house Electrical, Mechanical, Power, and Construction divisions delivering the whole scope as one team, from planning through commissioning.",
  ],
  blocks: [
    {
      heading: "Projects we deliver this way",
      bullets: [
        "Generator installations and emergency power projects",
        "Electrical service and distribution equipment upgrades",
        "Automatic transfer switch installations",
        "Underground electrical infrastructure and vault improvements",
        "EV charging infrastructure",
        "Electrical connections for mechanical equipment: RTUs, boilers, pumps, chillers, heat pumps, cooling towers",
        "Tenant improvements and lighting upgrades",
        "Site electrical infrastructure and equipment replacement",
        "Building modernization and capital improvement projects",
      ],
    },
    {
      heading: "Every trade the project needs, in-house",
      paragraphs: [
        "Commercial electrical construction is handled by licensed electricians experienced in both occupied buildings and new construction. Generator and emergency power scopes are coordinated directly with Woola Power. Mechanical equipment installations pair our Electrical and Mechanical teams on the same schedule, and civil work, trenching, hydrovac, concrete removal, underground utilities, and asphalt restoration, runs through Woola Construction. Concrete scopes cover equipment pads, housekeeping pads, transformer bases, and generator foundations. Commissioning and closeout finish the job properly: testing, documentation, and owner walkthroughs.",
      ],
    },
    {
      heading: "What one accountable partner changes",
      paragraphs: [
        "You get one proposal with integrated scopes, which simplifies procurement and makes the real project cost visible up front. You get one project manager standing between the trades, the consultants, and ownership, instead of a chain of subcontractor phone calls. Scheduling is coordinated inside one company, so the concrete crew isn't waiting on an electrician who works for someone else, and quality control is enforced by teams who work together daily and will see each other again on the next job.",
        "Accountability is the quiet advantage. When something needs resolving, there's no gap between contractors for responsibility to fall into. It's our scope, all of it.",
      ],
    },
    {
      heading: "Support that outlasts the construction",
      paragraphs: [
        "Because the divisions that built your project also run service operations, the relationship doesn't end at substantial completion. The generator we installed enters a maintenance and inspection program with the same company; the electrical infrastructure we upgraded is supported by the electricians who installed it; and future capital projects start with a partner who already knows the building.",
      ],
    },
  ],
  closing: {
    heading: "Better coordination, not more contractors",
    paragraphs: [
      "Complex building projects don't fail for lack of trades; they fail in the handoffs between them. Integrated contracting removes the handoffs. If your next capital project touches more than one trade, and most do, it's worth seeing what a single-team proposal looks like.",
    ],
  },
  cta: { label: "Discuss your project", href: "/contact" },
  related: [
    { label: "Generator replacement and installations", href: "/power/generators", note: "The most common integrated project" },
    { label: "Preventative maintenance & inspection", href: "/power/maintenance-inspections", note: "Service continuity after the build" },
    { label: "Woola Electrical", href: "/electrical", note: "Commercial electrical contracting" },
    { label: "Woola Build", href: "/build", note: "Construction, civil, and concrete" },
  ],
  needsFromBrett: [
    "Confirm the division naming used publicly (Electrical, Mechanical, Power, Construction vs 'Woola Build') so this page matches the rest of the site.",
    "Confirm hydrovac and underground utility work is performed in-house by Woola Construction rather than subcontracted, since the page claims in-house delivery.",
  ],
};
