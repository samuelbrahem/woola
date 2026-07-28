"use client";

import { useState } from "react";
import { divisions } from "@/lib/divisions";
import { site } from "@/lib/site";
import { Mail, MapPin, Clock, CheckCircle2, CalendarCheck, Handshake, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-20 pb-16">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink-800 leading-tight">
            Talk to dispatch.
          </h1>
          <a
            href={`tel:${site.phone}`}
            className="mt-6 block text-[13vw] md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-ink-800 hover:text-brand-500 transition-colors tabular-nums"
          >
            {site.phone}
          </a>
          <div aria-hidden className="mt-8 h-0.5 w-[min(420px,70vw)] bg-brand-500" />
          <p className="mt-6 text-lg text-ink-500 max-w-2xl">
            Dispatch answers live, Monday to Friday, 7 to 5. Contracted clients reach the
            same line 24/7. Prefer a callback? Thirty seconds of form below.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 border-b hairline">
        <div className="bg-cream-100 lg:border-r hairline px-6 md:px-12 lg:px-16 py-14">
          <div className="eyebrow">Direct lines</div>
          <div className="mt-6">
            {divisions.map((d) => (
              <a
                key={d.slug}
                href={`tel:${d.contactPhone}`}
                className="flex items-baseline justify-between gap-4 py-4 border-b hairline group"
              >
                <span>
                  <span className="block text-lg font-semibold text-ink-800 group-hover:text-brand-500 transition">
                    {d.name}
                  </span>
                  <span className="block text-xs text-ink-400 mt-0.5">{d.subtitle}</span>
                </span>
                <span className="text-lg font-medium text-ink-700 tabular-nums whitespace-nowrap group-hover:text-brand-500 transition">
                  {d.contactPhone}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-brand-500" strokeWidth={1.5} />
              <span className="text-ink-600">
                {site.hq.line1}
                <br />
                {site.hq.line2}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-brand-500" strokeWidth={1.5} />
              <span className="text-ink-600">
                {site.hours}
                <br />
                {site.emergency}
              </span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t hairline space-y-4 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 group">
              <Mail className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
              <span className="text-ink-600 group-hover:text-ink-800 transition">{site.email}</span>
            </a>
            <Link href="/book" className="flex items-center gap-3 group">
              <CalendarCheck className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
              <span className="text-ink-600 group-hover:text-ink-800 transition">
                Scoping a maintenance program? Book a portfolio review
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 group-hover:text-brand-500 transition" />
            </Link>
            <a
              href={`mailto:${site.email}?subject=Partnering%20with%20Woola`}
              className="flex items-center gap-3 group"
            >
              <Handshake className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
              <span className="text-ink-600 group-hover:text-ink-800 transition">
                Partnering or business? Reach the founders directly
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 group-hover:text-brand-500 transition" />
            </a>
          </div>
        </div>

        <div className="bg-white px-6 md:px-12 lg:px-16 py-14">
          {submitted ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto text-brand-500" strokeWidth={1.5} />
              <h2 className="mt-4 text-2xl font-semibold text-ink-800">Got it.</h2>
              <p className="mt-2 text-ink-500">
                A coordinator will call you back within one business day. If it can't wait,
                call <a href={`tel:${site.phone}`} className="font-medium underline">{site.phone}</a>.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-ghost mt-6">
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5 max-w-xl"
            >
              <div>
                <div className="eyebrow">Callback</div>
                <h2 className="mt-2 text-2xl font-semibold text-ink-800">Have us call you.</h2>
                <p className="mt-1 text-sm text-ink-500">Four fields. A coordinator does the rest.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email (optional)" name="email" type="email" />
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">
                  What's going on?<span className="text-brand-500"> *</span>
                </label>
                <textarea
                  className="field"
                  name="notes"
                  rows={4}
                  required
                  placeholder="A sentence or two is plenty."
                />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                Request a callback
              </button>
              <p className="text-xs text-ink-400 text-center">
                We never share contact details. Replies come from a human coordinator, not a chatbot.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-700 mb-2">
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </label>
      <input className="field" name={name} type={type} required={required} />
    </div>
  );
}
