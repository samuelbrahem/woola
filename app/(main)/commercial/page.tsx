import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { CircuitField } from "@/components/CircuitField";
import { divisions } from "@/lib/divisions";
import { DivisionCard } from "@/components/DivisionCard";
import { IndustryExplorer } from "@/components/IndustryExplorer";
import {
  ArrowRight,
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
        <CircuitField />
        <div className="container-x pt-24 pb-20 relative">
          <div className="max-w-3xl">
            <div className="rise eyebrow !text-brand-400">Commercial</div>
            <h1 className="rise rise-1 mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.98]">
              Every kind of commercial. One accountable partner.
            </h1>
            <p className="rise rise-2 mt-5 text-lg text-cream-100/80 max-w-2xl">
              Strata towers, office buildings, warehouses, restaurants, care facilities,
              and hotels each run differently. Woola runs programs for all of them across
              Metro Vancouver, the Fraser Valley, and the Sea-to-Sky.
            </p>
            <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-brand">
                Book a portfolio review <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
                Request a walk-through
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 border-b hairline">
        <div className="container-x py-10 md:py-12">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                label: "Fix",
                title: "Something's down",
                body: "A failed boiler, a dead panel, a generator that won't start, a leak working through three floors. Dispatch triages by phone, day or night.",
                href: "/contact",
                cta: "Request service",
              },
              {
                label: "Replace",
                title: "Equipment at end of life",
                body: "Boilers, RTUs, chillers, switchgear, roofs. Replacements planned from maintenance history and delivered around occupancy, not emergencies.",
                href: "/know-your-building",
                cta: "Plan capital renewal",
              },
              {
                label: "Maintain",
                title: "Stop the next failure",
                body: "Fixed-price maintenance contracts across every trade, with condition reports your council or asset manager can actually audit.",
                href: "/book",
                cta: "Book a portfolio review",
              },
            ].map((t) => (
              <Link key={t.label} href={t.href} className="card p-7 group flex flex-col">
                <div className="eyebrow !text-brand-500">{t.label}</div>
                <h2 className="mt-2 text-xl font-semibold text-ink-800">{t.title}</h2>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">{t.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 group-hover:gap-2.5 transition-all">
                  {t.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
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

      <FleetStrip />

      <CTABanner
        title="Send us your building list."
        description="Strata, office, industrial, retail, or mixed: we'll come back with a coverage plan, response windows, and a proposed maintenance scope."
      />
    </>
  );
}
