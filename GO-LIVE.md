# Go-live runbook: woola.ca on Netlify

Hosting is Netlify, team "Samuel Brahem", site **woolaservices** (https://woolaservices.netlify.app).
It auto-builds from GitHub `samuelbrahem/woola` on every push to `main` (Next.js runtime plugin). Do not use Vercel for this project.

Status legend: [x] done · [ ] to do · (who)

## 1. Hosting
- [x] Netlify site connected to GitHub `main`; every push deploys. Latest production deploy is green.
- [x] Repo folder linked (`netlify link`); `netlify open` opens the dashboard.
- [x] Environment variable `ESTIMATING_EMAIL` = services@woola.ca.
- [ ] (Samuel) Remaining env vars, set with `netlify env:set NAME value` and then redeploy (`netlify deploy --build --prod` or push):
  - `RESEND_API_KEY` — create at resend.com, add domain woola.ca (Resend's DKIM TXT + `send.woola.ca` records do not touch the main MX). Powers /contact and /second-opinion. Until set, both forms tell visitors to phone dispatch.
  - `NEXT_PUBLIC_GA_ID` — GA4 measurement ID (G-…) for the woola.ca property.
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
