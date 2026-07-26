import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import { residentialServices, getResidentialService } from "@/lib/residential";
import { getResidentialContent } from "@/lib/content";
import { ServiceLongform } from "@/components/ServiceLongform";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

type Params = { service: string };

export async function generateStaticParams() {
  return residentialServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const service = getResidentialService(params.service);
  if (!service) return {};
  const canonical = `https://woola.ca/residential/${service.slug}`;
  const title = `${service.name} | Woola Residential`;
  return {
    title,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: service.description,
      url: canonical,
      type: "article",
      images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: service.name }],
    },
  };
}

export default function ResidentialServicePage({ params }: { params: Params }) {
  const service = getResidentialService(params.service);
  if (!service) return notFound();
  const content = getResidentialContent(service.slug);
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-ink-800 border-b hairline">
        <div className="relative container-x pt-16 pb-14 md:pt-20 md:pb-16">
          <div className="text-sm text-cream-100/60">
            <Link href="/" className="hover:text-cream-50">Woola</Link>
            <span className="mx-1.5">/</span>
            <Link href="/residential" className="hover:text-cream-50">Residential</Link>
            <span className="mx-1.5">/</span>
            <span className="text-cream-50">{service.name}</span>
          </div>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-500 text-cream-50 flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="eyebrow !text-brand-400">Woola Residential · {service.short}</div>
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-[0.98] text-cream-50">
                {service.name}
              </h1>
              <p className="mt-5 text-lg text-cream-100/85 max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="lg:col-span-4 card p-6">
              <div className="eyebrow">Talk to us</div>
              <a href={`tel:${site.phone}`} className="btn btn-primary mt-3 w-full justify-center">
                <Phone className="w-4 h-4" /> Call {site.phone}
              </a>
              <Link href="/contact" className="btn btn-ghost border hairline mt-2 w-full justify-center">
                Request a Visit
              </Link>
              <ul className="mt-5 space-y-2">
                {service.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-ink-600">
                    <Check className="w-3.5 h-3.5 mt-0.5 text-brand-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {content && (
        <Section>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <ServiceLongform content={content} />
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <figure className="card overflow-hidden bg-cream-100">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="card p-6 bg-ink-800 text-cream-50">
                <div className="eyebrow !text-brand-400">Talk it through first</div>
                <p className="mt-2 text-sm text-cream-100/80 leading-relaxed">
                  Not sure what you need? Call and describe what's happening. A coordinator
                  will tell you what it likely is and what a visit involves.
                </p>
                <a href={`tel:${site.phone}`} className="btn btn-primary mt-4 w-full justify-center">
                  <Phone className="w-4 h-4" /> {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Section>
      )}

      <CTABanner
        title="Tell us what's going on at home."
        description="A coordinator follows up within one business day with next steps and a visit window."
      />
    </>
  );
}
