import { NextResponse, type NextRequest } from "next/server";
import { CORPORATE_ROUTES, DIVISION_HOSTS, divisionForHost, isDivisionSlug, isProductionHost } from "@/lib/domains";

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

  if (pathname === "/sitemap.xml") return rewrite(`/division-sitemap/${division}`);
  if (pathname === "/robots.txt") return rewrite(`/division-robots/${division}`);

  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0) return rewrite(`/${division}`);

  const [first, ...rest] = segs;
  // woolamech.ca/mechanical/plumbing -> woolamech.ca/plumbing (one URL per page)
  if (first === division) return redirect(`https://${bareHost}/${rest.join("/")}${search}`);
  // woolamech.ca/power/generators -> woolapower.ca/generators
  if (isDivisionSlug(first)) return redirect(`https://${DIVISION_HOSTS[first]}/${rest.join("/")}${search}`);
  // Corporate pages are served on the division host, unchanged.
  if (CORPORATE_ROUTES.has(first)) return NextResponse.next();
  // Anything else is a page of this division: woolamech.ca/plumbing
  return rewrite(`/${division}${pathname}`);
}
