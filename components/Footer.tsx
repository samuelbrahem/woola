import Link from "next/link";
import { Logo } from "./Logo";
import { divisions } from "@/lib/divisions";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="dark-section relative overflow-hidden">
      <div className="grain" />
      <div className="container-x py-20 relative">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-ink-200 max-w-sm">
              {site.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-ink-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" strokeWidth={1.5} />
                <span>{site.hq.line1}<br />{site.hq.line2}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <a href={`tel:${site.phone}`} className="hover:text-cream-50">{site.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <a href={`mailto:${site.email}`} className="hover:text-cream-50">{site.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
                <span>{site.hours}</span>
              </div>
            </div>
          </div>

          {divisions.map((d) => (
            <div key={d.slug}>
              <div className="eyebrow text-brand-400">Division</div>
              <Link href={`/${d.slug}`} className="block mt-1 text-cream-50 font-semibold hover:text-brand-400">
                {d.name}
              </Link>
              <div className="mt-4 space-y-2">
                {d.services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${d.slug}/${s.slug}`}
                    className="block text-sm text-ink-200 hover:text-cream-50"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-ink-600 grid lg:grid-cols-4 gap-8">
          <div>
            <div className="eyebrow text-brand-400">Tools</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/calculator" className="block text-ink-200 hover:text-cream-50">HVAC estimator</Link>
              <Link href="/service-areas" className="block text-ink-200 hover:text-cream-50">Service area map</Link>
              <Link href="/competitors" className="block text-ink-200 hover:text-cream-50">Compare providers</Link>
            </div>
          </div>
          <div>
            <div className="eyebrow text-brand-400">Company</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/about" className="block text-ink-200 hover:text-cream-50">About Woola</Link>
              <Link href="/contact" className="block text-ink-200 hover:text-cream-50">Contact dispatch</Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="eyebrow text-brand-400">Service Areas</div>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {cities.map((c, idx) => (
                <span key={c.slug} className="text-ink-200">
                  <Link href={`/service-areas/${c.slug}`} className="hover:text-cream-50">
                    {c.name}
                  </Link>
                  {idx < cities.length - 1 && <span className="text-ink-400"> ·</span>}
                </span>
              ))}
            </div>
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
