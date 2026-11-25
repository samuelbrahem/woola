import { metaDescription } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { getPost, posts } from "@/lib/posts";
import { JsonLd } from "@/components/JsonLd";
import { article, breadcrumbs, faqPage } from "@/lib/schema";
import { divisions } from "@/lib/divisions";
import { divisionUrl } from "@/lib/domains";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: { absolute: `${p.title} | Woola` },
    description: metaDescription(p.excerpt),
    alternates: { canonical: `https://woola.ca/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.excerpt,
      type: "article",
      publishedTime: p.date,
      images: [{ url: p.cover, alt: p.coverAlt }],
    },
  };
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) return notFound();
  const related = [
    ...posts.filter((p) => p.slug !== post.slug && p.division === post.division),
    ...posts.filter((p) => p.slug !== post.slug && p.division !== post.division),
  ].slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          article(post),
          ...(post.faqs?.length ? [faqPage(post.faqs)] : []),
          breadcrumbs([
            { name: "Woola", path: "" },
            { name: "Field Notes", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-14 pb-16">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800">
            <ArrowLeft className="w-4 h-4" /> All Field Notes
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap text-xs uppercase tracking-widest text-ink-500">
              <a href={divisionUrl(post.division)} className="text-brand-500 font-semibold hover:underline">{divisionName(post.division)}</a>
              <span className="text-ink-400">·</span>
              <span>{post.category}</span>
              <span className="text-ink-400">·</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
              <span className="text-ink-400">·</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h1 className="rise rise-1 mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-800 leading-[1.02]">
              {post.title}
            </h1>
            <p className="rise rise-2 mt-5 text-lg text-ink-500 leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 text-sm text-ink-500">
              <a href={divisionUrl(post.division)} className="font-medium text-ink-700 hover:text-brand-500">
                {divisionName(post.division)}
              </a>{" "}
              · Field Notes
            </div>
          </div>
        </div>
      </section>

      <div className="container-x mt-10">
        <div className="relative aspect-[16/9] bg-cream-100 rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            priority
            className={post.coverCredit || post.coverPhoto ? "object-cover" : "object-contain p-8"}
          />
        </div>
      </div>

      <Section>
        <article className="max-w-3xl mx-auto">
          {post.body.map((section, i) => (
            <div key={i} className={i > 0 ? "mt-10" : ""}>
              {section.heading && (
                <h2 className="text-2xl md:text-3xl font-semibold text-ink-800 tracking-tight">
                  {section.heading}
                </h2>
              )}
              <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                {section.paragraphs.slice(0, section.table ? 1 : undefined).map((p, j) => (
                  <p key={j} className="text-base md:text-lg text-ink-600 leading-relaxed">
                    {p}
                  </p>
                ))}
                {section.table && (
                  <div className="card overflow-x-auto bg-white">
                    <table className="w-full text-left text-base">
                      <thead>
                        <tr className="bg-cream-50 border-b hairline">
                          {section.table.head.map((h) => (
                            <th key={h} scope="col" className="px-5 py-3 text-xs uppercase tracking-widest font-semibold text-ink-500">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y hairline">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, k) => (
                              <td key={k} className={`px-5 py-3.5 align-top ${k === 0 ? "text-ink-800 font-medium" : "text-ink-600"}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.table &&
                  section.paragraphs.slice(1).map((p, j) => (
                    <p key={j} className="text-base md:text-lg text-ink-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                {section.bullets && (
                  <ul className="mt-2 space-y-2.5">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-base md:text-lg text-ink-600 leading-relaxed">
                        <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {post.contact && (
            <div className="mt-12 card bg-cream-50 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
              <Image
                src={post.contact.photo}
                alt={`${post.contact.name}, ${post.contact.role} at Woola`}
                width={112}
                height={112}
                className="h-28 w-28 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <div className="text-xl font-semibold text-ink-800">{post.contact.name}</div>
                <div className="text-sm text-ink-500">{post.contact.role}, Woola</div>
                <p className="mt-3 text-base text-ink-600 leading-relaxed">{post.contact.note}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href={`mailto:${post.contact.email}?subject=${encodeURIComponent(post.title)}`}
                    className="btn btn-brand"
                  >
                    <Mail className="w-4 h-4" /> Contact {post.contact.name.split(" ")[0]}
                  </a>
                  <a href={`mailto:${post.contact.email}`} className="text-sm text-ink-600 hover:text-brand-500 break-all">
                    {post.contact.email}
                  </a>
                </div>
              </div>
            </div>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14 pt-10 border-t hairline">
              <h2 className="text-2xl md:text-3xl font-semibold text-ink-800 tracking-tight">Common questions</h2>
              <dl className="mt-6 divide-y hairline border-y hairline">
                {post.faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <dt className="text-lg font-semibold text-ink-800">{f.q}</dt>
                    <dd className="mt-2 text-base md:text-lg text-ink-600 leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {post.services && post.services.length > 0 && (
            <div className="mt-12 card p-6 md:p-8 bg-cream-50">
              <div className="eyebrow">Where {divisionName(post.division)} comes in</div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {post.services.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="inline-flex items-center gap-1.5 font-medium text-ink-800 hover:text-brand-500">
                      {s.label} <ArrowRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.sources && post.sources.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-semibold text-ink-800">Sources</h2>
              <ol className="mt-3 space-y-1.5 list-decimal pl-5 text-sm text-ink-600">
                {post.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener" className="hover:text-brand-500 underline underline-offset-2 decoration-ink-200">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <p className="mt-10 text-sm text-ink-400">
            General information for BC building owners and managers, current as of {formatDate(post.date)}. Bylaws and codes change; confirm details with your municipality, insurer or lawyer before acting.
          </p>
        </article>
      </Section>

      {related.length > 0 && (
        <section className="bg-cream-100 border-y hairline">
          <div className="container-x section">
            <div className="eyebrow">Keep reading</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-ink-800">More field notes.</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group card overflow-hidden bg-white flex flex-col hover:border-brand-500/40 hover:shadow-soft transition-all"
                >
                  <div className="relative aspect-[16/9] bg-cream-100 overflow-hidden border-b hairline">
                    <Image
                      src={p.cover}
                      alt={p.coverAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className={`${p.coverCredit || p.coverPhoto ? "object-cover" : "object-contain p-6"} transition-transform duration-500 group-hover:scale-[1.03]`}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-widest text-ink-500">{p.category}</div>
                    <h3 className="mt-2 text-lg font-semibold text-ink-800 group-hover:text-brand-500 transition">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
                      Read the piece <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Something in the piece hit close to home?"
        description="Tell us about the building and we'll come back with a walk-through window."
      />
    </>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function divisionName(slug: string) {
  return divisions.find((d) => d.slug === slug)?.name ?? "Woola";
}
