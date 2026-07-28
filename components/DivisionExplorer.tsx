"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { divisions, featuredServices } from "@/lib/divisions";

/**
 * PCL-style division explorer: oversized division index on the left,
 * crossfading visual panel with pitch + CTA on the right.
 */
export function DivisionExplorer() {
  const [active, setActive] = useState(0);
  const current = divisions[active];

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-5">
        {divisions.map((d, i) => (
          <button
            key={d.slug}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className="block w-full text-left py-5 border-b hairline group focus:outline-none"
            aria-pressed={i === active}
          >
            <span className="flex items-baseline justify-between gap-4">
              <span
                className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight transition-colors duration-300 ${
                  i === active ? "text-ink-800" : "text-ink-300 group-hover:text-ink-500"
                }`}
              >
                {d.name.replace("Woola ", "")}
              </span>
              <ArrowRight
                className={`w-6 h-6 shrink-0 transition-all duration-300 ${
                  i === active ? "text-brand-500 translate-x-0 opacity-100" : "text-ink-300 -translate-x-2 opacity-0"
                }`}
              />
            </span>
            <span
              className={`block text-sm mt-1 transition-colors duration-300 ${
                i === active ? "text-ink-500" : "text-ink-300"
              }`}
            >
              {d.subtitle}
            </span>
          </button>
        ))}
      </div>

      <div className="lg:col-span-7">
        <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-ink-900">
          {divisions.map((d, i) => (
            <Image
              key={d.slug}
              src={d.heroImage}
              alt={d.heroImageAlt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-9 text-cream-50">
            <p className="max-w-xl text-sm md:text-base text-cream-100/90 leading-relaxed">
              {current.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredServices(current).slice(0, 4).map((s) => (
                <span
                  key={s.slug}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-cream-50/25 text-cream-100/90"
                >
                  {s.name}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link href={`/${current.slug}`} className="btn btn-brand">
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
