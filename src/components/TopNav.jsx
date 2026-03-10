import React from "react";
import { BRAND } from "../data/bundles.js";
export default function TopNav({ cartCount, onMenuOpen, onSearch, onCartClick }) {
  return (
    <nav className="top-nav">
      <button className="icon-btn" onClick={onMenuOpen} aria-label="Menu">☰</button>
      <div className="logo-wrap" style={{textAlign:"center"}}>
        <span className="logo-main">{BRAND.name.split(" ")[0]}</span>
        <div className="logo-sub">{BRAND.emoji} HAIR BOUTIQUE</div>
      </div>
      <div style={{display:"flex",gap:10,alignItems:"center"}}>
        <button className="icon-btn" onClick={onSearch} aria-label="Search">🔍</button>
        <div className="cart-wrap icon-btn" onClick={onCartClick} role="button" style={{position:"relative"}}>
          <span style={{fontSize:22}}>🛍</span>
          {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
        </div>
      </div>
    </nav>
  );
}
