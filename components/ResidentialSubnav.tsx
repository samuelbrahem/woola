"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { residentialServices } from "@/lib/residential";
import { AudienceSwitch } from "./AudienceSwitch";

/**
 * Persistent sub-navigation for the residential experience: homeowners get
 * their own service hierarchy instead of the commercial division tree.
 */
export function ResidentialSubnav() {
  const pathname = usePathname() ?? "";

  const linkClass = (href: string) => {
    const active = pathname === href;
    return `whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition ${
      active ? "bg-ink-800 text-cream-50" : "text-ink-600 hover:text-ink-800 hover:bg-ink-50"
    }`;
  };

  return (
    <div className="sticky top-20 z-40 bg-cream-50/90 backdrop-blur border-b hairline">
      <div className="container-x flex items-center gap-4 py-2">
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto scrollbar-none">
          <Link href="/residential" className={linkClass("/residential")}>
            Overview
          </Link>
          {residentialServices.map((s) => (
            <Link key={s.slug} href={`/residential/${s.slug}`} className={linkClass(`/residential/${s.slug}`)}>
              {s.navName}
            </Link>
          ))}
        </div>
        <div className="hidden shrink-0 md:block">
          <AudienceSwitch />
        </div>
      </div>
    </div>
  );
}
