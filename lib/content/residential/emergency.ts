import type { ServiceContent } from "../types";

export const emergency: ServiceContent = {
  lead: [
    "No heat on a January night. Water somewhere water should never be. A smell of gas you are not quite sure about. Some problems cannot wait for a convenient appointment, and when they happen in your home you want a technician moving, not a ticket in a queue.",
    "For emergencies, call us at 604-800-3617. Skip the contact form: a phone call reaches a person who can ask the right questions and get help dispatched, which no web form has ever done at midnight.",
  ],
  blocks: [
    {
      heading: "What we respond to",
      bullets: [
        "Heating emergencies",
        "Cooling emergencies",
        "Plumbing emergencies",
        "Water leaks",
        "Gas system concerns",
        "Urgent mechanical repairs",
      ],
    },
    {
      heading: "What happens when you call",
      paragraphs: [
        "You will talk to someone who understands mechanical systems. They will ask what is happening, tell you anything you should shut off or stay away from in the meantime, and get a technician headed your way. One exception: if you smell gas, leave the house and call FortisBC's emergency line first, then call us once the utility has made things safe.",
      ],
    },
    {
      heading: "Stabilize now, solve properly",
      paragraphs: [
        "The first job in an emergency is stopping the damage and getting your home functional again. The second job matters just as much: finding out why it happened. An emergency visit from Woola ends with the immediate problem handled and a clear explanation of the underlying cause, so you are not standing in the same puddle six months from now.",
      ],
    },
  ],
  closing: {
    heading: "When it cannot wait",
    paragraphs: [
      "Emergencies are where a contractor earns trust or loses it. We answer, we show up, and we fix what is wrong. Save our number before you need it.",
    ],
  },
  cta: { label: "Call now", href: "tel:604-800-3617" },
  related: [
    { label: "Mechanical repairs", href: "/residential/repairs", note: "For problems that can wait until morning" },
    { label: "Residential plumbing", href: "/residential/plumbing", note: "Leaks, lines, and fixtures" },
    { label: "Home maintenance plans", href: "/residential/maintenance-plans", note: "Priority scheduling when it counts" },
  ],
  needsFromBrett: [
    "Confirm whether residential emergency service is 24/7 for homeowners without a maintenance plan, or plan members only.",
    "Confirm after-hours rate policy and whether it should be disclosed on this page.",
    "Confirm the emergency service area for residential calls (all of Metro Vancouver or a tighter radius).",
  ],
};
