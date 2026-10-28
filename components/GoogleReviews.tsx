import { Star } from "lucide-react";
import { GoogleG } from "@/components/Testimonials";
import { fetchListing, REVIEW_FILTER_NOTICE } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? "fill-[#FBBC05] text-[#FBBC05]" : "text-ink-300"}`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

function Avatar({ src, name }: { src?: string; name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "G";
  return src ? (
    // Google profile photos are served from lh3.googleusercontent.com with
    // their own sizing; next/image adds nothing here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={36}
      height={36}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="w-9 h-9 rounded-full object-cover bg-ink-100 shrink-0"
    />
  ) : (
    <span className="w-9 h-9 rounded-full bg-ink-100 text-ink-600 text-sm font-semibold flex items-center justify-center shrink-0">
      {initial}
    </span>
  );
}

/**
 * Live Google reviews for a listing: five-star, with written detail, newest
 * first (see lib/google-reviews.ts). Renders nothing when there is no API key
 * or nothing passes the filter, so the surrounding band's "See our Google
 * reviews" link still carries the section.
 */
export async function GoogleReviews({
  division = "mechanical",
  limit = 3,
}: {
  division?: string;
  limit?: number;
}) {
  const listing = await fetchListing(division);
  const reviews = listing?.reviews.slice(0, limit) ?? [];
  if (reviews.length === 0) return null;

  return (
    <div className="mt-10">
      <ul className="grid md:grid-cols-3 gap-5">
        {reviews.map((r) => (
          <li key={r.id} className="card p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <Stars rating={r.rating} />
              <GoogleG className="w-5 h-5" />
            </div>
            <p className="mt-4 text-ink-700 leading-relaxed flex-1 text-[15px]">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="mt-6 pt-5 border-t hairline flex items-center gap-3">
              <Avatar src={r.photo} name={r.author} />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-ink-800 truncate">
                  {r.authorUrl ? (
                    <a href={r.authorUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">
                      {r.author}
                    </a>
                  ) : (
                    r.author
                  )}
                </div>
                <div className="text-xs text-ink-400 mt-0.5">{r.when}</div>
              </div>
              {r.url && (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 text-[11px] text-ink-400 hover:text-ink-700 whitespace-nowrap"
                >
                  View on Google
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-white/70 max-w-3xl">{REVIEW_FILTER_NOTICE}</p>
    </div>
  );
}
