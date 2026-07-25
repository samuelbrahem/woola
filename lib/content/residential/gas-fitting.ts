import type { ServiceContent } from "../types";

export const gasFitting: ServiceContent = {
  lead: [
    "Gas is the one part of your home where the work is either right or it is wrong. There is no acceptable middle. Every joint, connection, and appliance hookup has to be installed to code, tested, and proven tight.",
    "Woola's licensed gas fitters install and service residential gas systems across Metro Vancouver, from a single barbecue connection to complete gas line installation for a renovation. The same crews work on gas systems in commercial buildings, where tolerance for sloppy work is zero.",
  ],
  blocks: [
    {
      heading: "Our gas fitting services",
      bullets: [
        "Gas line installation",
        "Gas appliance connections",
        "Fireplaces",
        "Outdoor BBQ and patio heaters",
        "Gas leak testing",
        "Gas system repairs",
      ],
    },
    {
      heading: "Safety is the whole job",
      paragraphs: [
        "Proper gas work means quality materials, correct sizing for the appliances on the line, required permits, and pressure testing before anything goes live. You should never have to wonder about any of that, and with us you will not. We document what we install and leave the system provable, not just working.",
      ],
    },
    {
      heading: "Outdoor living, connected properly",
      paragraphs: [
        "A hard-piped barbecue or patio heater ends the propane-tank shuffle for good. It is a small project with a big quality-of-life payoff, and a good example of work worth having a licensed gas fitter do once, correctly.",
      ],
    },
    {
      heading: "If you ever smell gas",
      paragraphs: [
        "Leave the house first. Call FortisBC's emergency line before you call anyone else, including us. Once the utility has made things safe, we can find and repair the fault properly.",
      ],
    },
  ],
  closing: {
    heading: "Done right, then proven right",
    paragraphs: [
      "Gas fitting has no room for good enough. We test what we install, document the results, and hand you back a system you can trust without a second thought.",
    ],
  },
  cta: { label: "Talk to a technician", href: "/contact" },
  related: [
    { label: "Hot water systems", href: "/residential/hot-water", note: "Gas-fired tanks and tankless units" },
    { label: "Heating systems", href: "/residential/heating", note: "Furnaces and boilers on the same line" },
    { label: "Mechanical repairs", href: "/residential/repairs", note: "Gas appliance repairs" },
  ],
};
