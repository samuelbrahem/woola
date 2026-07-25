import type { ServiceContent } from "../types";

export const gas: ServiceContent = {
  lead: [
    "Gas work is safety work before it is anything else. Woola provides commercial gas fitting across Metro Vancouver: preventative maintenance, equipment servicing, system upgrades, and code-compliant installations, all executed with the discipline that fuel gas systems demand.",
    "In BC, gas systems operate under a strict regulatory framework, and buildings depend on that framework being respected on every job. Our work is permitted, tested, and documented, so you always have a record showing your gas infrastructure was handled correctly.",
  ],
  blocks: [
    {
      heading: "Commercial gas services",
      bullets: [
        "Commercial gas system maintenance",
        "Gas line repairs and modifications",
        "Natural gas distribution systems",
        "Commercial boiler gas piping",
        "Water heater gas connections",
        "RTU and MAU gas piping",
        "Gas pressure testing and leak detection",
        "Gas equipment installations and replacements",
        "Code compliance and safety inspections",
        "Emergency gas system repairs",
      ],
    },
    {
      heading: "How we approach gas work",
      paragraphs: [
        "There are no acceptable shortcuts with fuel gas. Every project starts with the code requirements, the permit, and a plan for isolation and testing before anyone touches a line. Modifications are pressure tested before the system is returned to service, and leak detection is part of the routine, not a response to a smell.",
        "Documentation matters as much as the wrench work. When we complete an installation, repair, or modification, you receive a record of what was done and how it was verified, which is exactly what an owner, insurer, or authority having jurisdiction will ask for later.",
      ],
    },
    {
      heading: "Gas piping for mechanical equipment",
      paragraphs: [
        "Most commercial gas work exists to serve mechanical equipment: boilers, water heaters, rooftop units, and make-up air units. Because we service that equipment too, our gas piping is sized and routed with the appliance's actual demands in mind, and a piping problem never gets misdiagnosed as an equipment problem or the other way around.",
        "We also maintain and modify natural gas distribution within buildings, from the meter through regulators, valves, and branch lines, keeping the whole path from utility to appliance in known condition.",
      ],
    },
    {
      heading: "Testing, inspections, and compliance",
      paragraphs: [
        "Gas systems age like any other infrastructure: fittings loosen, regulators drift, and buried or concealed lines corrode out of sight. Scheduled pressure testing, leak detection, and safety inspections catch those changes early. For owners who have inherited a building with an undocumented gas system, an inspection establishes a baseline you can maintain from.",
      ],
    },
  ],
  closing: {
    heading: "Treat the gas system like the utility it is",
    paragraphs: [
      "Nobody budgets attention for gas piping until an odour call or a failed inspection forces the issue. Putting your gas system on the same maintenance footing as your boilers costs little and removes an entire category of risk from your building.",
    ],
  },
  cta: { label: "Request service", href: "/contact" },
  related: [
    {
      label: "Preventative maintenance programs",
      href: "/mechanical/preventative-maintenance",
      note: "Include gas system inspections in your building's program",
    },
    {
      label: "Heating systems",
      href: "/mechanical/heating-systems",
      note: "The boilers and unit heaters your gas lines serve",
    },
    {
      label: "Commercial plumbing",
      href: "/mechanical/plumbing",
      note: "Water heaters and mechanical room infrastructure",
    },
  ],
  needsFromBrett: [
    "Confirm gas contractor licensing details (license class, Technical Safety BC registration) if we want to cite them on the page.",
    "Confirm emergency gas repair availability and how after-hours gas calls are handled.",
    "Confirm whether Woola pulls gas permits directly on all jobs so the permitting claim is accurate.",
  ],
};
