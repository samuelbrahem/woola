import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHead } from "@/components/Section";
import { DivisionCard } from "@/components/DivisionCard";
import { Stats } from "@/components/Stats";
import { ServiceMap } from "@/components/ServiceMap";
import { Calculator } from "@/components/Calculator";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { divisions } from "@/lib/divisions";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { ArrowRight, Building2, Wrench, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((d) => (
            <DivisionCard key={d.slug} division={d} />
          ))}
        </div>
        <div className="mt-10">
          <Stats />
        </div>
      </Section>

      <section className="border-y hairline bg-white">
        <div className="container-x section">
          <SectionHead
            eyebrow="Who we serve"
            title="Two kinds of clients. Two ways of working."
            description="Commercial portfolios and private homes run on different rhythms, so we run them as separate programs with dedicated intake, scheduling, and reporting."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Link href="/commercial" className="card p-9 group flex flex-col">
              <div className="eyebrow">Strata · Commercial · Industrial</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-ink-800 tracking-tight">
                Commercial & Strata
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
                Portfolio maintenance contracts, fixed-price proposals, council-ready
                reporting, and 24/7 emergency response under a single PO. Built for
                property managers, strata councils, and facility directors.
              </p>
              <div className="mt-6 pt-6 border-t hairline flex items-center justify-between text-sm">
                <span className="text-ink-500">Maintenance contracts, projects, and emergency SLAs</span>
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
            <Link href="/residential" className="card p-9 group flex flex-col">
              <div className="eyebrow">Homeowners</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-ink-800 tracking-tight">
                Residential
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
                Heat pumps, hot water, gas, EV chargers, and standby power for your
                home. Upfront pricing, CleanBC and BC Hydro rebates filed for you,
                and the same licensed techs we send to commercial sites.
              </p>
              <div className="mt-6 pt-6 border-t hairline flex items-center justify-between text-sm">
                <span className="text-ink-500">Installs, replacements, and rebate-eligible upgrades</span>
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow="The Woola model"
                title="Every trade. One team. One call."
                description="Four divisions sharing one dispatcher, one operations leader, and one accountable PO across every job. If something breaks at 2 AM, you call one number, and our internal coordination figures out which trade rolls."
              />
              <ul className="mt-8 space-y-4">
                {[
                  {
                    icon: Wrench,
                    title: "Coordinated trades, not subcontracted",
                    body: "HVAC, plumbing, electrical and building trades are W2 employees on a shared roster, not subs we re-bill.",
                  },
                  {
                    icon: Building2,
                    title: "Strata and commercial first",
                    body: "Our intake, reporting and invoicing is built around the way property managers actually work.",
                  },
                  {
                    icon: Zap,
                    title: "Transparent technology",
                    body: "Photo-documented work orders, asset registries, and renewal calendars handed back to the council on every job.",
                  },
                ].map((it) => (
                  <li key={it.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-ink-800 text-cream-50 flex items-center justify-center shrink-0">
                      <it.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-semibold text-ink-800">{it.title}</div>
                      <div className="text-sm text-ink-500 mt-1">{it.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="btn btn-outline">
                  How we run jobs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ServiceMap />
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-ink-500">
                <div className="card p-4">
                  <div className="text-lg font-semibold text-ink-800">{cities.length}</div>
                  <div className="mt-1">Cities</div>
                </div>
                <div className="card p-4">
                  <div className="text-lg font-semibold text-ink-800">6</div>
                  <div className="mt-1">Regions</div>
                </div>
                <div className="card p-4">
                  <div className="text-lg font-semibold text-ink-800">110 min</div>
                  <div className="mt-1">HQ → Whistler</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-7">
            <SectionHead
              eyebrow="Free tool"
              title="Estimate your mechanical project in 60 seconds."
              description="Move the sliders. We'll show equipment, labour, rebate and net cost ranges based on BC market data before anyone visits your home."
            />
          </div>
        </div>
        <Calculator />
      </Section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <div className="max-w-3xl">
            <div className="eyebrow text-brand-400">What clients say</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
              The point of Woola is that you stop chasing trades.
            </h2>
          </div>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Coverage"
          title="From Abbotsford to Whistler, dispatched from Coquitlam."
          description="Each city gets a dedicated route, response window, and the right truck stock, not a generic call-out."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.slice(0, 9).map((c) => (
            <Link key={c.slug} href={`/service-areas/${c.slug}`} className="card p-5 group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-ink-400 uppercase tracking-wider">{c.region}</div>
                  <div className="mt-1 text-lg font-semibold text-ink-800 group-hover:text-ink-600">{c.name}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-ink-800" />
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs text-ink-500">
                <span>~{c.responseHours}h response</span>
                <span>·</span>
                <span>{c.techsAssigned} techs</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/service-areas" className="btn btn-outline">
            View all {cities.length} cities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
