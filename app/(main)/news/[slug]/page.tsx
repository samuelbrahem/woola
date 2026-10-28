import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { news, getNews, formatNewsDate } from "@/lib/news";
import { JsonLd } from "@/components/JsonLd";
import { newsArticle, breadcrumbs } from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const n = getNews(params.slug);
  if (!n) return {};
  return {
    title: `${n.title} | Woola News`,
    description: n.excerpt,
    alternates: { canonical: `https://woola.ca/news/${n.slug}` },
    openGraph: { title: n.title, description: n.excerpt, type: "article", publishedTime: n.date, images: [{ url: n.cover, alt: n.coverAlt }] },
  };
}

export default function NewsPost({ params }: { params: Params }) {
  const item = getNews(params.slug);
  if (!item) return notFound();

  return (
    <>
      <JsonLd
        data={[
          newsArticle(item),
          breadcrumbs([
            { name: "Woola", path: "" },
            { name: "News", path: "/news" },
            { name: item.title, path: `/news/${item.slug}` },
          ]),
        ]}
      />
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-14 pb-14">
          <Link href="/news" className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800">
            <ArrowLeft className="w-4 h-4" /> All news
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-ink-500">
              <span className="text-brand-500 font-semibold">News</span>
              <span className="mx-2 text-ink-400">·</span>
              {formatNewsDate(item)}
            </div>
            <h1 className="rise rise-1 mt-5 text-4xl md:text-5xl font-semibold text-ink-800 leading-[1.02]">{item.title}</h1>
            <p className="rise rise-2 mt-5 text-lg text-ink-500 leading-relaxed">{item.excerpt}</p>
          </div>
        </div>
      </section>

      <div className="container-x mt-10">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden max-w-4xl mx-auto bg-ink-800">
          <Image src={item.cover} alt={item.coverAlt} fill sizes="(min-width: 1024px) 900px, 100vw" priority className="object-cover" />
        </div>
      </div>

      <Section>
        <article className="max-w-3xl mx-auto">
          {item.body.map((section, i) => (
            <div key={i} className={i > 0 ? "mt-10" : ""}>
              {section.heading && <h2 className="text-2xl md:text-3xl font-semibold text-ink-800 tracking-tight">{section.heading}</h2>}
              <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-base md:text-lg text-ink-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
          {item.source && (
            <p className="mt-10 pt-6 border-t hairline text-sm text-ink-500">
              Source:{" "}
              <a href={item.source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-500 hover:underline">
                {item.source.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          )}
        </article>
      </Section>

      <CTABanner />
    </>
  );
}
