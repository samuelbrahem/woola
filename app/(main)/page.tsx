import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SiteIntro } from "@/components/SiteIntro";
import { Section, SectionHead } from "@/components/Section";
import { DivisionExplorer } from "@/components/DivisionExplorer";
import { Stats } from "@/components/Stats";
import { ServiceMap } from "@/components/ServiceMap";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { BuildingXray } from "@/components/BuildingXray";
import { IndustryExplorer } from "@/components/IndustryExplorer";
import { cities } from "@/lib/cities";
import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowRight, Building2, Wrench, Zap, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <SiteIntro />
      <div className="hero-reveal overflow-hidden">
        <HeroCarousel />
      </div>

      <div className="bg-brand-500 text-white relative overflow-hidden">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
          <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
            <span className="text-xl md:text-2xl font-bold tracking-tight">OUT WORK.</span>
            <span className="text-xl md:text-2xl font-bold tracking-tight">OUT PERFORM.</span>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-ink-900">OUT PLAY.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              {["logo-worksafe-bc", "logo-teca", "logo-boma"].map((l) => (
                <span key={l} className="inline-flex items-center justify-center bg-white rounded px-2 py-1">
                  <Image
                    src={`/brand/${l}.png`}
                    alt={`${l.replace("logo-", "").replace(/-/g, " ")} logo`}
                    width={90}
                    height={54}
                    className="h-7 w-auto"
                  />
                </span>
              ))}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              20+ municipalities · HQ Coquitlam
            </span>
          </div>
        </div>
      </div>

      <section className="bg-white border-b hairline overflow-hidden">
        <div className="container-x py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Two front doors</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink-800 leading-tight">
              Which building are we looking after?
            </h2>
          </div>
          <div className="mt-10 relative flex flex-col md:flex-row items-stretch">
            <div aria-hidden className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-ink-100" />
            <div
              aria-hidden
              className="hidden md:flex absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border hairline items-center justify-center text-xs font-semibold uppercase tracking-wider text-ink-400 z-10"
            >
              or
            </div>
            <Link
              href="/commercial"
              className="group flex-1 md:motion-safe:hover:flex-[1.2] motion-safe:transition-all motion-safe:duration-500 px-4 py-6 md:px-10"
            >
              <div className="relative h-[280px] md:h-[340px]">
                <Image
                  src="/xray/strata.webp"
                  alt="Cutaway render of a commercial strata tower showing mechanical systems"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 text-center">
                <div className="eyebrow">Commercial · PMs, strata & owners</div>
                <h3 className="mt-2 text-2xl font-semibold text-ink-800 group-hover:text-brand-500 transition">
                  One accountable partner for the whole building.
                </h3>
                <p className="mt-2 text-sm text-ink-500 max-w-md mx-auto leading-relaxed">
                  Mechanical, power, electrical, and build under one PO, documented the way
                  councils and owners expect.
                </p>
                <span className="btn btn-primary mt-5">
                  Explore commercial <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              href="/residential"
              className="group flex-1 md:motion-safe:hover:flex-[1.2] motion-safe:transition-all motion-safe:duration-500 px-4 py-6 md:px-10 border-t hairline md:border-t-0"
            >
              <div className="relative h-[280px] md:h-[340px]">
                <Image
                  src="/xray/house.webp"
                  alt="Cutaway render of a home showing furnace, water heater, EV charger, and standby generator"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 text-center">
                <div className="eyebrow">Residential · homeowners</div>
                <h3 className="mt-2 text-2xl font-semibold text-ink-800 group-hover:text-brand-500 transition">
                  The same licensed trades, at your house.
                </h3>
                <p className="mt-2 text-sm text-ink-500 max-w-md mx-auto leading-relaxed">
                  Heating, cooling, plumbing, hot water, and gas with upfront pricing and
                  honest recommendations.
                </p>
                <span className="btn btn-brand mt-5">
                  Explore residential <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="What we do"
          title="Every system a building depends on. One team behind all of it."
        />
        <div className="mt-12">
          <DivisionExplorer />
        </div>
        <div className="mt-14">
          <Stats />
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

      <Section>
        <SectionHead
          eyebrow="Interactive · Building X-Ray"
          title="Every building is a countdown. See yours."
          description="Drag the age slider and watch each system move toward renewal."
        />
        <div className="mt-12">
          <BuildingXray />
        </div>
        <div className="mt-8 text-center">
          <Link href="/know-your-building" className="btn btn-outline">
            How we document real buildings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <section className="bg-brand-500 text-white relative overflow-hidden">
        <div className="container-x py-14 md:py-16 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="eyebrow !text-white/80">Built for property managers</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
                Fewer vendors. Better visibility. One-source accountability.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/property-managers" className="btn bg-ink-900 text-cream-50 hover:bg-ink-700 text-base">
                For property managers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <SectionHead
            eyebrow="The Woola model"
            title="Every trade. One team. One call."
            description="Four divisions. One dispatcher. One accountable PO across every job."
            dark
          />
          <div className="mt-12">
            <ServiceMap />
            <div className="mt-4 text-right">
              <Link href="/service-areas" className="text-sm font-medium text-brand-400 hover:underline">
                All {cities.length} service areas →
              </Link>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Our own trades, not subs",
                body: "Every trade is a Woola employee on a shared roster.",
              },
              {
                icon: Building2,
                title: "Built for property managers",
                body: "Intake, reporting and invoicing shaped around how you work.",
              },
              {
                icon: Zap,
                title: "Everything documented",
                body: "Asset inventory, photos, and service history on every job.",
              },
            ].map((it) => (
              <div key={it.title} className="rounded-lg border border-ink-600 bg-ink-700/40 p-6">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center">
                  <it.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="mt-4 font-semibold text-cream-50">{it.title}</div>
                <div className="mt-2 text-sm text-cream-100/70">{it.body}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/about" className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
              How we run jobs <ArrowRight className="w-4 h-4" />
            </Link>
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
          </div>
          <div>
            <SectionHead
              eyebrow="Comprehensive maintenance"
              title="The cheapest repair is the one that never happens."
              description="Planned, not reactive. Comprehensive maintenance feeds the service history that drives smarter capital planning."
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

      <section className="bg-brand-500 text-white">
        <div className="container-x section">
          <div className="max-w-3xl">
            <div className="eyebrow !text-white/80">What clients say</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 text-white">
              The point of Woola is that you stop chasing trades.
            </h2>
          </div>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
