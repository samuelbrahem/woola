import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SiteIntro } from "@/components/SiteIntro";
import { AudienceSplit } from "@/components/AudienceSplit";
import { SectionHead } from "@/components/Section";
import { DivisionExplorer } from "@/components/DivisionExplorer";
import { CountUp } from "@/components/CountUp";
import { GoogleG } from "@/components/Testimonials";
import { googleListingUrl } from "@/lib/reviews";
import { CTABanner } from "@/components/CTABanner";
import { BuildingXray } from "@/components/BuildingXray";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import Image from "next/image";
import { ArrowRight, Building2, Wrench, Zap, MapPin, ClipboardCheck } from "lucide-react";

const ACCREDITATIONS = [
  { src: "logo-worksafe-bc", name: "WorkSafeBC" },
  { src: "logo-teca", name: "TECA Quality First" },
  { src: "logo-boma", name: "BOMA BC" },
  { src: "logo-pama-member", name: "PAMA member" },
  { src: "logo-cci-bc", name: "CCI British Columbia" },
  { src: "logo-asttbc", name: "ASTTBC" },
];

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            '(function(){try{if(!sessionStorage.getItem("woola-intro-seen")&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("intro-pending");}}catch(e){}})();',
        }}
      />
      <SiteIntro />
      <div className="hero-reveal overflow-hidden">
        <HeroCarousel />
      </div>

      {/* Accreditation bar: logos large enough to recognize (Brett: the old
          thumbnail strip was unreadable). */}
      <section className="bg-cream-100 border-b hairline">
        <div className="container-x py-7 md:py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
          <div className="shrink-0 lg:w-52">
            <div className="eyebrow">Associations</div>
            <Link href="/about/credentials" className="mt-1 inline-block text-sm font-medium text-ink-800 hover:text-brand-500">
              All associations →
            </Link>
          </div>
          <ul className="flex-1 flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
            {ACCREDITATIONS.map((l) => (
              <li key={l.src} className="flex items-center">
                <Image
                  src={`/brand/accred/${l.src}.png`}
                  alt={l.name}
                  width={220}
                  height={120}
                  className="h-12 md:h-14 w-auto max-w-[200px] object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are: photo-led, stats on the image, one paragraph + three
          proof points instead of a wall of copy. Brett is supplying final text. */}
      <section className="bg-cream-50 border-b hairline overflow-hidden">
        <div className="container-x py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-ink-800 shadow-soft">
                <Image
                  src="/field/01-08-2025-surrey-mech-37.jpg"
                  alt="Woola Mechanical technicians in a boiler room"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {site.stats.map((st) => (
                    <div key={st.label} className="rounded-xl bg-brand-500/95 backdrop-blur text-white px-3.5 py-3">
                      <div className="text-2xl md:text-[1.75rem] font-semibold leading-none">
                        <CountUp value={st.value} />
                      </div>
                      <div className="mt-1.5 text-[10px] uppercase tracking-wider text-white/85 leading-tight">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="eyebrow">Who we are</div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-ink-800 leading-tight">
                Four divisions, working as one team.
              </h2>
              <p className="mt-5 text-lg text-ink-700 leading-relaxed">
                Woola is a Coquitlam-based building services group with four divisions under one
                roof: Mechanical, Power, Electrical, and Build. Your property manager calls one
                dispatcher, the work goes on one PO, and the same team is answerable for all of it.
              </p>
              <ul className="mt-7 grid sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: Wrench,
                    t: "Our own trades",
                    b: "Red Seal, gas-ticketed, and FSR-certified technicians on our own team.",
                  },
                  {
                    icon: ClipboardCheck,
                    t: "Every visit documented",
                    b: "Photos, asset histories, and condition notes you can use for capital planning.",
                  },
                  {
                    icon: Building2,
                    t: "Towers to townhomes",
                    b: "Strata, commercial portfolios, and the house you come home to.",
                  },
                ].map((it) => (
                  <li key={it.t} className="border-l-2 border-brand-500 pl-4">
                    <it.icon className="w-5 h-5 text-brand-500" strokeWidth={1.5} />
                    <div className="mt-2 text-sm font-semibold text-ink-800">{it.t}</div>
                    <p className="mt-1 text-sm text-ink-500 leading-relaxed">{it.b}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary">
                  About Woola <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about/credentials" className="btn btn-ghost">
                  Our credentials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudienceSplit />

      {/* What we do: its own tinted band so it reads as a new section
          instead of running into the X-ray below. */}
      <section className="bg-cream-100 border-b hairline">
        <div className="container-x py-16 md:py-20">
          <SectionHead
            eyebrow="What we do"
            title="Every system a building depends on. One team behind all of it."
          />
          <div className="mt-10">
            <DivisionExplorer />
          </div>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-x py-16 md:py-20">
          <SectionHead
            eyebrow="Interactive · Building X-Ray"
            title="See what typically wears out first."
            description="Adjust the building age to see typical equipment lifespans and when major systems may need attention."
          />
          <div className="mt-10">
            <BuildingXray />
          </div>
          <div className="mt-8 text-center">
            <Link href="/know-your-building" className="btn btn-outline">
              How we document real buildings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Woola model + property-manager CTA, one dark band. The coverage
          map moved to /service-areas (linked below) to shorten the page. */}
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <SectionHead
                eyebrow="The Woola model"
                title="Every trade. One team. One call."
                description="Four divisions. One dispatcher. One accountable PO across every job."
                dark
              />
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/property-managers" className="btn btn-brand text-base">
                For property managers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
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
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/about" className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
              How we run jobs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/service-areas" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:underline">
              <MapPin className="w-4 h-4" /> {cities.length} municipalities, Abbotsford to Whistler →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-x py-16 md:py-20">
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
              title="Planned maintenance gives you fewer surprises."
              description="A maintenance program keeps a service history for every asset, which is what makes capital planning possible."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Custom maintenance calendar per building and asset",
                "Compliance handled: backflow, CSA C282, fire-safety coordination",
                "Photo-documented visits your council can review",
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
        </div>
      </section>

      <section className="bg-brand-500 text-white">
        <div className="container-x py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="eyebrow !text-white/80">Reviews</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 text-white">
                Read what clients say on Google.
              </h2>
            </div>
            <a
              href={googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink-800 pl-3 pr-4 py-2 text-sm font-medium hover:bg-cream-100 transition"
            >
              <GoogleG className="w-5 h-5" /> See our Google reviews →
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
