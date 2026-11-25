import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { SecondOpinionCTA } from "@/components/SecondOpinionCTA";
import { cities, getCity } from "@/lib/cities";
import { cityLocal } from "@/lib/city-local";
import { divisions, getService } from "@/lib/divisions";
import { caseStudies } from "@/lib/case-studies";
import { getPost } from "@/lib/posts";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { DivisionFAQ } from "@/components/DivisionFAQ";
import { site } from "@/lib/site";
import { Phone, Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { metaDescription } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbs, cityService, faqPage } from "@/lib/schema";

type Params = { city: string };

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const c = getCity(params.city);
  if (!c) return {};
  const canonical = `https://woola.ca/service-areas/${c.slug}`;
  const local = cityLocal[c.slug];
  const title = local?.title ?? `${c.name} Building Services`;
  const description = metaDescription(local?.description ?? c.blurb);
  return {
    title: local ? { absolute: `${title} | Woola` } : title,
    description,
    // A city page is indexed only once it has its own local content in
    // lib/city-local.ts. Without that it is the shared template and stays out
    // of the index. See GO-LIVE.md "Index policy".
    ...(local ? {} : { robots: { index: false, follow: true } }),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: `Woola services in ${c.name}` }],
    },
  };
}

export default function CityPage({ params }: { params: Params }) {
  const city = getCity(params.city);
  if (!city) return notFound();
  const local = cityLocal[city.slug];

  // Curated services for this city; the fallback is each division's first two.
  const serviceRefs = local?.services ?? divisions.flatMap((d) => d.services.slice(0, 2).map((s) => `${d.slug}/${s.slug}`));
  const cityServices = serviceRefs.flatMap((ref) => {
    const [d, sv] = ref.split("/");
    const found = getService(d, sv);
    return found ? [found] : [];
  });

  // Projects in this city first, then the multi-city programs.
  const inCity = caseStudies.filter((c) => c.location.startsWith(`${city.name},`));
  const multiCity = caseStudies.filter((c) => c.location.startsWith("Multiple Lower Mainland"));
  const projects = [...inCity, ...multiCity].slice(0, 3);
  const guides = (local?.posts ?? []).flatMap((slug) => {
    const post = getPost(slug);
    return post ? [post] : [];
  });

  // Same region first, so the links point at genuinely nearby cities.
  const nearby = [
    ...cities.filter((c) => c.slug !== city.slug && c.region === city.region),
    ...cities.filter((c) => c.slug !== city.slug && c.region !== city.region),
  ].slice(0, 12);

  return (
    <>
      <JsonLd
        data={[
          cityService(city),
          ...(local ? [faqPage(local.faqs)] : []),
          breadcrumbs([
            { name: "Woola", path: "" },
            { name: "Service Areas", path: "/service-areas" },
            { name: city.name, path: `/service-areas/${city.slug}` },
          ]),
        ]}
      />
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        {/* Drone flyover of the municipality; poster frame holds the space until it plays */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={`/videos/cities/${city.slug}.mp4`}
          poster={`/videos/cities/${city.slug}.jpg`}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-ink-900/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-transparent to-ink-900/95" />
        <div className="container-x pt-20 pb-12 relative">
          <div className="text-sm text-ink-300">
            <Link href="/service-areas" className="hover:text-cream-50">Service Areas</Link>
            <span className="mx-1.5">/</span>
            <span className="text-cream-50">{city.name}</span>
          </div>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="rise eyebrow !text-brand-400">{city.region}</div>
              <h1 className="rise rise-1 mt-3 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] text-cream-50">
                Woola in {city.name}.
              </h1>
              <p className="rise rise-2 mt-5 text-lg md:text-xl text-cream-100/80 max-w-2xl leading-relaxed">{city.blurb}</p>
              <div className="rise rise-3 mt-6 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-ink-800 border border-ink-600 text-cream-100">
                  Pop. {city.population.toLocaleString()}
                </span>
                <span className="px-3 py-1 rounded-full bg-ink-800 border border-ink-600 text-cream-100">
                  Postal: {city.postalPrefix}
                </span>
                <span className="px-3 py-1 rounded-full bg-ink-800 border border-ink-600 text-cream-100">
                  HQ drive: {city.driveTimeMin} min
                </span>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="card p-6">
                <div className="eyebrow">Local dispatch</div>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  Woola trucks run {city.name} routes daily from our Coquitlam shop.
                </p>
                <a href={`tel:${site.phone}`} className="btn btn-primary w-full justify-center mt-5">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link href="/contact" className="btn btn-ghost w-full justify-center mt-2 border hairline">
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {local && (
        <Section>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <SectionHead eyebrow={city.name} title={`Mechanical, electrical and building services in ${city.name}.`} />
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed text-lg">
                {local.overview.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="card p-6 md:p-7">
                <div className="eyebrow">{city.name} at a glance</div>
                <dl className="mt-4 divide-y hairline">
                  {local.glance.map((g) => (
                    <div key={g.label} className="py-3 grid grid-cols-5 gap-3 text-sm">
                      <dt className="col-span-2 text-ink-400">{g.label}</dt>
                      <dd className="col-span-3 text-ink-800 font-medium">{g.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Section>
      )}

      {local && (
        <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
          <div className="grain" />
          <div className="container-x section relative">
            <SectionHead dark eyebrow="Where we work" title={`${city.name} areas and the buildings in them.`} />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {local.areas.map((a) => (
                <div key={a.name} className="card p-5">
                  <h3 className="font-semibold !text-ink-800">{a.name}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {local && (
        <Section>
          <SectionHead
            eyebrow="Permits and local rules"
            title={`What is different about working in ${city.name}.`}
          />
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-8">
            {local.rules.map((r) => (
              <div key={r.title}>
                <h3 className="text-lg font-semibold text-ink-800">{r.title}</h3>
                <p className="mt-2 text-ink-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <section className="bg-brand-500 text-white">
        <div className="container-x section">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="eyebrow !text-white/80">{city.name} focus</div>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-white">
                What {city.name} clients call us for.
              </h2>
              <ul className="mt-8 space-y-3">
                {city.hooks.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-white text-brand-500 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </div>
                    <span className="text-white/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {cityServices.map(({ division, service }) => (
                  <Link key={`${division.slug}-${service.slug}`} href={`/${division.slug}/${service.slug}`} className="card p-5 group">
                    <div className="text-[10px] uppercase tracking-wider text-ink-400">{division.name}</div>
                    <div className="mt-1 font-semibold text-ink-800 group-hover:text-brand-500">{service.name}</div>
                    <p className="mt-2 text-xs text-ink-500 line-clamp-2">{service.description}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {divisions.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/${d.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-white/10 border border-white/25 hover:bg-white hover:text-ink-800 transition"
                  >
                    All {d.name} services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {(projects.length > 0 || guides.length > 0) && (
        <Section>
          {projects.length > 0 && (
            <>
              <SectionHead eyebrow="Work" title="Recent projects." />
              <div className="mt-8 grid md:grid-cols-3 gap-5">
                {projects.map((c) => (
                  <CaseStudyCard key={c.slug} c={c} showDivision compact />
                ))}
              </div>
            </>
          )}
          {guides.length > 0 && (
            <div className={projects.length > 0 ? "mt-16" : ""}>
              <SectionHead eyebrow="Guides" title={`Useful reading for ${city.name} buildings.`} />
              <div className="mt-8 grid md:grid-cols-3 gap-5">
                {guides.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 flex flex-col group">
                    <div className="text-[11px] uppercase tracking-widest text-ink-500">{p.category}</div>
                    <h3 className="mt-2 font-semibold text-ink-800 leading-snug group-hover:text-brand-500 transition line-clamp-3">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed line-clamp-3 flex-1">{p.excerpt}</p>
                    <div className="mt-4 text-xs text-ink-400">{p.readingTime}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Section>
      )}

      {local && (
        <section className="bg-cream-50 border-y hairline">
          <div className="container-x section">
            <SectionHead eyebrow="Common questions" title={`${city.name} questions we get asked.`} />
            <div className="mt-10">
              <DivisionFAQ items={local.faqs} />
            </div>
          </div>
        </section>
      )}

      <SecondOpinionCTA />

      <Section>
        <SectionHead eyebrow="Nearby" title="Other cities we serve." />
        <div className="mt-8 flex flex-wrap gap-2">
          {nearby.map((c) => (
            <Link
              key={c.slug}
              href={`/service-areas/${c.slug}`}
              className="text-sm px-3 py-1.5 rounded-full bg-cream-100 border hairline hover:bg-ink-800 hover:text-cream-50 transition"
            >
              {c.name}
            </Link>
          ))}
          <Link href="/service-areas" className="text-sm px-3 py-1.5 rounded-full bg-ink-800 text-cream-50">
            View all →
          </Link>
        </div>
        {local && (
          <div className="mt-14 pt-8 border-t hairline">
            <div className="eyebrow">Sources</div>
            <p className="mt-3 text-sm text-ink-500 max-w-3xl">
              The permit, bylaw and utility details on this page come from the public sources below, checked in{" "}
              {local.checked}. Bylaws change, so confirm with the authority before you rely on a date or a number.
            </p>
            <ul className="mt-4 grid md:grid-cols-2 gap-x-10 gap-y-2 text-sm">
              {local.sources.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-ink-600 underline decoration-ink-200 underline-offset-4 hover:text-brand-500">
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <CTABanner
        title={`A coordinator for ${city.name}, not a 1-800 number.`}
        description={`Your job is run by a dispatcher who knows ${city.name} routes, parts suppliers, and permit windows.`}
      />
    </>
  );
}
