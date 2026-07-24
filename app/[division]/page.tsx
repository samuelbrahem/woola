import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { divisions, getDivision, lowerName } from "@/lib/divisions";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { DivisionFAQ } from "@/components/DivisionFAQ";
import { DivisionWordmark } from "@/components/DivisionWordmark";
import { LogoMarquee } from "@/components/LogoMarquee";
import { CountUp } from "@/components/CountUp";
import {
  ArrowRight,
  Phone,
  Mail,
  Check,
  Quote,
  ShieldCheck,
  CalendarClock,
  Sparkles,
  Building2,
  Clock,
  MapPin,
  Play,
} from "lucide-react";
import { cities } from "@/lib/cities";
import type { Metadata } from "next";

type Params = { division: string };

export async function generateStaticParams() {
  return divisions.map((d) => ({ division: d.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const d = getDivision(params.division);
  if (!d) return {};
  const canonical = `https://woola.ca/${d.slug}`;
  const title = `${d.name} | ${d.subtitle}`;
  return {
    title,
    description: d.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: d.description,
      url: canonical,
      type: "website",
      images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: d.name }],
    },
  };
}

export default function DivisionPage({ params }: { params: Params }) {
  const division = getDivision(params.division);
  if (!division) return notFound();

  const featuredCities = cities.slice(0, 16);

  return (
    <>
      {/* Hero — dark, full-height image/video background, matches main-site style */}
      <section className="relative w-full overflow-hidden bg-ink-900 text-cream-50">
        <div className="relative min-h-[calc(100vh-5rem)]">
          {/* Background media */}
          {division.video ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={division.video}
              poster={division.heroImage}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={division.heroImage}
              alt={division.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/70 to-ink-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-5rem)]">
            <div className="lg:col-span-7">
              <div className="eyebrow !text-brand-400">Division · {division.subtitle}</div>
              <h1 className="mt-5">
                <span className="sr-only">{division.name}: {division.subtitle}</span>
                <DivisionWordmark division={division} size="lg" priority invert />
              </h1>
              <p className="mt-6 script text-brand-400 text-4xl md:text-5xl leading-none">
                {division.tagline}
              </p>
              <p className="mt-7 text-lg text-cream-100/85 max-w-xl leading-relaxed">
                {division.intro}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {division.heroKeywords.map((k) => (
                  <span
                    key={k}
                    className="text-xs px-3 py-1.5 rounded-full bg-cream-50/10 backdrop-blur-sm border border-cream-50/20 text-cream-100"
                  >
                    {k}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-brand text-base">
                  Book a property assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${division.contactPhone}`}
                  className="btn text-base border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800"
                >
                  <Phone className="w-4 h-4" /> {division.contactPhone}
                </a>
              </div>
            </div>

            {/* Direct dispatch card */}
            <div className="lg:col-span-5">
              <div className="card p-7 bg-white/95 backdrop-blur-md">
                <div className="flex items-center gap-2 text-brand-500">
                  <Sparkles className="w-4 h-4" />
                  <div className="eyebrow !text-brand-500">Direct dispatch</div>
                </div>
                <div className="mt-3 text-3xl font-bold tracking-tight text-ink-800">
                  {division.contactPhone}
                </div>
                <a
                  href={`mailto:${division.contactEmail}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-700"
                >
                  <Mail className="w-3.5 h-3.5" /> {division.contactEmail}
                </a>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${division.contactPhone}`}
                    className="btn btn-primary justify-center"
                  >
                    <Phone className="w-4 h-4" /> Call now
                  </a>
                  <a
                    href={`mailto:${division.contactEmail}`}
                    className="btn btn-ghost justify-center"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t hairline grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5 text-brand-500" />
                    <div>
                      <div className="font-medium text-ink-800">Mon–Fri</div>
                      <div className="text-ink-500 text-xs">7:00 AM – 5:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-0.5 text-brand-500" />
                    <div>
                      <div className="font-medium text-ink-800">24/7 emergency</div>
                      <div className="text-ink-500 text-xs">Contracted clients</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 card p-5 !bg-ink-900/80 backdrop-blur-md !border-ink-700 text-cream-50">
                <div className="flex items-start gap-3">
                  <CalendarClock className="w-5 h-5 mt-0.5 text-brand-400 shrink-0" />
                  <div>
                    <div className="eyebrow !text-brand-400">This quarter</div>
                    <div className="text-sm text-cream-100 mt-1.5">
                      Now accepting Q3 maintenance contracts. Lock in pricing before September renewal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!division.video && (
            <div className="absolute bottom-4 right-6 z-10 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-cream-100/50">
              <Play className="w-3 h-3" /> Video banner slot
            </div>
          )}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x py-14 md:py-16 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {division.stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-cream-50">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 text-sm font-medium text-cream-100">{s.label}</div>
                {s.sub && (
                  <div className="mt-1 text-xs text-cream-100/60">{s.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <div id="services" />
        <SectionHead
          eyebrow="What we do"
          title={`Every ${division.name.split(" ").slice(1).join(" ").toLowerCase()} service, one dispatcher.`}
          description="Each service ships with its own scope, certifications and reporting, but everything is coordinated and invoiced under a single PO."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {division.services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/${division.slug}/${s.slug}`}
                className="card p-8 flex flex-col group relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-md bg-ink-800 text-cream-50 flex items-center justify-center group-hover:bg-brand-500 transition">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-ink-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mt-6 text-ink-800 tracking-tight">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                    {s.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-ink-700">
                        <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" strokeWidth={2} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t hairline flex items-center justify-between text-sm">
                    <span className="text-ink-500">Read the {lowerName(s.name)} brief</span>
                    <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Featured work */}
      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <div id="featured" />
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHead
              eyebrow="Recent work"
              title="Signature projects."
              description={`A snapshot of ${division.name.split(" ").slice(1).join(" ").toLowerCase()} jobs we've shipped in the past 18 months.`}
            />
            <Link
              href="/contact"
              className="text-sm font-medium text-ink-800 hover:text-brand-500"
            >
              Request a full portfolio →
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {division.featured.map((p) => (
              <article
                key={p.title}
                className="card flex flex-col h-full bg-white overflow-hidden group"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-ink-100">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-800/40 via-transparent to-transparent"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase bg-ink-800/80 text-cream-50 px-2 py-1 rounded backdrop-blur">
                      Case study
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="eyebrow">{p.tag}</div>
                  <h3 className="text-xl font-bold text-ink-800 mt-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
                    {p.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & equipment */}
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div id="brands" />
        <div className="container-x section relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="eyebrow !text-brand-400">Brands we service</div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-cream-50">
              Factory-trained. Not brand-loyal.
            </h2>
            <p className="mt-4 text-cream-100/75">
              Our techs carry the training and diagnostic tools for the gear that actually shows up
              in BC buildings. Don&apos;t see yours? Ask.
            </p>
          </div>
          <div className="mt-12">
            <LogoMarquee items={division.brands} invert />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <div id="process" />
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="How we run it"
                title={`The ${division.name.split(" ").slice(1).join(" ")} delivery model.`}
                dark
              />
              <p className="mt-6 text-ink-200 text-sm leading-relaxed">
                Every contract follows the same four-step rhythm so property managers know
                what to expect, and so our techs don't waste a truck-roll.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ol className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    t: "Walk-through & condition report",
                    b: "We document the existing systems, capture asset photos and tag risks. A condition report lands in your inbox within 48 hours.",
                  },
                  {
                    t: "Scoped proposal, fixed-price where we can",
                    b: "Where the work is well-defined, we hold a fixed price. Where it isn't, we publish unit rates so there's no end-of-job surprise.",
                  },
                  {
                    t: "Scheduled work with one coordinator",
                    b: "Your dispatcher handles permits, parts, sub-trades and timing. You get a single text thread, not five.",
                  },
                  {
                    t: "Photo-documented close-out",
                    b: "Every job closes with before/after photos, equipment serial numbers, and renewal dates, all stored in the asset registry.",
                  },
                ].map((step, i) => (
                  <li
                    key={step.t}
                    className="rounded-md border border-ink-600 p-6 bg-ink-700/40 hover:border-brand-400 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-brand-500 text-cream-50 flex items-center justify-center text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-base font-semibold text-cream-50">
                        {step.t}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ink-200 leading-relaxed">{step.b}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHead
            eyebrow="Credentials"
            title="Audited, ticketed, and on the list."
            description={`The ${division.name.split(" ").slice(1).join(" ")} team carries the certifications property managers, strata councils and insurers look for.`}
          />
        </div>
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4">
          {division.certLogos.map((c) => (
            <div
              key={c}
              className="card p-5 flex items-center justify-center bg-white aspect-[3/2]"
            >
              <Image
                src={`/brand/${c}.png`}
                alt={`${c.replace("logo-", "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())} certification`}
                width={180}
                height={120}
                className="max-h-16 w-auto opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-10 h-10 text-brand-500 mx-auto" strokeWidth={1.5} />
            <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-medium text-ink-800 leading-snug tracking-tight">
              &ldquo;{division.testimonial.quote}&rdquo;
            </p>
            <div className="mt-8 inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ink-800 text-cream-50 flex items-center justify-center font-semibold text-sm">
                {division.testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-ink-800">
                  {division.testimonial.author}
                </div>
                <div className="text-xs text-ink-500">
                  {division.testimonial.role} · {division.testimonial.org}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div id="faq" />
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <SectionHead
              eyebrow="Frequently asked"
              title={`Quick answers about ${division.name.split(" ").slice(1).join(" ").toLowerCase()}.`}
              description="Don't see your question? Email the division directly."
            />
            <a
              href={`mailto:${division.contactEmail}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
            >
              <Mail className="w-4 h-4" /> {division.contactEmail}
            </a>
          </div>
          <div className="lg:col-span-8">
            <DivisionFAQ items={division.faqs} />
          </div>
        </div>
      </Section>

      {/* Coverage strip */}
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden border-t hairline">
        <div className="container-x py-14 relative">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
            <div>
              <div className="eyebrow !text-brand-400">Coverage</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-cream-50">
                Dispatched daily across {cities.length}+ municipalities.
              </h3>
            </div>
            <Link
              href="/service-areas"
              className="text-sm font-medium text-cream-100 hover:text-brand-400 inline-flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4" /> See coverage map →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {featuredCities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="text-xs px-3 py-1.5 rounded-full border border-ink-600 text-cream-100 hover:border-brand-400 hover:text-brand-400 transition"
              >
                {c.name}
              </Link>
            ))}
            <span className="text-xs px-3 py-1.5 text-cream-100/60">
              + {cities.length - featuredCities.length} more
            </span>
          </div>
        </div>
      </section>

      <FleetStrip />

      {/* Final CTA */}
      <div id="contact" />
      <CTABanner
        title={`Talk to ${division.name}.`}
        description="Send us your building list and we'll come back with a coverage plan, response times, and a proposed maintenance scope."
      />
    </>
  );
}
