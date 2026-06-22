import type { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Capabilities | Federal Dental Sleep Medicine",
  description:
    "Oral appliance therapy, HSAT coordination, credentialing, and federal payer infrastructure built for Tricare, VA CCN, and the Defense Health Agency.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "RestiQ Health Capabilities",
    description:
      "Oral appliance therapy, HSAT coordination, and federal payer infrastructure for the military health enterprise.",
    url: "https://restiqhealth.com/capabilities",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "RestiQ Health Capabilities" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dental Sleep Medicine",
  provider: {
    "@type": "MedicalBusiness",
    name: "RestiQ Health, LLC",
    url: "https://restiqhealth.com",
  },
  areaServed: "US",
  description:
    "Oral appliance therapy, home sleep apnea testing coordination, credentialing, and federal payer infrastructure for Tricare, VA CCN, and DHA.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CapabilitiesClient />
    </>
  );
}
