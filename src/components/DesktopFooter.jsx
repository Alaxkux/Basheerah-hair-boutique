import React from "react";
import { BRAND, WHATSAPP_NUMBER } from "../data/bundles.js";

export default function DesktopFooter({ onNavigate }) {
  const openWA = () => {
    const msg = `Hi! I'd like to order from ${BRAND.name} 💕`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const openIG = () => {
    window.open(`https://instagram.com/${BRAND.instagram}`, "_blank");
  };

  return (
    <footer className="dt-footer">
      <div className="dt-footer-inner">
        {/* Brand */}
        <div className="dt-footer-brand">
          <div className="dt-footer-logo">{BRAND.emoji} {BRAND.name}</div>
          <div className="dt-footer-tagline">{BRAND.sub}</div>
        </div>

        {/* Quick links */}
        <div className="dt-footer-links">
          <h4>Quick Links</h4>
          {["Home","Shop Bundles","My Cart","My Orders"].map(l => (
            <div key={l} className="dt-footer-link"
              onClick={() => onNavigate(l.toLowerCase().includes("bundle") ? "bundles" : l.toLowerCase().includes("cart") ? "cart" : l.toLowerCase().includes("order") ? "orders" : "home")}>
              {l}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="dt-footer-contact">
          <h4>Get In Touch</h4>
          <div className="dt-footer-socials">
            <button className="dt-footer-wa" onClick={openWA}>
              💬 {BRAND.phone}
            </button>
            <button className="dt-footer-ig" onClick={openIG}>
              📸 Instagram
            </button>
          </div>
        </div>
      </div>

      <div className="dt-footer-copy">
        © {new Date().getFullYear()} {BRAND.name}. Made with 💖 in Nigeria.
      </div>
    </footer>
  );
}
