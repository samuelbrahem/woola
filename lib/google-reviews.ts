/**
 * Live Google reviews via the Places API (New).
 *
 * Needs GOOGLE_PLACES_API_KEY on the server (Places API (New) enabled; this is
 * a server key, not the browser-restricted NEXT_PUBLIC_GOOGLE_MAPS_API_KEY).
 * Without it every function here returns null and the review bands fall back
 * to a plain "See our Google reviews" link.
 *
 * What Google gives us: at most 5 reviews per listing, chosen by relevance,
 * plus the listing's average rating and review count. We then keep only the
 * reviews that pass REVIEW_FILTER (five stars, with a written review long
 * enough to say something) and show the newest first. Google's display policy
 * requires that filtering to be disclosed next to the reviews, and that each
 * review credits its author and links back to Google; GoogleReviews.tsx does
 * both.
 *
 * Place IDs: set GOOGLE_PLACE_ID_<DIVISION> to pin a listing. Otherwise the
 * listing is found once by name (Text Search, biased to Coquitlam) and the ID
 * is cached for 30 days. Place IDs are the one thing Google allows storing;
 * review content itself is re-fetched hourly.
 */

export type LiveReview = {
  id: string;
  author: string;
  authorUrl?: string;
  photo?: string;
  rating: number;
  text: string;
  /** Google's own relative wording, e.g. "2 months ago". */
  when: string;
  publishTime: string;
  /** Link to this review on Google Maps. */
  url?: string;
};

export type LiveListing = {
  placeId: string;
  name: string;
  rating?: number;
  reviewCount?: number;
  url?: string;
  /** Reviews after REVIEW_FILTER, newest first. */
  reviews: LiveReview[];
  /** How many Google returned before filtering (max 5). */
  returned: number;
};

export const REVIEW_FILTER = {
  /** Only show reviews at or above this star rating. */
  minRating: 5,
  /** A review needs at least this much written text to count as "detailed". */
  minChars: 120,
} as const;

/** Plain-language version of REVIEW_FILTER for the on-page disclosure. */
export const REVIEW_FILTER_NOTICE =
  "Showing recent five-star Google reviews that include a written description, newest first. " +
  "Google does not verify reviews, but removes fake content when it is identified.";

const PLACE_QUERY: Record<string, string> = {
  mechanical: "Woola Mechanical",
  power: "Woola Power",
  electrical: "Woola Electrical",
  build: "Woola Build",
};

const COQUITLAM = { latitude: 49.2386, longitude: -122.8358 };
const API = "https://places.googleapis.com/v1";
const HOUR = 60 * 60;
const MONTH = 30 * 24 * HOUR;

function apiKey() {
  const key = process.env.GOOGLE_PLACES_API_KEY?.trim();
  return key ? key : null;
}

async function resolvePlaceId(division: string): Promise<string | null> {
  const pinned = process.env[`GOOGLE_PLACE_ID_${division.toUpperCase()}`]?.trim();
  if (pinned) return pinned;
  const key = apiKey();
  const query = PLACE_QUERY[division];
  if (!key || !query) return null;
  try {
    const res = await fetch(`${API}/places:searchText`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "places.id,places.displayName",
      },
      body: JSON.stringify({
        textQuery: `${query} Coquitlam BC`,
        locationBias: { circle: { center: COQUITLAM, radius: 50000 } },
        maxResultCount: 3,
      }),
      next: { revalidate: MONTH },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      places?: { id: string; displayName?: { text?: string } }[];
    };
    // Only accept a listing that is actually Woola's; a missing division
    // listing must not silently become some other contractor's reviews.
    const hit = data.places?.find((p) => /^woola\b/i.test(p.displayName?.text ?? ""));
    return hit?.id ?? null;
  } catch {
    return null;
  }
}

type RawReview = {
  name: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
};

export function passesFilter(r: { rating: number; text: string }) {
  return r.rating >= REVIEW_FILTER.minRating && r.text.trim().length >= REVIEW_FILTER.minChars;
}

export async function fetchListing(division = "mechanical"): Promise<LiveListing | null> {
  const key = apiKey();
  if (!key) return null;
  const placeId = await resolvePlaceId(division);
  if (!placeId) return null;
  try {
    const res = await fetch(`${API}/places/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: HOUR },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      id: string;
      displayName?: { text?: string };
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: RawReview[];
    };
    const raw = data.reviews ?? [];
    const reviews: LiveReview[] = raw
      .map((r) => ({
        id: r.name,
        author: r.authorAttribution?.displayName?.trim() || "Google user",
        authorUrl: r.authorAttribution?.uri,
        photo: r.authorAttribution?.photoUri,
        rating: r.rating ?? 0,
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        when: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime ?? "",
        url: r.googleMapsUri,
      }))
      .filter(passesFilter)
      .sort((a, b) => (a.publishTime < b.publishTime ? 1 : -1));
    return {
      placeId: data.id,
      name: data.displayName?.text ?? PLACE_QUERY[division] ?? "Woola",
      rating: data.rating,
      reviewCount: data.userRatingCount,
      url: data.googleMapsUri,
      reviews,
      returned: raw.length,
    };
  } catch {
    return null;
  }
}
