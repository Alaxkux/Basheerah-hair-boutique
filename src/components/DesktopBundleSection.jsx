import React from "react";
import { bundles, WHATSAPP_NUMBER } from "../data/bundles.js";
import ConfirmDialog from "./ConfirmDialog.jsx";
import { useState } from "react";

function DesktopBundleCard({ bundle, onSelect, onOrderNow }) {
  const { theme } = bundle;
  return (
    <div className="dt-bundle-card" onClick={() => onSelect(bundle)}>
      <div className="dt-card-img-wrap">
        {/*
          BUNDLE CARD IMAGE — "{bundle.name}"
          Change images[0] URL in bundles.js to update this photo
        */}
        <img src={bundle.images[0]} alt={bundle.name} loading="lazy" />
        <span className="dt-card-tag" style={{background:theme.primary}}>{bundle.tag}</span>
      </div>
      <div className="dt-card-body" style={{background:theme.cardBg}}>
        <span className="dt-card-emoji">{bundle.emoji}</span>
        <div className="dt-card-name">{bundle.name}</div>
        <div className="dt-card-price-row">
          <span className="dt-card-price" style={{color:theme.primary}}>{bundle.price}</span>
          <span className="dt-card-old-price">{bundle.oldPrice}</span>
        </div>
        <div className="dt-card-items">
          {bundle.items.slice(0,3).map((item,i) => (
            <div key={i} className="dt-card-item">
              <div className="dt-card-item-dot" style={{background:theme.primary}} />
              {item}
            </div>
          ))}
          {bundle.items.length > 3 && (
            <div className="dt-card-item" style={{color:theme.primary,fontWeight:700}}>
              +{bundle.items.length - 3} more included
            </div>
          )}
        </div>
        <button
          className="dt-card-wa-btn"
          style={{background:`linear-gradient(135deg,${theme.primary},${theme.secondary})`}}
          onClick={e => { e.stopPropagation(); onOrderNow(bundle); }}
        >
          💬 Order on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function DesktopBundleSection({ onSelectBundle, onNavigate }) {
  const [orderTarget, setOrderTarget] = useState(null);

  const doOrder = (bundle) => {
    setOrderTarget(null);
    const msg = `Hi! I'd like to order the *${bundle.name}* (${bundle.price}) 💕`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="dt-section" id="bundles">
      <div className="dt-section-header">
        <div className="dt-section-eyebrow">Our Collections</div>
        <h2 className="dt-section-title">Shop Our Bundles 🎀</h2>
        <p className="dt-section-sub">
          Every bundle is handpicked and made with love. Find your perfect hair vibe.
        </p>
      </div>

      <div className="dt-bundle-grid">
        {bundles.map(b => (
          <DesktopBundleCard
            key={b.id}
            bundle={b}
            onSelect={b => { onSelectBundle(b); onNavigate("detail"); }}
            onOrderNow={setOrderTarget}
          />
        ))}
      </div>

      {/* Confirm order */}
      {orderTarget && (
        <ConfirmDialog
          title={`Order ${orderTarget.name}? ${orderTarget.emoji}`}
          message={`You're about to order the ${orderTarget.name} for ${orderTarget.price} via WhatsApp. Ready?`}
          confirmLabel="Yes, let's go! 💕"
          cancelLabel="Not yet"
          onConfirm={() => doOrder(orderTarget)}
          onCancel={() => setOrderTarget(null)}
        />
      )}
    </section>
  );
}
