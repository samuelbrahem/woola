import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { LockKeyhole, FileText, CalendarClock, Camera, Receipt, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "The Woola client portal: work orders, photo documentation, invoices, and maintenance calendars for contracted clients. Powered by ServiceTitan.",
  alternates: { canonical: "https://woola.ca/portal" },
};

const features = [
  { icon: FileText, title: "Live work orders", body: "Every open and closed job for your buildings, with status and technician notes." },
  { icon: Camera, title: "Photo documentation", body: "Before, during, and after photos attached to every work order." },
  { icon: Receipt, title: "Invoices & approvals", body: "One place for quotes awaiting approval and monthly consolidated invoices." },
  { icon: CalendarClock, title: "Renewal calendar", body: "Upcoming inspections, filter changes, and compliance tests per asset." },
];

export default function PortalPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow">Client portal</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              Your buildings, on demand.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl">
              Contracted clients get portal access to work orders, photos, invoices,
              and maintenance calendars. Powered by our ServiceTitan platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="btn btn-primary opacity-60 cursor-not-allowed select-none">
                <LockKeyhole className="w-4 h-4" /> Sign in (coming soon)
              </span>
              <Link href="/contact" className="btn btn-ghost">
                Request portal access <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-7">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-cream-50 flex items-center justify-center">
                <f.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-800">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
