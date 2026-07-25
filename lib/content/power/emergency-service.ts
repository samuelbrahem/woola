import type { ServiceContent } from "../types";

export const emergencyService: ServiceContent = {
  lead: [
    "The worst phone call in facility management goes something like this: the power is out, the generator didn't start, and the building is running on battery-backed emergency lighting with a countdown attached. Elevators are stopped, the fire panel is on backup, and tenants want answers.",
    "Woola Power runs 24/7 emergency dispatch for exactly this moment. Whatever the failure, a generator that won't start during an outage, a unit that shut down under load, an alarm you can't clear, or a tank running low mid-outage, you reach a person who can act, not a voicemail.",
  ],
  blocks: [
    {
      heading: "What happens when you call",
      paragraphs: [
        "Every emergency starts with triage on the phone. We confirm what the system is doing, what alarms are showing, and what the building has lost, because those few minutes of questions often let a technician arrive with the right parts and a working theory instead of starting cold. From there we dispatch a commercial generator technician to your site.",
        "On arrival, the priority is a structured diagnosis: controls, batteries and charging, fuel supply, engine, and transfer switch, in an order driven by the symptoms. Because our technicians are factory-authorized for Generac, Kohler, and Cummins, they carry OEM diagnostic procedures for the platforms most commercial buildings run.",
      ],
    },
    {
      heading: "Keeping the building powered in the meantime",
      paragraphs: [
        "If the repair can't be completed immediately, the conversation turns to keeping essential loads alive. Depending on the failure, that can mean temporary power options for critical systems, coordinating emergency refuelling during an extended outage, or securing the system safely until parts arrive. You'll know the options, the trade-offs, and the plan before we act on any of them.",
      ],
    },
    {
      heading: "Repair, verification, and the follow-up report",
      paragraphs: [
        "We repair on site wherever possible and verify the fix by testing, including the transfer sequence where the failure involved it. Afterward you receive a written follow-up report: what failed, why, what was done, photographs, and any deficiencies the emergency exposed, prioritized so you can decide what to correct now and what to plan for. An emergency should leave your documentation stronger, not just your invoice larger.",
      ],
    },
    {
      heading: "Emergency or not? Both doors are open",
      paragraphs: [
        "Not every fault is a crisis. A generator that failed its scheduled test on a calm Tuesday still needs urgent attention, but it may not need a middle-of-the-night dispatch. If the building is currently unprotected or on standby power, call the 24/7 line. If the generator has a fault and the grid is up, book a priority service call and we'll get a technician scheduled quickly. Either way it's the same local team and the same documentation.",
      ],
    },
    {
      heading: "The best emergency is the one that never happens",
      paragraphs: [
        "Almost every emergency call we run traces back to something a maintenance visit would have caught: a tired battery, degraded fuel, a transfer switch that hadn't been exercised properly. Buildings on a structured maintenance program make these calls rarely, and when they do, we arrive already knowing the unit's history.",
      ],
    },
  ],
  closing: {
    heading: "One number, any hour",
    paragraphs: [
      "Standby power failures don't schedule themselves inside business hours, so neither do we. Keep the dispatch line where your building operators can find it, and if you're reading this mid-outage, stop reading and call.",
    ],
  },
  cta: { label: "Call 24/7 dispatch", href: "tel:604-829-9156" },
  related: [
    { label: "Preventative maintenance & inspection", href: "/power/maintenance-inspections", note: "The program that prevents these calls" },
    { label: "Repairs and troubleshooting", href: "/power/repairs-troubleshooting", note: "Non-emergency diagnostics and repair" },
    { label: "Fuel services", href: "/power/fuel-systems", note: "Emergency refuelling during extended outages" },
  ],
  needsFromBrett: [
    "Response time: no arrival-time or on-the-way commitment is stated anywhere on this page. Confirm whether Brett wants a specific response-time promise and what it can honestly be.",
    "Coverage: confirm the geographic area 24/7 dispatch genuinely covers (Metro Vancouver? Lower Mainland? province-wide?) before any coverage language is added.",
    "Temporary power: confirm what Woola can actually deploy (portable/rental generator sizes, own fleet vs rental partners) so the 'temporary power options' block can be made concrete.",
    "Confirm 604-829-9156 is the correct after-hours emergency number, not just the division office line.",
  ],
};
