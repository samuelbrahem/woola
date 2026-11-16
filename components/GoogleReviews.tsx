import { fetchListing, REVIEW_FILTER_NOTICE } from "@/lib/google-reviews";
import { ReviewRotator, type RotatorReview } from "@/components/ReviewRotator";

/**
 * Live Google reviews, rotating: five-star, with written detail, newest first
 * (see lib/google-reviews.ts). Pass one division for a division site or
 * several for the group site, where reviews from every listing are merged.
 * Renders nothing when there is no API key or nothing passes the filter, so
 * the surrounding band's "See our Google reviews" link still carries the
 * section.
 */
export async function GoogleReviews({
  division = "mechanical",
  divisions,
  limit = 12,
}: {
  division?: string;
  divisions?: string[];
  limit?: number;
}) {
  const slugs = divisions && divisions.length > 0 ? divisions : [division];
  const listings = await Promise.all(slugs.map((s) => fetchListing(s)));
  const seen = new Set<string>();
  const reviews: RotatorReview[] = [];
  for (const l of listings) {
    if (!l) continue;
    for (const r of l.reviews) {
      if (seen.has(r.id)) continue;
      seen.add(r.id);
      reviews.push(slugs.length > 1 ? { ...r, listing: l.name } : r);
    }
  }
  reviews.sort((a, b) => (a.publishTime < b.publishTime ? 1 : -1));
  const shown = reviews.slice(0, limit);
  if (shown.length === 0) return null;

  return (
    <div>
      <ReviewRotator reviews={shown} />
      <p className="mt-5 text-xs text-white/70 max-w-3xl">{REVIEW_FILTER_NOTICE}</p>
    </div>
  );
}
