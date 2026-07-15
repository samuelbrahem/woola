import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Section, SectionHead } from "@/components/Section";
import { DivisionCard } from "@/components/DivisionCard";
import { Stats } from "@/components/Stats";
import { ServiceMap } from "@/components/ServiceMap";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { BuildingXray } from "@/components/BuildingXray";
import { divisions } from "@/lib/divisions";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { ArrowRight, Building2, Wrench, Zap, ShieldCheck, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <div className="border-b hairline bg-cream-50">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-ink-800">OUT WORK.</span>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-ink-800">OUT PERFORM.</span>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-500">OUT PLAY.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-ink-500">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
              WorkSafe COR · TECA Quality First · BOMA member
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
              20+ municipalities · HQ in Coquitlam
            </span>
          </div>
        </div>
      </div>

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
              <div className="eyebrow">Strata · Office · Industrial · Retail · Healthcare · Hospitality</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-ink-800 tracking-tight">
                Commercial
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
                From strata towers to warehouses, restaurant groups to care facilities:
                portfolio maintenance contracts, fixed-price projects, compliance testing,
                and 24/7 emergency response under a single PO.
              </p>
              <div className="mt-6 pt-6 border-t hairline flex items-center justify-between text-sm">
                <span className="text-ink-500">Six property segments, one accountable partner</span>
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

      <Section>
        <SectionHead
          eyebrow="Interactive · Building X-Ray"
          title="Every building is a countdown. See yours."
          description="Drag the age slider and watch each system move toward renewal. This is how we plan maintenance: by remaining service life, not by waiting for the failure call."
        />
        <div className="mt-12">
          <BuildingXray />
        </div>
      </Section>

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
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden rounded-md aspect-[4/3] bg-ink-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/field-generator-delivery.webp"
              alt="Woola technician receiving a standby generator delivery in the field"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink-900/70 to-transparent">
              <div className="eyebrow !text-brand-400">In the field</div>
              <div className="mt-1 text-sm text-cream-100">
                Woola crews, Woola trucks, Woola shirts. You&apos;ll know us when we show up.
              </div>
            </div>
          </div>
          <div>
            <SectionHead
              eyebrow="Preventative maintenance"
              title="The cheapest repair is the one that never happens."
              description="Most of our contracted work is planned, not reactive: scheduled inspections, filter and fluid changes, compliance testing, and small fixes caught early. Buildings on a Woola PM program spend less and fail less."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Custom maintenance calendar per building and asset",
                "Compliance handled: backflow, CSA C282, fire-safety coordination",
                "Photo-documented visits your council can audit",
                "Priority emergency response included",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-2 w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/build/maintenance" className="btn btn-primary">
                Maintenance packages <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/process" className="btn btn-ghost">
                How a PM program runs
              </Link>
            </div>
          </div>
        </div>
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
