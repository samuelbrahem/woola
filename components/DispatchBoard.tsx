"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDivision, topLevelServices } from "@/lib/divisions";

/**
 * Division services as a dispatch board: every service line is a work-order
 * row with a representative call, and a status chip that cycles through the
 * life of a ticket. Services website, services metaphor.
 */

const TYPICAL_CALLS: Record<string, string> = {
  hvac: "RTU low airflow · office tower",
  plumbing: "Riser leak · strata high-rise",
  drainage: "Parkade drain backup",
  gas: "Boiler gas train fault",
  refrigeration: "Walk-in running warm · grocery",
  "preventative-maintenance": "Quarterly PM round · portfolio",
  retrofits: "Boiler plant replacement scope",
  "maintenance-inspections": "Annual inspection · strata tower",
  "repairs-troubleshooting": "No-start after utility outage",
  generators: "Generator replacement scope",
  "c282-testing": "C282 load bank test",
  "transfer-switches": "ATS exercise fault",
  "fuel-systems": "Fuel polish · day tank",
  "ups-battery": "Battery string end-of-life",
  "emergency-service": "Building on standby power",
  "integrated-contracting": "Genset and switchgear project",
  electrical: "Common-area circuit fault",
  "tenant-improvements": "Floor 9 fit-out rough-in",
  "led-lighting": "Parkade LED retrofit",
  "ev-chargers": "34-stall EV-Ready build",
  "panel-upgrades": "800A service upgrade",
  "infrared-scanning": "Annual IR scan · switchgear",
  "low-voltage": "Access control cabling",
  maintenance: "Quarterly building PM",
  envelope: "Sealant renewal · elevation 2",
  "waterline-repiping": "Riser repipe · phase 3",
  construction: "Amenity room rebuild",
  "property-services": "Door and hardware swap-outs",
  "turnkey-projects": "Multi-trade capital project",
};

const STATUSES = [
  { label: "Scheduled", cls: "border-ink-500 text-ink-300" },
  { label: "En route", cls: "border-amber-400/60 text-amber-300" },
  { label: "On site", cls: "border-[color:var(--brand-on-dark)] text-[color:var(--brand-on-dark)]" },
  { label: "Complete", cls: "border-green-400/60 text-green-300" },
] as const;

function Clock() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat("en-CA", {
          timeZone: "America/Vancouver",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return <span className="tabular-nums">{now ?? "--:--:--"} PT</span>;
}

export function DispatchBoard({ division: divisionSlug }: { division: string }) {
  const division = getDivision(divisionSlug);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setTick((v) => v + 1), 3500);
    return () => clearInterval(t);
  }, []);
  if (!division) return null;
  const services = topLevelServices(division);

  return (
    <div className="mt-12 rounded-2xl overflow-hidden border border-ink-600 bg-ink-900 text-cream-50">
      <div className="px-5 md:px-7 h-14 flex items-center justify-between gap-4 border-b border-ink-700">
        <div className="flex items-center gap-3 min-w-0">
          <span className="relative flex w-2.5 h-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-cream-100/80 truncate">
            {division.name} · Dispatch board
          </span>
        </div>
        <div className="font-mono text-xs text-cream-100/60 shrink-0">
          <Clock />
        </div>
      </div>

      <div className="hidden md:grid grid-cols-[110px_minmax(0,1.1fr)_minmax(0,1.2fr)_120px_44px] gap-4 px-5 md:px-7 py-2.5 border-b border-ink-700 font-mono text-[10px] uppercase tracking-widest text-ink-400">
        <span>Ticket</span>
        <span>Service line</span>
        <span>Typical call</span>
        <span>Status</span>
        <span />
      </div>

      <div>
        {services.map((s, i) => {
          const status = STATUSES[(i * 2 + 1 + tick) % STATUSES.length];
          const justChanged = (i * 2 + 1 + tick) % STATUSES.length !== (i * 2 + tick) % STATUSES.length;
          const Icon = s.icon;
          return (
            <Link
              key={s.slug}
              href={`/${division.slug}/${s.slug}`}
              className="group grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[110px_minmax(0,1.1fr)_minmax(0,1.2fr)_120px_44px] gap-x-4 gap-y-1 items-center px-5 md:px-7 py-4 border-b border-ink-700/70 last:border-b-0 hover:bg-ink-800/70 transition-colors"
            >
              <span className="hidden md:block font-mono text-xs text-ink-400 tabular-nums">
                WO-{String(4310 + i * 7)}
              </span>
              <span className="flex items-center gap-3 min-w-0">
                <span className="w-8 h-8 rounded-md bg-cream-50/10 text-[color:var(--brand-on-dark)] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" strokeWidth={1.6} />
                </span>
                <span className="min-w-0">
                  <span className="block text-base md:text-lg font-semibold text-cream-50 group-hover:text-[color:var(--brand-on-dark)] transition-colors truncate">
                    {s.name}
                  </span>
                  <span className="md:hidden block text-xs text-cream-100/50 truncate">
                    {TYPICAL_CALLS[s.slug] ?? s.short}
                  </span>
                </span>
              </span>
              <span className="hidden md:block text-sm text-cream-100/60 truncate">
                {TYPICAL_CALLS[s.slug] ?? s.short}
              </span>
              <span className="justify-self-end md:justify-self-start">
                <span
                  key={status.label}
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${status.cls} ${
                    justChanged ? "animate-[intro-in_0.4s_ease-out_both]" : ""
                  }`}
                >
                  {status.label}
                </span>
              </span>
              <ArrowRight className="hidden md:block w-4 h-4 text-ink-500 group-hover:text-[color:var(--brand-on-dark)] group-hover:translate-x-1 transition-all justify-self-end" />
            </Link>
          );
        })}
      </div>

      <div className="px-5 md:px-7 py-3 border-t border-ink-700 flex items-center justify-between gap-4 text-xs text-ink-400">
        <span className="font-mono">
          Representative board. Contracted clients see their live tickets in the portal.
        </span>
        <Link href="/portal" className="shrink-0 font-medium text-[color:var(--brand-on-dark)] hover:underline">
          Client portal →
        </Link>
      </div>
    </div>
  );
}
