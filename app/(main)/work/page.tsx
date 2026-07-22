import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { divisions } from "@/lib/divisions";
import { ArrowRight, AlertTriangle, Lightbulb, Users2, CheckCircle2 } from "lucide-react";

type CaseStudy = {
  title: string;
  tag: string;
  challenge: string;
  solution: string;
  teams: string[];
  result: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "120-ton heat pump / chiller retrofit",
    tag: "Mechanical modernization",
    challenge:
      "An aging chiller plant at end of life, with rising energy costs and a council wary of a months-long disruption to cooling.",
    solution:
      "Engineered and installed a 120-ton heat pump/chiller replacement, with the electrical service work handled by our own division instead of a second contractor.",
    teams: ["Mechanical", "Electrical"],
    result:
      "A modern, lower-carbon plant commissioned under one PO, with the asset documented into the building's service history from day one.",
  },
  {
    title: "La Casa: three-generator standby installation",
    tag: "Standby power",
    challenge:
      "A community that could not afford to lose power to life-safety systems, requiring three coordinated standby generators with fuel, transfer, and commissioning scope.",
    solution:
      "Supplied and installed three standby generator sets: siting, gas and fuel connections, transfer switching, and CSA C282 commissioning run as one project.",
    teams: ["Power Systems", "Electrical", "Build"],
    result:
      "Three units commissioned and enrolled in an ongoing maintenance and load-bank testing program with full compliance documentation.",
  },
  {
    title: "56-unit domestic water repipe",
    tag: "Occupied-building plumbing",
    challenge:
      "Failing domestic water piping across 56 occupied units, where every day of shutdown and every wall opened matters to residents.",
    solution:
      "Phased re-pipe with suite-by-suite scheduling, daily water restoration, and in-house drywall and finishing repairs behind the plumbers.",
    teams: ["Mechanical", "Build"],
    result:
      "New domestic water system completed with residents in place, and wall repairs closed by the same accountable team.",
  },
  {
    title: "10-inch underground sanitary replacement",
    tag: "Civil & underground",
    challenge:
      "A failed 10-inch sanitary main under an active property: excavation, shoring, bypass, and municipal coordination in one scope.",
    solution:
      "Excavated and replaced the sanitary main with bypass pumping to keep the building in service, coordinating inspections and restoration in-house.",
    teams: ["Build", "Mechanical"],
    result:
      "Service restored on schedule, site reinstated, and the buried asset mapped and added to the property's documentation.",
  },
];

export const metadata: Metadata = {
  title: "Featured Work",
  description:
    "Recent Woola projects across mechanical, power, electrical, and building divisions: boiler swaps, EV rollouts, standby generator programs, envelope rehabs, and more.",
  alternates: { canonical: "https://woola.ca/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow">Featured work</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              The work speaks first.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl">
              A cross-section of projects our four divisions have shipped in the past 18
              months: retrofits, rollouts, rehabs, and the recurring programs that keep
              buildings out of trouble.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <SectionHead
            eyebrow="Case studies"
            title="Multi-trade projects, one accountable team."
            description="The proof of the integrated model: real projects where divisions worked the same site under one PO."
            dark
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((c) => (
              <article key={c.title} className="rounded-md border border-ink-600 bg-ink-700/40 p-8 flex flex-col">
                <span className="self-start text-[10px] font-semibold tracking-widest uppercase bg-brand-500/20 text-brand-400 px-2 py-1 rounded">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-cream-50">{c.title}</h3>
                <dl className="mt-6 space-y-5 flex-1">
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                      <AlertTriangle className="w-3.5 h-3.5" /> The challenge
                    </dt>
                    <dd className="mt-1.5 text-sm text-cream-100/85 leading-relaxed">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                      <Lightbulb className="w-3.5 h-3.5" /> The solution
                    </dt>
                    <dd className="mt-1.5 text-sm text-cream-100/85 leading-relaxed">{c.solution}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The result
                    </dt>
                    <dd className="mt-1.5 text-sm text-cream-100/85 leading-relaxed">{c.result}</dd>
                  </div>
                </dl>
                <div className="mt-6 pt-5 border-t border-ink-600 flex items-center gap-2 flex-wrap">
                  <Users2 className="w-4 h-4 text-brand-400" />
                  {c.teams.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-ink-500 text-cream-100">
                      Woola {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {divisions.map((d, idx) => (
        <section
          key={d.slug}
          className={idx % 2 === 1 ? "bg-cream-100 border-y hairline" : ""}
        >
          <div className="container-x section">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <SectionHead
                eyebrow={d.subtitle}
                title={`${d.name} projects.`}
              />
              <Link
                href={`/${d.slug}`}
                className="text-sm font-medium text-ink-800 hover:text-brand-500 inline-flex items-center gap-1.5"
              >
                Visit the division <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {d.featured.map((p) => (
                <article
                  key={p.title}
                  className="card flex flex-col h-full bg-white overflow-hidden group"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-ink-100">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink-800/40 via-transparent to-transparent"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase bg-ink-800/80 text-cream-50 px-2 py-1 rounded backdrop-blur">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-ink-800 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
                      {p.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        title="Want the full portfolio for your asset class?"
        description="Tell us your building type and we'll send relevant case studies, references, and the crew leads who ran them."
      />
    </>
  );
}
