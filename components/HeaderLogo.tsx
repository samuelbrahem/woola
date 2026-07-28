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
  const [phase, setPhase] = useState<"drive" | "swap" | "logo">("drive");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("logo");
      return;
    }
    const swap = setTimeout(() => setPhase("swap"), 1700);
    const done = setTimeout(() => setPhase("logo"), 2250);
    return () => {
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
      {phase !== "logo" && (
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
          phase === "drive" ? "opacity-0" : "opacity-100"
        }`}
      />
    </Link>
  );
}
