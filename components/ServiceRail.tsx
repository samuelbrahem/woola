"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getDivision, topLevelServices } from "@/lib/divisions";
import { VISUALS } from "./ServiceShowcase";

/**
 * Division services as a full-bleed horizontal rail: tall image-led cards
 * with scroll-snap, drag, arrows, and a progress line. Each card sells the
 * click; the detail lives on the service page.
 */
export function ServiceRail({ division: divisionSlug }: { division: string }) {
  const division = getDivision(divisionSlug);
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  if (!division) return null;
  const services = topLevelServices(division);

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const nudge = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <div className="mt-12">
      <div className="ml-[calc(50%-50vw)] w-[100vw] overflow-hidden">
        <div
          ref={railRef}
          onScroll={onScroll}
          className="flex gap-5 overflow-x-auto snap-x scrollbar-none pl-[calc(50vw-50%)] pr-6 pb-2"
        >
          {services.map((s) => {
            const Icon = s.icon;
            const visual = VISUALS[s.slug];
            const contain = visual?.contain;
            return (
              <Link
                key={s.slug}
                href={`/${division.slug}/${s.slug}`}
                className={`group relative snap-start shrink-0 w-[280px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border hairline ${
                  contain ? "bg-cream-100" : "bg-ink-900"
                }`}
              >
                {visual && (
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="340px"
                    className={`transition-transform duration-700 group-hover:scale-[1.05] ${
                      contain ? "object-contain p-8 pb-28" : "object-cover"
                    }`}
                  />
                )}
                <div
                  className={`absolute inset-x-0 bottom-0 pt-16 ${
                    contain
                      ? "bg-gradient-to-t from-cream-100 via-cream-100/85 to-transparent"
                      : "bg-gradient-to-t from-ink-900/95 via-ink-900/55 to-transparent"
                  }`}
                >
                  <div className="p-5 md:p-6">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                        contain ? "bg-brand-500/10 text-brand-500" : "bg-cream-50/15 text-cream-50"
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5 w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <h3
                      className={`text-xl md:text-2xl font-semibold tracking-tight leading-tight ${
                        contain ? "text-ink-800" : "text-cream-50"
                      }`}
                    >
                      {s.name}
                    </h3>
                    <p className={`mt-1 text-sm ${contain ? "text-ink-500" : "text-cream-100/80"}`}>
                      {s.short}
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3 ${
                        contain ? "text-brand-500" : "text-cream-50"
                      }`}
                    >
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-6">
        <div className="relative h-0.5 flex-1 bg-ink-100 overflow-hidden rounded-full">
          <div
            className="absolute inset-y-0 left-0 bg-brand-500 rounded-full transition-[width] duration-150"
            style={{ width: `${Math.max(progress * 100, 6)}%` }}
          />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll services back"
            className="w-10 h-10 rounded-full border hairline flex items-center justify-center text-ink-600 hover:bg-ink-800 hover:text-cream-50 hover:border-ink-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll services forward"
            className="w-10 h-10 rounded-full border hairline flex items-center justify-center text-ink-600 hover:bg-ink-800 hover:text-cream-50 hover:border-ink-800 transition"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
