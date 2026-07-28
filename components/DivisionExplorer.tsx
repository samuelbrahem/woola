"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { divisions } from "@/lib/divisions";

/**
 * Division explorer, kept deliberately quiet: an oversized name index on the
 * left, one large crossfading image with a single line and link on the right.
 */
export function DivisionExplorer() {
  const [active, setActive] = useState(0);
  const current = divisions[active];

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-5">
        {divisions.map((d, i) => (
          <button
            key={d.slug}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className="group w-full text-left py-6 border-b hairline last:border-b-0 focus:outline-none"
          >
            <span className="flex items-center justify-between gap-6">
              <span
                className={`text-3xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 ${
                  i === active ? "text-ink-800" : "text-ink-300 group-hover:text-ink-500"
                }`}
              >
                {d.name.replace("Woola ", "")}
              </span>
              <ArrowRight
                className={`w-6 h-6 shrink-0 text-brand-500 transition-all duration-300 ${
                  i === active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
              />
            </span>
            <span
              className={`block text-sm text-ink-500 transition-all duration-300 overflow-hidden ${
                i === active ? "mt-1.5 max-h-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {d.subtitle}
            </span>
          </button>
        ))}
      </div>

      <div className="lg:col-span-7">
        <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden bg-ink-900">
          {divisions.map((d, i) => (
            <Image
              key={d.slug}
              src={d.heroImage}
              alt={d.heroImageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
            <p className="text-cream-50 text-base md:text-lg max-w-xl leading-relaxed">
              {current.description}
            </p>
            <Link
              href={`/${current.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream-50 hover:gap-3 transition-all border-b border-cream-50/40 pb-1 hover:border-cream-50"
            >
              Explore {current.name.replace("Woola ", "")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
