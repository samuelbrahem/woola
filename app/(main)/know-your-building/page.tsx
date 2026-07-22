import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { BuildingXray } from "@/components/BuildingXray";
import {
  ArrowRight,
  Tag,
  Camera,
  History,
  Search,
  ClipboardList,
  Wrench,
  FileText,
  TrendingUp,
  LockKeyhole,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Know Your Building",
  description:
    "Asset inventory, service history, and capital planning for commercial and strata properties. Woola turns equipment documentation into building intelligence.",
  alternates: { canonical: "https://woola.ca/know-your-building" },
};

const assetFields = [
  "Make & model",
  "Serial number",
  "Location",
  "Age",
  "Condition",
  "Photos",
  "Service history",
  "Deficiencies",
  "Recommendations",
  "Warranty status",
  "Compliance records",
  "Replacement timeline",
];

const cycle = [
  {
    icon: Search,
    step: "Inspect",
    body: "Understand the current condition of every mission-critical asset in the building.",
  },
  {
    icon: ClipboardList,
    step: "Document",
    body: "Build an accurate asset inventory: tags, photos, data plates, and locations.",
  },
  {
    icon: Wrench,
    step: "Maintain",
    body: "Run comprehensive maintenance scheduled by what each asset actually needs.",
  },
  {
    icon: FileText,
    step: "Report",
    body: "Communicate deficiencies and recommendations in language a council can act on.",
  },
  {
    icon: TrendingUp,
    step: "Plan",
    body: "Turn service history into capital planning: what's due now, next year, in five years.",
  },
];

export default function KnowYourBuildingPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="eyebrow">Technology & Reporting</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.95]">
              Know your building.
            </h1>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              Your building contains hundreds of assets with different ages, conditions, and
              replacement timelines. Better information leads to better decisions, so we treat
              documentation as a product, not paperwork.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Asset inventory"
              title="Every asset, on the record."
            />
            <p className="mt-4 text-ink-500 leading-relaxed">
              Every Woola maintenance client gets a growing digital profile of their building. Each
              visit makes the record more complete, and the record stays with the property, not
              with a vendor who might not be there next year.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-ink-600">
              <LockKeyhole className="w-4 h-4 text-brand-500" />
              Delivered through the <Link href="/portal" className="font-medium underline hover:text-brand-500">client portal</Link> as it comes online.
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {assetFields.map((f) => (
                <div key={f} className="card p-4 flex items-center gap-3">
                  <Tag className="w-4 h-4 text-brand-500 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-ink-800">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
              <Camera className="w-3.5 h-3.5" />
              Photo-documented on every visit
              <span className="mx-1">·</span>
              <History className="w-3.5 h-3.5" />
              History retained for the life of the asset
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <SectionHead
            eyebrow="How it works"
            title="Inspect. Document. Maintain. Report. Plan."
            description="A cycle, not a one-time audit. Each pass through makes the next budget season easier."
          />
          <div className="mt-12 grid md:grid-cols-5 gap-4">
            {cycle.map((c, i) => (
              <div key={c.step} className="card p-6 bg-white">
                <div className="flex items-center justify-between">
                  <c.icon className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
                  <span className="text-xs font-semibold text-ink-400">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-semibold text-ink-800 uppercase tracking-wide text-sm">{c.step}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Interactive · Building X-Ray"
          title="What capital planning looks like."
          description="Pick a building type and drag the age slider. This is the same logic we apply to real buildings, with your real asset inventory instead of a diagram."
        />
        <div className="mt-12">
          <BuildingXray />
        </div>
      </Section>

      <section className="bg-brand-500 text-white relative overflow-hidden">
        <div className="container-x section relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="eyebrow !text-white/80">The payoff</div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Move from contractor to building partner.
              </h2>
              <p className="mt-5 text-white/85 leading-relaxed max-w-2xl">
                What needs attention now? What can wait? What should the council budget for next
                year, and five years out? When the service history lives with the building, those
                questions get answers instead of guesses.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/property-managers" className="btn bg-ink-900 text-cream-50 hover:bg-ink-700 text-base">
                For property managers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Start with one building."
        description="Book an assessment and we'll document the mission-critical assets, flag what's due, and hand you a record you own, whatever you decide next."
      />
    </>
  );
}
