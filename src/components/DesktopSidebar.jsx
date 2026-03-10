import React from "react";
import { WHATSAPP_NUMBER } from "../data/bundles.js";

const NAV_ITEMS = [
  { id:"home",    icon:"🏠", label:"Home"    },
  { id:"bundles", icon:"🎀", label:"Bundles" },
  { id:"cart",    icon:"🛒", label:"Cart"    },
  { id:"orders",  icon:"📋", label:"Orders"  },
  { id:"profile", icon:"👤", label:"Profile" },
];

export default function DesktopSidebar({ activePage, onNavigate, cartCount, orderCount }) {
  const current = activePage === "detail" ? "bundles" : activePage;

  const openWA = () => {
    const msg = "Hi! I'd like to shop your bundles 💕";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <aside className="desktop-sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <span className="sidebar-logo-main">Basheerah</span>
        <div className="sidebar-logo-sub">HAIR HUGS 💗</div>
      </div>

      {/* Nav items */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ id, icon, label }) => {
          const badge = id === "cart" && cartCount > 0 ? cartCount
                      : id === "orders" && orderCount > 0 ? orderCount
                      : null;
          return (
            <button
              key={id}
              className={`sidebar-nav-item ${current === id ? "active" : ""}`}
              onClick={() => onNavigate(id)}
            >
              <span className="sidebar-nav-icon">{icon}</span>
              {label}
              {badge && <span className="sidebar-nav-badge">{badge}</span>}
            </button>
          );
        })}
      </nav>

      {/* WhatsApp CTA */}
      <div className="sidebar-wa" onClick={openWA}>
        <span className="sidebar-wa-icon">💬</span>
        <div className="sidebar-wa-text">
          <div className="sidebar-wa-title">Order on WhatsApp</div>
          <div className="sidebar-wa-number">09019836350</div>
        </div>
        <span>→</span>
      </div>
    </aside>
  );
}
