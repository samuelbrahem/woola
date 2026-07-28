import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { SecondOpinionCTA } from "@/components/SecondOpinionCTA";
import { residentialServices } from "@/lib/residential";
import { site } from "@/lib/site";
import { ArrowRight, Home, Receipt, Leaf, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Services",
  description:
    "Heating, cooling, plumbing, hot water, gas, and air quality for BC homes. The same licensed technicians trusted by commercial buildings, with upfront pricing and rebates filed in-house.",
  alternates: { canonical: "https://woola.ca/residential" },
};

const promises = [
  {
    icon: Receipt,
    title: "Upfront pricing",
    body: "You approve a written quote before work starts. No hourly surprises at the door.",
  },
  {
    icon: Leaf,
    title: "Rebates filed for you",
    body: "We are a CleanBC Better Homes contractor and BC Hydro trade ally. Stacked rebates up to $7,500 are realistic on heat-pump conversions.",
  },
  {
    icon: Wrench,
    title: "The same licensed techs",
    body: "The Red Seal and gas-ticketed technicians who service commercial buildings do your home. No B-team.",
  },
  {
    icon: Home,
    title: "Respectful in your space",
    body: "Floor protection, daily cleanup, and a photo-documented closeout when we're done.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-20 pb-16 relative">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-center">
            <div className="max-w-3xl">
              <div className="eyebrow !text-brand-400">Woola Residential</div>
              <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.98]">
                Commercial-grade trades. For your home.
              </h1>
              <p className="mt-5 text-lg text-cream-100/80 max-w-2xl">
                Heating, cooling, plumbing, hot water, gas, and air quality, handled by the
                same licensed technicians we send to hospitals and high-rises. Honest
                recommendations, upfront pricing, and rebate paperwork done in-house.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-brand">
                  Request a visit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${site.phone}`} className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
                  Call {site.phone}
                </a>
              </div>
              <div className="mt-4 text-sm text-cream-100/60">
                Managing a building or portfolio?{" "}
                <Link href="/commercial" className="text-brand-400 hover:underline">
                  Woola Commercial →
                </Link>
              </div>
            </div>
            <PhotoPlaceholder label="Tech at a home install" dark className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="What we do at home"
          title="Every system in your house, one number to call."
          description="Homeowners don't think in trades or divisions, and neither does this section. Pick the problem; we bring the right ticketed people."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {residentialServices.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.slug} href={`/residential/${s.slug}`} className="card overflow-hidden group flex flex-col">
                <div className="relative aspect-[16/10] bg-cream-100 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-semibold text-ink-800 group-hover:text-brand-500 transition">
                        {s.name}
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition shrink-0" />
                  </div>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{s.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <section className="bg-brand-500 text-white">
        <div className="container-x section">
          <SectionHead
            dark
            eyebrow="The homeowner promise"
            title="What working with Woola feels like."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((p) => (
              <div key={p.title} className="card p-7 bg-white">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-cream-50 flex items-center justify-center">
                  <p.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-800">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecondOpinionCTA />

      <FleetStrip />

      <CTABanner
        title="Tell us about your home."
        description="A coordinator follows up within one business day with next steps and a visit window."
      />
    </>
  );
}
