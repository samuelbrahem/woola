import type { ServiceContent } from "../types";

export const electrical: ServiceContent = {
  lead: [
    "Electrical faults in a commercial building rarely announce themselves. A breaker that trips once a month, a warm spot on a panel cover, corridor lights that flicker after a storm: these are early warnings, and they cost far less to fix now than after they fail.",
    "Woola Electrical handles service and maintenance for strata and commercial buildings across Metro Vancouver. Every crew is led by an FSR-certified electrician, so we pull our own permits, sign off our own work, and stand behind it afterward.",
  ],
  blocks: [
    {
      heading: "Service calls, done properly",
      paragraphs: [
        "A service call should end with the fault found, the repair made, and a record of both. Our electricians diagnose before they replace parts, photograph the work, and note anything else in the room that will need attention soon. You get a closed work order, not a suggestion to call someone else.",
      ],
    },
    {
      heading: "Panel and distribution work",
      paragraphs: [
        "We service everything between your utility meter and your tenants: main panels, sub-panels, and the switchgear that feeds them. That includes breaker replacement, panel repairs, load balancing, and dedicated circuits for new building equipment. When a panel is past saving, we will tell you plainly and price the replacement.",
      ],
    },
    {
      heading: "Common-area electrical",
      bullets: [
        "Corridor, lobby, and stairwell lighting repairs",
        "Parkade lighting, receptacles, and controls",
        "Exit and emergency lighting circuits",
        "Timers, photocells, and lighting contactors",
        "Dedicated circuits for pumps, fans, and gates",
        "Receptacle, switch, and cover replacement",
        "Power for intercoms, access control, and cameras",
      ],
    },
    {
      heading: "Annual inspection programs",
      paragraphs: [
        "Most electrical failures start as loose connections, and loose connections are findable. An annual inspection program puts eyes on your panels, switchgear, and common-area systems on a schedule: connections checked, wear documented, and a written condition report delivered to whoever plans the budget. Buildings with aluminum wiring or gear from the 1970s get particular attention, because that is where the risk concentrates.",
      ],
    },
    {
      heading: "Thermography as a maintenance tool",
      paragraphs: [
        "An infrared camera sees heat the eye cannot. Scanned under load, a panel shows its problems as bright spots: an overloaded circuit, a corroded lug, a breaker on its way out. We build thermographic scanning into maintenance programs to catch those faults while they are still a line item instead of an outage.",
      ],
    },
  ],
  closing: {
    heading: "The cheapest repair is the early one",
    paragraphs: [
      "Reactive electrical work is the most expensive kind there is, because it arrives with an outage attached. Put your building on a schedule and most of those calls never happen. Start with a single inspection and see what your panels have been hiding.",
    ],
  },
  cta: { label: "Book a service call", href: "/contact" },
  related: [
    { label: "Infrared scanning", href: "/electrical/infrared-scanning", note: "Find faults before they fail" },
    { label: "Panel & service upgrades", href: "/electrical/panel-upgrades", note: "When repair stops making sense" },
    { label: "Low voltage & data", href: "/electrical/low-voltage", note: "Cabling, access control, cameras" },
  ],
  needsFromBrett: [
    "Confirm whether 24/7 emergency electrical extends beyond contracted clients, and how to describe response for non-contract callers.",
    "Confirm the annual inspection program is a packaged, priced offering (scope and frequency), not just ad-hoc work.",
    "Confirm service-area wording: Metro Vancouver only, or Fraser Valley as well?",
  ],
};
