import { NextResponse, type NextRequest } from "next/server";
import { CORPORATE_ROUTES, DIVISION_HOSTS, LEGACY_PATHS, LEGACY_PREFIXES, SELF_NAMED_SERVICE, aliasTarget, divisionForHost, isDivisionSlug, isProductionHost } from "@/lib/domains";

/**
 * Hostname routing for the division domains (see lib/domains.ts for the map).
 * Everything happens inside the one Netlify site: woolamech.ca shows the
 * Mechanical section with its own domain in the address bar.
 *
 * Testing before DNS: on any non-production host (localhost, *.netlify.app
 * draft/branch URLs) the request header `x-woola-host: woolamech.ca`
 * simulates that domain. Production hostnames ignore the header.
 */
export const config = {
  // Skip Next internals, API routes and files with an extension, but do take
  // sitemap.xml and robots.txt so each domain can serve its own.
  matcher: ["/((?!_next/|api/|.*\\..*).*)", "/sitemap.xml", "/robots.txt"],
};

export function middleware(req: NextRequest) {
  const rawHost = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "").toLowerCase().split(":")[0];
  const simulated = req.headers.get("x-woola-host")?.toLowerCase().split(":")[0];
  const host = simulated && !isProductionHost(rawHost) ? simulated : rawHost;
  const { pathname, search } = req.nextUrl;

  // woolamech.com, woolafire.ca, ... -> their real site (netlify.toml does this first in production)
  const alias = aliasTarget(host);
  if (alias) return NextResponse.redirect(`https://${alias}${alias === "woola.ca" ? "/" : pathname + search}`, 301);

  const division = divisionForHost(host);
  if (!division) return NextResponse.next();

  const bareHost = DIVISION_HOSTS[division];
  const redirect = (url: string) => NextResponse.redirect(url, 301);
  const rewrite = (path: string) => {
    const url = req.nextUrl.clone();
    url.pathname = path;
    return NextResponse.rewrite(url);
  };

  // www.woolamech.ca -> woolamech.ca (netlify.toml does this first in production)
  if (host !== bareHost) return redirect(`https://${bareHost}${pathname}${search}`);

  // Old WordPress URLs (netlify.toml redirects do not run under the Next runtime).
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const legacy = LEGACY_PATHS[division][clean];
  if (legacy) return redirect(`https://${bareHost}${legacy}${search}`);
  if (LEGACY_PREFIXES.some((p) => clean.startsWith(p) || clean === p.replace(/\/$/, ""))) return redirect(`https://${bareHost}/`);
  if (clean !== pathname) return redirect(`https://${bareHost}${clean}${search}`); // trailing slash

  if (pathname === "/sitemap.xml") return rewrite(`/division-sitemap/${division}`);
  if (pathname === "/robots.txt") return rewrite(`/division-robots/${division}`);

  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0) return rewrite(`/${division}`);

  const [first, ...rest] = segs;
  // woolamech.ca/mechanical/plumbing -> woolamech.ca/plumbing (one URL per page)
  if (first === division) {
    // woolaelectrical.ca/electrical is the "Electrical Service & Maintenance" page
    if (rest.length === 0 && SELF_NAMED_SERVICE.has(division)) return rewrite(`/${division}/${division}`);
    return redirect(`https://${bareHost}/${rest.join("/")}${search}`);
  }
  // woolamech.ca/power/generators -> woolapower.ca/generators
  if (isDivisionSlug(first)) return redirect(`https://${DIVISION_HOSTS[first]}/${rest.join("/")}${search}`);
  // Corporate pages are served on the division host, unchanged.
  if (CORPORATE_ROUTES.has(first)) return NextResponse.next();
  // Anything else is a page of this division: woolamech.ca/plumbing
  return rewrite(`/${division}${pathname}`);
}
