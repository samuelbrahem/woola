import type { ServiceContent } from "../types";

export const heatingSystems: ServiceContent = {
  lead: [
    "Heating is the mechanical system a commercial building can least afford to lose. Woola provides specialized heating service for commercial buildings across Metro Vancouver: preventative maintenance, diagnostics, repairs, system optimization, and capital equipment upgrades.",
    "Heating plants tend to be ignored until something fails. Deferred maintenance, aging infrastructure, inconsistent water treatment, and poor system balancing all shorten equipment life and push operating costs up. Our job is to reverse that pattern: understand the condition of your heating system, fix what is developing before it fails, and give you the information to plan capital investments on your own schedule.",
  ],
  blocks: [
    {
      heading: "Commercial heating services",
      bullets: [
        "Commercial boiler service and maintenance",
        "Commercial heat pump systems",
        "Hydronic heating systems",
        "Commercial unit heaters",
        "Radiant heating systems",
        "Pump and expansion tank service",
        "Heat exchanger maintenance",
        "Combustion analysis and system optimization",
        "Heating retrofits and capital upgrades",
        "Preventative maintenance programs",
        "Emergency heating repairs",
      ],
    },
    {
      heading: "Commercial boiler service in Metro Vancouver",
      paragraphs: [
        "The boiler is usually the most critical asset in the mechanical room, supplying space heating and often domestic hot water as well. Too many boiler plants are maintained reactively, so small issues like improper combustion, plugged strainers, failing pumps, deteriorating expansion tanks, or poor water quality go unnoticed until they become failures in the middle of heating season.",
        "Our technicians inspect the complete heating system, not just the boiler, because that is where developing problems usually hide. The result is better efficiency, lower fuel consumption, longer equipment life, and a documented condition record that supports replacement planning. We handle maintenance, diagnostics, repairs, combustion analysis, equipment replacement, and full boiler plant modernization.",
      ],
    },
    {
      heading: "Commercial heat pump systems",
      paragraphs: [
        "Heat pumps are taking a bigger role as building owners pursue energy efficiency and lower emissions. They behave differently from conventional HVAC equipment, and servicing them well requires technicians who understand those differences. We provide maintenance, diagnostics, repairs, controls optimization, refrigerant system evaluations, and equipment upgrades.",
        "As buildings move toward electrification, we also help owners evaluate their infrastructure, support heat pump retrofits, and build a long-term maintenance strategy around the new equipment.",
      ],
    },
    {
      heading: "Hydronic heating and distribution",
      paragraphs: [
        "A hydronic system is only as reliable as its supporting components: pumps, valves, expansion tanks, heat exchangers, controls, strainers, glycol concentration, and water quality. Many of the problems blamed on the boiler, including uneven heating, recurring air, fluctuating pressures, and poor temperature control, actually originate in the distribution system. We maintain, diagnose, repair, and balance hydronic systems as an integrated network rather than a collection of parts.",
      ],
    },
    {
      heading: "Unit heaters and radiant systems",
      paragraphs: [
        "Warehouses, parkades, loading docks, and mechanical spaces rely on localized heat. We service gas-fired, hydronic, and electric unit heaters: maintenance, repairs, inspections, controls verification, and replacement. For radiant applications, including gas-fired infrared heaters and hydronic radiant systems, we maintain the equipment, controls, and piping that deliver heat directly to occupied space.",
      ],
    },
    {
      heading: "Pumps, expansion tanks, and heat exchangers",
      paragraphs: [
        "These are the components that quietly determine whether a heating plant holds pressure and temperature. We inspect, maintain, repair, rebuild, and replace circulating pumps, inline pumps, booster pumps, expansion tanks, and pressure control equipment. Heat exchangers get the same attention: fouling, scale, and corrosion cut efficiency and raise costs, so we inspect, clean, repair, and replace them before performance slides.",
      ],
    },
  ],
  closing: {
    heading: "Know your heating plant before winter tests it",
    paragraphs: [
      "January is a bad time to learn what condition your boiler room is in. A maintenance program with documented reporting means you head into heating season knowing what is solid, what is aging, and what belongs in next year's budget.",
    ],
  },
  cta: { label: "Request service", href: "/contact" },
  related: [
    {
      label: "Preventative maintenance programs",
      href: "/mechanical/preventative-maintenance",
      note: "Scheduled care and condition reporting for your heating plant",
    },
    {
      label: "HVAC retrofits and capital projects",
      href: "/mechanical/retrofits",
      note: "Replace boilers and heating equipment on your schedule",
    },
    {
      label: "Gas services",
      href: "/mechanical/gas",
      note: "Gas piping and testing for boilers and heating equipment",
    },
  ],
  needsFromBrett: [
    "Confirm emergency heating repair availability (hours, response commitment) before publishing the emergency bullet.",
    "Confirm whether boiler water treatment is performed in-house or coordinated with a treatment provider.",
  ],
};
