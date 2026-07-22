"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/industries";
import { ArrowRight, Check } from "lucide-react";

export function IndustryExplorer() {
  const [activeSlug, setActiveSlug] = useState(industries[0].slug);
  const active = industries.find((i) => i.slug === activeSlug) ?? industries[0];

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* Typographic index */}
      <div className="lg:col-span-6">
        <ul>
          {industries.map((ind, i) => {
            const isActive = ind.slug === activeSlug;
            return (
              <li key={ind.slug} className="border-b hairline last:border-b-0">
                <Link
                  href={`/industries/${ind.slug}`}
                  onMouseEnter={() => setActiveSlug(ind.slug)}
                  onFocus={() => setActiveSlug(ind.slug)}
                  className="group flex items-baseline gap-5 py-5 lg:py-6"
                >
                  <span
                    className={`text-sm font-semibold tabular-nums transition-colors ${
                      isActive ? "text-brand-500" : "text-ink-300"
                    }`}
                    style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-all duration-300 ${
                      isActive
                        ? "text-ink-800 lg:translate-x-2"
                        : "text-ink-300 group-hover:text-ink-500"
                    }`}
                  >
                    {ind.name}
                  </span>
                  <ArrowRight
                    className={`ml-auto w-5 h-5 shrink-0 self-center transition-all duration-300 ${
                      isActive ? "text-brand-500 opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/property-managers"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
        >
          Running all of them? Built for property managers <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Sticky preview panel */}
      <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
        <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-ink-100">
          {industries.map((ind) => (
            <Image
              key={ind.slug}
              src={ind.image}
              alt={ind.imageAlt}
              fill
              sizes="45vw"
              className={`object-cover transition-opacity duration-500 ${
                ind.slug === activeSlug ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="eyebrow !text-brand-400">{active.short}</div>
          </div>
        </div>
        <ul className="mt-6 space-y-2.5">
          {active.pressures.map((p) => (
            <li key={p} className="flex items-start gap-3 text-ink-700">
              <Check className="w-4 h-4 mt-1 text-brand-500 shrink-0" strokeWidth={2.5} />
              <span className="text-sm leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
        <Link href={`/industries/${active.slug}`} className="btn btn-primary mt-6">
          Explore {active.name} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
