"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The Commercial | Residential switch. Two tailored experiences, one Woola.
 * Highlights the active side only inside its section; neutral elsewhere.
 */
export function AudienceSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname() ?? "";
  const isResidential = pathname === "/residential" || pathname.startsWith("/residential/");
  const isCommercial = pathname === "/commercial" || pathname.startsWith("/commercial/");

  const base = "px-3 py-1 rounded-full transition whitespace-nowrap";
  const active = `${base} bg-ink-800 text-cream-50`;
  const idle = `${base} text-ink-600 hover:text-ink-800`;

  return (
    <div
      className={`inline-flex items-center rounded-full border hairline bg-cream-100 p-0.5 text-xs font-medium ${className}`}
    >
      <Link href="/commercial" className={isCommercial ? active : idle}>
        Commercial
      </Link>
      <Link href="/residential" className={isResidential ? active : idle}>
        Residential
      </Link>
    </div>
  );
}
