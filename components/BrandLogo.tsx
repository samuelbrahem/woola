"use client";

import { useState } from "react";

/** Card with a manufacturer logo fetched from Clearbit; falls back to a typographic chip. */
export function BrandLogo({ name, domain }: { name: string; domain?: string }) {
  const [errored, setErrored] = useState(false);
  const showLogo = domain && !errored;

  return (
    <div className="card p-6 bg-white flex items-center justify-center min-h-[96px]">
      {showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} logo`}
          onError={() => setErrored(true)}
          className="max-h-10 w-auto object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-sm font-semibold text-ink-800 tracking-tight text-center">
          {name}
        </span>
      )}
    </div>
  );
}
