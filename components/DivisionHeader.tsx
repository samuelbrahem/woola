"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { divisions } from "@/lib/divisions";
import { DivisionWordmark } from "./DivisionWordmark";
import {
  MegaItem,
  ServiceAreasPanel,
  WhoWeServePanel,
  CompanyPanel,
  companyLinks,
} from "./Header";

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
          <div className="flex items-center justify-between h-20">
            <Link href={`/${division.slug}`} className="flex items-center shrink-0">
              <DivisionWordmark division={division} size="sm" />
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
                label="Service Areas"
                open={open === "areas"}
                onOpen={() => setOpen(open === "areas" ? null : "areas")}
                onClose={() => setOpen(null)}
              >
                <ServiceAreasPanel onNavigate={() => setOpen(null)} />
              </MegaItem>

              <MegaItem
                label="Who We Serve"
                open={open === "serve"}
                onOpen={() => setOpen(open === "serve" ? null : "serve")}
                onClose={() => setOpen(null)}
              >
                <WhoWeServePanel onNavigate={() => setOpen(null)} />
              </MegaItem>

              <MegaItem
                label="Company"
                align="right"
                open={open === "company"}
                onOpen={() => setOpen(open === "company" ? null : "company")}
                onClose={() => setOpen(null)}
              >
                <CompanyPanel onNavigate={() => setOpen(null)} />
              </MegaItem>

              <Link href="/careers" className="px-4 py-2 text-sm font-medium text-ink-800 rounded-full hover:bg-ink-50">
                Careers
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${division.contactPhone}`} className="btn btn-ghost">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link href="/contact" className="btn btn-brand">
                Request Service
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
                <Link href="/service-areas" onClick={() => setMobileOpen(false)} className="block font-medium">Service Areas</Link>
                <Link href="/property-managers" onClick={() => setMobileOpen(false)} className="block font-medium">Property Managers</Link>
                <Link href="/commercial" onClick={() => setMobileOpen(false)} className="block font-medium">Commercial</Link>
                <Link href="/residential" onClick={() => setMobileOpen(false)} className="block font-medium">Residential</Link>
                {companyLinks.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="block font-medium">
                    {label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block font-medium">Contact</Link>
                <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm text-ink-500">
                  Woola Services Group →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${division.contactPhone}`} className="btn btn-ghost justify-center border hairline">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-brand justify-center">
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
