"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const duration = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * to * 10) / 10);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const leaders = [
  {
    name: "Brian G. Briesemeister Sr.",
    initials: "BS",
    role: "Owner \u00b7 Navy Veteran",
    ownership: "25.5% ownership \u00b7 Operational control",
    controlling: true,
    bio: "U.S. Navy veteran and one of two controlling owners of RestiQ Health, LLC. Holds day-to-day operational control and long-term decision-making authority for the company. Brings decades of healthcare leadership and operational experience to the federal contracting strategy, including partner relationships, contract pursuit, and the company\u2019s engagement with Defense Health Agency, Tricare regional contractors, and VA health system stakeholders.",
  },
  {
    name: "Dr. Alton Stocks, MD",
    initials: "AS",
    role: "Owner \u00b7 Retired Rear Admiral, U.S. Navy",
    ownership: "25.5% ownership \u00b7 Operational control",
    controlling: true,
    bio: "Retired Rear Admiral (upper half) and two-star Admiral, United States Navy. Physician executive with a senior military medical leadership background. As one of two controlling owners, Dr. Stocks holds day-to-day operational control and long-term decision-making authority alongside Dr. Briesemeister Sr. Leads clinical governance for RestiQ Health and drives the company\u2019s relationships across the military health system, the Defense Health Agency, and the service-branch medical commands.",
  },
  {
    name: "Dr. Brian G. Briesemeister Jr., DDS",
    initials: "BJ",
    role: "Member, RestiQ Health, LLC",
    ownership: "49% ownership \u00b7 Non-controlling Member",
    controlling: false,
    bio: "AADSM-affiliated dental sleep medicine clinician and founder of the Center for Sleep and TMJ, the affiliated commercial dental sleep practice operating in four Virginia locations (Suffolk, Newport News, Hampton Roads, Richmond). Provides RestiQ Health with the clinical methodology, appliance protocols, and operational infrastructure validated through that commercial practice. Per SBA SDVOSB ownership and control requirements, Dr. Briesemeister Jr. is a non-controlling Member of RestiQ Health, LLC \u2014 he does not hold day-to-day operational control and is not involved in long-term decision-making for the company.",
  },
];

const ownership = [
  { label: "Veteran owners (controlling)", value: 51, accent: true },
  { label: "Non-controlling Member", value: 49, accent: false },
];

