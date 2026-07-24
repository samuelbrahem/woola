"use client";

import { useState } from "react";

export type MarqueeItem = {
  name: string;
  /** Remote domain — resolved through DuckDuckGo → Google icon services. */
  domain?: string;
  /** Local image path (e.g. /brand/logo-teca.png). Overrides `domain`. */
  src?: string;
};

function LogoTile({ item, invert }: { item: MarqueeItem; invert: boolean }) {
  const [step, setStep] = useState<0 | 1 | 2>(item.src ? 0 : item.domain ? 0 : 2);

  const remoteSrc =
    step === 0
      ? `https://icons.duckduckgo.com/ip3/${item.domain}.ico`
      : step === 1
        ? `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`
        : "";

  const src = item.src ?? remoteSrc;
  const filter = invert ? "brightness(0) invert(1)" : undefined;

  return (
    <div className="flex flex-col items-center justify-center gap-2 min-w-[144px]">
      {src && step < 2 ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${item.name} mark`}
          onError={() => !item.src && setStep((s) => (s + 1) as 0 | 1 | 2)}
          className="h-10 w-auto max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity"
          style={{ filter }}
          loading="lazy"
        />
      ) : (
        <span
          className={`text-sm font-semibold tracking-tight ${
            invert ? "text-cream-100/80" : "text-ink-800"
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
