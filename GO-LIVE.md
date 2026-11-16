# Go-live runbook: woola.ca on Vercel

Status legend: [x] done · [ ] to do · (who)

## 1. Hosting (Vercel)
- [x] Project linked and preview deployed from this repo (`vercel`).
- [ ] (Samuel) Connect GitHub so `main` auto-deploys: Vercel dashboard → Project → Settings → Git → Connect `samuelbrahem/woola`.
- [ ] (Samuel) Environment variables, Production scope:
  - `ESTIMATING_EMAIL` = services@woola.ca (set)
  - `RESEND_API_KEY` — create at resend.com, add domain woola.ca (Resend gives DKIM TXT + a `send.woola.ca` MX/TXT; these do NOT touch the main MX). Powers /contact and /second-opinion. Until set, both forms tell visitors to phone dispatch.
  - `NEXT_PUBLIC_GA_ID` — GA4 measurement ID (G-…) from the woola.ca property in Google Analytics.
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — Maps JavaScript API, HTTP-referrer restricted to woola.ca. Optional (Leaflet fallback).
  - `GOOGLE_PLACES_API_KEY` — Places API (New), server key. Optional (review cards hidden without it).
- [ ] (Samuel) `vercel --prod` once env vars are in, or push to `main` after Git is connected.

## 2. Domains
Add in Vercel → Project → Settings → Domains, apex as primary:
- woola.ca (primary), www.woola.ca (redirects to apex)
- woolamech.ca, www.woolamech.ca, woolapower.ca, www.woolapower.ca, woolabuild.ca, www.woolabuild.ca
  (next.config.js redirects these to the matching division pages, preserving the old URLs)

## 3. DNS (GoDaddy, via the Ancell reseller account for "email and domain")
Nameservers are GoDaddy (domaincontrol.com). Change ONLY these records, per domain:
- `A     @    76.76.21.21`              (replace the current 68.66.226.82)
- `CNAME www  cname.vercel-dns.com.`    (replace/add)
Do NOT touch: MX (Microsoft 365 mail), TXT `v=spf1 …`, TXT `google-site-verification=…`, TXT `MS=…`, `apple-domain-verification`, autodiscover CNAMEs. Email keeps working only if those stay.
Vercel shows the exact records and a green check when they resolve (minutes to an hour).

## 4. Cutover checks (same day)
- [ ] https://woola.ca loads the new site over HTTPS; http:// and www redirect.
- [ ] woolamech.ca/services/plumbing → woola.ca/mechanical/plumbing (301).
- [ ] /contact callback form delivers to services@woola.ca; /second-opinion upload delivers.
- [ ] Search Console (woola.ca property): submit https://woola.ca/sitemap.xml, request indexing for /, /mechanical, /power, /electrical, /build.
- [ ] Add woolamech.ca / woolapower.ca / woolabuild.ca properties in Search Console → Change of Address → woola.ca.
- [ ] GA4 real-time shows a visit.
- [ ] Google Business Profiles: website URL → https://woola.ca (and /power for the Power listing).

## 5. After cutover
- Keep the Ancell cPanel/WordPress accounts for 30 days as a rollback (switch A records back), then cancel hosting for the four sites. Keep the Ancell domain/email account.
- Review `GOOGLE_PLACE_ID_*` once the Places key is live if the wrong listing is ever picked.
