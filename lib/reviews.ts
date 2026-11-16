/**
 * Google listing links. Review cards themselves come live from the Places API
 * (lib/google-reviews.ts); the average rating is intentionally not shown.
 */
export const googleListingUrl = "https://share.google/cxDSLCU1BzkhDk2nF";

/** Per-division Google Business Profile share links (from Brett, 2026-11-16).
 *  Power's listing link is still outstanding and falls back to Mechanical's. */
const listingByDivision: Partial<Record<string, string>> = {
  mechanical: googleListingUrl,
  electrical: "https://share.google/cqyHtFyrJqbeCfZNZ",
  build: "https://share.google/XAsMIEjYAB1topl0F",
};

export function googleListingFor(division: string) {
  return listingByDivision[division] ?? googleListingUrl;
}
