import Link from "next/link";
import { Logo } from "./Logo";
import { divisions } from "@/lib/divisions";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, LockKeyhole, Wrench, BatteryCharging, Zap, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const divisionIcons: Record<string, LucideIcon> = {
  mechanical: Wrench,
  power: BatteryCharging,
  electrical: Zap,
  build: Hammer,
};

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Property Managers", href: "/property-managers" },
  { label: "Projects", href: "/work" },
  { label: "Learning Hub", href: "/learn" },
  { label: "Equipment Library", href: "/equipment" },
  { label: "Second Opinion", href: "/second-opinion" },
  { label: "Careers", href: "/careers" },
  { label: "Service Areas", href: "/service-areas" },
];

export function Footer() {
  return (
    <footer className="dark-section relative overflow-hidden">
      <div className="grain" />
      <div className="container-x py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo variant="light" />
            <div className="mt-5 space-y-2 text-sm text-ink-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span>{site.hq.line1}, {site.hq.line2}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <a href={`mailto:${site.email}`} className="hover:text-cream-50">{site.email}</a>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/woolaservices", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com/woolaservices", label: "Facebook" },
                { icon: Linkedin, href: "https://linkedin.com/company/woola-services-group", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com/@woolaservices", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Woola on ${s.label}`}
                  className="w-9 h-9 rounded-full border border-ink-600 text-ink-200 flex items-center justify-center hover:text-cream-50 hover:border-brand-400 transition"
                >
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow text-brand-400">Divisions</div>
            <div className="mt-4 space-y-3">
              {divisions.map((d) => {
                const Icon = divisionIcons[d.slug];
                return (
                  <div key={d.slug} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-ink-700 text-brand-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <Link href={`/${d.slug}`} className="block text-sm font-semibold text-cream-50 hover:text-brand-400">
                        {d.name}
                      </Link>
                      <a href={`tel:${d.contactPhone}`} className="text-xs text-ink-200 hover:text-cream-50">
                        {d.contactPhone}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="eyebrow text-brand-400">Quick links</div>
            <div className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block text-ink-200 hover:text-cream-50">
                  {l.label}
                </Link>
              ))}
              <Link href="/portal" className="inline-flex items-center gap-1.5 text-ink-200 hover:text-cream-50">
                <LockKeyhole className="w-3.5 h-3.5" /> Client portal
              </Link>
            </div>
          </div>

          <div>
            <div className="eyebrow text-brand-400">Talk to dispatch</div>
            <a href={`tel:${site.phone}`} className="btn btn-brand mt-4 w-full justify-center text-base">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link href="/contact" className="btn mt-3 w-full justify-center border border-cream-50/40 !text-cream-50 hover:bg-cream-50 hover:!text-ink-800">
              Request Service
            </Link>
            <p className="mt-4 text-xs text-ink-300">{site.emergency}.</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink-300">
          <span>© {new Date().getFullYear()} Woola Services Group. All rights reserved.</span>
          <span>{site.promise}</span>
        </div>
      </div>
    </footer>
  );
}
