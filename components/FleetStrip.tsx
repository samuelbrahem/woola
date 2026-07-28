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
        <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            {
              src: "/field/10-25-2024-mattmatt-11.jpg",
              alt: "Woola Mechanical van driving through a commercial district",
            },
            {
              src: "/field/11-15-2024-paddy-riley-16.jpg",
              alt: "Woola technician at the van before a service call",
            },
            {
              src: "/field/10-25-2024-mattmatt-7.jpg",
              alt: "Technician loading a ladder onto a Woola van",
            },
          ].map((p) => (
            <div key={p.src} className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
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
