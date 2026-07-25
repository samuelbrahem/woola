import type { ServiceContent } from "../types";

export const fuelSystems: ServiceContent = {
  lead: [
    "A generator is only as reliable as the fuel behind it. The engine can be flawless, the transfer switch perfect, and the batteries fresh, but if the diesel in the tank has absorbed water or grown microbial contamination, the building's life-safety systems are one clogged filter away from going dark.",
    "Fuel problems are also among the most preventable causes of emergency generator failure, which is why Woola Power treats the fuel system as a first-class part of standby power, not an afterthought bolted onto an oil change.",
  ],
  blocks: [
    {
      heading: "Why stored diesel needs management",
      paragraphs: [
        "Diesel deteriorates in storage. Over time it absorbs moisture, drops sediment, and supports biological growth, and every one of those processes chips away at fuel quality. The result shows up as clogged filters, injector problems, and engines that stumble exactly when they're asked to carry a building through an outage. Regular sampling and testing tells you what's actually in your tank; the corrective work restores it.",
      ],
    },
    {
      heading: "Fuel services for commercial standby systems",
      bullets: [
        "Fuel tank inspections: corrosion, leaks, contamination, fittings, vents, and gauges on above-ground and day tanks",
        "Diesel fuel sampling and laboratory quality testing",
        "Fuel polishing coordination to remove water, sediment, and microbial contamination without replacing the fuel",
        "Primary and secondary fuel filter replacement",
        "Fuel system repairs: pumps, valves, piping, fittings, and flexible connections",
        "Transfer pump service and automatic transfer verification between storage and day tanks",
        "Fuel leak investigations with immediate response",
        "Day tank maintenance, including level controls and transfer systems",
        "Scheduled refuelling programs",
        "Emergency refuelling during extended outages",
      ],
    },
    {
      heading: "Refuelling through an extended outage",
      paragraphs: [
        "A long outage turns fuel level into the single number that matters. Woola Power coordinates timely delivery through trusted fuel suppliers while monitoring your generator's operation and remaining capacity, so the system keeps carrying the building until utility power returns. Scheduled refuelling does the quieter version of the same job: consistent fuel management that keeps the tank ready without last-minute deliveries.",
      ],
    },
    {
      heading: "Repairs that chase the root cause",
      paragraphs: [
        "When we find a failed transfer pump or a filter loaded with contamination, we don't stop at the part. A dirty filter is usually a message from the tank, and a leak is an environmental risk as much as a reliability one. Our repairs include identifying where the problem started, fixing that, and documenting the condition of the whole system so you know what's coming next.",
      ],
    },
    {
      heading: "Fuel care inside your maintenance program",
      paragraphs: [
        "Most of this work belongs on a schedule rather than in a crisis. Tank inspections, sampling, and filter service fold naturally into a preventative maintenance program, where the findings land in the same photographed, prioritized reports as the rest of your generator's health.",
      ],
    },
  ],
  closing: {
    heading: "Clean fuel is cheap insurance",
    paragraphs: [
      "Compared to what an outage costs a commercial building, fuel testing and polishing are among the least expensive reliability measures available. Knowing the tank is clean means one less unknown standing between your building and the moment the grid comes back.",
    ],
  },
  cta: { label: "Schedule a fuel system inspection", href: "/contact" },
  related: [
    { label: "Preventative maintenance & inspection", href: "/power/maintenance-inspections", note: "Fuel care on a schedule, not in a crisis" },
    { label: "24/7 emergency service", href: "/power/emergency-service", note: "Including emergency refuelling" },
    { label: "Repairs and troubleshooting", href: "/power/repairs-troubleshooting", note: "When contamination has already done damage" },
  ],
  needsFromBrett: [
    "Confirm which fuel suppliers Woola partners with for emergency and scheduled refuelling, and whether we can name them.",
    "Confirm refuelling coverage area: is emergency fuel delivery available everywhere Woola services generators, or a smaller radius?",
    "Confirm whether underground tank inspection is in scope; source only clearly supports above-ground and day tanks.",
  ],
};
