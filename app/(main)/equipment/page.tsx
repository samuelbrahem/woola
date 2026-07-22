import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { equipmentLibrary } from "@/lib/equipment-library";
import { equipmentInteractive } from "@/lib/equipment-parts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Equipment Library",
  description:
    "Plain-English guides to the equipment that runs your building: rooftop units, boilers, heat pumps, generators, switchgear, and more. What it does, how it fails, and how to maintain it.",
  alternates: { canonical: "https://woola.ca/equipment" },
};

export default function EquipmentIndexPage() {
  return (
    <>
      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x pt-20 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow !text-brand-400">Equipment Library</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold leading-[0.95]">
              The machines behind your building.
            </h1>
            <p className="mt-5 text-lg text-cream-100/80 max-w-2xl">
              When a quote names a piece of equipment, look it up here first. What it does, how it
              fails, and what maintaining it properly looks like.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentLibrary.map((e) => (
            <Link key={e.slug} href={`/equipment/${e.slug}`} className="card overflow-hidden group flex flex-col">
              <div className={`relative aspect-[16/10] overflow-hidden ${equipmentInteractive[e.slug] ? "bg-white" : "bg-ink-100"}`}>
                <Image
                  src={equipmentInteractive[e.slug]?.image ?? e.image}
                  alt={equipmentInteractive[e.slug]?.alt ?? e.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className={`transition-transform duration-500 group-hover:scale-[1.04] ${equipmentInteractive[e.slug] ? "object-contain p-2" : "object-cover"}`}
                />
                <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest uppercase bg-ink-800/80 text-cream-50 px-2 py-1 rounded backdrop-blur">
                  {e.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-ink-800 group-hover:text-brand-500 transition">
                  {e.name}
                </h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed line-clamp-2 flex-1">{e.what}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Not sure what you're looking at?"
        description="Send a photo of the nameplate through our Second Opinion form and we'll identify it for you."
      />
    </>
  );
}
