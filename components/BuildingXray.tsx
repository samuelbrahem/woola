"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

type SystemDef = {
  id: string;
  name: string;
  division: string;
  divisionSlug: string;
  serviceHref: string;
  lifespan: number;
  what: string;
  renewal: string;
  cx: number;
  cy: number;
};

const SYSTEMS: SystemDef[] = [
  {
    id: "rtu",
    name: "Rooftop HVAC",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/hvac",
    lifespan: 18,
    what: "RTUs, make-up air, and exhaust fans. Quarterly PM keeps warranty and airflow on spec.",
    renewal: "$40k–$120k per unit",
    cx: 150,
    cy: 40,
  },
  {
    id: "envelope",
    name: "Roof membrane & envelope",
    division: "Build",
    divisionSlug: "build",
    serviceHref: "/build/envelope",
    lifespan: 22,
    what: "Membrane, sealant joints, and cladding. Annual inspections catch leaks before drywall does.",
    renewal: "$15–$35 / sq ft",
    cx: 258,
    cy: 58,
  },
  {
    id: "boiler",
    name: "Boiler plant",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/gas",
    lifespan: 25,
    what: "Hydronic heat and domestic hot water. Combustion analysis every year, rebuild kits on schedule.",
    renewal: "$80k–$250k per plant",
    cx: 118,
    cy: 305,
  },
  {
    id: "panel",
    name: "Main electrical",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/electrical",
    lifespan: 40,
    what: "Switchgear, distribution, and metering. Infrared scans find hot lugs before they fail.",
    renewal: "$60k–$400k per service",
    cx: 195,
    cy: 305,
  },
  {
    id: "generator",
    name: "Standby generator",
    division: "Power Systems",
    divisionSlug: "power",
    serviceHref: "/power/generators",
    lifespan: 30,
    what: "Life-safety power. CSA C282 load-bank test annually, fuel polishing on rotation.",
    renewal: "$150k–$500k installed",
    cx: 262,
    cy: 305,
  },
  {
    id: "ev",
    name: "Parkade & EV",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/ev-chargers",
    lifespan: 12,
    what: "Traffic-deck membrane above, EV-Ready infrastructure below. Load-managed charging per stall.",
    renewal: "$2k–$8k per stall",
    cx: 150,
    cy: 358,
  },
  {
    id: "suites",
    name: "Suites & common areas",
    division: "Build",
    divisionSlug: "build",
    serviceHref: "/build/maintenance",
    lifespan: 15,
    what: "Corridors, amenities, and in-suite systems. Refresh cycles keep assessments boring.",
    renewal: "$5k–$40k per floor",
    cx: 150,
    cy: 170,
  },
];

function healthAt(age: number, lifespan: number) {
  const used = (age % (lifespan + 1)) / lifespan;
  return Math.max(0, Math.min(1, 1 - used));
}

function colorFor(h: number) {
  if (h > 0.55) return "#89A306";
  if (h > 0.25) return "#00788C";
  return "#000000";
}

function labelFor(h: number) {
  if (h > 0.55) return "Healthy";
  if (h > 0.25) return "Plan renewal";
  return "Due now";
}

