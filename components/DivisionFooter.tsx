import Link from "next/link";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import type { Division } from "@/lib/divisions";
import { divisions } from "@/lib/divisions";
import { DivisionWordmark } from "./DivisionWordmark";

export function DivisionFooter({ division }: { division: Division }) {
  const siblings = divisions.filter((d) => d.slug !== division.slug);

  return (
    <footer className="bg-cream-100 border-t hairline">
      <div className="container-x py-14">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <DivisionWordmark division={division} size="md" />
            <p className="mt-4 script text-brand-500 text-3xl leading-none">
              {division.tagline}
            </p>
            <p className="mt-4 text-sm text-ink-500 max-w-sm leading-relaxed">
              {division.description}
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow">Services</div>
            <ul className="mt-4 space-y-2">
              {division.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${division.slug}/${s.slug}`}
                    className="text-sm text-ink-600 hover:text-brand-500 transition"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow">Dispatch</div>
            <div className="mt-4 space-y-3 text-sm">
              <a href={`tel:${division.contactPhone}`} className="flex items-center gap-2 font-semibold text-ink-800 hover:text-brand-500 transition">
                <Phone className="w-4 h-4 text-brand-500" strokeWidth={1.75} />
                {division.contactPhone}
              </a>
              <a href={`mailto:${division.contactEmail}`} className="flex items-center gap-2 text-ink-600 hover:text-brand-500 transition break-all">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" strokeWidth={1.75} />
                {division.contactEmail}
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow">Sister divisions</div>
            <ul className="mt-4 space-y-2">
              {siblings.map((d) => (
                <li key={d.slug}>
                  <Link href={`/${d.slug}`} className="text-sm text-ink-600 hover:text-ink-800 transition">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink-400">
          <span>© {new Date().getFullYear()} {division.name}. All rights reserved.</span>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-ink-700 transition uppercase tracking-wider"
          >
            A Woola Services Group company <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
