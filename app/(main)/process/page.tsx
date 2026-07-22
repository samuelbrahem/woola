import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import {
  ArrowRight,
  ClipboardList,
  FileSignature,
  CalendarClock,
  Camera,
  PhoneCall,
  Wrench,
  FileCheck2,
  Repeat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Woola runs every job: walk-through and condition report, scoped fixed-price proposal, coordinated scheduling, and photo-documented closeout. One dispatcher, one PO.",
  alternates: { canonical: "https://woola.ca/process" },
};

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Walk-through & condition report",
    body: "We document the existing systems, capture asset photos, and tag risks. A written condition report lands in your inbox within 48 hours of the visit.",
    deliverable: "Condition report with photos and risk flags",
  },
  {
    icon: FileSignature,
    step: "02",
    title: "Scoped proposal, fixed-price where we can",
    body: "Well-defined work gets a fixed price we hold. Open-ended work runs on published unit rates, so there is no end-of-job surprise either way.",
    deliverable: "Written proposal with holdable pricing",
  },
  {
    icon: CalendarClock,
    step: "03",
    title: "Scheduled work with one coordinator",
    body: "Your dispatcher handles permits, parts, sub-trades, and timing. You get a single text thread and a named coordinator, not five phone numbers.",
    deliverable: "One schedule, one contact, live updates",
  },
  {
    icon: Camera,
    step: "04",
    title: "Photo-documented closeout",
    body: "Every job closes with before-and-after photos, equipment serial numbers, and renewal dates, all stored in your asset registry for the next visit.",
    deliverable: "Closeout package in your asset registry",
  },
];

const standards = [
  {
    icon: PhoneCall,
    title: "One number, answered",
    body: "Dispatch picks up weekdays 7 to 5 and runs a 24/7 emergency line for contracted clients. No call trees.",
  },
  {
    icon: Wrench,
    title: "Our own trades",
    body: "Red Seal, gas-ticketed, and FSR-certified technicians on our payroll. Specialty trades come from a vetted partner bench we have used for years.",
  },
  {
    icon: FileCheck2,
    title: "Paperwork included",
    body: "Permits, rebate applications, compliance certificates, and inspection sign-offs are filed by us and copied to you.",
  },
  {
    icon: Repeat,
    title: "Plans that renew themselves",
    body: "Maintenance contracts carry renewal calendars, so filters, tests, and inspections happen on schedule without anyone chasing.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Our process</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.98]">
              The same four steps. Every job.
            </h1>
            <p className="mt-5 text-lg text-cream-100/80 max-w-2xl">
              Whether it is a $500 repair or a $2M retrofit, the rhythm does not change:
              document, propose, coordinate, close out. Property managers know what to
              expect, and our techs never waste a truck-roll.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary">
                Book a walk-through <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/work" className="btn btn-ghost">
                See the work it produces
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="The delivery model"
          title="Four steps, each with a deliverable."
          description="Every step hands you something concrete. If a vendor cannot tell you what you get at each stage, that is the finger-pointing starting early."
        />
        <ol className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <li key={s.step} className="card p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-cream-50 flex items-center justify-center">
                  <s.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-4xl font-bold text-ink-100 tracking-tight">{s.step}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink-800">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">{s.body}</p>
              <div className="mt-5 pt-5 border-t hairline text-sm">
                <span className="eyebrow !text-[10px]">You receive</span>
                <div className="mt-1 font-medium text-ink-800">{s.deliverable}</div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <SectionHead
            eyebrow="Service standards"
            title="What stays true on every job."
            dark
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((s) => (
              <div key={s.title} className="rounded-md border border-ink-600 p-6 bg-ink-700/40">
                <s.icon className="w-6 h-6 text-brand-400" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-cream-50">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-200 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start with a walk-through."
        description="Send us your building list and we'll schedule the condition report that kicks everything off."
      />
    </>
  );
}
