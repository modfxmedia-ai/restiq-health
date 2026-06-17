"use client";

import Link from "next/link";
import { useEffect } from "react";

const buyers = [
  {
    title: "Tricare",
    body: "RestiQ is built to participate in Tricare regional networks (Humana Government Business in Tricare East and TriWest in Tricare West) for medical-benefit reimbursement of oral appliance therapy, home sleep apnea testing, and associated evaluation and management services for active-duty service members, retirees, and dependents.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "VA Community Care Network",
    body: "Under the MISSION Act, veterans can access dental sleep medicine services through community providers when VA access standards are not met. RestiQ\u2019s credentialing and clinical model is designed to plug into CCN referrals for OSA evaluation, oral appliance therapy, and ongoing compliance management.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
      </svg>
    ),
  },
  {
    title: "Defense Health Agency (DHA)",
    body: "DHA consolidates the medical missions of the Army, Navy, and Air Force. RestiQ is positioned to support DHA-level program needs in sleep readiness, OSA care pathway design, and oral appliance therapy as a deployability-preserving alternative to CPAP.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
        <path d="M12 8v7M8.5 11.5h7" />
      </svg>
    ),
  },
  {
    title: "Military Treatment Facilities (MTFs)",
    body: "RestiQ can deliver dental sleep medicine services in support of MTF dental and sleep clinics \u2014 either as a referral-receiving community provider or, where appropriate, through embedded service delivery and program management arrangements.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Federal employee health benefits",
    body: "RestiQ\u2019s billing infrastructure supports federal employee health benefit plans (FEHB) carriers for civilian federal workforce sleep medicine needs.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14h5" />
      </svg>
    ),
  },
  {
    title: "Federal contracting community",
    body: "RestiQ is available as a subcontractor and teaming partner to federal prime contractors with healthcare scopes that require SDVOSB participation, dental sleep medicine clinical capability, or federal payer billing infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7" cy="9" r="3" />
        <circle cx="17" cy="9" r="3" />
        <path d="M2 20c0-2.8 2.2-5 5-5M22 20c0-2.8-2.2-5-5-5" />
      </svg>
    ),
  },
];

const readinessParas = [
  "Obstructive sleep apnea is one of the most prevalent and most under-treated conditions in the active-duty force. It contributes directly to fatigue, cognitive impairment, hypertension, medical disqualification, and disability claims that the Department of Defense funds for decades after separation.",
  "CPAP is the dominant treatment but is operationally impractical in many deployed environments and produces compliance rates in military populations well below what readiness requires. Untreated OSA in service members has been associated with reduced deployability, elevated medical separation risk, and substantial downstream VA disability cost.",
  "Oral appliance therapy is endorsed by the American Academy of Sleep Medicine and the American Academy of Dental Sleep Medicine as a first-line alternative for mild and moderate OSA and for CPAP-intolerant patients. It is portable, quiet, requires no electrical power, and consistently produces higher long-term compliance than CPAP \u2014 making it materially better suited to the operational and deployment environment.",
];

const populations = [
  { code: "ADSM", label: "Active duty service members across all branches" },
  { code: "DEP", label: "Military dependents (Tricare-eligible)" },
  { code: "RET", label: "Military retirees" },
  { code: "VET", label: "Veterans (VA / CCN beneficiaries)" },
  { code: "FEHB", label: "Civilian federal employees" },
];

export default function WhoWeServePage() {
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
            Who We Serve
          </p>
          <h1 data-reveal>
            Federal health buyers and the{" "}
            <span className="home-accent">populations they cover.</span>
          </h1>
          <p className="cap-hero__lede" data-reveal>
            RestiQ Health is structured to serve the agencies, contract
            vehicles, and beneficiary populations responsible for the medical
            readiness of the U.S. military and its dependents and retirees.
          </p>
        </div>
      </section>

      <section className="home-section cap-body">
        <div className="home-section__inner">
          <div className="home-section__head" data-reveal>
            <p className="eyebrow">Buyers &amp; Contract Vehicles</p>
            <h2 className="wws-h2">
              Built to plug into the federal health enterprise.
            </h2>
          </div>

          <div className="wws-timeline">
            <span className="wws-timeline__spine" aria-hidden="true">
              <span className="wws-timeline__pulse" />
            </span>
            {buyers.map((b, i) => (
              <article
                key={b.title}
                className="wws-tl-item"
                data-reveal
                style={{ "--delay": `${(i % 2) * 0.08}s` } as React.CSSProperties}
              >
                <span className="wws-tl-node" aria-hidden="true">
                  <span className="wws-tl-node__ring" />
                  {b.icon}
                </span>
                <div className="wws-tl-card">
                  <span className="wws-tl-card__index" aria-hidden="true">
                    {`0${i + 1}`}
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                  <span className="cap-area__bar" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--mid wws-readiness">
        <div className="home-caps__bg" aria-hidden="true">
          <span className="home-caps__orb home-caps__orb--1" />
          <span className="home-caps__orb home-caps__orb--2" />
        </div>
        <div className="home-section__inner cap-layout">
          <div className="cap-areas wws-prose" data-reveal>
            <p className="eyebrow">The Readiness Case</p>
            <h2 className="wws-h2">
              The readiness case for oral appliance therapy.
            </h2>
            {readinessParas.map((para, i) => (
              <p key={i} className="cap-area__p">
                {para}
              </p>
            ))}
          </div>

          <aside className="cap-aside">
            <div className="cap-card wws-callout" data-reveal>
              <span className="wws-callout__tag">Mission Alignment</span>
              <p>
                <strong>RestiQ&rsquo;s mission alignment.</strong> Deliver a
                clinically validated, federally billable, AADSM-compliant oral
                appliance therapy capability to the populations the DoD and VA
                actually serve &mdash; preserving deployability, reducing
                downstream disability cost, and protecting force health.
              </p>
            </div>

            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">Populations served</h3>
              <ul className="cap-naics wws-pops">
                {populations.map((p) => (
                  <li key={p.code}>
                    <span className="wws-pop__code">{p.code}</span>
                    <span className="cap-naics__label">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="cap-cta">
        <div className="cap-cta__inner" data-reveal>
          <h2>Serving a population we&rsquo;re built for.</h2>
          <p>
            From Tricare and VA CCN to DHA programs and prime-contractor
            teaming &mdash; let&rsquo;s align RestiQ to your requirement.
          </p>
          <div className="cap-cta__actions">
            <Link href="/contact" className="home-btn home-btn--primary">
              Book Consultation
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
