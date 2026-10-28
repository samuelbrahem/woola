/**
 * Company news: dated announcements with a public source, separate from the
 * Field Notes articles in lib/posts.ts. Only items with a verifiable source
 * go here; `displayDate` overrides the ISO date when a source gives a season
 * rather than a day.
 */
export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date used for sorting and schema. */
  date: string;
  /** Shown instead of the formatted date when the source is only approximate. */
  displayDate?: string;
  cover: string;
  coverAlt: string;
  body: { heading?: string; paragraphs: string[] }[];
  source?: { label: string; href: string };
};

export const news: NewsItem[] = [
  {
    slug: "sterling-fleet-outfitters-four-vans",
    title: "Four Woola service vans fitted out by Sterling Fleet Outfitters",
    excerpt:
      "Sterling has upfitted four of Woola's Ford Transit service vans with locking tool drawers, Packout keepers, and aluminum shelving, so plumbing and HVAC crews find parts faster and carry more on each call.",
    date: "2024-05-27",
    cover: "/field/08-11-2026-van-2.jpg",
    coverAlt: "Side profile of a wrapped Woola Mechanical service van",
    body: [
      {
        paragraphs: [
          "Sterling Fleet Outfitters has published a case study on its work with Woola Mechanical. Since 2023 Sterling has upfitted four of Woola's vans, mostly Ford Transit 148-inch low-roof and mid-roof models, which run daily service and installation calls for the plumbing and HVAC crews.",
        ],
      },
      {
        heading: "What went into the vans",
        paragraphs: [
          "The featured van is a Transit 148-inch mid-roof with Sterling's plumbers package: a jumbo pull-out tool drawer and parts slider rated to 320 pounds with a locking feature, a Milwaukee Packout keeper that holds four carry cases without stacking, and a lightweight four-shelf aluminum unit.",
          "The brief was organization. Without fixed shelving, service vans fill with crates and boxes and calls slow down while a technician digs for a fitting. With the upfit, tools and parts have a place, there is room left over for extra equipment, and the van reads as prepared when it pulls up to a building.",
        ],
      },
      {
        heading: "Why the spend made sense",
        paragraphs: [
          "Woola's Brock Johnson told Sterling the upfront cost is high, but the equipment outlasts most vans, uses the space well, and makes technicians more efficient over time, which is where the money comes back. Woola chose Sterling on product quality and customer service, and plans to keep working with them as the fleet grows.",
        ],
      },
    ],
    source: { label: "Sterling Fleet Outfitters case study", href: "https://sterlingfleetoutfitters.com/case-studies/woola-mechanical-case-study/" },
  },
  {
    slug: "dylan-roper-partner-hvacr-manager",
    title: "Dylan Roper named partner and HVACR manager at Woola Mechanical",
    excerpt:
      "Mechanical Business reports that Dylan Roper has joined Woola Mechanical as a partner and manager of the HVAC and refrigeration side of the company.",
    date: "2024-02-02",
    cover: "/field/07-28-2026-mech-4.jpg",
    coverAlt: "High-pressure steam piping in a commercial mechanical room",
    body: [
      {
        paragraphs: [
          "Mechanical Business, the Canadian trade publication for the HVAC and plumbing industry, reported on February 2, 2024 that Dylan Roper has been named partner and HVACR manager at Woola Mechanical in Coquitlam.",
          "Roper leads the heating, ventilation, air conditioning, and refrigeration work across the strata, commercial, and residential buildings Woola services in the Lower Mainland. The partnership adds HVACR leadership alongside the plumbing and gas side the company opened with in fall 2023.",
        ],
      },
    ],
    source: { label: "Mechanical Business, February 2, 2024", href: "https://mechanicalbusiness.com/2024/02/02/dylan-roper-now-a-partner-at-woola-mechanical/" },
  },
  {
    slug: "woola-mechanical-opens-coquitlam",
    title: "Woola Mechanical opens in Coquitlam",
    excerpt:
      "Woola Mechanical started operating in fall 2023 as a mechanical and plumbing contractor for Vancouver's Lower Mainland, working out of Fawcett Road in Coquitlam.",
    date: "2023-10-01",
    displayDate: "Fall 2023",
    cover: "/field/08-11-2026-van-7.jpg",
    coverAlt: "Woola van arriving at a commercial building entrance",
    body: [
      {
        paragraphs: [
          "Woola Mechanical opened in fall 2023 as a mechanical and plumbing contractor serving Vancouver's Lower Mainland, based on Fawcett Road in Coquitlam. The company set up around the way property managers and strata councils actually buy building services: one dispatch desk, one point of contact, and the trades under one roof.",
          "Since then the group has added Woola Power for standby generators and backup power, Woola Electrical, and Woola Build for repairs, maintenance, and construction, all dispatched from the same Coquitlam shop.",
        ],
      },
    ],
    source: { label: "Mechanical Business", href: "https://mechanicalbusiness.com/2024/02/02/dylan-roper-now-a-partner-at-woola-mechanical/" },
  },
];

export const newsSorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}

export function formatNewsDate(n: NewsItem) {
  if (n.displayDate) return n.displayDate;
  return new Date(n.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
