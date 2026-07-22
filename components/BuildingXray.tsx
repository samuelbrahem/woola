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
  equipmentSlug?: string;
  lifespan: number;
  what: string;
  renewal: string;
  cx: number;
  cy: number;
};

export type BuildingType = "strata" | "office" | "warehouse";

const STRATA_SYSTEMS: SystemDef[] = [
  {
    id: "rtu",
    name: "Rooftop HVAC",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/hvac",
    equipmentSlug: "rooftop-unit",
    lifespan: 18,
    what: "RTUs, make-up air, and exhaust fans. Quarterly PM keeps warranty and airflow on spec.",
    renewal: "$40k–$120k per unit",
    cx: 160,
    cy: 65,
  },
  {
    id: "envelope",
    name: "Roof membrane & envelope",
    division: "Build",
    divisionSlug: "build",
    serviceHref: "/build/envelope",
    equipmentSlug: "building-envelope",
    lifespan: 22,
    what: "Membrane, sealant joints, and cladding. Annual inspections catch leaks before drywall does.",
    renewal: "$15–$35 / sq ft",
    cx: 250,
    cy: 150,
  },
  {
    id: "boiler",
    name: "Boiler plant",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/gas",
    equipmentSlug: "boiler",
    lifespan: 25,
    what: "Hydronic heat and domestic hot water. Combustion analysis every year, rebuild kits on schedule.",
    renewal: "$80k–$250k per plant",
    cx: 218,
    cy: 310,
  },
  {
    id: "panel",
    name: "Main electrical",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/electrical",
    equipmentSlug: "electrical-panel",
    lifespan: 40,
    what: "Switchgear, distribution, and metering. Infrared scans find hot lugs before they fail.",
    renewal: "$60k–$400k per service",
    cx: 194,
    cy: 315,
  },
  {
    id: "generator",
    name: "Standby generator",
    division: "Power Systems",
    divisionSlug: "power",
    serviceHref: "/power/generators",
    equipmentSlug: "generator",
    lifespan: 30,
    what: "Life-safety power. CSA C282 load-bank test annually, fuel polishing on rotation.",
    renewal: "$150k–$500k installed",
    cx: 250,
    cy: 298,
  },
  {
    id: "ev",
    name: "Parkade & EV",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/ev-chargers",
    equipmentSlug: "ev-charger",
    lifespan: 12,
    what: "Traffic-deck membrane above, EV-Ready infrastructure below. Load-managed charging per stall.",
    renewal: "$2k–$8k per stall",
    cx: 163,
    cy: 326,
  },
  {
    id: "suites",
    name: "Suite fan coils",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/hvac",
    equipmentSlug: "fan-coil",
    lifespan: 15,
    what: "Corridors, amenities, and in-suite systems. Refresh cycles keep assessments boring.",
    renewal: "$5k–$40k per floor",
    cx: 135,
    cy: 160,
  },
];

const OFFICE_SYSTEMS: SystemDef[] = [
  {
    id: "rtu",
    name: "Rooftop HVAC",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/hvac",
    equipmentSlug: "rooftop-unit",
    lifespan: 18,
    what: "RTUs and make-up air serving tenant floors. Quarterly PM keeps comfort complaints off your desk.",
    renewal: "$40k–$120k per unit",
    cx: 150,
    cy: 62,
  },
  {
    id: "envelope",
    name: "Curtain wall & envelope",
    division: "Build",
    divisionSlug: "build",
    serviceHref: "/build/envelope",
    equipmentSlug: "building-envelope",
    lifespan: 25,
    what: "Glazing seals, sealant joints, and roof membrane. Annual inspections protect tenant fit-outs below.",
    renewal: "$18–$40 / sq ft",
    cx: 100,
    cy: 150,
  },
  {
    id: "ti",
    name: "Ventilation & air handling",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/hvac",
    equipmentSlug: "air-handler",
    lifespan: 10,
    what: "Office fit-outs, lobby refreshes, and amenity upgrades between leases. In-house trades, one PM.",
    renewal: "$30–$120 / sq ft",
    cx: 230,
    cy: 120,
  },
  {
    id: "lighting",
    name: "Lobby & common lighting",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/led-lighting",
    equipmentSlug: "led-lighting",
    lifespan: 12,
    what: "Lobby, corridor, and exterior LED with controls. BC Hydro rebates on retrofit cycles.",
    renewal: "$15k–$80k per building",
    cx: 175,
    cy: 250,
  },
  {
    id: "panel",
    name: "Main electrical",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/electrical",
    equipmentSlug: "electrical-panel",
    lifespan: 40,
    what: "Switchgear, tenant metering, and distribution. Infrared scans find hot lugs before they fail.",
    renewal: "$60k–$400k per service",
    cx: 245,
    cy: 255,
  },
  {
    id: "generator",
    name: "Standby generator",
    division: "Power Systems",
    divisionSlug: "power",
    serviceHref: "/power/generators",
    equipmentSlug: "generator",
    lifespan: 30,
    what: "Life-safety power for exits, elevators, and fire pumps. CSA C282 load-bank test annually.",
    renewal: "$150k–$500k installed",
    cx: 225,
    cy: 64,
  },
  {
    id: "ev",
    name: "Parkade & EV",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/ev-chargers",
    equipmentSlug: "ev-charger",
    lifespan: 12,
    what: "Traffic-deck membrane above, workplace charging below. Load-managed circuits per stall.",
    renewal: "$2k–$8k per stall",
    cx: 155,
    cy: 330,
  },
];

