import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { divisions, getService, lowerName } from "@/lib/divisions";
import { Section, SectionHead } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { Calculator } from "@/components/Calculator";
import { ArrowRight, Check, Phone, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { cities } from "@/lib/cities";

type Params = { division: string; service: string };

export async function generateStaticParams() {
  return divisions.flatMap((d) =>
    d.services.map((s) => ({ division: d.slug, service: s.slug }))
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const found = getService(params.division, params.service);
  if (!found) return {};
  const canonical = `https://woola.ca/${found.division.slug}/${found.service.slug}`;
  const title = `${found.service.name} | ${found.division.name}`;
  return {
    title,
    description: found.service.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: found.service.description,
      url: canonical,
      type: "article",
      images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: found.service.name }],
    },
  };
}

const scopeDeepDive: Record<string, { name: string; lines: string[] }[]> = {
  hvac: [
    { name: "Heat pumps", lines: ["Ducted central, ductless mini-split, and dual-fuel hybrids.", "Cold-climate units sized for –20°C BC design temperatures.", "TECA Quality First duct design where ducting is touched."] },
    { name: "Furnaces & AC", lines: ["High-efficiency two-stage and modulating furnaces.", "Variable-speed AC pairings with proper line set sizing.", "Permit, gas safety, and ESA documentation handled."] },
    { name: "Commercial HVAC", lines: ["Rooftop units, VRF, make-up air, fan coils.", "Quarterly preventative maintenance packages.", "Indoor air-quality and ventilation audits."] },
  ],
  plumbing: [
    { name: "Domestic water", lines: ["Re-pipes (copper, PEX-A), pressure reducing stations, hammer arrestors.", "Backflow testing and certification (CCCBC).", "Fixture replacement programs across strata buildings."] },
    { name: "Drain & sewer", lines: ["Drain replacement, snaking, hydro-jetting, CCTV inspection.", "Catch basin and parkade drainage.", "Sump and ejector pump maintenance."] },
    { name: "Hot water", lines: ["Tank, tankless, and hybrid heat-pump water heaters.", "Recirculation loops and DHW boilers.", "Legionella mitigation programs."] },
  ],
  gas: [
    { name: "Residential gas", lines: ["Furnace, fireplace, BBQ, range, and dryer hookups.", "Combustion analysis on every install.", "FortisBC rebate paperwork submitted."] },
    { name: "Commercial gas", lines: ["Restaurant kitchens, rooftops, makeup-air, snowmelt.", "Class A licensed for all commercial scope.", "Annual gas pressure and leakage testing."] },
    { name: "Boilers & hydronics", lines: ["Condensing boilers, cascade systems, primary/secondary loops.", "Glycol mixing, fill stations, and expansion sizing.", "Commissioning reports for engineer review."] },
  ],
  refrigeration: [
    { name: "Commercial refrigeration", lines: ["Walk-ins, reach-ins, prep tables.", "Glycol systems and ice plants.", "EPA-compliant refrigerant handling."] },
    { name: "Service & repair", lines: ["24/7 emergency response for food-service clients.", "Leak detection and recovery.", "Compressor and condenser replacement."] },
    { name: "Preventative", lines: ["Quarterly PM checklists.", "Refrigerant logbooks for environmental compliance.", "Energy and load reporting."] },
  ],
  generators: [
    { name: "Annual service", lines: ["Oil, filter, coolant, battery on schedule.", "Coolant heater and block heater checks.", "Minor repairs quoted and closed same visit."] },
    { name: "Installations", lines: ["Generac, Kohler, Cummins authorized installer.", "Permit, ESA, and gas connections.", "Commissioning to manufacturer spec."] },
    { name: "Emergency", lines: ["24/7 emergency response after outages.", "Spare parts stocked for top units.", "Priority dispatch for contracted sites."] },
  ],
  "c282-testing": [
    { name: "Annual C282 test", lines: ["Stepped load bank run to full nameplate.", "Readings logged at code intervals.", "Signed compliance report filed for you."] },
    { name: "Monthly programs", lines: ["On-load exercise runs between annual tests.", "Test log maintained on site and digitally.", "Insurer and AHJ document packages."] },
    { name: "Deficiencies", lines: ["Wet-stacking correction runs.", "Written deficiency list with repair quote in 48 h.", "Repairs by the same division under one PO."] },
  ],
  "transfer-switches": [
    { name: "Inspection & testing", lines: ["Contact resistance and transfer-time testing.", "Infrared scans on lugs and contacts.", "Exercise clock and retransfer settings verified."] },
    { name: "Repair & retrofit", lines: ["ASCO, Zenith, Cummins, Generac parts.", "Controller retrofits for obsolete switches.", "Bypass-isolation upgrades for serviceability."] },
    { name: "Controls & monitoring", lines: ["Remote annunciator installation.", "Paralleling gear service for multi-unit plants.", "Alarm and status reporting to your phone."] },
  ],
  "fuel-systems": [
    { name: "Fuel polishing", lines: ["On-site polishing rig, so fuel stays in the tank.", "Water separation and fine filtration.", "Before/after lab results in writing."] },
    { name: "Tank service", lines: ["Tank cleaning and sludge removal.", "Integrity and containment inspections.", "Day tank and transfer pump service."] },
    { name: "Programs", lines: ["Annual sample-and-polish contracts.", "Biocide treatment dosing.", "Runtime capacity verification to C282."] },
  ],
  "ups-battery": [
    { name: "Service & PM", lines: ["APC, Eaton, Vertiv factory-trained service.", "Annual runtime and capacity testing.", "Firmware and alarm audits."] },
    { name: "Battery programs", lines: ["VRLA string replacement on 3–5 year cycles.", "Lithium upgrade options with payback math.", "Old batteries recycled with documentation."] },
    { name: "Critical loads", lines: ["Server room and network closet UPS sizing.", "Fire panel and access-control backup.", "Elevator recall power coordination."] },
  ],
  electrical: [
    { name: "Strata & commercial", lines: ["Service upgrades and panel replacements.", "Infrared thermography reporting.", "Suite power and common-area work."] },
    { name: "Lighting & retrofits", lines: ["BC Hydro Power Smart Alliance rebates.", "LED retrofits with photometric studies.", "Emergency and exit lighting compliance."] },
    { name: "Studies & compliance", lines: ["Arc-flash and short-circuit studies.", "Coordination studies.", "Annual electrical inspection programs."] },
  ],
  "ev-chargers": [
    { name: "Strata EV Ready", lines: ["CleanBC EV Ready plans and rebate paperwork.", "Load management with FLO, ChargePoint, Wallbox.", "Sub-meter installations and billing setup."] },
    { name: "Commercial & fleet", lines: ["Workplace and retail charger deployments.", "Permit to energization handled.", "DC fast charger planning."] },
    { name: "Residential L2", lines: ["BC Hydro $350 rebate eligible installs.", "Service-panel and load assessment.", "Concealed conduit and clean finish."] },
  ],
  maintenance: [
    { name: "Annual plans", lines: ["Custom schedules per asset class.", "Mechanical, electrical, plumbing, and envelope tasks.", "Digital reports your council can audit."] },
    { name: "Common areas", lines: ["Lobby, hallway, parkade, amenities.", "Pressure washing, painting, fixture replacement.", "Photo-documented work orders."] },
    { name: "Compliance", lines: ["Backflow testing, fire-safety inspections, anchor audits.", "Sprinkler and life-safety coordination.", "Annual certificate management."] },
  ],
  envelope: [
    { name: "Sealants & joints", lines: ["Annual inspection programs.", "Targeted joint replacement.", "Caulking refresh on schedule."] },
    { name: "Roof & deck", lines: ["Roof anchor and tie-off audits.", "Deck membrane and traffic-deck repairs.", "Parkade waterproofing."] },
    { name: "Engineering coordination", lines: ["We work with your engineer's report directly.", "Trades coordinated under one PM.", "Permit and inspection handling."] },
  ],
  construction: [
    { name: "Tenant improvements", lines: ["Office, retail, and amenity fit-outs.", "Gold Seal certified PMs.", "Fixed-price proposals."] },
    { name: "Suite renovations", lines: ["Strata bylaw and permit coordination.", "In-house mechanical and electrical.", "Concierge-style protection plans."] },
    { name: "Small commercial", lines: ["Light industrial fit-outs.", "Restaurant builds with full kitchen mechanical.", "Schedule and budget transparency."] },
  ],
  "property-services": [
    { name: "Repairs & finishes", lines: ["Carpentry, drywall, painting, hardware.", "Common-room refreshes.", "Door, lock, hinge replacement."] },
    { name: "Exterior", lines: ["Fencing, gates, post replacement.", "Power washing, parkade detailing.", "Signage and address numerals."] },
    { name: "Quick response", lines: ["Same-week dispatch for non-emergency.", "Photo-documented work orders.", "Single PO with rest of Woola."] },
  ],
  "led-lighting": [
    { name: "Retrofit projects", lines: ["Fluorescent troffer to LED panel swap.", "Common-area, parkade and hallway relamping.", "Photometric design before install."] },
    { name: "Controls", lines: ["Occupancy and daylight sensors.", "Lutron and Leviton dimming systems.", "Time-of-day scheduling with astronomical clocks."] },
    { name: "Rebates & payback", lines: ["BC Hydro Power Smart Alliance submission.", "Payback modelling for the strata council.", "Post-install verification and audit paperwork."] },
  ],
  "low-voltage": [
    { name: "Structured cabling", lines: ["Cat 6 and 6A runs to TIA-568 standards.", "Labeled patch panels and rack terminations.", "As-built documentation on closeout."] },
    { name: "Security & access", lines: ["Camera runs with PoE budgets.", "Access-control panel wiring and door hardware.", "Coordination with your security integrator."] },
    { name: "Fibre & backbone", lines: ["OS2 single-mode fibre trunks.", "Rack-to-rack and building-to-building runs.", "OTDR test reports on completion."] },
  ],
};

