import type { Post } from "./posts";

/**
 * Second set of field guides (published Sept to Nov 2026 on a three-day
 * cadence). Facts checked against the sources listed on each post.
 */
export const fieldGuides2: Post[] = [
  {
    slug: "bc-strata-electrical-planning-report-deadline",
    title: "BC strata electrical planning reports: the December 31, 2026 deadline and what the report should answer",
    excerpt:
      "Metro Vancouver stratas with five or more lots need an electrical planning report by December 31, 2026. It decides how many EV chargers and heat pumps the building can take, and what it will cost to add more. Here is what a good one covers.",
    date: "2026-11-17",
    readingTime: "7 min read",
    category: "Rebates & Compliance",
    division: "electrical",
    author: { name: "Woola Electrical", role: "Field Notes" },
    cover: "/blog/strata-epr.jpg",
    coverAlt: "Electrician working on a building electrical meter",
    coverCredit: { name: "Raze Solar", url: "https://unsplash.com/@razesolar" },
    body: [
      {
        paragraphs: [
          "Alongside the depreciation report, BC added a second mandatory study for stratas: the electrical planning report, or EPR. Strata corporations with five or more lots in the Metro Vancouver Regional District, the Fraser Valley Regional District and the Capital Regional District (outside the Gulf Islands) must have one by December 31, 2026. Stratas elsewhere in BC have until December 31, 2028. Only designated professionals can prepare one, and the province updated its guidance for preparers in May 2026.",
          "The report has a simple purpose. It tells the council how much electrical capacity the building has today, how much owners will want over the next decades for EV charging, heat pumps and electrified hot water, and what it would take to close the gap.",
        ],
      },
      {
        heading: "Why councils should care about the result, not just the deadline",
        paragraphs: [
          "The EPR is the document an owner's EV charger request will be measured against. It is also what the council will use when someone proposes replacing a gas boiler with heat pumps, or when an engineer says the building needs a service upgrade. A thin report that ticks the regulatory box leaves those decisions to guesswork.",
        ],
      },
      {
        heading: "What a useful EPR answers",
        bullets: [
          "The building's existing service size, transformer arrangement and how heavily it is loaded today, ideally from utility demand data rather than nameplates.",
          "Spare capacity in the main switchgear and in the parkade distribution where chargers would connect.",
          "How many Level 2 chargers the building can support with and without an energy management system that shares capacity between them.",
          "What heat pump or electric hot water conversions would add, and whether they compete with EV charging for the same capacity.",
          "Options and rough costs: load management, a service upgrade, a new transformer, or a phased approach.",
          "Recommendations the council can actually adopt, such as a charger policy and a reserve fund line for the upgrade.",
        ],
        paragraphs: [],
      },
      {
        heading: "Load management changes the math",
        paragraphs: [
          "The BC Electrical Code requires EV charger loads to be counted at 100 percent when calculating a service, which is why parkades fill up so quickly on paper. Approved electric vehicle energy management systems let several chargers share a circuit or a feeder by throttling when demand is high. In many buildings that is the difference between a five-figure project and a seven-figure service upgrade. Technical Safety BC publishes a bulletin on how these systems must be approved and accepted.",
        ],
      },
      {
        heading: "Getting it done before the deadline",
        paragraphs: [
          "Preparers are busy heading into 2026. Book early, and hand the preparer whatever you have: single-line drawings, recent electrical maintenance or infrared reports, and BC Hydro billing with demand data. Ask whether the preparer will walk the electrical rooms with your electrical contractor. A contractor who maintains the building knows which panels are full, which breakers trip and where conduit can actually run.",
        ],
      },
    ],
    faqs: [
      {
        q: "When does a Metro Vancouver strata need an electrical planning report?",
        a: "By December 31, 2026 for stratas with five or more lots in Metro Vancouver, the Fraser Valley and the Capital Regional District excluding the Gulf Islands. The rest of BC has until December 31, 2028.",
      },
      {
        q: "Do small stratas need an EPR?",
        a: "Existing stratas with fewer than five lots on December 31, 2023 do not need one.",
      },
      {
        q: "Who can prepare an electrical planning report?",
        a: "Only professionals designated under the regulation. Check the province's EPR page for the current list before hiring.",
      },
    ],
    sources: [
      { label: "BC Government: Strata electrical planning report", url: "https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing/operating-a-strata/the-environment/electrical-planning-report" },
      { label: "BC Government: Guidance for preparing strata EPRs (May 2026)", url: "https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/strata-housing/guidance-preparing-strata-eprs-may-2026.pdf" },
      { label: "Technical Safety BC: EVSE and EVEMS bulletin", url: "https://www.technicalsafetybc.ca/regulatory-resources/regulatory-notices/information-bulletin-evse-evems" },
    ],
    services: [
      { label: "Panel and service upgrades", href: "https://woolaelectrical.ca/panel-upgrades" },
      { label: "EV charger installation", href: "https://woolaelectrical.ca/ev-chargers" },
      { label: "Commercial and strata electrical", href: "https://woolaelectrical.ca/" },
    ],
  },

  {
    slug: "generator-load-bank-testing-wet-stacking",
    title: "Generator load bank testing: why your standby generator needs to run hard once a year",
    excerpt:
      "A generator that only ever exercises at light load slowly fouls itself with unburned fuel. Load bank testing proves it can carry the building and burns that buildup off. Here is how it works, how often, and what the report should show.",
    date: "2026-11-14",
    readingTime: "6 min read",
    category: "Building Ops",
    division: "power",
    author: { name: "Woola Power", role: "Field Notes" },
    cover: "/blog/load-bank.jpg",
    coverAlt: "Standby generator installed in a building electrical room",
    coverCredit: { name: "Sergio Martins", url: "https://unsplash.com/@smartins20" },
    body: [
      {
        paragraphs: [
          "Most building generators exercise every week or month and then sit. During those runs the building load is often small, so the diesel engine never gets hot enough to burn its fuel completely. Unburned fuel and soot collect in the exhaust and on the injectors. The industry name is wet stacking, and you can sometimes see it as black, oily residue around the exhaust joints.",
          "Wet stacking reduces power, raises emissions and, left long enough, damages the engine. Worse, a generator that has only ever run lightly has never proven it can carry the building when the power actually goes out.",
        ],
      },
      {
        heading: "What a load bank test is",
        paragraphs: [
          "A load bank is a portable bank of resistors that gives the generator an artificial electrical load. The technician connects it, then steps the load up in stages while recording voltage, frequency, oil pressure, coolant and exhaust temperatures. The generator runs at a high percentage of its rated output for a set period, which heats the engine fully, burns off accumulated fuel and shows whether it holds voltage and frequency under real demand.",
          "Because the load bank provides the load, the test does not interrupt power to the building.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "In Canada, emergency generators fall under CSA C282, which sets inspection, exercise and testing requirements, including monthly exercise under load. Where routine monthly runs cannot reach a meaningful load, an annual load bank test is the standard remedy. Industry practice for that annual test is typically a run at or near full rated load for about an hour, or as recommended by the engine manufacturer. Your generator technician should set the schedule against the current edition of the standard and the manufacturer's instructions.",
        ],
      },
      {
        heading: "What the report should show",
        bullets: [
          "Load steps applied and duration at each step.",
          "Voltage and frequency stability at each step, and recovery after load changes.",
          "Engine readings: oil pressure, coolant temperature, exhaust temperature, battery condition.",
          "Any leaks, alarms or shutdowns, with photos.",
          "A clear pass or deficiency list, with deficiencies quoted separately.",
        ],
        paragraphs: [],
      },
      {
        heading: "Pair it with the rest of the program",
        paragraphs: [
          "Load bank testing is one part of a generator program that includes fuel sampling and polishing, battery and charger checks, transfer switch testing and the annual C282 inspection. Booking them together saves a visit and gives you one complete record for the fire inspector and your insurer.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is wet stacking in a diesel generator?",
        a: "Unburned fuel and soot that build up in the exhaust when a diesel generator runs at light load. It reduces output and can damage the engine. A load bank test burns it off.",
      },
      {
        q: "Does a load bank test cut power to the building?",
        a: "No. The load bank provides an artificial load, so the building stays on utility power throughout.",
      },
      {
        q: "How often should a building generator be load bank tested?",
        a: "Typically once a year when routine exercise does not load the generator enough, scheduled against CSA C282 and the manufacturer's recommendations.",
      },
    ],
    sources: [
      { label: "CSA C282, Emergency electrical power supply for buildings", url: "https://www.csagroup.org/store/product/C282-15/" },
      { label: "Consulting-Specifying Engineer: Load-bank testing ensures performance, reliability", url: "https://www.csemag.com/load-bank-testing-ensures-performance-reliability/" },
    ],
    services: [
      { label: "CSA C282 testing", href: "https://woolapower.ca/c282-testing" },
      { label: "Generator maintenance and inspections", href: "https://woolapower.ca/maintenance-inspections" },
      { label: "Standby generators", href: "https://woolapower.ca/generators" },
    ],
  },

  {
    slug: "building-envelope-2-5-10-warranty-bc",
    title: "Your building envelope warranty ends at year five: what BC stratas should inspect before it does",
    excerpt:
      "BC's mandatory 2-5-10 home warranty covers the building envelope for five years. After that, water getting through the walls is the owners' problem. Here is what to inspect, and when, while the warranty still pays.",
    date: "2026-11-11",
    readingTime: "7 min read",
    category: "Building Ops",
    division: "build",
    author: { name: "Woola Build", role: "Field Notes" },
    cover: "/blog/envelope-warranty.jpg",
    coverAlt: "Multi-storey residential building wrapped in scaffolding during exterior repairs",
    coverCredit: { name: "Seb Doe", url: "https://unsplash.com/@sebdoe" },
    body: [
      {
        paragraphs: [
          "Metro Vancouver learned the hard way what happens when walls let water in. The leaky condo crisis of the 1990s cost owners billions and led directly to BC's mandatory new home warranty. Under it, new homes carry two years of coverage on labour and materials, five years on the building envelope and ten years on the structure. The requirement cannot be waived by contract, and coverage transfers to new owners until it expires.",
          "The five-year envelope coverage is the one stratas most often let lapse without using. It covers defects in the envelope, including defects that let water in and cause, or are likely to cause, material damage. Once it ends, the same defect becomes a special levy.",
        ],
      },
      {
        heading: "What counts as the envelope",
        paragraphs: [
          "The envelope is everything separating inside from outside: cladding, the rainscreen cavity behind it, sheathing membranes, windows and doors, flashings, roofs, balconies and decks, and all the sealant joints between them. In a rainscreen wall, some water is expected to get behind the cladding; the cavity and flashings are what carry it back out. Most failures happen at the transitions, where a window meets the wall or a balcony meets the building.",
        ],
      },
      {
        heading: "When to inspect",
        paragraphs: [
          "Do not wait for year five. Many stratas commission a building envelope condition assessment around years three and four, early enough to report defects, get the warranty provider's investigation done and agree repairs before coverage expires. Check your warranty certificate for the exact dates and notice requirements, because claims must generally be made within the coverage period.",
        ],
      },
      {
        heading: "What a good review covers",
        bullets: [
          "Window and door perimeters, including interior signs such as staining, swollen trim or condensation damage at sills.",
          "Flashings at windows, floor lines, roof edges and balcony connections.",
          "Sealant joints that have cracked, pulled away or were never installed.",
          "Balcony and deck membranes, drains and the connection to the wall below.",
          "Roof membranes, drains and penetrations for mechanical equipment.",
          "Selective test openings or moisture readings where something looks wrong.",
          "Owner surveys: a short questionnaire about leaks and drafts finds problems no walk-around will.",
        ],
        paragraphs: [],
      },
      {
        heading: "After the warranty",
        paragraphs: [
          "Once coverage ends, routine maintenance carries the envelope: sealant renewal on a cycle, annual roof and balcony drain cleaning, window hardware and weatherstripping, and quick repair of anything that leaks. The depreciation report should forecast the big items, like window and cladding replacement, so the reserve fund is ready.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long is the building envelope covered under BC's home warranty?",
        a: "Five years. BC's mandatory 2-5-10 warranty covers two years on labour and materials, five years on the building envelope and ten years on structure.",
      },
      {
        q: "When should a strata inspect the envelope before the warranty expires?",
        a: "Commonly in years three and four, so there is time to report defects and agree repairs with the warranty provider before coverage ends. Check your certificate for exact dates.",
      },
      {
        q: "Does the warranty transfer if a unit is sold?",
        a: "Yes. Coverage stays with the home until the 2-5-10 periods expire.",
      },
    ],
    sources: [
      { label: "Homeowner Protection Act Regulation, B.C. Reg. 29/99", url: "https://free.bcpublications.ca/civix/document/id/complete/statreg/29_99" },
      { label: "Travelers Canada: New home warranties in British Columbia", url: "https://www.travelerscanada.ca/home-warranty/buyers-homeowners/british-columbia" },
    ],
    services: [
      { label: "Building envelope repairs", href: "https://woolabuild.ca/envelope" },
      { label: "Building maintenance", href: "https://woolabuild.ca/maintenance" },
    ],
  },

  {
    slug: "ev-charging-bc-strata-owner-request-rules",
    title: "EV charging in BC stratas: the owner request rules, the votes and what councils must do",
    excerpt:
      "Since 2023, BC strata owners can formally request EV charging for their stall, and councils must respond within three months and cannot unreasonably refuse. Here is how the process works and how to plan the building, not just one charger.",
    date: "2026-11-05",
    readingTime: "7 min read",
    category: "Rebates & Compliance",
    division: "electrical",
    author: { name: "Woola Electrical", role: "Field Notes" },
    cover: "/blog/ev-strata.jpg",
    coverAlt: "Electric vehicle chargers mounted on a parkade wall",
    coverCredit: { name: "smart-me AG", url: "https://unsplash.com/@smartmemarketing" },
    body: [
      {
        paragraphs: [
          "BC changed the Strata Property Act in 2023 to make EV charging easier. Two pieces matter most. First, since May 11, 2023, a strata can approve certain EV charging decisions by majority vote rather than a three-quarter vote. Second, since December 6, 2023, an owner can formally ask the strata to approve the common property alterations needed to install charging for their parking stall, and the strata must not unreasonably refuse.",
        ],
      },
      {
        heading: "How an owner request works",
        bullets: [
          "The owner submits a written request with the information the regulation requires, usually including the proposed equipment, location, installer and who pays.",
          "The strata must consider and respond within three months.",
          "The strata can attach reasonable conditions, such as using a licensed electrician, permits, insurance and responsibility for future maintenance and removal.",
          "Where the charger serves a common property stall, the strata can grant the owner exclusive use of that stall for up to five years.",
        ],
        paragraphs: [],
      },
      {
        heading: "Why one-off approvals go wrong",
        paragraphs: [
          "The first few chargers in a parkade are easy. The trouble starts around the tenth, when the electrical room runs out of capacity and later owners cannot be served without an expensive upgrade. Early approvals that each took their own dedicated circuit can lock the building into the most costly path.",
          "The better approach is a building plan. Stratas in Metro Vancouver need an electrical planning report by December 31, 2026 anyway. Use it to set a charging policy: how chargers connect, whether they share capacity through an energy management system, who owns the equipment and how electricity is billed.",
        ],
      },
      {
        heading: "Energy management is usually the answer",
        paragraphs: [
          "The BC Electrical Code counts EV charger loads at full value when sizing a service. Approved electric vehicle energy management systems let many chargers share limited capacity by slowing charging when demand is high. Overnight, most cars still fill up. Many parkades can then serve far more stalls without a new service.",
        ],
      },
      {
        heading: "Metering and billing",
        paragraphs: [
          "Decide early how owners pay for the electricity they use. Networked chargers with built-in metering and billing avoid the common dispute where every owner subsidises a few drivers. Bake that requirement into the policy so every approved installation is compatible.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can my BC strata refuse my EV charger request?",
        a: "It must not unreasonably refuse a request made under the owner request process, and it must respond within three months. It can attach reasonable conditions such as licensed installation, permits and responsibility for costs.",
      },
      {
        q: "What vote does a strata need to approve EV charging?",
        a: "Since May 2023, certain EV charging decisions can be approved by majority vote instead of three-quarters. Other changes still need a three-quarter vote.",
      },
      {
        q: "How many EV chargers can our parkade support?",
        a: "It depends on the building's electrical capacity and whether chargers share capacity through an energy management system. Your electrical planning report should answer this.",
      },
    ],
    sources: [
      { label: "BC Government: Electric vehicle charging in strata corporations", url: "https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing/operating-a-strata/the-environment/electric-vehicle-charging" },
      { label: "BC Government news: Strata changes for EV charging (2023)", url: "https://news.gov.bc.ca/releases/2023HOUS0169-001935" },
      { label: "Technical Safety BC: EVSE and EVEMS bulletin", url: "https://www.technicalsafetybc.ca/regulatory-resources/regulatory-notices/information-bulletin-evse-evems" },
    ],
    services: [
      { label: "EV charger installation", href: "https://woolaelectrical.ca/ev-chargers" },
      { label: "Panel and service upgrades", href: "https://woolaelectrical.ca/panel-upgrades" },
    ],
  },

  {
    slug: "automatic-transfer-switch-maintenance",
    title: "Automatic transfer switches: the part of your backup power that gets forgotten",
    excerpt:
      "The generator gets the attention, but the automatic transfer switch is what actually moves the building onto backup power. Here is what it does, how it fails, and the testing that proves it will work in an outage.",
    date: "2026-11-02",
    readingTime: "6 min read",
    category: "Building Ops",
    division: "power",
    author: { name: "Woola Power", role: "Field Notes" },
    cover: "/blog/ats.jpg",
    coverAlt: "Generator control and transfer switch panel with indicator lights",
    coverCredit: { name: "Anatol Rurac", url: "https://unsplash.com/@tolikrurac82" },
    body: [
      {
        paragraphs: [
          "When the utility drops, the automatic transfer switch, or ATS, senses the loss, signals the generator to start, waits for stable voltage and frequency, then switches the building's emergency loads over. When utility power returns it waits again, transfers back and lets the generator cool down. A generator in perfect condition is useless if the ATS does not do its job, and in our experience the ATS gets far less attention.",
        ],
      },
      {
        heading: "How transfer switches fail",
        bullets: [
          "Contacts pit and wear from years of switching, raising resistance and heat.",
          "Mechanical operators stiffen without lubrication and exercise.",
          "Control boards and timers drift, so transfer takes longer than it should.",
          "Loose terminations heat up, which an infrared scan will catch early.",
          "Settings get changed during service and never set back.",
        ],
        paragraphs: [],
      },
      {
        heading: "Testing that actually proves it",
        paragraphs: [
          "Monthly generator exercise should include a real transfer under load, not just running the engine. That is the only way to confirm the whole chain works: sensing, start signal, transfer and retransfer. CSA C282 sets the testing regime for emergency power in Canadian buildings, including annual and longer-interval requirements, and manufacturers add their own maintenance steps.",
          "Annually, the ATS should be inspected and serviced with power isolated: contacts examined, mechanism cleaned and lubricated, terminations torqued, and timers and setpoints verified against the design.",
        ],
      },
      {
        heading: "What to ask your power contractor",
        bullets: [
          "Do monthly runs include a transfer under building load?",
          "When were the ATS contacts last inspected with power isolated?",
          "Are transfer and retransfer times recorded and compared year to year?",
          "Has the ATS been infrared scanned under load?",
          "Are spare parts for this model still available?",
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        q: "What does an automatic transfer switch do?",
        a: "It detects a utility outage, starts the generator, switches emergency loads to generator power when it is stable, and switches back when utility power returns.",
      },
      {
        q: "How often should a transfer switch be tested?",
        a: "Monthly as part of a generator exercise with a transfer under load, plus annual inspection and servicing with power isolated, in line with CSA C282 and the manufacturer.",
      },
    ],
    sources: [
      { label: "CSA C282, Emergency electrical power supply for buildings", url: "https://www.csagroup.org/store/product/C282-15/" },
      { label: "PNNL: O&M best practices for automatic transfer switches", url: "https://www.pnnl.gov/projects/om-best-practices/automatic-transfer-switches" },
    ],
    services: [
      { label: "Transfer switches", href: "https://woolapower.ca/transfer-switches" },
      { label: "Generator repairs and troubleshooting", href: "https://woolapower.ca/repairs-troubleshooting" },
    ],
  },

  {
    slug: "strata-fall-winter-maintenance-checklist-lower-mainland",
    title: "The fall and winter maintenance checklist for Lower Mainland stratas",
    excerpt:
      "Atmospheric rivers, wind storms and the odd hard freeze. Most winter damage in Metro Vancouver buildings starts with a blocked drain or an unchecked heater. Here is the checklist we run before the rain sets in.",
    date: "2026-10-27",
    readingTime: "6 min read",
    category: "Building Ops",
    division: "build",
    author: { name: "Woola Build", role: "Field Notes" },
    cover: "/blog/fall-maintenance.jpg",
    coverAlt: "Gutters filled with leaves and debris along a roof edge",
    coverCredit: { name: "Aleksi Partanen", url: "https://unsplash.com/@aleksi_p" },
    body: [
      {
        paragraphs: [
          "Winter in the Lower Mainland is mostly rain, and lots of it, with the occasional cold snap that catches buildings unprepared. The damage pattern is predictable: water finds a blocked drain or a failed seal, or a pipe in an exterior wall freezes. A few hours of preventive work in October avoids most of it.",
        ],
      },
      {
        heading: "Water off the building",
        bullets: [
          "Clean gutters, downspouts and roof drains after the leaves fall, and again mid-winter on treed sites.",
          "Check balcony and deck drains, and confirm scuppers are clear.",
          "Clear area drains, parkade trench drains and catch basins.",
          "Test sump pumps by filling the pit, and test the high-water alarm.",
          "Walk the roof for damaged membrane, loose flashing and blocked overflow scuppers.",
        ],
        paragraphs: [],
      },
      {
        heading: "Envelope",
        bullets: [
          "Look for failed sealant at windows, doors and penetrations.",
          "Check weatherstripping on common area doors.",
          "Trim vegetation that touches cladding or roofs.",
          "Note any interior leak reports from last winter and confirm they were actually fixed.",
        ],
        paragraphs: [],
      },
      {
        heading: "Freeze protection",
        bullets: [
          "Shut off and drain exterior hose bibs, or confirm they are frost-free type.",
          "Test heat tracing on exposed piping and parkade sprinkler lines.",
          "Check unit heaters in parkades, stairwells and mechanical rooms.",
          "Know where dry and wet sprinkler zones are, and drain low points on dry systems.",
        ],
        paragraphs: [],
      },
      {
        heading: "Mechanical and life safety",
        bullets: [
          "Boiler and heating plant serviced before the first cold week.",
          "Make-up air units serviced, filters changed and heating sections tested.",
          "Generator fuel, batteries and block heater checked before storm season.",
          "Emergency lighting and exit signs tested, since winter outages are when they matter.",
        ],
        paragraphs: [],
      },
      {
        heading: "Make it a habit",
        paragraphs: [
          "Put this list on the strata's annual calendar with a date and an owner. Pair the fall walk-around with the roof and gutter contractor's visit, and document what was found. Over a few years the records show which drains block, which seals fail and where the building needs real repair rather than another clean.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should strata gutters and roof drains be cleaned in Metro Vancouver?",
        a: "At least once in late fall after the leaves drop, and again mid-winter on sites with lots of trees.",
      },
      {
        q: "What causes most winter water damage in strata buildings?",
        a: "Blocked roof, balcony and area drains, failed sealant, and frozen pipes in exterior walls or unheated spaces during cold snaps.",
      },
    ],
    services: [
      { label: "Building maintenance", href: "https://woolabuild.ca/maintenance" },
      { label: "Building envelope repairs", href: "https://woolabuild.ca/envelope" },
      { label: "Property services", href: "https://woolabuild.ca/property-services" },
    ],
  },

  {
    slug: "infrared-thermography-electrical-panels",
    title: "Infrared scanning of electrical systems: what it finds, how often, and why insurers ask for it",
    excerpt:
      "Loose connections and overloaded breakers get hot long before they fail. An infrared scan finds them in an afternoon, without shutting anything down. Here is how the inspection works and how to read the report.",
    date: "2026-10-21",
    readingTime: "6 min read",
    category: "Building Ops",
    division: "electrical",
    author: { name: "Woola Electrical", role: "Field Notes" },
    cover: "/blog/thermography.jpg",
    coverAlt: "Electrician testing a building electrical panel",
    coverCredit: { name: "Toolmash Expo", url: "https://unsplash.com/@toolmash" },
    body: [
      {
        paragraphs: [
          "Electrical failures rarely come out of nowhere. A connection loosens over years of heating and cooling, resistance rises, the joint heats up, and eventually it burns. An infrared camera sees that heat while the equipment is running normally, so problems can be fixed on a planned shutdown instead of during an outage or a fire.",
        ],
      },
      {
        heading: "How the inspection works",
        paragraphs: [
          "A qualified technician opens panels and switchgear while they are energised and under normal load, following arc flash safety procedures, and scans each component. The scan compares temperatures between similar components carrying similar load. A breaker or lug running much hotter than its neighbours is the signal. The technician photographs each finding in both infrared and visible light and records the load at the time.",
        ],
      },
      {
        heading: "What it typically finds",
        bullets: [
          "Loose or corroded terminations on breakers, lugs and bus connections.",
          "Overloaded circuits and unbalanced phases.",
          "Failing breakers and fuses.",
          "Hot spots in transformers, motor starters and transfer switches.",
        ],
        paragraphs: [],
      },
      {
        heading: "How often",
        paragraphs: [
          "Annual scanning is the common practice for commercial and multi-unit buildings. In the United States, the 2023 edition of NFPA 70B turned electrical maintenance from a recommended practice into a standard and set intervals for thermography, generally at least annually and more often for critical equipment. Canada does not enforce NFPA 70B nationally, but insurers and facility managers increasingly use it as the benchmark, and CSA Z463 provides Canadian guidance on electrical maintenance.",
        ],
      },
      {
        heading: "Reading the report",
        paragraphs: [
          "A useful report ranks findings by severity, usually by temperature rise above a comparable component, and gives a recommended action and timeframe for each. Fix the serious ones first and rescan after repairs to confirm. Keep each year's report; trends matter as much as single readings.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does an infrared scan require a power shutdown?",
        a: "No. Equipment must be energised and under normal load for the scan to be meaningful. Repairs found by the scan are then scheduled for a planned shutdown.",
      },
      {
        q: "How often should a building's electrical system be infrared scanned?",
        a: "Annually is common practice for commercial and multi-unit buildings, more often for critical equipment.",
      },
    ],
    sources: [
      { label: "NFPA 70B, Standard for Electrical Equipment Maintenance", url: "https://www.nfpa.org/codes-and-standards/nfpa-70b-standard-development/70b" },
      { label: "Aviva Canada: Infrared thermography and NFPA 70B", url: "https://www.aviva.ca/en/business/news-and-insights/infrared-thermography-can-help-meet-nfpa-70b-standards/" },
    ],
    services: [
      { label: "Infrared scanning", href: "https://woolaelectrical.ca/infrared-scanning" },
      { label: "Electrical vault cleaning", href: "https://woolaelectrical.ca/vault-cleaning" },
    ],
  },

  {
    slug: "ups-battery-replacement-life",
    title: "UPS batteries: how long they really last and when to replace them",
    excerpt:
      "The uninterruptible power supply protecting your server room, elevator controls or security system is only as good as its batteries, and batteries age quietly. Here is what shortens their life and how to plan replacement before an outage finds the weak cell.",
    date: "2026-10-15",
    readingTime: "6 min read",
    category: "Building Ops",
    division: "power",
    author: { name: "Woola Power", role: "Field Notes" },
    cover: "/blog/ups-batteries.jpg",
    coverAlt: "Rows of backup batteries with red and blue terminals",
    coverCredit: { name: "Vanya Smythe", url: "https://unsplash.com/@nosmoke" },
    body: [
      {
        paragraphs: [
          "A UPS bridges the gap between a utility outage and the generator starting, or keeps sensitive equipment running long enough to shut down cleanly. Most building UPS units use valve-regulated lead-acid batteries. They are reliable, but they wear out on a schedule whether or not the UPS ever runs, and they rarely announce it.",
        ],
      },
      {
        heading: "What shortens battery life",
        bullets: [
          "Heat: the single biggest factor. Batteries rated at room temperature lose life quickly in a hot electrical closet.",
          "Age: typical VRLA batteries are designed for a few years to around ten, depending on the grade, and real life is usually shorter than the design figure.",
          "Deep or frequent discharges from repeated outages.",
          "Charging problems: a faulty charger that overcharges or undercharges.",
          "Mixing old and new batteries in the same string.",
        ],
        paragraphs: [],
      },
      {
        heading: "How to know where you stand",
        paragraphs: [
          "Look at the install date on the batteries, not the UPS. Review the UPS self-test history and alarm log. On larger systems, measure individual battery voltage and internal resistance, and track the readings over time; rising resistance is the early warning that a battery is failing. A controlled runtime test confirms the system can carry the load for the time you need.",
        ],
      },
      {
        heading: "Plan replacement, do not wait for failure",
        paragraphs: [
          "Replace the whole string at once, before the end of expected life in the conditions it actually sees. Budget for it in the capital plan, and fix the cause if heat is shortening life: add ventilation or cooling to the room. When replacing, recycle the old batteries through a proper lead-acid recycling program.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do UPS batteries last?",
        a: "Commonly three to five years for standard valve-regulated lead-acid batteries in normal conditions, longer for higher grades, and less in hot rooms.",
      },
      {
        q: "Should I replace all UPS batteries at once?",
        a: "Yes. Mixing old and new batteries in a string shortens the life of the new ones and makes runtime unpredictable.",
      },
    ],
    services: [
      { label: "UPS and battery systems", href: "https://woolapower.ca/ups-battery" },
      { label: "Data centre power", href: "https://woolapower.ca/data-centres" },
    ],
  },

  {
    slug: "corridor-pressurization-make-up-air-high-rise",
    title: "Why cooking smells travel in your high-rise: corridor pressurization and make-up air units",
    excerpt:
      "Most Metro Vancouver towers built before the 2010s ventilate suites by blowing air into the corridors and hoping it reaches the units. Research on a Vancouver building found most of it never did. Here is how these systems work, why odours spread, and what actually helps.",
    date: "2026-10-09",
    readingTime: "7 min read",
    category: "Building Ops",
    division: "mechanical",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/corridor-air.jpg",
    coverAlt: "Long apartment building corridor lined with suite doors",
    coverCredit: { name: "Scarbor Siu", url: "https://unsplash.com/@kameeru322813" },
    body: [
      {
        paragraphs: [
          "In a typical older high-rise, a make-up air unit on the roof heats outdoor air and pushes it into each corridor. The corridor is meant to be at slightly higher pressure than the suites, so air flows under the suite doors, provides fresh air and keeps cooking smells and smoke from spreading out of units. Bathroom and kitchen fans exhaust the air from each suite.",
          "That is the theory. A field study by building science researchers on a 13-storey Vancouver building found that only around 40 percent of the make-up air actually reached the corridors. The rest leaked into elevator shafts, stairwells and other spaces before it got there.",
        ],
      },
      {
        heading: "Why the system underperforms",
        bullets: [
          "Leaky shafts and ducts lose air on the way to the corridors.",
          "Weatherstripping added to suite doors for noise and smoke control blocks the intended air path.",
          "Stack effect in tall buildings pulls air up in winter, so lower floors get starved and upper floors get pushed.",
          "Make-up air units are undersized, out of balance, or switched off to save energy.",
          "Suite exhaust fans are weak or never run, so there is no pull to draw corridor air in.",
        ],
        paragraphs: [],
      },
      {
        heading: "The symptoms",
        paragraphs: [
          "The complaints researchers documented match what property managers hear: high humidity and condensation in suites, cooking odours and smoke moving between units, vehicle exhaust from the parkade, and noise transfer. When the make-up air unit is off or failing, all of these get worse.",
        ],
      },
      {
        heading: "What actually helps",
        bullets: [
          "Service and rebalance the make-up air unit so it delivers its design airflow, and keep it running.",
          "Seal the obvious leaks in shafts and ductwork.",
          "Upgrade filtration rather than shutting the unit off during wildfire smoke events.",
          "Check suite bathroom and range hood exhaust actually move air.",
          "For a long-term fix, consider in-suite heat recovery ventilators, which deliver fresh air directly to each unit.",
        ],
        paragraphs: [],
      },
      {
        heading: "Do not turn it off",
        paragraphs: [
          "It is tempting to switch off a make-up air unit to cut gas bills or keep smoke out. In buildings without in-suite ventilation, it may be the only source of fresh air for residents. Better filtration and proper controls deal with smoke; a heat pump or heat recovery retrofit deals with the energy cost.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why can I smell my neighbour's cooking in my condo?",
        a: "Usually because the corridor pressurization system is not keeping corridors at higher pressure than suites. Underperforming make-up air units, leaky shafts and weak suite exhaust are common causes.",
      },
      {
        q: "Should a strata shut off the make-up air unit during wildfire smoke?",
        a: "Generally no, because it may be the main fresh air source. Upgrading the filters is the better option. Check with your HVAC contractor.",
      },
    ],
    sources: [
      { label: "RDH Building Science: Airflow in high-rise multi-unit residential buildings (ASHRAE IAQ 2013)", url: "https://www.rdh.com/wp-content/uploads/2017/07/ASHRAEIAQ-2013-Airflow-in-High-rise-Multi-unit-Residential-Buildings.pdf" },
      { label: "Building Science Corporation: Ventilation in multifamily buildings", url: "https://buildingscience.com/sites/default/files/01.03_2015-08-03_ventilation_multifamily_ricketts.pdf" },
    ],
    services: [
      { label: "Ventilation and indoor air quality", href: "https://woolamech.ca/ventilation-iaq" },
      { label: "HVAC service", href: "https://woolamech.ca/hvac" },
    ],
  },

  {
    slug: "rooftop-unit-replacement-planning",
    title: "Replacing a rooftop HVAC unit: crane lifts, permits, curbs and the refrigerant change",
    excerpt:
      "A rooftop unit replacement looks simple on a quote and gets complicated on the roof. Here is how to plan one properly, from the crane day and structural checks to curb adapters and the shift to new refrigerants.",
    date: "2026-09-30",
    readingTime: "7 min read",
    category: "Building Ops",
    division: "mechanical",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/rtu-replacement.jpg",
    coverAlt: "Rooftops of commercial buildings with mechanical equipment",
    coverCredit: { name: "Toni Reed", url: "https://unsplash.com/@trfotos" },
    body: [
      {
        paragraphs: [
          "Packaged rooftop units heat, cool and ventilate a large share of Metro Vancouver's retail and office space. They last roughly 15 to 20 years, and many installed in the 2000s are coming due together. Replacing one is a well-trodden job, but the difference between a smooth crane day and a week of problems is almost all in the planning.",
        ],
      },
      {
        heading: "Right-size before you replace",
        paragraphs: [
          "The tenant mix, lighting and envelope have probably changed since the original unit went in. A load check stops you buying the same oversized unit again. It is also the moment to look at a heat pump rooftop unit instead of gas heat, particularly in buildings planning to cut emissions.",
        ],
      },
      {
        heading: "Curbs, structure and the roof",
        bullets: [
          "New units rarely match old curbs. A curb adapter avoids cutting a new roof opening, but adds height and must be properly flashed.",
          "If the new unit is heavier, have the structure checked.",
          "Coordinate with the roofer so membrane and flashing warranties are kept.",
          "Confirm gas, electrical and condensate connections suit the new unit.",
        ],
        paragraphs: [],
      },
      {
        heading: "The crane day",
        paragraphs: [
          "Most rooftop swaps need a mobile crane. That means a lift plan, a crane company, and usually a street use or road closure permit from the municipality, booked well ahead. Pick a quiet time, often a weekend morning, notify tenants, protect the roof path and have the electrician and gas fitter on site so the new unit runs the same day.",
        ],
      },
      {
        heading: "Permits and trades",
        paragraphs: [
          "Expect a mechanical or gas permit and an electrical permit, depending on the municipality and scope. Gas connections need a Technical Safety BC licensed contractor. The refrigeration side should be handled by certified refrigeration and air conditioning mechanics, which is a compulsory trade in BC.",
        ],
      },
      {
        heading: "The refrigerant change",
        paragraphs: [
          "Manufacturers are moving new rooftop units off R-410A to lower global warming potential refrigerants such as R-454B and R-32. These are classed as mildly flammable and come with their own installation, ventilation and handling requirements. Check what the replacement uses, make sure your contractor's technicians are trained on it, and stock the right parts for future service.",
        ],
      },
      {
        heading: "Close-out",
        paragraphs: [
          "Get a start-up report with airflow, refrigerant charge and controls verified, the warranty registered, and the old unit's refrigerant recovered properly. Add the new unit to the building's equipment list with its serial number and install date.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do rooftop HVAC units last?",
        a: "Roughly 15 to 20 years, depending on maintenance, run hours and coastal exposure.",
      },
      {
        q: "Do I need a permit to replace a rooftop unit in Metro Vancouver?",
        a: "Usually yes: mechanical or gas and electrical permits depending on scope, plus a street use permit for the crane in many municipalities.",
      },
      {
        q: "What refrigerant do new rooftop units use?",
        a: "Many new units use lower global warming potential refrigerants such as R-454B or R-32 instead of R-410A. They need technicians trained in their handling.",
      },
    ],
    services: [
      { label: "HVAC replacement and service", href: "https://woolamech.ca/hvac" },
      { label: "Cooling systems", href: "https://woolamech.ca/cooling-systems" },
      { label: "Mechanical retrofits", href: "https://woolamech.ca/retrofits" },
    ],
  },
];
