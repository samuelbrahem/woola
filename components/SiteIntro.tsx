"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * One-time site entry moment (PCL-style): a dark panel with the wordmark
 * rising, then a sweep up to reveal the site. Plays once per browser session,
 * skipped entirely for reduced-motion users.
 *
 * When Brett's promo film lands, set INTRO_VIDEO to its /videos path and the
 * same overlay becomes a full-screen video open.
 */
const INTRO_VIDEO: string | null = null;

const SESSION_KEY = "woola-intro-seen";
const HOLD_MS = INTRO_VIDEO ? 3600 : 1500;
const SWEEP_MS = 700;

export function SiteIntro() {
  const [phase, setPhase] = useState<"hidden" | "playing" | "leaving">("hidden");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("playing");
    const hold = setTimeout(() => setPhase("leaving"), HOLD_MS);
    const done = setTimeout(() => setPhase("hidden"), HOLD_MS + SWEEP_MS);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] bg-ink-900 overflow-hidden transition-transform ease-[cubic-bezier(0.77,0,0.18,1)] ${
        phase === "leaving" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ transitionDuration: `${SWEEP_MS}ms` }}
    >
      {INTRO_VIDEO && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={INTRO_VIDEO}
          autoPlay
          muted
          playsInline
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/brand/woola-ca-white.svg"
          alt=""
          width={300}
          height={168}
          priority
          className="w-[220px] md:w-[300px] h-auto animate-[intro-in_0.8s_ease-out_both]"
        />
        <p className="mt-5 text-cream-100/80 text-sm md:text-base tracking-[0.28em] uppercase animate-[intro-in_0.8s_ease-out_0.3s_both]">
          {site.promise}
        </p>
      </div>
    </div>
  );
}
