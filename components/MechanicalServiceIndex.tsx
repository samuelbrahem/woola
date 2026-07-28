"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDivision, topLevelServices } from "@/lib/divisions";

const mechanicalData = getDivision("mechanical");

if (!mechanicalData) {
  throw new Error("Mechanical division data is missing");
}

const mechanical = mechanicalData;
const services = topLevelServices(mechanical);

const serviceVisuals: Record<
  string,
  { src: string; alt: string; fit?: "cover" | "contain" }
> = {
  hvac: {
    src: "/primers/hvac.jpg",
    alt: "Wall-mounted indoor head of a ductless mini-split heat pump",
  },
  plumbing: {
    src: "/primers/plumbing.jpg",
    alt: "Wall-mounted tankless gas water heaters",
  },
  drainage: {
    src: "/equipment-renders/drain-auger.webp",
    alt: "Professional drain cleaning machine",
    fit: "contain",
  },
  gas: {
    src: "/primers/gas.jpg",
    alt: "Wall-hung condensing gas boiler",
  },
  refrigeration: {
    src: "/primers/refrigeration.jpg",
    alt: "Interior of a commercial walk-in cooler",
  },
  "preventative-maintenance": {
    src: "/equipment-renders/filter-service.webp",
    alt: "HVAC filter inspection and service",
    fit: "contain",
  },
  retrofits: {
    src: "/equipment-renders/rooftop-unit.webp",
    alt: "Commercial rooftop HVAC unit",
    fit: "contain",
  },
};

const serviceNodes: Record<
  string,
  { x: string; y: string; label: string }
> = {
  hvac: { x: "43%", y: "16%", label: "HVAC" },
  plumbing: { x: "55%", y: "49%", label: "Plumbing" },
  drainage: { x: "42%", y: "79%", label: "Drainage" },
  gas: { x: "68%", y: "83%", label: "Gas" },
  refrigeration: { x: "76%", y: "57%", label: "Refrigeration" },
  "preventative-maintenance": {
    x: "27%",
    y: "58%",
    label: "Maintenance",
  },
  retrofits: { x: "70%", y: "27%", label: "Capital projects" },
};

