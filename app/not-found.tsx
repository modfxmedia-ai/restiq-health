import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf__bg" aria-hidden="true">
        <span className="nf__glow nf__glow--1" />
        <span className="nf__glow nf__glow--2" />
        <span className="nf__grid" />
      </div>
      <div className="nf__inner">
        <p className="nf__code">404</p>
        <h1 className="nf__title">This page couldn&rsquo;t be found.</h1>
        <p className="nf__lede">
          The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s
          get you back to RestiQ Health.
        </p>
        <div className="nf__actions">
          <Link href="/" className="home-btn home-btn--primary">
            Back to Home
          </Link>
          <Link href="/contact" className="home-btn home-btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
