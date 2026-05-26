import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Division } from "@/lib/divisions";

const logoBySlug: Record<Division["slug"], string> = {
  mechanical: "/brand/woola-mechanical-black.png",
  power: "/brand/woola-power-black.png",
  build: "/brand/woola-build-black.png",
};

export function DivisionCard({ division }: { division: Division }) {
  return (
    <Link
      href={`/${division.slug}`}
      className="card p-8 flex flex-col h-full group"
    >
      <div className="flex items-center justify-between">
        <Image
          src={logoBySlug[division.slug]}
          alt={division.name}
          width={146}
          height={70}
          className="h-14 w-auto"
        />
        <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-brand-500 transition" strokeWidth={1.5} />
      </div>
      <div className="eyebrow mt-6">{division.subtitle}</div>
      <p className="mt-3 text-ink-500 text-sm leading-relaxed flex-1">
        {division.description}
      </p>
      <div className="mt-6 pt-6 border-t hairline">
        <div className="flex flex-wrap gap-2">
          {division.services.map((s) => (
            <span
              key={s.slug}
              className="text-xs px-2.5 py-1 rounded bg-cream-100 text-ink-700 border hairline"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
