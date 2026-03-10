import React from "react";
const ITEMS = [
  {id:"home",icon:"🏠",label:"Home"},
  {id:"bundles",icon:"🎀",label:"Bundles"},
  {id:"cart",icon:"🛒",label:"Cart"},
  {id:"orders",icon:"📋",label:"Orders"},
  {id:"profile",icon:"👤",label:"Profile"},
];
export default function BottomNav({ activePage, onNavigate }) {
  const current = activePage === "detail" ? "bundles" : activePage;
  return (
    <nav className="bottom-nav">
      {ITEMS.map(({id,icon,label}) => (
        <button key={id} className={`nav-item ${current===id?"active":""}`} onClick={() => onNavigate(id)}>
          <span className="nav-icon">{icon}</span>{label}
        </button>
      ))}
    </nav>
  );
}
