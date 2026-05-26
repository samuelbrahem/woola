import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Woola — Strata & Commercial Property Services",
    template: "%s · Woola",
  },
  description:
    "Mechanical, electrical, and building services for strata and commercial properties across Metro Vancouver, the Fraser Valley, and the Sea-to-Sky.",
  metadataBase: new URL("https://woola.ca"),
  icons: {
    icon: "/brand/woola-favicon-white.png",
    apple: "/brand/woola-favicon-white.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
