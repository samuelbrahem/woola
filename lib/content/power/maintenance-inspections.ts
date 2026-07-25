import type { ServiceContent } from "../types";

export const maintenanceInspections: ServiceContent = {
  lead: [
    "When the grid drops, your generator becomes the building. Elevators, emergency lighting, fire pumps, alarm panels, and communications all depend on one engine starting within seconds and carrying the load for as long as the outage lasts.",
    "That engine spends almost its entire life waiting. A boiler or rooftop unit runs every day and announces its problems early; a standby generator can hide a weak battery or a tank of degraded diesel for months, then fail during the one outage that counts. Preventative maintenance exists to close that gap, and it's the core of what Woola Power does for commercial buildings across British Columbia.",
  ],
  blocks: [
    {
      heading: "Why standby generators fail",
      paragraphs: [
        "Most unexpected generator failures trace back to small problems that nobody resolved: batteries near the end of their life, contaminated fuel, a slow coolant leak, a block heater that quietly quit, loose electrical connections, or a transfer switch deficiency that never showed up in a monthly exercise. None of these are expensive to fix when they're caught early. All of them are expensive when they surface mid-outage, with the building dark and tenants in the stairwells.",
        "A real maintenance program is built to find exactly these issues. Confirming the unit starts and stops is not an inspection; it's a formality.",
      ],
    },
    {
      heading: "What a Woola Power maintenance visit covers",
      paragraphs: [
        "Every visit begins with a complete system inspection: engine, alternator, cooling, fuel, batteries and charging, automatic transfer switch, electronic controls, monitoring and alarms, operating hours, fluid levels, leaks, and general condition. From there, the program scope includes:",
      ],
      bullets: [
        "Engine oil and filter service to manufacturer schedules, with checks for contamination and abnormal wear",
        "Cooling system service: coolant condition, radiators, hoses, belts, thermostats, and block heaters",
        "Fuel system inspection of tanks, transfer pumps, piping, and filters, with sampling or polishing when warranted",
        "Battery load testing, charger verification, and cable inspection",
        "Automatic transfer switch inspection, including connections, mechanisms, controllers, and a full transfer sequence verification",
        "Controls and monitoring: controllers, sensors, alarms, communication modules, and terminations",
        "Generator exercising and operational testing under real conditions: performance, temperatures, charging, and output",
        "Scheduled load bank testing where the application calls for it",
      ],
    },
    {
      heading: "Load bank testing and CSA C282 compliance, in-house",
      paragraphs: [
        "Woola Power owns its resistive and reactive load banks and performs annual CSA C282 testing with our own technicians rather than subcontracting it out. That keeps your compliance schedule in one set of hands and your test results in one report format, year after year. We're also factory-authorized for Generac, Kohler, and Cummins, so warranty work and OEM-level diagnostics happen on the same visit as your routine service.",
        "The transfer switch gets equal billing in our programs. A perfectly maintained generator protects nothing if the switch between utility and standby power doesn't perform, so we verify the complete transfer sequence, not just the engine.",
      ],
    },
    {
      heading: "Documentation you can actually plan around",
      paragraphs: [
        "After every visit you receive a digital report with findings, photographs, service history, and deficiencies ranked in plain terms: what needs attention now, what we're monitoring, and what belongs in a future capital budget. Property managers use these reports for reserve fund planning, lifecycle forecasting, and replacement decisions, which means the maintenance program pays for itself twice: once in reliability, and again in budgeting you can defend to an owner or a strata council.",
      ],
    },
    {
      heading: "Buildings we maintain",
      paragraphs: [
        "Our programs run in commercial offices, strata and condominium towers, healthcare and assisted living facilities, municipal buildings, schools, hotels, industrial and manufacturing plants, data centres, and water and wastewater infrastructure. The common thread is that in each of these buildings, standby power is a life-safety system first and a convenience second.",
      ],
    },
  ],
  closing: {
    heading: "A local team that knows your generator",
    paragraphs: [
      "The alternative to a structured program is discovering your generator's condition during an outage. With Woola Power you get the same local technicians visit after visit, a documented history of your specific unit, and a partner who treats communication and accountability as part of the service, not an extra. You'll never feel like a ticket number in a national queue.",
    ],
  },
  cta: { label: "Request a maintenance proposal", href: "/contact" },
  related: [
    { label: "Repairs and troubleshooting", href: "/power/repairs-troubleshooting", note: "When an inspection finds something, we fix it" },
    { label: "Fuel services", href: "/power/fuel-systems", note: "Testing, polishing, and tank care" },
    { label: "Generator replacement and retrofits", href: "/power/generators", note: "When repair stops making sense" },
    { label: "CSA C282 compliance testing", href: "/power/c282-testing", note: "Annual testing performed in-house" },
  ],
  needsFromBrett: [
    "Confirm service coverage: source copy says 'throughout British Columbia'. Does the maintenance program truly run province-wide, or Metro Vancouver / Lower Mainland with travel beyond? Adjust 'across British Columbia' in the lead accordingly.",
    "Source cites 'industry studies' on battery failure being the most common cause of standby failure. Omitted the citation claim; confirm if we have a citable source before adding any statistic.",
  ],
};
