import { divisions } from "@/lib/divisions";
import { residentialServices } from "@/lib/residential";
import { cities } from "@/lib/cities";
import { industries } from "@/lib/industries";
import { posts } from "@/lib/posts";
import { newsSorted } from "@/lib/news";
import { site } from "@/lib/site";

const BASE = "https://woola.ca";

/**
 * llms.txt: a plain-text map of the site for AI crawlers and answer engines
 * (llmstxt.org). Generated from the same data as the sitemap so it never
 * drifts from the pages.
 */
export function GET() {
  const lines: string[] = [
    `# ${site.fullName}`,
    "",
    `> ${site.description}`,
    "",
    `Head office: ${site.hq.line1}, ${site.hq.line2}. Phone ${site.phone}. Email ${site.email}. Hours ${site.hours}; ${site.emergency}.`,
    "",
    "Four divisions share one dispatch desk: Woola Mechanical (HVAC, plumbing, gas, refrigeration), Woola Power (standby generators, CSA C282 testing, UPS), Woola Electrical (commercial electrical, EV charging, lighting) and Woola Build (repairs, building maintenance, envelope, renovations). Clients are mostly strata corporations, property managers and commercial building owners in Metro Vancouver, the Fraser Valley and the Sea-to-Sky corridor.",
    "",
    "## Divisions and services",
    "",
  ];
  for (const d of divisions) {
    lines.push(`- [${d.name}](${BASE}/${d.slug}): ${d.tagline}`);
    for (const s of d.services.filter((x) => !x.parent)) {
      lines.push(`  - [${s.name}](${BASE}/${d.slug}/${s.slug}): ${s.short}`);
    }
  }
  lines.push("", "## Residential", "", `- [Woola Residential](${BASE}/residential): home mechanical services`);
  for (const s of residentialServices) lines.push(`  - [${s.name}](${BASE}/residential/${s.slug}): ${s.short}`);

  lines.push("", "## Who we serve", "", `- [Property managers](${BASE}/property-managers)`, `- [Commercial](${BASE}/commercial)`);
  for (const i of industries) lines.push(`- [${i.name}](${BASE}/industries/${i.slug}): ${i.short}`);

  lines.push("", "## Service area", "", `${cities.length} municipalities from Abbotsford to Whistler. Coverage map: ${BASE}/service-areas`, "");
  for (const c of cities) lines.push(`- [${c.name}](${BASE}/service-areas/${c.slug})`);

  lines.push("", "## Company", "",
    `- [About](${BASE}/about)`, `- [Credentials](${BASE}/about/credentials)`, `- [Our process](${BASE}/process)`,
    `- [Featured work](${BASE}/work)`, `- [Know Your Building](${BASE}/know-your-building)`, `- [Equipment library](${BASE}/equipment)`,
    `- [Careers](${BASE}/careers)`, `- [Contact](${BASE}/contact)`);

  lines.push("", "## Field Notes (articles)", "");
  for (const p of posts) lines.push(`- [${p.title}](${BASE}/blog/${p.slug}): ${p.excerpt}`);
  lines.push("", "## Company news", "");
  for (const n of newsSorted) lines.push(`- [${n.title}](${BASE}/news/${n.slug}) (${n.date.slice(0, 7)}): ${n.excerpt}`);

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
  });
}
