"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement scroll reveal: below-fold cards and [data-reveal]
 * elements fade-rise in as they enter the viewport. Elements above the fold
 * are never hidden, so there's no flash on load and no-JS users see everything.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".card, [data-reveal]")
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    els.forEach((el) => {
      if (el.classList.contains("js-reveal")) return;
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      const parent = el.parentElement;
      const idx = parent
        ? Array.from(parent.children)
            .filter((c) => els.includes(c as HTMLElement))
            .indexOf(el)
        : 0;
      // Snap to the hidden state without animating the 1 -> 0 change,
      // then restore the transition for the reveal.
      el.style.transition = "none";
      el.classList.add("js-reveal");
      void el.offsetHeight;
      el.style.transition = "";
      el.style.transitionDelay = `${Math.min(Math.max(idx, 0), 5) * 70}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
