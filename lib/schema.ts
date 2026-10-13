/**
 * schema.org JSON-LD builders. Rendered with <JsonLd /> on the page that the
 * data describes; the site-wide LocalBusiness lives in app/layout.tsx.
 */

import { site } from "./site";
import type { Division, Service, DivisionFAQ } from "./divisions";
import type { City } from "./cities";
import type { Post } from "./posts";
import type { Opening } from "./bamboo";

const BASE = "https://woola.ca";

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path}`,
    })),
  };
}

export function serviceSchema(division: Division, service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${BASE}/${division.slug}/${service.slug}`,
    serviceType: service.name,
    provider: { "@type": "LocalBusiness", name: division.name, url: `${BASE}/${division.slug}`, telephone: division.contactPhone },
    areaServed: { "@type": "AdministrativeArea", name: "Metro Vancouver, Fraser Valley and Sea-to-Sky, BC" },
  };
}

export function faqPage(faqs: DivisionFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function cityService(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Mechanical, electrical and building services in ${city.name}`,
    url: `${BASE}/service-areas/${city.slug}`,
    provider: { "@type": "LocalBusiness", name: site.fullName, url: BASE, telephone: site.phone },
    areaServed: {
      "@type": "City",
      name: city.name,
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    },
  };
}

export function article(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role },
    publisher: { "@type": "Organization", name: site.fullName, logo: { "@type": "ImageObject", url: `${BASE}/brand/favicon-w-512.png` } },
    image: post.cover.startsWith("http") ? post.cover : `${BASE}${post.cover}`,
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
  };
}

export function jobPostings(openings: Opening[]) {
  return openings.map((o) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: o.title,
    description: `${o.title} at ${site.fullName}${o.department ? `, ${o.department}` : ""}. Apply through BambooHR.`,
    employmentType: o.type.toUpperCase().replace(/[\s-]+/g, "_"),
    url: o.applyUrl,
    directApply: true,
    hiringOrganization: { "@type": "Organization", name: site.fullName, sameAs: BASE },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Coquitlam", addressRegion: "BC", addressCountry: "CA" },
    },
  }));
}
