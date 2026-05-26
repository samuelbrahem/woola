# Woola Services Group

Next.js site for [Woola Services Group](https://woola.ca) — strata & commercial property services across Metro Vancouver, the Fraser Valley, and the Sea-to-Sky.

Three divisions under one roof:

- **Woola Mechanical** — HVAC, plumbing, gas, refrigeration
- **Woola Power Systems** — generators, electrical, EV charging
- **Woola Build** — maintenance, envelope, construction, property services

## Stack

- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- Leaflet + OpenStreetMap (CARTO tiles) for the coverage map
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deployment

Deployed to Railway. The `start` script honors `$PORT` so the platform can route traffic.
