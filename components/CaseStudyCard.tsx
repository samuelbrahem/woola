import Image from "next/image";
import Link from "next/link";
import { type CaseStudy, divisionLabel, teaser } from "@/lib/case-studies";

/** Project card used on /work, division pages, service pages and the homepage. */
export function CaseStudyCard({
  c,
  showDivision = false,
  compact = false,
}: {
  c: CaseStudy;
  showDivision?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href={`/work/${c.slug}`} className="card flex flex-col h-full bg-white overflow-hidden group">
      <div className="aspect-[16/10] relative overflow-hidden bg-ink-100">
        <Image
          src={c.cover}
          alt={c.coverAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-800/40 via-transparent to-transparent" />
        <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase bg-ink-800/80 text-cream-50 px-2 py-1 rounded backdrop-blur">
          {c.tag}
        </span>
      </div>
      <div className={`${compact ? "p-5" : "p-7"} flex flex-col flex-1`}>
        <div className="text-[11px] uppercase tracking-widest text-ink-500">
          {showDivision ? `${divisionLabel[c.division]} · ` : ""}
          {c.location}
        </div>
        <h3 className={`${compact ? "text-base" : "text-xl"} font-semibold text-ink-800 mt-2 leading-snug group-hover:text-brand-500 transition`}>
          {c.title}
        </h3>
        {!compact && <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1 line-clamp-3">{teaser(c)}</p>}
      </div>
    </Link>
  );
}
