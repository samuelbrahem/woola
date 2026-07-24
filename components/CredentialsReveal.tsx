"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function CredentialsReveal({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-10"
    >
      {items.map((c, i) => (
        <div
          key={c}
          className={`credential-reveal ${visible ? "credential-reveal--in" : ""}`}
          style={{ transitionDelay: visible ? `${i * 110}ms` : "0ms" }}
        >
          <Image
            src={`/brand/${c}.png`}
            alt={c.replace("logo-", "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())}
            width={220}
            height={140}
            className="max-h-20 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
          />
        </div>
      ))}
    </div>
  );
}
