"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Plus } from "lucide-react";
import { getDivision, topLevelServices } from "@/lib/divisions";

type Visual = { src: string; alt: string; contain?: boolean };

/** Every service gets its own dedicated visual; no shared fallbacks. */
export const VISUALS: Record<string, { src: string; alt: string; contain?: boolean }> = {
  "hvac": { src: "/field/07-03-2024-crane-26.jpg", alt: "Rooftop unit being crane-lifted onto a roof" },
  "heating-systems": { src: "/field/07-28-2026-mech-6.jpg", alt: "Woola Mechanical technician servicing a boiler-room pump and controller" },
  "cooling-systems": { src: "/field/07-28-2026-mech-1.jpg", alt: "Insulated chilled-water piping and pumps in a central plant room" },
  "ventilation-iaq": { src: "/equipment-renders/hrv.webp", alt: "Heat recovery ventilator", contain: true },
  "plumbing": { src: "/field/01-08-2025-surrey-mech-13.jpg", alt: "Technician working on copper water piping" },
  "drainage": { src: "/equipment-renders/drain-auger.webp", alt: "Drain cleaning machine", contain: true },
  "gas": { src: "/field/01-08-2025-surrey-mech-10.jpg", alt: "Technician at a boiler's copper and gas piping" },
  "refrigeration": { src: "/field/02-24-2025-dan-new-west-9.jpg", alt: "Overhead grooved glycol piping in an industrial facility" },
  "preventative-maintenance": { src: "/field/11-01-2024-woola-and-dispatch-5.jpg", alt: "Technician servicing a pump motor" },
  "retrofits": { src: "/field/08-07-2024-crane-hotel-1.jpg", alt: "Crane over a high-rise during equipment replacement" },
  "maintenance-inspections": { src: "/field/07-28-2026-power-12.jpg", alt: "Woola Power technician checking generator starting batteries" },
  "repairs-troubleshooting": { src: "/field/07-28-2026-power-2.jpg", alt: "Woola Power technician working on a standby generator engine" },
  "generators": { src: "/field/07-28-2026-power-1.jpg", alt: "Commercial Cummins standby generator in a generator room" },
  "c282-testing": { src: "/field/07-28-2026-power-9.jpg", alt: "Woola Power technician testing a standby generator" },
  "transfer-switches": { src: "/field/07-28-2026-electrical-10.jpg", alt: "Woola technician testing wiring inside an automatic transfer switch" },
  "fuel-systems": { src: "/field/07-28-2026-power-5.jpg", alt: "Woola Power technician beside a standby generator" },
  "ups-battery": { src: "/field/07-28-2026-power-11.jpg", alt: "Generator battery bank under inspection" },
  "emergency-service": { src: "/field/07-28-2026-power-7.jpg", alt: "Woola Power technician arriving at a generator room with tools" },
  "integrated-contracting": { src: "/field/07-28-2026-power-6.jpg", alt: "Woola Power technician entering a mechanical room" },
  "data-centres": { src: "/field/07-28-2026-power-10.jpg", alt: "Woola Power technician servicing a generator battery system" },
  "electrical": { src: "/field/07-23-2026-electrical-1.jpg", alt: "Woola electrician at a commercial distribution panel" },
  "ev-chargers": { src: "/equipment-renders/ev-charger.webp", alt: "Level 2 EV charging pedestal", contain: true },
  "led-lighting": { src: "/equipment-renders/led-lighting.webp", alt: "LED high-bay light fixture", contain: true },
  "low-voltage": { src: "/equipment-renders/controls.webp", alt: "Building controls panel", contain: true },
  "tenant-improvements": { src: "/field/08-05-2026-build-4.jpg", alt: "Ceiling work in a commercial corridor" },
  "panel-upgrades": { src: "/field/07-28-2026-electrical-9.jpg", alt: "Woola electrician at a building panelboard" },
  "infrared-scanning": { src: "/field/07-23-2026-electrical-3.jpg", alt: "Woola electrician reviewing a thermal camera reading in an electrical room" },
  "vault-cleaning": { src: "/field/07-28-2026-electrical-8.jpg", alt: "Woola electrician opening a switchgear section" },
  "residential-electrical": { src: "/field/07-23-2026-electrical-4.jpg", alt: "Woola electrician at a commercial meter bank" },
  "restoration": { src: "/field/07-23-2026-electrical-7.jpg", alt: "Woola electrician working at a meter base" },
  "maintenance": { src: "/field/08-12-2026-build-8.jpg", alt: "Woola Build crew at a wood-frame residential building" },
  "envelope": { src: "/field/08-12-2026-build-5.jpg", alt: "Woola Build crew member on a townhome roof" },
  "construction": { src: "/field/08-10-2026-build-2.jpg", alt: "Corridor ceiling opened for repiping and restoration" },
  "property-services": { src: "/field/08-12-2026-build-6.jpg", alt: "Crane lifting materials over a residential site" },
  "waterline-repiping": { src: "/field/08-10-2026-build-1.jpg", alt: "Residential corridor with the ceiling opened for waterline replacement" },
  "turnkey-projects": { src: "/field/08-12-2026-build-7.jpg", alt: "Crane lift during a Woola Build exterior project" },
};

/**
 * Accordion with a sticky visual: rows unfold on the left while the panel on
 * the right crossfades to the open service's own photo or render.
 */
export function ServiceShowcase({ division: divisionSlug }: { division: string }) {
  const division = getDivision(divisionSlug);
  const [open, setOpen] = useState(0);
  if (!division) return null;
  const services = topLevelServices(division);
  const activeVisual = open >= 0 ? VISUALS[services[open]?.slug] : undefined;

  return (
    <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-7 border-t hairline">
        {services.map((s, i) => {
          const isOpen = i === open;
          const Icon = s.icon;
          const visual = VISUALS[s.slug];
          return (
            <div key={s.slug} className="border-b hairline">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full py-5 flex items-center justify-between gap-6 text-left group focus:outline-none"
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
                <Plus
                  className={`w-5 h-5 shrink-0 text-brand-500 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-7 md:pl-14">
                    {visual && (
                      <div
                        className={`lg:hidden relative aspect-[16/9] rounded-xl overflow-hidden mb-5 ${
                          visual.contain ? "bg-cream-100" : "bg-ink-100"
                        }`}
                      >
                        <Image
                          src={visual.src}
                          alt={visual.alt}
                          fill
                          sizes="100vw"
                          className={visual.contain ? "object-contain p-5" : "object-cover"}
                        />
                      </div>
                    )}
                    <p className="text-ink-600 leading-relaxed max-w-xl">{s.description}</p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" strokeWidth={2} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${division.slug}/${s.slug}`}
                      className="btn btn-primary mt-6"
                      tabIndex={isOpen ? 0 : -1}
                    >
                      Explore {s.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
        <div
          className={`relative aspect-[4/3] rounded-2xl overflow-hidden border hairline ${
            activeVisual?.contain ? "bg-cream-100" : "bg-ink-100"
          }`}
        >
          {services.map((s, i) => {
            const v = VISUALS[s.slug];
            if (!v) return null;
            return (
              <Image
                key={s.slug}
                src={v.src}
                alt={v.alt}
                fill
                sizes="40vw"
                className={`transition-opacity duration-500 ${
                  v.contain ? "object-contain p-8" : "object-cover"
                } ${i === open ? "opacity-100" : "opacity-0"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
