"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * Full-bleed audience fork: commercial and residential photo halves meeting
 * at a diagonal seam. Hovering a side slides the seam toward the other,
 * giving the hovered audience the stage. Stacks plainly on mobile.
 */
export function AudienceSplit() {
  const [side, setSide] = useState<"none" | "left" | "right">("none");

  // [top%, bottom%] of the seam line.
  const seam =
    side === "left" ? [72, 60] : side === "right" ? [46, 34] : [59, 47];

  const leftClip = `polygon(0 0, ${seam[0]}% 0, ${seam[1]}% 100%, 0 100%)`;
  const rightClip = `polygon(${seam[0]}% 0, 100% 0, 100% 100%, ${seam[1]}% 100%)`;
  const clipTransition = "clip-path 650ms cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <section className="border-b hairline bg-ink-900">
      {/* Desktop: diagonal split */}
      <div className="relative hidden md:block h-[540px] overflow-hidden">
        <Link
          href="/commercial"
          onMouseEnter={() => setSide("left")}
          onMouseLeave={() => setSide("none")}
          className="absolute inset-0 group"
          style={{ clipPath: leftClip, transition: clipTransition }}
        >
          <Image
            src="https://images.unsplash.com/photo-1527738697320-513f6648bc26?w=1600&q=80&auto=format&fit=crop"
            alt="Aerial view of commercial rooftop HVAC units on a high-rise"
            fill
            sizes="60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/70 to-ink-900/30" />
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-10 lg:px-16 max-w-xl text-cream-50">
            <div className="eyebrow !text-[color:var(--brand-on-dark)]">
              Commercial · PMs, strata & owners
            </div>
            <h3 className="mt-3 text-3xl lg:text-4xl font-semibold leading-tight">
              One accountable partner for the whole building.
            </h3>
            <p className="mt-3 text-sm lg:text-base text-cream-100/85 leading-relaxed">
              Mechanical, power, electrical, and build under one PO, documented
              the way councils and owners expect.
            </p>
            <span className="btn btn-brand mt-6 w-fit">
              Explore commercial <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        <Link
          href="/residential"
          onMouseEnter={() => setSide("right")}
          onMouseLeave={() => setSide("none")}
          className="absolute inset-0 group"
          style={{ clipPath: rightClip, transition: clipTransition }}
        >
          <Image
            src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1600&q=80&auto=format&fit=crop"
            alt="Electric vehicle charging at a home charging station"
            fill
            sizes="60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-600/95 via-brand-500/75 to-brand-500/30" />
          <div className="absolute inset-y-0 right-0 flex flex-col justify-center items-end text-right px-10 lg:px-16 max-w-xl ml-auto text-cream-50">
            <div className="eyebrow !text-cream-100/90">Residential · homeowners</div>
            <h3 className="mt-3 text-3xl lg:text-4xl font-semibold leading-tight">
              The same licensed trades, at your house.
            </h3>
            <p className="mt-3 text-sm lg:text-base text-cream-100/90 leading-relaxed">
              Heating, cooling, plumbing, hot water, and gas with upfront
              pricing and honest recommendations.
            </p>
            <span className="btn bg-cream-50 text-ink-800 hover:bg-white mt-6 w-fit">
              Explore residential <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile: stacked panels */}
      <div className="md:hidden">
        {[
          {
            href: "/commercial",
            img: "https://images.unsplash.com/photo-1527738697320-513f6648bc26?w=1200&q=80&auto=format&fit=crop",
            alt: "Aerial view of commercial rooftop HVAC units on a high-rise",
            overlay: "bg-gradient-to-t from-ink-900/95 via-ink-900/70 to-ink-900/40",
            eyebrow: "Commercial · PMs, strata & owners",
            title: "One accountable partner for the whole building.",
            cta: "Explore commercial",
            btn: "btn btn-brand",
          },
          {
            href: "/residential",
            img: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1200&q=80&auto=format&fit=crop",
            alt: "Electric vehicle charging at a home charging station",
            overlay: "bg-gradient-to-t from-brand-600/95 via-brand-500/75 to-brand-500/40",
            eyebrow: "Residential · homeowners",
            title: "The same licensed trades, at your house.",
            cta: "Explore residential",
            btn: "btn bg-cream-50 text-ink-800",
          },
        ].map((p) => (
          <Link key={p.href} href={p.href} className="relative block h-[300px] overflow-hidden">
            <Image src={p.img} alt={p.alt} fill sizes="100vw" className="object-cover" />
            <div className={`absolute inset-0 ${p.overlay}`} />
            <div className="absolute inset-x-0 bottom-0 p-6 text-cream-50">
              <div className="eyebrow !text-cream-100/90">{p.eyebrow}</div>
              <h3 className="mt-2 text-2xl font-semibold leading-tight">{p.title}</h3>
              <span className={`${p.btn} mt-4 w-fit`}>
                {p.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
