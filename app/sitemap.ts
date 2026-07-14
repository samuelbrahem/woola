import type { MetadataRoute } from "next";
import { divisions } from "@/lib/divisions";
import { cities } from "@/lib/cities";

const BASE = "https://woola.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/about",
    "/book",
    "/calculator",
    "/commercial",
    "/competitors",
    "/contact",
    "/process",
    "/residential",
    "/service-areas",
    "/work",
  ];

  const divisionPaths = divisions.map((d) => `/${d.slug}`);
  const servicePaths = divisions.flatMap((d) =>
    d.services.map((s) => `/${d.slug}/${s.slug}`)
  );
  const cityPaths = cities.map((c) => `/service-areas/${c.slug}`);

  const all = [...staticPaths, ...divisionPaths, ...servicePaths, ...cityPaths];

  return all.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/") ? 0.7 : 0.9,
  }));
}
