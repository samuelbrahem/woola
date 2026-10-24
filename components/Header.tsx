"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Phone, type LucideIcon } from "lucide-react";
import { HeaderLogo } from "./HeaderLogo";
import { AudienceSwitch } from "./AudienceSwitch";
import { divisions, featuredServices, topLevelServices } from "@/lib/divisions";
import { residentialServices } from "@/lib/residential";
import { site } from "@/lib/site";
import { industries } from "@/lib/industries";

/**
 * "About Us" menu: seven items in two columns (Brett: 7-8 max). Careers has
 * its own top-level nav item; Fleet & Branding lives under About (subnav);
 * Second Opinion and the Equipment Library stay reachable from the footer,
 * Know Your Building, and in-page CTAs.
 */
export const companyLinks: [string, string, string][] = [
  ["About Woola", "/about", "The model behind the four divisions"],
  ["Our Process", "/process", "Four steps, every job"],
  ["Credentials", "/about/credentials", "Associations and certifications we hold"],
  ["Why Woola", "/competitors", "How we compare"],
  ["Featured Work", "/work", "Recent projects across BC"],
  ["Know Your Building", "/know-your-building", "Asset inventory & capital planning"],
  ["Field Notes", "/blog", "Rebates, compliance, and stories from the field"],
];

/** Sectors shown under "Who We Serve", in the same order on every Woola site. */
const sectors = industries.filter((i) => i.slug !== "residential");

/**
 * Every mega menu uses the same shell: a left rail that says what the section
 * is and carries its primary link, and the link grid on the right. The panel
 * spans the full header container (see MegaItem), so it opens in the same
 * place for every tab on the main site and all four division sites.
 */
export function MegaPanel({
  actions,
  children,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 md:p-6">
      {children}
      {actions && (
        <div className="mt-4 pt-4 border-t hairline flex flex-wrap items-center gap-x-6 gap-y-2">{actions}</div>
      )}
    </div>
  );
}

/** Rail link: the section's main page. */
export function RailLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="text-sm font-medium text-ink-800 hover:text-brand-500 transition">
      {children} →
    </Link>
  );
}

/** Link row with a name and a one-line note underneath. */
function MenuLink({
  href,
  onClick,
  name,
  note,
  icon: Icon,
}: {
  href: string;
  onClick: () => void;
  name: string;
  note?: string;
  icon?: LucideIcon;
}) {
  return (
    <Link href={href} onClick={onClick} className="mega-link">
      {Icon && <Icon className="w-5 h-5 mt-0.5 text-brand-500 shrink-0" strokeWidth={1.5} />}
      <div>
        <div className="text-sm font-medium text-ink-800">{name}</div>
        {note && <div className="text-xs text-ink-500 mt-0.5">{note}</div>}
      </div>
    </Link>
  );
}

/** Column heading inside a panel. */
function ColumnHead({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow mb-3">{children}</div>;
}

export function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel
      eyebrow="Services"
      title="Four divisions, one dispatch desk."
      body="Mechanical, Power, Electrical and Build. Call one number and dispatch sends the right crew."
      actions={
        <>
          <Link href="/contact" onClick={onNavigate} className="btn btn-primary">
            Request Service
          </Link>
          <a href={`tel:${site.phone}`} className="text-sm font-medium text-ink-800 hover:text-brand-500 transition">
            {site.phone}
          </a>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-x-8">
        {divisions.map((d) => (
          <div key={d.slug} className="flex flex-col">
            <Link
              href={`/${d.slug}`}
              onClick={onNavigate}
              className="text-base font-semibold text-ink-800 hover:text-brand-500 transition whitespace-nowrap"
            >
              {d.name}
            </Link>
            <div className="mt-1 mb-3 pb-3 border-b hairline text-xs text-ink-500 leading-snug h-[3.75rem]">
              {d.tagline}
            </div>
            <div className="flex-1">
              {featuredServices(d).map((s) => (
                <Link
                  key={s.slug}
                  href={`/${d.slug}/${s.slug}`}
                  onClick={onNavigate}
                  className="block py-1.5 text-sm text-ink-700 hover:text-brand-500 transition"
                >
                  {s.slug === "generators"
                    ? "Generator Replacement"
                    : s.slug === "electrical"
                      ? "Service & Maintenance"
                      : s.name}
                </Link>
              ))}
            </div>
            <Link
              href={`/${d.slug}`}
              onClick={onNavigate}
              className="mt-3 pt-3 border-t hairline text-xs font-medium text-brand-500 hover:underline whitespace-nowrap"
            >
              All {d.name.replace("Woola ", "")} services →
            </Link>
          </div>
        ))}
      </div>
    </MegaPanel>
  );
}

