import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import Image from "next/image";
import { site } from "@/lib/site";
import {
  ArrowRight,
  PhoneCall,
  FolderClock,
  ShieldCheck,
  AlarmClock,
  FileCheck2,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Property Managers",
  description:
    "Fewer service providers. Better visibility. One-source accountability for the mission-critical systems across your portfolio: mechanical, plumbing, electrical, standby power, and build services.",
  alternates: { canonical: "https://woola.ca/property-managers" },
};

/** Woola versus running separate vendors for each trade. Each Woola division
 *  carries its own COI, so insurance paperwork is deliberately not a row. */
const comparison: { item: string; woola: string; others: string; othersOk?: boolean }[] = [
  { item: "Who you call", woola: "One dispatch desk for mechanical, power, electrical, and build", others: "A different number for each trade" },
  { item: "Who shows up", woola: "Woola crews on our own team", others: "Subcontractors you have not vetted" },
  { item: "Emergencies", woola: "One 24/7 line, any trade, for contracted buildings", others: "Whichever vendor answers after hours" },
  { item: "Service history", woola: "Kept against the building, with photos and serial numbers", others: "Spread across each vendor's inbox" },
  { item: "Council and board paperwork", woola: "Photo-documented reports written so a council can approve them", others: "A work order and an invoice", othersOk: true },
  { item: "Pricing", woola: "Fixed price where the scope is defined, published unit rates where it is not", others: "Varies by vendor", othersOk: true },
  { item: "Scaling up", woola: "One building or fifty, same point of contact", others: "A new vendor search for each building" },
];

const promises = [
  {
    title: "One call",
    body: "Woola coordinates the technical expertise. You don't diagnose the problem before phoning; our dispatcher figures out which trade rolls.",
  },
  {
    title: "One relationship",
    body: "A named account contact who knows your buildings, your councils, and your approval thresholds.",
  },
  {
    title: "One service history",
    body: "Asset inventory, photos, and every work order stay connected to the property, not to a vendor's inbox.",
  },
  {
    title: "One accountable team",
    body: "Mechanical, plumbing, electrical, power, and build trades on one roster. We own the outcome, end to end.",
  },
];

export default function PropertyManagersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 text-cream-50">
        <Image
          src="/field/08-11-2026-van-7.jpg"
          alt="Woola van arriving at a commercial building entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/90" />
        <div className="container-x pt-24 pb-20 relative">
          <div className="max-w-3xl">
            <div className="rise eyebrow !text-brand-400">Who we serve · Property Managers</div>
            <h1 className="rise rise-1 mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">
              Built for property managers.
            </h1>
            <p className="rise rise-2 mt-5 text-lg text-cream-100/85 leading-relaxed max-w-2xl">
              Mechanical, power, electrical, and build crews for your portfolio, booked through one
              dispatch desk and reported in a format your council can read.
            </p>
            <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-brand text-base">
                Send us your building list <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${site.phone}`} className="btn text-base border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
                <PhoneCall className="w-4 h-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="How we work with property managers"
          title="How we work with property managers."
          description="What changes for you when the trades sit under one roof, compared with running a separate vendor for each."
        />
        <div className="mt-10 card overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-ink-800 text-cream-50 text-xs uppercase tracking-wider">
            <div className="col-span-3 px-6 py-4">&nbsp;</div>
            <div className="col-span-5 px-6 py-4 bg-brand-500 font-semibold">With Woola</div>
            <div className="col-span-4 px-6 py-4">Separate vendors</div>
          </div>
          <ul>
            {comparison.map((row) => (
              <li key={row.item} className="grid md:grid-cols-12 border-t hairline">
                <div className="md:col-span-3 px-6 pt-5 md:py-5 text-sm font-semibold text-ink-800">{row.item}</div>
                <div className="md:col-span-5 px-6 py-3 md:py-5 bg-brand-500/5 flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-ink-800 leading-relaxed">{row.woola}</span>
                </div>
                <div className="md:col-span-4 px-6 pb-5 md:py-5 flex items-start gap-3">
                  <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${row.othersOk ? "bg-ink-200 text-ink-600" : "bg-ink-200 text-ink-700"}`}>
                    {row.othersOk ? <span className="text-[10px] font-bold">~</span> : <X className="w-3 h-3" strokeWidth={3} />}
                  </span>
                  <span className="text-sm text-ink-500 leading-relaxed">{row.others}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-brand-500 text-white relative overflow-hidden">
        <div className="container-x section relative">
          <SectionHead
            eyebrow="The Woola answer"
            title="One-source accountability."
            description="Four promises we make to every portfolio we take on."
            dark
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((p) => (
              <div key={p.title} className="rounded-md border border-white/25 bg-white/10 p-7">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHead
              dark
              eyebrow="What we run for portfolios"
              title="Scalable solutions, from one building to fifty."
              description="Start with a single problem building or hand over the whole portfolio. Programs scale without changing your point of contact."
            />
            <Link href="/know-your-building" className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800 shrink-0">
              How we document buildings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, title: "Comprehensive maintenance", body: "Custom calendars per building and asset class, with compliance testing built in.", href: "/build/maintenance" },
              { icon: AlarmClock, title: "24/7 emergency response", body: "Priority dispatch for contracted portfolios. One number, any trade.", href: "/contact" },
              { icon: FolderClock, title: "Asset inventory & service history", body: "Every asset documented, every visit recorded against the property.", href: "/know-your-building" },
              { icon: FileCheck2, title: "Capital planning", body: "Renewal timelines and budget ranges your council can plan around.", href: "/know-your-building" },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="card p-6 group">
                <s.icon className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
                <h3 className="mt-3 font-semibold text-ink-800 group-hover:text-brand-500 transition">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FleetStrip />

      <CTABanner
        title="Send us your building list."
        description="We'll come back with a coverage plan, response windows, and a proposed maintenance scope, in a format you can forward straight to your council."
      />
    </>
  );
}
