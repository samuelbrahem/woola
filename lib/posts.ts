export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: "Field Notes" | "Building Ops" | "Rebates & Compliance" | "Case Studies";
  author: { name: string; role: string };
  cover: string;
  coverAlt: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "csa-c282-what-property-managers-need-to-know",
    title: "CSA C282: what property managers actually need to know",
    excerpt:
      "The annual emergency-generator inspection your insurer, AHJ, and strata council all reference. Here is what it covers, why the report matters, and the deadlines that trip most buildings up.",
    date: "2026-07-18",
    readingTime: "4 min read",
    category: "Building Ops",
    author: { name: "Woola Power Systems", role: "Field Notes" },
    cover: "/equipment-renders/generator.webp",
    coverAlt: "3D cutaway render of a standby diesel generator",
    body: [
      {
        paragraphs: [
          "Every building with a life-safety generator in BC falls under CSA C282, whether the manager knows it or not. The standard sets the minimum for annual inspection, monthly exercise, and load bank testing on emergency standby power. When the fire alarm inspector or the insurer asks for the C282 report, they are asking for the current year's binder, signed and dated by a qualified generator technician.",
        ],
      },
      {
        heading: "What the annual inspection actually covers",
        paragraphs: [
          "The visit walks the whole system: engine oil and coolant, batteries, fuel condition, transfer switch operation, alarms, and the annunciator. A load bank test verifies the genset will carry the full building load for the required duration, not just the light bulbs in the mechanical room.",
          "Findings get written up as pass, deficient, or non-compliant, with photos. Deficiencies are quoted separately so councils can approve repair work at the next meeting.",
        ],
      },
      {
        heading: "The two dates most buildings miss",
        paragraphs: [
          "The annual inspection date shifts every year based on when the last one was completed. Not the calendar. If your last one was in November, the next window opens in October.",
          "The other one is the monthly exercise log. It is a five-minute check the building's staff can do, but if it is not written down it might as well not have happened when the AHJ walks through.",
        ],
      },
      {
        heading: "What we hand off after every C282",
        paragraphs: [
          "PDF report signed and dated, photos of every asset, deficiency quotes, the load bank test result, and the next inspection window on your calendar. Everything gets uploaded to the asset registry against the building so the next PM does not start blind.",
        ],
      },
    ],
  },
  {
    slug: "cleanbc-heat-pump-rebates-2026",
    title: "The 2026 CleanBC heat-pump rebate stack, in plain English",
    excerpt:
      "Combined provincial, federal, and utility rebates on a residential heat pump can hit $7,500 this year, but the paperwork tripwires are real. Here is the current stack and how we file it for you.",
    date: "2026-06-24",
    readingTime: "5 min read",
    category: "Rebates & Compliance",
    author: { name: "Woola Mechanical", role: "CleanBC Better Homes contractor" },
    cover: "/equipment-renders/heat-pump.webp",
    coverAlt: "3D cutaway render of a commercial heat pump",
    body: [
      {
        paragraphs: [
          "Every quote we send that includes a heat-pump conversion lists the current rebate stack: CleanBC Better Homes, CleanBC Income-Qualified, BC Hydro, FortisBC, and the federal Greener Homes credit where it still applies. Most homeowners see $5,000 to $7,500 back if the paperwork is filed correctly and on time.",
        ],
      },
      {
        heading: "What actually qualifies",
        paragraphs: [
          "Cold-climate heat pumps sized to the building's design temperature. Not the model in the flyer. If the equipment is not on the approved product list on the day of install, the rebate does not process.",
          "Ducting must meet TECA Quality First standards where we touch it. Same story with permits, gas removal certification (for fuel-switch bonuses), and post-install commissioning reports.",
        ],
      },
      {
        heading: "The tripwires",
        paragraphs: [
          "Rebate portals close their application windows sometimes without warning. Product eligibility changes quarterly. And CleanBC Income-Qualified requires the homeowner's paperwork submitted before the install starts, not after.",
          "We handle every application in-house. Homeowners sign one authorization form and get the rebate deposited directly, or applied to the invoice as an assignment.",
        ],
      },
    ],
  },
  {
    slug: "why-your-strata-needs-an-asset-registry",
    title: "Why your strata council needs an asset registry (and what one looks like)",
    excerpt:
      "The depreciation report tells you what the roof cost 20 years ago. The asset registry tells you what to do about it next Tuesday. Here is what we build and why councils rely on it.",
    date: "2026-05-30",
    readingTime: "6 min read",
    category: "Field Notes",
    author: { name: "Woola Build", role: "Asset planning" },
    cover: "/equipment-renders/rooftop-unit.webp",
    coverAlt: "3D cutaway render of a packaged rooftop HVAC unit",
    body: [
      {
        paragraphs: [
          "A depreciation report is a moment-in-time snapshot. Useful for planning contributions, useless when the boiler quits at 4am and nobody on council knows the model number. An asset registry solves that: it is the living record of what is on the building, what age it is, what it costs to maintain, and when it comes up for replacement.",
        ],
      },
      {
        heading: "What we document on the walk-through",
        paragraphs: [
          "Every major mechanical, electrical, and envelope asset gets a photo, model and serial, install date if we can find it, condition rating, and next-service date. Anything with a nameplate gets scanned. Anything without gets measured.",
        ],
      },
      {
        heading: "How councils use it",
        paragraphs: [
          "Renewal planning: know which items are 5+ years past useful life so contributions can be timed. Capital projects: real replacement costs based on actual gear, not depreciation-report estimates from 2018. Emergencies: when a system goes down at 4am, the registry has the model, the parts vendor, and the last service note.",
          "We keep the registry updated on every visit, so the next PM to inherit the file starts with a full picture instead of a stack of PDFs.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
