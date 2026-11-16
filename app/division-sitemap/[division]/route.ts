import { divisions, getDivision } from "@/lib/divisions";
import { divisionUrl, type DivisionSlug } from "@/lib/domains";

/** sitemap.xml for a division domain (middleware rewrites woolamech.ca/sitemap.xml here). */
export const dynamic = "force-static";

export function generateStaticParams() {
  return divisions.map((d) => ({ division: d.slug }));
}

export function GET(_req: Request, { params }: { params: { division: string } }) {
  const d = getDivision(params.division);
  if (!d) return new Response("Not found", { status: 404 });
  const slug = d.slug as DivisionSlug;
  const lastmod = "2026-11-15";
  const urls = [
    { loc: divisionUrl(slug), priority: "1.0" },
    ...d.services.map((s) => ({ loc: divisionUrl(slug, `/${s.slug}`), priority: "0.8" })),
  ];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${u.priority}</priority></url>`).join("\n") +
    `\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
