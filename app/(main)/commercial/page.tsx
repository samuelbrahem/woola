import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { divisions } from "@/lib/divisions";
import {
  ArrowRight,
  Check,
  Building2,
  FileText,
  Clock,
  ShieldCheck,
  Building,
  Factory,
  Store,
  HeartPulse,
  Hotel,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Services",
  description:
    "Woola serves strata, office, industrial, retail, healthcare, and hospitality properties across Metro Vancouver: maintenance contracts, capital projects, compliance, and 24/7 emergency response.",
  alternates: { canonical: "https://woola.ca/commercial" },
};

const segments = [
  {
    id: "strata",
    icon: Building2,
    name: "Strata & Multi-Residential",
    who: "Strata councils, property managers, rental portfolios",
    body: "Shared systems are our home turf: boilers, make-up air, parkades, envelope, and the common-area work that keeps assessments predictable.",
    needs: [
      "Annual fixed-price maintenance contracts",
      "Council-ready reporting and depreciation support",
      "EV-Ready planning and suite upgrades",
    ],
    links: [
      { label: "Maintenance packages", href: "/build/maintenance" },
      { label: "EV charging", href: "/electrical/ev-chargers" },
    ],
  },
  {
    id: "office",
    icon: Building,
    name: "Office & Commercial Towers",
    who: "Building owners, facility directors, asset managers",
    body: "Tenant comfort drives renewals. We keep RTUs, VRF, electrical distribution, and life-safety systems running to spec, and fit out floors between leases.",
    needs: [
      "HVAC comfort calls answered same-day",
      "Tenant improvement fit-outs with Gold Seal PMs",
      "LED retrofits with BC Hydro rebates",
    ],
    links: [
      { label: "Commercial HVAC", href: "/mechanical/hvac" },
      { label: "Construction & TIs", href: "/build/construction" },
    ],
  },
  {
    id: "industrial",
    icon: Factory,
    name: "Industrial & Logistics",
    who: "Warehouses, manufacturing, distribution, cold storage",
    body: "Heavy power, big air, and uptime pressure. Service upgrades, high-bay lighting, dock and process equipment circuits, compressed-air-adjacent mechanical, and refrigeration at scale.",
    needs: [
      "Arc-flash studies and infrared scans on a calendar",
      "Industrial refrigeration and glycol systems",
      "1,200A+ service upgrades during planned downtime",
    ],
    links: [
      { label: "Commercial electrical", href: "/electrical/electrical" },
      { label: "Refrigeration", href: "/mechanical/refrigeration" },
    ],
  },
  {
    id: "retail",
    icon: Store,
    name: "Retail & Restaurant",
    who: "Restaurant groups, grocers, retail chains, food service",
    body: "Kitchens and coolers cannot wait until Monday. Gas lines, hood make-up air, walk-ins, ice machines, and storefront electrical with 24/7 response for food-service clients.",
    needs: [
      "Emergency refrigeration response, day or night",
      "Class A gas fitting for commercial kitchens",
      "Multi-location service under one account",
    ],
    links: [
      { label: "Refrigeration", href: "/mechanical/refrigeration" },
      { label: "Gas services", href: "/mechanical/gas" },
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    name: "Healthcare & Critical Facilities",
    who: "Clinics, care homes, labs, data rooms",
    body: "Where downtime is a safety issue, the standby systems get engineered attention: CSA C282 generator programs, redundant cooling, and documentation that survives an audit.",
    needs: [
      "CSA C282 annual load-bank testing, in-house",
      "ATS service with written outage plans",
      "Compliance documentation for accreditation",
    ],
    links: [
      { label: "Standby generators", href: "/power/generators" },
      { label: "Our process", href: "/process" },
    ],
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality & Institutional",
    who: "Hotels, recreation, schools, municipal buildings",
    body: "High-traffic buildings with reputations to protect. Domestic hot water at scale, pool and amenity mechanical, guest-room comfort, and refresh cycles that work around occupancy.",
    needs: [
      "DHW plants sized for full occupancy",
      "Amenity and common-area refresh programs",
      "After-hours scheduling around guests",
    ],
    links: [
      { label: "Plumbing & hot water", href: "/mechanical/plumbing" },
      { label: "Property services", href: "/build/property-services" },
    ],
  },
];

const pillars = [
  {
    icon: FileText,
    title: "One PO across every trade",
    body: "Mechanical, electrical, power, and building work invoiced under a single monthly statement, line-itemized by building and trade.",
  },
  {
    icon: Clock,
    title: "Contracted response windows",
    body: "Sub-4-hour emergency response in Metro Vancouver for contracted clients, with dispatch answering 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Reporting owners can audit",
    body: "Photo-documented work orders, asset registries, and renewal calendars, whether the reader is a strata council or an asset manager.",
  },
  {
    icon: Landmark,
    title: "Fixed-price where it counts",
    body: "Defined-scope work is quoted fixed. Anything open-ended runs on published unit rates, so budgets hold.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-16 relative">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-center">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Commercial</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.98]">
              Every kind of commercial. One accountable partner.
            </h1>
            <p className="mt-5 text-lg text-cream-100/80 max-w-2xl">
              Strata towers, office buildings, warehouses, restaurants, care facilities,
              and hotels each run differently. Woola runs programs for all of them across
              Metro Vancouver, the Fraser Valley, and the Sea-to-Sky.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary">
                Book a portfolio review <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Request a walk-through
              </Link>
            </div>
          </div>
          <PhotoPlaceholder label="Commercial building exterior" dark className="aspect-[4/3]" />
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {segments.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs px-3 py-1.5 rounded-full bg-white border hairline text-ink-700 hover:bg-ink-800 hover:text-cream-50 transition"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Property types"
          title="Built for the building you actually run."
          description="Six commercial segments, each with its own failure modes, compliance load, and service rhythm. Pick yours."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {segments.map((s) => (
            <div key={s.id} id={s.id} className="card p-8 flex flex-col scroll-mt-28">
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-cream-50 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-ink-800 tracking-tight">{s.name}</h3>
              <div className="mt-1 text-xs text-ink-400 uppercase tracking-wider">{s.who}</div>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">{s.body}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {s.needs.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-ink-700">
                    <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" strokeWidth={2} />
                    {n}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t hairline flex flex-wrap gap-x-6 gap-y-2">
                {s.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 link-underline"
                  >
                    {l.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-500 text-white">
        <div className="container-x section">
          <SectionHead
            dark
            eyebrow="How we work with managers"
            title="Built around the way portfolios actually run."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="card p-7 bg-white">
                <div className="w-11 h-11 rounded-full bg-ink-800 text-cream-50 flex items-center justify-center">
                  <p.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-800">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Coverage"
          title="Every division, on commercial terms."
          description="Maintenance contracts, capital projects, and compliance testing from all four divisions, coordinated by one dispatcher."
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {divisions.map((d) => (
            <Link key={d.slug} href={`/${d.slug}`} className="card p-6 group bg-white">
              <div className="eyebrow">{d.subtitle}</div>
              <div className="mt-2 font-semibold text-ink-800 group-hover:text-brand-500 transition">
                {d.name}
              </div>
              <ul className="mt-4 space-y-2">
                {d.services.slice(0, 3).map((s) => (
                  <li key={s.slug} className="flex items-start gap-2 text-xs text-ink-600">
                    <Check className="w-3.5 h-3.5 mt-0.5 text-brand-500 shrink-0" />
                    {s.name}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>

      <FleetStrip />

      <CTABanner
        title="Send us your building list."
        description="Strata, office, industrial, retail, or mixed: we'll come back with a coverage plan, response windows, and a proposed maintenance scope."
      />
    </>
  );
}