export function MechanicalServiceIndex() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const activeIndex = Math.max(
    services.findIndex((service) => service.slug === activeSlug),
    0,
  );
  const active = services[activeIndex];
  const ActiveIcon = active.icon;
  const visual = serviceVisuals[active.slug] ?? {
    src: mechanical.heroImage,
    alt: active.name,
  };

  const selectService = (slug: string) => setActiveSlug(slug);

  return (
    <div className="mt-10 md:mt-12">
      <div className="overflow-hidden border hairline bg-ink-900">
        <div className="min-h-14 px-4 md:px-6 flex items-center justify-between gap-4 border-b border-ink-700 text-cream-50">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[color:var(--brand-on-dark)]" />
            <span className="font-mono text-xs uppercase">
              Woola Mechanical / Systems map
            </span>
          </div>
          <span className="hidden sm:block font-mono text-xs text-ink-300">
            07 connected service lines
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(22rem,0.7fr)] lg:items-start">
          <div
            className="relative h-[27rem] md:h-[36rem] lg:h-[51rem] overflow-hidden bg-[#e9e5dc] border-b lg:border-b-0 lg:border-r border-ink-700"
            role="tablist"
            aria-label="Mechanical systems map"
          >
            <div className="absolute inset-x-6 top-1/2 border-t border-ink-800/10" />
            <div className="absolute inset-y-6 left-1/2 border-l border-ink-800/10" />
            <div className="absolute inset-5 border border-ink-800/10" />

            <Image
              src="/xray/strata.webp"
              alt="Cutaway commercial building showing rooftop HVAC, piping, drainage, and mechanical equipment"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-contain p-5 md:p-8 lg:p-10"
            />

            <div className="absolute left-4 top-4 md:left-7 md:top-7 bg-cream-50/95 border border-ink-800/15 px-3 py-2">
              <div className="font-mono text-[10px] uppercase text-ink-500">
                Asset view
              </div>
              <div className="mt-0.5 text-xs font-semibold text-ink-800">
                Commercial building / 01
              </div>
            </div>

            {services.map((service, index) => {
              const node = serviceNodes[service.slug];
              const isActive = service.slug === active.slug;

              return (
                <button
                  key={service.slug}
                  id={`system-node-${service.slug}`}
                  type="button"
                  role="tab"
                  aria-label={service.name}
                  aria-selected={isActive}
                  aria-controls="mechanical-service-panel"
                  title={service.name}
                  onClick={() => selectService(service.slug)}
                  onFocus={() => selectService(service.slug)}
                  style={{ left: node.x, top: node.y }}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center min-h-10 border shadow-soft transition-colors ${
                    isActive
                      ? "bg-brand-500 border-brand-500 text-white"
                      : "bg-ink-900/95 border-ink-600 text-cream-50 hover:border-brand-500"
                  }`}
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center font-mono text-[11px] shrink-0 ${
                      isActive
                        ? "bg-white text-brand-500"
                        : "bg-ink-800 text-[color:var(--brand-on-dark)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden md:block px-3 text-xs font-semibold whitespace-nowrap">
                    {node.label}
                  </span>
                </button>
              );
            })}

            <div className="absolute left-4 bottom-4 md:left-7 md:bottom-7 flex items-center gap-3 bg-cream-50/95 border border-ink-800/15 px-3 py-2 text-ink-800">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inset-0 bg-brand-500 opacity-30" />
                <span className="relative m-0.5 w-1.5 h-1.5 bg-brand-500" />
              </span>
              <span className="font-mono text-[10px] uppercase">
                Active scope / {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          <article
            id="mechanical-service-panel"
            role="tabpanel"
            aria-label={active.name}
            className="min-w-0 bg-white flex flex-col lg:h-[51rem]"
          >
            <div
              className="lg:hidden overflow-x-auto border-b hairline"
              role="tablist"
              aria-label="Mechanical service names"
            >
              <div className="flex min-w-max">
                {services.map((service, index) => (
                  <button
                    key={service.slug}
                    type="button"
                    role="tab"
                    aria-label={service.name}
                    aria-selected={service.slug === active.slug}
                    aria-controls="mechanical-service-panel"
                    onClick={() => selectService(service.slug)}
                    className={`min-h-14 px-4 border-b-2 text-sm font-medium transition-colors ${
                      service.slug === active.slug
                        ? "border-brand-500 text-ink-800 bg-cream-100"
                        : "border-transparent text-ink-500 hover:text-ink-800"
                    }`}
                  >
                    <span className="mr-2 font-mono text-[10px] text-brand-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`relative hidden lg:block aspect-[16/9] overflow-hidden border-b hairline ${
                visual.fit === "contain" ? "bg-cream-100" : "bg-ink-100"
              }`}
            >
              <Image
                key={visual.src}
                src={visual.src}
                alt={visual.alt}
                fill
                sizes="35vw"
                className={
                  visual.fit === "contain"
                    ? "object-contain p-8"
                    : "object-cover"
                }
              />
              <div className="absolute left-0 bottom-0 bg-ink-900 px-4 py-2 text-[11px] font-mono text-cream-50">
                Scope {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-9 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-ink-800 text-[color:var(--brand-on-dark)]">
                    <ActiveIcon className="w-5 h-5" strokeWidth={1.7} />
                  </span>
                  <span className="font-mono text-[11px] uppercase text-brand-500">
                    Active field scope
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-400">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(services.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-2xl md:text-3xl font-semibold text-ink-800">
                {active.name}
              </h3>
              <p className="mt-4 text-sm text-ink-600 leading-relaxed">
                {active.description}
              </p>

              <div className="mt-6 border-t hairline">
                {active.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2.5 py-3 border-b hairline text-sm text-ink-700"
                  >
                    <span className="font-mono text-[10px] text-brand-500 pt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <Link
                  href={`/mechanical/${active.slug}`}
                  className="btn btn-primary w-full justify-between"
                >
                  View {active.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
