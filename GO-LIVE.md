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

## 2. Domains (done on the Netlify side)
- [x] Primary: woola.ca. Aliases: www.woola.ca, woolamech.ca, woolapower.ca, woolabuild.ca, woolaelectrical.ca, each with www.
- netlify.toml (and next.config.js) 301 the division domains into woola.ca: old pages such as woolamech.ca/services/plumbing go to the matching new page, anything else to the division page. woolaelectrical.ca is a parked GoDaddy page today and goes straight to /electrical.
- Netlify issues Let's Encrypt certificates for every hostname automatically once DNS resolves to it.

## 3. DNS (GoDaddy, via the Ancell reseller login for "email and domain")
All five domains use GoDaddy nameservers (domaincontrol.com). For each domain change ONLY these two records:

    A      @     75.2.60.5                      (replace the current 68.66.226.82)
    CNAME  www   woolaservices.netlify.app.     (replace/add)

Do NOT touch: MX (Microsoft 365 mail), TXT `v=spf1 …`, TXT `google-site-verification=…`, TXT `MS=…`, `apple-domain-verification`, autodiscover CNAMEs. Email keeps working only if those stay.
Propagation is usually minutes to an hour. Netlify → Domain management shows a green check per hostname when it resolves, then provisions HTTPS.

## 4. Cutover checks (same day)
- [ ] https://woola.ca loads the new site over HTTPS; http:// and www redirect to it.
- [ ] woolamech.ca/services/plumbing → woola.ca/mechanical/plumbing (301); woolaelectrical.ca → woola.ca/electrical.
- [ ] /contact callback form delivers to services@woola.ca; /second-opinion upload delivers.
- [ ] Search Console (woola.ca): submit https://woola.ca/sitemap.xml; request indexing for /, /mechanical, /power, /electrical, /build.
- [ ] Search Console: add woolamech.ca / woolapower.ca / woolabuild.ca properties if missing → Change of Address → woola.ca.
- [ ] GA4 real-time shows a visit.
- [ ] Google Business Profiles: website URL → https://woola.ca (and /power for the Power listing).

## 5. After cutover
- Keep the Ancell cPanel/WordPress accounts for 30 days as a rollback (switch the A records back), then cancel hosting for the four sites. Keep the Ancell domain/email account.
- If the live review cards ever show the wrong listing, pin it with `GOOGLE_PLACE_ID_<DIVISION>`.
