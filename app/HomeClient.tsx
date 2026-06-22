"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  return (
    <span>
      {to}
      {suffix}
    </span>
  );
}

const IconSleep = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const IconShield = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const IconPulse = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 12h4l2 6 4-12 2 6h6" />
  </svg>
);

const capabilities = [
  {
    title: "Dental Sleep Medicine",
    body: "OAT as a non-CPAP alternative, AADSM-aligned protocols, and ResMed, SomnoMed, and ProSomnus platform compatibility.",
    icon: IconSleep,
  },
  {
    title: "Federal Payer Infrastructure",
    body: "Tricare, VA CCN, and DHA-aligned workflows with CPT coding for E0486, 95800, 95806, 99203, and 99213 plus credentialing operations.",
    icon: IconShield,
  },
  {
    title: "Readiness-Aligned Delivery",
    body: "Care pathways for active duty populations, HSAT coordination, telehealth support, and military health system data requirement alignment.",
    icon: IconPulse,
  },
];

const serviceIcons = [
  <svg key="a" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M7 20h10M3 9h18" />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>,
  <svg key="d" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="14" height="10" rx="2" />
    <path d="M17 9l4-2v8l-4-2" />
  </svg>,
  <svg key="e" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 12h4l2 6 4-12 2 6h6" />
  </svg>,
  <svg key="f" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
  </svg>,
];


const services = [
  {
    title: "Oral Appliance Therapy",
    body: "Custom-fitted, AADSM-aligned oral appliances as an evidence-based alternative to CPAP.",
  },
  {
    title: "Home Sleep Apnea Testing",
    body: "Coordination of HSAT to streamline diagnosis and accelerate time to treatment.",
  },
  {
    title: "Credentialing & Billing",
    body: "Medical billing and credentialing built for Tricare, VA CCN, and DHA payer rules.",
  },
  {
    title: "Telehealth Support",
    body: "Remote consultation and follow-up pathways aligned to military health workflows.",
  },
  {
    title: "Readiness Coordination",
    body: "Care designed around deployability, force health protection, and active-duty needs.",
  },
  {
    title: "Federal Contracting",
    body: "SDVOSB contracting support with full SAM.gov registration and NAICS coverage.",
  },
];

const whyChoose = [
  {
    title: "Veteran-Owned",
    body: "Controlled by U.S. Navy veterans with day-to-day operational control of the company.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Clinically Credentialed",
    body: "AADSM clinician leadership and evidence-based protocols at the core of delivery.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v6M9 6h6" />
        <path d="M6 9v7a6 6 0 0 0 12 0V9" />
        <circle cx="12" cy="16" r="2.2" />
      </svg>
    ),
  },
  {
    title: "Federal-Ready",
    body: "SAM.gov active, UEI assigned, and aligned to Tricare, VA CCN, and DHA requirements.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Readiness-Focused",
    body: "Built to improve deployability and force health protection outcomes, not just compliance.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12h4l2 5 4-12 2 7h6" />
      </svg>
    ),
  },
];

const coverage = [
  { label: "Clinical delivery", value: 96 },
  { label: "Federal payer operations", value: 100 },
  { label: "Readiness coordination", value: 90 },
];

const facts = [
  { label: "UEI", value: "H42NZYR19ML6" },
  { label: "HQ", value: "Suffolk, VA" },
  { label: "NAICS", value: "621210" },
];

const metrics = [
  { value: 3, suffix: "", label: "Integrated lines of effort" },
  { value: 5, suffix: "", label: "NAICS codes registered" },
  { value: 2, suffix: "", label: "Veteran owners" },
  { value: 3, suffix: "", label: "Federal payer networks aligned" },
];

const careSteps = [
  {
    title: "Screen & Refer",
    body: "Identify at-risk service members and route them into the pathway.",
  },
  {
    title: "Home Sleep Test",
    body: "HSAT coordination for fast, accessible diagnosis.",
  },
  {
    title: "Oral Appliance Fitting",
    body: "AADSM-aligned custom OAT — portable and requires no power.",
  },
  {
    title: "Telehealth Follow-up",
    body: "Remote titration and adherence monitoring.",
  },
  {
    title: "Readiness Restored",
    body: "Improved deployability and force health protection.",
  },
];

