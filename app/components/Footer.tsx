"use client";

import Image from "next/image";
import Link from "next/link";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Past Performance", href: "/past-performance" },
  { label: "Leadership", href: "/leadership" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const naicsCodes = [
  "621210 · Offices of Dentists",
  "621399 · Misc. Health Practitioners",
  "339116 · Dental Laboratories",
  "541611 · Admin Mgmt Consulting",
  "621498 · Outpatient Care",
];

const registrations = [
  { label: "UEI", value: "H42NZYR19ML6" },
  { label: "SAM Status", value: "Active" },
  { label: "Primary NAICS", value: "621210" },
  { label: "Ownership", value: "Veteran-owned" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__cta">
        <div className="site-footer__cta-inner">
          <div>
            <p className="eyebrow">Take the first step</p>
            <h2>Ready to discuss a contract or capability?</h2>
          </div>
          <div className="site-footer__cta-actions">
            <Link href="/contact" className="site-footer__cta-btn">
              Book Consultation
            </Link>
            <a
              href="/assets/RestiQ_Capabilities_Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__cta-link"
            >
              Capabilities Statement ↗
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__main">
        <div className="site-footer__col site-footer__col--brand">
          <Link
            href="/"
            aria-label="RestiQ Health home"
            className="site-footer__logo"
          >
            <Image
              src="/logo-transparent.png"
              alt="RestiQ Health"
              width={420}
              height={214}
            />
          </Link>
          <p className="site-footer__tagline">
            Service-Disabled Veteran-Owned Small Business delivering
            dental sleep medicine and federal healthcare contracting
            capabilities.
          </p>
          <div className="site-footer__contact">
            <a href="mailto:info@restiqhealth.com">info@restiqhealth.com</a>
            <span>Suffolk, Virginia</span>
          </div>
          <span className="site-footer__sam">SAM.gov ACTIVE</span>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">Quick Links</h3>
          <nav aria-label="Footer links" className="site-footer__links">
            {siteLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">NAICS Codes</h3>
          <ul className="site-footer__list">
            {naicsCodes.map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">Registrations</h3>
          <dl className="site-footer__reg">
            {registrations.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 RestiQ Health, LLC. All rights reserved.</p>
        <nav aria-label="Footer utility" className="site-footer__bottom-links">
          <Link href="/sitemap">Sitemap</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="site-footer__powered">
          Powered by{" "}
          <a
            href="https://modfxmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__powered-link"
          >
            MODFXMEDIA
          </a>
        </p>
      </div>
    </footer>
  );
}
