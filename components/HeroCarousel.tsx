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
    eyebrow: "24/7 dispatch · Coquitlam HQ",
    title: "Every system.",
    script: "One partner.",
    sub: "Mechanical, power, electrical, and building trades, coordinated by a single dispatcher for BC's most demanding buildings.",
    cta: { label: "Request Service", href: "/contact" },
    cta2: { label: "Call Now", href: "tel:604-800-3617" },
    image: "/brand/field-generator-delivery.webp",
    alt: "Woola technician receiving a standby generator delivery in the field",
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

/**
 * Schematic overlay: system lines trace in from the edges and converge into
 * one node. Every system, one partner, drawn literally. Current keeps
 * flowing along the lines after the trace completes.
 */
function HeroCircuit() {
  const paths = [
    "M600 80 H314 Q300 80 300 94 V366 Q300 380 286 380 H84",
    "M600 210 H374 Q360 210 360 224 V366 Q360 380 346 380 H84",
    "M600 560 H314 Q300 560 300 546 V394 Q300 380 286 380 H84",
    "M430 700 V394 Q430 380 416 380 H84",
    "M520 0 V226 Q520 240 506 240 H254 Q240 240 240 254 V366 Q240 380 226 380 H84",
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 700"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute right-0 inset-y-0 h-full w-[58%] hidden md:block opacity-60"
    >
      {paths.map((d, i) => (
        <path
          key={`t${i}`}
          d={d}
          fill="none"
          stroke="#188CA0"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="hero-trace"
          style={{ animationDelay: `${0.3 + i * 0.25}s` }}
        />
      ))}
      {[
        [600, 80],
        [600, 210],
        [600, 560],
        [430, 700],
        [520, 0],
      ].map(([x, y], i) => (
        <circle key={`n${i}`} cx={x} cy={y} r="4" fill="#188CA0" opacity="0.8" />
      ))}
      <circle cx="84" cy="380" r="7" fill="#188CA0">
        <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="84" cy="380" r="14" fill="none" stroke="#188CA0" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="r" values="12;22" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      {/* One van, en route: the fleet sprite driving the longest line to the node. */}
      <g className="hero-vans">
        <g>
          <image href="/brand/van-topdown.png" width="46" height="30.9" x="-23" y="-15.5" />
          <animateMotion dur="14s" begin="1s" repeatCount="indefinite" rotate="auto" path={paths[4]} />
        </g>
      </g>
    </svg>
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
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/70 to-ink-900/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
            {s.id === "main" && i === index && <HeroCircuit />}

            <div className="absolute inset-0 flex items-center">
              <div className="container-x w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1] tracking-tight text-cream-50">
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
                        <span className="script text-brand-400 text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
                          {s.script}
                        </span>
                      </>
                    )}
                  </h1>
                  <p className="mt-6 text-base md:text-lg text-cream-100/90 max-w-xl leading-relaxed">
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
