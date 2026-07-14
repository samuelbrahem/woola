import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { Calculator } from "@/components/Calculator";
import { cities, getCity } from "@/lib/cities";
import { divisions } from "@/lib/divisions";
import { Clock, Users, MapPin, Phone, Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type Params = { city: string };

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const c = getCity(params.city);
  if (!c) return {};
  const canonical = `https://woola.ca/service-areas/${c.slug}`;
  const title = `${c.name} | Mechanical, Electrical & Building Services`;
  return {
    title,
    description: c.blurb,
    alternates: { canonical },
    openGraph: {
      title,
      description: c.blurb,
      url: canonical,
      type: "website",
      images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: `Woola services in ${c.name}` }],
    },
  };
}

export default function CityPage({ params }: { params: Params }) {
  const city = getCity(params.city);
  if (!city) return notFound();

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-20 pb-12">
          <div className="text-sm text-ink-400">
            <Link href="/service-areas" className="hover:text-ink-700">Service Areas</Link>
            <span className="mx-1.5">/</span>
            <span className="text-ink-700">{city.name}</span>
          </div>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow">{city.region}</div>
              <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] text-ink-800">
                Woola in {city.name}.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed">{city.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-cream-100 border hairline text-ink-700">
                  Pop. {city.population.toLocaleString()}
                </span>
                <span className="px-3 py-1 rounded-full bg-cream-100 border hairline text-ink-700">
                  Postal: {city.postalPrefix}
                </span>
                <span className="px-3 py-1 rounded-full bg-cream-100 border hairline text-ink-700">
                  HQ drive: {city.driveTimeMin} min
                </span>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="card p-6">
                <div className="eyebrow">Local response</div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <Metric icon={Clock} label="Response" value={`${city.responseHours} hr`} />
                  <Metric icon={Users} label="Techs" value={String(city.techsAssigned)} />
                  <Metric icon={MapPin} label="From HQ" value={`${city.driveTimeMin}m`} />
                </div>
                <Link href="/contact" className="btn btn-primary w-full justify-center mt-5">
                  Book in {city.name} <Phone className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <SectionHead
              eyebrow={`${city.name} focus`}
              title={`What ${city.name} clients call us for.`}
            />
            <ul className="mt-8 space-y-3">
              {city.hooks.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-ink-800 text-cream-50 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-ink-700">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Divisions" title={`All four divisions cover ${city.name}.`} />
            <div className="mt-8 space-y-3">
              {divisions.map((d) => (
                <Link
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="flex items-center justify-between card p-5 group"
                >
                  <div>
                    <div className="text-xs text-ink-400 uppercase tracking-wider">{d.subtitle}</div>
                    <div className="font-semibold text-ink-800 mt-0.5">{d.name}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-ink-800" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <SectionHead
            eyebrow={`${city.name} services`}
            title="Most-requested services in this city."
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {divisions.flatMap((d) =>
              d.services.map((s) => (
                <Link
                  key={`${d.slug}-${s.slug}`}
                  href={`/${d.slug}/${s.slug}`}
                  className="card p-5 group"
                >
                  <div className="text-[10px] uppercase tracking-wider text-ink-400">{d.name}</div>
                  <div className="mt-1 font-semibold text-ink-800 group-hover:text-ink-600">
                    {s.name} in {city.name}
                  </div>
                  <p className="mt-2 text-xs text-ink-500 line-clamp-2">{s.description}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow={`${city.name} estimator`}
          title="Estimate your project in this market."
          description="The estimator uses BC averages. Local crew rates and any city-specific permit fees are layered in at the in-home visit."
        />
        <div className="mt-10">
          <Calculator />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Nearby" title="Other cities we serve." />
        <div className="mt-8 flex flex-wrap gap-2">
          {cities
            .filter((c) => c.slug !== city.slug)
            .slice(0, 12)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="text-sm px-3 py-1.5 rounded-full bg-cream-100 border hairline hover:bg-ink-800 hover:text-cream-50 transition"
              >
                {c.name}
              </Link>
            ))}
          <Link
            href="/service-areas"
            className="text-sm px-3 py-1.5 rounded-full bg-ink-800 text-cream-50"
          >
            View all →
          </Link>
        </div>
      </Section>

      <CTABanner
        title={`A coordinator for ${city.name}, not a 1-800 number.`}
        description={`Your job is run by a dispatcher who knows ${city.name} routes, parts suppliers, and permit windows.`}
      />
    </>
  );
}

function Metric({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1 text-ink-400">
        <Icon className="w-3 h-3" strokeWidth={1.6} />
        <span className="uppercase tracking-wider text-[10px]">{label}</span>
      </div>
      <div className="font-semibold text-ink-800 mt-0.5 text-sm">{value}</div>
    </div>
  );
}
