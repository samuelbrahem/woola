"use client";

import { useEffect, useRef, useState } from "react";

/** Animates the numeric part of a stat value ("2,400+", "$8.4M", "< 4 hr", "98%")
 *  when it scrolls into view. Values without digits render as-is. */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const m = value.match(/([\d,.]+)/);
    if (!m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const numStr = m[1];
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (Number.isNaN(target)) return;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const useGrouping = numStr.includes(",");

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const current = target * eased;
          const formatted = current.toLocaleString("en-CA", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
            useGrouping,
          });
          setDisplay(value.replace(numStr, formatted));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="stat-number">
      {display}
    </span>
  );
}
