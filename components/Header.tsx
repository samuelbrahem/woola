"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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

export const companyLinks: [string, string, string][] = [
  ["About Woola", "/about", "The model behind the four divisions"],
  ["Credentials", "/about/credentials", "Associations and certifications we hold"],
  ["Fleet & Branding", "/about/fleet", "The vans you keep seeing"],
  ["Featured Work", "/work", "Recent projects across BC"],
  ["Our Process", "/process", "Four steps, every job"],
  ["Why Woola", "/competitors", "How we compare"],
  ["Know Your Building", "/know-your-building", "Asset inventory & capital planning"],
  ["Learning Hub", "/learn", "Plain-English building primers"],
  ["Equipment Library", "/equipment", "What the machines in your building do"],
  ["Field Notes", "/blog", "Rebates, compliance, and stories from the field"],
  ["Careers", "/careers", "Join the roster"],
  ["Second Opinion", "/second-opinion", "Upload a quote, we'll review it free"],
];

export function ServiceAreasPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
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
                  onClick={onNavigate}
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
          onClick={onNavigate}
          className="text-sm font-medium text-ink-800 hover:underline"
        >
          View coverage map →
        </Link>
      </div>
    </div>
  );
}

export function WhoWeServePanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="p-4 w-[300px] space-y-1">
      <Link href="/property-managers" onClick={onNavigate} className="mega-link">
        <div>
          <div className="text-sm font-medium text-ink-800">Property Managers</div>
          <div className="text-xs text-ink-400 mt-0.5">One-source accountability for portfolios</div>
        </div>
      </Link>
      <Link href="/commercial" onClick={onNavigate} className="mega-link">
        <div>
          <div className="text-sm font-medium text-ink-800">Commercial</div>
          <div className="text-xs text-ink-400 mt-0.5">Strata, office, industrial, retail, healthcare, hospitality</div>
        </div>
      </Link>
      <Link href="/residential" onClick={onNavigate} className="mega-link">
        <div>
          <div className="text-sm font-medium text-ink-800">Residential</div>
          <div className="text-xs text-ink-400 mt-0.5">Homeowners and installs</div>
        </div>
      </Link>
    </div>
  );
}

export function CompanyPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="p-4 w-[600px] grid grid-cols-2 gap-1">
      {companyLinks.map(([label, href, sub]) => (
        <Link key={href} href={href} onClick={onNavigate} className="mega-link">
          <div>
            <div className="text-sm font-medium text-ink-800">{label}</div>
            <div className="text-xs text-ink-400 mt-0.5">{sub}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/85 backdrop-blur border-b hairline">
      <div className="container-x">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            <MegaItem
              label="Services"
              open={open === "services"}
              onOpen={() => setOpen(open === "services" ? null : "services")}
              onClose={() => setOpen(null)}
            >
              <div className="grid grid-cols-4 gap-4 p-6 w-[1000px]">
                {divisions.map((d) => (
                  <div
                    key={d.slug}
                    className="rounded-xl border hairline bg-cream-100/70 p-4 flex flex-col hover:border-brand-500/40 transition"
                  >
                    <Link
                      href={`/${d.slug}`}
                      onClick={() => setOpen(null)}
                      className="block group pb-3 border-b hairline"
                    >
                      <div className="eyebrow mb-1">Division</div>
                      <div className="text-lg font-semibold leading-tight text-ink-800 group-hover:text-brand-500 transition">
                        {d.name}
                      </div>
                      <div className="text-xs text-ink-500 mt-1">{d.subtitle}</div>
                    </Link>
                    <div className="mt-3 space-y-0.5 flex-1">
                      {d.services.slice(0, 4).map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/${d.slug}/${s.slug}`}
                            onClick={() => setOpen(null)}
                            className="mega-link !p-2"
                          >
                            <Icon className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" strokeWidth={1.5} />
                            <div>
                              <div className="text-sm font-medium text-ink-800 leading-tight">{s.name}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      href={`/${d.slug}`}
                      onClick={() => setOpen(null)}
                      className="mt-3 pt-3 border-t hairline text-xs font-medium text-brand-500 hover:underline"
                    >
                      All {d.name.replace("Woola ", "")} services →
                    </Link>
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
            <a href="tel:604-800-3617" className="btn btn-ghost">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link href="/contact" className="btn btn-primary">
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
              <Link href="/property-managers" onClick={() => setMobileOpen(false)} className="block font-medium">Property Managers</Link>
              <Link href="/commercial" onClick={() => setMobileOpen(false)} className="block font-medium">Commercial</Link>
              <Link href="/residential" onClick={() => setMobileOpen(false)} className="block font-medium">Residential</Link>
              <Link href="/know-your-building" onClick={() => setMobileOpen(false)} className="block font-medium">Know Your Building</Link>
              <Link href="/learn" onClick={() => setMobileOpen(false)} className="block font-medium">Learning Hub</Link>
              <Link href="/equipment" onClick={() => setMobileOpen(false)} className="block font-medium">Equipment Library</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block font-medium">Field Notes</Link>
              <Link href="/work" onClick={() => setMobileOpen(false)} className="block font-medium">Featured Work</Link>
              <Link href="/process" onClick={() => setMobileOpen(false)} className="block font-medium">Our Process</Link>
              <Link href="/careers" onClick={() => setMobileOpen(false)} className="block font-medium">Careers</Link>
              <Link href="/book" onClick={() => setMobileOpen(false)} className="block font-medium">Book a meeting</Link>
              <Link href="/second-opinion" onClick={() => setMobileOpen(false)} className="block font-medium">Second Opinion</Link>
              <Link href="/service-areas" onClick={() => setMobileOpen(false)} className="block font-medium">Service Areas</Link>
              <Link href="/competitors" onClick={() => setMobileOpen(false)} className="block font-medium">Why Woola</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block font-medium">About</Link>
              <Link href="/about/credentials" onClick={() => setMobileOpen(false)} className="block font-medium">Credentials</Link>
              <Link href="/about/fleet" onClick={() => setMobileOpen(false)} className="block font-medium">Fleet & Branding</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block font-medium">Contact</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href="tel:604-800-3617" className="btn btn-ghost justify-center border hairline">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary justify-center">
                Request Service
              </Link>
            </div>
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
  align = "left",
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className="relative" onMouseLeave={onClose}>
      <button
        onClick={onOpen}
        onMouseEnter={onOpen}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-800 rounded-full hover:bg-ink-50 whitespace-nowrap"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className={`absolute top-full pt-3 ${align === "right" ? "right-0" : "left-0"}`}>
          <div className="bg-white rounded-2xl shadow-soft border hairline overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
