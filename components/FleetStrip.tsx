import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FleetStrip() {
  return (
    <section className="bg-cream-100 border-y hairline">
      <div className="container-x py-14 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">The Woola fleet</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink-800 leading-tight">
              You&apos;ll know us when we pull up.
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              Marked vans, uniformed crews, and photo-documented work orders on every visit. If it
              doesn&apos;t carry the Woola mark, it isn&apos;t us.
            </p>
            <Link
              href="/about/fleet"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
            >
              Our fleet & branding <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/8] rounded-md overflow-hidden">
              <Image
                src="/brand/field-generator-delivery.webp"
                alt="Woola technician receiving a standby generator delivery in the field"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
