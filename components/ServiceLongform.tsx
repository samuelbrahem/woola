import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceContent } from "@/lib/content/types";

/**
 * Renders a ServiceContent module (lead, blocks, closing, related links, CTA).
 * Used by commercial division service pages and residential service pages.
 */
export function ServiceLongform({ content }: { content: ServiceContent }) {
  return (
    <div className="max-w-3xl">
      <div className="space-y-5">
        {content.lead.map((p) => (
          <p key={p.slice(0, 40)} className="text-lg text-ink-700 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-12 space-y-12">
        {content.blocks.map((block, i) => (
          <div key={block.heading ?? i} data-reveal>
            {block.heading && (
              <h2 className="text-2xl md:text-3xl font-semibold text-ink-800 tracking-tight">
                {block.heading}
              </h2>
            )}
            {block.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-ink-600 leading-relaxed">
                {p}
              </p>
            ))}
            {block.bullets && (
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {block.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" strokeWidth={2} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {content.closing && (
        <div className="mt-12 card p-8 bg-cream-100">
          <h2 className="text-xl font-semibold text-ink-800">{content.closing.heading}</h2>
          {content.closing.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-3 text-sm text-ink-600 leading-relaxed">
              {p}
            </p>
          ))}
          {content.cta && (
            <Link
              href={content.cta.href}
              className="btn btn-primary mt-6 inline-flex"
            >
              {content.cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}

      {content.related && content.related.length > 0 && (
        <div className="mt-12">
          <div className="eyebrow">Related services</div>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {content.related.map((r) => (
              <Link key={r.href + r.label} href={r.href} className="card p-5 group">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-ink-800 group-hover:text-brand-500 transition">
                    {r.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition shrink-0" />
                </div>
                {r.note && <p className="mt-1.5 text-xs text-ink-500 leading-relaxed">{r.note}</p>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
