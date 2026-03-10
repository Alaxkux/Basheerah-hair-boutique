import React from "react";
export default function BundleGrid({ bundles, onSelect }) {
  return (
    <div className="bundle-grid">
      {bundles.map((b) => (
        <div key={b.id} className="bundle-card" onClick={() => onSelect(b)}>
          <div className="bundle-card-img-wrap">
            <img src={b.images[0]} alt={b.name} className="bundle-card-img" loading="lazy" />
            <span className="bundle-card-tag" style={{background:b.theme.primary}}>{b.tag}</span>
          </div>
          <div className="bundle-card-body" style={{background:b.theme.cardBg}}>
            <div className="bundle-card-name">{b.name}</div>
            <div className="bundle-card-price" style={{color:b.theme.primary}}>{b.price}</div>
            <button className="btn-view" style={{borderColor:b.theme.primary,color:b.theme.primary}}>
              View Bundle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