export default function LeadershipPage() {
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

  // donut: 51 / 49 split
  const circ = 2 * Math.PI * 54;
  const seg1 = (51 / 100) * circ;

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
        <div className="cap-hero__inner ld-hero__grid">
          <div className="ld-hero__copy">
            <p className="eyebrow" data-reveal>
              Leadership
            </p>
            <h1 data-reveal>
              Veteran-owned, veteran-controlled,{" "}
              <span className="home-accent">clinically credentialed.</span>
            </h1>
            <p className="cap-hero__lede" data-reveal>
              RestiQ Health, LLC is 51% owned and operationally controlled by
              U.S. Navy veterans. A non-controlling Member provides the clinical
              methodology and infrastructure developed through an affiliated
              commercial dental sleep medicine practice.
            </p>
            <div className="ld-hero__pills" data-reveal>
              <span className="ld-hero__pill ld-hero__pill--on">
                <span className="ld-hero__dot" /> Service-disabled veteran owners
              </span>
              <span className="ld-hero__pill">
                Clinical methodology partner
              </span>
            </div>
          </div>

          <aside className="ld-hero__visual" data-reveal aria-hidden="true">
            <div className="ld-mg">
              <div className="ld-mg__head">
                <span className="ld-mg__title">Ownership &amp; control structure</span>
                <span className="ld-mg__live">
                  <span className="ld-mg__live-dot" /> SDVOSB
                </span>
              </div>
              <svg
                className="ld-mg__chart"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
                role="presentation"
              >
                <defs>
                  <linearGradient id="ldArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(70,180,255,0.42)" />
                    <stop offset="100%" stopColor="rgba(70,180,255,0)" />
                  </linearGradient>
                  <linearGradient id="ldLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A6E0FF" />
                    <stop offset="100%" stopColor="#46B4FF" />
                  </linearGradient>
                </defs>
                {[40, 80, 120, 160].map((y) => (
                  <line
                    key={y}
                    className="ld-mg__grid"
                    x1="0"
                    y1={y}
                    x2="400"
                    y2={y}
                  />
                ))}
                <path
                  className="ld-mg__fill"
                  d="M0,170 C50,166 80,140 120,140 S190,108 230,104 S320,58 360,52 L400,44 L400,200 L0,200 Z"
                  fill="url(#ldArea)"
                />
                <path
                  className="ld-mg__path ld-mg__path--ghost"
                  d="M0,186 C60,182 90,168 130,168 S210,148 250,144 S330,120 366,118 L400,112"
                  fill="none"
                />
                <path
                  className="ld-mg__path ld-mg__path--main"
                  d="M0,170 C50,166 80,140 120,140 S190,108 230,104 S320,58 360,52 L400,44"
                  fill="none"
                  stroke="url(#ldLine)"
                />
                <circle className="ld-mg__tracer" r="5" />
              </svg>
              <div className="ld-mg__metrics">
                <div className="ld-mg__metric">
                  <strong>
                    <Counter to={51} suffix="%" />
                  </strong>
                  <span>Veteran owned</span>
                </div>
                <div className="ld-mg__metric">
                  <strong>
                    <Counter to={100} suffix="%" />
                  </strong>
                  <span>Veteran controlled</span>
                </div>
                <div className="ld-mg__metric">
                  <strong>
                    <Counter to={2} />
                  </strong>
                  <span>Controlling owners</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-section ld-ownership">
        <div className="home-caps__bg" aria-hidden="true">
          <span className="home-caps__orb home-caps__orb--1" />
          <span className="home-caps__orb home-caps__orb--2" />
        </div>
        <div className="home-section__inner ld-own__inner">
          <div className="ld-own__chart" data-reveal>
            <svg viewBox="0 0 128 128" className="ld-donut" role="img" aria-label="51 percent veteran-controlled ownership">
              <defs>
                <filter id="ldGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle
                className="ld-donut__track"
                cx="64"
                cy="64"
                r="54"
              />
              <circle
                className="ld-donut__seg ld-donut__seg--2"
                cx="64"
                cy="64"
                r="54"
                strokeDasharray={`${circ} ${circ}`}
                strokeDashoffset={0}
              />
              <circle
                className="ld-donut__seg ld-donut__seg--1"
                cx="64"
                cy="64"
                r="54"
                strokeDasharray={`${seg1} ${circ}`}
                filter="url(#ldGlow)"
                style={{ "--len": seg1 } as React.CSSProperties}
              />
            </svg>
            <span className="ld-donut__spark ld-donut__spark--1" aria-hidden="true" />
            <span className="ld-donut__spark ld-donut__spark--2" aria-hidden="true" />
            <div className="ld-donut__center">
              <span className="ld-donut__num">
                <Counter to={51} suffix="%" />
              </span>
              <span className="ld-donut__cap">veteran-controlled</span>
            </div>
          </div>

          <div className="ld-own__legend" data-reveal>
            <p className="eyebrow">Ownership &amp; Control</p>
            <h2 className="wws-h2">51% veteran-owned and controlled.</h2>
            {ownership.map((o, i) => (
              <div
                key={o.label}
                className="ld-bar"
                style={{ "--delay": `${0.2 + i * 0.15}s` } as React.CSSProperties}
              >
                <div className="ld-bar__head">
                  <span>{o.label}</span>
                  <strong>{o.value}%</strong>
                </div>
                <div className="ld-bar__track">
                  <span
                    className={`ld-bar__fill${o.accent ? " ld-bar__fill--accent" : ""}`}
                    style={{ "--w": `${o.value}%` } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}

            <div className="ld-stats">
              {[
                { to: 2, suffix: "", label: "Controlling veteran owners" },
                { to: 1, suffix: "", label: "Clinical Member" },
                { to: 100, suffix: "%", label: "Veteran-led control" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="ld-stat"
                  style={{ "--delay": `${0.3 + i * 0.12}s` } as React.CSSProperties}
                >
                  <strong>
                    <Counter to={s.to} suffix={s.suffix} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section cap-body">
        <div className="home-section__inner">
          <div className="home-section__head" data-reveal>
            <p className="eyebrow">The Team</p>
            <h2 className="wws-h2">Two controlling veteran owners. One clinical Member.</h2>
          </div>

          <div className="ld-grid">
            {leaders.map((l, i) => (
              <article
                key={l.name}
                className={`ld-card${l.controlling ? " ld-card--control" : ""}`}
                data-reveal
                style={{ "--delay": `${(i % 3) * 0.12}s` } as React.CSSProperties}
              >
                <span className="ld-card__border" aria-hidden="true" />
                <span className="ld-card__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="ld-card__top">
                  <span className="ld-card__avatar">
                    <span className="ld-card__avatar-ring" aria-hidden="true" />
                    {l.initials}
                  </span>
                  <span
                    className={`ld-card__tag${l.controlling ? " ld-card__tag--control" : ""}`}
                  >
                    {l.controlling ? "Controlling Owner" : "Non-controlling Member"}
                  </span>
                </div>
                <h3>{l.name}</h3>
                <p className="ld-card__role">{l.role}</p>
                <span className="ld-card__own">{l.ownership}</span>
                <p className="ld-card__bio">{l.bio}</p>
                <span className="cap-area__bar" aria-hidden="true" />
              </article>
            ))}
          </div>

          <div className="cap-card wws-callout ld-callout" data-reveal>
            <span className="wws-callout__tag">SDVOSB Compliance</span>
            <p>
              <strong>SDVOSB ownership and control.</strong> RestiQ Health, LLC
              is 51% owned and unconditionally controlled by service-disabled
              veterans Brian G. Briesemeister Sr. and Dr. Alton Stocks.
              Day-to-day operational control and long-term decision-making rest
              exclusively with the two veteran owners, consistent with SBA
              SDVOSB eligibility requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="cap-cta">
        <div className="cap-cta__inner" data-reveal>
          <h2>Veteran-led. Federally aligned.</h2>
          <p>
            Connect with the RestiQ Health leadership team about teaming,
            contract vehicles, and clinical capability.
          </p>
          <div className="cap-cta__actions">
            <Link href="/contact" className="home-btn home-btn--primary">
              Contact Leadership
            </Link>
            <Link href="/certifications" className="home-btn home-btn--ghost">
              View Certifications
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
