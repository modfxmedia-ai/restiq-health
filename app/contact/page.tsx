"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const poc = [
  { label: "Name", value: "Available upon request" },
  { label: "Role", value: "Owner / Operational Control" },
  { label: "Email", value: "info@restiqhealth.com", email: true },
  { label: "Phone", value: "Available upon request" },
  {
    label: "Address",
    value: "Suffolk, Virginia \u2014 full mailing address available upon request",
  },
];

const identifiers = [
  { label: "Legal name", value: "RestiQ Health, LLC" },
  { label: "UEI", value: "H42NZYR19ML6" },
  { label: "CAGE", value: "20HH3" },
  { label: "Primary NAICS", value: "621210 \u00b7 Offices of Dentists" },
  { label: "SAM", value: "Active (May 22, 2026)" },
];

const topics = [
  "Federal procurement / contracting",
  "Subcontractor / teaming opportunity",
  "Clinical pilot discussion",
  "Small Business Office engagement",
  "Other",
];

const contactMethods = [
  {
    label: "Email",
    value: "info@restiqhealth.com",
    href: "mailto:info@restiqhealth.com",
    note: "Primary point of contact",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Suffolk, Virginia",
    note: "Hampton Roads region",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "Available upon request",
    note: "Federal & teaming inquiries",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 6c0 1-1 2-2 2A16 16 0 0 1 3 5c0-1 1-2 2-1z" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Fri · 9:00 AM – 5:00 PM ET",
    note: "Eastern Time",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const org = String(data.get("organization") || "");
    const email = String(data.get("email") || "");
    const role = String(data.get("role") || "");
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`RestiQ inquiry: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org}\nEmail: ${email}\nRole: ${role}\nTopic: ${topic}\n\n${message}`
    );
    window.location.href = `mailto:info@restiqhealth.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
            Contact
          </p>
          <h1 data-reveal>
            Reach RestiQ Health for{" "}
            <span className="home-accent">
              procurement, teaming, or pilot discussions.
            </span>
          </h1>
          <p className="cap-hero__lede" data-reveal>
            For federal procurement inquiries, Small Business Office engagement,
            subcontractor and teaming partner conversations, and clinical pilot
            discussions.
          </p>
        </div>
      </section>

      <section className="home-section cap-body">
        <div className="home-section__inner ct-layout">
          <aside className="ct-aside">
            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">Point of Contact</h3>
              <dl className="cap-data">
                {poc.map((p) => (
                  <div key={p.label}>
                    <dt>{p.label}</dt>
                    <dd>
                      {p.email ? (
                        <a href={`mailto:${p.value}`} className="cert-link">
                          {p.value}
                        </a>
                      ) : (
                        p.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">Entity Identifiers</h3>
              <dl className="cap-data">
                {identifiers.map((p) => (
                  <div key={p.label}>
                    <dt>{p.label}</dt>
                    <dd>{p.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <div className="ct-form-wrap" data-reveal>
            <div className="ct-form-glow" aria-hidden="true" />
            {sent ? (
              <div className="ct-success">
                <span className="ct-success__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="34" height="34">
                    <path
                      d="M5 12.5l4 4L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3>Your email client is opening.</h3>
                <p>
                  If nothing happened, email us directly at{" "}
                  <a href="mailto:info@restiqhealth.com" className="cert-link">
                    info@restiqhealth.com
                  </a>
                  .
                </p>
                <button
                  type="button"
                  className="home-btn home-btn--ghost"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit} noValidate>
                <div className="ct-form__grid">
                  <div className="ct-row">
                    <label htmlFor="f-name">Name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="ct-row">
                    <label htmlFor="f-org">Organization</label>
                    <input
                      id="f-org"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                    />
                  </div>
                </div>
                <div className="ct-form__grid">
                  <div className="ct-row">
                    <label htmlFor="f-email">Email</label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="ct-row">
                    <label htmlFor="f-role">Role / Title</label>
                    <input id="f-role" name="role" type="text" />
                  </div>
                </div>
                <div className="ct-row">
                  <label htmlFor="f-topic">Topic</label>
                  <select id="f-topic" name="topic" defaultValue={topics[0]}>
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="ct-row">
                  <label htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" name="message" rows={5} required />
                </div>
                <button
                  className="home-btn home-btn--primary ct-submit"
                  type="submit"
                >
                  Send message
                </button>
                <p className="ct-note">
                  This form opens your email client addressed to RestiQ Health.
                  For immediate contact, email{" "}
                  <a href="mailto:info@restiqhealth.com" className="cert-link">
                    info@restiqhealth.com
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="home-section cap-body ct-office-section">
        <div className="home-section__inner">
          <div className="home-section__head home-section__head--center" data-reveal>
            <p className="eyebrow">Our Office</p>
            <h2>Based in Suffolk, Virginia.</h2>
            <p className="home-section__sub">
              Serving federal health partners across the Hampton Roads region
              and the wider military health system.
            </p>
          </div>

          <div className="ct-office">
            <div className="ct-office__info" data-reveal>
              {contactMethods.map((m) => (
                <div key={m.label} className="ct-method">
                  <span className="ct-method__icon" aria-hidden="true">
                    {m.icon}
                  </span>
                  <div className="ct-method__body">
                    <span className="ct-method__label">{m.label}</span>
                    {m.href ? (
                      <a href={m.href} className="ct-method__value">
                        {m.value}
                      </a>
                    ) : (
                      <span className="ct-method__value">{m.value}</span>
                    )}
                    {m.note ? (
                      <span className="ct-method__note">{m.note}</span>
                    ) : null}
                  </div>
                </div>
              ))}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Suffolk%2C+Virginia"
                target="_blank"
                rel="noopener noreferrer"
                className="home-btn home-btn--ghost ct-office__directions"
              >
                Get directions ↗
              </a>
            </div>

            <div className="ct-map" data-reveal>
              <span className="ct-map__frame" aria-hidden="true" />
              <iframe
                title="RestiQ Health — Suffolk, Virginia"
                className="ct-map__embed"
                src="https://www.google.com/maps?q=Suffolk,+Virginia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="ct-map__pin" aria-hidden="true">
                <span className="ct-map__pin-dot" />
                <span className="ct-map__pin-label">RestiQ Health</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cap-cta">
        <div className="cap-cta__inner" data-reveal>
          <h2>Let&rsquo;s build the federal sleep readiness capability together.</h2>
          <p>
            Prime contractors, Small Business Offices, and clinical partners are
            welcome to reach out.
          </p>
          <div className="cap-cta__actions">
            <a
              href="mailto:info@restiqhealth.com"
              className="home-btn home-btn--primary"
            >
              Email RestiQ Health
            </a>
            <Link href="/capabilities" className="home-btn home-btn--ghost">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
