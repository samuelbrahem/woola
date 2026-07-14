import { Section, SectionHead } from "@/components/Section";
import { Calculator } from "@/components/Calculator";
import { CTABanner } from "@/components/CTABanner";
import { Info } from "lucide-react";

export const metadata = {
  title: "HVAC & Mechanical Estimator",
  description:
    "Free rough estimator for heat pumps, furnaces, AC, and hot water systems in BC. Live rebate-aware pricing.",
};

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-24 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Free tool</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              The mechanical estimator.
            </h1>
            <p className="mt-5 text-lg text-ink-500">
              A pre-quote rough estimate for the most common BC home mechanical projects. Move the
              sliders to see equipment, install, rebate, and net cost ranges.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <Calculator />
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <SectionHead
            eyebrow="How it works"
            title="What's in (and not in) this number."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "What's included",
                b: "Equipment (low-to-mid tier), standard install labour, permit, basic line set, condensate, and clean-up. For furnace/AC, includes thermostat and basic ducting modification.",
              },
              {
                t: "What's not",
                b: "Major duct rework, electrical service upgrades beyond a 100 A subpanel, asbestos abatement, decommissioning oil tanks, or anything an engineer's report unlocks.",
              },
              {
                t: "Rebate math",
                b: "We apply CleanBC Better Homes, BC Hydro and FortisBC stacks where applicable. Final amounts are confirmed at the in-home estimate based on income, fuel switch, and equipment specifics.",
              },
            ].map((c) => (
              <div key={c.t} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-brand-500" />
                  <span className="text-sm font-semibold text-ink-800">{c.t}</span>
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want the real number?"
        description="A Woola technician walks the home, measures the load, looks at electrical and ducting, and gives a fixed proposal, usually within 48 hours."
      />
    </>
  );
}