const WAREHOUSE_SYSTEMS: SystemDef[] = [
  {
    id: "rtu",
    name: "Rooftop units & MUA",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/hvac",
    equipmentSlug: "rooftop-unit",
    lifespan: 18,
    what: "Packaged rooftops and make-up air keeping production and warehouse zones ventilated to code.",
    renewal: "$40k–$120k per unit",
    cx: 202,
    cy: 57,
  },
  {
    id: "roof",
    name: "Roof membrane",
    division: "Build",
    divisionSlug: "build",
    serviceHref: "/build/envelope",
    equipmentSlug: "building-envelope",
    lifespan: 22,
    what: "Big flat roofs fail quietly. Annual membrane and drain inspections before racking gets wet.",
    renewal: "$12–$30 / sq ft",
    cx: 280,
    cy: 72,
  },
  {
    id: "heaters",
    name: "Gas unit heaters",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/gas",
    equipmentSlug: "gas-heater",
    lifespan: 20,
    what: "Suspended unit heaters and radiant tube heating. Annual combustion analysis on every unit.",
    renewal: "$8k–$25k per unit",
    cx: 206,
    cy: 91,
  },
  {
    id: "highbay",
    name: "LED high-bay lighting",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/led-lighting",
    equipmentSlug: "led-lighting",
    lifespan: 12,
    what: "High-bay LED with occupancy controls. Power Smart rebates typically pay back inside three years.",
    renewal: "$20k–$100k per facility",
    cx: 173,
    cy: 95,
  },
  {
    id: "refrigeration",
    name: "Cold storage & refrigeration",
    division: "Mechanical",
    divisionSlug: "mechanical",
    serviceHref: "/mechanical/refrigeration",
    equipmentSlug: "compressor",
    lifespan: 15,
    what: "Walk-ins, glycol systems, and process cooling. Quarterly PM with refrigerant compliance logs.",
    renewal: "$50k–$300k per system",
    cx: 54,
    cy: 150,
  },
  {
    id: "panel",
    name: "Main electrical & distribution",
    division: "Electrical",
    divisionSlug: "electrical",
    serviceHref: "/electrical/electrical",
    equipmentSlug: "electrical-panel",
    lifespan: 40,
    what: "Heavy distribution, motor loads, and metering. Infrared scans and coordination studies on cycle.",
    renewal: "$60k–$400k per service",
    cx: 84,
    cy: 95,
  },
  {
    id: "dock",
    name: "Docks & exterior",
    division: "Build",
    divisionSlug: "build",
    serviceHref: "/build/property-services",
    equipmentSlug: "loading-dock",
    lifespan: 15,
    what: "Dock doors, levelers, bollards, and lot maintenance. Same-week dispatch for non-emergency work.",
    renewal: "$5k–$20k per door",
    cx: 250,
    cy: 170,
  },
];

