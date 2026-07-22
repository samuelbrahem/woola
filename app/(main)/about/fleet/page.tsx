import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { AboutSubnav } from "@/components/AboutSubnav";
import { DivisionWordmark } from "@/components/DivisionWordmark";
import { divisions } from "@/lib/divisions";
import { Truck, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Fleet & Branding | About Woola",
  description:
    "Woola's branded vans are becoming a fixture across the Lower Mainland. Every vehicle, uniform, and work order carries the same mark.",
};

export default function FleetPage() {
  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="container-x pt-20 pb-14">
          <div className="eyebrow !text-brand-400">About Woola</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">
            You&apos;ll know us when we pull up.
          </h1>
          <p className="mt-5 text-lg text-cream-100/80 max-w-2xl leading-relaxed">
            Woola is earning a reputation for its vehicle branding, and we lean into it. A marked
            van in your parkade tells residents and councils exactly who is on site, and why.
          </p>
        </div>
      </section>
      <AboutSubnav active="/about/fleet" />

      <section className="bg-cream-50">
        <div className="container-x pt-10 pb-4">
          <div className="relative aspect-[16/7] rounded-md overflow-hidden">
            <Image
              src="/brand/field-generator-delivery.webp"
              alt="Woola technician receiving a standby generator delivery in the field"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 right-5 text-sm text-cream-100/90">
              Woola crews, Woola trucks, Woola shirts. If it doesn&apos;t carry the mark, it isn&apos;t us.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Why it matters"
          title="A branded fleet is an accountability policy."
          description="Anyone can send an unmarked van. Putting our name on every panel means every job site is a public commitment."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Truck,
              title: "Marked vehicles, every dispatch",
              body: "Each division runs wrapped vans and service trucks stocked for its trade, dispatched from our Coquitlam shop.",
            },
            {
              icon: MapPin,
              title: "Easy to verify on site",
              body: "Concierges and councils can confirm who's in the building at a glance. No anonymous contractors in your parkade.",
            },
            {
              icon: ShieldCheck,
              title: "Uniformed, badged crews",
              body: "The branding continues past the curb: uniforms, ID, and photo-documented work orders on every visit.",
            },
          ].map((it) => (
            <div key={it.title} className="card p-7">
              <it.icon className="w-7 h-7 text-brand-500" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl font-semibold text-ink-800">{it.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="container-x section">
          <SectionHead
            dark
            eyebrow="Four marks, one standard"
            title="Every division carries the same identity."
            description="Whichever van shows up, the paperwork, the PO, and the accountability are identical."
          />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((d) => (
              <Link key={d.slug} href={`/${d.slug}`} className="card p-6 flex items-center justify-center">
                <DivisionWordmark division={d} size="md" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Spotted a Woola van?"
        description="We're probably working on a building near yours. Book a property assessment and see what the fuss is about."
      />
    </>
  );
}
