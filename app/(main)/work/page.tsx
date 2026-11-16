import type { Metadata } from "next";
import { metaDescription } from "@/lib/seo";
import Link from "next/link";
import { SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { AboutSubnav } from "@/components/AboutSubnav";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getDivision } from "@/lib/divisions";
import { DIVISION_ORDER, caseStudies, caseStudiesFor } from "@/lib/case-studies";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: metaDescription("Woola project case studies across Mechanical, Electrical, Power and Build: occupied-building repiping, chiller and boiler plant replacements, electrification, vault maintenance, standby generators, and strata exterior renewals."),
  alternates: { canonical: "https://woola.ca/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="container-x pt-20 pb-14">
          <div className="eyebrow !text-brand-400">Case studies</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">
            Projects we have delivered.
          </h1>
          <p className="mt-5 text-lg text-cream-100/80 max-w-2xl leading-relaxed">
            {caseStudies.length} project stories from our four divisions, written for the councils, operators and
            property managers who have to approve this kind of work. Locations are kept to the city to protect
            client confidentiality.
          </p>
        </div>
      </section>
      <AboutSubnav active="/work" />

      {DIVISION_ORDER.map((slug, idx) => {
        const d = getDivision(slug)!;
        const items = caseStudiesFor(slug);
        return (
          <section key={slug} id={slug} className={idx % 2 === 1 ? "bg-cream-100 border-y hairline" : ""}>
            <div className="container-x section">
              <div className="flex items-end justify-between flex-wrap gap-6">
                <SectionHead eyebrow={d.subtitle} title={`${d.name}.`} />
                <Link
                  href={`/${d.slug}`}
                  className="text-sm font-medium text-ink-800 hover:text-brand-500 inline-flex items-center gap-1.5"
                >
                  {d.name} services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={`mt-10 grid md:grid-cols-2 gap-6 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {items.map((c) => (
                  <CaseStudyCard key={c.slug} c={c} compact={items.length === 4} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        title="Want references for your asset class?"
        description="Tell us your building type and we'll send the relevant project stories, references, and the crew leads who ran them."
      />
    </>
  );
}
