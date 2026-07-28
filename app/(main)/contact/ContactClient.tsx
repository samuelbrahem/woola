"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { divisions } from "@/lib/divisions";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, CheckCircle2, CalendarCheck, Handshake } from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="container-x pt-20 pb-14">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Contact</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.98]">
              Reach a human.
            </h1>
            <p className="mt-4 text-lg text-cream-100/80">
              Fastest is the phone: dispatch answers live. Or leave the form and a
              coordinator calls you back within one business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phone}`} className="btn btn-brand text-lg">
                <Phone className="w-5 h-5" /> {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800 text-lg"
              >
                <Mail className="w-5 h-5" /> {site.email}
              </a>
            </div>
            <p className="mt-4 text-sm text-cream-100/60">{site.emergency}</p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 card p-8">
            {submitted ? (
              <div className="py-12 text-center">
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
                className="space-y-5"
              >
                <div>
                  <h2 className="text-xl font-semibold text-ink-800">Have us call you</h2>
                  <p className="mt-1 text-sm text-ink-500">
                    Four fields. A coordinator does the rest.
                  </p>
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

          <div className="lg:col-span-2 space-y-4">
            <div className="card p-7">
              <div className="eyebrow">Direct lines</div>
              <div className="mt-4 space-y-3">
                {divisions.map((d) => (
                  <a
                    key={d.slug}
                    href={`tel:${d.contactPhone}`}
                    className="flex items-center justify-between gap-3 text-sm group"
                  >
                    <span className="font-medium text-ink-800 group-hover:text-brand-500 transition">
                      {d.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-ink-600 whitespace-nowrap">
                      <Phone className="w-3.5 h-3.5 text-brand-500" /> {d.contactPhone}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-7">
              <div className="eyebrow">Headquarters</div>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-500" strokeWidth={1.5} />
                  <span>{site.hq.line1}<br />{site.hq.line2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                  <span>{site.hours}</span>
                </div>
              </div>
            </div>

            <div className="card p-7 space-y-4 text-sm">
              <Link href="/book" className="flex items-start gap-3 group">
                <CalendarCheck className="w-4 h-4 mt-0.5 text-brand-500" strokeWidth={1.5} />
                <span>
                  <span className="font-medium text-ink-800 group-hover:text-brand-500 transition">
                    Maintenance program?
                  </span>{" "}
                  <span className="text-ink-500">Book a portfolio review.</span>
                </span>
              </Link>
              <a
                href={`mailto:${site.email}?subject=Partnering%20with%20Woola`}
                className="flex items-start gap-3 group"
              >
                <Handshake className="w-4 h-4 mt-0.5 text-brand-500" strokeWidth={1.5} />
                <span>
                  <span className="font-medium text-ink-800 group-hover:text-brand-500 transition">
                    Partnering or business?
                  </span>{" "}
                  <span className="text-ink-500">Reach the founders directly.</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Section>
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
