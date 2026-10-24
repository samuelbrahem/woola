import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FleetStrip() {
  return (
    <section className="bg-cream-100 border-y hairline">
      <div className="container-x py-14 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="eyebrow">Our crews</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink-800 leading-tight">
            Our crews in the field.
          </h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Marked vehicles, uniformed technicians, and documented service on every visit.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            {
              src: "/field/08-11-2026-van-1.jpg",
              alt: "Wrapped Woola Mechanical van parked in a commercial district",
            },
            {
              src: "/field/07-28-2026-mech-2.jpg",
              alt: "Woola Mechanical technician at work in a mechanical room",
            },
            {
              src: "/field/08-11-2026-van-12.jpg",
              alt: "Woola Mechanical van arriving at a service call",
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
