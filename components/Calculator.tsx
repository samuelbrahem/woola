"use client";

import { useMemo, useState } from "react";
import { estimate, formatCurrency, type SystemType, type HomeType } from "@/lib/calculator";
import { Info, Calculator as CalcIcon, ChevronRight } from "lucide-react";

const systemOptions: { value: SystemType; label: string; sub: string }[] = [
  { value: "furnace", label: "Furnace only", sub: "Replace gas furnace" },
  { value: "ac", label: "AC only", sub: "Add or replace AC" },
  { value: "furnace_ac", label: "Furnace + AC", sub: "Paired replacement" },
  { value: "heat_pump", label: "Heat pump", sub: "Electric, all-season" },
  { value: "heat_pump_furnace", label: "Heat pump + furnace", sub: "Dual-fuel hybrid" },
  { value: "tankless", label: "Tankless water", sub: "On-demand DHW" },
  { value: "tank", label: "Hot water tank", sub: "Standard DHW replacement" },
];

export function Calculator({ compact = false }: { compact?: boolean }) {
  const [sqft, setSqft] = useState(2000);
  const [system, setSystem] = useState<SystemType>("heat_pump");
  const [homeType, setHomeType] = useState<HomeType>("detached");
  const [ductwork, setDuctwork] = useState<"existing" | "new" | "ductless">("existing");
  const [rebates, setRebates] = useState(true);

  const result = useMemo(
    () => estimate({ sqft, system, homeType, ductwork, rebatesEligible: rebates }),
    [sqft, system, homeType, ductwork, rebates]
  );

  return (
    <div className={compact ? "" : "grid lg:grid-cols-5 gap-8"}>
      <div className={compact ? "card p-6" : "lg:col-span-3 card p-8"}>
        <div className="flex items-center gap-2 mb-2">
          <CalcIcon className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
          <span className="eyebrow">Mechanical Rough Estimate</span>
        </div>
        <h3 className="text-2xl font-semibold mb-2">
          Tell us about the home.
        </h3>
        <p className="text-sm text-ink-500 mb-6">
          Results are pre-site-visit estimates based on equipment tier and BC averages — they aren't quotes.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-2">
              Conditioned square footage
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={600}
                max={5500}
                step={50}
                value={sqft}
                onChange={(e) => setSqft(parseInt(e.target.value))}
                className="flex-1 accent-ink-800"
              />
              <div className="w-28 text-right font-semibold text-lg tabular-nums">
                {sqft.toLocaleString()} <span className="text-xs font-medium text-ink-400">sqft</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-700 mb-2">System type</label>
            <div className="grid sm:grid-cols-2 gap-2">
              {systemOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSystem(opt.value)}
                  className={`text-left p-3 rounded-lg border transition-all ${
                    system === opt.value
                      ? "border-ink-800 bg-ink-800 text-cream-50"
                      : "border-ink-100 hover:border-ink-300 bg-white"
                  }`}
                >
                  <div className="text-sm font-medium">{opt.label}</div>
                  <div className={`text-xs ${system === opt.value ? "text-cream-100/70" : "text-ink-400"} mt-0.5`}>
                    {opt.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">Home type</label>
              <select
                value={homeType}
                onChange={(e) => setHomeType(e.target.value as HomeType)}
                className="field"
              >
                <option value="detached">Detached / duplex</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment / condo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">Ductwork</label>
              <select
                value={ductwork}
                onChange={(e) => setDuctwork(e.target.value as "existing" | "new" | "ductless")}
                className="field"
              >
                <option value="existing">Existing ducts in good shape</option>
                <option value="new">New ductwork needed</option>
                <option value="ductless">Ductless (mini-split)</option>
              </select>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={rebates}
              onChange={(e) => setRebates(e.target.checked)}
              className="mt-1 accent-ink-800"
            />
            <span className="text-sm text-ink-700">
              Apply CleanBC, BC Hydro and FortisBC rebate estimates
              <span className="block text-xs text-ink-400 mt-0.5">
                Woola is a registered contractor for all three programs and submits paperwork on your behalf.
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className={compact ? "mt-6" : "lg:col-span-2"}>
        <div className="bg-ink-800 text-cream-50 rounded-2xl p-8 sticky top-24">
          <div className="eyebrow text-brand-400">Estimate</div>
          <h4 className="text-xl font-semibold mt-2">{result.systemLabel}</h4>
          <div className="text-xs text-cream-100/70 mt-1">{sqft.toLocaleString()} sqft · {homeType.replace("_", " ")}</div>

          <div className="mt-6 space-y-3 text-sm">
            <Row label="Equipment" lo={result.equipmentLow} hi={result.equipmentHigh} />
            <Row label="Installation & labour" lo={result.installLow} hi={result.installHigh} />
            <div className="border-t border-ink-600 pt-3">
              <Row label="Project total" lo={result.totalLow} hi={result.totalHigh} bold />
            </div>
            {rebates && result.rebateHigh > 0 && (
              <>
                <Row label="Less rebates" lo={-result.rebateHigh} hi={-result.rebateLow} muted />
                <div className="border-t border-ink-600 pt-3">
                  <Row label="Net out-of-pocket" lo={result.netLow} hi={result.netHigh} bold accent />
                </div>
              </>
            )}
          </div>

          <div className="mt-6 text-xs text-cream-100/70 space-y-1.5">
            {result.notes.slice(0, 3).map((n, i) => (
              <div key={i} className="flex items-start gap-2">
                <Info className="w-3 h-3 mt-0.5 text-brand-400 shrink-0" />
                <span>{n}</span>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-6 flex items-center justify-center gap-1 w-full bg-brand-500 hover:bg-brand-400 text-ink-800 font-medium py-3 rounded-full transition"
          >
            Book a free in-home estimate <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  lo,
  hi,
  bold = false,
  accent = false,
  muted = false,
}: {
  label: string;
  lo: number;
  hi: number;
  bold?: boolean;
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between ${muted ? "opacity-80" : ""}`}>
      <span className={bold ? "font-semibold" : "text-cream-100/80"}>{label}</span>
      <span
        className={`tabular-nums ${bold ? "font-semibold" : ""} ${accent ? "text-brand-400" : ""}`}
      >
        {formatCurrency(lo)} – {formatCurrency(hi)}
      </span>
    </div>
  );
}
