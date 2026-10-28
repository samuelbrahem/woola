"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { HeaderLogo } from "./HeaderLogo";
import { AudienceSwitch } from "./AudienceSwitch";
import { divisions, featuredServices, topLevelServices, shortName } from "@/lib/divisions";
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
  ["News", "/news", "Company news and milestones"],
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
    <div className="p-5">
      {children}
      {actions && (
        <div className="mt-4 pt-3 border-t hairline flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">{actions}</div>
      )}
    </div>
  );
}

type PanelLink = { label: string; href: string };

/** Column label: small teal caps with a dot, as on the Services menu. */
function ColumnHead({ href, onClick, children }: { href?: string; onClick?: () => void; children: React.ReactNode }) {
  const cls = "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500";
  const inner = (
    <>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
      {children}
    </>
  );
  return href ? (
    <Link href={href} onClick={onClick} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

/** Plain link list under a column head, with an optional footer link. */
function PanelColumn({
  head,
  headHref,
  links,
  footer,
  onNavigate,
  columns = 1,
  className = "",
}: {
  head: string;
  headHref?: string;
  links: PanelLink[];
  footer?: PanelLink;
  onNavigate: () => void;
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <div className={`px-5 first:pl-1 last:pr-1 flex flex-col ${className}`}>
      <ColumnHead href={headHref} onClick={onNavigate}>{head}</ColumnHead>
      <ul className={`mt-3 flex-1 ${columns === 2 ? "grid grid-cols-2 gap-x-6 content-start" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              onClick={onNavigate}
              className="block py-[5px] text-[13.5px] text-ink-700 hover:text-brand-500 hover:translate-x-0.5 transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {footer && (
        <Link
          href={footer.href}
          onClick={onNavigate}
          className="mt-3 pt-3 border-t hairline text-xs font-medium text-ink-800 hover:text-brand-500 whitespace-nowrap"
        >
          {footer.label} →
        </Link>
      )}
    </div>
  );
}

const PANEL_GRID = "grid divide-x divide-[color:rgba(15,15,15,0.08)] max-w-full";

export function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel>
      <div className={`${PANEL_GRID} grid-cols-4 w-[1000px]`}>
        {divisions.map((d) => (
          <PanelColumn
            key={d.slug}
            head={shortName(d)}
            headHref={`/${d.slug}`}
            onNavigate={onNavigate}
            links={featuredServices(d).map((s) => ({
              href: `/${d.slug}/${s.slug}`,
              label:
                s.slug === "generators"
                  ? "Generator Replacement"
                  : s.slug === "electrical"
                    ? "Service & Maintenance"
                    : s.name,
            }))}
            footer={{ label: `All ${shortName(d)} services`, href: `/${d.slug}` }}
          />
        ))}
      </div>
    </MegaPanel>
  );
}

export function WhoWeServePanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <MegaPanel>
      <div className={`${PANEL_GRID} grid-cols-3 w-[780px]`}>
        <PanelColumn
          head="By role"
          onNavigate={onNavigate}
          links={[
            { label: "Property Managers", href: "/property-managers" },
            { label: "Commercial", href: "/commercial" },
            { label: "Residential", href: "/residential" },
          ]}
          footer={{ label: "For property managers", href: "/property-managers" }}
        />
        <PanelColumn
          className="col-span-2"
          head="By building type"
          onNavigate={onNavigate}
          columns={2}
          links={sectors.map((ind) => ({ label: ind.name, href: `/industries/${ind.slug}` }))}
          footer={{ label: "All commercial services", href: "/commercial" }}
        />
      </div>
    </MegaPanel>
  );
}

export function CompanyPanel({ onNavigate }: { onNavigate: () => void }) {
  const [company, resources] = [companyLinks.slice(0, 4), companyLinks.slice(4)];
  return (
    <MegaPanel>
      <div className={`${PANEL_GRID} grid-cols-2 w-[560px]`}>
        <PanelColumn
          head="Company"
          headHref="/about"
          onNavigate={onNavigate}
          links={company.map(([label, href]) => ({ label, href }))}
          footer={{ label: "About Woola", href: "/about" }}
        />
        <PanelColumn
          head="Resources"
          onNavigate={onNavigate}
          links={resources.map(([label, href]) => ({ label, href }))}
          footer={{ label: "Careers", href: "/careers" }}
        />
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
  const services = topLevelServices(division).map((s) => ({ label: s.name, href: `/${division.slug}/${s.slug}` }));
  return (
    <MegaPanel>
      {isMech ? (
        <div className={`${PANEL_GRID} grid-cols-5 w-[1000px]`}>
          <PanelColumn
            className="col-span-3"
            head="Commercial"
            headHref="/commercial"
            onNavigate={onNavigate}
            columns={2}
            links={services}
            footer={{ label: "All commercial services", href: "/commercial" }}
          />
          <PanelColumn
            className="col-span-2"
            head="Residential"
            headHref="/residential"
            onNavigate={onNavigate}
            columns={2}
            links={residentialServices.map((s) => ({ label: s.navName, href: `/residential/${s.slug}` }))}
            footer={{ label: "All residential services", href: "/residential" }}
          />
        </div>
      ) : (
        <div className={`${PANEL_GRID} grid-cols-1 w-[620px]`}>
          <PanelColumn
            head={`${shortName(division)} services`}
            headHref={`/${division.slug}`}
            onNavigate={onNavigate}
            columns={2}
            links={services}
            footer={{ label: "Division overview", href: `/${division.slug}` }}
          />
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
    closeTimer.current = setTimeout(onClose, 350);
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
        className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-800 rounded-full whitespace-nowrap transition ${
          open ? "bg-ink-50 after:absolute after:inset-x-0 after:top-full after:h-8 after:content-['']" : "hover:bg-ink-50"
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-max max-w-[calc(100vw-3rem)]">
          <div className="mega-in bg-white rounded-xl shadow-[0_24px_60px_-20px_rgba(4,4,4,0.35)] border hairline overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
