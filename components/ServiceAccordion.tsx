"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { getDivision, topLevelServices } from "@/lib/divisions";

/**
 * Division services as an editorial accordion: full-width rows, one open at a
 * time, smooth unfold revealing scope, highlights, and the service link.
 * Replaces both the image card grid and the systems-map experiment.
 */
export function ServiceAccordion({ division: divisionSlug }: { division: string }) {
  const division = getDivision(divisionSlug);
  const [open, setOpen] = useState(0);
  if (!division) return null;
  const services = topLevelServices(division);

  return (
    <div className="mt-12 border-t hairline">
      {services.map((s, i) => {
        const isOpen = i === open;
        const Icon = s.icon;
        return (
          <div key={s.slug} className="border-b hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full py-6 flex items-center justify-between gap-6 text-left group focus:outline-none"
            >
              <span className="flex items-center gap-4 min-w-0">
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-brand-500 text-cream-50" : "bg-brand-500/10 text-brand-500"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.6} />
                </span>
                <span
                  className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-ink-800" : "text-ink-500 group-hover:text-ink-800"
                  }`}
                >
                  {s.name}
                </span>
              </span>
              <span className="flex items-center gap-5 shrink-0">
                <span className="hidden md:block text-sm text-ink-400">{s.short}</span>
                <Plus
                  className={`w-5 h-5 text-brand-500 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-8 md:pl-14 grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5">
                    <p className="text-ink-600 leading-relaxed">{s.description}</p>
                    <Link
                      href={`/${division.slug}/${s.slug}`}
                      className="btn btn-primary mt-6"
                      tabIndex={isOpen ? 0 : -1}
                    >
                      Explore {s.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-2.5 content-start">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" strokeWidth={2} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
