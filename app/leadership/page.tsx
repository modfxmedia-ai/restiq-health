import type { Metadata } from "next";
import LeadershipClient from "./LeadershipClient";

export const metadata: Metadata = {
  title: "Leadership | Veteran-Owned Clinical Team",
  description:
    "Meet the U.S. Navy veteran owners and AADSM clinical leadership driving RestiQ Health's federal dental sleep medicine delivery model.",
  alternates: { canonical: "/leadership" },
  openGraph: {
    title: "Leadership | RestiQ Health",
    description:
      "U.S. Navy veteran ownership and AADSM clinical leadership behind RestiQ Health's federal dental sleep medicine delivery model.",
    url: "https://restiqhealth.com/leadership",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "RestiQ Health Leadership" }],
  },
};

export default function Page() {
  return <LeadershipClient />;
}
