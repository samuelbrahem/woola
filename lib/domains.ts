/**
 * Domain strategy.
 *
 * woola.ca is the corporate site. Each division also has its own domain, and
 * that domain shows the division's section with the domain left visible
 * (middleware.ts rewrites by hostname; nothing redirects to woola.ca):
 *
 *   woolamech.ca/            -> /mechanical
 *   woolamech.ca/plumbing    -> /mechanical/plumbing
 *   woolamech.ca/about       -> /about          (corporate pages stay on the host)
 *   woolamech.ca/mechanical  -> 301 woolamech.ca/  (one clean URL per page)
 *   woolamech.ca/power/...   -> 301 woolapower.ca/... (each division on its own domain)
 *
 * Canonicals: DIVISIONS_CANONICAL_ON_OWN_DOMAIN decides which URL search
 * engines should index for division content. true (current) makes the
 * division domain canonical (woolamech.ca/plumbing) and woola.ca/mechanical/*
 * points at it, so the divisions build their own search presence and the old
 * woolamech.ca / woolapower.ca equity carries over. false consolidates
 * everything under woola.ca. Corporate pages are always canonical on woola.ca.
 *
 * Keep this file free of heavy imports: middleware runs it at the edge.
 */

export type DivisionSlug = "mechanical" | "power" | "electrical" | "build";

export const MAIN_HOST = "woola.ca";
export const MAIN_URL = `https://${MAIN_HOST}`;

export const DIVISION_HOSTS: Record<DivisionSlug, string> = {
  mechanical: "woolamech.ca",
  power: "woolapower.ca",
  electrical: "woolaelectrical.ca",
  build: "woolabuild.ca",
};

export const DIVISIONS_CANONICAL_ON_OWN_DOMAIN = true;

/** Hostnames that only redirect (whole domain, path kept) to a real site.
 *  netlify.toml does this at the edge; middleware repeats it as a fallback. */
export const ALIAS_HOSTS: Record<string, string> = {
  "woolamech.com": "woolamech.ca",
  "woolapower.com": "woolapower.ca",
  "woolabuild.com": "woolabuild.ca",
  "woolafire.ca": MAIN_HOST, // no Fire division on the site yet; lands on the group home
};

export const DIVISION_SLUGS = Object.keys(DIVISION_HOSTS) as DivisionSlug[];

/** Top-level routes of the corporate site. On a division host these are served
 *  as-is (woolamech.ca/contact); anything else single-segment is treated as a
 *  service slug of that division. Keep in sync with app/(main). */
export const CORPORATE_ROUTES = new Set([
  "about", "blog", "book", "calculator", "careers", "commercial", "competitors", "contact",
  "equipment", "industries", "know-your-building", "news", "portal", "process",
  "property-managers", "residential", "second-opinion", "service-areas", "work",
  "division-sitemap", "division-robots", "llms.txt",
]);

/** Divisions that also have a service with the division's own slug, so
 *  woolaelectrical.ca/electrical is a page, not the home. */
export const SELF_NAMED_SERVICE = new Set<DivisionSlug>(["electrical"]);

/** Old WordPress URLs on the division domains -> the page that replaced them
 *  (same domain). Paths are matched without a trailing slash. */
export const LEGACY_PATHS: Record<DivisionSlug, Record<string, string>> = {
  mechanical: {
    "/about-woola": "/about",
    "/contact-us": "/contact",
    "/services": "/",
    "/services/gas": "/gas",
    "/services/hvac-and-refrigeration": "/hvac",
    "/services/plumbing": "/plumbing",
    "/installations": "/retrofits",
  },
  power: {
    "/about-woola": "/about",
    "/contact-us": "/contact",
    "/services": "/",
    "/installations": "/generators",
  },
  electrical: { "/about-woola": "/about", "/contact-us": "/contact" },
  build: { "/about-woola": "/about", "/contact-us": "/contact" },
};

/** WordPress leftovers with no equivalent: send to the division home. */
/** WordPress-only paths with no equivalent on the new site: answered 410 Gone so search engines drop them. */
export const LEGACY_PREFIXES = ["/author/", "/tag/", "/category/", "/feed", "/wp-", "/alpha_template/", "/page/", "/member_cat/", "/members/", "/portfolio/", "/elementor"];

export function isDivisionSlug(s: string): s is DivisionSlug {
  return (DIVISION_SLUGS as string[]).includes(s);
}

/** Division owning a hostname, ignoring www. and port. */
export function divisionForHost(host: string | null | undefined): DivisionSlug | null {
  if (!host) return null;
  const h = host.toLowerCase().split(":")[0].replace(/^www\./, "");
  for (const slug of DIVISION_SLUGS) if (DIVISION_HOSTS[slug] === h) return slug;
  return null;
}

export function isProductionHost(host: string) {
  const h = host.toLowerCase().split(":")[0].replace(/^www\./, "");
  return h === MAIN_HOST || divisionForHost(h) !== null || h in ALIAS_HOSTS;
}

/** Target host for a redirect-only hostname (www. tolerated), else null. */
export function aliasTarget(host: string | null | undefined): string | null {
  if (!host) return null;
  const h = host.toLowerCase().split(":")[0].replace(/^www\./, "");
  return ALIAS_HOSTS[h] ?? null;
}

/** The division's own site root, e.g. https://woolamech.ca */
export function divisionSiteUrl(slug: DivisionSlug) {
  return `https://${DIVISION_HOSTS[slug]}`;
}

/** Canonical absolute URL for division content. `path` is relative to the
 *  division ("" for its home, "/plumbing" for a service). */
export function divisionUrl(slug: DivisionSlug, path = "") {
  return DIVISIONS_CANONICAL_ON_OWN_DOMAIN
    ? `${divisionSiteUrl(slug)}${path}`
    : `${MAIN_URL}/${slug}${path}`;
}
