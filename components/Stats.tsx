import { site } from "@/lib/site";
import { CountUp } from "./CountUp";

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-600 rounded-2xl overflow-hidden">
      {site.stats.map((s) => (
        <div key={s.label} className="bg-brand-500 text-white px-6 py-7">
          <div className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            <CountUp value={s.value} />
          </div>
          <div className="text-xs mt-1 text-white/80 uppercase tracking-wider">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
