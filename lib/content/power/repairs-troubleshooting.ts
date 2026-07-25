import type { ServiceContent } from "../types";

export const repairsTroubleshooting: ServiceContent = {
  lead: [
    "A generator problem is never just a generator problem. A no-start condition, an active alarm, or a failed test means that until it's resolved, your elevators, emergency lighting, and fire protection are running without a backstop.",
    "Woola Power provides commercial generator repair and troubleshooting built around structured diagnostics. We work to the root cause rather than the failed component, because replacing parts until the alarm clears is how the same fault comes back six months later.",
  ],
  blocks: [
    {
      heading: "Problems we see and repair",
      paragraphs: [
        "Our technicians are factory-authorized for Generac, Kohler, and Cummins, and they carry the manufacturer procedures and test equipment those platforms require. Typical calls include:",
      ],
      bullets: [
        "No-start conditions and unexpected shutdowns",
        "Active alarms, fault codes, and intermittent trips",
        "Battery and charging system failures",
        "Fuel system faults, including suspected contamination",
        "Cooling system failures and fluid leaks",
        "Automatic transfer switch faults",
        "Controller, sensor, and communication failures",
        "Low voltage or frequency under load",
        "Excessive smoke or abnormal operation",
        "Failures discovered during scheduled testing",
      ],
    },
    {
      heading: "Diagnostics before parts",
      paragraphs: [
        "Every repair starts with a proper diagnosis: manufacturer test procedures, the right instruments, and a technician who has seen the fault before. That discipline reduces unnecessary parts replacement and shortens the time your building spends unprotected. Once we know the cause, we explain it in plain language, give you a clear scope and cost, and proceed only when you've agreed.",
      ],
    },
    {
      heading: "Repair capability across the whole system",
      paragraphs: [
        "Standby power is a chain: engine, alternator, fuel, cooling, batteries, controls, and the transfer switch. We repair every link. Engine work covers cooling and lubrication failures, sensors, pumps, belts, hoses, thermostats, and block heaters. Electrical work covers controllers, wiring, charging systems, alternators, and communication devices. Transfer switch repairs address controls, mechanisms, and contacts, and we verify every ATS repair with functional testing rather than assuming the fix took.",
        "Fuel and battery work rounds out the picture: transfer pumps, filters, valves, and piping on the fuel side, and testing, repair, or replacement of batteries and chargers on the starting side, since those two systems cause a large share of standby failures.",
      ],
    },
    {
      heading: "If the generator is down right now",
      paragraphs: [
        "A generator that failed during testing, or one that won't run during an outage, is an emergency, and we treat it as one. Woola Power dispatches 24/7, works toward rapid diagnosis and repair on site where possible, and keeps you informed throughout so you can update tenants and ownership with real information rather than guesses.",
      ],
    },
    {
      heading: "What you get from every service call",
      paragraphs: [
        "You receive an accurate diagnosis, a repair verified by testing, and a detailed digital service report with findings and photographs added to your building's history. If the repair reveals a pattern, recurring faults, obsolete parts, rising costs, we'll say so, and lay out your options honestly.",
      ],
    },
  ],
  closing: {
    heading: "Fix the cause, not the symptom",
    paragraphs: [
      "Anyone can swap a part and clear an alarm. The value of an experienced commercial generator team is knowing why the fault happened and making sure the building isn't left waiting for it to happen again. That's the standard every Woola Power repair is held to.",
    ],
  },
  cta: { label: "Book a service call", href: "/contact" },
  related: [
    { label: "Preventative maintenance & inspection", href: "/power/maintenance-inspections", note: "Catch faults before they become repairs" },
    { label: "24/7 emergency service", href: "/power/emergency-service", note: "Generator down? Start here" },
    { label: "Fuel services", href: "/power/fuel-systems", note: "Contamination is a leading cause of no-starts" },
  ],
  needsFromBrett: [
    "Source says 'responsive commercial repair across BC'. Confirm actual repair coverage geography before publishing any province-wide language.",
    "No response-time commitments included; confirm whether Brett wants a stated SLA anywhere on this page.",
  ],
};
