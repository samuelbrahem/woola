"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { DivisionFAQ as FAQ } from "@/lib/divisions";

export function DivisionFAQ({ items }: { items: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="divide-y hairline border-y hairline">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              aria-expanded={open}
            >
              <span className="text-lg md:text-xl font-semibold text-ink-800 group-hover:text-brand-500 transition">
                {item.q}
              </span>
              <span
                className={`shrink-0 w-9 h-9 rounded-full border hairline flex items-center justify-center transition ${
                  open ? "bg-ink-800 text-cream-50 border-ink-800" : "text-ink-700"
                }`}
              >
                {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-ink-500 leading-relaxed max-w-3xl">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
