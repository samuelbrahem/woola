"use client";

import { useState } from "react";

export type MarqueeItem = {
  name: string;
  /** Kept for compatibility; no longer fetched. */
  domain?: string;
  /** Local image path (e.g. /brand/logo-teca.png). Renders as a real logo when present. */
  src?: string;
};

type Size = "md" | "sm";

function LogoTile({ item, invert, size }: { item: MarqueeItem; invert: boolean; size: Size }) {
  const [broken, setBroken] = useState(false);
  if (!item.src || broken) return null;
  const filter = invert ? "brightness(0) invert(1)" : undefined;

  return (
    <div
      className={`flex items-center justify-center shrink-0 ${
        size === "sm" ? "h-9 w-[112px]" : "h-20 w-[160px]"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.name}
        onError={() => setBroken(true)}
        className={`max-w-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity ${
          size === "sm" ? "max-h-7" : "max-h-16"
        }`}
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
  size = "md",
}: {
  items: MarqueeItem[];
  invert?: boolean;
  /** "sm" is the slim in-flow brand bar; "md" the full section marquee. */
  size?: Size;
}) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${size === "sm" ? "py-0" : "py-2"}`}>
        <div className="marquee-list">
          {items.map((it) => (
            <LogoTile key={`a-${it.name}`} item={it} invert={invert} size={size} />
          ))}
        </div>
        <div className="marquee-list" aria-hidden="true">
          {items.map((it) => (
            <LogoTile key={`b-${it.name}`} item={it} invert={invert} size={size} />
          ))}
        </div>
      </div>
    </div>
  );
}
