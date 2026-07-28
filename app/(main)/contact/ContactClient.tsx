"use client";

import { useEffect, useState } from "react";
import { divisions } from "@/lib/divisions";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, CheckCircle2, CalendarCheck, Handshake, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const LINES = [
  { key: "hq", label: "All of Woola", phone: site.phone },
  ...divisions.map((d) => ({
    key: d.slug,
    label: d.name.replace("Woola ", ""),
    phone: d.contactPhone,
  })),
];

/** Live-ish dispatch status from Vancouver local time (Mon-Fri, 7:00-17:00). */
function useDispatchOpen() {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const compute = () => {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Vancouver",
        hour: "numeric",
        hour12: false,
        weekday: "short",
      }).formatToParts(new Date());
      const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
      const day = parts.find((p) => p.type === "weekday")?.value ?? "";
      setOpen(!["Sat", "Sun"].includes(day) && hour >= 7 && hour < 17);
    };
    compute();
    const t = setInterval(compute, 60_000);
    return () => clearInterval(t);
  }, []);
  return open;
}

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [line, setLine] = useState(0);
  const open = useDispatchOpen();
  const current = LINES[line];

  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-20 pb-16 relative">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="eyebrow !text-brand-400">Contact</div>
            {open !== null && (
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
                <span className="relative flex w-2.5 h-2.5">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
                      open ? "bg-green-400" : "bg-amber-400"
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full w-2.5 h-2.5 ${
                      open ? "bg-green-400" : "bg-amber-400"
                    }`}
                  />
                </span>
                <span className={open ? "text-green-300" : "text-amber-300"}>
                  {open ? "Dispatch is answering now" : "After hours · contracted clients still get through"}
                </span>
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-cream-50 leading-tight">
            Talk to dispatch.
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {LINES.map((l, i) => (
              <button
                key={l.key}
                type="button"
                onClick={() => setLine(i)}
                onMouseEnter={() => setLine(i)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition border ${
                  i === line
                    ? "bg-brand-500 border-brand-500 text-cream-50"
                    : "border-cream-50/25 text-cream-100/75 hover:border-cream-50/60 hover:text-cream-50"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            key={current.key}
            href={`tel:${current.phone}`}
            className="mt-5 block text-[13vw] md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-cream-50 hover:text-brand-400 transition-colors tabular-nums animate-[intro-in_0.35s_ease-out]"
          >
            {current.phone}
          </a>
          <div className="mt-2 text-sm text-cream-100/60">
            {current.key === "hq" ? "Rings the coordination office in Coquitlam." : `Rings ${current.label} dispatch directly.`}
          </div>
          <div aria-hidden className="mt-7 h-0.5 w-[min(420px,70vw)] bg-brand-500" />
          <p className="mt-6 text-lg text-cream-100/80 max-w-2xl">
            Dispatch answers live, Monday to Friday, 7 to 5. Contracted clients reach the
            same line 24/7. Prefer a callback? Thirty seconds of form below.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 border-b hairline">
        <div className="bg-ink-800 text-cream-50 px-6 md:px-12 lg:px-16 py-14">
          <div className="eyebrow !text-brand-400">Direct lines</div>
          <div className="mt-6">
            {divisions.map((d) => (
              <a
                key={d.slug}
                href={`tel:${d.contactPhone}`}
                className="flex items-baseline justify-between gap-4 py-4 border-b border-ink-600 group"
              >
                <span>
                  <span className="block text-lg font-semibold text-cream-50 group-hover:text-brand-400 transition">
                    {d.name}
                  </span>
                  <span className="block text-xs text-cream-100/60 mt-0.5">{d.subtitle}</span>
                </span>
                <span className="text-lg font-medium text-cream-100/90 tabular-nums whitespace-nowrap group-hover:text-brand-400 transition">
                  {d.contactPhone}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-brand-400" strokeWidth={1.5} />
              <span className="text-cream-100/85">
                {site.hq.line1}
                <br />
                {site.hq.line2}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-brand-400" strokeWidth={1.5} />
              <span className="text-cream-100/85">
                {site.hours}
                <br />
                {site.emergency}
              </span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-ink-600 space-y-4 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 group">
              <Mail className="w-4 h-4 text-brand-400" strokeWidth={1.5} />
              <span className="text-cream-100/85 group-hover:text-cream-50 transition">{site.email}</span>
            </a>
            <Link href="/book" className="flex items-center gap-3 group">
              <CalendarCheck className="w-4 h-4 text-brand-400" strokeWidth={1.5} />
              <span className="text-cream-100/85 group-hover:text-cream-50 transition">
                Scoping a maintenance program? Book a portfolio review
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cream-100/50 group-hover:text-brand-400 transition" />
            </Link>
            <a
              href={`mailto:${site.email}?subject=Partnering%20with%20Woola`}
              className="flex items-center gap-3 group"
            >
              <Handshake className="w-4 h-4 text-brand-400" strokeWidth={1.5} />
              <span className="text-cream-100/85 group-hover:text-cream-50 transition">
                Partnering or business? Reach the founders directly
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cream-100/50 group-hover:text-brand-400 transition" />
            </a>
          </div>
        </div>

        <div className="bg-cream-50 px-6 md:px-12 lg:px-16 py-14">
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
