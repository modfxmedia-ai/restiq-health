import type { Metadata } from "next";
import CertificationsClient from "./CertificationsClient";

export const metadata: Metadata = {
  title: "Certifications & Registrations | SDVOSB",
  description:
    "SAM.gov-active SDVOSB credentials, UEI, CAGE, and NAICS coverage establishing RestiQ Health as a verified federal contracting partner.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications & Registrations | RestiQ Health",
    description:
      "SAM.gov-active SDVOSB credentials, UEI, CAGE, and NAICS coverage for federal contracting.",
    url: "https://restiqhealth.com/certifications",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "RestiQ Health Certifications" }],
  },
};

export default function Page() {
  return <CertificationsClient />;
}
