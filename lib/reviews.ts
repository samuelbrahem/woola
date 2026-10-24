/**
 * Google reviews shown on the homepage.
 *
 * Source listing: Woola Mechanical on Google (linked from the section header;
 * the average rating is intentionally not shown on the site).
 *
 * Google blocks automated review scraping, so the entries below are
 * PLACEHOLDERS carried over from the old testimonial cards. Replace each one
 * with a verbatim review from the listing (reviewer name as shown on Google,
 * star rating, month/year) before launch. Do not edit review text.
 */
export const googleListingUrl = "https://share.google/cxDSLCU1BzkhDk2nF";

export type GoogleReview = {
  author: string;
  /** Optional second line, e.g. "Strata Council Chair · Burnaby". */
  context?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** As Google shows it, e.g. "March 2026". */
  date: string;
  text: string;
};

export const googleReviews: GoogleReview[] = [
  {
    author: "Strata Council Chair",
    context: "Park Place Towers · Burnaby",
    rating: 5,
    date: "2026",
    text: "We replaced three separate vendors with Woola. One dispatcher, one PO, and reporting that our strata council actually reads.",
  },
  {
    author: "Residential client",
    context: "North Vancouver",
    rating: 5,
    date: "2026",
    text: "Their heat-pump retrofit team handled CleanBC paperwork end-to-end. We collected $6,000 in stacked rebates without lifting a finger.",
  },
  {
    author: "Director of Facilities",
    context: "Metro Vancouver retailer",
    rating: 5,
    date: "2026",
    text: "Generator service finally feels professional. Real load-bank tests, real reports, and they're at our retail sites the day we call.",
  },
];

/**
 * Per-division Google listing links. Only Mechanical's share link is on file;
 * the others fall back to it until Woola supplies each division's listing
 * (Woola Power has its own listing with 11 reviews).
 */
const listingByDivision: Partial<Record<string, string>> = {
  mechanical: googleListingUrl,
};

export function googleListingFor(division: string) {
  return listingByDivision[division] ?? googleListingUrl;
}
