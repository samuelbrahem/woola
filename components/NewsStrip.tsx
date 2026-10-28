import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/Section";
import { newsSorted, formatNewsDate } from "@/lib/news";

/** Latest three news items, for the homepage. */
export function NewsStrip() {
  const items = newsSorted.slice(0, 3);
  return (
    <section className="bg-cream-100 border-y hairline">
      <div className="container-x py-16 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHead eyebrow="News" title="What's new at Woola." />
          <Link href="/news" className="text-sm font-medium text-ink-800 hover:text-brand-500 inline-flex items-center gap-1.5">
            All news <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((n) => (
            <Link key={n.slug} href={`/news/${n.slug}`} className="group card bg-white overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
                <Image src={n.cover} alt={n.coverAlt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-[11px] uppercase tracking-widest text-ink-500">{formatNewsDate(n)}</div>
                <h3 className="mt-2 text-lg font-semibold text-ink-800 leading-snug group-hover:text-brand-500 transition min-h-[3.2em] line-clamp-2">{n.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-3 flex-1">{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
