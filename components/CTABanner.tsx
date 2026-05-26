import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CTABanner({
  title = "Book a property assessment.",
  description = "We'll walk the building, document conditions, and propose a maintenance plan that covers mechanical, electrical and envelope under a single PO.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
      <div className="grain" />
      <div className="container-x py-20 relative">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="eyebrow text-brand-400">{site.promise}</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 text-cream-50">
              {title}
            </h2>
            <p className="mt-4 text-lg text-ink-200 max-w-2xl">{description}</p>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link href="/contact" className="btn btn-brand justify-center text-base">
              Request a walk-through <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${site.phone}`} className="btn btn-outline justify-center text-base border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
            <p className="text-xs text-ink-300 text-center mt-1">{site.emergency}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
