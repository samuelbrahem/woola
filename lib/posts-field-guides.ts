import type { Post } from "./posts";

/**
 * Long-form field guides (Nov 2026). Each answers one question property
 * managers, strata councils and owners in Metro Vancouver actually search for,
 * with BC-specific rules checked against primary sources at time of writing.
 * Cover photos are Unsplash (free licence); credits kept in coverCredit.
 */
export const fieldGuides: Post[] = [
  {
    slug: "backflow-testing-coquitlam-metro-vancouver",
    title: "Backflow testing in Coquitlam and Metro Vancouver: what owners have to do every year",
    excerpt:
      "Every testable backflow assembly in Coquitlam, Vancouver, Burnaby, Surrey and the rest of Metro Vancouver needs an annual test by a certified tester, with the report filed with the city. Here is where the assemblies hide in your building, what a test involves, and what happens when one fails.",
    date: "2026-11-20",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Rebates & Compliance",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/backflow-testing.jpg",
    coverAlt: "Backflow prevention assembly and valves on a mechanical room wall",
    coverCredit: { name: "Compagnons", url: "https://unsplash.com/@sigmund" },
    body: [
      {
        paragraphs: [
          "A backflow preventer is the valve assembly that stops water from your building flowing backwards into the city main. If pressure in the municipal system drops, say during a water main break or when the fire department opens hydrants nearby, water inside your building can be siphoned back toward the street. That water may have passed through a boiler loaded with treatment chemicals, a sprinkler system that has sat stagnant for years, or a commercial dishwasher. The backflow assembly is the line of defence, and every city in Metro Vancouver treats it that way.",
          "The rule that catches owners out is simple: testable assemblies have to be tested every year, by a certified tester, and the result has to be reported to the municipality. Miss it and you will get a letter. Ignore the letter and some cities will escalate to water shut-off notices.",
        ],
      },
      {
        heading: "What the cities actually require",
        paragraphs: [
          "Each municipality runs its own cross connection control program, but the pattern across the region is the same. Vancouver requires every backflow prevention assembly to be tested annually by a certified tester. Surrey requires a test at installation, every year after, and after any repair, relocation or replacement, with a report submitted after each test. Richmond and Port Moody follow the same annual cycle.",
          "In Coquitlam, test results go to the city on its Backflow Prevention Assembly Test Report form. The form asks for results to be filed within 10 days of the test, and installing or replacing an assembly needs a plumbing permit. The city's Building Permits Division handles cross connection control questions, at 604-927-3441 or PlumbingPermits@coquitlam.ca. In practice your tester fills in and files the report; your job as the owner is to make sure the test happens on time and the paperwork lands.",
        ],
      },
      {
        heading: "Where backflow assemblies hide in a typical building",
        paragraphs: [
          "Most property managers know about the big one at the water entry. Fewer know how many smaller assemblies sit downstream. On a walk-through of a mid-rise strata or a commercial building we typically find assemblies on:",
        ],
        bullets: [
          "The fire sprinkler connection, usually a double check valve assembly at the riser room.",
          "Premise isolation at the domestic water entry, protecting the city main from the whole building.",
          "Boiler and hydronic heating make-up water, where treated loop water must never reach the potable system.",
          "Irrigation systems, which can draw in fertiliser and soil bacteria.",
          "Commercial kitchen equipment, coffee and soda machines, and dishwashers in retail units.",
          "Specialty tenants: dental and medical offices, car washes, labs and salons.",
        ],
      },
      {
        heading: "What a test involves",
        paragraphs: [
          "A certified tester connects a differential pressure gauge to the assembly's test cocks and checks that each check valve holds tight and, on a reduced pressure assembly, that the relief valve opens at the right point. A normal test takes 20 to 40 minutes per assembly. Water is shut off to the protected part of the system for part of that time, so on a sprinkler assembly the fire alarm company and monitoring station need to know before the valve is closed.",
          "The tester records the readings, tags the assembly with the date, and files the report. A good contractor also photographs each assembly and adds it to the building's equipment list so next year's test is a booking, not a search.",
        ],
      },
      {
        heading: "When an assembly fails",
        paragraphs: [
          "Failures are common and usually cheap to fix. Debris fouls a check valve seat, a rubber disc hardens, or a relief valve starts weeping. Most repairs are a rebuild kit and an hour of labour, followed by a retest and a new report. The expensive outcome is a seized or obsolete assembly that has to be replaced, which needs a permit and, on a fire line, coordination with the sprinkler contractor.",
          "If the relief valve on a reduced pressure assembly is discharging water constantly, do not cap it. That discharge is the assembly doing its job and telling you something upstream or downstream needs attention.",
        ],
      },
      {
        heading: "How to stop this being a yearly scramble",
        paragraphs: [
          "Put every testable assembly on one list with location, size, make, serial number and test month. Line all the tests up in the same visit where possible. Tie the backflow test to the building's annual fire inspection calendar so the sprinkler assembly gets done when the fire contractor is already on site. Then file the reports somewhere the next property manager can find them.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often does a backflow preventer need to be tested in Coquitlam?",
        a: "Once a year, plus after installation and any repair. The test must be done by a certified backflow assembly tester and the report filed with the City of Coquitlam on its test report form.",
      },
      {
        q: "Who is responsible for backflow testing in a strata building?",
        a: "The owner of the assembly, which in most stratas is the strata corporation for building-wide assemblies. Individual commercial tenants or owners can be responsible for assemblies serving only their unit, depending on the lease or bylaws.",
      },
      {
        q: "What happens if we skip the annual test?",
        a: "Municipalities send reminder and non-compliance notices, and most bylaws allow the city to shut off water to a property that will not comply. It is far cheaper to book the test.",
      },
      {
        q: "Does a failed backflow test mean the assembly needs replacing?",
        a: "Usually not. Most failures are fixed with a rebuild kit and a retest the same day. Replacement is only needed when the assembly is seized, damaged or no longer serviceable, and that needs a plumbing permit.",
      },
    ],
    sources: [
      { label: "Vancouver: Protecting water quality (cross connection control)", url: "https://vancouver.ca/home-property-development/protecting-water-quality.aspx" },
      { label: "City of Coquitlam: Backflow Prevention Assembly Test Report", url: "https://www.coquitlam.ca/DocumentCenter/View/2094/Backflow-Prevention-Assembly-Test-Report-PDF" },
      { label: "City of Surrey: Drinking water protection", url: "https://www.surrey.ca/city-services/4897.aspx" },
    ],
    services: [
      { label: "Plumbing for strata and commercial buildings", href: "https://woolamech.ca/plumbing" },
      { label: "Preventative maintenance programs", href: "https://woolamech.ca/preventative-maintenance" },
    ],
  },

  {
    slug: "poly-b-kitec-plumbing-metro-vancouver-strata",
    title: "Poly-B and Kitec in Metro Vancouver stratas: how to spot it and how a repipe actually runs",
    excerpt:
      "A large share of BC buildings from the late 1970s to the mid-1990s were plumbed with polybutylene, and Kitec followed in some 1990s and 2000s condos. Insurers have noticed. Here is how to tell what you have, what it means for insurance, and how a repipe works in an occupied building.",
    date: "2026-10-12",
    readingTime: "8 min read",
    division: "build",
    category: "Building Ops",
    author: { name: "Woola Build", role: "Field Notes" },
    cover: "/blog/poly-b.jpg",
    coverAlt: "Plumber working on water piping inside an opened wall",
    coverCredit: { name: "Timur Shakerzianov", url: "https://unsplash.com/@shaker_jpg" },
    body: [
      {
        paragraphs: [
          "If your strata was built between roughly 1978 and the mid-1990s, there is a real chance some or all of the domestic water piping is polybutylene, known as Poly-B. British Columbia built heavily through that period, and BC insurance brokers estimate that hundreds of thousands of homes across the province went in with it. Poly-B does not fail all at once. It fails one fitting, one crimp ring, one stretch of chlorine-degraded pipe at a time, usually behind a wall, usually when nobody is home.",
          "Kitec is the other name that comes up. It was a PEX-aluminum-PEX pipe sold in the mid-1990s to the 2000s, often installed in condos and townhomes. Its brass fittings can corrode from the inside, a process called dezincification, which narrows the bore and eventually lets go. The product was the subject of a recall and a class-action settlement.",
        ],
      },
      {
        heading: "How to tell what you have",
        paragraphs: [
          "You can usually identify both in five minutes with a flashlight. Look where pipes are exposed: under sinks, at the hot water tank, in the mechanical or meter room, and in the ceiling of the parkade if supply lines run there.",
        ],
        bullets: [
          "Poly-B is flexible grey (sometimes white or black) plastic pipe, typically stamped PB2110, joined with metal or plastic crimp fittings.",
          "Kitec is usually bright orange for hot and blue for cold, stamped Kitec, PlumbBetter, IPEX AQUA or similar, with brass fittings that may show white or green crust.",
          "Copper is copper coloured. Modern PEX is usually red, blue or white and printed with PEX and a certification mark.",
          "If the visible pipe at the tank is copper but the walls are older, the original pipe may still run inside. A plumber can confirm by opening an access panel.",
        ],
      },
      {
        heading: "Why it matters now: insurance",
        paragraphs: [
          "Most BC insurers treat Poly-B as a higher water-damage risk. Depending on the insurer that can mean a surcharge, a required inspection, a deadline to replace it, or a decision not to quote. For a strata the problem compounds: water-damage deductibles on BC strata master policies have climbed sharply, and one failed fitting on an upper floor can flood several suites below. Owners selling units are also being asked about it on disclosure statements and by buyers' insurers.",
        ],
      },
      {
        heading: "Spot repairs or a full repipe?",
        paragraphs: [
          "Replacing pipe after each leak feels cheaper and is, for a year or two. The trouble is that the same pipe, the same fittings and the same water chemistry are everywhere else in the building. Once a building has had several Poly-B or Kitec failures, councils usually find that one planned repipe, funded and scheduled, costs less than years of emergency calls, deductibles and drywall.",
          "A depreciation report should flag the piping. If yours does not mention it, ask the preparer to look again, because the report is what the council will point to when it asks owners to approve the funding.",
        ],
      },
      {
        heading: "How a repipe runs in an occupied building",
        paragraphs: [
          "Owners imagine weeks without water. A well-run repipe is far less disruptive than that. The sequence we use:",
        ],
        bullets: [
          "Survey: open a sample of walls and ceilings, map the risers and suite branches, and confirm what can be replaced through existing access.",
          "Design and pricing: decide between PEX and copper, size the new risers, and plan new isolation valves on every suite so future repairs affect one home, not a stack.",
          "Approvals: council presents the project and funding to owners. A special levy needs a three-quarter vote under the Strata Property Act.",
          "Phasing: work goes stack by stack or floor by floor. Water is shut off for a planned window, and in most suites it is back on the same day.",
          "Finishing: small access openings are patched and painted, not whole walls. Every suite gets labelled shut-offs.",
          "Close-out: permits, inspections, as-built drawings and a record of every valve location go to the strata.",
        ],
      },
      {
        heading: "What to do this month",
        paragraphs: [
          "Check two or three suites and the mechanical room to confirm what you have. Pull the last five years of plumbing invoices and insurance claims to see the trend. Then get a survey and a phased budget in front of council before the next insurance renewal, not after it.",
        ],
      },
    ],
    faqs: [
      {
        q: "What years was Poly-B installed in BC?",
        a: "Mostly from about 1978 to the mid-1990s. Buildings from that era should be checked, even if some suites have since been renovated.",
      },
      {
        q: "Can we insure a strata building that still has Poly-B?",
        a: "Usually yes, but expect questions, possible surcharges or inspection requirements, and in some cases a deadline to replace it. Talk to your broker before renewal.",
      },
      {
        q: "How long does a repipe take per suite?",
        a: "Most suites have water back the same day each phase. The whole building takes weeks to months depending on size and access, run stack by stack.",
      },
      {
        q: "PEX or copper for the new piping?",
        a: "Both are proven. PEX is faster to install through existing walls and usually cheaper. Copper suits exposed mechanical rooms and some high-rise risers. Many repipes use copper risers with PEX suite branches.",
      },
    ],
    sources: [
      { label: "BC Government: Insurance for strata owners", url: "https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing/operating-a-strata/finances-and-insurance/strata-owner-and-tenant-insurance" },
    ],
    services: [
      { label: "Waterline repiping", href: "https://woolabuild.ca/waterline-repiping" },
      { label: "Plumbing service and repairs", href: "https://woolamech.ca/plumbing" },
    ],
  },

  {
    slug: "bc-depreciation-report-rules-mechanical-systems",
    title: "BC's new depreciation report rules: what the mechanical section should tell your council",
    excerpt:
      "Since July 1, 2024, BC stratas can no longer vote to skip a depreciation report, and Metro Vancouver stratas need one by July 1, 2026. The mechanical systems are usually the biggest line items. Here is what a useful mechanical section looks like and the questions to ask.",
    date: "2026-10-24",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Rebates & Compliance",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/depreciation.jpg",
    coverAlt: "Building inspector holding a clipboard during a walk-through",
    coverCredit: { name: "TruckRun", url: "https://unsplash.com/@truckrun_ebike_systems" },
    body: [
      {
        paragraphs: [
          "For years, many BC stratas waived their depreciation report with an annual three-quarter vote. That option is gone. Under amendments to the Strata Property Regulation that took effect July 1, 2024, a strata corporation with five or more lots must get a depreciation report and update it every five years. Existing stratas in Metro Vancouver, the Fraser Valley and the Capital Regional District must have one by July 1, 2026. From July 1, 2025, the report must be prepared by a qualified professional from one of six designated groups, including engineers, architects, applied science technologists, accredited appraisers, certified reserve planners and quantity surveyors.",
          "The report forecasts what the building will need to repair and replace over 30 years and how the contingency reserve fund should be built to pay for it. In most buildings, the mechanical systems are where the biggest and least predictable numbers sit.",
        ],
      },
      {
        heading: "Why the mechanical section is so often weak",
        paragraphs: [
          "Report preparers are generalists by necessity. They walk the building in a day, photograph what they can reach, and estimate remaining life from age and typical service life tables. That works for roofs and paving. It works less well for a boiler plant, domestic hot water system or rooftop units, where condition depends on how they have been maintained and the cost of replacement depends on what the replacement has to be.",
          "The result is a line that reads something like \"boilers, replace in year 6, $180,000\" with no clue whether year 6 is optimistic, whether a like-for-like gas replacement is even what the building will want, or what the risk is if it fails early.",
        ],
      },
      {
        heading: "What a useful mechanical section includes",
        bullets: [
          "An inventory of every major asset: make, model, serial number, capacity, install year and location.",
          "Condition based on service records and a technician's inspection, not age alone.",
          "Remaining life with a reason, for example heat exchanger scaling found at last service.",
          "Replacement cost that reflects the likely replacement, including electrical upgrades, permits, crane lifts and access.",
          "The consequence of failure: no heat in January is not the same as a failed exhaust fan.",
          "Options where they exist, such as a heat pump or hybrid system instead of a like-for-like boiler.",
        ],
        paragraphs: [],
      },
      {
        heading: "Typical service lives to sanity-check the numbers",
        paragraphs: [
          "Published service life data, such as ASHRAE's equipment life tables, gives a starting point. Real buildings vary widely either side of these figures depending on water quality, run hours and maintenance:",
        ],
        bullets: [
          "Domestic hot water storage tanks: around 10 to 15 years.",
          "Rooftop packaged HVAC units: around 15 to 20 years.",
          "Hot water boilers: around 20 to 30 years, longer for well-kept cast iron.",
          "Circulation pumps and motors: around 15 to 20 years.",
          "Cooling towers: around 15 to 25 years depending on material.",
          "Domestic water piping: decades for copper, much less for Poly-B and Kitec.",
        ],
      },
      {
        heading: "How your mechanical contractor can help the report",
        paragraphs: [
          "Hand the preparer your maintenance records. If your contractor keeps an asset registry with photos, service history and deficiencies, the preparer can use real condition data instead of guessing. Ask your contractor to walk the plant with the preparer for an hour. That single hour often moves a replacement out by years or pulls a hidden risk forward, and either way the number in the reserve fund plan is better.",
          "When the draft comes back, read the mechanical lines with your contractor. If something looks wrong, say so before the report is final, because owners will be asked to vote on levies based on it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a BC strata still waive its depreciation report?",
        a: "No. Since July 1, 2024, stratas with five or more lots can no longer waive it by a three-quarter vote. Small stratas of four or fewer lots remain exempt.",
      },
      {
        q: "When does a Metro Vancouver strata need its depreciation report?",
        a: "Existing strata corporations in Metro Vancouver, the Fraser Valley and the Capital Regional District must have one by July 1, 2026, then update it every five years.",
      },
      {
        q: "Who can prepare a depreciation report in BC?",
        a: "From July 1, 2025, a qualified professional from one of six designated groups: engineers, architects, applied science technologists, accredited appraisers, certified reserve planners or quantity surveyors.",
      },
    ],
    sources: [
      { label: "BC Government: Strata depreciation report requirements", url: "https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing/operating-a-strata/repairs-and-maintenance/depreciation-reports/depreciation-report-requirements" },
      { label: "BC Government news: Depreciation report changes (2024)", url: "https://news.gov.bc.ca/releases/2024HOUS0061-000605" },
    ],
    services: [
      { label: "Preventative maintenance and asset records", href: "https://woolamech.ca/preventative-maintenance" },
      { label: "Retrofits and system replacements", href: "https://woolamech.ca/retrofits" },
    ],
  },

  {
    slug: "adding-cooling-strata-building-bc",
    title: "Adding cooling to a BC strata after the heat dome: approvals, code and equipment",
    excerpt:
      "BC's 2021 heat dome killed 619 people, most of them indoors. New homes must now keep one living space at or below 26°C, but existing stratas are on their own. Here is how councils are approving heat pumps and air conditioning without chaos on the balconies.",
    date: "2026-10-06",
    readingTime: "8 min read",
    division: "mechanical",
    category: "Building Ops",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/strata-cooling.jpg",
    coverAlt: "Technician servicing an outdoor heat pump condenser",
    coverCredit: { name: "Joel Muniz", url: "https://unsplash.com/@jmuniz" },
    body: [
      {
        paragraphs: [
          "The BC Coroners Service found that 619 deaths during the late June 2021 heat dome were heat related. Almost all happened indoors, and most of the people who died were seniors living alone. Since then, cooling has gone from a comfort request to a safety conversation at strata council meetings across Metro Vancouver.",
          "The province responded for new construction. The 2024 BC Building Code, in effect since March 8, 2024, requires new dwelling units to keep at least one designated living space at or below 26°C, using either passive design or mechanical cooling. That rule does not reach back to existing buildings, which is where most people live. For them, the path runs through the strata council.",
        ],
      },
      {
        heading: "The approval question comes first",
        paragraphs: [
          "Nearly every heat pump or air conditioner in a strata touches common property or limited common property: a condenser on a balcony, a refrigerant line through an exterior wall, a new circuit from the electrical room. Standard bylaws require an owner to get written approval before altering common property or a building system. Some older bylaws go further and ban air conditioning units outright.",
          "The Civil Resolution Tribunal has heard many of these disputes. Outcomes turn on the bylaw wording and whether the installation is a significant change in the use or appearance of common property under section 71 of the Strata Property Act, which can require a three-quarter vote. Owners who installed without written approval have regularly lost. Councils that refused reasonable requests without a policy have had a harder time too.",
        ],
      },
      {
        heading: "The fix: a building-wide cooling policy",
        paragraphs: [
          "The buildings that handle this well do not approve units one at a time. They adopt one standard, often by bylaw amendment, that sets the rules once:",
        ],
        bullets: [
          "Approved equipment types, maximum outdoor sound levels and colours.",
          "Where condensers can go, and how they are mounted to avoid vibration and roof or balcony membrane damage.",
          "How refrigerant lines and condensate drains penetrate the envelope, and who seals them.",
          "Electrical requirements, based on a load calculation for the whole building, not just one suite.",
          "Licensed installers only, with permits, and responsibility for future repair and removal on the owner.",
        ],
      },
      {
        heading: "Electrical capacity is the hidden limit",
        paragraphs: [
          "A mid-1990s building was not sized for 80 heat pumps. Before approving a wave of installations, have an electrical contractor do a load calculation on the building service and the suite panels. Sometimes there is ample room. Sometimes the answer is a staged service upgrade, or load management that prevents everyone's equipment starting at once. Discovering this after 30 approvals is the expensive way.",
        ],
      },
      {
        heading: "Equipment options for existing buildings",
        bullets: [
          "Ductless mini-split heat pumps per suite: the most common retrofit. Efficient, quiet, and they heat in winter too. Needs a place for the outdoor unit.",
          "Through-wall packaged heat pumps: no balcony unit, but needs a wall opening and careful envelope detailing.",
          "Central heat pumps or VRF systems: a building-wide project, usually tied to a boiler or ventilation replacement.",
          "Cooling the corridor make-up air: helps the whole building and the most vulnerable residents, without touching suites.",
        ],
        paragraphs: [],
      },
      {
        heading: "Refrigerants are changing too",
        paragraphs: [
          "Manufacturers are moving new equipment from R-410A to lower global warming potential refrigerants such as R-32 and R-454B. These are classed as mildly flammable, with their own installation and charge-size rules. It is one more reason to require licensed refrigeration mechanics in your policy. Refrigeration and air conditioning mechanic is a compulsory trade in BC, so installers must be certified or registered apprentices.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need strata approval to install a heat pump in my condo?",
        a: "Almost always. Most installations alter common property or building systems, which standard bylaws say needs written approval. Some installations also need a three-quarter vote as a significant change. Check your bylaws before buying equipment.",
      },
      {
        q: "Does the BC Building Code require cooling in existing buildings?",
        a: "No. The 26°C requirement in the 2024 BC Building Code applies to new dwelling units. Existing buildings are only affected when they are substantially renovated or altered in ways that trigger the code.",
      },
      {
        q: "Can a strata ban air conditioners?",
        a: "Some bylaws do, and the Civil Resolution Tribunal has enforced them. Many councils are now amending those bylaws to allow cooling under a standard policy instead.",
      },
    ],
    sources: [
      { label: "BC Building Code 2024 bulletin B24-08: Overheating", url: "https://www2.gov.bc.ca/assets/gov/farming-natural-resources-and-industry/construction-industry/building-codes-and-standards/bulletins/2024-code/b24-08_overheating.pdf" },
      { label: "BC Government: Coroners Service heat dome review", url: "https://news.gov.bc.ca/releases/2022PSSG0035-000911" },
      { label: "UBC: Strata council heat pump checklist", url: "https://planning.ubc.ca/sites/default/files/2024-04/Strata%20Council%20Heat%20Pump%20Checklist.pdf" },
    ],
    services: [
      { label: "Cooling systems and heat pumps", href: "https://woolamech.ca/cooling-systems" },
      { label: "Electrical panel and service upgrades", href: "https://woolaelectrical.ca/panel-upgrades" },
    ],
  },

  {
    slug: "vancouver-building-carbon-limits-boiler-replacement",
    title: "Vancouver's carbon limits for large buildings: where they stand and what to do about the boiler",
    excerpt:
      "Vancouver set greenhouse gas limits for large office and retail buildings starting with 2026, then paused enforcement in May 2026. Either way, the boiler you replace next will run for 25 years. Here is how to make that decision without betting on one outcome.",
    date: "2026-10-03",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Rebates & Compliance",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/vancouver-carbon.jpg",
    coverAlt: "Downtown Vancouver towers with the North Shore mountains behind",
    coverCredit: { name: "Alejandro Luengo", url: "https://unsplash.com/@aluengo91" },
    body: [
      {
        paragraphs: [
          "Vancouver's Annual Greenhouse Gas and Energy Limits By-law did two things. It required large buildings, 50,000 square feet and up, to report energy and emissions each year. And it set greenhouse gas intensity limits for the largest office and retail buildings, 100,000 square feet and up, starting with the 2026 reporting year. The limit counts emissions from natural gas and district energy used for heating and hot water. Electricity is excluded.",
          "On May 21, 2026, council directed staff to pause enforcement of the by-law. The city now says there are no penalties for not submitting a report. Whether enforcement returns, in what form and when, is open.",
        ],
      },
      {
        heading: "Why the pause does not change the boiler decision much",
        paragraphs: [
          "A commercial hot water boiler lasts 20 to 30 years. If your boiler is due in the next few years, the replacement will run well past any version of Vancouver's limits, the BC Building Code's energy steps, and whatever carbon pricing looks like in the 2040s. Buying a like-for-like gas boiler today is a 25-year bet that none of that tightens. Ripping one out early to comply later is the most expensive outcome of all.",
          "The good news is that most buildings do not need to choose between all gas and all electric on day one.",
        ],
      },
      {
        heading: "The options, from least to most change",
        bullets: [
          "High-efficiency condensing boilers: lower gas use when return water temperatures allow it. Often requires piping and control changes to actually condense.",
          "Hybrid plant: an air-to-water heat pump carries the base load most of the year, with a gas boiler for peak cold days and backup. Big emissions cut, modest electrical upgrade.",
          "Domestic hot water heat pumps: hot water is a steady year-round load and one of the easiest places to electrify, often with CO2 heat pump systems built for high temperatures.",
          "Full electrification: heat pumps for all space heating and hot water. Biggest change, usually tied to an electrical service upgrade and sometimes to distribution changes in the building.",
        ],
        paragraphs: [],
      },
      {
        heading: "What to do before the boiler fails",
        paragraphs: [
          "Get ahead of the emergency. A boiler that fails in January gets replaced with whatever is on the truck. A boiler replacement planned 18 months out can be designed, priced against a hybrid option, and timed with incentives and the building's electrical capacity.",
        ],
        bullets: [
          "Pull two years of gas bills and the boiler's service history.",
          "Have the plant assessed for remaining life, water treatment condition and real heating load.",
          "Ask for a load calculation on the electrical service to see what a heat pump would need.",
          "Price at least two options: like-for-like and hybrid or electric.",
          "Put the result into the building's capital plan or depreciation report.",
        ],
      },
      {
        heading: "Outside the City of Vancouver",
        paragraphs: [
          "Coquitlam, Burnaby, Surrey and the rest of Metro Vancouver do not have Vancouver's building emissions limits. The same logic still applies. Equipment you install now will outlast today's rules, and buyers and tenants increasingly ask about operating costs and emissions.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which buildings do Vancouver's carbon limits apply to?",
        a: "Reporting covered buildings of 50,000 square feet or more. The greenhouse gas intensity limits applied to office and retail buildings of 100,000 square feet or more, starting with the 2026 reporting year. Enforcement was paused by council in May 2026.",
      },
      {
        q: "Do Vancouver's limits count electricity use?",
        a: "No. The limits count emissions from natural gas and district energy used for heating and hot water. Electricity is excluded, which is why heat pumps help.",
      },
      {
        q: "Should we replace our gas boiler with a heat pump?",
        a: "Often the best first step is a hybrid: a heat pump for most of the year with a gas boiler for peak days. It cuts emissions a lot without requiring the largest electrical upgrade.",
      },
    ],
    sources: [
      { label: "City of Vancouver: Energize Vancouver, large buildings", url: "https://vancouver.ca/green-vancouver/green-large-commercial-and-multi-family-buildings.aspx" },
      { label: "City of Vancouver: By-law reporting and paused enforcement", url: "https://vancouver.ca/green-vancouver/report-building-and-energy-data.aspx" },
    ],
    services: [
      { label: "Heating systems and boilers", href: "https://woolamech.ca/heating-systems" },
      { label: "Mechanical retrofits", href: "https://woolamech.ca/retrofits" },
    ],
  },

  {
    slug: "choosing-mechanical-contractor-coquitlam-vancouver",
    title: "How to choose a mechanical contractor in Coquitlam and Metro Vancouver: a property manager's checklist",
    excerpt:
      "Licences, certified trades, WorkSafeBC clearance, insurance, response times and paperwork. The ten things to check before you hand a contractor the keys to a building's heating, plumbing and gas.",
    date: "2026-11-08",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Building Ops",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/choosing-contractor.jpg",
    coverAlt: "Two contractors in hard hats inspecting a concrete wall",
    coverCredit: { name: "Glenov Brankovic", url: "https://unsplash.com/@glenovbrankovic" },
    body: [
      {
        paragraphs: [
          "Most property managers inherit their mechanical contractor with the building. That is fine until a boiler fails on a long weekend, an invoice arrives with no explanation, or an insurer asks for the gas permit that nobody pulled. Choosing well up front saves all of that. Here is the checklist we would use if we were on your side of the desk.",
        ],
      },
      {
        heading: "1. A Technical Safety BC gas contractor licence",
        paragraphs: [
          "Regulated gas work in BC must be done by a licensed contractor, someone employed by one, or a person otherwise authorized. Ask for the licence number and check it on Technical Safety BC's Find a Licensed Contractor registry. An expired licence is treated as suspended, which also affects the permits that contractor can hold.",
        ],
      },
      {
        heading: "2. Certified people in the compulsory trades",
        paragraphs: [
          "Since BC's skilled trades certification took effect, several mechanical trades are compulsory: workers must be certified journeypersons or registered apprentices. They include refrigeration and air conditioning mechanic, steamfitter/pipefitter, sheet metal worker and gasfitter Class A and B. Ask who will actually be on your site and what tickets they hold. Plumbing is not on the compulsory list, so asking about Red Seal plumbers matters even more.",
        ],
      },
      {
        heading: "3. WorkSafeBC clearance and a safety program",
        paragraphs: [
          "A WorkSafeBC clearance letter confirms the contractor is registered and paid up, which protects you from assessments if their worker is hurt on your property. Ask about their safety program, and whether they hold a Certificate of Recognition (COR).",
        ],
      },
      {
        heading: "4. Insurance that fits the work",
        paragraphs: [
          "Get a certificate of commercial general liability insurance naming the strata or owner as additional insured, with limits that make sense for the building. For larger work, ask about professional liability and pollution coverage.",
        ],
      },
      {
        heading: "5. Real response times, in writing",
        paragraphs: [
          "Everyone says 24/7. Ask what it means: who answers the phone at 2 a.m., how quickly a technician is on site for no heat or an active leak, and whether that applies to your building or only to contracted clients.",
        ],
      },
      {
        heading: "6. Paperwork you can actually use",
        bullets: [
          "Service reports with photos, readings and plain-language findings.",
          "Deficiencies quoted separately so council can approve them.",
          "An equipment list for the building that grows with every visit.",
          "Permits and inspection results attached to the invoice.",
        ],
        paragraphs: [],
      },
      {
        heading: "7. The trades you need under one roof",
        paragraphs: [
          "A hot water plant replacement can touch plumbing, gas, electrical and drywall. Four contractors means four schedules and four people pointing at each other. One contractor accountable for the whole job is easier to manage and usually faster.",
        ],
      },
      {
        heading: "8. References from buildings like yours",
        paragraphs: [
          "Ask for two or three references from property managers with similar buildings: same size, same age, strata or commercial. Call them. Ask what went wrong and how it was handled.",
        ],
      },
      {
        heading: "9. Clear pricing",
        paragraphs: [
          "Know the hourly rates, after-hours multipliers, truck charges and parts markup before the first emergency call. For maintenance, compare scope as well as price: what is inspected, how often, and what is included.",
        ],
      },
      {
        heading: "10. A walk-through before the contract",
        paragraphs: [
          "A good contractor will walk your building before quoting a maintenance program and tell you what they see. If the first visit produces a useful list of observations, that is a fair preview of the next five years.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I check if a gas contractor is licensed in BC?",
        a: "Use Technical Safety BC's Find a Licensed Contractor registry and confirm the licence is active. Ask for the licence number in writing before work starts.",
      },
      {
        q: "Is plumbing a compulsory trade in BC?",
        a: "No. BC's compulsory mechanical trades include refrigeration and air conditioning mechanic, steamfitter/pipefitter, sheet metal worker and gasfitter Class A and B. Plumbing is not currently on the list, so ask about plumbers' certifications directly.",
      },
      {
        q: "What should a strata ask for before hiring a mechanical contractor?",
        a: "A gas contractor licence, WorkSafeBC clearance letter, liability insurance certificate, references from similar buildings, written response times, and a sample service report.",
      },
    ],
    sources: [
      { label: "Technical Safety BC: Gas licences", url: "https://www.technicalsafetybc.ca/gas-licences" },
      { label: "SkilledTradesBC: Skilled Trades Certification", url: "https://skilledtradesbc.ca/skilledtradescertification" },
    ],
    services: [
      { label: "Woola Mechanical: HVAC, plumbing and gas", href: "https://woolamech.ca/" },
      { label: "HVAC service", href: "https://woolamech.ca/hvac" },
      { label: "Gas fitting", href: "https://woolamech.ca/gas" },
    ],
  },

  {
    slug: "commercial-hvac-maintenance-contract-what-to-include",
    title: "What a commercial HVAC maintenance contract should include (and what you can cut)",
    excerpt:
      "Most HVAC maintenance contracts are a filter change with a nice cover page. Here is what a real program covers, built on the ASHRAE 180 approach, and how to read a contract before you sign it.",
    date: "2026-09-27",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Building Ops",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/pm-contract.jpg",
    coverAlt: "Technician in a safety vest walking past rooftop HVAC units",
    coverCredit: { name: "ThisisEngineering", url: "https://unsplash.com/@thisisengineering" },
    body: [
      {
        paragraphs: [
          "A preventive maintenance contract should do three things: keep the equipment running, catch problems before they become emergencies, and give you the records to plan replacements. Many contracts only do the first, badly. The difference shows up in the third year, when the building has a list of surprise failures and no history explaining them.",
        ],
      },
      {
        heading: "Start from the standard",
        paragraphs: [
          "ASHRAE Standard 180 sets minimum practices for inspecting and maintaining HVAC systems in commercial buildings. You do not need to buy it to use its logic. It asks for an inventory of every component that affects building performance, a defined condition that counts as unacceptable for each, an inspection frequency and task list for each, and documentation of what was done. Note that the standard excludes single-family homes and multi-family buildings of three storeys or fewer above grade, though the approach works there too.",
          "A contract built that way is specific. Each asset is listed. Each visit has a task list. Each finding is recorded against an asset.",
        ],
      },
      {
        heading: "What a solid program covers",
        bullets: [
          "Filters on a schedule set by the building and the filter type, not a generic quarter.",
          "Coils cleaned and inspected, condensate drains and pans cleared before they overflow into ceilings.",
          "Belts, bearings, motors and fans checked, with vibration or amperage readings where it matters.",
          "Refrigerant circuits checked for leaks and correct operation by a certified refrigeration mechanic.",
          "Combustion analysis and safety controls tested on gas-fired equipment, at least annually.",
          "Economizers, dampers and actuators exercised, because stuck dampers waste energy quietly.",
          "Controls and setpoints reviewed, including schedules that drift after tenants change.",
          "Water treatment on boilers, closed loops and cooling towers, with test results recorded.",
        ],
        paragraphs: [],
      },
      {
        heading: "What you can usually cut",
        paragraphs: [
          "Over-servicing exists too. Monthly visits to equipment that only needs quarterly attention, or full inspections on small exhaust fans that need a yearly look, add cost without value. A good contractor will set frequencies by asset and explain why, and lower them where history shows they can.",
        ],
      },
      {
        heading: "How to read the contract",
        bullets: [
          "Is every asset listed, with location and model? If not, you cannot tell what is covered.",
          "What is included in the fixed price, and what is billed as time and material?",
          "Are deficiencies reported with photos and quoted separately?",
          "What are the emergency response times, and are they different for contract clients?",
          "Who owns the records, and can you get them in a usable format if you change contractors?",
          "Is there a parts or labour discount for repairs found during maintenance?",
        ],
        paragraphs: [],
      },
      {
        heading: "The records are the real product",
        paragraphs: [
          "Two years of good maintenance records turn your depreciation report and capital plan from guesses into forecasts. They also protect you in insurance claims and disputes. If the contract does not leave you with an organised history of every asset, it is not doing the job.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should commercial HVAC equipment be serviced?",
        a: "It depends on the equipment and how hard it runs. Rooftop units are commonly serviced two to four times a year, with filters on their own schedule. Gas-fired equipment needs at least an annual combustion and safety check.",
      },
      {
        q: "What is ASHRAE Standard 180?",
        a: "A standard that sets minimum practices for inspecting and maintaining HVAC systems in commercial buildings, built around an equipment inventory, defined condition indicators, task frequencies and documentation.",
      },
      {
        q: "Are repairs included in a maintenance contract?",
        a: "Usually not. Most contracts cover scheduled maintenance at a fixed price, with repairs quoted or billed separately. Read what is included before comparing prices.",
      },
    ],
    sources: [
      { label: "ASHRAE: Standards 180 and 211", url: "https://www.ashrae.org/technical-resources/bookstore/standards-180-and-211" },
      { label: "US DOE Better Buildings: ANSI/ASHRAE/ACCA Standard 180", url: "https://betterbuildingssolutioncenter.energy.gov/resources/ansiashraeacca-standard-180-standard-practice-inspection-and-maintenance-commercial" },
    ],
    services: [
      { label: "Preventative maintenance programs", href: "https://woolamech.ca/preventative-maintenance" },
      { label: "HVAC service and repair", href: "https://woolamech.ca/hvac" },
      { label: "Commercial refrigeration", href: "https://woolamech.ca/refrigeration" },
    ],
  },

  {
    slug: "burst-pipe-strata-what-to-do-insurance-deductible",
    title: "A pipe just burst in your strata: the first hour, the insurance deductible, and who pays",
    excerpt:
      "Water damage is one of the most common strata insurance claims in BC, and deductibles keep rising. Here is what to do in the first hour, how section 158 of the Strata Property Act decides who pays the deductible, and how to make the next leak smaller.",
    date: "2026-10-30",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Building Ops",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/burst-pipe.jpg",
    coverAlt: "Ceiling torn open after water damage from a leak above",
    coverCredit: { name: "Brett Jordan", url: "https://unsplash.com/@brett_jordan" },
    body: [
      {
        paragraphs: [
          "A burst supply line in a wood-frame strata can put hundreds of litres an hour into the suite below. The first hour decides whether the damage is one ceiling or three floors. The next few weeks decide who pays. Here is how both usually go.",
        ],
      },
      {
        heading: "The first hour",
        bullets: [
          "Stop the water. Close the suite shut-off if there is one. If not, or if you cannot find it, close the riser or the building main. Every resident and caretaker should know where these are before it happens.",
          "Make it safe. If water is near electrical fixtures or panels, keep people away and turn off power to the affected area if it can be done safely.",
          "Call the plumber and a restoration company. The plumber stops the source; restoration extracts water and starts drying so mould does not set in.",
          "Notify the strata manager and the units below. Water travels, and the owners below need to know now.",
          "Document everything. Photos and video of the source, the damage and the shut-off. Keep the failed part.",
          "Call the insurer or broker. The strata manager usually handles the master policy claim; owners call their own insurer too.",
        ],
        paragraphs: [],
      },
      {
        heading: "Who pays the deductible",
        paragraphs: [
          "Under section 158 of the Strata Property Act, the strata corporation's insurance deductible is a common expense. Section 158(2) lets the strata sue an owner who is responsible for the loss to recover it. In Mari v. Strata Plan LMS 2835, 2007 BCSC 740, the BC Supreme Court held that responsible does not require negligence. An owner can be responsible for the deductible even if they could not have prevented the failure, for example when a pipe or appliance within their unit fails.",
          "Bylaws matter. Many stratas have bylaws that set their own standard, some importing a negligence test and others making owners responsible on a strict basis. The Civil Resolution Tribunal has decided many of these disputes, and the bylaw wording often decides the outcome. Read yours, and if a large deductible is at stake, get legal advice. This piece is general information, not legal advice.",
          "Water-damage deductibles on strata master policies have risen sharply in BC in recent years. That is exactly why owners should ask their own insurer about deductible assessment coverage, which can cover a strata deductible charged back to them.",
        ],
      },
      {
        heading: "Common culprits we see",
        bullets: [
          "Washing machine and dishwasher supply hoses, especially original rubber ones.",
          "Toilet supply lines with plastic nuts that crack.",
          "Hot water tanks past their service life, failing at the bottom seam.",
          "Poly-B and Kitec piping and fittings in buildings of the right age.",
          "Pipes in exterior walls or unheated spaces during a cold snap.",
          "Failed pressure reducing valves letting building pressure climb.",
        ],
        paragraphs: [],
      },
      {
        heading: "How to make the next leak smaller",
        paragraphs: [
          "Most stratas can cut the size of their water claims without a major project. Install or locate a shut-off valve for every suite and label it. Replace rubber appliance hoses with braided ones. Check and maintain pressure reducing valves. Consider leak sensors, or automatic shut-off valves, in suites and mechanical rooms, which some insurers now ask about. And if the building has Poly-B or Kitec, put a repipe on the capital plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can my strata charge me the insurance deductible for a leak from my unit?",
        a: "Often yes. Section 158 of the Strata Property Act lets a strata recover the deductible from an owner responsible for the loss, and the courts have said responsibility does not require negligence. Your strata's bylaws can change the test, so read them.",
      },
      {
        q: "What should I do first when a pipe bursts in my condo?",
        a: "Shut off the water at the suite valve or the riser, keep people away from wet electrical, then call a plumber, a restoration company and your strata manager. Photograph everything.",
      },
      {
        q: "How do I protect myself from a strata deductible chargeback?",
        a: "Ask your own insurer about deductible assessment coverage, keep appliance hoses and your hot water tank in good condition, and know where your shut-off valve is.",
      },
    ],
    sources: [
      { label: "BCREA: Liability for strata insurance deductibles", url: "https://www.bcrea.bc.ca/legally-speaking/liability-for-strata-insurance-deductibles/" },
      { label: "BC Government: Insurance for strata corporations", url: "https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing/operating-a-strata/finances-and-insurance/strata-corporation-insurance" },
    ],
    services: [
      { label: "Emergency plumbing", href: "https://woolamech.ca/plumbing" },
      { label: "Waterline repiping", href: "https://woolabuild.ca/waterline-repiping" },
      { label: "Restoration and repairs", href: "https://woolabuild.ca/maintenance" },
    ],
  },

  {
    slug: "hot-water-multi-unit-buildings-legionella-temperatures",
    title: "Hot water in multi-unit buildings: temperatures, Legionella and when to replace the plant",
    excerpt:
      "Lukewarm showers on the top floor, scalding taps on the bottom, and a storage tank set too low for safety. Here is how a building hot water system should be set up, why 60°C matters, and how to know it is time to replace it.",
    date: "2026-10-18",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Building Ops",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/hot-water.jpg",
    coverAlt: "Plumber tightening a fitting on a hot water tank",
    coverCredit: { name: "Marian Florinel Condruz", url: "https://unsplash.com/@gottapics" },
    body: [
      {
        paragraphs: [
          "Domestic hot water is the system residents notice most and councils think about least, until the complaints start. In a multi-unit building it has two jobs that pull against each other: water hot enough in storage to control bacteria, and water cool enough at the tap not to scald. Getting both right is a design and maintenance question, not a thermostat setting.",
        ],
      },
      {
        heading: "Why storage temperature matters",
        paragraphs: [
          "Legionella bacteria grow in warm, stagnant water, roughly between 25°C and 45°C, and cause Legionnaires' disease when inhaled in fine droplets, for example in a shower. Canadian guidance is consistent on storage: keep stored hot water at 60°C or above. The National Plumbing Code of Canada requires electric storage water heaters to be set at 60°C for this reason, and the federal standard for Legionella control in government buildings calls for storage above 60°C with distribution to outlets at 50°C or more.",
          "Turning the tank down to save energy or stop scalding complaints is the most common mistake we find. It solves one problem by creating a quieter, more serious one.",
        ],
      },
      {
        heading: "Preventing scalds without cooling the tank",
        paragraphs: [
          "Water at 60°C can cause a serious burn in seconds, especially for children and older residents. The answer is to store hot and deliver tempered water. A master thermostatic mixing valve after the plant, and point-of-use tempering valves where required, bring delivery temperature down to a safe level while the tank and recirculation loop stay hot. Those valves need annual checking; a failed mixing valve is a common cause of sudden scalding or sudden cold complaints.",
        ],
      },
      {
        heading: "Recirculation: why the top floor runs cold",
        paragraphs: [
          "Buildings use a recirculation loop so hot water is always near the tap. Over time balancing valves drift, check valves fail and pumps wear out. The result is the classic complaint pattern: some stacks get hot water instantly, others wait minutes. Cold sections of the loop are also exactly where Legionella prefers to live. Rebalancing the loop and repairing failed check valves is often the cheapest fix in the whole building.",
        ],
        bullets: [
          "Measure return water temperature at the plant and at the end of each branch.",
          "Look for dead legs: abandoned piping from old renovations where water sits still.",
          "Check the recirculation pump, its timer or controls, and the check valves.",
          "Rebalance branch valves so every riser stays hot.",
        ],
      },
      {
        heading: "When to replace the plant",
        bullets: [
          "Storage tanks are past 10 to 15 years, or showing rust at the base or weeping fittings.",
          "Boilers or heaters need frequent repairs, or parts are hard to get.",
          "Recovery cannot keep up in the morning peak even with the system balanced.",
          "Gas bills are high and the building is planning for lower emissions.",
        ],
        paragraphs: [
          "Hot water is a steady, year-round load, which makes it one of the best candidates for heat pumps in multi-unit buildings. Heat pump water heating systems designed for high temperatures, including CO2 systems, can carry the whole load or preheat water ahead of a gas heater. If your plant is due in the next few years, price that option alongside like-for-like.",
        ],
      },
    ],
    faqs: [
      {
        q: "What temperature should a building's hot water tank be set to?",
        a: "Store at 60°C or above to control Legionella, and use thermostatic mixing valves to deliver safe, tempered water to taps and showers.",
      },
      {
        q: "Why do some suites get hot water slower than others?",
        a: "Usually an unbalanced or failing recirculation loop: drifted balancing valves, failed check valves or a worn pump. Rebalancing often fixes it.",
      },
      {
        q: "How long do commercial hot water tanks last?",
        a: "Around 10 to 15 years, depending on water quality, maintenance and how hard they work. Leaks at the base usually mean replacement, not repair.",
      },
    ],
    sources: [
      { label: "National Research Council Canada: Legionella, who is addressing the risks", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada/legionella-whos-addressing-risks-canada" },
      { label: "Health Canada: Residential premise plumbing pathogens", url: "https://www.canada.ca/en/health-canada/services/publications/healthy-living/guidance-residential-premise-plumbing-pathogens-water-quality.html" },
    ],
    services: [
      { label: "Plumbing and domestic hot water", href: "https://woolamech.ca/plumbing" },
      { label: "Heating systems and boilers", href: "https://woolamech.ca/heating-systems" },
    ],
  },

  {
    slug: "grease-interceptors-drain-maintenance-metro-vancouver",
    title: "Grease, drains and sewer lines: a maintenance plan for mixed-use buildings in Metro Vancouver",
    excerpt:
      "Restaurants below, condos above, and one shared drain system. Metro Vancouver's grease interceptor bylaw, kitchen stack jetting and camera inspections, explained for property managers who would rather not get the 3 a.m. backup call.",
    date: "2026-09-24",
    readingTime: "7 min read",
    division: "mechanical",
    category: "Rebates & Compliance",
    author: { name: "Woola Mechanical", role: "Field Notes" },
    cover: "/blog/grease-drains.jpg",
    coverAlt: "Clean stainless steel commercial kitchen with dishwashing equipment",
    coverCredit: { name: "Ricardo Gomez Angel", url: "https://unsplash.com/@rgaleriacom" },
    body: [
      {
        paragraphs: [
          "Drain backups are the plumbing call nobody plans for and everybody remembers. In a mixed-use building, with food tenants on the ground floor and homes above, the drain system carries grease from commercial kitchens, food scraps and wipes from suites, and decades of buildup in horizontal runs below the parkade. A simple plan keeps it flowing.",
        ],
      },
      {
        heading: "Metro Vancouver's grease interceptor bylaw",
        paragraphs: [
          "Metro Vancouver's Food Sector Grease Interceptor Bylaw, Bylaw 365, adopted in 2012 and updated in 2023, requires commercial and institutional kitchens to install and maintain a grease interceptor to keep fats, oils and grease out of the sewer. The bylaw sets sizing and maintenance requirements and which fixtures must drain through the interceptor. Bylaw enforcement officers can inspect interceptors and the maintenance records, and violations can lead to notices and published enforcement.",
          "Check the bylaw for the cleaning interval that applies to your interceptor. Some municipalities that adopt it, such as the University Endowment Lands, state that interceptors must be cleaned at least every 90 days and ask for 12 months of cleaning records at licence renewal. Whatever the interval, the records are what an inspector asks for first.",
        ],
      },
      {
        heading: "Who is responsible in a strata or commercial building",
        paragraphs: [
          "Leases and bylaws decide this. Typically the food tenant is responsible for its interceptor and its cleaning records, and the strata or landlord is responsible for shared building drains. The trouble starts when a tenant's poorly maintained interceptor sends grease into the shared line. Put interceptor maintenance and record-sharing in the lease, and ask for copies of pump-out records each quarter.",
        ],
      },
      {
        heading: "Kitchen stacks in residential towers",
        paragraphs: [
          "Even without a restaurant, residential kitchen drain stacks accumulate grease and food waste. Lower floors get the backups first, often into a kitchen sink, because that is where the restriction builds. Hydro jetting the kitchen stacks on a schedule, commonly every one to three years depending on the building's history, is far cheaper than cleaning up a sink overflow in a ground-floor suite.",
        ],
      },
      {
        heading: "Camera inspections and the sewer lateral",
        paragraphs: [
          "The main building drain and the private sewer lateral that runs to the property line are usually the owner's responsibility under municipal bylaws. When there is a backup at the main, a closed-circuit camera inspection shows whether it is roots, a sag, a collapsed section or grease. Several Metro Vancouver municipalities, Surrey among them, ask for camera evidence before they accept that a blockage is on the city side. A recorded inspection also gives a baseline for the depreciation report.",
        ],
      },
      {
        heading: "A simple annual plan",
        bullets: [
          "Collect interceptor cleaning records from food tenants every quarter.",
          "Jet kitchen stacks on a schedule set by the building's backup history.",
          "Camera the main building drain and lateral every few years, and after any backup.",
          "Clear parkade and area drains before the fall rains, along with sump pumps and their alarms.",
          "Remind residents what not to put down drains, especially grease and wipes.",
        ],
        paragraphs: [],
      },
    ],
    faqs: [
      {
        q: "Do restaurants in Metro Vancouver need a grease interceptor?",
        a: "Yes. Metro Vancouver's Food Sector Grease Interceptor Bylaw (Bylaw 365) requires commercial and institutional kitchens to install and maintain one, sized and maintained to the bylaw's requirements.",
      },
      {
        q: "How often should kitchen drain stacks be cleaned in a condo building?",
        a: "Commonly every one to three years, set by the building's backup history. Buildings with frequent lower-floor sink backups need a shorter cycle.",
      },
      {
        q: "Who pays for a sewer lateral repair?",
        a: "The private lateral from the building to the property line is typically the owner's responsibility. Municipalities often need camera evidence before accepting a blockage is on the city side.",
      },
    ],
    sources: [
      { label: "Metro Vancouver: Grease interceptor requirements", url: "https://metrovancouver.org/services/environmental-regulation-enforcement/liquid-waste-regulatory-program/grease-interceptor-requirements" },
      { label: "Metro Vancouver: Private sewer lateral programs study", url: "https://metrovancouver.org/services/liquid-waste/Documents/private-sewer-lateral-programs-study-legal-approaches-municipalities-09-07-13.pdf" },
    ],
    services: [
      { label: "Drainage, jetting and camera inspection", href: "https://woolamech.ca/drainage" },
      { label: "Plumbing service", href: "https://woolamech.ca/plumbing" },
    ],
  },
];
