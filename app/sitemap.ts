import type { MetadataRoute } from "next";
import { divisions } from "@/lib/divisions";
import { cities } from "@/lib/cities";
import { residentialServices } from "@/lib/residential";
import { posts } from "@/lib/posts";
import { news } from "@/lib/news";
import { caseStudies } from "@/lib/case-studies";
import { DIVISIONS_CANONICAL_ON_OWN_DOMAIN } from "@/lib/domains";
import { industries } from "@/lib/industries";
import { equipmentLibrary } from "@/lib/equipment-library";

const BASE = "https://woola.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  // A fixed date per content set; bump when that content changes. "now" on
  // every build tells crawlers everything changed, which they learn to ignore.
  const lastModified = new Date("2026-11-16");
  const staticPaths = [
    "",
    "/about",
    "/about/credentials",
    "/about/fleet",
    "/blog",
    "/book",
    "/careers",
    "/commercial",
    "/competitors",
    "/contact",
    "/equipment",
    "/know-your-building",
    "/news",
    "/portal",
    "/process",
    "/property-managers",
    "/residential",
    "/second-opinion",
    "/service-areas",
    "/work",
  ];

  // Division pages are canonical on their own domains (lib/domains.ts), where
  // each domain's /sitemap.xml lists them; listing them here would advertise
  // non-canonical URLs.
  const divisionPaths = DIVISIONS_CANONICAL_ON_OWN_DOMAIN ? [] : divisions.map((d) => `/${d.slug}`);
  const servicePaths = DIVISIONS_CANONICAL_ON_OWN_DOMAIN
    ? []
    : divisions.flatMap((d) => d.services.map((s) => `/${d.slug}/${s.slug}`));
  const residentialPaths = residentialServices.map((s) => `/residential/${s.slug}`);
  // City, industry and equipment detail pages are noindex (templated or thin) and
  // therefore not advertised here; their hubs (/service-areas, /equipment) are.
  const cityPaths: string[] = [];
  const postPaths = posts.map((p) => `/blog/${p.slug}`);
  const newsPaths = news.map((n) => `/news/${n.slug}`);
  const workPaths = caseStudies.map((c) => `/work/${c.slug}`);
  const equipmentPaths: string[] = [];
  const industryPaths: string[] = [];

  const all = [
    ...staticPaths,
    ...divisionPaths,
    ...servicePaths,
    ...residentialPaths,
    ...cityPaths,
    ...postPaths,
    ...newsPaths,
    ...workPaths,
    ...equipmentPaths,
    ...industryPaths,
  ];

  return all.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: path.startsWith("/blog/")
      ? new Date(posts.find((p) => `/blog/${p.slug}` === path)?.date ?? lastModified)
      : path.startsWith("/news/")
        ? new Date(news.find((n) => `/news/${n.slug}` === path)?.date ?? lastModified)
        : lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/") ? 0.7 : 0.9,
  }));
}
