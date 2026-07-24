import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { site } from "@/lib/site";
import {
  ArrowRight,
  PhoneCall,
  Users,
  FolderClock,
  ShieldCheck,
  ClipboardList,
  AlarmClock,
  FileCheck2,
  Landmark,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Property Managers",
  description:
    "Fewer service providers. Better visibility. One-source accountability for the mission-critical systems across your portfolio: mechanical, plumbing, electrical, standby power, and build services.",
  alternates: { canonical: "https://woola.ca/property-managers" },
};

const pressures = [
  {
    icon: Building2,
    title: "Multiple properties, multiple vendors",
    body: "Every extra contractor is another COI to chase, another invoice format, another phone number that may not answer.",
  },
  {
    icon: AlarmClock,
    title: "Emergencies at the worst hours",
    body: "Floods, power failures, and no-heat calls don't respect business hours, and neither do your residents.",
  },
  {
    icon: Landmark,
    title: "Council and board communication",
    body: "Every repair needs an explanation a non-technical council can understand and approve with confidence.",
  },
  {
    icon: ClipboardList,
    title: "Budget approvals and quotes",
    body: "Depreciation reports age fast. You need current numbers, options, and honest advice on what can wait.",
  },
  {
    icon: FolderClock,
    title: "Documentation that disappears",
    body: "When vendors change, service history walks out the door with them, and the next contractor starts blind.",
  },
  {
    icon: Users,
    title: "Tenant and resident disruption",
    body: "Every visit is someone's home or business. Scheduling, notice, and site conduct matter as much as the fix.",
  },
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
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x pt-20 pb-16 relative">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-center">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Who we serve · Property Managers</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">
              Built for property managers.
            </h1>
            <p className="mt-5 text-lg text-cream-100/80 leading-relaxed">
              Fewer service providers. Better visibility. Clearer accountability. Woola brings the
              mission-critical building services under one streamlined partner, built around the way
              you actually manage a portfolio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-brand text-base">
                Send us your building list <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${site.phone}`} className="btn text-base border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
                <PhoneCall className="w-4 h-4" /> {site.phone}
              </a>
            </div>
          </div>
          <PhotoPlaceholder label="Property manager walk-through" dark className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="We get the job"
          title="Your day is coordination. Ours is too."
          description="Most contractors understand their trade. Fewer understand the pressures on the person hiring them."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressures.map((p) => (
            <div key={p.title} className="card p-7">
              <p.icon className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold text-ink-800">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
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
            {promises.map((p, i) => (
              <div key={p.title} className="rounded-md border border-white/25 bg-white/10 p-7">
                <div className="text-4xl font-semibold text-white/70" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
                  0{i + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHead
              dark
              eyebrow="What we run for portfolios"
              title="Scalable solutions, from one building to fifty."
            />
            <p className="mt-4 text-cream-100/75 leading-relaxed">
              Start with a single problem building or hand over the whole portfolio. Programs scale
              without changing your point of contact.
            </p>
            <div className="mt-8">
              <Link href="/know-your-building" className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
                How we document buildings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
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
