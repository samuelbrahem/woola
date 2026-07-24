import Image from "next/image";
import { SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { AboutSubnav } from "@/components/AboutSubnav";
import { site } from "@/lib/site";
import { Check } from "lucide-react";

export const metadata = {
  title: "Credentials & Associations | About Woola",
  description:
    "The certifications, memberships, and safety programs behind every Woola dispatch. All current, all verifiable.",
};

const associations = [
  { file: "logo-teca", name: "TECA", blurb: "Quality First HVAC design." },
  { file: "logo-worksafe-bc", name: "WorkSafeBC", blurb: "COR-certified safety program." },
  { file: "logo-boma", name: "BOMA BC", blurb: "Building owners & managers." },
  { file: "logo-pama-member", name: "PAMA", blurb: "Property managers association." },
  { file: "logo-bc-hydro", name: "BC Hydro", blurb: "Power Smart Alliance contractor." },
  { file: "logo-asttbc", name: "ASTTBC", blurb: "Applied science technologists." },
  { file: "logo-cci-bc", name: "CCI BC", blurb: "Condominium home owners." },
  { file: "logo-egsa", name: "EGSA", blurb: "Standby power standards." },
  { file: "logo-hpcn", name: "HPCN", blurb: "Heat pump contractor network." },
  { file: "logo-isn", name: "ISNetworld", blurb: "Contractor safety verification." },
  { file: "logo-contractor-check", name: "Contractor Check", blurb: "Third-party vetting." },
  { file: "logo-comply-works", name: "ComplyWorks", blurb: "Compliance management." },
];

export default function CredentialsPage() {
  return (
    <>
      <section className="bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="container-x pt-20 pb-14">
          <div className="eyebrow !text-brand-400">About Woola</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-cream-50 leading-[0.95]">
            The paperwork.
          </h1>
          <p className="mt-5 text-lg text-cream-100/80 max-w-2xl leading-relaxed">
            Every association, ticket, and safety program below is current. Ask for a certificate and
            it&apos;s in your inbox the same day.
          </p>
        </div>
      </section>
      <AboutSubnav active="/about/credentials" />

      <section className="bg-cream-50">
        <div className="container-x section">
          <SectionHead
            align="center"
            eyebrow="Associations"
            title="Who we answer to."
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {associations.map((a) => (
              <div
                key={a.file}
                className="card bg-white flex flex-col items-center text-center p-6"
              >
                <div className="h-20 w-full flex items-center justify-center">
                  <Image
                    src={`/brand/${a.file}.png`}
                    alt={`${a.name} logo`}
                    width={200}
                    height={120}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-ink-800 text-sm">{a.name}</h3>
                <p className="mt-1 text-xs text-ink-500 leading-relaxed">{a.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-800 text-cream-50 relative overflow-hidden">
        <div className="container-x section">
          <SectionHead
            align="center"
            dark
            eyebrow="Certifications"
            title="Tickets we carry."
            description="Held at the company or technician level. Kept current on our own compliance calendar."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-4xl mx-auto">
            {site.certifications.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-ink-700/60 border border-ink-600"
              >
                <Check className="w-4 h-4 text-brand-400 shrink-0" strokeWidth={2.5} />
                <span className="text-sm font-medium text-cream-50">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need proof?"
        description="Ask. We'll email the certificates today."
      />
    </>
  );
}
