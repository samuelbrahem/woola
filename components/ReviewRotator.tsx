"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GoogleG } from "@/components/Testimonials";
import type { LiveReview } from "@/lib/google-reviews";

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
    // Google profile photos come from lh3.googleusercontent.com at their own size.
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

export type RotatorReview = LiveReview & { listing?: string };

/** Reviewers sometimes wrap their own text in quotes; we add the typographic pair ourselves. */
function clean(text: string) {
  return text.trim().replace(/^["\u201C\u201D']+\s*/, "").replace(/\s*["\u201C\u201D']+$/, "");
}

function Card({ r }: { r: RotatorReview }) {
  return (
    <li className="card p-6 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <Stars rating={r.rating} />
        <GoogleG className="w-5 h-5" />
      </div>
      <p className="mt-4 text-ink-700 leading-relaxed flex-1 text-[15px]">&ldquo;{clean(r.text)}&rdquo;</p>
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
          <div className="text-xs text-ink-400 mt-0.5 truncate">
            {r.when}
            {r.listing ? ` · ${r.listing}` : ""}
          </div>
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
  );
}

/**
 * Rotating review display: three cards on desktop, one on mobile, advancing
 * on a timer. Pauses on hover and focus, stops under reduced motion, and the
 * arrows and dots work without the timer.
 */
export function ReviewRotator({ reviews, interval = 7000 }: { reviews: RotatorReview[]; interval?: number }) {
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const set = () => setPerView(mq.matches ? 3 : 1);
    set();
    mq.addEventListener("change", set);
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => mq.removeEventListener("change", set);
  }, []);

  const pages = Math.max(1, Math.ceil(reviews.length / perView));
  const current = Math.min(page, pages - 1);

  useEffect(() => {
    if (pages <= 1 || paused || reduced.current) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pages), interval);
    return () => clearInterval(t);
  }, [pages, paused, interval]);

  const visible = reviews.slice(current * perView, current * perView + perView);

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul key={current} className="grid md:grid-cols-3 gap-5 animate-[fade-in_0.5s_ease_both]" aria-live="polite">
        {visible.map((r) => (
          <Card key={r.id} r={r} />
        ))}
      </ul>
      {pages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPage((current - 1 + pages) % pages)}
            className="w-9 h-9 rounded-full border border-white/30 text-white/80 hover:bg-white/10 flex items-center justify-center"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Show reviews ${i + 1} of ${pages}`}
                aria-current={i === current}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPage((current + 1) % pages)}
            className="w-9 h-9 rounded-full border border-white/30 text-white/80 hover:bg-white/10 flex items-center justify-center"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
