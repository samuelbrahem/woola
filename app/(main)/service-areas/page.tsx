import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { ServiceMap } from "@/components/ServiceMap";
import { CTABanner } from "@/components/CTABanner";
import { cities, citiesByRegion } from "@/lib/cities";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";

const regionOrder = [
  "Tri-Cities",
  "Vancouver",
  "North Shore",
  "South of Fraser",
  "Fraser Valley",
  "Sea-to-Sky",
];

export const metadata = {
  title: "Service Areas: Abbotsford to Whistler",
  description: "Woola serves 20+ municipalities across Metro Vancouver, the Fraser Valley, and the Sea-to-Sky Corridor.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-24 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Coverage</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              From the river delta to the snow line.
            </h1>
            <p className="mt-5 text-lg text-ink-500">
              {cities.length} municipalities. Six regions. A dispatch model that matches truck stock and
              technician routing to where the work actually is.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <ServiceMap />
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          {regionOrder.map((region) => {
            const list = citiesByRegion[region] || [];
            return (
              <div key={region} className="mb-16 last:mb-0">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <div className="eyebrow">Region</div>
                    <h2 className="text-3xl md:text-4xl font-semibold mt-1 text-ink-800">{region}</h2>
                  </div>
                  <div className="text-sm text-ink-400">{list.length} cities</div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {list.map((c) => (
                    <Link key={c.slug} href={`/service-areas/${c.slug}`} className="card p-6 group">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold text-ink-800 group-hover:text-ink-600">{c.name}</h3>
                        <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-ink-800" />
                      </div>
                      <p className="mt-2 text-sm text-ink-500 line-clamp-2">{c.blurb}</p>
                      <div className="mt-5 pt-5 border-t hairline grid grid-cols-3 gap-3 text-xs">
                        <Stat icon={Clock} label="Response" value={`${c.responseHours}h`} />
                        <Stat icon={Users} label="Techs" value={String(c.techsAssigned)} />
                        <Stat icon={MapPin} label="Drive" value={`${c.driveTimeMin}min`} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner
        title="Not sure if we cover your address?"
        description="Send us a postal code and we'll confirm response times and which crew runs your block."
      />
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1 text-ink-400">
        <Icon className="w-3 h-3" strokeWidth={1.6} />
        <span className="uppercase tracking-wider text-[10px]">{label}</span>
      </div>
      <div className="font-semibold text-ink-800 mt-0.5 text-sm">{value}</div>
    </div>
  );
}
