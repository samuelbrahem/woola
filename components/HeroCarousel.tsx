"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Phone } from "lucide-react";

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  script?: string;
  sub: string;
  cta: { label: string; href: string };
  cta2?: { label: string; href: string };
  image: string;
  alt: string;
  /** Drop a looping MP4 here when the promo films are produced. */
  video?: string;
};

const SLIDES: Slide[] = [
  {
    id: "main",
    eyebrow: "Mission-Critical Building Services",
    title: "Complete building",
    script: "solutions.",
    sub: "One accountable partner for the critical systems that keep your building operating.",
    cta: { label: "Request Service", href: "/contact" },
    cta2: { label: "Call Now", href: "tel:604-800-3617" },
    image:
      "https://images.unsplash.com/photo-1527738697320-513f6648bc26?w=1800&q=80&auto=format&fit=crop",
    alt: "Commercial rooftop HVAC units on a high-rise",
  },
  {
    id: "mechanical",
    eyebrow: "Woola Mechanical",
    title: "Engineered comfort.",
    script: "Verified reliability.",
    sub: "HVAC, plumbing, gas, and refrigeration from Red Seal technicians.",
    cta: { label: "Explore Mechanical", href: "/mechanical" },
    image:
      "https://images.unsplash.com/photo-1563456020159-b74d67e78c26?w=1800&q=80&auto=format&fit=crop",
    alt: "Commercial mechanical plant room with insulated piping",
  },
  {
    id: "power",
    eyebrow: "Woola Power Systems",
    title: "Standby power.",
    script: "Peace of mind.",
    sub: "Factory-authorized for Generac, Kohler, and Cummins. CSA C282 testing, 24/7 response.",
    cta: { label: "Explore Power Systems", href: "/power" },
    image:
      "https://images.unsplash.com/photo-1636867759143-c28c1e909bd3?w=1800&q=80&auto=format&fit=crop",
    alt: "Containerized standby generators at an industrial power yard",
  },
  {
    id: "build",
    eyebrow: "Woola Build · Woola Electrical",
    title: "One building. Every trade.",
    script: "One call.",
    sub: "Envelope, renovations, EV charging, and the maintenance programs that prevent the 2 AM call.",
    cta: { label: "Explore the divisions", href: "/work" },
    image:
      "https://images.unsplash.com/photo-1632862378069-4ad0348cea4f?w=1800&q=80&auto=format&fit=crop",
    alt: "Project team reviewing construction plans on site",
  },
];

const INTERVAL = 6500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => go(index + 1), INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, paused, go]);

  return (
    <section
      className="relative w-full overflow-hidden bg-ink-800"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Woola highlights"
    >
      <div className="relative h-[calc(100vh-5rem)] min-h-[560px]">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            {s.video ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={s.video}
                poster={s.image}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover ${i === index ? "kenburns" : ""}`}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/50 to-ink-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="container-x w-full">
                <div className="max-w-2xl">
                  <div className="eyebrow !text-brand-400">{s.eyebrow}</div>
                  <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight text-cream-50">
                    {s.title}
                    {s.script && (
                      <>
                        {" "}
                        <span className="script text-brand-400 text-5xl md:text-6xl lg:text-8xl leading-none">
                          {s.script}
                        </span>
                      </>
                    )}
                  </h2>
                  <p className="mt-5 text-base md:text-lg text-cream-100/85 max-w-xl leading-relaxed">
                    {s.sub}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={s.cta.href} className="btn btn-brand text-base">
                      {s.cta.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                    {s.cta2 &&
                      (s.cta2.href.startsWith("tel:") ? (
                        <a
                          href={s.cta2.href}
                          className="btn text-base border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800"
                        >
                          <Phone className="w-4 h-4" /> {s.cta2.label}
                        </a>
                      ) : (
                        <Link
                          href={s.cta2.href}
                          className="btn text-base border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800"
                        >
                          {s.cta2.label}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute bottom-6 inset-x-0 z-20">
          <div className="container-x flex items-center justify-between">
            <div className="flex items-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-10 bg-brand-400" : "w-4 bg-cream-50/40 hover:bg-cream-50/70"
                  }`}
                />
              ))}
              <span className="ml-3 hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-cream-100/50">
                <Play className="w-3 h-3" /> Video banners coming soon
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-cream-50/30 text-cream-50 flex items-center justify-center hover:bg-cream-50/10 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-cream-50/30 text-cream-50 flex items-center justify-center hover:bg-cream-50/10 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
