import type { ServiceContent } from "../types";

export const indoorAirQuality: ServiceContent = {
  lead: [
    "Homes in Metro Vancouver are built tighter than they used to be, which is great for heating bills and less great for the air you breathe. Cooking, moisture, household dust, and late-summer wildfire smoke all end up circulating inside the same sealed envelope.",
    "Woola treats indoor air as part of the whole mechanical system rather than a gadget you bolt on. Ventilation, filtration, and humidity control do their best work when they are matched to your furnace or heat pump and to how your household actually lives.",
  ],
  blocks: [
    {
      heading: "Our indoor air quality services",
      bullets: [
        "HRV and ERV systems",
        "Whole-home humidifiers",
        "High-efficiency air filtration",
        "Air purification systems",
        "Ventilation improvements",
        "Indoor air quality assessments",
      ],
    },
    {
      heading: "Start with an assessment, not a sales pitch",
      paragraphs: [
        "Before recommending equipment, we look at how your home breathes now: existing ventilation, filtration, humidity patterns, and any rooms that never feel quite right. The result is a short list of practical improvements that will make a real difference, and nothing on it that will not.",
      ],
    },
    {
      heading: "Filtration for smoke season",
      paragraphs: [
        "Wildfire smoke has become a regular feature of late summer in BC. Upgraded filtration on your existing system, chosen and installed correctly, can noticeably improve what your family breathes during those weeks without choking off your airflow the rest of the year.",
      ],
    },
    {
      heading: "Humidity, balanced",
      paragraphs: [
        "Air that is too dry is hard on skin, sleep, and hardwood floors. Air that is too damp invites condensation and mould. Balanced humidity protects both the people in the house and the house itself, and it helps your heating and cooling equipment run efficiently.",
      ],
    },
  ],
  closing: {
    heading: "Air you notice for the right reasons",
    paragraphs: [
      "Most people only think about indoor air when something is wrong with it. Get the ventilation, filtration, and humidity right, and the house simply feels fresher, through smoke season and the depths of winter alike.",
    ],
  },
  cta: { label: "Book an assessment", href: "/contact" },
  related: [
    { label: "Heating systems", href: "/residential/heating", note: "The equipment your air moves through" },
    { label: "Air conditioning and cooling", href: "/residential/cooling", note: "Comfort and humidity in summer" },
    { label: "Home maintenance plans", href: "/residential/maintenance-plans", note: "Filters changed on schedule" },
  ],
};
