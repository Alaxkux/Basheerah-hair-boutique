import React, { useState, useRef } from "react";
import { WHATSAPP_NUMBER } from "../data/bundles.js";
import { spawnConfetti } from "../components/Confetti.jsx";
import ConfirmDialog from "../components/ConfirmDialog.jsx";

export default function DetailPage({ bundle, onBack, onAddToCart }) {
  const [imgIdx,      setImgIdx]      = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!bundle) return null;
  const { theme } = bundle;
  const priceParsed    = parseInt(bundle.price.replace(/[₦,]/g,""));
  const oldPriceParsed = parseInt((bundle.oldPrice || bundle.price).replace(/[₦,]/g,""));
  const savePct        = oldPriceParsed > priceParsed ? Math.round((1 - priceParsed / oldPriceParsed) * 100) : 0;

  const orderNow = () => {
    const msg = `Hi! I'd like to order the *${bundle.name}* (${bundle.price}) 💕`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleAddToCart = (e) => {
    // confetti from button position
    const rect = e.currentTarget.getBoundingClientRect();
    spawnConfetti(rect.left + rect.width/2, rect.top);
    onAddToCart(bundle);
  };

  const prev = () => setImgIdx(i => (i - 1 + bundle.images.length) % bundle.images.length);
  const next = () => setImgIdx(i => (i + 1) % bundle.images.length);

  const touchStartX = useRef(0);
  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev(); else if (dx < -50) next();
  };

  return (
    <div className="detail-page" style={{background:theme.bg}}>
      {/* ── Image Gallery ── */}
      <div className="detail-gallery">
        <div
          className="detail-gallery-track"
          style={{transform:`translateX(-${imgIdx*100}%)`}}
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        >
          {bundle.images.map((src, i) => (
            <div key={i} className="detail-gallery-slide">
              {/*
                IMAGE SLOT {i+1} for "{bundle.name}"
                To replace: change the src URL in bundles.js → images[{i}]
                Recommended size: 600×600px or larger, square or portrait works best
              */}
              <img src={src} alt={`${bundle.name} view ${i+1}`} />
            </div>
          ))}
        </div>

        {bundle.images.length > 1 && <>
          <button className="gallery-arrow prev" onClick={prev}>‹</button>
          <button className="gallery-arrow next" onClick={next}>›</button>
        </>}
        <button className="detail-back-btn" onClick={onBack}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <span className="detail-img-tag" style={{background:theme.primary}}>{bundle.tag}</span>
      </div>

      {/* Dots */}
      <div className="gallery-dots">
        {bundle.images.map((_,i) => (
          <div key={i} className={`gallery-dot ${i===imgIdx?"active":""}`}
            style={i===imgIdx?{background:theme.primary}:{}}
            onClick={() => setImgIdx(i)} />
        ))}
      </div>

      {/* ── Body ── */}
      <div className="detail-body">
        <span className="detail-pill" style={{background:theme.tagBg,color:theme.tagColor}}>
          {bundle.emoji} {bundle.name}
        </span>
        <h1 className="detail-name">{bundle.name}</h1>
        <p className="detail-desc">{bundle.description}</p>

        <div className="price-row">
          <span className="detail-price" style={{color:theme.primary}}>{bundle.price}</span>
          <span className="detail-old-price">{bundle.oldPrice}</span>
          <span className="savings-badge">Save {savePct}%</span>
        </div>

        <div className="colors-section">
          <div className="colors-label">Available Colors</div>
          <div className="colors-row">
            {bundle.colors.map((c,i) => <div key={i} className="color-dot" style={{background:c}} />)}
          </div>
        </div>

        <div className="items-card" style={{background:theme.cardBg}}>
          <div className="items-card-title" style={{color:theme.text}}>📦 What's Inside</div>
          {bundle.items.map((item,i) => (
            <div key={i} className="item-row">
              <span className="item-check" style={{color:theme.primary}}>✓</span>{item}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTAs ── */}
      <div className="detail-btn-row">
        <button className="btn-secondary"
          style={{borderColor:theme.primary,color:theme.primary}}
          onClick={handleAddToCart}>
          🛒 Add to Cart
        </button>
        <button className="btn-primary"
          style={{flex:1,background:`linear-gradient(135deg,${theme.primary},${theme.secondary})`}}
          onClick={() => setShowConfirm(true)}>
          💬 Order Now
        </button>
      </div>

      {/* Confirm order now */}
      {showConfirm && (
        <ConfirmDialog
          title={`Order ${bundle.name}? ${bundle.emoji}`}
          message={`You're about to order the ${bundle.name} for ${bundle.price} via WhatsApp. Ready?`}
          confirmLabel="Yes, order now!"
          cancelLabel="Not yet"
          onConfirm={() => { setShowConfirm(false); orderNow(); }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}
