import Image from "next/image";
import { Play, Film } from "lucide-react";
import type { Division } from "@/lib/divisions";

/** Full-width promo film slot for each business unit. Renders the looping
 *  video when division.video is set; until then, a poster frame holds the space. */
export function DivisionVideoBanner({ division }: { division: Division }) {
  return (
    <section className="relative w-full overflow-hidden bg-ink-900">
      <div className="relative h-[42vh] min-h-[300px] max-h-[480px]">
        {division.video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={division.video}
            poster={division.heroImage}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <>
            <Image
              src={division.heroImage}
              alt={division.heroImageAlt}
              fill
              sizes="100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-ink-900/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="mx-auto w-16 h-16 rounded-full border-2 border-cream-50/60 flex items-center justify-center backdrop-blur-sm bg-cream-50/10">
                  <Play className="w-6 h-6 text-cream-50 translate-x-0.5" strokeWidth={1.5} />
                </div>
                <div className="mt-4 eyebrow !text-brand-400 !tracking-[0.3em]">
                  {division.name} · The Film
                </div>
                <p className="mt-2 text-sm text-cream-100/70 max-w-sm mx-auto">
                  A 30-second look at this crew in the field. Currently in production.
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 right-5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-cream-100/50">
              <Film className="w-3.5 h-3.5" /> Video banner slot
            </div>
          </>
        )}
      </div>
    </section>
  );
}
