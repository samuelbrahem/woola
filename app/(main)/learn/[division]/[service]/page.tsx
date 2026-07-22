import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { divisions, getService, lowerName } from "@/lib/divisions";
import { ArrowRight, BookOpen } from "lucide-react";

type Params = { division: string; service: string };

export async function generateStaticParams() {
  return divisions.flatMap((d) =>
    d.services.map((s) => ({ division: d.slug, service: s.slug }))
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const found = getService(params.division, params.service);
  if (!found) return {};
  const title = `What is ${found.service.name}? | Learning Hub`;
  return {
    title,
    description: found.service.primer.what.slice(0, 155),
    alternates: { canonical: `https://woola.ca/learn/${found.division.slug}/${found.service.slug}` },
  };
}

export default function LearnServicePage({ params }: { params: Params }) {
  const found = getService(params.division, params.service);
  if (!found) return notFound();
  const { division, service } = found;

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-16 pb-12">
          <div className="text-sm text-ink-400">
            <Link href="/learn" className="hover:text-ink-700">Learning Hub</Link>
            <span className="mx-1.5">/</span>
            <span className="text-ink-700">{service.name}</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-brand-500">
            <BookOpen className="w-4 h-4" strokeWidth={1.75} />
            <div className="eyebrow !text-brand-500">Plain-English primer</div>
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink-800 leading-tight max-w-3xl">
            What is {lowerName(service.name)}?
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-md aspect-[4/3] bg-ink-100 border hairline">
              <Image
                src={service.primer.image}
                alt={service.primer.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-2 text-xs text-ink-400 text-right">
              Photo: {service.primer.imageCredit}
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-lg text-ink-600 leading-relaxed">{service.primer.what}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${division.slug}/${service.slug}`} className="btn btn-primary">
                {service.name} services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/equipment" className="btn btn-ghost border hairline">
                Equipment library
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {service.primer.parts.length > 0 && (
        <section className="bg-cream-100 border-y hairline">
          <div className="container-x section">
            <SectionHead
              eyebrow="Glossary"
              title="Parts & terms worth knowing."
              description="The vocabulary that comes up in quotes and site visits, explained in plain English."
            />
            <dl className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.primer.parts.map((p) => (
                <div key={p.term} className="card p-5 bg-white">
                  <dt className="font-semibold text-ink-800 text-sm">{p.term}</dt>
                  <dd className="mt-1.5 text-sm text-ink-600 leading-relaxed">{p.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <CTABanner
        title={`Ready to book ${lowerName(service.name)}?`}
        description="Now that you speak the language, tell us about the property and we'll get a coordinator in touch within one business day."
      />
    </>
  );
}
