import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/Section";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { featuredCaseStudies } from "@/lib/case-studies";

/** Three featured case studies, for the homepage. */
export function WorkStrip() {
  const items = featuredCaseStudies(3);
  return (
    <section className="bg-cream-50">
      <div className="container-x py-16 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHead
            eyebrow="Featured work"
            title="Recent projects."
            description="Capital replacements, repiping programs and standby power, delivered with more than one trade on the same schedule."
          />
          <Link href="/work" className="text-sm font-medium text-ink-800 hover:text-brand-500 inline-flex items-center gap-1.5 shrink-0">
            All case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <CaseStudyCard key={c.slug} c={c} showDivision />
          ))}
        </div>
      </div>
    </section>
  );
}
