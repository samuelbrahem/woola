import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Division } from "@/lib/divisions";
import { DivisionWordmark } from "./DivisionWordmark";

export function DivisionCard({ division }: { division: Division }) {
  return (
    <Link
      href={`/${division.slug}`}
      className="card flex flex-col h-full group overflow-hidden"
    >
      <div className="relative aspect-[16/9] bg-ink-100 overflow-hidden">
        <Image
          src={division.heroImage}
          alt={division.heroImageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/25 to-transparent" />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <DivisionWordmark division={division} size="md" />
          <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-brand-500 transition" strokeWidth={1.5} />
        </div>
        <div className="eyebrow mt-6 min-h-[34px]">{division.subtitle}</div>
        <p className="mt-3 text-ink-500 text-sm leading-relaxed line-clamp-3 min-h-[69px]">
          {division.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 flex-1 content-start">
          {division.services.slice(0, 4).map((s) => (
            <span
              key={s.slug}
              className="text-xs px-2.5 py-1 rounded bg-cream-100 text-ink-700 border hairline"
            >
              {s.name}
            </span>
          ))}
          {division.services.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded text-ink-500">
              +{division.services.length - 4} more
            </span>
          )}
        </div>
        <div className="mt-6 pt-5 border-t hairline flex items-center justify-between text-sm">
          <span className="font-medium text-ink-800">{division.contactPhone}</span>
          <span className="text-ink-500">{division.services.length} services</span>
        </div>
      </div>
    </Link>
  );
}
