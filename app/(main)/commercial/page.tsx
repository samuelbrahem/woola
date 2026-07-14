import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { divisions } from "@/lib/divisions";
import { ArrowRight, Check, Building2, FileText, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial & Strata Services",
  description:
    "Portfolio maintenance contracts, fixed-price projects, council-ready reporting, and 24/7 emergency response for strata, commercial, and industrial properties across Metro Vancouver.",
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
    title: "Council-ready reporting",
    body: "Photo-documented work orders, asset registries, and renewal calendars your strata council can actually read.",
  },
  {
    icon: Building2,
    title: "Fixed-price where it counts",
    body: "Defined-scope work is quoted fixed. Anything open-ended runs on published unit rates, so budgets hold.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow">Commercial & Strata</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              Your whole portfolio. One accountable partner.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl">
              Woola runs maintenance, projects, and emergencies for strata, commercial,
              and industrial properties across Metro Vancouver, the Fraser Valley, and
              the Sea-to-Sky. Four in-house divisions, one dispatcher, and reporting
              built for property managers.
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
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="How we work with managers"
          title="Built around the way portfolios actually run."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="card p-8">
              <div className="w-11 h-11 rounded-full bg-ink-800 text-cream-50 flex items-center justify-center">
                <p.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink-800">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
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
        </div>
      </section>

      <CTABanner
        title="Send us your building list."
        description="We'll come back with a coverage plan, response windows, and a proposed maintenance scope for the portfolio."
      />
    </>
  );
}
