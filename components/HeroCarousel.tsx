"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Phone, MapPin } from "lucide-react";
import { cities } from "@/lib/cities";


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
  /** Looping promo film; `image` doubles as its poster frame. */
  video?: string;
};

const SLIDES: Slide[] = [
  {
    id: "main",
    eyebrow: "24/7 dispatch · Coquitlam HQ",
    title: "Every system.",
    script: "One partner.",
    sub: "Mechanical, power, electrical, and building trades, coordinated by a single dispatcher for BC's most demanding buildings.",
    cta: { label: "Request Service", href: "/contact" },
    cta2: { label: "Call Now", href: "tel:604-800-3617" },
    image: "/videos/home.jpg",
    alt: "Woola technicians across mechanical, electrical, and building trades in the field",
    video: "/videos/home.mp4",
  },
];

const INTERVAL = 6500;

const ROTATING_WORDS = ["system", "boiler", "rooftop", "generator", "panel", "parkade"];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      key={ROTATING_WORDS[i]}
      className="inline-block text-brand-400 animate-[hero-word_0.5s_cubic-bezier(0.22,1,0.36,1)_both]"
    >
      {ROTATING_WORDS[i]}
    </span>
  );
}

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
      <div className="relative h-[calc(100vh-5rem)] min-h-[640px]">
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
            {/* Shade the left where the copy sits; leave the right side open so the footage (crews, Woola shirts) reads. */}
            <div className="absolute inset-0 bg-ink-900/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/95" />

            {/* Left-aligned stack: eyebrow pill, headline, sub, CTAs */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-x w-full">
                <div className="max-w-3xl text-left">
                  <div className="rise inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-ink-900/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cream-100/85">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" />
                    Coquitlam HQ · 24/7 dispatch · {cities.length} municipalities
                  </div>
                  <h1 className="rise rise-1 mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight text-cream-50">
                    {s.id === "main" ? (
                      <>
                        Every <RotatingWord />.
                      </>
                    ) : (
                      s.title
                    )}
                    {s.script && (
                      <>
                        <br />
                        <span className="script text-brand-400 text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                          {s.script}
                        </span>
                      </>
                    )}
                  </h1>
                  <p className="rise rise-2 mt-6 text-base md:text-lg text-cream-100/85 max-w-2xl leading-relaxed">
                    {s.sub}
                  </p>
                  <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
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

        {SLIDES.length > 1 && (
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
        )}
      </div>
    </section>
  );
}
