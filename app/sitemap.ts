import type { MetadataRoute } from "next";
import { divisions } from "@/lib/divisions";
import { cities } from "@/lib/cities";
import { residentialServices } from "@/lib/residential";
import { posts } from "@/lib/posts";
import { industries } from "@/lib/industries";
import { equipmentLibrary } from "@/lib/equipment-library";

const BASE = "https://woola.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  // A fixed date per content set; bump when that content changes. "now" on
  // every build tells crawlers everything changed, which they learn to ignore.
  const lastModified = new Date("2026-10-12");
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
    "/portal",
    "/process",
    "/property-managers",
    "/residential",
    "/second-opinion",
    "/service-areas",
    "/work",
  ];

  const divisionPaths = divisions.map((d) => `/${d.slug}`);
  const servicePaths = divisions.flatMap((d) =>
    d.services.map((s) => `/${d.slug}/${s.slug}`)
  );
  const residentialPaths = residentialServices.map((s) => `/residential/${s.slug}`);
  const cityPaths = cities.map((c) => `/service-areas/${c.slug}`);
  const postPaths = posts.map((p) => `/blog/${p.slug}`);
  const equipmentPaths = equipmentLibrary.map((e) => `/equipment/${e.slug}`);
  const industryPaths = industries.map((i) => `/industries/${i.slug}`);

  const all = [
    ...staticPaths,
    ...divisionPaths,
    ...servicePaths,
    ...residentialPaths,
    ...cityPaths,
    ...postPaths,
    ...equipmentPaths,
    ...industryPaths,
  ];

  return all.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: path.startsWith("/blog/")
      ? new Date(posts.find((p) => `/blog/${p.slug}` === path)?.date ?? lastModified)
      : lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/") ? 0.7 : 0.9,
  }));
}
