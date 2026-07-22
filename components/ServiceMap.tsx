"use client";

import dynamic from "next/dynamic";
import { cities } from "@/lib/cities";
import { GoogleCoverageMap } from "./GoogleCoverageMap";

const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Leaflet needs `window`; render the map client-only.
const CoverageMap = dynamic(() => import("./CoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-md border hairline bg-cream-100 animate-pulse" style={{ height: 520 }} />
  ),
});

export function ServiceMap() {
  return (
    <div className="card p-4 sm:p-6">
      <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
        <div>
          <div className="eyebrow">Coverage Map</div>
          <h3 className="text-2xl font-semibold mt-1">Abbotsford to Whistler</h3>
        </div>
        <div className="text-xs text-ink-400">
          {cities.length} municipalities · HQ in Coquitlam
        </div>
      </div>
      {GOOGLE_KEY ? <GoogleCoverageMap height={520} apiKey={GOOGLE_KEY} /> : <CoverageMap height={520} />}
      <div className="mt-3 flex items-center gap-4 text-xs text-ink-500 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-500 ring-2 ring-brand-500/20" /> Woola HQ
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-ink-800" /> Serviced city
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-500" /> Hover to preview · click for details
        </span>
        {!GOOGLE_KEY && (
          <span className="ml-auto text-ink-400">
            Map data © OpenStreetMap · © CARTO
          </span>
        )}
      </div>
    </div>
  );
}
