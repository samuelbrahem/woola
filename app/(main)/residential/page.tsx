import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FleetStrip } from "@/components/FleetStrip";
import { SecondOpinionCTA } from "@/components/SecondOpinionCTA";
import { residentialServices } from "@/lib/residential";
import { site } from "@/lib/site";
import {
  ArrowRight,
  CalendarCheck,
  Home,
  MessageCircle,
  Network,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Services",
  description:
    "Residential heating, cooling, plumbing, hot water, drains, gas fitting, and indoor air quality services from Woola across Metro Vancouver.",
  alternates: { canonical: "https://woola.ca/residential" },
};

const promises = [
  {
    icon: ShieldCheck,
    title: "Premium products and workmanship",
    body: "We specify equipment we can support and install it with the same care we bring to commercial mechanical systems.",
  },
  {
    icon: Wrench,
    title: "Installed for the long term",
    body: "Proper sizing, professional installation, and future serviceability matter more than getting equipment through the door quickly.",
  },
  {
    icon: MessageCircle,
    title: "Honest recommendations",
    body: "We explain what we found, outline the practical options, and never pressure you into replacing equipment that still has useful life.",
  },
  {
    icon: Home,
    title: "Respect for your home",
    body: "Our technicians communicate clearly, protect the work area, and leave your home clean when the work is complete.",
  },
  {
    icon: CalendarCheck,
    title: "Maintenance that protects",
    body: "Seasonal service catches small issues early, supports efficient operation, and helps extend the life of your equipment.",
  },
  {
    icon: Network,
    title: "One trusted partner",
    body: "Heating, cooling, plumbing, hot water, drains, and gas services are coordinated through one professional team.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-ink-900 text-cream-50">
        <Image
          src="/xray/house.webp"
          alt="Cutaway view of a home showing its heating, hot water, ventilation, and electrical systems"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink-900/75" />
        <div className="container-x relative min-h-[560px] py-16 md:py-20 flex items-end">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Woola Residential</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.98]">
              Residential Mechanical Services
            </h1>
            <p className="mt-5 text-2xl text-cream-50 font-medium">
              Commercial expertise. Residential service.
            </p>
            <p className="mt-4 text-lg text-cream-100/80 max-w-2xl">
              Quality heating, cooling, plumbing, hot water, drain, and gas work for
              homeowners who value clear advice, careful installation, and dependable
              performance over quick fixes.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link href="/contact" className="btn btn-brand">
                Request a visit <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${site.phone}`}
                aria-label={`Call Woola at ${site.phone}`}
                title={`Call ${site.phone}`}
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-cream-50/40 px-4 text-sm font-medium uppercase text-cream-50 transition hover:bg-cream-50 hover:text-ink-800 sm:hidden"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <div className="hidden sm:block">
                <a href={`tel:${site.phone}`} className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800">
                  Call {site.phone}
                </a>
              </div>
            </div>
            <div className="mt-4 text-sm text-cream-100/60">
              Managing a building or portfolio?{" "}
              <Link href="/commercial" className="text-brand-400 hover:underline">
                Woola Commercial →
              </Link>
            </div>
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
            eyebrow="Why homeowners choose Woola"
            title="Quality work, clear advice, and a contractor you can keep."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {promises.map((p) => (
              <div key={p.title} className="border-t border-white/35 pt-5" data-reveal>
                <div className="w-10 h-10 rounded-full bg-ink-900 text-cream-50 flex items-center justify-center">
                  <p.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{p.body}</p>
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
