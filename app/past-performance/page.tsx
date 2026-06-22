import type { Metadata } from "next";
import PastPerformanceClient from "./PastPerformanceClient";

export const metadata: Metadata = {
  title: "Past Performance | Federal Sleep Readiness",
  description:
    "Review RestiQ Health's commercial pilot results and capability evidence supporting federal sleep readiness and dental sleep medicine delivery.",
  alternates: { canonical: "/past-performance" },
  openGraph: {
    title: "Past Performance | RestiQ Health",
    description:
      "Commercial pilot results and capability evidence supporting federal sleep readiness and dental sleep medicine delivery.",
    url: "https://restiqhealth.com/past-performance",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "RestiQ Health Past Performance" }],
  },
};

export default function Page() {
  return <PastPerformanceClient />;
}
