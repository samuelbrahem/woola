import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { divisions } from "@/lib/divisions";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Featured Work",
  description:
    "Recent Woola projects across mechanical, power, electrical, and building divisions: boiler swaps, EV rollouts, standby generator programs, envelope rehabs, and more.",
  alternates: { canonical: "https://woola.ca/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow">Featured work</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              The work speaks first.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl">
              A cross-section of projects our four divisions have shipped in the past 18
              months: retrofits, rollouts, rehabs, and the recurring programs that keep
              buildings out of trouble.
            </p>
          </div>
        </div>
      </section>

      {divisions.map((d, idx) => (
        <section
          key={d.slug}
          className={idx % 2 === 1 ? "bg-cream-100 border-y hairline" : ""}
        >
          <div className="container-x section">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <SectionHead
                eyebrow={d.subtitle}
                title={`${d.name} projects.`}
              />
              <Link
                href={`/${d.slug}`}
                className="text-sm font-medium text-ink-800 hover:text-brand-500 inline-flex items-center gap-1.5"
              >
                Visit the division <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {d.featured.map((p) => (
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
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-ink-800 tracking-tight">
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
      ))}

      <CTABanner
        title="Want the full portfolio for your asset class?"
        description="Tell us your building type and we'll send relevant case studies, references, and the crew leads who ran them."
      />
    </>
  );
}
