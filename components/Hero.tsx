import Link from "next/link";
import { ArrowRight, Calculator, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[520px] -z-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(15,110,102,0.07), transparent 70%)",
        }}
      />
      <div className="container-x pt-20 md:pt-28 pb-20 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">{site.tagline}</div>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight text-ink-800">
              A people-focused
              <br />
              property services
              <br />
              <span className="script text-brand-500 text-6xl md:text-7xl lg:text-[7.5rem] leading-none">
                partner.
              </span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed">
              Woola consolidates mechanical, electrical, standby power, and building services for
              strata, commercial and high-end residential properties across Vancouver&apos;s Lower
              Mainland — under one PO and one dispatcher.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary text-base">
                Book a property assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/calculator" className="btn btn-ghost text-base">
                <Calculator className="w-4 h-4" /> Get a rough estimate
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                <span>WorkSafe COR · TECA Quality First · BOMA member</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                <span>20+ municipalities served · HQ in Coquitlam</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-ink-800 text-cream-50 rounded-md p-8 relative overflow-hidden">
              <div className="grain" />
              <div className="relative">
                <div className="eyebrow text-brand-400">Why property managers switch</div>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    "One dispatcher across HVAC, plumbing, electrical, generators, EV and building work.",
                    "Digital reporting your strata council will actually read.",
                    "CleanBC, FortisBC and BC Hydro rebate paperwork submitted in-house.",
                    "Coordinated 24/7 emergency response — not a call-tree run-around.",
                    "Fixed-price proposals where most contractors quote T&M.",
                  ].map((line, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-brand-400 rounded-full" />
                      <span className="text-cream-100">{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-ink-600 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-cream-100/60 uppercase tracking-wider">Average savings</div>
                    <div className="mt-1 text-2xl font-bold text-cream-50">14%</div>
                    <div className="text-cream-100/60 mt-0.5">vs. multi-vendor sourcing</div>
                  </div>
                  <div>
                    <div className="text-cream-100/60 uppercase tracking-wider">First response</div>
                    <div className="mt-1 text-2xl font-bold text-cream-50">&lt; 4 hr</div>
                    <div className="text-cream-100/60 mt-0.5">contracted clients, Metro Van</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t hairline">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-ink-800">OUT WORK.</span>
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-ink-800">OUT PERFORM.</span>
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-brand-500">OUT PLAY.</span>
            </div>
            <span className="text-sm text-ink-400">{site.fullName} · est. 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
