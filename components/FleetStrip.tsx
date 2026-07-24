import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FleetStrip() {
  return (
    <section className="bg-cream-100 border-y hairline">
      <div className="container-x py-14 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="eyebrow">The Woola fleet</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink-800 leading-tight">
            You&apos;ll know us when we pull up.
          </h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Marked vans, uniformed crews, and photo-documented work orders on every visit. If it
            doesn&apos;t carry the Woola mark, it isn&apos;t us.
          </p>
        </div>
        <div className="mt-10 relative aspect-[21/9] rounded-md overflow-hidden max-w-5xl mx-auto">
          <Image
            src="/brand/field-generator-delivery.webp"
            alt="Woola technician receiving a standby generator delivery in the field"
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/about/fleet"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
          >
            Our fleet & branding <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
