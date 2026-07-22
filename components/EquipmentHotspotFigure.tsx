"use client";

import { useState } from "react";
import { AlertTriangle, Eye, Wrench } from "lucide-react";

export type EquipmentPart = {
  id: string;
  name: string;
  what: string;
  goesWrong: string;
  symptoms: string;
  action: string;
  cx: number; // 0-100 (percent of width)
  cy: number; // 0-75 (percent-space on a 4:3 figure)
};

export function EquipmentHotspotFigure({
  image,
  alt,
  parts,
}: {
  image: string;
  alt: string;
  parts: EquipmentPart[];
}) {
  const [activeId, setActiveId] = useState(parts[0]?.id);
  const active = parts.find((p) => p.id === activeId) ?? parts[0];

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7">
        <div className="card p-4 bg-white relative">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={alt} className="w-full h-auto" />
            <svg viewBox="0 0 100 75" className="absolute inset-0 w-full h-full" aria-hidden>
              {parts.map((p, i) => {
                const isActive = p.id === active.id;
                return (
                  <g
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    onMouseEnter={() => setActiveId(p.id)}
                    className={`cursor-pointer hotspot-in ${isActive ? "hotspot-pulse" : ""}`}
                    style={{ animationDelay: `${i * 0.12}s`, pointerEvents: "all" }}
                  >
                    <circle cx={p.cx} cy={p.cy} r="4.2" fill="#00788C" fillOpacity="0.35" />
                    <circle cx={p.cx} cy={p.cy} r="3.2" fill="#00788C" fillOpacity="0.45" />
                    <circle cx={p.cx} cy={p.cy} r="2.3" fill="#00788C" />
                    <circle cx={p.cx} cy={p.cy} r="1.2" fill="#FBFBFB" />
                  </g>
                );
              })}
            </svg>
            <div
              className="absolute z-10 bg-white shadow-soft border hairline rounded-full px-3 py-1.5 text-xs font-semibold text-ink-800 whitespace-nowrap pointer-events-none"
              style={{
                left: `${active.cx}%`,
                top: `${(active.cy / 75) * 100}%`,
                transform: active.cx > 62 ? "translate(-108%, 50%)" : "translate(10%, 50%)",
              }}
            >
              {active.name}
            </div>
          </div>
          <div className="mt-2 text-xs text-ink-400">Tap a dot to inspect the component</div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="card p-7 bg-white">
          <div className="eyebrow">{active.name}</div>
          <p className="mt-3 text-sm text-ink-600 leading-relaxed">{active.what}</p>
          <div className="mt-5 pt-5 border-t hairline space-y-4">
            <div>
              <div className="flex items-center gap-2 text-brand-500">
                <AlertTriangle className="w-4 h-4" strokeWidth={1.75} />
                <span className="text-xs font-semibold uppercase tracking-wider">What normally goes wrong</span>
              </div>
              <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{active.goesWrong}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-brand-500">
                <Eye className="w-4 h-4" strokeWidth={1.75} />
                <span className="text-xs font-semibold uppercase tracking-wider">Warning signs</span>
              </div>
              <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{active.symptoms}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-brand-500">
                <Wrench className="w-4 h-4" strokeWidth={1.75} />
                <span className="text-xs font-semibold uppercase tracking-wider">Inspection & repair</span>
              </div>
              <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{active.action}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {parts.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
                p.id === active.id
                  ? "bg-ink-800 text-cream-50"
                  : "bg-white border hairline text-ink-600 hover:border-brand-500/40"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
