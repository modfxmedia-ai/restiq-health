import { Inter, Sora } from "next/font/google";
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
      </body>
    </html>
  );
}
