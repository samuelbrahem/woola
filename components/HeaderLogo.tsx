"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Header logo moment: the Woola van drives into the corner, pauses, then
 * rolls on while the original wordmark takes its place. Runs on full page
 * loads only (the header stays mounted across client-side navigation);
 * reduced-motion users get the wordmark immediately.
 */
export function HeaderLogo() {
  const [phase, setPhase] = useState<"wait" | "drive" | "swap" | "logo">("wait");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("logo");
      return;
    }
    let started = false;
    let swap: ReturnType<typeof setTimeout>;
    let done: ReturnType<typeof setTimeout>;
    const start = () => {
      if (started) return;
      started = true;
      setPhase("drive");
      swap = setTimeout(() => setPhase("swap"), 1700);
      done = setTimeout(() => setPhase("logo"), 2250);
    };
    // Wait out the site intro when one is playing this load.
    const introActive = () =>
      document.documentElement.classList.contains("intro-pending") ||
      document.body.classList.contains("intro-hold");
    let poll: ReturnType<typeof setInterval> | undefined;
    let failsafe: ReturnType<typeof setTimeout> | undefined;
    if (!introActive()) {
      start();
    } else {
      poll = setInterval(() => {
        if (!introActive()) {
          if (poll) clearInterval(poll);
          start();
        }
      }, 100);
      failsafe = setTimeout(() => {
        if (poll) clearInterval(poll);
        start();
      }, 7000);
    }
    return () => {
      if (poll) clearInterval(poll);
      if (failsafe) clearTimeout(failsafe);
      clearTimeout(swap);
      clearTimeout(done);
    };
  }, []);

  return (
    <Link
      href="/"
      aria-label="Woola home"
      className="relative inline-flex items-center shrink-0 h-20 w-[150px]"
    >
      {(phase === "drive" || phase === "swap") && (
        <Image
          src="/brand/van-side.png"
          alt=""
          aria-hidden
          width={340}
          height={230}
          priority
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-16 w-auto ${
            phase === "drive"
              ? "animate-[van-in_1.3s_cubic-bezier(0.22,1,0.36,1)_both]"
              : "animate-[van-out_0.55s_ease-in_both]"
          }`}
        />
      )}
      <Image
        src="/brand/woola-ca-black.svg"
        alt="Woola"
        width={150}
        height={84}
        priority
        className={`logo-mark transition-opacity duration-500 ${
          phase === "drive" || phase === "wait" ? "opacity-0" : "opacity-100"
        }`}
      />
    </Link>
  );
}
