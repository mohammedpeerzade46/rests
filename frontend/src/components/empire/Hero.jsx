import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowDownRight } from "lucide-react";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_family-dining-hub-18/artifacts/ifl5c5y8_ChatGPT%20Image%20Jun%2023%2C%202026%2C%2004_46_03%20AM.png";

export default function Hero() {
  const parallaxRef = useRef(null);

  // Subtle parallax on scroll (transform on the background wrapper only)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!parallaxRef.current) return;
        const y = Math.min(window.scrollY, 800);
        parallaxRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
      });
    };
    // Disable parallax for users who prefer reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" data-testid="hero-section" className="relative overflow-hidden">
      <div className="relative w-full hero-shell">
        {/* Parallax wrapper — translates on scroll */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 will-change-transform"
        >
          {/* Background layer (desktop + mobile positioning via responsive CSS class) */}
          <div
            className="hero-bg absolute inset-0 hero-kenburns"
            style={{ backgroundImage: `url('${HERO_IMG}')` }}
            role="img"
            aria-label="EMPIRE Restaurant interior — warm hanging lights and a central walkway"
          />
          {/* Preload sizing image (kept hidden, lets the browser prioritize the LCP) */}
          <img
            src={HERO_IMG}
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            decoding="async"
            className="sr-only"
          />
        </div>

        {/* Dark luxury overlay */}
        <div className="absolute inset-0 hero-overlay-luxury pointer-events-none" />
        {/* Warm amber glow — matches the ceiling lights */}
        <div className="absolute inset-0 hero-overlay-amber pointer-events-none" />

        {/* Soft drifting bloom for cinematic motion */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#F5B26B]/22 blur-[120px] hero-bloom-1" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#C85A32]/18 blur-[110px] hero-bloom-2" />
        </div>

        {/* Floating embers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="hero-ember"
              style={{
                left: `${(i * 8.3) % 100}%`,
                animationDelay: `${(i * 1.9) % 18}s`,
                animationDuration: `${17 + (i % 6) * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content — vertically centered, slightly left of center on desktop, centered on mobile */}
        <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-12 flex items-center">
          <div className="w-full lg:max-w-2xl xl:max-w-3xl text-center lg:text-left py-24 lg:py-0">
            <div
              className="hero-rise inline-flex items-center gap-3 text-[#F8E7C4]/90 text-[10px] sm:text-xs tracking-[0.32em] uppercase mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-px w-8 bg-[#E6B362]" />
              <span>Family Dining · Est. Bhatkal</span>
              <span className="h-px w-8 bg-[#E6B362] lg:hidden" />
            </div>

            <h1
              data-testid="hero-title"
              className="hero-rise font-serif-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.96] tracking-tight"
              style={{ animationDelay: "0.25s", textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
            >
              Where Bhatkal
              <br />
              <span className="italic font-light text-[#F4E0BA]">comes to dine.</span>
            </h1>

            <p
              className="hero-rise mt-7 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed mx-auto lg:mx-0"
              style={{ animationDelay: "0.45s", textShadow: "0 1px 18px rgba(0,0,0,0.45)" }}
            >
              Step into a warmly lit dining room near the NWKRTC Bus Stand —
              freshly prepared meals, halal & vegetarian, and hospitality that
              feels like coming home.
            </p>

            <div
              className="hero-rise mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                data-testid="hero-order-btn"
                to="/menu"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#C85A32] px-7 py-4 text-sm font-medium tracking-wide text-white hover:bg-[#D96B43] transition-colors shadow-[0_25px_50px_-20px_rgba(200,90,50,0.7)]"
              >
                Order Online
                <ArrowDownRight className="h-4 w-4" />
              </Link>
              <Link
                data-testid="hero-menu-btn"
                to="/menu"
                className="hero-glass-btn inline-flex items-center justify-center gap-2 rounded-sm px-7 py-4 text-sm font-medium tracking-wide text-white transition-colors"
              >
                View Full Menu
              </Link>
            </div>

            <div
              className="hero-rise mt-10 flex items-center justify-center lg:justify-start gap-2 text-white/80 text-sm"
              style={{ animationDelay: "0.75s", textShadow: "0 1px 14px rgba(0,0,0,0.5)" }}
            >
              <MapPin className="h-4 w-4 text-[#E6B362]" />
              <span>SRS Complex, Near NWKRTC Bus Stand, Bhatkal — 581320</span>
            </div>
          </div>
        </div>

        {/* Hours badge (desktop only) */}
        <div
          className="hero-rise absolute top-28 right-6 lg:right-12 hidden lg:flex flex-col items-end gap-1 text-white"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#F4E0BA]/80">Open Daily</span>
          <span className="font-serif-display text-4xl text-[#F4E0BA]">11:00 — 23:00</span>
        </div>

        {/* Scroll cue */}
        <div
          className="hero-rise absolute bottom-7 left-1/2 -translate-x-1/2 text-white/65 text-[10px] uppercase tracking-[0.4em] flex flex-col items-center gap-2 pointer-events-none"
          style={{ animationDelay: "0.9s" }}
        >
          <span>Scroll</span>
          <span className="h-12 w-px bg-white/55 hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}