export function BuildingXray() {
  const [age, setAge] = useState(12);
  const [activeId, setActiveId] = useState<string>("rtu");

  const active = SYSTEMS.find((s) => s.id === activeId)!;
  const stats = useMemo(
    () =>
      SYSTEMS.map((s) => {
        const h = healthAt(age, s.lifespan);
        return { ...s, health: h, color: colorFor(h), label: labelFor(h) };
      }),
    [age]
  );
  const activeStat = stats.find((s) => s.id === activeId)!;
  const dueCount = stats.filter((s) => s.health <= 0.25).length;
  const planCount = stats.filter((s) => s.health > 0.25 && s.health <= 0.55).length;

  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      {/* SVG cross-section */}
      <div className="lg:col-span-6">
        <div className="card p-6 bg-white relative overflow-hidden">
          <svg viewBox="0 0 340 400" className="w-full h-auto" role="img" aria-label="Interactive building cross-section">
            {/* ground */}
            <rect x="0" y="330" width="340" height="70" fill="#F7EDE9" />
            <line x1="0" y1="330" x2="340" y2="330" stroke="#0A0A09" strokeOpacity="0.15" />

            {/* parkade */}
            <rect x="60" y="332" width="180" height="52" fill="#FFFFFF" stroke="#0A0A09" strokeOpacity="0.25" />
            <text x="70" y="378" fontSize="9" fill="#6F6F6B">P1 PARKADE</text>

            {/* tower */}
            <rect x="60" y="70" width="180" height="262" fill="#FFFFFF" stroke="#0A0A09" strokeOpacity="0.35" />
            {/* floors */}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={i} x1="60" y1={100 + i * 28} x2="240" y2={100 + i * 28} stroke="#0A0A09" strokeOpacity="0.08" />
            ))}
            {/* windows */}
            {Array.from({ length: 8 }).map((_, r) =>
              Array.from({ length: 5 }).map((__, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={72 + c * 34}
                  y={106 + r * 28}
                  width="22"
                  height="14"
                  rx="1"
                  fill="#E6F3F5"
                />
              ))
            )}

            {/* mechanical penthouse + RTUs */}
            <rect x="90" y="46" width="120" height="24" fill="#FFFFFF" stroke="#0A0A09" strokeOpacity="0.3" />
            <rect x="120" y="30" width="28" height="16" fill="#F6F6F5" stroke="#0A0A09" strokeOpacity="0.4" />
            <rect x="165" y="30" width="28" height="16" fill="#F6F6F5" stroke="#0A0A09" strokeOpacity="0.4" />

            {/* mechanical room strip */}
            <rect x="60" y="290" width="180" height="42" fill="#FAFAF7" stroke="#0A0A09" strokeOpacity="0.2" />
            <text x="70" y="302" fontSize="8" fill="#6F6F6B">MECHANICAL / ELECTRICAL ROOM</text>

            {/* hotspots */}
            {stats.map((s) => {
              const isActive = s.id === activeId;
              return (
                <g
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  onMouseEnter={() => setActiveId(s.id)}
                  className="cursor-pointer"
                >
                  <circle cx={s.cx} cy={s.cy} r={isActive ? 13 : 9} fill={s.color} fillOpacity="0.22">
                    {isActive && (
                      <animate attributeName="r" values="13;16;13" dur="1.6s" repeatCount="indefinite" />
                    )}
                  </circle>
                  <circle cx={s.cx} cy={s.cy} r="5.5" fill={s.color} stroke="#fff" strokeWidth="1.5" />
                </g>
              );
            })}
          </svg>

          <div className="mt-2 flex items-center justify-between text-xs text-ink-400">
            <span>Tap a system to inspect it</span>
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#89A306" }} /> Healthy</span>
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#00788C" }} /> Plan</span>
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#000000" }} /> Due</span>
            </span>
          </div>
        </div>
      </div>

      {/* Controls + detail */}
      <div className="lg:col-span-6">
        <div className="card p-7 bg-white">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="eyebrow">Building age</div>
            <div className="text-sm text-ink-500">
              <span className="font-semibold text-ink-800 text-lg stat-number">{age}</span> years old
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={50}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="mt-4 w-full accent-[#00788C]"
            aria-label="Building age in years"
          />
          <div className="mt-1 flex justify-between text-[10px] text-ink-400">
            <span>New build</span>
            <span>25 yrs</span>
            <span>50 yrs</span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-md border hairline py-3">
              <div className="text-xl font-bold" style={{ color: "#89A306" }}>{stats.length - dueCount - planCount}</div>
              <div className="text-[10px] uppercase tracking-wider text-ink-500 mt-0.5">Healthy</div>
            </div>
            <div className="rounded-md border hairline py-3">
              <div className="text-xl font-bold" style={{ color: "#00788C" }}>{planCount}</div>
              <div className="text-[10px] uppercase tracking-wider text-ink-500 mt-0.5">Plan renewal</div>
            </div>
            <div className="rounded-md border hairline py-3">
              <div className="text-xl font-bold" style={{ color: "#000000" }}>{dueCount}</div>
              <div className="text-[10px] uppercase tracking-wider text-ink-500 mt-0.5">Due now</div>
            </div>
          </div>
        </div>

        <div className="card p-7 bg-white mt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="eyebrow">{activeStat.division}</div>
              <h3 className="mt-1 text-xl font-semibold text-ink-800">{active.name}</h3>
            </div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full text-white shrink-0"
              style={{ background: activeStat.color }}
            >
              {activeStat.label}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-ink-500 mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> Remaining service life
              </span>
              <span className="stat-number font-medium text-ink-800">
                {Math.round(activeStat.health * 100)}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-cream-200 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${activeStat.health * 100}%`, background: activeStat.color }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] text-ink-400">
              <span>Typical lifespan: ~{active.lifespan} yrs</span>
              <span>Budget: {active.renewal}</span>
            </div>
          </div>

          <p className="mt-4 text-sm text-ink-600 leading-relaxed">{active.what}</p>

          <Link
            href={active.serviceHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-500 link-underline"
          >
            How Woola looks after this <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
