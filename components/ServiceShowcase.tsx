"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Plus } from "lucide-react";
import { getDivision, topLevelServices } from "@/lib/divisions";

type Visual = { src: string; alt: string; contain?: boolean };

/** Every service gets its own dedicated visual; no shared fallbacks. */
export const VISUALS: Record<string, Visual> = {
  hvac: { src: "/primers/hvac.jpg", alt: "Ductless mini-split indoor head" },
  plumbing: { src: "/primers/plumbing.jpg", alt: "Wall-hung tankless water heaters" },
  drainage: { src: "/equipment-renders/drain-auger.webp", alt: "Drain cleaning machine", contain: true },
  gas: { src: "/primers/gas.jpg", alt: "Condensing gas boiler" },
  refrigeration: { src: "/primers/refrigeration.jpg", alt: "Walk-in cooler interior" },
  "preventative-maintenance": { src: "/equipment-renders/filter-service.webp", alt: "Furnace filter service", contain: true },
  retrofits: { src: "/equipment-renders/rooftop-unit.webp", alt: "Rooftop HVAC unit", contain: true },
  "maintenance-inspections": { src: "/primers/generators.jpg", alt: "Standby generator enclosure" },
  "repairs-troubleshooting": { src: "/equipment-renders/service-gauges.webp", alt: "Service gauges and multimeter", contain: true },
  generators: { src: "/equipment-renders/generator.webp", alt: "Standby generator", contain: true },
  "c282-testing": { src: "/primers/c282-testing.jpg", alt: "Load bank testing" },
  "transfer-switches": { src: "/primers/transfer-switches.jpg", alt: "Automatic transfer switch" },
  "fuel-systems": { src: "/primers/fuel-systems.jpg", alt: "Diesel storage tank" },
  "ups-battery": { src: "/primers/ups-battery.jpg", alt: "Rack-mounted UPS" },
  "emergency-service": { src: "/equipment-renders/generator.webp", alt: "Standby generator", contain: true },
  "integrated-contracting": { src: "/equipment-renders/transfer-switch.webp", alt: "Transfer switch cabinet", contain: true },
  electrical: { src: "/primers/electrical.jpg", alt: "Commercial electrical panel" },
  "ev-chargers": { src: "/primers/ev-chargers.jpg", alt: "Level 2 EV charger" },
  "led-lighting": { src: "/primers/led-lighting.jpg", alt: "LED troffer lighting" },
  "low-voltage": { src: "/primers/low-voltage.jpg", alt: "Structured cabling rack" },
  "tenant-improvements": { src: "/primers/construction.jpg", alt: "Interior fit-out in progress" },
  "panel-upgrades": { src: "/equipment-renders/electrical-panel.webp", alt: "Electrical panelboard", contain: true },
  "infrared-scanning": { src: "/equipment/electrical/vfd.jpg", alt: "Electrical equipment under inspection" },
  maintenance: { src: "/primers/maintenance.jpg", alt: "Building maintenance work" },
  envelope: { src: "/primers/envelope.jpg", alt: "Flat roof membrane" },
  "waterline-repiping": { src: "/equipment-renders/sink-plumbing.webp", alt: "Domestic water piping", contain: true },
  construction: { src: "/primers/construction.jpg", alt: "Interior construction" },
  "property-services": { src: "/primers/property-services.jpg", alt: "Exterior building work" },
  "turnkey-projects": { src: "/equipment-renders/loading-dock.webp", alt: "Commercial building loading dock", contain: true },
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
