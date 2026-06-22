import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact RestiQ Health | Procurement & Teaming",
  description:
    "Reach RestiQ Health for federal procurement, subcontractor and teaming opportunities, and clinical pilot discussions. Based in Suffolk, Virginia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact RestiQ Health",
    description:
      "Reach RestiQ Health for federal procurement, teaming opportunities, and clinical pilot discussions. Based in Suffolk, Virginia.",
    url: "https://restiqhealth.com/contact",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Contact RestiQ Health" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RestiQ Health, LLC",
  url: "https://restiqhealth.com",
  email: "info@restiqhealth.com",
  description:
    "Service-Disabled Veteran-Owned Small Business delivering dental sleep medicine and federal healthcare contracting capabilities.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Suffolk",
    addressRegion: "VA",
    addressCountry: "US",
  },
  areaServed: "US",
  openingHours: "Mo-Fr 09:00-17:00",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactClient />
    </>
  );
}
