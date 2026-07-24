"use client";

import { useState } from "react";

export type MarqueeItem = {
  name: string;
  /** Kept for compatibility — no longer fetched; wordmark chip is used instead. */
  domain?: string;
  /** Local image path (e.g. /brand/logo-teca.png). Renders as a real logo when present. */
  src?: string;
};

function LogoTile({ item, invert }: { item: MarqueeItem; invert: boolean }) {
  const [broken, setBroken] = useState(false);
  const filter = invert ? "brightness(0) invert(1)" : undefined;
  const showImage = item.src && !broken;

  return (
    <div className="flex items-center justify-center h-16 min-w-[180px] px-6">
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.name}
          onError={() => setBroken(true)}
          className="max-h-12 w-auto max-w-[180px] object-contain opacity-90 hover:opacity-100 transition-opacity"
          style={{ filter }}
          loading="lazy"
        />
      ) : (
        <span
          className={`text-base md:text-lg font-semibold tracking-tight whitespace-nowrap ${
            invert ? "text-cream-50/85" : "text-ink-800"
          }`}
        >
          {item.name}
        </span>
      )}
    </div>
  );
}

/**
 * Infinite marquee of logos. Duplicates the list so the CSS `translateX(-50%)`
 * loop reads as seamless.
 */
export function LogoMarquee({
  items,
  invert = false,
}: {
  items: MarqueeItem[];
  invert?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track py-2">
        {doubled.map((it, i) => (
          <LogoTile key={`${it.name}-${i}`} item={it} invert={invert} />
        ))}
      </div>
    </div>
  );
}
