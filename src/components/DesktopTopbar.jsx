import React, { useState } from "react";

const PAGE_TITLES = {
  home: "Welcome 💗",
  bundles: "All Bundles 🎀",
  detail: "Bundle Detail",
  cart: "My Cart 🛒",
  orders: "My Orders 📋",
  profile: "My Profile 👤",
};

export default function DesktopTopbar({ activePage, cartCount, onCartClick, onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="desktop-topbar">
      <div className="desktop-topbar-title">{PAGE_TITLES[activePage] || "Basheerah"}</div>

      {/* Search — only relevant on home/bundles */}
      {(activePage === "home" || activePage === "bundles") && (
        <div className="desktop-search">
          <span>🔍</span>
          <input
            placeholder="Search bundles…"
            value={query}
            onChange={handleChange}
          />
          {query && (
            <button style={{background:"none",border:"none",cursor:"pointer",color:"var(--gray-light)"}}
              onClick={() => { setQuery(""); onSearch(""); }}>✕</button>
          )}
        </div>
      )}

      {/* Cart button */}
      <button className="desktop-cart-btn" onClick={onCartClick}>
        🛍 View Cart
        {cartCount > 0 && <span className="desktop-cart-count">{cartCount}</span>}
      </button>
    </header>
  );
}
