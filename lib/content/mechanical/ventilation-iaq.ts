import type { ServiceContent } from "../types";

export const ventilationIaq: ServiceContent = {
  lead: [
    "Healthy indoor environments start with ventilation that is properly maintained and properly balanced. Air movement affects far more than comfort: it drives indoor air quality, building pressure relationships, energy consumption, moisture control, and in systems like parkade exhaust, life safety.",
    "Woola services commercial ventilation systems across Metro Vancouver for office buildings, strata properties, healthcare and industrial facilities, and everything in between. When air is not moving the way it should, we measure the system and fix the cause rather than guessing at symptoms.",
  ],
  blocks: [
    {
      heading: "Ventilation and indoor air quality services",
      bullets: [
        "Air handling unit (AHU) service and maintenance",
        "Make-up air unit (MAU) service",
        "Exhaust fan systems",
        "Energy recovery ventilators (ERVs)",
        "Heat recovery ventilators (HRVs)",
        "Parkade ventilation and gas detection systems",
        "Building pressurization systems",
        "Air filtration and IAQ improvements",
        "Airflow diagnostics and system balancing",
        "Ventilation retrofits and equipment upgrades",
      ],
    },
    {
      heading: "Air handling and make-up air units",
      paragraphs: [
        "The air handling unit is the heart of many commercial HVAC systems, and its condition shows up everywhere: airflow, efficiency, comfort, and reliability. We service AHUs to keep conditioned air moving the way the system was engineered to deliver it.",
        "Make-up air units do the complementary job, replacing exhausted air with conditioned outdoor air so the building holds healthy air quality and correct pressure. A starved building pulls air through every crack it can find, so a neglected MAU is never just a MAU problem.",
      ],
    },
    {
      heading: "Exhaust fans and building pressure",
      paragraphs: [
        "Roof-mounted, inline, washroom, parkade, and general exhaust fans remove heat, moisture, and contaminants before they cause damage. Failed exhaust shows up as humidity, condensation, and odour complaints long before anyone thinks to check the fan. We maintain and repair the full range, and we service building pressurization systems that control airflow between spaces, reduce infiltration, and protect the envelope from moisture.",
      ],
    },
    {
      heading: "Energy and heat recovery ventilators",
      paragraphs: [
        "ERVs transfer both heat and moisture between outgoing and incoming air streams, improving air quality while cutting the energy cost of ventilation. HRVs deliver fresh air while recovering heat that would otherwise be exhausted. Both only earn their savings when cores, filters, and controls are maintained.",
      ],
    },
    {
      heading: "Parkade ventilation and gas detection",
      paragraphs: [
        "Parkade systems remove vehicle exhaust and control carbon monoxide and nitrogen dioxide, which makes them a code and safety obligation, not a comfort feature. We service the fans, gas detection sensors, and control panels as one system, because a parkade with working fans and failed sensors is not compliant and not safe.",
      ],
    },
    {
      heading: "Airflow diagnostics and balancing",
      paragraphs: [
        "Comfort complaints, stale zones, and doors that whistle are all measurable problems. We diagnose airflow issues with instruments, support system balancing, and recommend filtration or equipment upgrades where the data justifies them.",
      ],
    },
  ],
  closing: {
    heading: "Air problems rarely introduce themselves as air problems",
    paragraphs: [
      "They show up as stuffy suites, condensation on windows, lingering odours, or an envelope quietly absorbing moisture. If your building has symptoms nobody can pin down, the ventilation system is a good place to start looking, and we can measure it properly.",
    ],
  },
  cta: { label: "Request service", href: "/contact" },
  related: [
    {
      label: "Preventative maintenance programs",
      href: "/mechanical/preventative-maintenance",
      note: "Keep AHUs, MAUs, and exhaust systems on a schedule",
    },
    {
      label: "Cooling systems",
      href: "/mechanical/cooling-systems",
      note: "RTUs and equipment that share ductwork with your ventilation",
    },
    {
      label: "HVAC retrofits and capital projects",
      href: "/mechanical/retrofits",
      note: "Upgrade aging ventilation equipment on a planned budget",
    },
  ],
  needsFromBrett: [
    "Confirm scope of gas detection service (calibration, sensor replacement, any third-party certification requirements).",
    "Confirm whether air balancing is performed in-house or coordinated with a certified balancing agency.",
  ],
};
