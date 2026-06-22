"use client";

import Link from "next/link";
import { useEffect } from "react";

const sections = [
  {
    eyebrow: "01",
    title: "Home",
    href: "/",
    desc: "Overview of RestiQ Health, our mission, and federal health capability.",
    links: [
      { label: "Hero & mission", href: "/" },
      { label: "Core capabilities", href: "/#capabilities" },
      { label: "Why RestiQ Health", href: "/" },
    ],
  },
  {
    eyebrow: "02",
    title: "Capabilities",
    href: "/capabilities",
    desc: "Clinical care, payer infrastructure, and readiness-aligned delivery.",
    links: [
      { label: "Dental sleep medicine", href: "/capabilities" },
      { label: "Federal payer infrastructure", href: "/capabilities" },
      { label: "Capabilities statement (PDF)", href: "/assets/RestiQ_Capabilities_Statement.pdf" },
    ],
  },
  {
    eyebrow: "03",
    title: "Who We Serve",
    href: "/who-we-serve",
    desc: "Defense Health Agency, VA, Tricare, and the military health system.",
    links: [
      { label: "Federal partners", href: "/who-we-serve" },
      { label: "Care pathway", href: "/who-we-serve" },
    ],
  },
  {
    eyebrow: "04",
    title: "Past Performance",
    href: "/past-performance",
    desc: "Commercial pilot outcomes and multi-location clinical delivery.",
    links: [
      { label: "Performance metrics", href: "/past-performance" },
      { label: "Clinical locations", href: "/past-performance" },
    ],
  },
  {
    eyebrow: "05",
    title: "Leadership",
    href: "/leadership",
    desc: "Veteran-owned, veteran-controlled, clinically credentialed.",
    links: [
      { label: "Ownership & control", href: "/leadership" },
      { label: "The team", href: "/leadership" },
    ],
  },
  {
    eyebrow: "06",
    title: "Certifications",
    href: "/certifications",
    desc: "SAM.gov, SDVOSB status, NAICS codes, and registrations.",
    links: [
      { label: "Status & registrations", href: "/certifications" },
      { label: "NAICS codes", href: "/certifications" },
    ],
  },
  {
    eyebrow: "07",
    title: "Contact",
    href: "/contact",
    desc: "Connect with the RestiQ Health team about teaming and contracts.",
    links: [
      { label: "Contact form", href: "/contact" },
      { label: "info@restiqhealth.com", href: "mailto:info@restiqhealth.com" },
    ],
  },
];

export default function SitemapPage() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="cap">
      <section className="cap-hero">
        <div className="cap-hero__bg" aria-hidden="true">
          <span className="cap-hero__glow cap-hero__glow--1" />
          <span className="cap-hero__glow cap-hero__glow--2" />
          <span className="cap-hero__grid" />
          <span className="cap-hero__particles">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="cap-hero__particle"
                style={
                  {
                    "--x": `${(i * 41) % 100}%`,
                    "--d": `${9 + (i % 5) * 2.4}s`,
                    "--delay": `${(i % 6) * -1.7}s`,
                    "--s": `${3 + (i % 3)}px`,
                  } as React.CSSProperties
                }
              />
            ))}
          </span>
        </div>
        <div className="cap-hero__inner">
          <p className="eyebrow" data-reveal>
            Sitemap
          </p>
          <h1 data-reveal>
            Everything on{" "}
            <span className="home-accent">RestiQ Health</span>, in one place.
          </h1>
          <p className="cap-hero__lede" data-reveal>
            A complete map of the RestiQ Health website. Jump directly to any
            page or section across our capabilities, leadership, and federal
            registrations.
          </p>
        </div>
      </section>

      <section className="home-section cap-body sm-section">
        <div className="home-caps__bg" aria-hidden="true">
          <span className="home-caps__orb home-caps__orb--1" />
          <span className="home-caps__orb home-caps__orb--2" />
        </div>
        <div className="home-section__inner sm-inner">
          <div className="sm-grid">
            {sections.map((s, i) => (
              <article
                key={s.title}
                className="sm-card"
                data-reveal
                style={{ "--delay": `${(i % 3) * 0.1}s` } as React.CSSProperties}
              >
                <span className="sm-card__num" aria-hidden="true">
                  {s.eyebrow}
                </span>
                <Link href={s.href} className="sm-card__title">
                  {s.title}
                  <span className="sm-card__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
                <p className="sm-card__desc">{s.desc}</p>
                <ul className="sm-card__links">
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
                <span className="cap-area__bar" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cap-cta">
        <div className="cap-cta__inner" data-reveal>
          <h2>Didn&rsquo;t find what you need?</h2>
          <p>
            Reach the RestiQ Health team directly about teaming, contract
            vehicles, and clinical capability.
          </p>
          <div className="cap-cta__actions">
            <Link href="/contact" className="home-btn home-btn--primary">
              Contact Us
            </Link>
            <Link href="/" className="home-btn home-btn--ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
