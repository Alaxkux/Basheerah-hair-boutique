import React, { useEffect } from "react";
import BundleGrid from "../components/BundleGrid.jsx";
import { bundles, BRAND, WHATSAPP_NUMBER } from "../data/bundles.js";

export default function HomePage({ onNavigate, onSelectBundle, onAddToCart }) {
  const waMsg = `Hi! I'd like to shop ${BRAND.name} 💕`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach(el => observer.observe(el));
    const t = setTimeout(() => els.forEach(el => el.classList.add("revealed")), 300);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div className="page home-page">

      {/* ── NEW HERO ── */}
      <section className="hero-v2">
        {/* Dreamy gradient background */}
        <div className="hero-v2-bg" />

        {/* Sparkle decorations */}
        <span className="hero-spark" style={{top:"12%", left:"6%",  fontSize:16, animationDelay:"0s"}}>✦</span>
        <span className="hero-spark" style={{top:"18%", right:"8%", fontSize:11, animationDelay:"0.5s"}}>✦</span>
        <span className="hero-spark" style={{top:"55%", left:"4%",  fontSize:13, animationDelay:"1s"}}>✦</span>
        <span className="hero-spark" style={{top:"70%", right:"6%", fontSize:10, animationDelay:"1.5s"}}>✦</span>
        <span className="hero-spark" style={{top:"40%", right:"3%", fontSize:8,  animationDelay:"0.8s"}}>♡</span>
        <span className="hero-spark" style={{top:"80%", left:"8%",  fontSize:9,  animationDelay:"1.2s"}}>♡</span>

        {/* Top row: eyebrow pill LEFT, hamburger handled by TopNav */}
        <div className="hero-v2-eyebrow-row">
          <div className="hero-v2-eyebrow">{BRAND.emoji} {BRAND.tagline}</div>
        </div>

        {/* Main content row */}
        <div className="hero-v2-body">
          {/* Left: text + buttons */}
          <div className="hero-v2-text">
            <h1 className="hero-v2-title">
              Transform Your
              <em>Hair Game ✨</em>
            </h1>
            <p className="hero-v2-subtitle">
              Cute scrunchies, clips &amp; bundles made to upgrade your everyday look 🩷
            </p>
            <div className="hero-v2-btns">
              <button className="hero-v2-btn-primary" onClick={() => onNavigate("bundles")}>
                Shop Bundles 🎀
              </button>
              {/* <button className="hero-v2-btn-wa"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, "_blank")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{flexShrink:0}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.524 5.845L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.732.979.998-3.648-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                WhatsApp
              </button> */}
            </div>
          </div>

          {/* Right: large oval image */}
          <div className="hero-v2-img-wrap">
            <div className="hero-v2-img-oval-bg" />
            <img
              src="/images/hero_image.jpg"
              alt="Hair accessories"
              className="hero-v2-img"
            />
          </div>
        </div>
      </section>

      {/* ── Everything below stays exactly the same ── */}
      <div className="section-header reveal">
        <div className="section-eyebrow">{BRAND.emoji} Collections</div>
      </div>

      <div className="reveal">
        <BundleGrid
          bundles={bundles.slice(0,4)}
          onSelect={b => { onSelectBundle(b); onNavigate("detail"); }}
          onAddToCart={onAddToCart}
        />
      </div>

      <div style={{textAlign:"center",padding:"4px 20px 10px"}}>
        <button className="btn-outline" onClick={() => onNavigate("bundles")}>
          View All Bundles →
        </button>
      </div>

      <div className="trust-bar reveal">
        {[["💗","Quality First"],["🌿","Hair-Friendly"],["🚚","Fast Delivery"],["🎁","Gift Wrapping"]].map(([icon,label]) => (
          <div key={label} className="trust-item">
            <span className="trust-icon">{icon}</span>{label}
          </div>
        ))}
      </div>

      <div className="wa-bar reveal"
        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, "_blank")}>
        <span className="wa-bar-icon">💬</span>
        <div>
          <div className="wa-bar-title">Order on WhatsApp</div>
          <div className="wa-bar-sub">{BRAND.phone} · Fast response guaranteed</div>
        </div>
        <span className="wa-bar-arrow">›</span>
      </div>

      <div style={{height:32}} />
    </div>
  );
}