export function WhoWeServePanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel
      eyebrow="Who we serve"
      title="Property managers, owners and homeowners."
      body="Start with the page that matches your role. The industry pages list the systems we service most in each type of building."
      actions={<RailLink href="/property-managers" onClick={onNavigate}>Property managers</RailLink>}
    >
      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-4 border-r hairline pr-6">
          <ColumnHead>By role</ColumnHead>
          <MenuLink href="/property-managers" onClick={onNavigate} name="Property Managers" note="Portfolios, stratas and rental buildings" />
          <MenuLink href="/commercial" onClick={onNavigate} name="Commercial" note="Owners, operators and facility leads" />
          <MenuLink href="/residential" onClick={onNavigate} name="Residential" note="Homeowners" />
        </div>
        <div className="col-span-8">
          <ColumnHead>By building type</ColumnHead>
          <div className="grid grid-cols-2 gap-x-2">
            {sectors.map((ind) => (
              <MenuLink
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                onClick={onNavigate}
                name={ind.name}
                note={ind.short}
              />
            ))}
          </div>
        </div>
      </div>
    </MegaPanel>
  );
}

export function CompanyPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel
      eyebrow="About Us"
      title="Based in Coquitlam."
      body="Who we are, how a job runs from call to invoice, and the work we have done."
      actions={<RailLink href="/about" onClick={onNavigate}>About Woola</RailLink>}
    >
      <div className="grid grid-cols-3 gap-x-2">
        {companyLinks.map(([label, href, sub]) => (
          <MenuLink key={href} href={href} onClick={onNavigate} name={label} note={sub} />
        ))}
      </div>
    </MegaPanel>
  );
}

/**
 * Division-site Services menu. Mechanical splits Commercial (2/3, left) and
 * Residential (1/3, right) per Brett; the other divisions list their
 * top-level services with icons.
 */
