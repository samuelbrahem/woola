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
    <section className="bg-cream-50 border-t hairline">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="eyebrow">{site.promise}</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 text-ink-800">
              {title}
            </h2>
            <p className="mt-4 text-lg text-ink-500 max-w-2xl">{description}</p>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link href="/contact" className="btn btn-brand justify-center text-base">
              Request Service <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${site.phone}`} className="btn btn-ghost justify-center text-base border hairline">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
            <p className="text-xs text-ink-400 text-center mt-1">{site.emergency}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
