import React, { useEffect } from "react";
import { BRAND, WHATSAPP_NUMBER } from "../data/bundles.js";
const ITEMS = [
  {id:"home",icon:"🏠",label:"Home"},
  {id:"bundles",icon:"🎀",label:"Bundles"},
  {id:"cart",icon:"🛒",label:"Cart"},
  {id:"orders",icon:"📋",label:"Orders"},
  {id:"profile",icon:"👤",label:"Profile"},
];
export default function Drawer({ onClose, onNavigate, onWhatsApp }) {
  useEffect(() => {
    document.body.classList.add("drawer-open");
    return () => document.body.classList.remove("drawer-open");
  }, []);
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <aside className="drawer">
        <div className="drawer-top">
          <div className="drawer-logo-text">{BRAND.name}</div>
          <div className="drawer-logo-sub">{BRAND.tagline}</div>
        </div>
        <div className="drawer-body">
          {ITEMS.map(({id,icon,label}) => (
            <div key={id} className="drawer-item" onClick={() => { onNavigate(id); onClose(); }}>
              <span className="di-icon">{icon}</span>{label}
            </div>
          ))}
          <div className="drawer-item wa" onClick={() => { onWhatsApp(); onClose(); }}>
            <span className="di-icon">💬</span>Order on WhatsApp
          </div>
        </div>
        <div className="drawer-footer">{BRAND.name} © {new Date().getFullYear()}</div>
      </aside>
    </>
  );
}
