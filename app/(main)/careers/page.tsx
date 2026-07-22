import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { DivisionWordmark } from "@/components/DivisionWordmark";
import { divisions } from "@/lib/divisions";
import { ArrowRight, MapPin, Clock, Users, GraduationCap, HeartHandshake, TrendingUp, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Woola",
  description:
    "Join Woola Services Group. Open positions across Mechanical, Power Systems, Electrical, and Build: Red Seal trades, apprenticeships, coordinators, and PMs in Metro Vancouver.",
  alternates: { canonical: "https://woola.ca/careers" },
};

// Postings will come from BambooHR once the integration is connected.
const openings = [
  { title: "HVAC Technician (Red Seal)", division: "mechanical", type: "Full-time", location: "Coquitlam + Metro Van routes" },
  { title: "Refrigeration Mechanic", division: "mechanical", type: "Full-time", location: "Metro Vancouver" },
  { title: "Plumber, 2nd-4th Year Apprentice", division: "mechanical", type: "Apprenticeship", location: "Coquitlam HQ" },
  { title: "Generator Technician", division: "power", type: "Full-time", location: "BC-wide routes" },
  { title: "Electrician (FSR-B an asset)", division: "electrical", type: "Full-time", location: "Metro Vancouver" },
  { title: "EV Charging Installer", division: "electrical", type: "Full-time", location: "Metro Vancouver" },
  { title: "Building Maintenance Technician", division: "build", type: "Full-time", location: "Tri-Cities" },
  { title: "Construction Project Coordinator", division: "build", type: "Full-time", location: "Coquitlam HQ" },
  { title: "Service Dispatcher", division: "all", type: "Full-time", location: "Coquitlam HQ" },
];

// Placeholder slots until real crew photography is shot — swap each for an <Image>.
const photoSlots = [
  { label: "Crew on site", wide: true },
  { label: "Shop barbecue", wide: false },
  { label: "Fleet at HQ", wide: false },
  { label: "Apprentice training", wide: false },
  { label: "Generator field work", wide: true },
];

const perks = [
  { icon: TrendingUp, title: "Real progression", body: "Apprentice to journeyman to lead, with hour sponsorship and exam prep paid." },
  { icon: GraduationCap, title: "Factory training", body: "OEM certifications across Generac, Kohler, Cummins, Mitsubishi, Daikin, and more." },
  { icon: HeartHandshake, title: "Extended benefits", body: "Health, dental, RRSP matching, boot and tool allowances, and take-home vans for leads." },
  { icon: Users, title: "The Out Play culture", body: "Team events, shop barbecues, and a crew that actually likes each other." },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-cream-50 border-b hairline relative overflow-hidden">
        <div aria-hidden className="aurora -z-0" />
        <div className="container-x pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <div className="eyebrow">Careers</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold text-ink-800 leading-[0.98]">
              Out work. Out perform.
              <br />
              <span className="script text-brand-500 text-6xl md:text-7xl leading-none">Out play.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl">
              Four business units, one roster. We hire trades who take pride in the work,
              sponsor apprenticeships seriously, and promote from within first.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#openings" className="btn btn-primary">
                See open positions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Why Woola"
          title="A trades career that compounds."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="card p-7">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-cream-50 flex items-center justify-center">
                <p.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-800">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photoSlots.map((slot) => (
            <div
              key={slot.label}
              className={`rounded-2xl border-2 border-dashed border-ink-200 bg-cream-100 flex flex-col items-center justify-center gap-2 aspect-[4/3] ${
                slot.wide ? "col-span-2 md:aspect-auto" : ""
              }`}
            >
              <ImageIcon className="w-6 h-6 text-ink-300" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-wider text-ink-400">{slot.label}</span>
              <span className="text-[10px] text-ink-300">Photo coming soon</span>
            </div>
          ))}
        </div>
      </Section>

      <section id="openings" className="bg-cream-100 border-y hairline">
        <div className="container-x section">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHead
              eyebrow="Open positions"
              title="Where we're hiring right now."
              description="Roles span all four business units. Applications and postings are managed through BambooHR."
            />
          </div>
          <div className="mt-10 space-y-3">
            {openings.map((o) => {
              const d = divisions.find((dv) => dv.slug === o.division);
              return (
                <div
                  key={o.title}
                  className="card p-5 md:p-6 bg-white flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                >
                  <div className="md:w-40 shrink-0">
                    {d ? (
                      <DivisionWordmark division={d} size="sm" />
                    ) : (
                      <span className="text-sm font-semibold text-ink-800">Woola Group</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-ink-800">{o.title}</div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-500">
                      <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{o.type}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{o.location}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@woola.ca?subject=Application"
                    className="btn btn-outline shrink-0 self-start md:self-auto"
                  >
                    Apply <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-ink-500">
            Don&apos;t see your trade? Send a resume to{" "}
            <a href="mailto:careers@woola.ca" className="font-medium text-brand-500 hover:underline">
              careers@woola.ca
            </a>{" "}
            and tell us what you&apos;re great at. Good people get roles made for them here.
          </p>
        </div>
      </section>

      <CTABanner
        title="Bring your ticket. We'll bring the runway."
        description="Apprentices, journeymen, dispatchers, and PMs: if the work above sounds like you, we want the conversation."
      />
    </>
  );
}
