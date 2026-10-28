/**
 * Google listing links. Review cards themselves come live from the Places API
 * (lib/google-reviews.ts); the average rating is intentionally not shown.
 */
export const googleListingUrl = "https://share.google/cxDSLCU1BzkhDk2nF";

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
