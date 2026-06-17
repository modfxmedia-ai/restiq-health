"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Past Performance", href: "/past-performance" },
  { label: "Leadership", href: "/leadership" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const staggerStyle = (i: number): CSSProperties =>
    ({ ["--i" as string]: i } as CSSProperties);

  const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
      <path
        d="M5 12h14m0 0l-5-5m5 5l-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const PinIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );

  const MailIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
      <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-nav__top">
          <div className="site-nav__top-inner">
            <div className="site-nav__top-info">
              <span className="site-nav__top-item">
                <PinIcon />
                Suffolk, Virginia
              </span>
              <a href="mailto:info@restiqhealth.com" className="site-nav__top-item">
                <MailIcon />
                info@restiqhealth.com
              </a>
              <span className="site-nav__top-item site-nav__top-item--hide-sm">
                <ShieldIcon />
                UEI · H42NZYR19ML6
              </span>
            </div>
            <div className="site-nav__top-meta">
              <span className="site-nav__top-badge">
                <span className="site-nav__top-dot" aria-hidden="true" />
                SAM.gov Active
              </span>
              <span className="site-nav__top-item site-nav__top-item--hide-sm">
                SDVOSB-Candidate · Veteran-Owned
              </span>
            </div>
          </div>
        </div>

        <div className="site-nav__inner">
          <Link href="/" className="site-nav__brand" aria-label="RestiQ Health home">
            <Image
              src="/logo-mark.png"
              alt="RestiQ Health"
              width={382}
              height={79}
              priority
              className="site-nav__logo"
            />
          </Link>

          <nav className="site-nav__links" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav__link ${active ? "is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-nav__actions">
            <Link href="/contact" className="site-nav__cta">
              Book Consultation
              <ArrowIcon />
            </Link>

            <button
              type="button"
              className={`site-nav__toggle ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav__links" aria-label="Mobile">
          {navItems.map((item, i) => {
            const active = isActive(item.href);
            return (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={`mobile-nav__link ${active ? "is-active" : ""}`}
                style={staggerStyle(i)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mobile-nav__cta"
            style={staggerStyle(navItems.length)}
          >
            Book Consultation
            <ArrowIcon />
          </Link>
        </nav>
      </div>
    </>
  );
}
