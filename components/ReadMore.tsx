"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** Collapses children on small screens; always expanded on lg+. */
export function ReadMore({
  children,
  collapsedHeight = 280,
  label = "Read more",
}: {
  children: ReactNode;
  collapsedHeight?: number;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`relative overflow-hidden lg:!max-h-none ${open ? "" : "max-lg-fade"}`}
        style={{ maxHeight: open ? undefined : collapsedHeight }}
      >
        {children}
        {!open && (
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent lg:hidden pointer-events-none" />
        )}
      </div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 lg:hidden"
        >
          {label} <ChevronDown className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
