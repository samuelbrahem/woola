import { divisions, getDivision } from "@/lib/divisions";
import { DIVISIONS_CANONICAL_ON_OWN_DOMAIN, MAIN_URL, divisionSiteUrl, type DivisionSlug } from "@/lib/domains";

/** robots.txt for a division domain (middleware rewrites woolamech.ca/robots.txt here). */
export const dynamic = "force-static";

export function generateStaticParams() {
  return divisions.map((d) => ({ division: d.slug }));
}

export function GET(_req: Request, { params }: { params: { division: string } }) {
  const d = getDivision(params.division);
  if (!d) return new Response("Not found", { status: 404 });
  const slug = d.slug as DivisionSlug;
  const sitemap = DIVISIONS_CANONICAL_ON_OWN_DOMAIN ? `${divisionSiteUrl(slug)}/sitemap.xml` : `${MAIN_URL}/sitemap.xml`;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
