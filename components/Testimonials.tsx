import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We replaced three separate vendors with Woola. One dispatcher, one PO, and reporting that our strata council actually reads.",
    author: "Strata Council Chair",
    org: "Park Place Towers · Burnaby",
  },
  {
    quote:
      "Their heat-pump retrofit team handled CleanBC paperwork end-to-end. We collected $6,000 in stacked rebates without lifting a finger.",
    author: "Residential client",
    org: "North Vancouver",
  },
  {
    quote:
      "Generator service finally feels professional. Real load-bank tests, real reports, and they're at our retail sites the day we call.",
    author: "Director of Facilities",
    org: "Metro Vancouver retailer",
  },
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="card p-7 flex flex-col">
          <Quote className="w-7 h-7 text-brand-500" strokeWidth={1.5} />
          <p className="mt-4 text-ink-700 leading-relaxed">{t.quote}</p>
          <div className="mt-6 pt-5 border-t hairline">
            <div className="text-sm font-medium text-ink-800">{t.author}</div>
            <div className="text-xs text-ink-400 mt-0.5">{t.org}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
