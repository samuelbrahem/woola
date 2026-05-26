import { site } from "@/lib/site";

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-100 rounded-2xl overflow-hidden border hairline">
      {site.stats.map((s) => (
        <div key={s.label} className="bg-cream-50 px-6 py-8">
          <div className="text-3xl md:text-4xl font-semibold text-ink-800" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            {s.value}
          </div>
          <div className="text-xs mt-1 text-ink-500 uppercase tracking-wider">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
