"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { divisions } from "@/lib/divisions";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Wrench, CalendarCheck, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-24 pb-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow">Contact</div>
              <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
                Tell us about the building.
              </h1>
              <p className="mt-5 text-lg text-ink-500">
                A coordinator gets in touch within one business day. For contracted-client emergencies, call our
                24/7 line at {site.phone}.
              </p>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop"
                  alt="Woola coordination office"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white border-b hairline">
        <div className="container-x py-10 grid md:grid-cols-3 gap-4">
          <a href="#contact-form" className="card p-6 group">
            <Wrench className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            <h2 className="mt-3 font-semibold text-ink-800 group-hover:text-brand-500 transition">Request service</h2>
            <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
              An existing or immediate service need. Use the form below and dispatch takes it from there.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
              To the form <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          <Link href="/book" className="card p-6 group">
            <CalendarCheck className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            <h2 className="mt-3 font-semibold text-ink-800 group-hover:text-brand-500 transition">Discuss a maintenance program</h2>
            <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
              Property and facility managers: book a meeting to scope comprehensive maintenance for your portfolio.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
              Book a meeting <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <a href={`mailto:${site.email}?subject=Partnering%20with%20Woola`} className="card p-6 group">
            <Handshake className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            <h2 className="mt-3 font-semibold text-ink-800 group-hover:text-brand-500 transition">Partner with Woola</h2>
            <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
              Business owners, operators, and growth conversations. Reach the founders directly.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
              Email us <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>

      <Section>
        <div id="contact-form" className="grid lg:grid-cols-5 gap-10 scroll-mt-28">
          <div className="lg:col-span-3 card p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto text-brand-500" strokeWidth={1.5} />
                <h2 className="mt-4 text-2xl font-semibold text-ink-800">Got it.</h2>
                <p className="mt-2 text-ink-500">
                  A coordinator will follow up within one business day. If it's an emergency, please call{" "}
                  <a href={`tel:${site.phone}`} className="font-medium underline">{site.phone}</a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-ghost mt-6"
                >
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
                <div className="eyebrow">Request a walk-through</div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Name" name="name" required />
                  <Field label="Company / strata" name="org" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">Property address</label>
                  <input className="field" name="address" placeholder="123 Main St, Vancouver BC" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">Which division?</label>
                  <select className="field" name="division" defaultValue="any">
                    <option value="any">All / not sure</option>
                    {divisions.map((d) => (
                      <option key={d.slug} value={d.slug}>{d.name}</option>
                    ))}
                    <option value="emergency">Emergency: call dispatch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">What's going on?</label>
                  <textarea
                    className="field"
                    name="notes"
                    rows={5}
                    placeholder="Brief description of the building, the scope, and any deadlines."
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center">
                  Send request
                </button>
                <p className="text-xs text-ink-400 text-center">
                  We never share contact details. Replies come from a human coordinator, not a chatbot.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="card p-7">
              <div className="eyebrow">Headquarters</div>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-brand-500" strokeWidth={1.5} /><span>{site.hq.line1}<br />{site.hq.line2}</span></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-500" strokeWidth={1.5} /><a href={`tel:${site.phone}`} className="font-medium">{site.phone}</a></div>
                <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-500" strokeWidth={1.5} /><a href={`mailto:${site.email}`}>{site.email}</a></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-brand-500" strokeWidth={1.5} /><span>{site.hours}</span></div>
              </div>
            </div>
            {divisions.map((d) => (
              <div key={d.slug} className="card p-6">
                <div className="eyebrow">{d.subtitle}</div>
                <div className="mt-1 font-semibold text-ink-800">{d.name}</div>
                <div className="mt-3 text-sm space-y-2">
                  <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-500" /><a href={`tel:${d.contactPhone}`}>{d.contactPhone}</a></div>
                  <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-brand-500" /><a href={`mailto:${d.contactEmail}`}>{d.contactEmail}</a></div>
                </div>
              </div>
            ))}
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
      <label className="block text-sm font-medium text-ink-700 mb-2">{label}{required && <span className="text-brand-500"> *</span>}</label>
      <input className="field" name={name} type={type} required={required} />
    </div>
  );
}
