# Go-live runbook: woola.ca on Netlify

Hosting is Netlify, team "Samuel Brahem", site **woolaservices** (https://woolaservices.netlify.app).
It auto-builds from GitHub `samuelbrahem/woola` on every push to `main` (Next.js runtime plugin). Do not use Vercel for this project.

Status legend: [x] done · [ ] to do · (who)

## 1. Hosting
- [x] Netlify site connected to GitHub `main`; every push deploys. Latest production deploy is green.
- [x] Repo folder linked (`netlify link`); `netlify open` opens the dashboard.
- [x] Environment variables: `ESTIMATING_EMAIL` = services@woola.ca, `NEXT_PUBLIC_GA_ID` = G-QRD8THQV60 (GA4 live 2026-11-16).
- [ ] (Samuel) Remaining env vars, set with `netlify env:set NAME value` and then redeploy (`netlify deploy --build --prod` or push):
  - `RESEND_API_KEY` — optional. Forms already deliver through Netlify Forms (notification to services@woola.ca). Resend only adds branded no-reply@woola.ca delivery and unlimited attachments.
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — Maps JavaScript API, HTTP-referrer restricted to woola.ca. Optional (Leaflet fallback).
  - `GOOGLE_PLACES_API_KEY` — Places API (New), server key. Optional (review cards hidden without it).

## 2. Domains and routing (done on the Netlify side)
- [x] One Netlify site serves all five domains. Primary: woola.ca. Aliases: www.woola.ca, woolamech.ca, woolapower.ca, woolabuild.ca, woolaelectrical.ca, each with www.
- [x] Each division domain shows its own section with the domain left visible (`middleware.ts`, map in `lib/domains.ts`):
  - woolamech.ca → Mechanical home; woolamech.ca/plumbing → the Plumbing service page; same for woolapower.ca, woolabuild.ca, woolaelectrical.ca.
  - Corporate pages (about, contact, careers, work, news…) are served on whichever domain the visitor is on. "Part of Woola Services Group" links go to woola.ca.
  - woolamech.ca/mechanical/plumbing → 301 → woolamech.ca/plumbing (one URL per page); woolamech.ca/power/… → 301 → woolapower.ca/… (each division on its own domain). www.<division>.ca → <division>.ca.
  - Old WordPress paths on the division domains 301 to the same page on the same domain (netlify.toml).
- SEO/canonicals: division content is canonical on the division domains (`DIVISIONS_CANONICAL_ON_OWN_DOMAIN = true`), so woola.ca/mechanical/* carries a canonical pointing at woolamech.ca and is left out of woola.ca's sitemap; each division domain serves its own /sitemap.xml and /robots.txt. Flip that one constant to consolidate everything under woola.ca instead. Corporate pages are always canonical on woola.ca.
- Testing without DNS: on localhost or any *.netlify.app URL, send the header `x-woola-host: woolamech.ca` to simulate that domain (ignored on the real domains).
- Netlify issues Let's Encrypt certificates for every hostname automatically once DNS resolves to it.

## 3. DNS (GoDaddy, via the Ancell reseller login for "email and domain")
Every domain below uses GoDaddy nameservers (domaincontrol.com). All of them point at the one Netlify site; Netlify decides what each hostname shows. For each domain change ONLY these two records and leave everything else:

    A      @     75.2.60.5
    CNAME  www   woolaservices.netlify.app.

| Domain | What visitors get | Current A record |
|---|---|---|
| woola.ca | corporate site (primary) | 68.66.226.82 (cPanel) |
| woolamech.ca | Mechanical section, domain stays visible | 68.66.226.82 |
| woolapower.ca | Power section | 68.66.226.82 |
| woolabuild.ca | Build section | 68.66.226.82 |
| woolaelectrical.ca | Electrical section | 13.248.213.45 (GoDaddy parking) |
| woolamech.com | 301 → woolamech.ca, path kept | 3.33.152.147 (GoDaddy forwarding) |
| woolapower.com | 301 → woolapower.ca, path kept | 15.197.225.128 (GoDaddy forwarding) |
| woolabuild.com | 301 → woolabuild.ca, path kept | 3.33.251.168 (GoDaddy forwarding) |
| woolafire.ca | 301 → woola.ca home (no Fire division yet). NOTE: removed from the Netlify aliases on 2026-11-16 because its DNS still pointed at parking and blocked certificate issuance for every other domain; re-add it in Netlify → Domain management once its A/CNAME are changed. | 76.223.67.189 (GoDaddy parking) |

Notes:
- If a domain currently uses GoDaddy "Domain forwarding" (the .com ones do), turn forwarding OFF for that domain first, then set the A and CNAME records. Forwarding and an A record fight each other.
- Do NOT touch: MX (Microsoft 365 mail; woolamech.com and woolapower.com have MX too), TXT `v=spf1 …`, TXT `google-site-verification=…`, TXT `MS=…`, `apple-domain-verification`, autodiscover CNAMEs. Email keeps working only if those stay.
- Netlify → Domain management shows a green check per hostname when it resolves, then provisions HTTPS for it. Propagation is usually minutes to an hour.
- Not in scope: jetclassic.ca, pamaspringsymposium.com.

## 4. Cutover checks (same day)
- [ ] https://woola.ca loads the new site over HTTPS; http:// and www redirect to it.
- [ ] woolamech.ca shows Mechanical with its own domain; woolamech.ca/services/plumbing → woolamech.ca/plumbing (301); woolaelectrical.ca shows Electrical.
- [ ] /contact callback form delivers to services@woola.ca; /second-opinion upload delivers.
- [ ] Search Console: woola.ca property → submit https://woola.ca/sitemap.xml. Domain properties for woolamech.ca, woolapower.ca, woolabuild.ca, woolaelectrical.ca → submit each domain's /sitemap.xml and request indexing of its home. No Change of Address (the division domains stay live).
- [ ] GA4 real-time shows a visit.
- [ ] Google Business Profiles: website URL → https://woola.ca (and /power for the Power listing).

## 5. After cutover
- Keep the Ancell cPanel/WordPress accounts for 30 days as a rollback (switch the A records back), then cancel hosting for the four sites. Keep the Ancell domain/email account.
- If the live review cards ever show the wrong listing, pin it with `GOOGLE_PLACE_ID_<DIVISION>`.

## Index policy (2026-11-16)
Measured on the launch build: the 18 city pages share 86% of their text (worst pairs 96%), the 9 industry pages ~70% at ~275 words, and the 19 equipment definitions average ~200 words. Templated or thin pages are what Google's helpful-content system demotes a whole domain for, so these 46 pages are `noindex, follow`, out of the sitemaps and llms.txt, but still live for visitors and linked from menus. Hubs (/service-areas, /equipment) stay indexed. To bring a page back: give it distinct content (local projects, local permit/utility facts, its own FAQs, case-study links), remove the `robots` line in its page.tsx, and restore it in app/sitemap.ts. Indexed set after this: home, 4 division homes + 44 services (on the division domains), 14 case studies, residential, blog, news, corporate pages.


## City pages (2026-11-25)
The 18 city pages were rebuilt with their own local content and are now indexable. Each city has an entry in `lib/city-local.ts`: an overview from 2021 Census dwelling counts, named areas, who issues which permit, local bylaw rules (work hours, backflow testing, flood levels, rental heat, EV-ready parking), city FAQs with FAQPage schema, and a sources list. The page lists six relevant services instead of all 44. Measured on the local build: median 1,572 words, average text similarity between city pages 14% (worst pair 22%), down from 86% (worst 96%).

How the index switch works: a city with an entry in `lib/city-local.ts` is `index, follow` and appears in woola.ca/sitemap.xml. A city without one falls back to the shared template and stays `noindex`. Industry and equipment detail pages are unchanged (still noindex).

Maintenance: the facts are bylaw and permit details checked in November 2026 against the sources listed on each page. Recheck them yearly, and update `CHECKED` in the file when you do. Vancouver's own website blocks automated access, so its noise hours, rental heat rule and carbon by-law status were written from the existing carbon-limits blog post and general knowledge and should be confirmed by hand against vancouver.ca.
