import React, { useState } from "react";
import { BRAND, WHATSAPP_NUMBER } from "../data/bundles.js";

const LINKS = ["Home","Shop","Bundles","Contact"];
const PAGE_MAP = { Home:"home", Shop:"bundles", Bundles:"bundles" };

export default function DesktopTopNav({ activePage, cartCount, onNavigate, onSearch }) {
  const [query, setQuery] = useState("");
  const current = activePage === "detail" ? "bundles" : activePage;

  const handleChange = e => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const openWA = () => {
    const msg = `Hi! I'd like to shop ${BRAND.name} 💕`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <header className="desktop-topnav">
      {/* Logo */}
      <div className="dtnav-logo" onClick={() => onNavigate("home")} style={{cursor:"pointer"}}>
        <span style={{fontSize:28}}>{BRAND.emoji}</span>
        <span className="dtnav-logo-text">{BRAND.name}</span>
      </div>

      {/* Nav links */}
      <nav className="dtnav-links">
        {LINKS.map(link => (
          <button key={link}
            className={`dtnav-link ${current === PAGE_MAP[link] ? "active" : ""}`}
            onClick={() => link === "Contact" ? openWA() : onNavigate(PAGE_MAP[link])}
          >{link}</button>
        ))}
      </nav>

      {/* Right side */}
      <div className="dtnav-right">
        <div className="dtnav-search">
          <span style={{fontSize:14,color:"var(--gray-light)"}}>🔍</span>
          <input placeholder="Search bundles…" value={query} onChange={handleChange} />
          {query && <button style={{background:"none",border:"none",cursor:"pointer",color:"var(--gray-light)",fontSize:13}}
            onClick={() => { setQuery(""); onSearch(""); }}>✕</button>}
        </div>

        <button className="dtnav-cart-btn" onClick={() => onNavigate("cart")}>
          🛍 Cart
          {cartCount > 0 && <span className="dtnav-cart-count">{cartCount}</span>}
        </button>

        <button className="dtnav-wa-btn" onClick={openWA}>
          💬 Order on WhatsApp
        </button>
      </div>
    </header>
  );
}
