import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Dental Sleep Medicine for the Federal Health Enterprise",
  description:
    "RestiQ Health is an SDVOSB delivering oral appliance therapy, home sleep apnea testing, and Tricare, VA CCN, and DHA billing and credentialing infrastructure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RestiQ Health | Dental Sleep Medicine for Federal Health",
    description:
      "SDVOSB delivering oral appliance therapy, HSAT coordination, and Tricare/VA/DHA billing and credentialing for the military health system.",
    url: "https://restiqhealth.com",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "RestiQ Health" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
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
  identifier: [
    { "@type": "PropertyValue", name: "UEI", value: "H42NZYR19ML6" },
    { "@type": "PropertyValue", name: "CAGE", value: "20HH3" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeClient />
    </>
  );
}
