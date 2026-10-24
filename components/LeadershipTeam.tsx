import Image from "next/image";
import { Linkedin } from "lucide-react";
import { SectionHead } from "@/components/Section";
import { team } from "@/lib/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

/** People behind Woola: one horizontal row of uniform cards, LinkedIn on each. */
export function LeadershipTeam() {
  return (
    <section className="bg-cream-50 border-t hairline">
      <div className="container-x section">
        <SectionHead eyebrow="The people behind Woola" title="Meet the leadership team." />
        <div className="mt-10 -mx-4 px-4 overflow-x-auto pb-2">
          <ul className="flex gap-5 min-w-max">
            {team.map((m) => (
              <li
                key={m.name}
                className="card w-[260px] shrink-0 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-cream-100">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="260px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-ink-300">
                      {initials(m.name)}
                    </div>
                  )}
                </div>
                <div className="p-5 flex items-start justify-between gap-3 flex-1">
                  <div>
                    <div className="font-semibold text-ink-800">{m.name}</div>
                    <div className="mt-0.5 text-sm text-ink-500">{m.title}</div>
                  </div>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="w-9 h-9 rounded-full border hairline text-ink-500 flex items-center justify-center hover:text-brand-500 hover:border-brand-500 transition shrink-0"
                  >
                    <Linkedin className="w-4 h-4" strokeWidth={1.75} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
