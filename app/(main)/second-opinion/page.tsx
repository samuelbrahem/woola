import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SecondOpinionForm } from "./SecondOpinionForm";
import { FileSearch, Scale, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Second Opinion",
  description:
    "Upload your existing quote, inspection report, photos, or plans. Woola's estimating team reviews everything and comes back with an honest second opinion, free.",
  alternates: { canonical: "https://woola.ca/second-opinion" },
};

const points = [
  {
    icon: FileSearch,
    title: "Real estimators review it",
    body: "Not a call centre. The people who price our own jobs read your quote.",
  },
  {
    icon: Scale,
    title: "Honest, either way",
    body: "If the quote you have is fair, we'll tell you. If it's not, we'll show you why.",
  },
  {
    icon: Clock,
    title: "One business day",
    body: "Reviewed and responded to before you have to make the call.",
  },
];

export default function SecondOpinionPage() {
  return (
    <>
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x pt-20 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Free · No obligation</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold leading-[0.95]">
              Get a second opinion.
            </h1>
            <p className="mt-5 text-lg text-cream-100/80 leading-relaxed max-w-2xl">
              Already have a quote, an inspection report, or a problem someone else diagnosed?
              Upload it. Our estimating team reviews everything before anyone rolls a truck.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <SecondOpinionForm />
          </div>
          <div className="lg:col-span-5 space-y-4">
            {points.map((p) => (
              <div key={p.title} className="card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-semibold text-ink-800">{p.title}</h2>
                  <p className="mt-1 text-sm text-ink-600 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
