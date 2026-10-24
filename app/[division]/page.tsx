import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { divisions, getDivision, topLevelServices } from "@/lib/divisions";

type TriageOption = {
  label: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  /** Field photo behind the card. */
  image: string;
  alt: string;
};

const TRIAGE: Record<string, TriageOption[]> = {
  mechanical: [
    {
      label: "Fix",
      title: "Need something repaired?",
      body: "No heat, a leak, a failed rooftop unit, a backed-up drain. Tell dispatch what's happening.",
      href: "/contact",
      cta: "Request a repair",
      image: "/field/11-01-2024-woola-and-dispatch-5.jpg",
      alt: "Woola technician diagnosing a rooftop condenser fan",
    },
    {
      label: "Replace",
      title: "Planning a replacement?",
      body: "Boilers, RTUs, chillers, piping. We scope, price, and schedule the replacement with the building's calendar in mind.",
      href: "/mechanical/retrofits",
      cta: "Plan a replacement",
      image: "/field/07-03-2024-crane-26.jpg",
      alt: "Crane lifting a replacement rooftop unit",
    },
    {
      label: "Maintain",
      title: "Looking for preventative maintenance?",
      body: "Scheduled inspections and condition reports for every mechanical system in the building.",
      href: "/mechanical/preventative-maintenance",
      cta: "See maintenance programs",
      image: "/field/10-25-2024-mattmatt-22.jpg",
      alt: "Woola technician reviewing a maintenance checklist on site",
    },
  ],
  power: [
    {
      label: "Fix",
      title: "Generator not starting or in alarm?",
      body: "No-start, alarm fault, failed test, or an outage running long. Get a technician on it.",
      href: "/power/repairs-troubleshooting",
      cta: "Get it diagnosed",
      image: "/equipment/generators/batteries.jpg",
      alt: "Generator starting batteries",
    },
    {
      label: "Replace",
      title: "Replacing or adding a generator?",
      body: "Replacement, retrofit, or a new installation, managed from concrete pad to commissioning.",
      href: "/power/generators",
      cta: "Scope a replacement",
      image: "/brand/field-generator-delivery.webp",
      alt: "Standby generator being delivered to site",
    },
    {
      label: "Maintain",
      title: "Need annual testing and inspections?",
      body: "CSA C282 inspections, load-bank testing, fuel care, and the annual report your insurer asks for.",
      href: "/power/maintenance-inspections",
      cta: "See maintenance programs",
      image: "/equipment/generators/load-bank.jpg",
      alt: "Portable load bank at a generator test",
    },
  ],
  electrical: [
    {
      label: "Fix",
      title: "Have an electrical fault?",
      body: "Tripping breakers, dead circuits, common-area faults. Book a service call.",
      href: "/contact",
      cta: "Request a service call",
      image: "/equipment/electrical/panelboard.jpg",
      alt: "Commercial electrical panelboard",
    },
    {
      label: "Upgrade",
      title: "Upgrading service, lighting, or adding EV charging?",
      body: "Panel and service upgrades, EV charging, LED retrofits, tenant fit-outs.",
      href: "/electrical/panel-upgrades",
      cta: "Plan an upgrade",
      image: "/equipment/ev-chargers/networked-station.jpg",
      alt: "Networked EV charging station in a parkade",
    },
    {
      label: "Maintain",
      title: "Want an inspection program?",
      body: "Inspection programs and infrared scans that find hot spots before they fail.",
      href: "/electrical/infrared-scanning",
      cta: "See inspection options",
      image: "/equipment/electrical/switchgear.jpg",
      alt: "Electrical switchgear inspection",
    },
  ],
  build: [
    {
      label: "Fix",
      title: "Need a repair done?",
      body: "Doors, leaks, damage, and the running small-jobs list. Same-week dispatch for contracted buildings.",
      href: "/build/property-services",
      cta: "Send the list",
      image: "/equipment/construction/door-hardware.jpg",
      alt: "Commercial door hardware repair",
    },
    {
      label: "Build",
      title: "Planning a renovation or fit-out?",
      body: "Tenant improvements, amenity rebuilds, and envelope projects with one PM.",
      href: "/build/construction",
      cta: "Start a project",
      image: "/primers/construction.jpg",
      alt: "Interior construction in progress",
    },
    {
      label: "Maintain",
      title: "Looking for a building maintenance package?",
      body: "Quarterly and annual packages covering roof, parkade, common areas, and life safety.",
      href: "/build/maintenance",
      cta: "See maintenance packages",
      image: "/primers/envelope.jpg",
      alt: "Building envelope and roof maintenance",
    },
  ],
};
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { DivisionFAQ } from "@/components/DivisionFAQ";
import { LogoMarquee } from "@/components/LogoMarquee";
import { CredentialsReveal } from "@/components/CredentialsReveal";
import { GoogleG } from "@/components/Testimonials";
import { googleListingFor } from "@/lib/reviews";
import { ServiceMap } from "@/components/ServiceMap";
import { ScrollyServices } from "@/components/ScrollyServices";
import {
  ArrowRight,
  Phone,
  Mail,
  Check,
  Building2,
  MapPin,
  Play,
} from "lucide-react";
import { cities } from "@/lib/cities";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbs, faqPage } from "@/lib/schema";

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
      <JsonLd
        data={[
          faqPage(division.faqs),
          breadcrumbs([
            { name: "Woola", path: "" },
            { name: division.name, path: `/${division.slug}` },
          ]),
        ]}
      />
      {/* Hero: dark, full-height image/video background, matches main-site style */}
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
          {/* Shade the left where the copy sits; leave the right side open so the footage (crews, Woola shirts) reads. */}
          <div className="absolute inset-0 bg-ink-900/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/90" />

          {/* Content */}
          <div className="relative container-x py-20 md:py-28 flex items-center min-h-[calc(100vh-5rem)]">
            <div className="max-w-3xl text-left">
              <div className="rise eyebrow !text-[color:var(--brand-on-dark)]">Division · {division.subtitle}</div>
              <h1 className="rise rise-1 mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream-50 leading-[1.05]">
                {division.name}
              </h1>
              <p className="rise rise-2 mt-4 text-xl md:text-2xl font-medium text-cream-100/90 leading-snug">
                {division.tagline}
              </p>
              <p className="rise rise-3 mt-6 text-lg text-cream-100/85 max-w-2xl leading-relaxed">
                {division.intro}
              </p>
              <div className="rise rise-4 mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-on-dark text-base">
                  Book a property assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${division.contactPhone}`}
                  className="btn text-base border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800"
                >
                  <Phone className="w-4 h-4" /> {division.contactPhone}
                </a>
              </div>
              <div className="mt-4 text-sm text-cream-100/70">
                Homeowner?{" "}
                <Link href="/residential" className="text-[color:var(--brand-on-dark)] hover:underline">
                  Visit Woola Residential →
                </Link>
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

      {/* Fix / Replace / Maintain triage: photo-backed cards so the three
          doors into the division carry the field, not just a label. */}
      {(TRIAGE[division.slug] ?? []).length > 0 && (
        <section className="bg-cream-50 border-b hairline">
          <div className="container-x py-8 md:py-10">
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {TRIAGE[division.slug].map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="group relative overflow-hidden rounded-2xl min-h-[300px] md:min-h-[360px] flex flex-col justify-end text-cream-50 bg-ink-800 ring-1 ring-ink-900/10 shadow-soft"
                >
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/55 to-ink-900/15"
                  />
                  <div className="absolute top-5 left-5 right-5">
                    <span className="inline-flex items-center rounded-full bg-cream-50/95 text-ink-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                      {t.label}
                    </span>
                  </div>
                  <div className="relative p-6 md:p-7">
                    <h2 className="text-2xl md:text-[1.65rem] font-semibold tracking-tight leading-tight text-cream-50 min-h-[2.4em] flex items-end">
                      {t.title}
                    </h2>
                    <p className="mt-2 text-sm text-cream-100/80 leading-relaxed max-w-sm min-h-[4.5em] line-clamp-3">{t.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--brand-on-dark)] group-hover:gap-2.5 transition-all">
                      {t.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brands we service: a slim bar high on the page so visitors can spot
          their own equipment's manufacturer before they scroll. */}
      <section className="bg-cream-100 border-b hairline">
        <div id="brands" />
        <div className="container-x py-4 md:py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
          <div className="shrink-0 md:w-56">
            <div className="eyebrow">{division.slug === "build" ? "Products and systems we work with" : "Brands we service"}</div>
          </div>
          <div className="flex-1 min-w-0">
            <LogoMarquee items={division.brands} size="sm" />
          </div>
        </div>
      </section>

      {/* Services */}
      <div id="services" />
      <ScrollyServices division={division.slug} />

      {/* Featured work */}
      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <div id="featured" />
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHead
              eyebrow="Recent work"
              title="Recent projects."
              description={`${division.name.split(" ").slice(1).join(" ")} work completed in the past 18 months.`}
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

      {/* Process */}
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <div id="process" />
          <SectionHead
            eyebrow="How we run it"
            title="How a job runs."
            description="The same four steps on every contract, so you know what to expect before the truck arrives."
            dark
          />
          <div className="mt-12">
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                    b: "Your dispatcher handles permits, parts, all trades and timing. You get a single text thread and a named coordinator, not five phone numbers.",
                  },
                  {
                    t: "Photo-documented close-out and end report",
                    b: "Every job closes with before/after photos, equipment serial numbers, and renewal dates, all stored in the asset registry.",
                  },
              ].map((step) => (
                <li
                  key={step.t}
                  className="rounded-md border border-ink-600 p-6 bg-ink-700/40 hover:border-[color:var(--brand-on-dark)] transition flex flex-col"
                >
                  <div className="text-base font-semibold text-cream-50">
                    {step.t}
                  </div>
                  <p className="mt-2 text-sm text-ink-200 leading-relaxed">{step.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Section>
        <SectionHead
          eyebrow="Credentials"
          title="Certifications and memberships."
          align="center"
        />
        <CredentialsReveal items={division.certLogos} />
      </Section>

      {/* Reviews: link to the division's Google listing instead of placeholder quotes */}
      <section className="bg-brand-500 text-white">
        <div className="container-x py-14 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="eyebrow !text-white/80">Reviews</div>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-white">
                Read what clients say about {division.name} on Google.
              </h2>
            </div>
            <a
              href={googleListingFor(division.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink-800 pl-3 pr-4 py-2 text-sm font-medium hover:bg-cream-100 transition"
            >
              <GoogleG className="w-5 h-5" /> See our Google reviews →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div id="faq" />
        <SectionHead
          eyebrow="Frequently asked"
          title="Common questions."
          description="Not covered here? Email the division directly."
        />
        <a
          href={`mailto:${division.contactEmail}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
        >
          <Mail className="w-4 h-4" /> {division.contactEmail}
        </a>
        <div className="mt-10">
          <DivisionFAQ items={division.faqs} />
        </div>
      </Section>

      {/* Coverage strip */}
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden border-t hairline">
        <div className="container-x py-14 relative">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="eyebrow !text-[color:var(--brand-on-dark)]">Coverage</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-cream-50">
                Dispatched daily across {cities.length}+ municipalities.
              </h3>
            </div>
            <Link
              href="/service-areas"
              className="text-sm font-medium text-cream-100 hover:text-[color:var(--brand-on-dark)] inline-flex items-center gap-1.5 shrink-0"
            >
              <MapPin className="w-4 h-4" /> See coverage map →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {featuredCities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="text-xs px-3 py-1.5 rounded-full border border-ink-600 text-cream-100 hover:border-[color:var(--brand-on-dark)] hover:text-[color:var(--brand-on-dark)] transition"
              >
                {c.name}
              </Link>
            ))}
            <span className="text-xs px-3 py-1.5 text-cream-100/60">
              + {cities.length - featuredCities.length} more
            </span>
          </div>
          <div className="mt-8">
            <ServiceMap height={380} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div id="contact" />
      <CTABanner
        title={`Talk to ${division.name}.`}
        description="Send us your building list and we'll come back with a coverage plan, response times, and a proposed maintenance scope."
      />
    </>
  );
}
