"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { EquipmentEntry } from "@/lib/equipment-library";

export function EquipmentSlider({ items }: { items: EquipmentEntry[] }) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;
  const eq = items[index];
  const go = (i: number) => setIndex((i + items.length) % items.length);

  return (
    <div className="mt-10">
      <div className="card overflow-hidden bg-white grid lg:grid-cols-[1.15fr_1fr]">
        <div className="relative aspect-[4/3] lg:aspect-auto bg-cream-100 border-b lg:border-b-0 lg:border-r hairline">
          <Image
            key={eq.slug}
            src={eq.image}
            alt={eq.imageAlt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain p-6"
          />

          <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-ink-500 bg-cream-50/90 backdrop-blur-sm rounded-full px-3 py-1.5">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="eyebrow !text-brand-500">{eq.category}</div>
            <span className="text-[10px] uppercase tracking-widest text-ink-400 border hairline rounded-full px-2.5 py-1">
              Lifespan · {eq.lifespan}
            </span>
          </div>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-ink-800 tracking-tight">
            {eq.name}
          </h3>
          <p className="mt-4 text-sm text-ink-600 leading-relaxed">
            {eq.what}
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6 flex-1">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Signs of trouble
              </div>
              <ul className="mt-3 space-y-2">
                {eq.signs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="text-brand-500 mt-1">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                What we maintain
              </div>
              <ul className="mt-3 space-y-2">
                {eq.maintenance.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-ink-700">
                    <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" strokeWidth={2} />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t hairline flex items-center justify-between gap-4 flex-wrap">
            <Link
              href={`/equipment/${eq.slug}`}
              className="text-sm font-medium text-brand-500 hover:underline inline-flex items-center gap-1.5"
            >
              Full {eq.name} walkthrough <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/equipment"
              className="text-xs text-ink-500 hover:text-ink-800 inline-flex items-center gap-1"
            >
              Browse the full equipment library →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous equipment"
          className="w-11 h-11 rounded-full border hairline bg-white hover:bg-brand-500 hover:text-cream-50 hover:border-brand-500 text-ink-800 flex items-center justify-center transition shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-end justify-center gap-3 flex-wrap max-w-full">
          {items.map((it, i) => (
            <button
              key={it.slug}
              onClick={() => go(i)}
              aria-label={`Show ${it.name}`}
              className={`group flex flex-col items-center gap-1.5 transition ${
                i === index ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <span
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-brand-500" : "w-4 bg-ink-300 group-hover:bg-ink-500"
                }`}
              />
              <span className="text-[10px] uppercase tracking-widest text-ink-500 hidden md:inline">
                {it.name.replace(/ \(.*\)$/, "")}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => go(index + 1)}
          aria-label="Next equipment"
          className="w-11 h-11 rounded-full border hairline bg-white hover:bg-brand-500 hover:text-cream-50 hover:border-brand-500 text-ink-800 flex items-center justify-center transition shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
