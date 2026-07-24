#!/usr/bin/env bash
# Downloads brand logos into public/brand/logos/.
# Tries Clearbit first (transparent PNGs, high quality), then falls back to
# Google's 256px favicon service. Overwrites existing files.
#
# Run from repo root:  bash scripts/fetch-logos.sh

set -u
cd "$(dirname "$0")/.."
mkdir -p public/brand/logos
cd public/brand/logos

BRANDS=(
  "mitsubishi-electric	mitsubishielectric.com"
  "daikin	daikin.com"
  "carrier	carrier.com"
  "trane	trane.com"
  "viessmann	viessmann.us"
  "ibc-boilers	ibcboiler.com"
  "lochinvar	lochinvar.com"
  "rinnai	rinnai.us"
  "navien	navieninc.com"
  "honeywell	honeywell.com"
  "belimo	belimo.com"
  "grundfos	grundfos.com"
  "generac	generac.com"
  "kohler	kohler.com"
  "cummins	cummins.com"
  "caterpillar	cat.com"
  "onan	cummins.com"
  "asco	ascopower.com"
  "eaton	eaton.com"
  "zenith	zenithcontrols.com"
  "russelectric	russelectric.com"
  "deep-sea-electronics	deepseaelectronics.com"
  "woodward	woodward.com"
  "murphy	fwmurphy.com"
  "schneider-electric	se.com"
  "siemens	siemens.com"
  "abb	abb.com"
  "square-d	schneider-electric.com"
  "flo	flo.com"
  "chargepoint	chargepoint.com"
  "wallbox	wallbox.com"
  "evbox	evbox.com"
  "swtch	swtchenergy.com"
  "lutron	lutron.com"
  "philips	philips.com"
  "soprema	soprema.com"
  "sika	sika.com"
  "tremco	tremcosealants.com"
  "henry	henry.com"
  "gaf	gaf.com"
  "iko	iko.com"
  "hardie	jameshardie.com"
  "benjamin-moore	benjaminmoore.com"
  "sherwin-williams	sherwin-williams.com"
  "schluter	schluter.com"
  "schlage	schlage.com"
)

fetch() {
  local url=$1 out=$2
  local code
  code=$(curl -sSL -o "$out.tmp" -w "%{http_code}" --max-time 20 "$url" 2>/dev/null || echo "000")
  local size
  size=$(stat -f%z "$out.tmp" 2>/dev/null || stat -c%s "$out.tmp" 2>/dev/null || echo 0)
  if [ "$code" = "200" ] && [ "$size" -gt 500 ]; then
    mv "$out.tmp" "$out"
    return 0
  fi
  rm -f "$out.tmp"
  return 1
}

ok=0
miss=0
missed=""
for pair in "${BRANDS[@]}"; do
  slug=${pair%%$'\t'*}
  domain=${pair##*$'\t'}
  out="${slug}.png"

  if fetch "https://logo.clearbit.com/${domain}" "$out"; then
    src="clearbit"
  elif fetch "https://www.google.com/s2/favicons?domain=${domain}&sz=256" "$out"; then
    src="google-256"
  else
    src=""
  fi

  if [ -n "$src" ]; then
    size=$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out" 2>/dev/null)
    printf "  OK   %-24s %-11s %s B\n" "$slug" "$src" "$size"
    ok=$((ok+1))
  else
    printf "  FAIL %-24s (no source worked)\n" "$slug"
    miss=$((miss+1))
    missed="$missed $slug"
  fi
done

echo "---"
echo "downloaded=$ok  missing=$miss"
[ -n "$missed" ] && echo "missing:$missed"
echo "Files in public/brand/logos/:"
ls -1 public/brand/logos 2>/dev/null | wc -l
