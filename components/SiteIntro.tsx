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
const HOLD_MS = INTRO_VIDEO ? 3600 : 2200;
const SWEEP_MS = 1000;

const PROMISE_WORDS = ["OUT WORK.", "OUT PERFORM.", "OUT PLAY."];

export function SiteIntro() {
  const [phase, setPhase] = useState<"hidden" | "playing" | "leaving">("hidden");

  useEffect(() => {
    const clearPending = () => document.documentElement.classList.remove("intro-pending");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clearPending();
      return;
    }
    if (sessionStorage.getItem(SESSION_KEY)) {
      clearPending();
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("playing");
    document.body.classList.add("intro-hold");
    // Drop the pre-paint cover only after the overlay has painted.
    requestAnimationFrame(() => requestAnimationFrame(clearPending));
    const hold = setTimeout(() => setPhase("leaving"), HOLD_MS);
    // intro-hold stays on until the wipe completes so the header van's
    // entrance starts only after the intro van has left the screen.
    const done = setTimeout(() => {
      setPhase("hidden");
      document.body.classList.remove("intro-hold");
    }, HOLD_MS + SWEEP_MS);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
      document.body.classList.remove("intro-hold");
      clearPending();
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div aria-hidden className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 bg-ink-900"
        style={
          phase === "leaving"
            ? { animation: `intro-wipe ${SWEEP_MS}ms linear forwards` }
            : undefined
        }
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
          className="w-[220px] md:w-[300px] h-auto animate-[intro-logo_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
        />
        <span
          aria-hidden
          className="block mt-6 h-0.5 w-[min(320px,60vw)] bg-brand-500 origin-left animate-[intro-line_0.9s_cubic-bezier(0.22,1,0.36,1)_0.85s_both]"
        />
        <p className="mt-6 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 text-sm md:text-base uppercase">
          {PROMISE_WORDS.map((word, i) => (
            <span
              key={word}
              className={`inline-block tracking-[0.28em] animate-[intro-word_0.55s_cubic-bezier(0.22,1,0.36,1)_both] ${
                i === PROMISE_WORDS.length - 1 ? "text-brand-400 font-semibold" : "text-cream-100/80"
              }`}
              style={{ animationDelay: `${0.55 + i * 0.22}s` }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
      </div>
      {phase === "leaving" && (
        <Image
          src="/brand/van-side.png"
          alt=""
          width={900}
          height={609}
          priority
          className="absolute top-1/2 left-0 h-28 md:h-40 w-auto drop-shadow-2xl"
          style={{ animation: `intro-drive ${SWEEP_MS}ms linear forwards` }}
        />
      )}
    </div>
  );
}
