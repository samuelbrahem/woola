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
    slug: "quarterly-team-breakfast-november-2026",
    title: "Quarterly meeting, served as a team breakfast",
    excerpt:
      "Woola's November quarterly meeting moved to Pur & Simple in Port Coquitlam: a sit-down breakfast for the whole team, a colouring contest, and a parking lot full of Woola vehicles.",
    date: "2026-11-13",
    cover: "/social/quarterly-breakfast.jpg",
    coverAlt: "The Woola team at a long breakfast table during the November 2026 quarterly meeting",
    body: [
      {
        paragraphs: [
          "This quarter's company meeting felt more like a family breakfast. The team took a break from the daily dispatch rush to catch up over a sit-down meal at Pur & Simple in Port Coquitlam, with a colouring contest run by Graham thrown in for good measure.",
          "The parking lot told its own story: enough Woola vehicles to fill it, a reminder of how much the team and the fleet have grown together since the first vans went on the road.",
        ],
      },
    ],
    source: { label: "Woola on Instagram", href: "https://www.instagram.com/p/DfsfadbEXgJ/" },
  },
  {
    slug: "coquitlam-firefighters-mayors-charity-gala-2026",
    title: "Supporting the Coquitlam Fire Fighters' Mayor's Charity Gala",
    excerpt:
      "Woola joined the 6th Annual Mayor's Charity Gala hosted by the Coquitlam Fire Fighters Charitable Society, raising money for the SD43 Feeding Futures Program.",
    date: "2026-11-09",
    cover: "/social/firefighters-gala.jpg",
    coverAlt: "A Coquitlam fire truck parked outside the venue of the Mayor's Charity Gala",
    body: [
      {
        paragraphs: [
          "Woola was back at the Coquitlam Fire Fighters Charitable Society's Mayor's Charity Gala for another year. The sixth edition took over a Willy Wonka-themed room at Great Canadian Casino Coquitlam and brought together people who show up for the community year after year.",
          "Every dollar raised goes to the SD43 Feeding Futures Program and the Charitable Society, helping make sure kids in the Tri-Cities have access to healthy meals. Thanks to Steph for representing Woola on the night, and to everyone who stopped by the Woola photo setup.",
        ],
      },
    ],
    source: { label: "Woola on Instagram", href: "https://www.instagram.com/p/DfiIZoFDPdG/" },
  },
  {
    slug: "pama-fall-education-conference-2026",
    title: "Media sponsor at the PAMA Fall Education Conference 2026",
    excerpt:
      "Woola returned to the Professional Association of Managing Agents' Fall Education Conference as media sponsor, with the Woola photobooth back by popular demand.",
    date: "2026-10-25",
    cover: "/social/pama-conference-2026.jpg",
    coverAlt: "A Woola team member beside the Woola photobooth at the PAMA Fall Education Conference 2026",
    body: [
      {
        paragraphs: [
          "Another good year at the PAMA Fall Education Conference. Woola took part as the event's media sponsor, catching up with familiar faces from the strata management world, meeting new ones, and hearing first-hand about the pressures strata communities and their managers are dealing with day to day.",
          "The Woola photobooth made its usual appearance and stayed busy all day. Thanks to PAMA for having us, and to everyone who stopped by.",
        ],
      },
    ],
    source: { label: "Woola on Instagram", href: "https://www.instagram.com/p/De7fGwikmS1/" },
  },
  {
    slug: "canucks-alumni-video-shoot",
    title: "On set with the Canucks Alumni",
    excerpt:
      "Woola teamed up with Vancouver Canucks alumni Kirk McLean and Dave Babych for a video shoot about what the Woola team is all about.",
    date: "2025-11-06",
    cover: "/social/canucks-alumni-shoot.jpg",
    coverAlt: "Woola team members with Canucks alumni Kirk McLean and Dave Babych on set at the shop",
    body: [
      {
        paragraphs: [
          "Woola had the chance to team up with the Canucks Alumni, including Kirk McLean and Dave Babych, for a video shoot highlighting what the Woola team is about: the trades, the people, and the buildings they look after across the Lower Mainland.",
          "The shoot took place at the Woola shop with crews from the mechanical, electrical and power teams on camera alongside the two Canucks legends.",
        ],
      },
    ],
    source: { label: "Woola on Instagram", href: "https://www.instagram.com/p/DQuOZihj2Af/" },
  },
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
