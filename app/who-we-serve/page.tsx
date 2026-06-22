import type { Metadata } from "next";
import WhoWeServeClient from "./WhoWeServeClient";

export const metadata: Metadata = {
  title: "Who We Serve | Military & Federal Health Partners",
  description:
    "RestiQ Health supports active-duty readiness, VA Community Care, prime contractors, and Small Business Offices across the military health system.",
  alternates: { canonical: "/who-we-serve" },
  openGraph: {
    title: "Who We Serve | RestiQ Health",
    description:
      "Supporting active-duty readiness, VA Community Care, prime contractors, and Small Business Offices across the military health system.",
    url: "https://restiqhealth.com/who-we-serve",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Who RestiQ Health Serves" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Federal Healthcare Delivery",
  provider: {
    "@type": "MedicalBusiness",
    name: "RestiQ Health, LLC",
    url: "https://restiqhealth.com",
  },
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType:
      "Active-duty military, VA Community Care, prime contractors, Small Business Offices",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WhoWeServeClient />
    </>
  );
}
