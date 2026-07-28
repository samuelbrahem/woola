import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { divisions } from "@/lib/divisions";
import { DivisionCard } from "@/components/DivisionCard";
import { IndustryExplorer } from "@/components/IndustryExplorer";
import {
  ArrowRight,
  Check,
  FileText,
  Clock,
  ShieldCheck,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Services",
  description:
    "Woola serves strata, office, industrial, retail, healthcare, and hospitality properties across Metro Vancouver: maintenance contracts, capital projects, compliance, and 24/7 emergency response.",
  alternates: { canonical: "https://woola.ca/commercial" },
};

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
              <Link href="/book" className="btn btn-brand">
                Book a portfolio review <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
                Request a walk-through
              </Link>
            </div>
            <div className="mt-4 text-sm text-cream-100/60">
              Here for your home?{" "}
              <Link href="/residential" className="text-brand-400 hover:underline">
                Woola Residential →
              </Link>
            </div>
          </div>
          <PhotoPlaceholder label="Commercial building exterior" dark className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Four divisions"
          title="The trades your building depends on. One accountable partner."
          description="Commercial clients understand divisions, and ours are built to work together: mechanical, power, electrical, and build under one PO, one dispatcher, and one standard of reporting. Stop refereeing contractors; start holding one partner to account."
        />
        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {divisions.map((d) => (
            <DivisionCard key={d.slug} division={d} />
          ))}
        </div>
      </Section>

      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <SectionHead
            eyebrow="Industries"
            title="Built for your building."
            description="Hover the index. Every building type runs on different pressures; we run programs for each."
            dark
          />
          <div className="mt-12">
            <IndustryExplorer />
          </div>
        </div>
      </section>

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
