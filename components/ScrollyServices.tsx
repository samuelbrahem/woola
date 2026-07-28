"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getDivision, topLevelServices } from "@/lib/divisions";
import { VISUALS } from "./ServiceShowcase";

/**
 * Pinned scrollytelling as a descent through the building: services ordered
 * by elevation (rooftop to below grade, whole-building programs last), an
 * elevation ruler tracking the ride, vertical-slide transitions, and a stage
 * that darkens as you go below grade. Mobile is a plain stacked list.
 */

const ELEVATION: Record<string, { order: number; level: string }> = {
  // Mechanical: the canonical descent.
  hvac: { order: 1, level: "Rooftop" },
  gas: { order: 2, level: "Mechanical room" },
  plumbing: { order: 3, level: "Risers & suites" },
  refrigeration: { order: 4, level: "Ground floor" },
  drainage: { order: 5, level: "Below grade" },
  "preventative-maintenance": { order: 6, level: "Every level" },
  retrofits: { order: 7, level: "Every level" },
  // Power.
  "maintenance-inspections": { order: 1, level: "Generator room" },
  "c282-testing": { order: 2, level: "Generator room" },
  "transfer-switches": { order: 3, level: "Electrical room" },
  "ups-battery": { order: 4, level: "Server room" },
  "fuel-systems": { order: 5, level: "Tank room · below grade" },
  "repairs-troubleshooting": { order: 6, level: "Wherever it failed" },
  generators: { order: 7, level: "Equipment pad" },
  "emergency-service": { order: 8, level: "Whole building" },
  "integrated-contracting": { order: 9, level: "Site-wide" },
  // Electrical.
  "led-lighting": { order: 1, level: "Ceilings & common areas" },
  "tenant-improvements": { order: 2, level: "Tenant floors" },
  electrical: { order: 3, level: "Electrical room" },
  "panel-upgrades": { order: 4, level: "Electrical room" },
  "low-voltage": { order: 5, level: "Risers & closets" },
  "ev-chargers": { order: 6, level: "Parkade" },
  "infrared-scanning": { order: 7, level: "Every level" },
  // Build.
  envelope: { order: 1, level: "Roof & walls" },
  construction: { order: 2, level: "Tenant floors" },
  "property-services": { order: 3, level: "Common areas" },
  "waterline-repiping": { order: 4, level: "Risers" },
  maintenance: { order: 5, level: "Every level" },
  "turnkey-projects": { order: 6, level: "Site-wide" },
};

/** Prefer real photography over studio renders wherever a photo exists. */
const PHOTO_OVERRIDES: Record<string, { src: string; alt: string }> = {
  hvac: { src: "/field/07-03-2024-crane-26.jpg", alt: "Rooftop unit being crane-lifted onto a roof" },
  gas: { src: "/field/01-08-2025-surrey-mech-10.jpg", alt: "Technician at a boiler's copper and gas piping" },
  plumbing: { src: "/field/01-08-2025-surrey-mech-13.jpg", alt: "Technician working on copper water piping" },
  drainage: { src: "/equipment/plumbing/backflow-preventer.jpg", alt: "Backflow preventer piping" },
  "preventative-maintenance": { src: "/field/11-01-2024-woola-and-dispatch-5.jpg", alt: "Technician servicing a pump motor" },
  retrofits: { src: "/field/08-07-2024-crane-hotel-1.jpg", alt: "Crane over a high-rise during equipment replacement" },
  "repairs-troubleshooting": { src: "/equipment/generators/batteries.jpg", alt: "Generator starting batteries" },
  "emergency-service": { src: "/equipment/generators/load-bank.jpg", alt: "Portable load bank at a generator" },
  "waterline-repiping": { src: "/primers/plumbing.jpg", alt: "Domestic water piping" },
  "panel-upgrades": { src: "/primers/electrical.jpg", alt: "Commercial electrical panel" },
  "infrared-scanning": { src: "/equipment/electrical/vfd.jpg", alt: "Electrical equipment inspection" },
  "tenant-improvements": { src: "/primers/construction.jpg", alt: "Interior fit-out in progress" },
  "turnkey-projects": { src: "/primers/construction.jpg", alt: "Construction project in progress" },
  "integrated-contracting": { src: "/equipment/generators/fuel-tank.jpg", alt: "Generator fuel infrastructure" },
};

function visualFor(slug: string) {
  const photo = PHOTO_OVERRIDES[slug];
  if (photo) return { ...photo, contain: false };
  return VISUALS[slug];
}

/** Stage darkens with depth: night-blue at the rooftop, black below grade. */
function stageColor(fraction: number) {
  const from = [14, 22, 33];
  const to = [4, 4, 4];
  const mix = from.map((f, i) => Math.round(f + (to[i] - f) * fraction));
  return `rgb(${mix[0]} ${mix[1]} ${mix[2]})`;
}

