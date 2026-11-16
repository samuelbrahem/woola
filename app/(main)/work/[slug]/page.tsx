import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbs } from "@/lib/schema";
import { caseStudies, divisionLabel, getCaseStudy, moreCaseStudies } from "@/lib/case-studies";
import { ArrowRight, ArrowLeft, Check, MapPin } from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  const description = `${divisionLabel[c.division]} case study, ${c.location}. ${c.highlights.join(". ")}.`;
  return {
    title: `${c.title} | Case Study`,
    description,
    alternates: { canonical: `https://woola.ca/work/${c.slug}` },
    openGraph: { title: c.title, description, images: [{ url: c.cover }] },
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const companion = c.companion ? getCaseStudy(c.companion) : undefined;
  const more = moreCaseStudies(c, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Case studies", path: "/work" },
          { name: c.title, path: `/work/${c.slug}` },
        ])}
      />

      <section className="relative overflow-hidden bg-ink-900 text-cream-50">
        <Image src={c.cover} alt={c.coverAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/50 to-ink-900/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-transparent to-ink-900/90" />
        <div className="container-x pt-24 pb-20 relative">
          <Link href="/work" className="inline-flex items-center gap-1.5 text-sm text-cream-100/80 hover:text-cream-50">
            <ArrowLeft className="w-4 h-4" /> All case studies
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="eyebrow !text-brand-400">
              Case study · {divisionLabel[c.division]} · {c.tag}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold text-cream-50 leading-[1]">{c.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream-100/85">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-400" /> {c.location}
              </span>
              <span className="text-cream-100/50">·</span>
              <span>{c.audiences.join(" / ")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-x section">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              {c.body.map((p, i) => (
                <p key={i} className={`text-lg text-ink-700 leading-relaxed ${i > 0 ? "mt-6" : ""}`}>
                  {p}
                </p>
              ))}
              {companion && (
                <Link
                  href={`/work/${companion.slug}`}
                  className="mt-10 flex items-center justify-between gap-4 rounded-md border hairline bg-white p-5 group"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-500">
                      Same program, from the {divisionLabel[companion.division].replace("Woola ", "")} side
                    </div>
                    <div className="mt-1 font-semibold text-ink-800 group-hover:text-brand-500 transition">{companion.title}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-500 shrink-0" />
                </Link>
              )}
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div className="card p-7">
                  <div className="eyebrow">Project highlights</div>
                  <ul className="mt-5 space-y-4">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex gap-3 items-start">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-ink-700 leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 pt-6 border-t hairline">
                    <div className="text-[11px] uppercase tracking-widest text-ink-500">Woola teams on this project</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.teams.map((t) => (
                        <Link
                          key={t}
                          href={`/${t}`}
                          className="text-xs px-3 py-1.5 rounded-full border hairline text-ink-800 hover:border-brand-500 hover:text-brand-500 transition"
                        >
                          {divisionLabel[t]}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="text-[11px] uppercase tracking-widest text-ink-500">Related services</div>
                    <ul className="mt-3 space-y-2">
                      {c.related.map((r) => (
                        <li key={r.href}>
                          <Link href={r.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-800 hover:text-brand-500">
                            {r.label} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-brand w-full justify-center text-base">
                  {c.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="eyebrow">More projects</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink-800">Other case studies.</h2>
            </div>
            <Link href="/work" className="text-sm font-medium text-ink-800 hover:text-brand-500 inline-flex items-center gap-1.5">
              All case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {more.map((m) => (
              <CaseStudyCard key={m.slug} c={m} showDivision compact />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`${c.cta}.`}
        description="Tell us about the property and we'll come back with a coordinator from the right division, a site visit, and a scope you can take to your council or owner."
      />
    </>
  );
}