const BUILDINGS: Record<BuildingType, { label: string; systems: SystemDef[]; vw: number; vh: number }> = {
  strata: { label: "Strata tower", systems: STRATA_SYSTEMS, vw: 340, vh: 400 },
  office: { label: "Office & mixed-use", systems: OFFICE_SYSTEMS, vw: 340, vh: 400 },
  warehouse: { label: "Industrial & warehouse", systems: WAREHOUSE_SYSTEMS, vw: 340, vh: 227 },
};

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

export function BuildingXray({
  initialType = "strata",
  lockType = false,
}: {
  initialType?: BuildingType;
  lockType?: boolean;
}) {
  const [type, setType] = useState<BuildingType>(initialType);
  const [age, setAge] = useState(12);
  const [activeId, setActiveId] = useState<string>(BUILDINGS[initialType].systems[0].id);

  const systems = BUILDINGS[type].systems;

  const selectType = (t: BuildingType) => {
    setType(t);
    setActiveId(BUILDINGS[t].systems[0].id);
  };

  const active = systems.find((s) => s.id === activeId) ?? systems[0];
  const stats = useMemo(
    () =>
      systems.map((s) => {
        const h = healthAt(age, s.lifespan);
        return { ...s, health: h, color: colorFor(h), label: labelFor(h) };
      }),
    [age, systems]
  );
  const activeStat = stats.find((s) => s.id === active.id)!;
  const dueCount = stats.filter((s) => s.health <= 0.25).length;
  const planCount = stats.filter((s) => s.health > 0.25 && s.health <= 0.55).length;

  return (
    <div>
      <div className={`flex flex-wrap gap-2 mb-6 ${lockType ? "hidden" : ""}`}>
        {(Object.keys(BUILDINGS) as BuildingType[]).map((t) => (
          <button
            key={t}
            onClick={() => selectType(t)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${
              t === type
                ? "bg-ink-800 text-cream-50"
                : "bg-white border hairline text-ink-600 hover:text-ink-800 hover:border-brand-500/40"
            }`}
          >
            {BUILDINGS[t].label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* SVG cross-section */}
        <div className="lg:col-span-6">
          <div className="card p-6 bg-white relative overflow-hidden">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/xray/${type}.webp`}
                alt={`3D cutaway render of a ${BUILDINGS[type].label.toLowerCase()}`}
                className="w-full h-auto"
              />
              <svg viewBox={`0 0 ${BUILDINGS[type].vw} ${BUILDINGS[type].vh}`} className="absolute inset-0 w-full h-full" aria-hidden>
                {/* Service Logic-style concentric hotspots */}
                {stats.map((s, i) => {
                  const isActive = s.id === active.id;
                  return (
                    <g
                      key={`${type}-${s.id}`}
                      onClick={() => setActiveId(s.id)}
                      onMouseEnter={() => setActiveId(s.id)}
                      className={`cursor-pointer hotspot-in ${isActive ? "hotspot-pulse" : ""}`}
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <circle cx={s.cx} cy={s.cy} r="16" fill="#00788C" fillOpacity="0.35" />
                      <circle cx={s.cx} cy={s.cy} r="12.5" fill="#00788C" fillOpacity="0.45" />
                      <circle cx={s.cx} cy={s.cy} r="9" fill="#00788C" />
                      <circle cx={s.cx} cy={s.cy} r="5" fill="#FBFBFB" />
                    </g>
                  );
                })}
              </svg>

              {/* floating label for the active hotspot */}
              <Link
                href={active.equipmentSlug ? `/equipment/${active.equipmentSlug}` : active.serviceHref}
                className="absolute z-10 flex items-center gap-1.5 bg-white shadow-soft border hairline rounded-full pl-3 pr-2.5 py-1.5 text-xs font-semibold text-ink-800 hover:text-brand-500 transition whitespace-nowrap"
                style={{
                  left: `${(active.cx / BUILDINGS[type].vw) * 100}%`,
                  top: `${(active.cy / BUILDINGS[type].vh) * 100}%`,
                  transform: active.cx > 220 ? "translate(-105%, 60%)" : "translate(12%, 60%)",
                }}
              >
                {active.name} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

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

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href={active.serviceHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 link-underline"
              >
                How Woola looks after this <ArrowRight className="w-4 h-4" />
              </Link>
              {active.equipmentSlug && (
                <Link
                  href={`/equipment/${active.equipmentSlug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-brand-500"
                >
                  What is this equipment? <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
