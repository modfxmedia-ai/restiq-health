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
              setVal(Math.round(eased * to));
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

const stats = [
  { value: 4, suffix: "", label: "Virginia clinic locations" },
  { value: 3, suffix: "", label: "Appliance vendor platforms" },
  { value: 1, suffix: "", label: "Affiliated commercial pilot" },
  { value: 100, suffix: "%", label: "Medical-benefit billing model" },
];

const locations = [
  "Suffolk",
  "Newport News",
  "Hampton Roads",
  "Richmond",
];

const sections = [
  {
    title: "Center for Sleep and TMJ \u2014 commercial pilot",
    paras: [
      "The Center for Sleep and TMJ is the affiliated commercial dental sleep medicine practice founded by Dr. Brian G. Briesemeister Jr., DDS. The practice operates in four Virginia locations covering Suffolk, Newport News, the broader Hampton Roads market, and Richmond, with a clinical focus on:",
    ],
    bullets: [
      "Oral appliance therapy for obstructive sleep apnea",
      "Temporomandibular joint (TMJ) disorder evaluation and care",
      "Home sleep apnea testing coordination through established vendor partnerships",
      "Medical-benefit billing for E0486, 95800/95806, and associated E&M services",
    ],
    after:
      "This commercial operation serves as the validation environment for the clinical, billing, and credentialing infrastructure that RestiQ Health is bringing into the federal contracting market.",
  },
  {
    title: "Affiliations and clinical standards",
    richBullets: [
      {
        lead: "AADSM membership.",
        body: " The American Academy of Dental Sleep Medicine is the defining professional body for dental sleep medicine. The Center\u2019s clinical methodology aligns with AADSM standards and clinical practice guidelines.",
      },
      {
        lead: "Appliance vendor relationships.",
        body: " Active vendor relationships across ResMed, SomnoMed, and ProSomnus, with appliance selection driven by patient anatomy rather than vendor preference.",
      },
      {
        lead: "HSAT vendor coordination.",
        body: " Established workflows with home sleep apnea testing vendors for diagnostic confirmation prior to oral appliance fabrication.",
      },
    ],
  },
  {
    title: "Payer mix and operational maturity",
    paras: [
      "The commercial pilot operates across the full medical insurance mix: commercial payers, Medicare, and where applicable Tricare and VA Community Care Network referrals. Claims operations include eligibility verification, prior authorization workflows, denial management, and documentation packaging that meets payer audit standards.",
      "Specific revenue, patient volume, and reimbursement figures are available under NDA to qualified federal evaluators and teaming partners.",
    ],
  },
  {
    title: "How this transfers to federal delivery",
    paras: [
      "For federal evaluators: the commercial operation provides demonstrated capability in (a) clinical delivery of oral appliance therapy at scale, (b) medical-benefit billing for the relevant CPT and HCPCS codes, (c) credentialing workflows across multiple payer types, and (d) multi-site operational management. RestiQ Health is the federal-facing entity that brings this capability into Tricare, VA CCN, DHA, and MTF contract vehicles.",
    ],
  },
];

const glance = [
  { label: "Affiliated practice", value: "Center for Sleep and TMJ" },
  {
    label: "Locations",
    value: "Four \u2014 Suffolk, Newport News, Hampton Roads, Richmond (Virginia)",
  },
  {
    label: "Clinical focus",
    value: "Oral appliance therapy, TMJ care, HSAT coordination",
  },
  { label: "Professional body", value: "AADSM-aligned methodology" },
  { label: "Founder", value: "Dr. Brian G. Briesemeister Jr., DDS" },
  {
    label: "Relationship",
    value:
      "Affiliated commercial practice; provides clinical methodology & operational infrastructure to RestiQ Health, LLC",
  },
];

export default function PastPerformancePage() {
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
            Past Performance
          </p>
          <h1 data-reveal>
            Commercial validation of the{" "}
            <span className="home-accent">
              dental sleep medicine delivery model.
            </span>
          </h1>
          <p className="cap-hero__lede" data-reveal>
            RestiQ Health&rsquo;s clinical methodology is operationalized today
            through an affiliated commercial dental sleep practice serving
            patients across four Virginia locations. That practice provides the
            clinical infrastructure, billing workflows, and patient throughput
            data that underwrite the RestiQ federal delivery model.
          </p>
        </div>
      </section>

      <section className="pp-stats">
        <div className="pp-stats__inner">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="pp-stat"
              data-reveal
              style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <span className="pp-stat__value">
                <Counter to={s.value} suffix={s.suffix} />
              </span>
              <span className="pp-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section cap-body">
        <div className="home-section__inner cap-layout">
          <div className="cap-areas">
            {sections.map((sec, i) => (
              <article
                key={sec.title}
                className="cap-area"
                data-reveal
                style={{ "--delay": `${(i % 2) * 0.08}s` } as React.CSSProperties}
              >
                <div className="cap-area__head">
                  <span className="pp-area__num">{`0${i + 1}`}</span>
                </div>
                <h2>{sec.title}</h2>

                {sec.paras?.map((p, j) => (
                  <p key={j} className="cap-area__p">
                    {p}
                  </p>
                ))}

                {sec.bullets && (
                  <ul className="pp-list">
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                {sec.richBullets && (
                  <ul className="pp-list pp-list--rich">
                    {sec.richBullets.map((b) => (
                      <li key={b.lead}>
                        <strong>{b.lead}</strong>
                        {b.body}
                      </li>
                    ))}
                  </ul>
                )}

                {sec.after && <p className="cap-area__p">{sec.after}</p>}

                <span className="cap-area__bar" aria-hidden="true" />
              </article>
            ))}
          </div>

          <aside className="cap-aside">
            <div className="cap-card" data-reveal>
              <h3 className="cap-card__title">Commercial Pilot at a Glance</h3>
              <dl className="cap-data">
                {glance.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cap-card pp-locations" data-reveal>
              <h3 className="cap-card__title">Four Virginia Locations</h3>
              <ul className="pp-loc-list">
                {locations.map((loc, i) => (
                  <li
                    key={loc}
                    style={
                      { "--delay": `${0.15 + i * 0.12}s` } as React.CSSProperties
                    }
                  >
                    <span className="pp-loc__pin" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14">
                        <path
                          d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="2.4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                    {loc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cap-card wws-callout" data-reveal>
              <span className="wws-callout__tag">Validation</span>
              <p>
                The commercial pilot validates the clinical, billing, and
                credentialing model. RestiQ Health is the federal contracting
                vehicle that brings this validated capability to military and
                federal health buyers.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="cap-cta">
        <div className="cap-cta__inner" data-reveal>
          <h2>Validated commercially. Built for federal delivery.</h2>
          <p>
            Detailed revenue, volume, and reimbursement figures are available
            under NDA to qualified federal evaluators and teaming partners.
          </p>
          <div className="cap-cta__actions">
            <Link href="/contact" className="home-btn home-btn--primary">
              Request Under NDA
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
