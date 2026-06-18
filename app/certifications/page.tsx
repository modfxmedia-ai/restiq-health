"use client";

import Link from "next/link";
import { useEffect } from "react";

const statusCards = [
  {
    label: "SAM.gov",
    value: "ACTIVE",
    note: "Confirmed May 22, 2026",
    state: "active",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "SDVOSB",
    value: "ACTIVE",
    note: "Service-disabled veteran-owned",
    state: "active",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
        <path d="M12 8v4l2.5 1.5" />
      </svg>
    ),
  },
  {
    label: "CAGE Code",
    value: "ACTIVE",
    note: "DLA registered",
    state: "active",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
];

const registrations = [
  { label: "SAM.gov status", value: "ACTIVE \u00b7 confirmed May 22, 2026" },
  { label: "UEI", value: "H42NZYR19ML6" },
  { label: "CAGE code", value: "Active" },
  { label: "EIN", value: "42-2075890" },
  { label: "State of formation", value: "Virginia" },
  {
    label: "Address",
    value: "Suffolk, VA \u2014 full mailing address available upon request",
  },
];

const socioeconomic = [
  {
    label: "SDVOSB",
    value:
      "Service-Disabled Veteran-Owned Small Business \u2014 veteran-owned and controlled by service-disabled U.S. Navy veterans.",
  },
  {
    label: "Small business",
    value: "Qualifies under all primary NAICS size standards",
  },
  {
    label: "Veteran-owned",
    value: "Veteran-owned (service-disabled veteran owners)",
  },
];

const naics = [
  { code: "621210", label: "Offices of Dentists", primary: true },
  { code: "621399", label: "Offices of All Other Miscellaneous Health Practitioners" },
  { code: "339116", label: "Dental Laboratories" },
  {
    code: "541611",
    label: "Administrative Management & General Management Consulting Services",
  },
  { code: "621498", label: "All Other Outpatient Care Centers" },
];

export default function CertificationsPage() {
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
      { threshold: 0.15 }
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
            Certifications &amp; Registrations
          </p>
          <h1 data-reveal>
            Federal registration status and{" "}
            <span className="home-accent">
              qualifying socioeconomic categories.
            </span>
          </h1>
          <p className="cap-hero__lede" data-reveal>
            RestiQ Health, LLC maintains an active SAM.gov registration and an
            active CAGE code, and is a Service-Disabled Veteran-Owned Small
            Business. All federal identifiers and NAICS codes are current as of
            this site&rsquo;s last revision.
          </p>
        </div>
      </section>

      <section className="cert-status">
        <div className="cert-status__inner">
          {statusCards.map((c, i) => (
            <div
              key={c.label}
              className={`cert-status__card cert-status__card--${c.state}`}
              data-reveal
              style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <span className="cert-status__icon">{c.icon}</span>
              <div className="cert-status__body">
                <span className="cert-status__label">{c.label}</span>
                <span className="cert-status__value">
                  <span className="cert-status__dot" aria-hidden="true" />
                  {c.value}
                </span>
                <span className="cert-status__note">{c.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section cap-body">
        <div className="home-section__inner cap-layout">
          <div className="cap-areas">
            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">Federal Registrations</h3>
              <dl className="cap-data">
                {registrations.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd>{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">Socioeconomic Status</h3>
              <dl className="cap-data">
                {socioeconomic.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <aside className="cap-aside">
            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">NAICS Codes</h3>
              <ul className="cap-naics cert-naics">
                {naics.map((n, i) => (
                  <li
                    key={n.code}
                    style={
                      { "--delay": `${0.15 + i * 0.1}s` } as React.CSSProperties
                    }
                  >
                    <span className="cert-naics__code">{n.code}</span>
                    <span className="cap-naics__label">
                      {n.label}
                      {n.primary && (
                        <em className="cert-naics__primary"> (primary)</em>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/assets/RestiQ_Capabilities_Statement.pdf"
              target="_blank"
              rel="noopener"
              className="home-btn home-btn--primary cert-download"
              data-reveal
            >
              Download Capabilities Statement (PDF)
            </a>

            <div className="cap-card wws-callout" data-reveal>
              <span className="wws-callout__tag">Verification</span>
              <p>
                <strong>Verification.</strong> Federal procurement officials can
                verify SAM.gov status and UEI directly at{" "}
                <a
                  href="https://sam.gov"
                  target="_blank"
                  rel="noopener"
                  className="cert-link"
                >
                  sam.gov
                </a>
                . CAGE code is active and registered with DLA.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="cap-cta">
        <div className="cap-cta__inner" data-reveal>
          <h2>Registered, qualified, and ready to contract.</h2>
          <p>
            Verify our status on SAM.gov or reach out to discuss teaming and
            contract vehicles.
          </p>
          <div className="cap-cta__actions">
            <Link href="/contact" className="home-btn home-btn--primary">
              Contact Us
            </Link>
            <Link href="/capabilities" className="home-btn home-btn--ghost">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
