import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { SecondOpinionCTA } from "@/components/SecondOpinionCTA";
import { ArrowRight, Check, Home, Receipt, Leaf, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Services",
  description:
    "Heat pumps, hot water, gas, EV chargers, and standby power for BC homes. Upfront pricing, CleanBC and BC Hydro rebates filed in-house, and licensed Red Seal technicians.",
  alternates: { canonical: "https://woola.ca/residential" },
};

const offers = [
  { name: "Heat pumps & HVAC", href: "/mechanical/hvac", blurb: "Cold-climate heat pumps, furnaces, and AC with CleanBC rebates filed for you." },
  { name: "Hot water", href: "/mechanical/plumbing", blurb: "Tank, tankless, and heat-pump water heaters, plus emergency leak response." },
  { name: "Gas services", href: "/mechanical/gas", blurb: "Fireplaces, ranges, BBQ lines, and furnace hookups by licensed gas fitters." },
  { name: "EV chargers", href: "/electrical/ev-chargers", blurb: "Level 2 home charging with panel assessment and BC Hydro rebate paperwork." },
  { name: "Home standby power", href: "/power/generators", blurb: "Standby generators sized for your home, installed and maintained." },
  { name: "Electrical", href: "/electrical/electrical", blurb: "Panel upgrades, dedicated circuits, and lighting by FSR-certified electricians." },
];

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
        <div className="container-x pt-24 pb-16 relative">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-center">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Residential</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.98]">
              Commercial-grade trades. For your home.
            </h1>
            <p className="mt-5 text-lg text-cream-100/80 max-w-2xl">
              Heat pumps, hot water, gas, EV charging, and backup power, installed by the
              same licensed technicians we send to hospitals and high-rises. Upfront
              pricing and rebate paperwork handled in-house.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/second-opinion" className="btn btn-primary">
                Get a second opinion <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:604-800-3617" className="btn btn-ghost">
                Call Now
              </a>
            </div>
          </div>
          <PhotoPlaceholder label="Tech at a home install" dark className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="What we do at home"
          title="The residential lineup."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((o) => (
            <Link key={o.name} href={o.href} className="card p-7 group">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-800 group-hover:text-brand-500 transition">
                  {o.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition" />
              </div>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{o.blurb}</p>
            </Link>
          ))}
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
