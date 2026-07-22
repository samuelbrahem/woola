import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { BuildingXray } from "@/components/BuildingXray";
import { FleetStrip } from "@/components/FleetStrip";
import { industries, getIndustry } from "@/lib/industries";
import { site } from "@/lib/site";
import { ArrowRight, Phone, Check } from "lucide-react";

type Params = { industry: string };

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const ind = getIndustry(params.industry);
  if (!ind) return {};
  const title = `${ind.name} Building Services | Woola`;
  return {
    title,
    description: ind.description,
    alternates: { canonical: `https://woola.ca/industries/${ind.slug}` },
    openGraph: { title, description: ind.description },
  };
}

export default function IndustryPage({ params }: { params: Params }) {
  const ind = getIndustry(params.industry);
  if (!ind) return notFound();
  const others = industries.filter((i) => i.slug !== ind.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-ink-800">
        <Image
          src={ind.image}
          alt={ind.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/60 to-ink-900/30" />
        <div className="relative container-x pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-2xl">
            <div className="eyebrow !text-brand-400">Industries · {ind.short}</div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">
              {ind.name}
            </h1>
            <p className="mt-5 text-lg text-cream-100/85 leading-relaxed max-w-xl">
              {ind.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phone}`} className="btn btn-brand text-base">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link
                href="/contact"
                className="btn text-base border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink-800"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="What you're up against" title="We know the pressures." />
            <ul className="mt-8 space-y-4">
              {ind.pressures.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink-700">
                  <Check className="w-5 h-5 mt-0.5 text-brand-500 shrink-0" strokeWidth={2} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">Systems we run for {ind.name.toLowerCase()}</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {ind.systems.map((s) => (
                <Link key={s.href + s.name} href={s.href} className="card p-5 group flex items-center justify-between">
                  <span className="font-medium text-ink-800 group-hover:text-brand-500 transition">{s.name}</span>
                  <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <SectionHead
            eyebrow="Interactive"
            title="Explore the building."
            description="Tap a system, drag the age slider, and see what renewal planning looks like."
          />
          <div className="mt-12">
            <BuildingXray initialType={ind.xrayType} lockType />
          </div>
        </div>
      </section>

      <FleetStrip />

      <Section>
        <SectionHead eyebrow="More industries" title="Also built for." />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}`} className="card overflow-hidden group">
              <div className="relative aspect-[16/9] bg-ink-100">
                <Image
                  src={o.image}
                  alt={o.imageAlt}
                  fill
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-cream-50 font-semibold">
                  {o.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title={`Talk to us about your ${ind.slug === "residential" ? "home" : "buildings"}.`}
        description="One conversation with a coordinator, and you'll know exactly how Woola would run it."
      />
    </>
  );
}
