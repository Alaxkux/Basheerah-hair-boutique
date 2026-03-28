import React, { useState, useEffect, useRef } from "react";
import { BRAND } from "../data/bundles.js";

// ══════════════════════════════════════════════
// PAGE VISIT TRACKING
// Records unique page visits in sessionStorage.
// Popup fires once after 2+ unique pages visited.
// To change the trigger threshold, edit the number
// in: if (visitedPages.length >= 2 && !promptShown)
// To disable tracking entirely and show immediately,
// replace the condition with: if (true && !promptShown)
// ══════════════════════════════════════════════

const SESSION_KEY   = "bhb_visited_pages";
const SHOWN_KEY     = "bhb_prompt_shown";

function getVisited() {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)) || []; } catch { return []; }
}
function saveVisited(pages) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(pages)); } catch {}
}

export function recordVisit(page) {
  const pages = getVisited();
  if (!pages.includes(page)) {
    pages.push(page);
    saveVisited(pages);
  }
  return pages;
}

export default function PWAInstallPrompt({ activePage }) {
  const [visible,   setVisible]   = useState(false);
  const [deferredPrompt, setDeferred] = useState(null);
  const shownRef = useRef(false);

  // ══════════════════════════════════════════════
  // PWA INSTALL LOGIC
  // The browser fires 'beforeinstallprompt' automatically
  // on PWA-eligible sites (HTTPS + manifest + service worker).
  // We intercept it here and hold it until the user clicks install.
  // deferredPrompt will be null on non-PWA-eligible sites —
  // the install button will show a demo toast in that case.
  // ══════════════════════════════════════════════
  useEffect(() => {
    const handler = e => { e.preventDefault(); setDeferred(e); };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  // Track page visits
  useEffect(() => {
    if (!activePage) return;
    const promptShown = sessionStorage.getItem(SHOWN_KEY) === "true";
    if (promptShown) return;

    const pages = recordVisit(activePage);

    if (pages.length >= 2 && !shownRef.current) {
      shownRef.current = true;
      sessionStorage.setItem(SHOWN_KEY, "true");
      setTimeout(() => setVisible(true), 600);
    }
  }, [activePage]);

  // Lock body scroll when overlay is visible
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  const dismiss = () => setVisible(false);

  const triggerInstall = async () => {
    dismiss();
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferred(null);
      showToastMsg(outcome === "accepted"
        ? `🎀 ${BRAND.name} added to your home screen!`
        : "Maybe next time! We'll be here 💖");
    } else {
      showToastMsg("💖 Open this site in Chrome/Safari to install!");
    }
  };

  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef(null);

  function showToastMsg(msg) {
    setToastMsg(msg);
    setToastVisible(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 3200);
  }

  if (!visible && !toastVisible) return null;

  return (
    <>
      {/* ── FLOATING PETALS — decorative only ── */}
      {visible && <PetalBackground />}

      {/* ── Overlay ── */}
      {visible && (
        <div
          className="pwa-overlay"
          onClick={e => e.target === e.currentTarget && dismiss()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-title"
        >
          <div className="pwa-card">

            {/* Banner strip */}
            <div className="pwa-banner">
              <svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}} preserveAspectRatio="none">
                <ellipse cx="20%" cy="50%" rx="60%" ry="80%" fill="rgba(255,255,255,0.07)" />
                <ellipse cx="80%" cy="30%" rx="50%" ry="60%" fill="rgba(255,255,255,0.05)" />
                <ellipse cx="50%" cy="90%" rx="70%" ry="50%" fill="rgba(255,255,255,0.04)" />
              </svg>
              <div className="pwa-banner-emoji">🎀 💗 ✨</div>
              <div className="pwa-badge">FREE APP</div>
            </div>

            {/* Card body */}
            <div className="pwa-body">
              <h2 className="pwa-title" id="pwa-title">
                It would be so cool if you downloaded our app <em>🥺</em>
              </h2>
              <p className="pwa-desc">
                Get instant home screen access to Basheerah Hair Boutique — no App Store needed, completely free, works even offline 💖
              </p>

              {/* Perk pills */}
              <div className="pwa-perks">
                {[["⚡","Instant load"],["🔔","Exclusive drops"],["📦","Track orders"],["💖","Works offline"]].map(([icon,label]) => (
                  <span key={label} className="pwa-perk">{icon} {label}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pwa-actions">
              <button className="pwa-btn-primary" onClick={triggerInstall}>
                Yes, add it! 🎀
              </button>
              <button className="pwa-btn-secondary" onClick={dismiss} aria-label="Close">
                Maybe later
              </button>
            </div>

            {/* Footer */}
            <p className="pwa-footer">No download required · Just tap & it's yours</p>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      <div className={`pwa-toast ${toastVisible ? "show" : ""}`}>{toastMsg}</div>
    </>
  );
}

// ── FLOATING PETALS ──
// Decorative only. Remove this component to disable background particles.
function PetalBackground() {
  const petals = Array.from({length: 14}, (_, i) => ({
    id: i,
    size: 10 + Math.random() * 22,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 12,
    delay: -(Math.random() * 15),
    color: ["rgba(252,207,232,0.5)","rgba(236,72,153,0.3)","rgba(244,114,182,0.4)","rgba(196,181,253,0.4)","rgba(253,242,248,0.6)"][Math.floor(Math.random()*5)],
  }));

  return (
    <div className="pwa-petals" aria-hidden="true">
      {petals.map(p => (
        <div key={p.id} className="pwa-petal" style={{
          width: p.size, height: p.size,
          left: `${p.left}%`,
          background: p.color,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
        }} />
      ))}
    </div>
  );
}
