"use client";

import Link from "next/link";
import { useEffect } from "react";

const capabilityAreas = [
  {
    title: "Dental sleep medicine clinical delivery",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    paras: [
      "Oral appliance therapy (OAT) is the core clinical service. RestiQ\u2019s methodology follows the American Academy of Dental Sleep Medicine (AADSM) standard of care: screening, diagnostic confirmation, custom appliance fabrication, structured titration, and longitudinal compliance management. Appliance platforms in active rotation include ResMed Narval, SomnoMed Avant and Herbst Advance, and ProSomnus EVO and IA. Selection is patient-anatomy driven and not vendor-driven.",
      "The clinical pathway is designed to function as a non-CPAP alternative for active duty service members, retirees, and veterans \u2014 a population in which CPAP compliance is well documented as insufficient for readiness purposes.",
    ],
  },
  {
    title: "Home sleep apnea testing (HSAT) coordination",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12h4l2 6 4-12 2 6h6" />
      </svg>
    ),
    paras: [
      "RestiQ coordinates HSAT delivery through established vendor relationships and physician-ordered protocols. Devices are shipped to the patient, monitored remotely, and the data is returned to an interpreting physician for diagnosis. This model is the dominant Tricare- and VA-acceptable diagnostic pathway and replaces the friction of in-lab polysomnography for the majority of OSA cases.",
    ],
  },
  {
    title: "Medical billing infrastructure",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14h5" />
      </svg>
    ),
    paras: [
      "Dental sleep medicine is reimbursed under medical \u2014 not dental \u2014 benefits. RestiQ operates with documented competency in the CPT and HCPCS codes that drive the workflow:",
    ],
    codes: [
      { code: "E0486", label: "Custom-fabricated oral appliance for obstructive sleep apnea." },
      { code: "95800 / 95806", label: "Home sleep apnea testing." },
      { code: "99203 / 99213", label: "New and established patient evaluation and management." },
    ],
    after:
      "Claims operations include eligibility verification, prior authorization handling, denial management, and documentation packaging that meets payer audit standards.",
  },
  {
    title: "Credentialing operations",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    paras: [
      "Clinician credentialing is the gate to every federal payer relationship. RestiQ maintains an internal credentialing function with experience executing PECOS, CAQH, NPI, and payer-specific enrollment workflows for Tricare regional contractors, VA Community Care Network, and federal employee health benefit plans.",
    ],
  },
  {
    title: "Tricare, VA, and DoD payer expertise",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    paras: [
      "RestiQ\u2019s capability set is built specifically for the federal payer environment. That includes a working understanding of Tricare regional contractor processes (Humana Government Business and TriWest), the VA Community Care Network referral workflow under the MISSION Act, DHA contracting pathways, and the documentation standards required for federal employee health benefit reimbursement.",
    ],
  },
  {
    title: "Beyond clinical: program management and consulting",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h10" />
      </svg>
    ),
    paras: [
      "Under NAICS 541611, RestiQ delivers administrative and program management consulting to military health system stakeholders evaluating dental sleep medicine integration, oral appliance therapy program design, and OSA readiness program development.",
    ],
  },
];

const entityData = [
  { label: "Legal name", value: "RestiQ Health, LLC" },
  { label: "UEI", value: "H42NZYR19ML6" },
  { label: "CAGE code", value: "20HH3" },
  { label: "EIN", value: "42-2075890" },
  { label: "SAM.gov", value: "ACTIVE (confirmed May 22, 2026)" },
  { label: "SDVOSB", value: "Service-Disabled Veteran-Owned Small Business" },
  { label: "State of formation", value: "Virginia" },
  { label: "Address", value: "Suffolk, VA \u2014 full mailing address available upon request" },
];

const naics = [
  { code: "621210", label: "Offices of Dentists", primary: true },
  { code: "621399", label: "Offices of All Other Misc. Health Practitioners" },
  { code: "339116", label: "Dental Laboratories" },
  { code: "541611", label: "Administrative Mgmt & General Mgmt Consulting" },
  { code: "621498", label: "All Other Outpatient Care Centers" },
];

const pillars = [
  "Clinical delivery",
  "Billing infrastructure",
  "Federal payer expertise",
];

export default function CapabilitiesPage() {
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
            Capabilities
          </p>
          <h1 data-reveal>
            Clinical delivery, billing infrastructure, and federal payer
            expertise <span className="home-accent">&mdash; engineered together.</span>
          </h1>
          <p className="cap-hero__lede" data-reveal>
            RestiQ Health combines a credentialed dental sleep medicine clinical
            model with the credentialing, billing, and compliance operations
            required to operate at scale inside Tricare, the VA Community Care
            Network, and Defense Health Agency contract vehicles.
          </p>

          <div className="cap-hero__pillars" data-reveal>
            {pillars.map((p, i) => (
              <span
                key={p}
                className="cap-pillar"
                style={{ "--delay": `${0.2 + i * 0.12}s` } as React.CSSProperties}
              >
                <span className="cap-pillar__dot" aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section cap-body">
        <div className="home-section__inner cap-layout">
          <div className="cap-areas">
            {capabilityAreas.map((area, i) => (
              <article
                key={area.title}
                className="cap-area"
                data-reveal
                style={{ "--delay": `${(i % 2) * 0.08}s` } as React.CSSProperties}
              >
                <div className="cap-area__head">
                  <span className="cap-area__icon">{area.icon}</span>
                  <span className="cap-area__index">{`0${i + 1}`}</span>
                </div>
                <h2>{area.title}</h2>
                {area.paras.map((para, j) => (
                  <p key={j} className="cap-area__p">
                    {para}
                  </p>
                ))}

                {area.codes && (
                  <ul className="cap-codes">
                    {area.codes.map((c) => (
                      <li key={c.code} className="cap-code">
                        <span className="cap-code__tag">{c.code}</span>
                        <span className="cap-code__label">{c.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {area.after && <p className="cap-area__p">{area.after}</p>}

                <span className="cap-area__bar" aria-hidden="true" />
              </article>
            ))}
          </div>

          <aside className="cap-aside">
            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">Entity Data Block</h3>
              <dl className="cap-data">
                {entityData.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">NAICS Codes</h3>
              <ul className="cap-naics">
                {naics.map((n) => (
                  <li key={n.code}>
                    <span className="cap-naics__code">{n.code}</span>
                    <span className="cap-naics__label">
                      {n.label}
                      {n.primary && <em> (primary)</em>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              className="cap-download"
              href="/assets/RestiQ_Capabilities_Statement.pdf"
              target="_blank"
              rel="noopener"
            >
              Download Capabilities Statement (PDF)
              <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </aside>
        </div>
      </section>

      <section className="cap-cta">
        <div className="cap-cta__inner" data-reveal>
          <h2>Ready to discuss a contract or capability?</h2>
          <p>
            We engineer clinical delivery and federal payer operations as one
            integrated model. Let&rsquo;s talk about your requirement.
          </p>
          <div className="cap-cta__actions">
            <Link href="/contact" className="home-btn home-btn--primary">
              Book Consultation
            </Link>
            <Link href="/who-we-serve" className="home-btn home-btn--ghost">
              Who We Serve
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
