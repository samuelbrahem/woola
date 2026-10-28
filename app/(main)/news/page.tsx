import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { AboutSubnav } from "@/components/AboutSubnav";
import { newsSorted, formatNewsDate } from "@/lib/news";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "News | Woola",
  description: "Company news from Woola Services Group: new partners, fleet, divisions, and milestones from the Coquitlam shop.",
  alternates: { canonical: "https://woola.ca/news" },
};

export default function NewsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbs([{ name: "Woola", path: "" }, { name: "News", path: "/news" }])]} />
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="container-x pt-20 pb-14">
          <div className="eyebrow !text-brand-400">About Woola</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">News.</h1>
          <p className="mt-5 text-lg text-cream-100/80 max-w-2xl leading-relaxed">
            What has changed at Woola: people, fleet, divisions, and the milestones along the way.
          </p>
        </div>
      </section>
      <AboutSubnav active="/news" />

      <section className="bg-cream-50">
        <div className="container-x section">
          <ul className="max-w-4xl divide-y divide-[color:rgba(15,15,15,0.08)]">
            {newsSorted.map((n) => (
              <li key={n.slug}>
                <Link href={`/news/${n.slug}`} className="group grid sm:grid-cols-[220px_1fr] gap-6 py-8 items-start">
                  <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-cream-100">
                    <Image src={n.cover} alt={n.coverAlt} fill sizes="220px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-500">{formatNewsDate(n)}</div>
                    <h2 className="mt-2 text-xl md:text-2xl font-semibold text-ink-800 leading-snug group-hover:text-brand-500 transition">
                      {n.title}
                    </h2>
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed">{n.excerpt}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
