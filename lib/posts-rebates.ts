import type { Post } from "./posts";

/**
 * Rebate and incentive studies, published every three days by the scheduled
 * "Woola rebate study" routine (see docs/REBATE-STUDIES.md).
 *
 * Rules for every entry:
 *  - Newest first. One object per study. Never edit or remove earlier entries
 *    except to correct a fact.
 *  - category "Rebates & Compliance"; division set to the division that does
 *    the work the rebate pays for.
 *  - Every dollar figure, date and eligibility rule must come from the
 *    program's own page, listed in `sources`.
 *  - `services` links point at that division's own domain.
 */
export const rebateStudies: Post[] = [
  {
    slug: "fortisbc-heating-rebates-bc-business",
    title: "FortisBC Heating Rebates: How Your Business Could Save Thousands",
    excerpt:
      "How BC businesses, stratas and building managers can use FortisBC's heating system optimization rebates to offset tune-ups and upgrades on their existing natural gas heating systems.",
    date: "2026-11-25",
    readingTime: "4 min read",
    division: "mechanical",
    category: "Rebates & Compliance",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/field/07-28-2026-mech-8.jpg",
    coverAlt: "Woola Mechanical technician checking the controls on a boiler in a mechanical room",
    coverPhoto: true,
    contact: {
      name: "Jenna Querengesser",
      role: "Business Development",
      email: "jquerengesser@woola.ca",
      photo: "/team/jenna-querengesser.jpg",
      note: "Not sure whether your building or equipment qualifies? Email Jenna and she will connect you with one of our Technical Safety BC-licensed technicians.",
    },
    body: [
      {
        paragraphs: [
          "Improving energy efficiency doesn't always require a major capital investment. Right now, FortisBC is offering a range of rebates that make optimizing your existing heating system more affordable, with the added benefit of long-term energy savings.",
          "Through its heating system optimization rebates, FortisBC is helping businesses, property owners and building managers offset the cost of improving their existing natural gas heating systems.",
          "Whether you manage a strata, commercial office, warehouse, restaurant or industrial facility, your building could already qualify for thousands of dollars in rebates.",
        ],
      },
      {
        heading: "Better building performance, lower operating costs",
        paragraphs: [
          "Investing in your building's mechanical systems can deliver benefits well beyond the initial rebate. Optimizing your existing heating equipment can help you:",
        ],
        bullets: [
          "Reduce energy costs: improve equipment efficiency and reduce unnecessary natural gas consumption.",
          "Extend equipment lifespan: keep your mechanical systems running efficiently for longer.",
          "Minimize unexpected repairs: identify potential issues before they become costly problems.",
          "Improve occupant comfort: maintain more consistent heating throughout your building.",
          "Support sustainability goals: reduce energy consumption and your building's environmental footprint.",
          "Maximize your maintenance budget: offset the cost of work your building may already need.",
        ],
      },
      {
        heading: "How much money could your building get back?",
        paragraphs: [
          "FortisBC offers a range of rebates for everything from routine equipment tune-ups to more substantial mechanical upgrades.",
          "For example, if your building has a 1,000 MBH boiler, a qualifying tune-up could earn you a rebate of up to $750 while helping your equipment operate more efficiently.",
          "Additional rebates are available for other qualifying mechanical upgrades. The full list is on the FortisBC business rebates page, linked under Sources below.",
        ],
        table: {
          head: ["Eligible service or upgrade", "Available rebate"],
          rows: [
            ["Furnace or rooftop unit tune-up", "100% of the cost, up to $400"],
            ["Boiler tune-up", "$0.75 per MBH, up to 75% of the cost"],
            ["Boiler economizer", "$10,000 to $25,000"],
            ["Boiler controls upgrade (oxygen trim and parallel positioning)", "$49,000"],
            ["Heat or energy recovery ventilator", "$2.10 to $4.10 per CFM"],
          ],
        },
      },
      {
        heading: "Is your building eligible?",
        paragraphs: [
          "The program is available to a wide range of properties across British Columbia, including:",
        ],
        bullets: [
          "Strata and multi-unit residential buildings",
          "Commercial offices and retail spaces",
          "Warehouses and industrial facilities",
          "Restaurants and hospitality properties",
          "Care facilities",
          "Agricultural buildings",
        ],
      },
      {
        paragraphs: ["Generally, your property may qualify if:"],
        bullets: [
          "You are a FortisBC natural gas customer on an eligible business rate (FortisBC accepts any rate class except Rate 1).",
          "You own the property or hold a long-term lease.",
          "Your equipment is actively used for heating, hot water or process heat. Backup, standby or secondary boilers are not eligible.",
          "For tune-up rebates, your equipment is at least three years old and has not received a tune-up within the past three years. The tune-up has to be done by an approved technician.",
        ],
      },
      {
        heading: "Three simple steps to claim your FortisBC rebate",
        paragraphs: [],
        bullets: [
          "Book your service: reach out to Jenna at jquerengesser@woola.ca to connect with one of our Technical Safety BC-licensed contractors.",
          "Apply for your rebate: submit your online rebate application along with your fully paid invoice within 365 days of the purchase date through the FortisBC rebate portal.",
          "Receive your rebate: once approved, you should receive your rebate within six to eight weeks.",
        ],
      },
      {
        paragraphs: [
          "Some products also qualify for instant rebates, meaning you can save upfront without submitting an application.",
        ],
      },
      {
        heading: "Your mechanical partner in maximizing savings",
        paragraphs: [
          "As a member of FortisBC's Trade Ally Network, our team can help you identify available rebate opportunities, assess your existing mechanical systems and recommend upgrades that make financial and operational sense for your property. Woola takes care of:",
        ],
        bullets: [
          "Assessing your existing heating equipment and identifying applicable rebates.",
          "Recommending improvements based on your building's needs and budget.",
          "Completing the work with our own licensed technicians, without relying on subcontractors.",
          "Providing the necessary invoice documentation to simplify your rebate application.",
        ],
      },
      {
        paragraphs: [
          "With in-house expertise across HVAC, plumbing and gas services, we help property owners, businesses and building managers throughout the Lower Mainland keep their buildings running efficiently.",
        ],
      },
      {
        heading: "How much could your building be saving?",
        paragraphs: [
          "Whether you're planning your annual maintenance budget, managing aging equipment or looking for ways to reduce operating expenses, now is a great time to explore the rebates available to your property. You may already be planning maintenance or mechanical upgrades that qualify for financial incentives.",
          "Rebate amounts, eligibility requirements and program availability are determined by FortisBC and are subject to change. Visit the FortisBC website for current program details.",
        ],
      },
    ],
    services: [
      { label: "Heating systems and boilers", href: "https://woolamech.ca/heating-systems" },
      { label: "Preventative maintenance programs", href: "https://woolamech.ca/preventative-maintenance" },
      { label: "Mechanical retrofits", href: "https://woolamech.ca/retrofits" },
    ],
    sources: [
      { label: "FortisBC: commercial and industrial heating system optimization rebates", url: "https://www.fortisbc.com/rebates/detail/commercial-and-industrial-heating-system-optimization-rebates" },
      { label: "FortisBC: rebates and offers for business (full list)", url: "https://www.fortisbc.com/rebates/rebates-and-offers/rebates-and-offers-for-business" },
      { label: "FortisBC: heating system optimization rebate application portal", url: "https://rebates.fortisbc.com/prp-application" },
      { label: "FortisBC: find a licensed natural gas contractor (Trade Ally Network directory)", url: "https://www.fortisbc.com/build-renovate/find-a-contractor/licensed-natural-gas-contractors" },
    ],
  },
];
