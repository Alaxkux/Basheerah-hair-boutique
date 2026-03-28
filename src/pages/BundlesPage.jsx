import React, { useState, useEffect } from "react";
import BundleGrid from "../components/BundleGrid.jsx";
import { bundles } from "../data/bundles.js";

export default function BundlesPage({ searchOpen, desktopSearch = "", onSelectBundle, onNavigate, onAddToCart }) {
  const [query, setQuery] = useState(desktopSearch);

  // Sync desktop search into local query
  useEffect(() => { setQuery(desktopSearch); }, [desktopSearch]);

  // Clear local query when mobile search bar is closed
  useEffect(() => { if (!searchOpen) setQuery(""); }, [searchOpen]);

  const filtered = bundles.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase()) ||
    b.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">All Bundles 🎀</div>

      {/* Mobile search bar */}
      {searchOpen && !desktopSearch && (
        <div className="search-bar">
          <span>🔍</span>
          <input placeholder="Search bundles…" value={query}
            onChange={e => setQuery(e.target.value)} autoFocus />
          {query && <button className="clear-btn" onClick={() => setQuery("")}>✕</button>}
        </div>
      )}

      {filtered.length > 0
        ? <BundleGrid bundles={filtered} onSelect={(b) => { onSelectBundle(b); onNavigate("detail"); }} onAddToCart={onAddToCart} />
        : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No bundles found</h3>
            <p>Try a different search</p>
          </div>
        )
      }
      <div style={{height:16}} />
    </div>
  );
}
