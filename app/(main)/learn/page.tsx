import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { divisions } from "@/lib/divisions";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Hub",
  description:
    "Plain-English primers and glossaries for every building system Woola services: HVAC, plumbing, gas, generators, electrical, EV charging, envelope, and more.",
  alternates: { canonical: "https://woola.ca/learn" },
};

export default function LearnPage() {
  const totalTerms = divisions.reduce(
    (sum, d) => sum + d.services.reduce((s, sv) => s + sv.primer.parts.length, 0),
    0
  );

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="eyebrow">Learning Hub</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.95]">
              Your building, in plain English.
            </h1>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              You shouldn&apos;t need a trade ticket to understand your own building. Every Woola
              service comes with a plain-English primer and glossary, {totalTerms}+ terms explained
              the way we&apos;d explain them across a kitchen table.
            </p>
          </div>
        </div>
      </section>

      {divisions.map((d, idx) => (
        <section key={d.slug} className={idx % 2 === 1 ? "bg-cream-100 border-y hairline" : ""}>
          <div className="container-x section">
            <SectionHead eyebrow={d.subtitle} title={`${d.name} primers.`} />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/learn/${d.slug}/${s.slug}`}
                  className="card bg-white overflow-hidden group flex flex-col"
                >
                  <div className="relative aspect-[16/9] bg-ink-100 overflow-hidden">
                    <Image
                      src={s.primer.image}
                      alt={s.primer.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-brand-500">
                      <BookOpen className="w-4 h-4" strokeWidth={1.75} />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {s.primer.parts.length} terms
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-ink-800 group-hover:text-brand-500 transition">
                      What is {s.name}?
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed line-clamp-3 flex-1">
                      {s.primer.what}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
                      Read the primer <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        title="Still have questions?"
        description="Ask a coordinator. Explaining the work is part of the work, and it's included with every visit."
      />
    </>
  );
}
