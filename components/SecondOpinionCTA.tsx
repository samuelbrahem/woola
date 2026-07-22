import Link from "next/link";
import { FileSearch, ArrowRight } from "lucide-react";

export function SecondOpinionCTA() {
  return (
    <section className="bg-brand-500 text-white">
      <div className="container-x py-14 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-white/80">
              <FileSearch className="w-4 h-4" />
              <div className="eyebrow !text-white/80">Free · No obligation</div>
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              Already have a quote? Get a second opinion.
            </h2>
            <p className="mt-3 text-white/85 max-w-2xl">
              Upload the quote, report, or photos. Our estimating team reviews it within one
              business day.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/second-opinion" className="btn bg-ink-900 text-cream-50 hover:bg-ink-700 text-base">
              Upload your quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