export function DivisionServicesPanel({
  division,
  onNavigate,
}: {
  division: (typeof divisions)[number];
  onNavigate: () => void;
}) {
  const isMech = division.slug === "mechanical";
  const services = topLevelServices(division);
  return (
    <MegaPanel
      eyebrow={`${division.name} services`}
      title={division.tagline}
      body={
        isMech
          ? "Commercial service, maintenance and retrofits, plus a residential crew for homes."
          : "Service, maintenance and projects. Request service and dispatch books the crew."
      }
      actions={<RailLink href={`/${division.slug}`} onClick={onNavigate}>Division overview</RailLink>}
    >
      {isMech ? (
        <div className="grid grid-cols-3 gap-x-8">
          <div className="col-span-2 border-r hairline pr-6 flex flex-col">
            <ColumnHead>Commercial</ColumnHead>
            <div className="grid grid-cols-2 gap-x-2 content-start flex-1">
              {services.map((s) => (
                <MenuLink
                  key={s.slug}
                  href={`/${division.slug}/${s.slug}`}
                  onClick={onNavigate}
                  name={s.name}
                  note={s.short}
                  icon={s.icon}
                />
              ))}
            </div>
            <Link
              href="/commercial"
              onClick={onNavigate}
              className="mt-3 pt-3 border-t hairline text-xs font-medium text-brand-500 hover:underline"
            >
              All commercial services →
            </Link>
          </div>
          <div className="flex flex-col">
            <ColumnHead>Residential</ColumnHead>
            <div className="flex-1">
              {residentialServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/residential/${s.slug}`}
                  onClick={onNavigate}
                  className="block py-1.5 text-sm text-ink-700 hover:text-brand-500 transition"
                >
                  {s.navName}
                </Link>
              ))}
            </div>
            <Link
              href="/residential"
              onClick={onNavigate}
              className="mt-3 pt-3 border-t hairline text-xs font-medium text-brand-500 hover:underline"
            >
              All residential services →
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-x-2">
          {services.map((s) => (
            <MenuLink
              key={s.slug}
              href={`/${division.slug}/${s.slug}`}
              onClick={onNavigate}
              name={s.name}
              note={s.short}
              icon={s.icon}
            />
          ))}
        </div>
      )}
    </MegaPanel>
  );
}

/** The four dropdown tabs plus Careers, shared by the main and division headers. */
export function DesktopNav({
  open,
  setOpen,
  servicesPanel,
}: {
  open: string | null;
  setOpen: (v: string | null) => void;
  servicesPanel: React.ReactNode;
}) {
  const close = () => setOpen(null);
  const toggle = (key: string) => () => setOpen(open === key ? null : key);
  const show = (key: string) => () => setOpen(key);
  return (
    <nav className="hidden lg:flex items-center gap-1">
      <MegaItem label="Services" open={open === "services"} onOpen={show("services")} onToggle={toggle("services")} onClose={close}>
        {servicesPanel}
      </MegaItem>
      <MegaItem label="Who We Serve" open={open === "serve"} onOpen={show("serve")} onToggle={toggle("serve")} onClose={close}>
        <WhoWeServePanel onNavigate={close} />
      </MegaItem>
      <MegaItem label="About Us" open={open === "company"} onOpen={show("company")} onToggle={toggle("company")} onClose={close}>
        <CompanyPanel onNavigate={close} />
      </MegaItem>
      <Link href="/careers" className="px-4 py-2 text-sm font-medium text-ink-800 rounded-full hover:bg-ink-50">
        Careers
      </Link>
    </nav>
  );
}

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 border-b hairline">
      <div className="container-x relative">
        <div className="flex items-center justify-between h-20">
          <HeaderLogo />

          <DesktopNav open={open} setOpen={setOpen} servicesPanel={<ServicesPanel onNavigate={() => setOpen(null)} />} />

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${site.phone}`} className="btn btn-ghost">
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
            <AudienceSwitch />
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
                  {topLevelServices(d).map((s) => (
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
            <div>
              <Link
                href="/residential"
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-semibold text-ink-800"
              >
                Woola Residential
              </Link>
              <div className="mt-2 ml-1 space-y-1">
                {residentialServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/residential/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-ink-600 py-1"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t hairline pt-4 space-y-2">
              <Link href="/property-managers" onClick={() => setMobileOpen(false)} className="block font-medium">Property Managers</Link>
              <Link href="/commercial" onClick={() => setMobileOpen(false)} className="block font-medium">Commercial</Link>
              <Link href="/residential" onClick={() => setMobileOpen(false)} className="block font-medium">Residential</Link>
              <Link href="/know-your-building" onClick={() => setMobileOpen(false)} className="block font-medium">Know Your Building</Link>
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
              <a href={`tel:${site.phone}`} className="btn btn-ghost justify-center border hairline">
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

/**
 * One nav tab and its panel. The panel is positioned against the header's
 * `container-x relative` wrapper (not this element), so it spans the full
 * header width and opens in the same place for every tab. Hover opens
 * immediately; leaving closes after a short grace period so a diagonal
 * mouse path into the panel does not slam it shut. Escape closes.
 */
export function MegaItem({
  label,
  open,
  onOpen,
  onToggle,
  onClose,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(onClose, 160);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => cancelClose, []);

  return (
    <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
      <button
        onClick={onToggle}
        onMouseEnter={onOpen}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-800 rounded-full whitespace-nowrap transition ${
          open ? "bg-ink-50" : "hover:bg-ink-50"
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full pt-2 px-6">
          <div className="bg-white rounded-2xl shadow-soft border hairline overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
