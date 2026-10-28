"use client";

import { useState } from "react";
import Link from "next/link";

type City = { slug: string; name: string };

/**
 * Municipality chips that show a short list by default and expand to the full
 * list on click, so coverage strips don't read as a wall of place names.
 */
export function CityChips({
  cities,
  initial = 6,
  className = "",
}: {
  cities: City[];
  initial?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const shown = open ? cities : cities.slice(0, initial);
  const rest = cities.length - shown.length;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {shown.map((c) => (
        <Link
          key={c.slug}
          href={`/service-areas/${c.slug}`}
          className="text-xs px-3 py-1.5 rounded-full border border-ink-600 text-cream-100 hover:border-[color:var(--brand-on-dark)] hover:text-[color:var(--brand-on-dark)] transition"
        >
          {c.name}
        </Link>
      ))}
      {rest > 0 ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-xs px-3 py-1.5 rounded-full border border-dashed border-ink-500 text-cream-100/80 hover:border-[color:var(--brand-on-dark)] hover:text-[color:var(--brand-on-dark)] transition"
        >
          + {rest} more
        </button>
      ) : open ? (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-xs px-3 py-1.5 text-cream-100/60 hover:text-cream-100 transition"
        >
          Show fewer
        </button>
      ) : null}
    </div>
  );
}
