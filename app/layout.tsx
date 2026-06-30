import { Inter, Sora } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://restiqhealth.com"),
  title: {
    default: "RestiQ Health | Dental Sleep Medicine for Federal Health",
    template: "%s | RestiQ Health",
  },
  description:
    "Service-Disabled Veteran-Owned dental sleep medicine: oral appliance therapy, home sleep apnea testing, and Tricare/VA/DHA billing for the military health system.",
  applicationName: "RestiQ Health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "RestiQ Health",
    url: "https://restiqhealth.com",
    title: "RestiQ Health | Dental Sleep Medicine for Federal Health",
    description:
      "Service-Disabled Veteran-Owned dental sleep medicine and federal healthcare contracting for the military health enterprise.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "RestiQ Health" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RestiQ Health | Dental Sleep Medicine for Federal Health",
    description:
      "Service-Disabled Veteran-Owned dental sleep medicine and federal healthcare contracting for the military health enterprise.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "66CdrJ3tffhMZGdJQ7ARPtUEpXzTBbLUkU-4nfybbG8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1LGSRHC9ZQ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1LGSRHC9ZQ');
          `}
        </Script>
      </body>
    </html>
  );
}
