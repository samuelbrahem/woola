import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section, SectionHead } from "@/components/Section";
import { equipmentLibrary, getEquipment } from "@/lib/equipment-library";
import { equipmentInteractive } from "@/lib/equipment-parts";
import { EquipmentHotspotFigure } from "@/components/EquipmentHotspotFigure";
import { site } from "@/lib/site";
import { ArrowRight, Phone, AlertTriangle, Wrench, Clock3, Play, FileSearch } from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams() {
  return equipmentLibrary.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const e = getEquipment(params.slug);
  if (!e) return {};
  const title = `What is a ${e.name}? | Woola Equipment Library`;
  return {
    title,
    description: e.what,
    alternates: { canonical: `https://woola.ca/equipment/${e.slug}` },
    openGraph: { title, description: e.what },
  };
}

export default function EquipmentPage({ params }: { params: Params }) {
  const e = getEquipment(params.slug);
  if (!e) return notFound();
  const related = equipmentLibrary.filter((x) => x.category === e.category && x.slug !== e.slug).slice(0, 3);
  const interactive = equipmentInteractive[e.slug];

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-16 pb-12">
          <div className="text-sm text-ink-400">
            <Link href="/equipment" className="hover:text-ink-700">Equipment Library</Link>
            <span className="mx-1.5">/</span>
            <span className="text-ink-700">{e.name}</span>
          </div>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow">{e.category}</div>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink-800 leading-tight">
                What is a {e.name.replace(/ \(.*\)$/, "")}?
              </h1>
              <p className="mt-5 text-lg text-ink-600 leading-relaxed">{e.what}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`tel:${site.phone}`} className="btn btn-primary">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link href="/second-opinion" className="btn btn-ghost border hairline">
                  <FileSearch className="w-4 h-4" /> Review my quote
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              {interactive ? (
                <div className="relative rounded-md overflow-hidden bg-white border hairline p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={interactive.image} alt={interactive.alt} className="w-full h-auto" />
                </div>
              ) : (
                <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-ink-100 border hairline">
                  <Image src={e.image} alt={e.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {interactive && (
        <section className="bg-cream-100 border-y hairline">
          <div className="container-x section">
            <SectionHead
              eyebrow="Interactive"
              title="Inside the unit."
              description="Tap each dot: what the component does, and what normally goes wrong with it."
            />
            <div className="mt-12">
              <EquipmentHotspotFigure image={interactive.image} alt={interactive.alt} parts={interactive.parts} />
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand-500 text-white">
        <div className="container-x section">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-7">
            <AlertTriangle className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg font-semibold text-ink-800">Warning signs</h2>
            <ul className="mt-3 space-y-2">
              {e.signs.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="mt-2 w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <Wrench className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg font-semibold text-ink-800">Proper maintenance</h2>
            <ul className="mt-3 space-y-2">
              {e.maintenance.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="mt-2 w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <Clock3 className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg font-semibold text-ink-800">Typical lifespan</h2>
            <div className="mt-3 text-3xl font-bold text-ink-800">{e.lifespan}</div>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed">
              With proper maintenance. Neglect shortens it; a good program stretches it.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x py-14 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-brand-400">
                <Play className="w-4 h-4" />
                <div className="eyebrow !text-brand-400">Woola video · coming soon</div>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                Watch a Woola tech walk through a real {e.name.replace(/ \(.*\)$/, "").toLowerCase()}.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href={e.serviceHref} className="btn btn-brand text-base">
                {e.serviceLabel} services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <Section>
          <SectionHead eyebrow="Related equipment" title="Also in this system." />
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/equipment/${r.slug}`} className="card overflow-hidden group">
                <div className="relative aspect-[16/9] bg-ink-100">
                  <Image src={r.image} alt={r.imageAlt} fill sizes="30vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-4 font-medium text-ink-800 group-hover:text-brand-500 transition text-sm">
                  {r.name}
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
