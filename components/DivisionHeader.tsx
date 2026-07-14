"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { divisions } from "@/lib/divisions";
import { cities, citiesByRegion } from "@/lib/cities";
import { DivisionWordmark } from "./DivisionWordmark";
import { MegaItem } from "./Header";

const regionOrder = [
  "Vancouver",
  "North Shore",
  "Tri-Cities",
  "South of Fraser",
  "Fraser Valley",
  "Sea-to-Sky",
];

export function DivisionHeader({ divisionSlug }: { divisionSlug: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const division = divisions.find((d) => d.slug === divisionSlug);
  if (!division) return null;
  const siblings = divisions.filter((d) => d.slug !== division.slug);

  return (
    <>
      {/* Group strip: the way back to the parent brand */}
      <div className="bg-ink-800 text-cream-100">
        <div className="container-x flex items-center justify-between h-9 text-xs">
          <Link href="/" className="flex items-center gap-1.5 hover:text-cream-50 transition uppercase tracking-wider">
            Part of Woola Services Group <ArrowUpRight className="w-3 h-3" />
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {siblings.map((d) => (
              <Link key={d.slug} href={`/${d.slug}`} className="hover:text-cream-50 transition">
                {d.name.replace("Woola ", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-cream-50/85 backdrop-blur border-b hairline">
        <div className="container-x">
          <div className="flex items-center justify-between h-16">
            <Link href={`/${division.slug}`} className="flex items-center gap-3 min-w-0">
              <DivisionWordmark division={division} size="sm" />
              <span className="hidden xl:inline text-xs text-ink-400 uppercase tracking-wider truncate">
                {division.subtitle}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <MegaItem
                label="Services"
                open={open === "services"}
                onOpen={() => setOpen(open === "services" ? null : "services")}
                onClose={() => setOpen(null)}
              >
                <div className="p-7 w-[640px]">
                  <div className="eyebrow mb-4">{division.name} services</div>
                  <div className="grid grid-cols-2 gap-2">
                    {division.services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/${division.slug}/${s.slug}`}
                          onClick={() => setOpen(null)}
                          className="mega-link"
                        >
                          <Icon className="w-5 h-5 mt-0.5 text-brand-500" strokeWidth={1.5} />
                          <div>
                            <div className="text-sm font-medium text-ink-800">{s.name}</div>
                            <div className="text-xs text-ink-400 mt-0.5">{s.short}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="border-t hairline bg-cream-100 px-8 py-4 flex items-center justify-between text-sm">
                  <span className="script text-brand-500 text-xl leading-none">{division.tagline}</span>
                  <Link
                    href={`/${division.slug}`}
                    onClick={() => setOpen(null)}
                    className="font-medium text-ink-800 hover:underline shrink-0"
                  >
                    Division overview →
                  </Link>
                </div>
              </MegaItem>

              <MegaItem
                label="Coverage"
                open={open === "coverage"}
                onOpen={() => setOpen(open === "coverage" ? null : "coverage")}
                onClose={() => setOpen(null)}
              >
                <div className="p-8 w-[760px]">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                    {regionOrder.map((region) => (
                      <div key={region}>
                        <div className="eyebrow mb-2">{region}</div>
                        <div className="space-y-1">
                          {(citiesByRegion[region] || []).map((c) => (
                            <Link
                              key={c.slug}
                              href={`/service-areas/${c.slug}`}
                              onClick={() => setOpen(null)}
                              className="block text-sm text-ink-700 hover:text-ink-800 hover:underline py-0.5"
                            >
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t hairline flex items-center justify-between">
                    <span className="text-sm text-ink-500">
                      {cities.length} municipalities, dispatched from Coquitlam.
                    </span>
                    <Link
                      href="/service-areas"
                      onClick={() => setOpen(null)}
                      className="text-sm font-medium text-ink-800 hover:underline"
                    >
                      View coverage map →
                    </Link>
                  </div>
                </div>
              </MegaItem>

              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-ink-800 rounded-full hover:bg-ink-50">
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${division.contactPhone}`}
                className="flex items-center gap-2 text-sm text-ink-800"
              >
                <Phone className="w-4 h-4 text-brand-500" strokeWidth={1.6} />
                <span className="font-medium">{division.contactPhone}</span>
              </a>
              <Link href="/contact" className="btn btn-brand">
                Book service
              </Link>
            </div>

            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t hairline bg-cream-50">
            <div className="container-x py-6 space-y-5">
              <div>
                <div className="eyebrow mb-2">Services</div>
                <div className="space-y-1">
                  {division.services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${division.slug}/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-ink-700 py-1"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border-t hairline pt-4 space-y-2">
                <Link href="/service-areas" onClick={() => setMobileOpen(false)} className="block font-medium">Coverage</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block font-medium">Contact</Link>
                <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm text-ink-500">
                  Woola Services Group →
                </Link>
              </div>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-brand w-full justify-center">
                Book service
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