export function ScrollyServices({ division: divisionSlug }: { division: string }) {
  const division = getDivision(divisionSlug);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const count = division ? topLevelServices(division).length : 0;

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el || count === 0) return;
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const y = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      const p = total > 0 ? y / total : 0;
      setIdx(Math.min(count - 1, Math.floor(p * count)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count]);

  if (!division) return null;
  const services = [...topLevelServices(division)].sort(
    (a, b) => (ELEVATION[a.slug]?.order ?? 99) - (ELEVATION[b.slug]?.order ?? 99)
  );
  const depth = services.length > 1 ? idx / (services.length - 1) : 0;

  const jump = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const vh = window.innerHeight;
    const top = el.offsetTop + (el.offsetHeight - vh) * ((i + 0.5) / services.length);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: pinned descent */}
      <div
        ref={wrapRef}
        className="relative hidden lg:block"
        style={{ height: `${services.length * 80 + 20}vh` }}
      >
        <div
          className="sticky top-0 h-screen text-cream-50 overflow-hidden transition-colors duration-700"
          style={{ backgroundColor: stageColor(depth) }}
        >
          <div className="grain" />
          <div className="container-x h-full grid grid-cols-12 gap-10 items-center relative">
            <div className="col-span-4 relative h-full pr-6">
              {services.map((s, i) => (
                <div
                  key={s.slug}
                  aria-hidden={i !== idx}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === idx
                      ? "opacity-100 translate-y-0"
                      : i < idx
                        ? "opacity-0 -translate-y-6 pointer-events-none"
                        : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <div className="eyebrow !text-[color:var(--brand-on-dark)]">
                    {ELEVATION[s.slug]?.level ?? "On site"}
                  </div>
                  <h3 className="mt-3 text-4xl xl:text-5xl font-semibold tracking-tight text-cream-50 leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-cream-100/60">{s.short}</p>
                  <p className="mt-5 text-base text-cream-100/85 leading-relaxed max-w-md">
                    {s.description}
                  </p>
                  <div className="mt-7">
                    <Link href={`/${division.slug}/${s.slug}`} className="btn btn-on-dark">
                      Explore service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-6 relative h-[72vh] self-center overflow-hidden rounded-2xl border border-ink-700">
              {services.map((s, i) => {
                const v = visualFor(s.slug);
                if (!v) return null;
                return (
                  <div
                    key={s.slug}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      v.contain ? "bg-cream-100" : "bg-ink-800"
                    } ${
                      i === idx
                        ? "opacity-100 translate-y-0"
                        : i < idx
                          ? "opacity-0 -translate-y-[5%]"
                          : "opacity-0 translate-y-[5%]"
                    }`}
                  >
                    <Image
                      src={v.src}
                      alt={v.alt}
                      fill
                      sizes="55vw"
                      className={v.contain ? "object-contain p-12" : "object-cover"}
                    />
                  </div>
                );
              })}
            </div>

            {/* Elevation ruler */}
            <div className="col-span-2 h-[64vh] self-center relative pl-6">
              <div className="absolute left-6 inset-y-0 w-px bg-cream-50/20" />
              <div
                className="absolute -left-[3px] ml-6 w-[7px] h-[7px] rounded-full bg-[color:var(--brand-on-dark)] transition-[top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ top: `calc(${depth * 100}% - 3px)` }}
              />
              <div className="h-full flex flex-col justify-between">
                {services.map((s, i) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => jump(i)}
                    className={`group flex items-center gap-3 text-left transition-colors ${
                      i === idx ? "text-cream-50" : "text-cream-50/40 hover:text-cream-50/75"
                    }`}
                  >
                    <span
                      className={`h-px w-3 shrink-0 transition-colors ${
                        i === idx ? "bg-[color:var(--brand-on-dark)]" : "bg-cream-50/30"
                      }`}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-wider truncate">
                      {ELEVATION[s.slug]?.level ?? s.short}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked, no pinning */}
      <div className="lg:hidden bg-ink-900 text-cream-50">
        <div className="container-x section space-y-10">
          <div className="eyebrow !text-[color:var(--brand-on-dark)]">What we do</div>
          {services.map((s) => {
            const v = visualFor(s.slug);
            return (
              <div key={s.slug} data-reveal>
                {v && (
                  <div
                    className={`relative aspect-[16/9] rounded-xl overflow-hidden border border-ink-700 ${
                      v.contain ? "bg-cream-100" : "bg-ink-800"
                    }`}
                  >
                    <Image
                      src={v.src}
                      alt={v.alt}
                      fill
                      sizes="100vw"
                      className={v.contain ? "object-contain p-6" : "object-cover"}
                    />
                  </div>
                )}
                <div className="mt-4 font-mono text-xs uppercase tracking-wider text-[color:var(--brand-on-dark)]">
                  {ELEVATION[s.slug]?.level ?? "On site"}
                </div>
                <h3 className="mt-1.5 text-2xl font-semibold text-cream-50">{s.name}</h3>
                <p className="mt-2 text-sm text-cream-100/80 leading-relaxed">{s.description}</p>
                <Link
                  href={`/${division.slug}/${s.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-on-dark)]"
                >
                  Explore service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
