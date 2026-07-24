import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { getPost, posts } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} | Woola`,
    description: p.excerpt,
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
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-14 pb-16">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800">
            <ArrowLeft className="w-4 h-4" /> All Field Notes
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap text-xs uppercase tracking-widest text-ink-500">
              <span className="text-brand-500 font-semibold">{post.category}</span>
              <span className="text-ink-400">·</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
              <span className="text-ink-400">·</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-800 leading-[1.02]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 text-sm text-ink-500">
              {post.author.name} · {post.author.role}
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
            className="object-contain p-8"
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
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-base md:text-lg text-ink-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
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
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
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
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}
