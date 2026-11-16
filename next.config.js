/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old woola.ca WordPress slugs
      { source: "/about-woola", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      // Learning Hub retired 2026-07; equipment library is the surviving educational hub.
      { source: "/learn", destination: "/equipment", permanent: true },
      { source: "/learn/:path*", destination: "/equipment", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

module.exports = nextConfig;
