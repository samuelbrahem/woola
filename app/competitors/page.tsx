import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { competitors } from "@/lib/competitors";
import { Check, X, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Why Woola — Comparison",
  description: "How Woola compares to the multi-vendor stack most property managers run today.",
};

const woolaRow = {
  name: "Woola",
  focus: "Mechanical · Electrical · Build — coordinated",
  hasCalculator: true,
  has247: true,
  hasRebates: true,
  hasCityPages: true,
  segment: "MEP + Build",
};

export default function CompetitorsPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-24 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Honest comparison</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              We respect the competition. <span className="italic text-ink-600">And we still think we win.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-500">
              These are the firms property managers in the Lower Mainland actually evaluate against us.
              Here's what each is good at — and where Woola's coordinated three-division model wins.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="At a glance"
          title="Feature-by-feature."
          description="A factual scorecard against public information from each company's website."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-ink-400 border-b hairline">
                <th className="py-3 pr-4 font-medium">Provider</th>
                <th className="py-3 pr-4 font-medium">Focus</th>
                <th className="py-3 pr-4 font-medium">Segment</th>
                <th className="py-3 pr-4 font-medium">Estimator</th>
                <th className="py-3 pr-4 font-medium">24/7</th>
                <th className="py-3 pr-4 font-medium">Rebate help</th>
                <th className="py-3 pr-4 font-medium">City pages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hairline bg-ink-800 text-cream-50">
                <td className="py-4 pr-4 font-semibold">Woola</td>
                <td className="py-4 pr-4">{woolaRow.focus}</td>
                <td className="py-4 pr-4">{woolaRow.segment}</td>
                <td className="py-4 pr-4"><Yes light /></td>
                <td className="py-4 pr-4"><Yes light /></td>
                <td className="py-4 pr-4"><Yes light /></td>
                <td className="py-4 pr-4"><Yes light /></td>
              </tr>
              {competitors.map((c) => (
                <tr key={c.name} className="border-b hairline hover:bg-cream-100/50">
                  <td className="py-4 pr-4 font-medium text-ink-800">{c.name}</td>
                  <td className="py-4 pr-4 text-ink-600">{c.focus}</td>
                  <td className="py-4 pr-4 text-ink-600">{c.segment}</td>
                  <td className="py-4 pr-4">{c.hasCalculator ? <Yes /> : <No />}</td>
                  <td className="py-4 pr-4">{c.has247 ? <Yes /> : <No />}</td>
                  <td className="py-4 pr-4">{c.hasRebates ? <Yes /> : <No />}</td>
                  <td className="py-4 pr-4">{c.hasCityPages ? <Yes /> : <No />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <SectionHead
            eyebrow="Provider by provider"
            title="What each competitor is genuinely good at."
            description="No trash talk. Here's the honest read on each firm — and where Woola's model differs."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((c) => (
              <div key={c.name} className="card p-7 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink-800">{c.name}</h3>
                  <a href={c.url} target="_blank" rel="noreferrer" className="text-ink-400 hover:text-ink-800">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-400">{c.segment} · {c.yearsInBusiness}+ yrs</div>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{c.notes}</p>
                <div className="mt-5 pt-5 border-t hairline">
                  <div className="text-xs uppercase tracking-wider text-ink-400 mb-2">Where Woola steps in</div>
                  <ul className="space-y-1.5">
                    {c.weakSpots.map((w) => (
                      <li key={w} className="text-xs text-ink-600 flex gap-2">
                        <span className="text-brand-500 mt-0.5">→</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="The Woola edge"
              title="Most stacks of vendors collapse into three categories."
            />
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-6">
              {[
                {
                  t: "Specialists you can only book one trade with.",
                  b: "Excellent at what they do, but every other discipline becomes another phone call. We coordinate all three under one PO.",
                },
                {
                  t: "Multi-trade companies that bolted services onto a single original trade.",
                  b: "Plumbing-led shops adding HVAC, or HVAC-led shops adding plumbing. Often strong on the original trade, thinner on the rest. Woola was built MEP-first.",
                },
                {
                  t: "Residential-volume shops that lost the strata muscle.",
                  b: "Fleets of 100+ trucks, but reporting and invoicing built for retail residential. Council members want condition reports, not service-call receipts.",
                },
              ].map((it, i) => (
                <li key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-ink-800 text-cream-50 flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-ink-800">{it.t}</div>
                    <div className="text-sm text-ink-500 mt-1">{it.b}</div>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/about" className="btn btn-outline mt-8">
              Read how we coordinate trades <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Bring the buildings keeping you up at night."
        description="We'll walk them, audit the current vendor stack, and propose a coverage plan you can take to your council or owner."
      />
    </>
  );
}

function Yes({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${light ? "bg-brand-500 text-ink-800" : "bg-ink-800 text-cream-50"}`}>
      <Check className="w-3 h-3" strokeWidth={3} />
    </span>
  );
}
function No() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cream-100 text-ink-300 border hairline">
      <X className="w-3 h-3" strokeWidth={3} />
    </span>
  );
}
