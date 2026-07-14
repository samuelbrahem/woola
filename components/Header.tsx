"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { divisions } from "@/lib/divisions";
import { cities, citiesByRegion } from "@/lib/cities";

const regionOrder = [
  "Vancouver",
  "North Shore",
  "Tri-Cities",
  "South of Fraser",
  "Fraser Valley",
  "Sea-to-Sky",
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/85 backdrop-blur border-b hairline">
      <div className="container-x">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            <MegaItem
              label="Services"
              open={open === "services"}
              onOpen={() => setOpen(open === "services" ? null : "services")}
              onClose={() => setOpen(null)}
            >
              <div className="grid grid-cols-4 gap-6 p-7 w-[960px]">
                {divisions.map((d) => (
                  <div key={d.slug}>
                    <Link
                      href={`/${d.slug}`}
                      onClick={() => setOpen(null)}
                      className="block group"
                    >
                      <div className="eyebrow mb-1">Division</div>
                      <div className="text-xl font-semibold text-ink-800 group-hover:text-ink-600">
                        {d.name}
                      </div>
                      <div className="text-sm text-ink-500 mt-1">{d.subtitle}</div>
                    </Link>
                    <div className="mt-4 space-y-1">
                      {d.services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/${d.slug}/${s.slug}`}
                            onClick={() => setOpen(null)}
                            className="mega-link"
                          >
                            <Icon className="w-5 h-5 mt-0.5 text-ink-800" strokeWidth={1.5} />
                            <div>
                              <div className="text-sm font-medium text-ink-800">{s.name}</div>
                              <div className="text-xs text-ink-400 mt-0.5">{s.short}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t hairline bg-cream-100 px-8 py-4 flex items-center justify-between text-sm">
                <span className="text-ink-500">
                  One PO across four divisions, coordinated by a single dispatcher.
                </span>
                <Link
                  href="/about"
                  onClick={() => setOpen(null)}
                  className="font-medium text-ink-800 hover:underline"
                >
                  How we coordinate trades →
                </Link>
              </div>
            </MegaItem>

            <MegaItem
              label="Service Areas"
              open={open === "areas"}
              onOpen={() => setOpen(open === "areas" ? null : "areas")}
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
                    {cities.length} municipalities, Abbotsford to Whistler.
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

            <MegaItem
              label="Who We Serve"
              open={open === "serve"}
              onOpen={() => setOpen(open === "serve" ? null : "serve")}
              onClose={() => setOpen(null)}
            >
              <div className="p-4 w-[300px] space-y-1">
                <Link href="/commercial" onClick={() => setOpen(null)} className="mega-link">
                  <div>
                    <div className="text-sm font-medium text-ink-800">Commercial & Strata</div>
                    <div className="text-xs text-ink-400 mt-0.5">Portfolios, councils, facilities</div>
                  </div>
                </Link>
                <Link href="/residential" onClick={() => setOpen(null)} className="mega-link">
                  <div>
                    <div className="text-sm font-medium text-ink-800">Residential</div>
                    <div className="text-xs text-ink-400 mt-0.5">Homeowners and installs</div>
                  </div>
                </Link>
              </div>
            </MegaItem>

            <MegaItem
              label="Company"
              open={open === "company"}
              onOpen={() => setOpen(open === "company" ? null : "company")}
              onClose={() => setOpen(null)}
            >
              <div className="p-4 w-[300px] space-y-1">
                {[
                  ["About Woola", "/about", "The model behind the four divisions"],
                  ["Featured Work", "/work", "Recent projects across BC"],
                  ["Our Process", "/process", "Four steps, every job"],
                  ["Why Woola", "/competitors", "How we compare"],
                  ["Estimator", "/calculator", "Rough numbers in 60 seconds"],
                ].map(([label, href, sub]) => (
                  <Link key={href} href={href} onClick={() => setOpen(null)} className="mega-link">
                    <div>
                      <div className="text-sm font-medium text-ink-800">{label}</div>
                      <div className="text-xs text-ink-400 mt-0.5">{sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </MegaItem>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/book" className="btn btn-ghost">
              Book a meeting
            </Link>
            <Link href="/contact" className="btn btn-primary">
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
          <div className="container-x py-6 space-y-6">
            {divisions.map((d) => (
              <div key={d.slug}>
                <Link
                  href={`/${d.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-semibold text-ink-800"
                >
                  {d.name}
                </Link>
                <div className="mt-2 ml-1 space-y-1">
                  {d.services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${d.slug}/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-ink-600 py-1"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t hairline pt-4 space-y-2">
              <Link href="/commercial" onClick={() => setMobileOpen(false)} className="block font-medium">Commercial</Link>
              <Link href="/residential" onClick={() => setMobileOpen(false)} className="block font-medium">Residential</Link>
              <Link href="/work" onClick={() => setMobileOpen(false)} className="block font-medium">Featured Work</Link>
              <Link href="/process" onClick={() => setMobileOpen(false)} className="block font-medium">Our Process</Link>
              <Link href="/book" onClick={() => setMobileOpen(false)} className="block font-medium">Book a meeting</Link>
              <Link href="/calculator" onClick={() => setMobileOpen(false)} className="block font-medium">Estimator</Link>
              <Link href="/service-areas" onClick={() => setMobileOpen(false)} className="block font-medium">Service Areas</Link>
              <Link href="/competitors" onClick={() => setMobileOpen(false)} className="block font-medium">Why Woola</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block font-medium">About</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block font-medium">Contact</Link>
            </div>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary w-full justify-center">
              Book service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function MegaItem({
  label,
  open,
  onOpen,
  onClose,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseLeave={onClose}>
      <button
        onClick={onOpen}
        onMouseEnter={onOpen}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-800 rounded-full hover:bg-ink-50"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-3">
          <div className="bg-white rounded-2xl shadow-soft border hairline overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
