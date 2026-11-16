/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The three division domains (old WordPress one-pagers) fold into woola.ca.
    // Each domain's handful of real pages maps to its new home; everything else
    // lands on the division page. Host matching is a regex, so www. is covered.
    const legacy = (host, division, paths) => {
      const has = [{ type: "host", value: `(www\\.)?${host.replace(".", "\\.")}` }];
      return [
        ...Object.entries(paths).map(([source, destination]) => ({
          source,
          has,
          destination: `https://woola.ca${destination}`,
          permanent: true,
        })),
        { source: "/:path*", has, destination: `https://woola.ca/${division}`, permanent: true },
      ];
    };
    const shared = { "/about-woola": "/about", "/careers": "/careers", "/contact-us": "/contact" };
    return [
      ...legacy("woolamech.ca", "mechanical", {
        ...shared,
        "/services": "/mechanical",
        "/services/gas": "/mechanical/gas",
        "/services/hvac-and-refrigeration": "/mechanical/hvac",
        "/services/plumbing": "/mechanical/plumbing",
        "/preventative-maintenance": "/mechanical/preventative-maintenance",
        "/installations": "/mechanical/retrofits",
      }),
      ...legacy("woolapower.ca", "power", {
        ...shared,
        "/services": "/power",
        "/preventative-maintenance": "/power/maintenance-inspections",
        "/installations": "/power/generators",
      }),
      ...legacy("woolabuild.ca", "build", shared),
      // Old woola.ca WordPress slugs
      { source: "/about-woola", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      // Learning Hub retired 2026-07; equipment library is the surviving educational hub.
      { source: "/learn", destination: "/equipment", permanent: true },
      { source: "/learn/:path*", destination: "/equipment", permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

module.exports = nextConfig;
