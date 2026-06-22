import type { Metadata } from "next";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap | RestiQ Health",
  description:
    "Browse the full sitemap of RestiQ Health, including capabilities, who we serve, leadership, certifications, past performance, and contact pages.",
  alternates: { canonical: "/sitemap" },
  openGraph: {
    title: "Sitemap | RestiQ Health",
    description:
      "Browse all RestiQ Health pages: capabilities, who we serve, leadership, certifications, past performance, and contact.",
    url: "https://restiqhealth.com/sitemap",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "RestiQ Health Sitemap" }],
  },
};

export default function Page() {
  return <SitemapClient />;
}
