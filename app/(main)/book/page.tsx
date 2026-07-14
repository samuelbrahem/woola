import type { Metadata } from "next";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { ShieldCheck, Users, CalendarClock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Meeting with an Advisor",
  description:
    "Pick a time that works. A Woola property advisor will walk your portfolio, coverage needs, and maintenance planning with you. No obligation.",
  alternates: { canonical: "https://woola.ca/book" },
};

export default function BookPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-12 relative">
          <div className="max-w-3xl">
            <div className="eyebrow">Book a meeting</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              Talk to an advisor.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl">
              Pick a time below and we&apos;ll match you with a property advisor for your
              area and building type. No obligation and no prep required. Bring your questions.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-500">
            <span className="inline-flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-500" strokeWidth={1.5} /> Senior advisors, not sales reps
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarClock className="w-4 h-4 text-brand-500" strokeWidth={1.5} /> Same-week availability
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" strokeWidth={1.5} /> Video or phone, your pick
            </span>
          </div>
        </div>
      </section>

      <Section>
        <BookingCalendar />
      </Section>

      <CTABanner
        title="Prefer to just call?"
        description="Dispatch answers weekdays 7 AM – 5 PM, and 24/7 for contracted-client emergencies."
      />
    </>
  );
}