const readinessStats: {
  label: string;
  value: number;
  dir: "up" | "down";
}[] = [
  { label: "Cognitive performance", value: 30, dir: "down" },
  { label: "Cardiovascular risk", value: 40, dir: "up" },
  { label: "Long-term OAT adherence", value: 70, dir: "up" },
];

const leaders = [
  {
    name: "Veteran Owner",
    role: "OWNER",
    initials: "VO",
    bio: "U.S. Navy veteran. Operational control of the company.",
  },
  {
    name: "Veteran Owner",
    role: "OWNER",
    initials: "VO",
    bio: "Retired Rear Admiral, U.S. Navy. Operational control of the company.",
  },
  {
    name: "Clinical Member",
    role: "MEMBER",
    initials: "CM",
    bio: "AADSM clinician; founder of the affiliated commercial dental sleep practice.",
  },
];

export default function Home() {
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
    <main className="home">
      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden="true">
          <span className="home-hero__media" />
          <span className="home-hero__overlay" />
          <span className="home-hero__glow home-hero__glow--1" />
          <span className="home-hero__glow home-hero__glow--2" />
          <span className="home-hero__grid" />
        </div>

        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow">RestiQ Health, LLC · Suffolk, Virginia</p>
            <h1>
              Dental sleep medicine for the{" "}
              <span className="home-accent">
                military and federal health enterprise.
              </span>
            </h1>
            <p className="home-lede">
              RestiQ Health is a Service-Disabled Veteran-Owned Small Business
              built to deliver evidence-based oral appliance therapy,
              home sleep apnea testing coordination, and the medical billing and
              credentialing infrastructure required to operate inside Tricare,
              the VA Community Care Network, and the Defense Health Agency.
            </p>

            <div className="home-hero__actions">
              <Link href="/contact" className="home-btn home-btn--primary">
                Book Consultation
              </Link>
              <Link href="/capabilities" className="home-btn home-btn--ghost">
                View Capabilities
              </Link>
            </div>

            <div className="home-badges">
              <span className="home-badge home-badge--gold">SAM.gov ACTIVE</span>
              <span className="home-badge">SDVOSB</span>
              <span className="home-badge">Virginia LLC</span>
            </div>
          </div>

          <aside className="home-viz" aria-label="RestiQ Health snapshot">
            <div className="home-viz__head">
              <p className="eyebrow">At a Glance</p>
              <span className="home-viz__live">
                <span className="home-viz__pulse" aria-hidden="true" />
                SAM.gov Active
              </span>
            </div>

            <div className="home-viz__chart">
              <div className="home-viz__chart-label">
                <span>Payer-aligned delivery</span>
                <strong>Tricare · VA CCN · DHA</strong>
              </div>
              <svg
                viewBox="0 0 320 110"
                preserveAspectRatio="none"
                className="home-spark"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(70,180,255,0.38)" />
                    <stop offset="100%" stopColor="rgba(70,180,255,0)" />
                  </linearGradient>
                </defs>
                <path
                  className="home-spark__area"
                  d="M0,86 L40,78 L80,84 L120,58 L160,64 L200,40 L240,46 L280,22 L320,30 L320,110 L0,110 Z"
                  fill="url(#sparkFill)"
                />
                <path
                  className="home-spark__line"
                  d="M0,86 L40,78 L80,84 L120,58 L160,64 L200,40 L240,46 L280,22 L320,30"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="home-viz__grid">
              <div className="home-viz__gauge">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle className="home-gauge__track" cx="60" cy="60" r="50" />
                  <circle className="home-gauge__value" cx="60" cy="60" r="50" />
                </svg>
                <div className="home-gauge__center">
                  <strong>SDVOSB</strong>
                  <span>Veteran-owned</span>
                </div>
              </div>

              <div className="home-viz__bars">
                {coverage.map((item, i) => (
                  <div
                    key={item.label}
                    className="home-bar"
                    style={
                      {
                        "--bar": `${item.value}%`,
                        "--delay": `${0.2 + i * 0.18}s`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="home-bar__label">{item.label}</span>
                    <span className="home-bar__track">
                      <span className="home-bar__fill" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <dl className="home-viz__facts">
              {facts.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="home-metrics">
        <div className="home-metrics__inner">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="home-metric"
              data-reveal
              style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <span className="home-metric__value">
                <Counter to={m.value} suffix={m.suffix} />
              </span>
              <span className="home-metric__label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities section hidden for now
      <section className="home-section home-section--mid home-caps">
        <div className="home-caps__bg" aria-hidden="true">
          <span className="home-caps__orb home-caps__orb--1" />
          <span className="home-caps__orb home-caps__orb--2" />
          <svg className="home-caps__wave" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0,120 C200,60 400,160 600,110 C800,60 1000,150 1200,100" />
            <path d="M0,150 C220,90 420,180 620,130 C820,80 1010,170 1200,120" />
          </svg>
        </div>
        <div className="home-section__inner">
          <div className="home-section__head" data-reveal>
            <p className="eyebrow">Core Capabilities</p>
            <h2>Three lines of effort, one integrated delivery model.</h2>
          </div>

          <div className="home-grid home-grid--3 home-caps__grid">
            <span className="home-caps__connect" aria-hidden="true">
              <span className="home-caps__line">
                <span className="home-caps__spark" />
              </span>
              <span className="home-caps__line">
                <span
                  className="home-caps__spark"
                  style={{ animationDelay: "1.1s" }}
                />
              </span>
            </span>
            {capabilities.map((card, i) => (
              <article
                key={card.title}
                className="home-card home-card--cap"
                data-reveal
                style={{ "--delay": `${i * 0.12}s` } as React.CSSProperties}
              >
                <span className="home-card__index">{`0${i + 1}`}</span>
                <span className="home-card__icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="home-card__bar" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      <section className="home-section home-section--light">
        <div className="home-section__inner">
          <div className="home-section__head home-section__head--center" data-reveal>
            <p className="eyebrow">What We Deliver</p>
            <h2>Comprehensive capability for the federal health enterprise.</h2>
            <p className="home-section__sub">
              A single delivery model spanning clinical care, payer
              infrastructure, and readiness coordination.
            </p>
          </div>

          <div className="home-deliver">
            <div className="home-collage" data-reveal aria-hidden="true">
              <span className="home-collage__ring" />
              <span className="home-collage__dot home-collage__dot--1" />
              <span className="home-collage__dot home-collage__dot--2" />
              <figure className="home-collage__img home-collage__img--a">
                <Image
                  src="/images/get-sleep-study-at-home.webp"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 56vw, 280px"
                />
              </figure>
              <figure className="home-collage__img home-collage__img--b">
                <Image
                  src="/images/casestudy-healthcare.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 46vw, 230px"
                />
              </figure>
              <figure className="home-collage__img home-collage__img--c">
                <Image
                  src="/images/GL-DU-5383732-110124.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </figure>
              <span className="home-collage__badge">
                <span className="home-collage__badge-pulse" />
                Home Sleep Apnea Testing
              </span>
            </div>

            <div className="home-grid home-grid--2 home-deliver__cards">
              {services.map((card, i) => (
                <article
                  key={card.title}
                  className="home-card home-card--service"
                  data-reveal
                  style={
                    { "--delay": `${(i % 2) * 0.1}s` } as React.CSSProperties
                  }
                >
                  <span className="home-card__icon">{serviceIcons[i]}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <Link href="/capabilities" className="home-card__link">
                    Learn more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section--mid home-readiness">
        <div className="home-readiness__bg" aria-hidden="true">
          <span className="home-readiness__glow home-readiness__glow--1" />
          <span className="home-readiness__glow home-readiness__glow--2" />
        </div>

        <div className="home-section__inner home-readiness__top">
          <div className="home-readiness__copy" data-reveal>
            <p className="eyebrow">The Readiness Problem</p>
            <h2>Untreated sleep apnea is a force health protection problem.</h2>
            <p className="home-body">
              OSA reduces cognitive performance, increases medical
              disqualification risk, and erodes deployability. CPAP compliance
              alone is often insufficient for readiness outcomes across the
              force.
            </p>
            <p className="home-body">
              Oral appliance therapy is AADSM-supported, portable, requires no
              power, and demonstrates higher long-term compliance than CPAP for
              many eligible patients.
            </p>

            <div className="home-readiness__stats">
              {readinessStats.map((s, i) => (
                <div
                  key={s.label}
                  className="home-rstat"
                  style={
                    { "--delay": `${0.2 + i * 0.14}s` } as React.CSSProperties
                  }
                >
                  <div className="home-rstat__head">
                    <strong>
                      <Counter to={s.value} suffix="%" />
                    </strong>
                    <span
                      className={`home-rstat__dir home-rstat__dir--${s.dir}`}
                      aria-hidden="true"
                    >
                      {s.dir === "up" ? "▲" : "▼"}
                    </span>
                  </div>
                  <span className="home-rstat__label">{s.label}</span>
                  <div className="home-rstat__track">
                    <span
                      className={`home-rstat__fill home-rstat__fill--${s.dir}`}
                      style={{ "--w": `${s.value}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link href="/capabilities" className="home-textlink">
              Explore our capabilities →
            </Link>
          </div>

          <div className="home-readiness__media" data-reveal>
            <figure className="home-rimg home-rimg--main">
              <Image
                src="/images/readiness-anatomy.png"
                alt="Anatomical illustration of obstructed airway during sleep with cardiovascular strain"
                fill
                sizes="(max-width: 768px) 100vw, 540px"
              />
              <span className="home-rimg__scrim" aria-hidden="true" />
              <figcaption>Airway collapse &middot; systemic strain</figcaption>
            </figure>

            <figure className="home-rimg home-rimg--brain">
              <Image
                src="/images/readiness-cognitive.webp"
                alt="Illustration of the brain highlighting cognitive impact"
                fill
                sizes="(max-width: 768px) 50vw, 260px"
              />
              <span className="home-rimg__scrim" aria-hidden="true" />
              <figcaption>Cognitive load</figcaption>
            </figure>

            <figure className="home-rimg home-rimg--osa">
              <Image
                src="/images/readiness-osa.jpeg"
                alt="Service member asleep showing signs of obstructive sleep apnea"
                fill
                sizes="(max-width: 768px) 50vw, 260px"
              />
              <span className="home-rimg__scrim" aria-hidden="true" />
              <figcaption>Disrupted rest</figcaption>
            </figure>

            <div className="home-rimg__pulse" aria-hidden="true">
              <span className="home-rimg__pulse-label">Sleep cycle</span>
              <svg viewBox="0 0 220 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="rPulse" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A6E0FF" />
                    <stop offset="100%" stopColor="#46B4FF" />
                  </linearGradient>
                </defs>
                <path
                  className="home-rimg__pulse-line"
                  d="M0,30 L40,30 L52,12 L64,48 L76,30 L120,30 L132,18 L144,42 L156,30 L220,30"
                  fill="none"
                  stroke="url(#rPulse)"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="home-section__inner home-readiness__pathway">
          <div className="home-pathway home-pathway--row" data-reveal>
            <p className="eyebrow">Care Pathway</p>
            <ol className="home-pathway__list">
              {careSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="home-pathway__step"
                  style={
                    { "--delay": `${0.2 + i * 0.15}s` } as React.CSSProperties
                  }
                >
                  <span className="home-pathway__node">{i + 1}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="home-section__inner">
          <div className="home-section__head home-section__head--center" data-reveal>
            <p className="eyebrow">Leadership</p>
            <h2>Veteran-owned. Clinically credentialed.</h2>
          </div>

          <div className="home-grid home-grid--3">
            {leaders.map((leader, i) => (
              <article
                key={i}
                className="home-leader-card"
                data-reveal
                style={{ "--delay": `${i * 0.12}s` } as React.CSSProperties}
              >
                <div className="home-leader-card__top">
                  <span className="home-leader-card__avatar">
                    {leader.initials}
                  </span>
                  <span
                    className={`home-pill${
                      leader.role === "MEMBER" ? " home-pill--muted" : ""
                    }`}
                  >
                    {leader.role}
                  </span>
                </div>
                <h3>{leader.name}</h3>
                <p>{leader.bio}</p>
              </article>
            ))}
          </div>

          <p className="home-leaders__note" data-reveal>
            The controlling veteran-owners hold day-to-day operational control of
            RestiQ Health, LLC.{" "}
            <Link href="/leadership" className="home-textlink home-textlink--inline">
              Read full leadership bios →
            </Link>
          </p>
        </div>
      </section>

      <section className="home-section home-section--mid home-why">
        <div className="home-why__bg" aria-hidden="true">
          <span className="home-why__glow" />
          <span className="home-why__aurora home-why__aurora--1" />
          <span className="home-why__aurora home-why__aurora--2" />
          <span className="home-why__particles">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="home-why__particle"
                style={
                  {
                    "--x": `${(i * 53) % 100}%`,
                    "--d": `${11 + (i % 6) * 2.5}s`,
                    "--delay": `${(i % 7) * -1.9}s`,
                    "--s": `${2 + (i % 3)}px`,
                  } as React.CSSProperties
                }
              />
            ))}
          </span>
        </div>
        <div className="home-section__inner">
          <div className="home-section__head home-section__head--center" data-reveal>
            <p className="eyebrow">Why RestiQ Health</p>
            <h2>Mission-ready capability, grounded in clinical precision.</h2>
          </div>

          <div className="home-wheel" data-reveal>
            <div className="home-wheel__core" aria-hidden="true">
              <span className="home-wheel__ring home-wheel__ring--1" />
              <span className="home-wheel__ring home-wheel__ring--2" />
              <span className="home-wheel__ring home-wheel__ring--3" />
              <span className="home-wheel__hub">
                <span className="home-wheel__hub-pulse" />
                <span className="home-wheel__hub-label">RestiQ</span>
              </span>
              <svg className="home-wheel__spokes" viewBox="0 0 600 600" aria-hidden="true">
                <g className="home-wheel__spoke-group">
                  <line x1="300" y1="300" x2="120" y2="120" />
                  <line x1="300" y1="300" x2="480" y2="120" />
                  <line x1="300" y1="300" x2="120" y2="480" />
                  <line x1="300" y1="300" x2="480" y2="480" />
                </g>
              </svg>
            </div>

            {whyChoose.map((card, i) => (
              <article
                key={card.title}
                className={`home-wheel__node home-wheel__node--${i + 1}`}
                style={{ "--delay": `${0.2 + i * 0.14}s` } as React.CSSProperties}
              >
                <span className="home-wheel__node-icon">{card.icon}</span>
                <div className="home-wheel__node-body">
                  <span className="home-wheel__node-num">{`0${i + 1}`}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-map">
        <div className="home-map__bg" aria-hidden="true">
          <span className="home-map__glow home-map__glow--1" />
          <span className="home-map__glow home-map__glow--2" />
          <span className="home-map__grid" />
        </div>
        <div className="home-section__inner home-map__inner">
          <div className="home-map__intro" data-reveal>
            <p className="eyebrow">Our Footprint</p>
            <h2>
              Rooted in Virginia.{" "}
              <span className="home-accent">Built for federal reach.</span>
            </h2>
            <p className="home-body">
              RestiQ Health is headquartered in Suffolk, Virginia, with clinical
              delivery across four Hampton Roads and Richmond-area locations —
              positioned to serve Tricare, VA Community Care Network, DHA, and
              Military Treatment Facilities nationwide.
            </p>
            <ul className="home-map__legend">
              <li>
                <span className="home-map__legend-dot home-map__legend-dot--hq" />
                Headquarters — Suffolk, VA
              </li>
              <li>
                <span className="home-map__legend-dot home-map__legend-dot--clinic" />
                Clinical locations — Hampton Roads &amp; Richmond
              </li>
              <li>
                <span className="home-map__legend-dot home-map__legend-dot--reach" />
                Federal reach — Tricare · VA CCN · DHA · MTFs
              </li>
            </ul>
            <Link href="/who-we-serve" className="home-textlink">
              See who we serve →
            </Link>
          </div>

          <div className="home-map__stage" data-reveal>
            <svg
              className="home-map__svg"
              viewBox="0 0 520 440"
              role="img"
              aria-label="Map of RestiQ Health locations across Virginia with federal reach"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(70,180,255,0.45)" />
                  <stop offset="100%" stopColor="rgba(70,180,255,0)" />
                </radialGradient>
                <linearGradient id="mapRoute" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0A84FF" />
                  <stop offset="100%" stopColor="#4FC3FF" />
                </linearGradient>
                <linearGradient id="mapLand" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(79,195,255,0.30)" />
                  <stop offset="55%" stopColor="rgba(46,143,224,0.22)" />
                  <stop offset="100%" stopColor="rgba(10,132,255,0.14)" />
                </linearGradient>
              </defs>

              <ellipse
                cx="260"
                cy="250"
                rx="220"
                ry="140"
                fill="url(#mapGlow)"
              />

              {/* Virginia mainland silhouette */}
              <path
                className="home-map__land"
                fill="url(#mapLand)"
                d="M40,292 L110,250 L165,238 L205,210 L222,156 L250,168 L272,154 L296,170 L322,152 L344,170 L368,153 L396,172 L430,180 L416,206 L438,226 L412,250 L432,276 L406,300 L424,322 L398,336 L300,340 L190,343 L92,340 L64,332 Z"
              />

              {/* Eastern Shore peninsula */}
              <path
                className="home-map__land home-map__land--shore"
                fill="url(#mapLand)"
                d="M448,150 L472,156 L470,206 L452,250 L444,247 L458,206 L442,168 Z"
              />

              {/* state label */}
              <text className="home-map__state-label" x="262" y="248">
                VIRGINIA
              </text>

              {/* federal reach routes */}
              <g className="home-map__routes">
                <path
                  className="home-map__route"
                  d="M366,314 C250,200 150,140 60,70"
                />
                <path
                  className="home-map__route"
                  d="M366,314 C420,200 450,130 470,70"
                />
                <path
                  className="home-map__route"
                  d="M366,314 C420,350 440,372 460,390"
                />
                <path
                  className="home-map__route"
                  d="M366,314 C250,360 140,382 70,400"
                />
              </g>

              {/* reach endpoints */}
              <g className="home-map__reach">
                {[
                  [60, 70],
                  [470, 70],
                  [460, 390],
                  [70, 400],
                ].map(([x, y], i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="5"
                    className="home-map__reach-dot"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                ))}
              </g>

              {/* clinic pins */}
              <g className="home-map__pins">
                {[
                  {
                    x: 322,
                    y: 258,
                    name: "Richmond, VA",
                    label: "Clinical Location",
                    maps: "Richmond, Virginia",
                    lx: 322,
                    ly: 244,
                    anchor: "middle" as const,
                  },
                  {
                    x: 398,
                    y: 296,
                    name: "Newport News, VA",
                    label: "Clinical Location",
                    maps: "Newport News, Virginia",
                    lx: 408,
                    ly: 292,
                    anchor: "start" as const,
                  },
                  {
                    x: 384,
                    y: 322,
                    name: "Hampton Roads, VA",
                    label: "Clinical Location",
                    maps: "Hampton Roads, Virginia",
                    lx: 394,
                    ly: 334,
                    anchor: "start" as const,
                  },
                ].map((p, i) => (
                  <a
                    key={i}
                    className="home-map__pin home-map__link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      p.maps
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} — ${p.label}. Open in Google Maps`}
                    style={{ animationDelay: `${0.4 + i * 0.25}s` }}
                  >
                    <title>{`${p.name} · ${p.label}`}</title>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="16"
                      className="home-map__hit"
                    />
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="14"
                      className="home-map__pin-ring"
                      style={{ animationDelay: `${i * 0.7}s` }}
                    />
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="5.5"
                      className="home-map__pin-dot"
                    />
                    <text
                      className="home-map__city-label"
                      x={p.lx}
                      y={p.ly}
                      textAnchor={p.anchor}
                    >
                      {p.name.replace(", VA", "")}
                    </text>
                  </a>
                ))}
              </g>

              {/* HQ pin */}
              <a
                className="home-map__hq home-map__link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "Suffolk, Virginia"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Headquarters — Suffolk, VA. Open in Google Maps"
              >
                <title>Suffolk, VA · Headquarters</title>
                <circle cx="366" cy="314" r="26" className="home-map__hit" />
                <circle
                  cx="366"
                  cy="314"
                  r="22"
                  className="home-map__hq-ring"
                />
                <circle
                  cx="366"
                  cy="314"
                  r="22"
                  className="home-map__hq-ring home-map__hq-ring--2"
                />
                <circle cx="366" cy="314" r="8.5" className="home-map__hq-dot" />
              </a>
            </svg>

            <span className="home-map__tag home-map__tag--hq">
              Suffolk, VA — HQ
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

