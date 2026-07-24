"use client";

import { useState } from "react";

export type MarqueeItem = {
  name: string;
  /** Kept for compatibility; no longer fetched. */
  domain?: string;
  /** Local image path (e.g. /brand/logo-teca.png). Renders as a real logo when present. */
  src?: string;
};

function LogoTile({ item, invert }: { item: MarqueeItem; invert: boolean }) {
  const [broken, setBroken] = useState(false);
  if (!item.src || broken) return null;
  const filter = invert ? "brightness(0) invert(1)" : undefined;

  return (
    <div className="flex items-center justify-center h-20 w-[160px] shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.name}
        onError={() => setBroken(true)}
        className="max-h-16 max-w-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
        style={{ filter }}
        loading="eager"
        decoding="async"
      />
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
  return (
    <div className="marquee">
      <div className="marquee-track py-2">
        <div className="marquee-list">
          {items.map((it) => (
            <LogoTile key={`a-${it.name}`} item={it} invert={invert} />
          ))}
        </div>
        <div className="marquee-list" aria-hidden="true">
          {items.map((it) => (
            <LogoTile key={`b-${it.name}`} item={it} invert={invert} />
          ))}
        </div>
      </div>
    </div>
  );
}
