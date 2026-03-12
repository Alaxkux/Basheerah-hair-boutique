import React, { useState, useCallback, useEffect } from "react";

// Mobile components
import TopNav       from "./components/TopNav.jsx";
import BottomNav    from "./components/BottomNav.jsx";
import Drawer       from "./components/Drawer.jsx";
import Toast        from "./components/Toast.jsx";
import PWAInstallPrompt from "./components/PWAInstallPrompt.jsx";

// Desktop components
import DesktopTopNav        from "./components/DesktopTopNav.jsx";
import DesktopHero          from "./components/DesktopHero.jsx";
import DesktopBundleSection from "./components/DesktopBundleSection.jsx";
import DesktopFooter        from "./components/DesktopFooter.jsx";

// Pages
import HomePage    from "./pages/HomePage.jsx";
import BundlesPage from "./pages/BundlesPage.jsx";
import DetailPage  from "./pages/DetailPage.jsx";
import CartPage    from "./pages/CartPage.jsx";
import OrdersPage  from "./pages/OrdersPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

// Utils
import { WHATSAPP_NUMBER } from "./data/bundles.js";
import { saveCart, loadCart, saveOrders, loadOrders, saveProfile, loadProfile } from "./utils/storage.js";
import { THEMES } from "./pages/ProfilePage.jsx";

// Styles
import "./styles/global.css";
import "./styles/components.css";
import "./styles/hero.css";
import "./styles/detail.css";
import "./styles/desktop.css";

function useIsDesktop() {
  const [v, setV] = useState(() => window.innerWidth >= 1024);
  useEffect(() => {
    const mq = window.matchMedia("(min-width:1024px)");
    const h = e => setV(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return v;
}

export default function App() {
  const isDesktop = useIsDesktop();

  const [activePage,     setActivePage]     = useState("home");
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [cart,           setCart]           = useState(() => loadCart());
  const [orders,         setOrders]         = useState(() => loadOrders());
  const [profile,        setProfile]        = useState(() => loadProfile());
  const [toast,          setToast]          = useState(null);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [searchOpen,     setSearchOpen]     = useState(false);
  const [desktopSearch,  setDesktopSearch]  = useState("");

  // Apply saved theme on first load (including dark mode)
  useEffect(() => {
    const saved = loadProfile();
    const idx = saved?.themeIdx ?? 0;
    const t = THEMES[idx];
    if (t) {
      const r = document.documentElement.style;
      r.setProperty("--pink",       t.accent);
      r.setProperty("--pink-deep",  t.accentDeep);
      r.setProperty("--pink-light", t.accentLight);
      r.setProperty("--pink-mid",   t.accentMid);
      r.setProperty("--pink-pale",  t.accentPale);
      const shell = document.querySelector(".app-shell");
      if (shell) shell.style.background = t.appBg;
      document.body.style.background = t.bodyBg;
      if (t.darkMode) document.body.classList.add("dark-mode");
      else document.body.classList.remove("dark-mode");
    }
  }, []);

  useEffect(() => { saveCart(cart); },     [cart]);
  useEffect(() => { saveOrders(orders); }, [orders]);

  const showToast = useCallback((msg) => {
    setToast(msg); setTimeout(() => setToast(null), 2400);
  }, []);

  const addToCart = useCallback((bundle) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === bundle.id);
      return ex
        ? prev.map(i => i.id===bundle.id ? {...i,qty:i.qty+1} : i)
        : [...prev, {...bundle, qty:1}];
    });
    showToast(`${bundle.emoji} ${bundle.name} added to cart!`);
  }, [showToast]);

  const removeFromCart = useCallback((id) => setCart(prev => prev.filter(i => i.id!==id)), []);
  const updateQty      = useCallback((id, delta) =>
    setCart(prev => prev.map(i => i.id===id ? {...i,qty:Math.max(1,i.qty+delta)} : i)), []);
  const cartCount = cart.reduce((s,i) => s+i.qty, 0);

  const placeOrder = useCallback(() => {
    if (!cart.length) return;
    const newOrders = cart.map((item, idx) => ({
      id: `#BHB-${String(Date.now()).slice(-4)}${idx}`,
      date: new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),
      status: "Processing",
      bundle: item.name, price: item.price, qty: item.qty,
    }));
    setOrders(prev => [...newOrders, ...prev]);
    setCart([]);
    showToast("🎉 Order placed! Check the Orders tab.");
    navigate("orders");
  }, [cart, showToast]);

  const handleProfileChange = useCallback((p) => {
    setProfile(p); saveProfile(p);
  }, []);

  const openWhatsApp = useCallback((msg = "Hi! I'd like to shop 💕") => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }, []);

  const navigate = useCallback((page) => {
    setActivePage(page);
    if (page !== "bundles") { setSearchOpen(false); setDesktopSearch(""); }
    window.scrollTo({top:0,behavior:"smooth"});
  }, []);

  const renderPage = () => {
    switch(activePage) {
      case "home":    return <HomePage    onNavigate={navigate} onSelectBundle={setSelectedBundle} />;
      case "bundles": return <BundlesPage searchOpen={searchOpen} desktopSearch={desktopSearch} onSelectBundle={setSelectedBundle} onNavigate={navigate} />;
      case "detail":  return <DetailPage  bundle={selectedBundle} onBack={() => navigate("bundles")} onAddToCart={addToCart} />;
      case "cart":    return <CartPage    cart={cart} onUpdateQty={updateQty} onRemove={removeFromCart} onNavigate={navigate} onPlaceOrder={placeOrder} />;
      case "orders":  return <OrdersPage  orders={orders} />;
      case "profile": return <ProfilePage onNavigate={navigate} orderCount={orders.length} initialProfile={profile} onProfileChange={handleProfileChange} />;
      default:        return <HomePage    onNavigate={navigate} onSelectBundle={setSelectedBundle} />;
    }
  };

  if (isDesktop) {
    return (
      <div className="app-shell">
        <DesktopTopNav
          activePage={activePage}
          cartCount={cartCount}
          onNavigate={navigate}
          onSearch={(q) => { setDesktopSearch(q); if (activePage !== "bundles") navigate("bundles"); }}
        />
        <main className="desktop-content">
          {activePage === "home" ? (
            <>
              <DesktopHero onNavigate={navigate} />
              <DesktopBundleSection onSelectBundle={setSelectedBundle} onNavigate={navigate} />
              <div className="trust-bar" style={{margin:"0",borderRadius:0}}>
                {[["💗","Quality First"],["🌿","Hair-Friendly"],["🚚","Fast Delivery"],["🎁","Gift Packaging"]].map(([icon,label])=>(
                  <div key={label} className="trust-item">
                    <span className="trust-icon">{icon}</span>{label}
                  </div>
                ))}
              </div>
            </>
          ) : renderPage()}
        </main>
        <DesktopFooter onNavigate={navigate} />
        <Toast message={toast} />
        <PWAInstallPrompt activePage={activePage} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      {menuOpen && (
        <Drawer onClose={() => setMenuOpen(false)} onNavigate={navigate} onWhatsApp={openWhatsApp} />
      )}
      <TopNav
        cartCount={cartCount}
        onMenuOpen={() => setMenuOpen(true)}
        onSearch={() => { setSearchOpen(s => !s); setActivePage("bundles"); }}
        onCartClick={() => navigate("cart")}
      />
      {renderPage()}
      <BottomNav activePage={activePage} onNavigate={navigate} />
      <Toast message={toast} />
      <PWAInstallPrompt activePage={activePage} />
    </div>
  );
}
