/**
 * Case studies, from Brett Johnston's "Major Project Case Studies" document
 * (final editorial revision, 2026-11-06). Copy is his, lightly formatted.
 * Display order within each division follows the document; there is no
 * global ranking.
 *
 * Confidentiality: city-level locations only, non-identifying photography.
 * Photos are stock Woola field shots for now (Brett, 2026-11-09); swap in
 * project photography as it arrives. `locationToConfirm` marks the cities the
 * document left bracketed. `review` holds the division-leader checklist item
 * for that story and is never rendered.
 */

export type DivisionSlug = "mechanical" | "power" | "electrical" | "build";

export type CaseStudy = {
  slug: string;
  division: DivisionSlug;
  title: string;
  /** Short category label for cards. */
  tag: string;
  location: string;
  locationToConfirm?: boolean;
  audiences: string[];
  /** Divisions that worked the project, lead first. */
  teams: DivisionSlug[];
  /** Two narrative paragraphs. */
  body: [string, string];
  highlights: [string, string, string];
  cta: string;
  related: { label: string; href: string }[];
  /** Another case study that tells the same program from a different division. */
  companion?: string;
  cover: string;
  coverAlt: string;
  /** Homepage candidates per the document's publishing guidance. */
  featured?: boolean;
  review?: string;
};

