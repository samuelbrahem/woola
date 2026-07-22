import Image from "next/image";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { AboutSubnav } from "@/components/AboutSubnav";
import { site } from "@/lib/site";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Credentials & Associations | About Woola",
  description:
    "The certifications, memberships, and safety programs behind every Woola dispatch. All current, all verifiable.",
};

const associations = [
  { file: "logo-teca", name: "TECA", blurb: "Thermal Environmental Comfort Association: Quality First HVAC design standards." },
  { file: "logo-worksafe-bc", name: "WorkSafeBC", blurb: "COR-certified safety program, audited annually." },
  { file: "logo-boma", name: "BOMA BC", blurb: "Building Owners and Managers Association of BC member." },
  { file: "logo-pama-member", name: "PAMA", blurb: "Professional Association of Managing Agents member." },
  { file: "logo-bc-hydro", name: "BC Hydro", blurb: "Power Smart Alliance contractor for lighting and electrical rebates." },
  { file: "logo-asttbc", name: "ASTTBC", blurb: "Applied Science Technologists and Technicians of BC." },
  { file: "logo-cci-bc", name: "CCI BC", blurb: "Condominium Home Owners Association affiliate chapter." },
  { file: "logo-egsa", name: "EGSA", blurb: "Electrical Generating Systems Association: standby power standards." },
  { file: "logo-hpcn", name: "HPCN", blurb: "Heat Pump Contractor Network for CleanBC rebate installs." },
  { file: "logo-isn", name: "ISNetworld", blurb: "Contractor safety and compliance verification platform." },
  { file: "logo-contractor-check", name: "Contractor Check", blurb: "Accredited through third-party contractor vetting." },
  { file: "logo-comply-works", name: "ComplyWorks", blurb: "Compliance management for commercial and industrial clients." },
];

export default function CredentialsPage() {
  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="container-x pt-20 pb-14">
          <div className="eyebrow !text-brand-400">About Woola</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">
            Credentials & associations.
          </h1>
          <p className="mt-5 text-lg text-cream-100/80 max-w-2xl leading-relaxed">
            Logos mean more than lists. Every membership and certification below is current, and
            we&apos;ll send the certificates same day if you ask for proof.
          </p>
        </div>
      </section>
      <AboutSubnav active="/about/credentials" />

      <Section>
        <SectionHead
          eyebrow="Associations"
          title="The organizations that hold us to account."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {associations.map((a) => (
            <div key={a.file} className="card p-6 flex flex-col">
              <div className="h-20 flex items-center">
                <Image
                  src={`/brand/${a.file}.png`}
                  alt={`${a.name} logo`}
                  width={200}
                  height={120}
                  className="max-h-16 w-auto"
                />
              </div>
              <h3 className="mt-4 font-semibold text-ink-800">{a.name}</h3>
              <p className="mt-1 text-sm text-ink-500 leading-relaxed">{a.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="container-x section">
          <SectionHead
            dark
            eyebrow="Certifications"
            title="Tickets and programs we hold."
            description="Held at the company or technician level and kept current through our own compliance calendar."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {site.certifications.map((c) => (
              <div key={c} className="flex items-center gap-3 p-4 bg-white rounded-xl border hairline">
                <Layers className="w-4 h-4 text-brand-500 shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-ink-800">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want the certificates?"
        description="Ask and we'll send current documentation for any credential on this page, same day."
      />
    </>
  );
}
