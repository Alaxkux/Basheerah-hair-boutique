import React, { useState, useCallback } from "react";

export default function BundleGrid({ bundles, onSelect, onAddToCart }) {
  const [addedId,  setAddedId]  = useState(null);
  const [loadedIds, setLoadedIds] = useState(() => new Set());

  const handleQuickAdd = (e, bundle) => {
    e.stopPropagation();
    if (!onAddToCart) return;
    onAddToCart(bundle);
    setAddedId(bundle.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  const handleImgLoad = useCallback((id) => {
    setLoadedIds(prev => { const s = new Set(prev); s.add(id); return s; });
  }, []);

  return (
    <div className="bundle-grid">
      {bundles.map((b) => (
        <div key={b.id} className="bundle-card" onClick={() => onSelect(b)}>
          <div className={`bundle-card-img-wrap ${loadedIds.has(b.id) ? "loaded" : ""}`}>
            <img
              src={b.images[0]}
              alt={b.name}
              className="bundle-card-img"
              loading="lazy"
              onLoad={() => handleImgLoad(b.id)}
              onError={e => { handleImgLoad(b.id); e.currentTarget.style.opacity = "0"; }}
            />
            <span className="bundle-card-tag" style={{background:b.theme.primary}}>{b.tag}</span>
          </div>
          <div className="bundle-card-body" style={{background:b.theme.cardBg}}>
            <div className="bundle-card-name">{b.name}</div>
            <div className="bundle-card-price" style={{color:b.theme.primary}}>{b.price}</div>
            <div className="bundle-card-actions">
              <button className="btn-view" style={{borderColor:b.theme.primary,color:b.theme.primary}}>
                View
              </button>
              {onAddToCart && (
                <button
                  className={`btn-quick-add ${addedId === b.id ? "added" : ""}`}
                  style={{
                    background: addedId === b.id ? "#dcfce7" : b.theme.primary,
                    color: addedId === b.id ? "#16a34a" : "#fff",
                    borderColor: b.theme.primary
                  }}
                  onClick={e => handleQuickAdd(e, b)}
                  aria-label={`Add ${b.name} to cart`}
                >
                  {addedId === b.id ? "✓" : "+"}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
