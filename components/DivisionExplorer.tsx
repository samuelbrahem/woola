"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { divisions, featuredServices } from "@/lib/divisions";
import { DivisionWordmark } from "./DivisionWordmark";

/**
 * PCL-style division explorer: wordmark index on the left, large crossfading
 * preview with the division's white wordmark, pitch, and CTA on the right.
 */
export function DivisionExplorer() {
  const [active, setActive] = useState(0);
  const current = divisions[active];

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      <div className="lg:col-span-4 flex flex-col justify-center">
        {divisions.map((d, i) => (
          <button
            key={d.slug}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`w-full text-left py-5 px-4 -mx-4 rounded-xl border-b hairline last:border-b-0 group focus:outline-none transition-colors duration-300 ${
              i === active ? "bg-cream-100" : "hover:bg-cream-100/50"
            }`}
            aria-pressed={i === active}
          >
            <span className="flex items-center justify-between gap-4">
              <span
                className={`transition-all duration-300 ${
                  i === active
                    ? "opacity-100"
                    : "opacity-35 grayscale group-hover:opacity-60"
                }`}
              >
                <DivisionWordmark division={d} size="sm" />
              </span>
              <ArrowRight
                className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                  i === active
                    ? "text-brand-500 translate-x-0 opacity-100"
                    : "text-ink-300 -translate-x-2 opacity-0"
                }`}
              />
            </span>
            <span
              className={`block text-xs mt-2 transition-colors duration-300 ${
                i === active ? "text-ink-500" : "text-ink-300"
              }`}
            >
              {d.subtitle}
            </span>
          </button>
        ))}
      </div>

      <div className="lg:col-span-8">
        <div className="relative rounded-2xl overflow-hidden bg-ink-900 aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[520px]">
          {divisions.map((d, i) => (
            <Image
              key={d.slug}
              src={d.heroImage}
              alt={d.heroImageAlt}
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/40 to-ink-900/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-cream-50">
            <DivisionWordmark division={current} size="md" invert />
            <p className="mt-4 max-w-2xl text-base md:text-lg text-cream-100/90 leading-relaxed">
              {current.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featuredServices(current).slice(0, 4).map((s) => (
                <span
                  key={s.slug}
                  className="text-xs px-3 py-1.5 rounded-full border border-cream-50/25 bg-ink-900/30 backdrop-blur-sm text-cream-100/90"
                >
                  {s.name}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link href={`/${current.slug}`} className="btn btn-brand text-base">
                Explore {current.name.replace("Woola ", "")} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${current.contactPhone}`}
                className="inline-flex items-center gap-2 text-sm text-cream-100/85 hover:text-cream-50"
              >
                <Phone className="w-4 h-4" /> {current.contactPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