const equipmentHeading: Record<string, { title: string; description: string }> = {
  build: {
    title: "Assets we look after.",
    description:
      "The building systems and finishes we're dispatched to most. If yours isn't listed, ask. We probably handle it.",
  },
  default: {
    title: "Equipment we service.",
    description:
      "The equipment our technicians install, maintain, and repair every week. If yours isn't listed, ask. We probably service it.",
  },
};

export default function ServicePage({ params }: { params: Params }) {
  const found = getService(params.division, params.service);
  if (!found) return notFound();
  const { division, service } = found;
  const Icon = service.icon;
  const scopes = scopeDeepDive[service.slug] || [];
  const eqHead = equipmentHeading[division.slug] || equipmentHeading.default;

  const showCalculator = service.slug === "hvac" || service.slug === "plumbing" || service.slug === "gas";

  return (
    <>
      <section className="bg-cream-50 border-b hairline">
        <div className="container-x pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="text-sm text-ink-400">
            <Link href="/" className="hover:text-ink-700">Woola</Link>
            <span className="mx-1.5">/</span>
            <Link href={`/${division.slug}`} className="hover:text-ink-700">{division.name}</Link>
            <span className="mx-1.5">/</span>
            <span className="text-ink-700">{service.name}</span>
          </div>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-ink-800 text-cream-50 flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="eyebrow">{division.name} · {service.short}</div>
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.98] text-ink-800">
                {service.name}
              </h1>
              <p className="mt-5 text-lg text-ink-500 max-w-2xl leading-relaxed">{service.description}</p>
            </div>
            <div className="lg:col-span-4 card p-6">
              <div className="eyebrow">{division.name}</div>
              <div className="mt-2 font-semibold">{division.contactPhone}</div>
              <div className="mt-1 text-sm text-ink-500">{division.contactEmail}</div>
              <Link href="/contact" className="btn btn-primary mt-5 w-full justify-center">
                Book service <Phone className="w-4 h-4" />
              </Link>
              <ul className="mt-5 space-y-2">
                {service.highlights.slice(0, 3).map((h) => (
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

      {service.primer && (
        <section className="bg-white border-b hairline">
          <div className="container-x section">
            <div className="flex items-center gap-2 text-brand-500">
              <BookOpen className="w-4 h-4" strokeWidth={1.75} />
              <div className="eyebrow !text-brand-500">Plain-English primer</div>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-ink-800 tracking-tight max-w-3xl leading-tight">
              What is {lowerName(service.name)}?
            </h2>
            <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-md aspect-[4/3] bg-ink-100 border hairline">
                  <Image
                    src={service.primer.image}
                    alt={service.primer.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 text-xs text-ink-400">
                  {service.primer.imageAlt}. Photo: {service.primer.imageCredit}.
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-lg text-ink-600 leading-relaxed">
                  {service.primer.what}
                </p>
                <a
                  href="#glossary"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-500 link-underline"
                >
                  New to the terminology? See the glossary <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.equipment && service.equipment.length > 0 && (
        <section className="bg-cream-100 border-b hairline">
          <div className="container-x section">
            <SectionHead
              eyebrow="Equipment expertise"
              title={eqHead.title}
              description={eqHead.description}
            />
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {service.equipment.map((item) => (
                <div
                  key={item.name}
                  className="group card overflow-hidden bg-white flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-ink-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-4 py-3 border-t hairline">
                    <div className="text-sm font-semibold text-ink-800 leading-tight">
                      {item.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-ink-400">Photos: Wikimedia Commons.</div>
          </div>
        </section>
      )}

      {scopes.length > 0 && (
        <Section>
          <SectionHead
            eyebrow="Scope"
            title="What we actually do, in detail."
            description="The trade-by-trade work we book under this service. If your scope isn't listed, ask. We probably do it."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {scopes.map((s) => (
              <div key={s.name} className="card p-7">
                <h3 className="text-xl font-semibold text-ink-800">{s.name}</h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-600">
                  {s.lines.map((l) => (
                    <li key={l} className="flex gap-2">
                      <span className="text-brand-500 mt-1">·</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {showCalculator && (
        <section className="bg-cream-100 border-y hairline">
          <div className="container-x section">
            <SectionHead
              eyebrow="Rough estimator"
              title="Get a starting number before we visit."
              description="A no-obligation pre-quote estimate based on home size, equipment tier, and BC market data."
            />
            <div className="mt-10">
              <Calculator />
            </div>
          </div>
        </section>
      )}

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHead eyebrow="Cities" title="Where this service runs." />
            <div className="mt-6 flex flex-wrap gap-2">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/service-areas/${c.slug}`}
                  className="text-sm px-3 py-1.5 rounded-full bg-cream-100 border hairline hover:bg-ink-800 hover:text-cream-50 transition"
                >
                  {service.name} in {c.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Why Woola" title="What makes this service different." />
            <ul className="mt-6 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-ink-800 text-cream-50 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-ink-700">{h}</span>
                </li>
              ))}
            </ul>
            <Link href={`/${division.slug}`} className="btn btn-outline mt-8">
              See all {division.name} services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {service.primer && service.primer.parts.length > 0 && (
        <section id="glossary" className="bg-cream-100 border-t hairline">
          <div className="container-x section">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                <div className="flex items-center gap-2 text-brand-500">
                  <BookOpen className="w-4 h-4" strokeWidth={1.75} />
                  <div className="eyebrow !text-brand-500">Glossary</div>
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-ink-800 tracking-tight">
                  Parts &amp; terms worth knowing.
                </h2>
                <p className="mt-4 text-ink-500 text-sm leading-relaxed">
                  The vocabulary that comes up in quotes and site visits, explained in
                  plain English. Ask your coordinator if anything else needs translating.
                </p>
              </div>
              <div className="lg:col-span-8">
                <dl className="grid sm:grid-cols-2 gap-4">
                  {service.primer.parts.map((p) => (
                    <div key={p.term} className="card p-5 bg-white">
                      <dt className="font-semibold text-ink-800 text-sm">{p.term}</dt>
                      <dd className="mt-1.5 text-sm text-ink-600 leading-relaxed">{p.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Book ${lowerName(service.name)} with Woola.`}
        description="Tell us about the property and we'll get a coordinator in touch within one business day."
      />
    </>
  );
}
