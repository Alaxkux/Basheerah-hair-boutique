import React from "react";
import { BRAND, WHATSAPP_NUMBER } from "../data/bundles.js";

export default function DesktopHero({ onNavigate }) {
  const openWA = () => {
    const msg = `Hi! I'd like to shop ${BRAND.name} 💕`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="dt-hero">
      <div className="dt-hero-blob1" />
      <div className="dt-hero-blob2" />

      {/* Sparkle decorations */}
      <span className="dt-sparkle" style={{top:40,left:"42%",animationDelay:"0s"}}>✦</span>
      <span className="dt-sparkle" style={{top:120,left:"55%",animationDelay:"0.8s"}}>💖</span>
      <span className="dt-sparkle" style={{top:60,right:80,animationDelay:"1.4s",fontSize:14}}>✦</span>
      <span className="dt-sparkle" style={{bottom:60,left:"38%",animationDelay:"0.4s",fontSize:12}}>★</span>

      <div className="dt-hero-text">
        <div className="dt-hero-eyebrow">
          {BRAND.emoji} {BRAND.tagline}
        </div>
        <h1 className="dt-hero-title">
          Transform Your
          <em>Hair Game ✨</em>
        </h1>
        <p className="dt-hero-sub">
          Cute scrunchies, clips, and bundles made with love.<br />
          {BRAND.sub}
        </p>
        <div className="dt-hero-btns">
          <button className="dt-hero-cta" onClick={() => onNavigate("bundles")}>
            Shop Bundles 🎀
          </button>
          <button className="dt-hero-secondary" onClick={openWA}>
            💬 Order on WhatsApp
          </button>
        </div>

        <div className="dt-hero-stat-row">
          {[["500+","Happy Customers"],["7","Bundle Options"],["24hr","Fast Delivery"],["⭐ 4.9","Rating"]].map(([num,lbl]) => (
            <div key={lbl} className="dt-hero-stat">
              <div className="dt-hero-stat-num">{num}</div>
              <div className="dt-hero-stat-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating image collage */}
      <div className="dt-hero-img-area">
        {/*
          HERO IMAGE SLOTS (desktop only)
          Replace these URLs with your own photos.
          Main photo: recommended 800×600px
          Small photos: recommended 400×400px
        */}
        <div className="dt-hero-img-main">
          {/* HERO MAIN IMAGE — replace URL below */}
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" alt="Hair accessories collection" />
        </div>
        <div className="dt-hero-img-sm">
          {/* HERO SMALL IMAGE 1 — replace URL below */}
          <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80" alt="Hair clips" />
        </div>
        <div className="dt-hero-img-sm">
          {/* HERO SMALL IMAGE 2 — replace URL below */}
          <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80" alt="Scrunchies" />
        </div>
      </div>
    </section>
  );
}
