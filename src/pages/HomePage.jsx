import React, { useEffect, useRef } from "react";
import BundleGrid from "../components/BundleGrid.jsx";
import { bundles, BRAND, WHATSAPP_NUMBER } from "../data/bundles.js";

export default function HomePage({ onNavigate, onSelectBundle }) {
  const waMsg = `Hi! I'd like to shop ${BRAND.name} 💕`;
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page" style={{padding:0}}>
      {/* ── Hero (mobile only — desktop has DesktopHero) ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-eyebrow">{BRAND.emoji} {BRAND.tagline}</div>
          <h1 className="hero-title">
            Transform Your<br />
            <em>Hair Game ✨</em>
          </h1>
          <p className="hero-subtitle">{BRAND.sub}</p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <button className="hero-btn" onClick={() => onNavigate("bundles")}>
              Shop Bundles 🎀
            </button>
            <button className="hero-btn-outline"
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, "_blank")}>
              💬 WhatsApp
            </button>
          </div>
        </div>
        <div className="hero-img-wrap">
          {/*
            HERO MOBILE IMAGE
            Replace the URL below with your own product photo
            Recommended: 400×400px square, put in /public/images/
          */}
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
            alt="Hair accessories" className="hero-img" />
          <div className="hero-badge">💗 {BRAND.name.split(" ")[0]}</div>
        </div>
      </section>

      {/* ── Section header ── */}
      <div className="section-header reveal">
        <div className="section-eyebrow">{BRAND.emoji} Collections</div>
        <h2 className="section-title">Our Bundles</h2>
        <p className="section-sub">Handpicked with love for every hair vibe</p>
      </div>

      {/* ── Bundle grid ── */}
      <div className="reveal">
        <BundleGrid
          bundles={bundles.slice(0,4)}
          onSelect={b => { onSelectBundle(b); onNavigate("detail"); }}
        />
      </div>

      <div style={{textAlign:"center",padding:"4px 20px 8px"}}>
        <button className="btn-outline" onClick={() => onNavigate("bundles")}>
          View All Bundles →
        </button>
      </div>

      {/* ── Trust bar ── */}
      <div className="trust-bar reveal">
        {[["💗","Quality First"],["🌿","Hair-Friendly"],["🚚","Fast Delivery"],["🎁","Gift Wrapping"]].map(([icon,label]) => (
          <div key={label} className="trust-item">
            <span className="trust-icon">{icon}</span>{label}
          </div>
        ))}
      </div>

      {/* ── WhatsApp bar ── */}
      <div className="wa-bar reveal"
        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, "_blank")}>
        <span className="wa-bar-icon">💬</span>
        <div>
          <div className="wa-bar-title">Order on WhatsApp</div>
          <div className="wa-bar-sub">{BRAND.phone} · Fast response guaranteed</div>
        </div>
        <span className="wa-bar-arrow">›</span>
      </div>

      <div style={{height:24}} />
    </div>
  );
}
