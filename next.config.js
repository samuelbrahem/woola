/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Netlify's netlify.toml headers only reach static files; pages come from the
  // Next server, so the same security headers are set here as well.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
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
