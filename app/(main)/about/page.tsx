import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { Stats } from "@/components/Stats";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/lib/site";
import { divisions } from "@/lib/divisions";
import { Award, Users, Layers, Activity } from "lucide-react";

export const metadata = {
  title: "About Woola",
  description: "Four divisions. One operations spine. Built for property managers, owners, and developers across BC.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="eyebrow">About Woola</div>
              <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-semibold text-ink-800 leading-[0.95]">
                We were built like a sports team for a reason.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-lg text-ink-500 leading-relaxed">
                Most building services companies inherited their structure from a single trade and bolted
                others on as customers demanded them. Woola was set up differently. From day one we organized
                around the property manager's problem, not the trade union's.
              </p>
              <p className="mt-4 text-lg text-ink-500 leading-relaxed">
                The result is four sister divisions, Mechanical, Power, Electrical, and Build,
                sharing one operations spine, one dispatcher, and one accountable PO across every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-x pb-4">
          <div className="grid grid-cols-3 gap-3 -mt-2 pt-8">
            <div className="relative col-span-2 aspect-[16/9] rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=1200&q=80&auto=format&fit=crop"
                alt="Construction and maintenance crew on a building site"
                fill
                sizes="(min-width: 1024px) 60vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1603516084021-1cfa399b64ca?w=1400&q=80&auto=format&fit=crop"
                  alt="Rooftop HVAC equipment on a commercial building"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1668911128139-4db2cc34aa5f?w=1200&q=80&auto=format&fit=crop"
                  alt="Modern condo lobby interior"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <Stats />
      </Section>

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <SectionHead
            eyebrow="The model"
            title="One company. Four divisions. Built around the property."
            description="Each division has a dedicated phone number, dispatcher, and trade qualifications, and shares the back office, reporting platform, and 24/7 emergency line."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((d, i) => (
              <Link key={d.slug} href={`/${d.slug}`} className="card p-7">
                <div className="text-5xl font-semibold text-brand-500" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
                  0{i + 1}
                </div>
                <div className="mt-4 eyebrow">{d.subtitle}</div>
                <h3 className="text-2xl font-semibold mt-1 text-ink-800">{d.name}</h3>
                <p className="mt-2 text-sm text-ink-500">{d.description}</p>
                <div className="mt-4 text-sm font-medium text-ink-800">{d.contactPhone}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Operating principles"
          title="Out work. Out perform. Out play."
          description="Three short statements that decide what we'll take on and what we'll walk away from."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Activity,
              title: "Out Work",
              body: "Show up early. Document everything. Close the loop the same day. The simple stuff most companies stopped doing.",
            },
            {
              icon: Award,
              title: "Out Perform",
              body: "Hold fixed prices where the work is well-defined. Beat the response window in your contract. Make the council's job easier.",
            },
            {
              icon: Users,
              title: "Out Play",
              body: "A team that likes each other does better work. We invest in apprenticeships, mentorship, and a culture that retains good trades.",
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

      <section className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHead eyebrow="Credentials" title="What we hold." />
              <p className="mt-4 text-ink-500">
                Every credential below is current and verifiable. Ask us for proof and we'll send the
                certificates same day.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {[
                  "logo-teca",
                  "logo-worksafe-bc",
                  "logo-boma",
                  "logo-pama-member",
                  "logo-bc-hydro",
                  "logo-asttbc",
                  "logo-cci-bc",
                  "logo-egsa",
                  "logo-hpcn",
                  "logo-isn",
                  "logo-contractor-check",
                  "logo-comply-works",
                ].map((c) => (
                  <div
                    key={c}
                    className="card p-4 flex items-center justify-center bg-white aspect-[3/2]"
                  >
                    <Image
                      src={`/brand/${c}.png`}
                      alt={`${c.replace("logo-", "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())} logo`}
                      width={160}
                      height={100}
                      className="max-h-14 w-auto opacity-80 hover:opacity-100 transition"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-2">
                {site.certifications.slice(0, 6).map((c) => (
                  <div key={c} className="flex items-center gap-3 p-3 bg-white rounded-xl border hairline">
                    <Layers className="w-4 h-4 text-brand-500 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-ink-800">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tour our shop."
        description="42 Fawcett Road in Coquitlam. We host property managers, councils, and developers. Bring the buildings you're worried about and we'll walk through the work."
      />
    </>
  );
}
