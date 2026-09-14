"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Division } from "@/lib/divisions";
import { DivisionWordmark } from "./DivisionWordmark";

/**
 * Division header logo moment: the same van entrance that plays on woola.ca,
 * carried through to every division site. The van drives into the corner,
 * pauses, then rolls on while the division wordmark takes its place. Runs
 * once per full page load; reduced-motion users get the wordmark immediately.
 */
export function DivisionHeaderLogo({ division }: { division: Division }) {
  const [phase, setPhase] = useState<"wait" | "drive" | "swap" | "logo">("wait");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("logo");
      return;
    }
    setPhase("drive");
    const swap = setTimeout(() => setPhase("swap"), 1700);
    const done = setTimeout(() => setPhase("logo"), 2250);
    return () => {
      clearTimeout(swap);
      clearTimeout(done);
    };
  }, []);

  return (
    <Link
      href={`/${division.slug}`}
      aria-label={`${division.name} home`}
      className="relative inline-flex items-center shrink-0 h-20"
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
      <span
        className={`inline-flex transition-opacity duration-500 ${
          phase === "drive" || phase === "wait" ? "opacity-0" : "opacity-100"
        }`}
      >
        <DivisionWordmark division={division} size="sm" priority />
      </span>
    </Link>
  );
}
