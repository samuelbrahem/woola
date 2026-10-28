import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { Stats } from "@/components/Stats";
import { CTABanner } from "@/components/CTABanner";
import { AboutSubnav } from "@/components/AboutSubnav";
import { divisions, shortName } from "@/lib/divisions";
import { LeadershipTeam } from "@/components/LeadershipTeam";
import { Award, Users, Activity } from "lucide-react";

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
                Built in Coquitlam. Built around the people who run buildings.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-lg text-ink-500 leading-relaxed">
                Woola is a building services company based at 42 Fawcett Road in Coquitlam. Most
                companies in this trade grew out of a single ticket and added others as customers
                asked. We set up around the property manager's job instead, so the trades a building
                needs sit under one roof.
              </p>
              <p className="mt-4 text-lg text-ink-500 leading-relaxed">
                Today that is four divisions, Mechanical, Power, Electrical, and Build, sharing one
                dispatch desk, one service history, and one PO per job.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutSubnav active="/about" />

      <section className="bg-cream-50">
        <div className="container-x pb-4">
          <div className="grid grid-cols-3 gap-3 -mt-2 pt-8">
            <div className="relative col-span-2 aspect-[16/9] rounded-md overflow-hidden">
              <Image
                src="/field/08-12-2026-build-8.jpg"
                alt="Woola crew on site at a strata building project"
                fill
                sizes="(min-width: 1024px) 60vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src="/field/07-28-2026-mech-4.jpg"
                  alt="High-pressure steam piping in a commercial mechanical room"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src="/field/08-11-2026-van-7.jpg"
                  alt="Woola van arriving at a commercial building entrance"
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

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="container-x section relative">
          <SectionHead
            dark
            eyebrow="The model"
            title="What we do."
            description="Each division has a dedicated phone number, dispatcher, and trade qualifications, and shares the back office, reporting platform, and 24/7 emergency line."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((d) => (
              <Link key={d.slug} href={`/${d.slug}`} className="card p-7 flex flex-col">
                <h3 className="text-3xl font-semibold text-brand-500 leading-none">{shortName(d)}</h3>
                <div className="mt-3 eyebrow min-h-[2.6em]">{d.subtitle}</div>
                <p className="mt-2 text-sm text-ink-500 line-clamp-3 min-h-[4.5em]">{d.description}</p>
                <div className="mt-auto pt-4 text-sm font-medium text-ink-800">{d.contactPhone}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Operating principles"
          title="Out work. Out perform. Out play."
          description="The three phrases the team actually uses. They decide what we take on and how we run it."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Activity,
              title: "Out Work",
              body: "Show up when we say we will. Document the work. Follow up when it is complete.",
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
          <SectionHead
            eyebrow="Credentials"
            title="Certifications and memberships."
            align="center"
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
            {[
              "logo-teca",
              "logo-worksafe-bc",
              "logo-boma",
              "logo-pama-member",
              "logo-bc-hydro",
              "logo-fortisbc",
              "logo-asttbc",
              "logo-cci-bc",
              "logo-egsa",
              "logo-hpcn",
              "logo-isn",
              "logo-contractor-check",
              "logo-comply-works",
            ].map((c) => (
              <Image
                key={c}
                src={`/brand/${c}.png`}
                alt={c === "logo-fortisbc" ? "FortisBC Trade Ally" : c.replace("logo-", "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())}
                width={220}
                height={140}
                className="max-h-20 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </section>

      <LeadershipTeam />

      <CTABanner />
    </>
  );
}
