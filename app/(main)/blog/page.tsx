import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Field Notes | Woola",
  description:
    "Building operations, rebates, and field notes from Woola's mechanical, power, electrical, and build divisions.",
  alternates: { canonical: "https://woola.ca/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-20 pb-14">
          <div className="max-w-3xl">
            <div className="eyebrow">Field Notes</div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold text-ink-800 leading-[1.02]">
              Building ops, from the crew that runs them.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl leading-relaxed">
              Plain-English writing on rebates, compliance, and the mechanical, power, electrical,
              and building work we do across BC.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <Section>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 items-center card overflow-hidden bg-white hover:border-brand-500/40 hover:shadow-soft transition-all"
          >
            <div className="relative aspect-[4/3] bg-cream-100 border-b lg:border-b-0 lg:border-r hairline overflow-hidden">
              <Image
                src={featured.cover}
                alt={featured.coverAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-3 flex-wrap text-xs">
                <span className="eyebrow !text-brand-500">Featured</span>
                <span className="text-ink-400">·</span>
                <span className="text-ink-500">{featured.category}</span>
                <span className="text-ink-400">·</span>
                <span className="text-ink-500 inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readingTime}</span>
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink-800 tracking-tight leading-tight group-hover:text-brand-500 transition">
                {featured.title}
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 pt-6 border-t hairline flex items-center justify-between">
                <div className="text-sm text-ink-500">
                  {featured.author.name} · {formatDate(featured.date)}
                </div>
                <div className="text-sm font-medium text-brand-500 inline-flex items-center gap-1.5">
                  Read the piece <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </Section>
      )}

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <SectionHead
            eyebrow="All posts"
            title="More from the field."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group card overflow-hidden bg-white flex flex-col hover:border-brand-500/40 hover:shadow-soft transition-all"
              >
                <div className="relative aspect-[16/10] bg-cream-100 overflow-hidden border-b hairline">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-ink-500">
                    <span>{p.category}</span>
                    <span className="text-ink-400">·</span>
                    <span>{p.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-ink-800 leading-snug group-hover:text-brand-500 transition">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="mt-4 pt-4 border-t hairline text-xs text-ink-500">
                    {p.author.name} · {formatDate(p.date)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}
