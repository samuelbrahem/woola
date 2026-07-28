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
  {
    file: "logo-teca",
    name: "TECA · Thermal Environmental Comfort Association",
    about:
      "BC's HVAC industry association. Its Quality First program certifies contractors in proper heat-loss calculations, equipment sizing, and duct design, which means your system is engineered to a written provincial standard instead of sized by rule of thumb.",
  },
  {
    file: "logo-worksafe-bc",
    name: "WorkSafeBC · COR Certification",
    about:
      "The Certificate of Recognition is an audited occupational health and safety management system that goes beyond baseline WorkSafeBC compliance. For a building owner, it means the crews on your property work under a safety program that passes an independent audit every year.",
  },
  {
    file: "logo-boma",
    name: "BOMA BC · Building Owners and Managers Association",
    about:
      "The association that sets operating standards for commercial real estate in BC. Membership keeps our service programs aligned with how professional building operators actually measure performance, from preventative maintenance norms to energy benchmarks.",
  },
  {
    file: "logo-pama-member",
    name: "PAMA · Professional Association of Managing Agents",
    about:
      "BC's association for property management professionals. Being a member keeps us inside the conversations property managers are having about compliance, budgeting, and service standards, so our reporting shows up in the format their industry expects.",
  },
  {
    file: "logo-bc-hydro",
    name: "BC Hydro Power Smart Alliance",
    about:
      "A vetted network of contractors qualified to deliver BC Hydro's efficiency programs. It's what lets us access Power Smart rebates on lighting and electrical retrofits and file the paperwork on your behalf, instead of you chasing the incentive yourself.",
  },
  {
    file: "logo-asttbc",
    name: "ASTTBC · Applied Science Technologists & Technicians of BC",
    about:
      "The provincial body that registers certified technologists and technicians. Registration means the people signing off on technical work carry a professional designation with a code of ethics and discipline process behind it.",
  },
  {
    file: "logo-cci-bc",
    name: "CCI BC · Canadian Condominium Institute",
    about:
      "The national institute for condominium and strata living, BC chapter. It keeps us current on strata governance: depreciation reports, reserve planning, and the approval processes councils work under, which shapes how we scope and present work to stratas.",
  },
  {
    file: "logo-egsa",
    name: "EGSA · Electrical Generating Systems Association",
    about:
      "The trade association for the on-site power industry. EGSA sets the education and certification standards for generator technicians, and it's the professional backbone behind our standby power and CSA C282 testing work.",
  },
  {
    file: "logo-hpcn",
    name: "HPCN · Home Performance Contractor Network",
    about:
      "The quality-assurance network behind CleanBC's home energy programs. Network contractors meet training and installation standards for heat pumps, and installations through us stay eligible for CleanBC Better Homes rebates.",
  },
  {
    file: "logo-isn",
    name: "ISNetworld",
    about:
      "A contractor management platform used by large owners and institutions to continuously verify safety statistics, insurance, and procedures. If your organization prequalifies vendors through ISN, we're already in the system.",
  },
  {
    file: "logo-contractor-check",
    name: "Contractor Check",
    about:
      "An independent accreditation service that reviews insurance coverage, WorkSafeBC standing, and safety practices annually. Many BC property managers use it to pre-qualify trades; accreditation means that diligence is already done.",
  },
  {
    file: "logo-comply-works",
    name: "ComplyWorks",
    about:
      "A compliance management platform used by corporate and industrial clients to track vendor documentation. Our certificates, coverage, and safety records are maintained there so procurement teams can verify us without a paper chase.",
  },
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
          <div className="mt-14 max-w-4xl mx-auto">
            {associations.map((a) => (
              <div
                key={a.file}
                data-reveal
                className="grid sm:grid-cols-[180px_1fr] gap-6 sm:gap-10 items-center py-8 border-b hairline last:border-b-0"
              >
                <div className="flex sm:justify-center">
                  <Image
                    src={`/brand/${a.file}.png`}
                    alt={`${a.name} logo`}
                    width={200}
                    height={120}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-800">{a.name}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{a.about}</p>
                </div>
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
