"use client";

import { useState } from "react";

/**
 * Vendor logo tile. Tries DuckDuckGo's icon service first (returns full favicon-quality
 * marks, no auth), falls back to Google's favicon service, then to a text chip.
 */
export function BrandLogo({ name, domain }: { name: string; domain?: string }) {
  const [step, setStep] = useState<0 | 1 | 2>(domain ? 0 : 2);

  const src =
    step === 0
      ? `https://icons.duckduckgo.com/ip3/${domain}.ico`
      : step === 1
        ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
        : "";

  return (
    <div className="card p-6 bg-white flex flex-col items-center justify-center gap-2 min-h-[112px]">
      {step < 2 ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${name} mark`}
          onError={() => setStep((s) => (s + 1) as 0 | 1 | 2)}
          className="max-h-9 w-auto object-contain"
          loading="lazy"
        />
      ) : null}
      <span
        className={`text-xs font-semibold text-ink-800 tracking-tight text-center leading-tight ${
          step < 2 ? "" : "text-sm"
        }`}
      >
        {name}
      </span>
    </div>
  );
}