export const caseStudies: CaseStudy[] = [
  // ─── Mechanical ───────────────────────────────────────────────────────────
  {
    slug: "residential-repiping-occupied-buildings",
    division: "mechanical",
    title: "Residential Copper & Poly-B Repiping in Occupied Buildings",
    tag: "Repiping",
    location: "Multiple Lower Mainland cities, BC",
    audiences: ["Strata councils", "Property managers", "Building operators"],
    teams: ["mechanical", "build"],
    body: [
      "Over the past year, Woola completed eight major domestic-water repiping projects in occupied residential buildings ranging from four to six storeys and 42 to 188 suites. The work replaced aging copper and Poly-B distribution piping, with project-specific scopes covering risers, hot- and cold-water branches, suite connections and isolation points. Before construction, Woola Mechanical coordinated the engineering and municipal requirements, reviewed access and isolation needs, and sequenced resident notifications, planned water shutdowns, installation and testing around each building’s daily operations.",
      "Woola Mechanical and Woola Build worked from one coordinated schedule rather than separating plumbing and interior restoration into consecutive contracts. As sections of piping were completed, Build crews followed with firestopping, drywall repairs, finishing and painting while installation advanced elsewhere. Dedicated site leadership kept residents, property managers and the trade teams aligned on access, progress and turnover. On one project, construction turnover followed the final waterline replacement by just five days. For strata councils, that translates into clearer accountability, fewer contractor handoffs and a faster path from infrastructure replacement to restored suites.",
    ],
    highlights: [
      "Eight major repiping projects completed in one year",
      "Occupied buildings: 4–6 storeys and 42–188 suites",
      "One project: final construction turnover 5 days after the last waterline replacement",
    ],
    cta: "Discuss a residential repiping project",
    related: [
      { label: "Plumbing", href: "/mechanical/plumbing" },
      { label: "Waterline re-piping (Build)", href: "/build/waterline-repiping" },
    ],
    companion: "multi-building-repiping-interior-restoration",
    cover: "/field/01-08-2025-surrey-mech-1.jpg",
    coverAlt: "Two Woola Mechanical technicians working on new copper water piping in a mechanical room",
    featured: true,
    review: "Confirm project list, exact units and storeys, piping types, engineer/permit involvement, testing records and five-day turnover definition.",
  },
  {
    slug: "120-ton-modular-chiller-plant-replacement",
    division: "mechanical",
    title: "120-Ton Modular Chiller Plant Replacement",
    tag: "Cooling plant",
    location: "Vancouver, BC",
    audiences: ["Building operators", "Commercial property managers", "Strata councils"],
    teams: ["mechanical", "electrical"],
    body: [
      "Woola Mechanical modernized an aging central cooling plant by replacing a single large chiller with four 30-ton modular units, providing approximately 120 tons of installed cooling capacity. Working within an existing mechanical room required planning for equipment removal and rigging, service isolation, piping modifications, electrical interfaces and controls integration. Our team coordinated the installation sequence and the associated technical trades to address access constraints and the building’s ongoing operational requirements.",
      "The modular configuration was selected to support staged cooling output, operational flexibility and improved serviceability compared with dependence on one large machine. Woola managed the project from assessment and equipment coordination through installation and startup, giving the building operator one team to engage on schedule, technical decisions and system handover. For an owner facing a major capital replacement, the value was both a renewed central plant and a more predictable process for getting complex mechanical work completed in an occupied property.",
    ],
    highlights: [
      "Four 30-ton modular chillers; approximately 120 tons total",
      "Complex equipment removal, rigging and mechanical-room integration",
      "One schedule covering mechanical, electrical interfaces and startup",
    ],
    cta: "Plan a central cooling plant upgrade",
    related: [
      { label: "Cooling systems", href: "/mechanical/cooling-systems" },
      { label: "HVAC & heat pumps", href: "/mechanical/hvac" },
      { label: "Panel & service upgrades", href: "/electrical/panel-upgrades" },
    ],
    cover: "/field/07-28-2026-mech-1.jpg",
    coverAlt: "Insulated chilled-water piping and pumps in a central plant room",
    featured: true,
    review: "Verify installed equipment and nameplate capacities, site startup/commissioning status and any specific claims about redundancy or savings.",
  },
  {
    slug: "all-electric-domestic-hot-water-conversion",
    division: "mechanical",
    title: "All-Electric Domestic Hot Water Plant Conversion",
    tag: "Electrification",
    location: "Vancouver, BC",
    audiences: ["Strata councils", "Building operators", "Property managers"],
    teams: ["mechanical", "electrical"],
    body: [
      "A residential building’s aging gas-fired domestic hot water plant was converted to an all-electric solution using CO₂ heat-pump technology and thermal storage. Woola Mechanical worked through equipment placement, domestic hot water demand, storage and circulation arrangements, piping integration and the operating requirements of an occupied building. Because the conversion introduced new electrical loads, our Mechanical and Electrical divisions coordinated their scopes with the engineering team rather than treating power availability and mechanical equipment selection as separate decisions.",
      "Woola organized the overlapping installation activities, controls interfaces and startup requirements within one project delivery structure. This helped the customer navigate the practical questions that accompany electrification: how the equipment will fit, how the available electrical service will be used, how hot water needs will be addressed during the changeover and who is accountable when systems intersect. The result was a coordinated infrastructure modernization designed to support reliable domestic hot water production and the property’s longer-term energy objectives, without multiplying the number of contractors the customer had to manage.",
    ],
    highlights: [
      "Gas-fired plant converted to CO₂ heat-pump technology",
      "Thermal-storage, circulation and electrical-load integration",
      "Mechanical and Electrical divisions coordinated through one project team",
    ],
    cta: "Explore domestic hot water electrification",
    related: [
      { label: "Heating systems", href: "/mechanical/heating-systems" },
      { label: "Retrofits & capital projects", href: "/mechanical/retrofits" },
      { label: "Panel & service upgrades", href: "/electrical/panel-upgrades" },
    ],
    cover: "/field/07-28-2026-mech-9.jpg",
    coverAlt: "Woola Mechanical technician at labelled hot-water piping in a plant room",
    review: "Confirm commissioning and turnover, system equipment/configuration, any outage-continuity claim and final performance figures.",
  },
  {
    slug: "central-boiler-plant-replacement-occupied-building",
    division: "mechanical",
    title: "Central Boiler Plant Replacement in an Occupied Building",
    tag: "Boiler plant",
    location: "Delta, BC",
    audiences: ["Strata councils", "Property managers", "Building operators"],
    teams: ["mechanical"],
    body: [
      "Woola Mechanical was engaged to replace an aging central boiler plant serving an occupied multi-unit residential building. Our assessment considered more than the boiler itself: existing distribution piping, circulation equipment, equipment access, control interfaces, planned service isolation and the condition of surrounding mechanical infrastructure. The replacement scope was organized around equipment procurement, removal, mechanical tie-ins and commissioning, with the property manager kept informed of the work sequence and anticipated building impacts.",
      "Woola coordinated the installation and supporting technical activities through one accountable project team. Reviewing the complete heating arrangement helped reduce the risk of simply introducing new equipment into an unresolved system condition, while maintaining a practical plan for maintenance access and long-term service. The finished project renewed a critical building asset and gave the operator clearer visibility into the system, its controls and future maintenance requirements, without having to independently manage each stage of the replacement.",
    ],
    highlights: [
      "Central heating plant modernization at an occupied property",
      "Boiler, piping, circulation and controls considered as one system",
      "Coordinated removal, installation and commissioning",
    ],
    cta: "Review a boiler plant replacement",
    related: [
      { label: "Heating systems", href: "/mechanical/heating-systems" },
      { label: "Preventative maintenance", href: "/mechanical/preventative-maintenance" },
    ],
    cover: "/field/07-28-2026-mech-6.jpg",
    coverAlt: "Woola Mechanical technician servicing a boiler-room pump and controller",
    review: "Confirm final equipment and controls scope, commissioning records and current operating status.",
  },

  // ─── Electrical ───────────────────────────────────────────────────────────
  {
    slug: "commercial-electrical-vault-maintenance-bc-hydro",
    division: "electrical",
    title: "Commercial Electrical Vault Maintenance & BC Hydro Coordination",
    tag: "Vault maintenance",
    location: "Multiple Lower Mainland cities, BC",
    audiences: ["Commercial property owners", "Asset managers", "Building operators"],
    teams: ["electrical", "power"],
    body: [
      "Woola Electrical developed a coordinated maintenance program for electrical vaults serving a portfolio of large commercial properties. Each site required review of the service arrangement, safe access, maintenance scope and the operating consequences of taking distribution equipment out of service. Woola organized qualified electrical personnel and the maintenance sequence, while leading the client-side communications with BC Hydro concerning the applicable isolation process and planned maintenance windows.",
      "Where the electrical configuration supported an approved temporary-power arrangement, Woola coordinated with its Power division to plan generator readiness and transfer activities around the shutdown. Electrical maintenance, utility communication and standby-power support were brought together under one project lead, reducing the number of separate parties the property owner needed to direct. The approach was designed to protect safety, make outages more predictable and keep business operators informed of what would happen before, during and after each maintenance window. Any generator transfer remained subject to site design, approvals and safe switching procedures.",
    ],
    highlights: [
      "Portfolio-wide coordination of commercial electrical vault maintenance",
      "BC Hydro isolation requests and outage communications managed centrally",
      "Electrical and Power teams aligned where generator transfer was technically supported",
    ],
    cta: "Review your electrical vault maintenance program",
    related: [
      { label: "Electrical vault cleaning & maintenance", href: "/electrical/vault-cleaning" },
      { label: "Generator maintenance & inspections", href: "/power/maintenance-inspections" },
    ],
    cover: "/field/07-28-2026-electrical-8.jpg",
    coverAlt: "Woola electrician opening a switchgear section in an electrical room",
    featured: true,
    review: "MANAGEMENT SCENARIO. Do not publish as a completed-project claim until site count, vault work, BC Hydro coordination, generator involvement and completed outcomes are documented.",
  },
  {
    slug: "intelligent-load-management-building-electrification",
    division: "electrical",
    title: "Intelligent Load Management for Building Electrification",
    tag: "Load management",
    location: "Vancouver, BC",
    audiences: ["Building owners", "Strata councils", "Facilities operators"],
    teams: ["electrical", "mechanical"],
    body: [
      "A building electrification project introduced new demand from domestic hot water equipment and electric vehicle charging infrastructure. Woola Electrical supported a solution that assessed available electrical capacity and integrated intelligent load-management controls with the existing distribution system. Rather than designing around an immediate major service increase, the project considered load monitoring, control priorities, equipment coordination and how new electrical loads could be accommodated within the available infrastructure.",
      "Woola Electrical worked alongside Woola Mechanical and the project engineering team so the electrical strategy remained connected to the actual equipment being installed. Coordinated planning simplified the interfaces between new heat pumps, charging infrastructure, controls and building operations, and helped avoid a major incoming electrical service upgrade. For an owner balancing electrification goals with capital budgets and service continuity, the project illustrates why a coordinated technical assessment should come before committing to a larger utility upgrade.",
    ],
    highlights: [
      "Electrical capacity and load allocation considered together",
      "Heat-pump and EV-charging infrastructure coordinated",
      "Major incoming electrical service upgrade avoided",
    ],
    cta: "Assess your building’s electrical capacity",
    related: [
      { label: "Panel & service upgrades", href: "/electrical/panel-upgrades" },
      { label: "EV charging", href: "/electrical/ev-chargers" },
      { label: "Retrofits & capital projects", href: "/mechanical/retrofits" },
    ],
    cover: "/field/07-28-2026-electrical-9.jpg",
    coverAlt: "Woola electrician at a building distribution panel",
    review: "Confirm controls platform and final system configuration, commissioning status and evidence supporting avoided-service-upgrade claim.",
  },
  {
    slug: "annual-electrical-operating-permit-oversight",
    division: "electrical",
    title: "Annual Electrical Operating Permit & Maintenance Oversight",
    tag: "Operating permits",
    location: "Multiple Lower Mainland cities, BC",
    audiences: ["Strata councils", "Portfolio property managers", "Commercial operators"],
    teams: ["electrical"],
    body: [
      "Woola Electrical supports strata and commercial clients with the recurring technical and administrative work associated with annual electrical operating permits. Depending on the property and applicable authority, that work includes planning inspections, coordinating the designated Field Safety Representative, maintaining service and maintenance records, monitoring renewal requirements and helping prioritize deficiencies discovered during routine oversight. Our team also coordinates qualified personnel when regulated electrical maintenance or corrective work is required.",
      "For property managers responsible for several buildings, the value is continuity: one knowledgeable service partner who helps keep equipment records, inspection activity and follow-up work organized year after year. Woola supports the permit holder and designated FSR within their respective responsibilities rather than replacing the owner’s statutory obligations. This ongoing service model gives councils and operators a clearer view of upcoming work, documented findings and the condition of their electrical assets before an issue becomes an unplanned interruption.",
    ],
    highlights: [
      "Ongoing annual permit and maintenance coordination",
      "FSR, inspection, logbook and deficiency follow-up support",
      "Structured oversight for strata and commercial portfolios",
    ],
    cta: "Review your electrical operating permit requirements",
    related: [
      { label: "Electrical service & maintenance", href: "/electrical/electrical" },
      { label: "Infrared scanning", href: "/electrical/infrared-scanning" },
    ],
    cover: "/field/07-23-2026-electrical-3.jpg",
    coverAlt: "Woola electrician reviewing a thermal camera reading in an electrical room",
    review: "ONGOING SERVICE PORTFOLIO, not a single completed project. Confirm how Woola coordinates FSR services, permit-holder responsibilities and municipality-specific requirements.",
  },

  // ─── Power ────────────────────────────────────────────────────────────────
  {
    slug: "three-generator-standby-power-infrastructure",
    division: "power",
    title: "Three-Generator Standby Power Infrastructure Project",
    tag: "Standby power",
    location: "West Kelowna, BC",
    audiences: ["Strata councils", "Property owners", "Facilities managers"],
    teams: ["power", "electrical", "build"],
    body: [
      "Woola Power was engaged on a major standby-power infrastructure project involving three commercial generator systems for an established residential development. Delivering the installation required more than generator placement: the scope incorporated site preparation, engineered equipment pads, underground electrical routing, transfer equipment, equipment protection and coordination with the existing electrical infrastructure. The work brought together civil construction, electrical distribution, generator installation and the associated engineering and permitting interfaces.",
      "Woola Power, Electrical and Build worked within a coordinated project structure, giving the customer one team to manage site readiness, construction sequencing, technical interfaces and commissioning planning. Bringing those scopes together reduced the need to reconcile competing contractor schedules and made it easier to address access and installation issues as the project advanced. For a development investing in long-term power resilience, Woola’s role was to manage the full delivery process, not simply supply the generator equipment.",
    ],
    highlights: [
      "Three commercial standby generator systems in the project scope",
      "Civil works, underground electrical distribution and transfer equipment",
      "Power, Electrical and Build coordinated under one project structure",
    ],
    cta: "Discuss a standby generator installation",
    related: [
      { label: "Generator replacement & retrofits", href: "/power/generators" },
      { label: "Transfer switches & controls", href: "/power/transfer-switches" },
      { label: "Construction & renos", href: "/build/construction" },
    ],
    cover: "/field/07-28-2026-power-1.jpg",
    coverAlt: "Commercial Cummins standby generator inside a generator room",
    featured: true,
    review: "Confirm installation vs award status, equipment ratings, permit/engineering deliverables, commissioning and final turnover before describing as completed.",
  },
  {
    slug: "automatic-transfer-switch-modernization",
    division: "power",
    title: "Automatic Transfer Switch Modernization",
    tag: "Transfer switches",
    location: "British Columbia",
    locationToConfirm: true,
    audiences: ["Building operators", "Facilities managers", "Commercial owners"],
    teams: ["power", "electrical"],
    body: [
      "Automatic transfer switches are a critical connection between a building’s normal electrical supply and standby generation. Woola Power’s modernization program addressed aging transfer equipment and the need to coordinate replacement without overlooking generator controls, distribution interfaces or the operating impact of scheduled shutdowns. The technical planning considered switch ratings, existing cabling, control signals, transfer and retransfer sequencing, and the isolation necessary to complete the work safely.",
      "Woola Power and Woola Electrical coordinated the installation and functional testing requirements through one delivery team, with planned outages and equipment interfaces addressed before the replacement window. That integrated approach gives a building operator a clearer plan for what will be isolated, how standby-power controls will be checked and when the equipment can be returned to service. The value is disciplined coordination around a critical building system, with fewer handoffs between electrical and generator contractors.",
    ],
    highlights: [
      "Three ATS upgrades identified in the proposed project program",
      "Electrical and generator-control interfaces addressed together",
      "Shutdown coordination and transfer-sequence verification",
    ],
    cta: "Assess your standby power transfer equipment",
    related: [
      { label: "Transfer switches & controls", href: "/power/transfer-switches" },
      { label: "Panel & service upgrades", href: "/electrical/panel-upgrades" },
    ],
    cover: "/field/07-28-2026-electrical-10.jpg",
    coverAlt: "Woola technician testing wiring inside an automatic transfer switch cabinet",
    review: "Confirm exact number completed, city, equipment ratings, test results and authorization for shutdown/transfer claims.",
  },
  {
    slug: "emergency-generator-support-wildfire-conditions",
    division: "power",
    title: "Emergency Generator Support During Wildfire Conditions",
    tag: "Emergency response",
    location: "Boston Bar, BC",
    audiences: ["Critical infrastructure operators", "Business owners", "Facilities managers"],
    teams: ["power", "electrical"],
    body: [
      "Woola Power provided specialized generator support during wildfire-related operating conditions, when dependable power infrastructure was particularly important. The assignment called for assessing the operating situation, establishing equipment priorities and coordinating the technical resources needed to respond under difficult site conditions. Generator support in this environment demands attention to fuel systems, controls, electrical connections, operating status and the relationship between the generating equipment and the loads it is intended to serve.",
      "Our team focused on practical troubleshooting, clear communication and a response plan aligned with the customer’s immediate operational needs. Through Woola Power and access to Woola Electrical resources, the customer had a coordinated route to both generator and electrical expertise rather than separate service calls without a common lead. The project illustrates the value of a service partner that can assess urgent conditions, make informed technical decisions and organize the next steps when operational pressures are high.",
    ],
    highlights: [
      "Generator service during wildfire-related operating conditions",
      "Technical assessment and response coordination",
      "Access to combined generator and electrical expertise",
    ],
    cta: "Discuss emergency power readiness",
    related: [
      { label: "Emergency service", href: "/power/emergency-service" },
      { label: "Repairs & troubleshooting", href: "/power/repairs-troubleshooting" },
    ],
    cover: "/field/07-28-2026-power-2.jpg",
    coverAlt: "Woola Power technician working on a standby generator engine",
    review: "Confirm exact mobilization, response time if claimed, equipment serviced, work completed and operating outcome.",
  },

  // ─── Build ────────────────────────────────────────────────────────────────
  {
    slug: "multi-building-repiping-interior-restoration",
    division: "build",
    title: "Multi-Building Repiping & Interior Restoration Program",
    tag: "Interior restoration",
    location: "Multiple Lower Mainland cities, BC",
    audiences: ["Strata councils", "Property managers", "Building operators"],
    teams: ["build", "mechanical"],
    body: [
      "Woola Build delivered the construction and interior-restoration portion of eight major residential repiping projects completed by Woola over the past year. The projects involved occupied buildings of four to six storeys and 42 to 188 suites, where replacing concealed copper and Poly-B lines required carefully managed access through walls and service areas. Build crews coordinated selective opening, site protection, firestopping, drywall replacement, patching, finishing and painting alongside the Mechanical division’s piping replacement sequence.",
      "Instead of waiting for plumbing crews to finish an entire building before restoration could begin, Woola used overlapping trade schedules and direct site leadership to move completed areas into repair while waterline installation continued elsewhere. Resident access, inspection requirements, finish consistency and progress communication were coordinated within the same project-management structure. On one project, the last construction areas were turned over just five days after the final waterline replacement. For property managers, that meant one accountable contractor for both the infrastructure work and the visible condition of the suites returned to residents.",
    ],
    highlights: [
      "Construction support across eight major repiping projects",
      "Firestopping, drywall, surface restoration and painting sequenced with plumbing",
      "One project: final construction turnover 5 days after last waterline replacement",
    ],
    cta: "Plan a repiping & restoration project",
    related: [
      { label: "Waterline re-piping", href: "/build/waterline-repiping" },
      { label: "Plumbing (Mechanical)", href: "/mechanical/plumbing" },
    ],
    companion: "residential-repiping-occupied-buildings",
    cover: "/field/08-10-2026-build-1.jpg",
    coverAlt: "Residential corridor with the ceiling opened for waterline replacement",
    review: "Same eight-project program as Mechanical case #1; do not count as an additional eight projects. Confirm specific restoration scopes and turnover.",
  },
  {
    slug: "multi-unit-deck-waterproofing-railing-renewal",
    division: "build",
    title: "Multi-Unit Deck, Waterproofing & Railing Renewal",
    tag: "Building envelope",
    location: "British Columbia",
    locationToConfirm: true,
    audiences: ["Strata councils", "Property managers", "Building-envelope consultants"],
    teams: ["build"],
    body: [
      "Woola Build managed a coordinated exterior deck and railing renewal program at an occupied residential property. The work involved opening existing assemblies, addressing deteriorated materials as required, preparing substrates and installing renewed waterproofing and railing components. Technical planning focused on deck drainage, membrane terminations, flashing transitions, railing attachments and protecting adjacent building-envelope assemblies. Work sequencing also had to account for weather exposure, resident access and the safe use of common areas throughout construction.",
      "Woola organized demolition, repair, waterproofing and finishing through one site-management structure, with the ability to coordinate engineering or building-envelope review when concealed conditions required further direction. The customer was kept aligned on the effect of discovered deficiencies on scope and schedule rather than left to reconcile separate trades. For a strata council funding a substantial exterior renewal, that approach supports consistent workmanship, controlled changes and a more manageable process for returning decks to service.",
    ],
    highlights: [
      "Coordinated deck, waterproofing and railing renewal",
      "Attention to drainage, flashing and envelope transitions",
      "Resident access, concealed conditions and site sequencing managed together",
    ],
    cta: "Discuss a deck or building-envelope renewal",
    related: [
      { label: "Building envelope", href: "/build/envelope" },
      { label: "Maintenance packages", href: "/build/maintenance" },
    ],
    cover: "/field/08-12-2026-build-8.jpg",
    coverAlt: "Woola Build crew at the balconies of a wood-frame residential building",
    review: "Confirm completed deck count, property location, waterproofing and railing details, extent of structural repair and project completion.",
  },
  {
    slug: "192-townhome-cedar-fence-replacement",
    division: "build",
    title: "192-Townhome Cedar Fence Replacement & Custom Staining",
    tag: "Exterior renewal",
    location: "British Columbia",
    locationToConfirm: true,
    audiences: ["Strata councils", "Property managers", "Residential community operators"],
    teams: ["build"],
    body: [
      "Woola Build replaced the cedar fencing throughout a 192-unit townhome complex, delivering a property-wide exterior renewal rather than a series of disconnected repairs. A project of this scale required consistent construction details across numerous property lines and shared spaces, with planning for demolition, material handling, resident access, fence alignment, grade changes and the condition of existing site elements. The replacement program also included custom staining, making finish consistency and the sequencing of construction and coating work important parts of the scope.",
      "Woola organized the work in manageable sections under dedicated site supervision, coordinating installation crews, material deliveries, resident communications and the finishing process. Using one contractor for removal, replacement and custom staining gave the property manager a single standard for workmanship and one team to address scheduling or site conditions as they arose. The completed program renewed the community’s cedar fencing with a consistent appearance and reduced the administrative work otherwise involved in coordinating multiple installers and finishing contractors across 192 homes.",
    ],
    highlights: [
      "Complete cedar-fence replacement across a 192-townhome complex",
      "Custom staining incorporated into the coordinated scope",
      "Phased resident access, construction and finishing managed by one team",
    ],
    cta: "Plan a property-wide exterior improvement",
    related: [
      { label: "Construction & renos", href: "/build/construction" },
      { label: "Turnkey project solutions", href: "/build/turnkey-projects" },
    ],
    cover: "/field/08-12-2026-build-5.jpg",
    coverAlt: "Townhome rooftops and trees with a Woola Build crew member on site",
    review: "Confirm city, full extent of fencing included, stain application/specification, exact project completion and final photographic permissions.",
  },
  {
    slug: "engineered-retaining-wall-site-infrastructure",
    division: "build",
    title: "Engineered Retaining Wall & Site Infrastructure Renewal",
    tag: "Civil & structural",
    location: "British Columbia",
    locationToConfirm: true,
    audiences: ["Property owners", "Strata councils", "Commercial property managers"],
    teams: ["build"],
    body: [
      "Woola Build took on a substantial engineered retaining wall and site-improvement project requiring coordinated excavation, structural construction, drainage provisions and reinstatement of disturbed areas. Work of this nature calls for alignment between engineered design, ground and foundation conditions, excavation access, backfill requirements and control of surface and subsurface water. Construction planning also had to account for applicable municipal permitting, inspection requirements and the conditions found once the site was opened.",
      "Woola coordinated the construction activities and the interfaces with design professionals and municipal authorities on the customer’s behalf, while keeping on-site leadership responsible for sequencing, safety and communication. Rather than asking the owner to manage the engineer, excavation contractor, structural crew and finishing activities independently, Woola provided one project lead to resolve interfaces and keep decisions moving. The project reflects Woola Build’s role as a construction partner able to manage technical work from early planning through site restoration.",
    ],
    highlights: [
      "Engineered retaining wall with civil and structural work",
      "Excavation, drainage, backfill and restoration coordination",
      "Engineering and municipal-process interfaces managed under one project lead",
    ],
    cta: "Discuss an engineered civil or structural project",
    related: [
      { label: "Construction & renos", href: "/build/construction" },
      { label: "Turnkey project solutions", href: "/build/turnkey-projects" },
    ],
    cover: "/field/08-12-2026-build-6.jpg",
    coverAlt: "Crane lifting materials over a residential site during exterior construction",
    review: "Confirm city, project completion, engineered wall length/design and specific permit/inspection steps before publishing.",
  },
];

export const DIVISION_ORDER: DivisionSlug[] = ["mechanical", "electrical", "power", "build"];

export const divisionLabel: Record<DivisionSlug, string> = {
  mechanical: "Woola Mechanical",
  power: "Woola Power",
  electrical: "Woola Electrical",
  build: "Woola Build",
};

export function caseStudiesFor(division: string) {
  return caseStudies.filter((c) => c.division === division);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/** Homepage picks, in document order. */
export function featuredCaseStudies(limit = 3) {
  return caseStudies.filter((c) => c.featured).slice(0, limit);
}

/** Other stories to show under a case study: same division first, then the rest. */
export function moreCaseStudies(current: CaseStudy, limit = 3) {
  const same = caseStudies.filter((c) => c.division === current.division && c.slug !== current.slug && c.slug !== current.companion);
  const rest = caseStudies.filter((c) => c.division !== current.division && c.slug !== current.companion);
  return [...same, ...rest].slice(0, limit);
}

/** Short one-line teaser for cards: the first sentence of the story. */
export function teaser(c: CaseStudy) {
  const first = c.body[0];
  const end = first.indexOf(". ");
  return end > 0 ? first.slice(0, end + 1) : first;
}
