import React, { useState, useEffect } from "react";
import { WHATSAPP_NUMBER } from "../data/bundles.js";
import { saveProfile } from "../utils/storage.js";
import ConfirmDialog from "../components/ConfirmDialog.jsx";

const AVATARS = [
  {emoji:"👩🏾", bg:"linear-gradient(135deg,#ec4899,#f472b6)"},
  {emoji:"👑",  bg:"linear-gradient(135deg,#d97706,#fbbf24)"},
  {emoji:"🌸",  bg:"linear-gradient(135deg,#f472b6,#c084fc)"},
  {emoji:"💜",  bg:"linear-gradient(135deg,#a855f7,#818cf8)"},
  {emoji:"✨",  bg:"linear-gradient(135deg,#f59e0b,#34d399)"},
  {emoji:"🖤",  bg:"linear-gradient(135deg,#374151,#111827)"},
  {emoji:"🌙",  bg:"linear-gradient(135deg,#6366f1,#8b5cf6)"},
  {emoji:"🦋",  bg:"linear-gradient(135deg,#06b6d4,#3b82f6)"},
  {emoji:"🍓",  bg:"linear-gradient(135deg,#ef4444,#f97316)"},
  {emoji:"🌻",  bg:"linear-gradient(135deg,#eab308,#84cc16)"},
  {emoji:"💎",  bg:"linear-gradient(135deg,#67e8f9,#818cf8)"},
  {emoji:"🔥",  bg:"linear-gradient(135deg,#f43f5e,#fb923c)"},
];

// Peach Glow removed — replaced with Dark Mode (🖤)
export const THEMES = [
  {
    name: "Pink Dream",
    emoji: "🌸",
    accent: "#ec4899", accentDeep: "#db2777", accentLight: "#fce7f3",
    accentMid: "#fbcfe8", accentPale: "#fdf2f8",
    appBg: "linear-gradient(180deg,#fdf2f8 0%,#fff0f8 100%)",
    bodyBg: "#ecc6e4",
    darkMode: false,
  },
  {
    name: "Lavender",
    emoji: "💜",
    accent: "#8b5cf6", accentDeep: "#7c3aed", accentLight: "#ede9fe",
    accentMid: "#ddd6fe", accentPale: "#f5f3ff",
    appBg: "linear-gradient(180deg,#f5f3ff 0%,#ede9fe 100%)",
    bodyBg: "#c4b5fd",
    darkMode: false,
  },
  {
    name: "Mint Fresh",
    emoji: "🌿",
    accent: "#10b981", accentDeep: "#059669", accentLight: "#d1fae5",
    accentMid: "#a7f3d0", accentPale: "#f0fdf4",
    appBg: "linear-gradient(180deg,#f0fdf4 0%,#ecfeff 100%)",
    bodyBg: "#6ee7b7",
    darkMode: false,
  },
  {
    name: "Gold Luxe",
    emoji: "✨",
    accent: "#d97706", accentDeep: "#b45309", accentLight: "#fef3c7",
    accentMid: "#fde68a", accentPale: "#fffbeb",
    appBg: "linear-gradient(180deg,#fffbeb 0%,#fefce8 100%)",
    bodyBg: "#fcd34d",
    darkMode: false,
  },
  {
    name: "Dark Mode",
    emoji: "🖤",
    accent: "#a855f7", accentDeep: "#7c3aed", accentLight: "#2d1a4e",
    accentMid: "#3d1f6e", accentPale: "#1a0a2e",
    appBg: "linear-gradient(180deg,#1a0a2e 0%,#0f0118 100%)",
    bodyBg: "#0f0118",
    darkMode: true,
  },
];

// Apply theme to entire app via CSS variables + dark mode class
function applyTheme(theme) {
  const r = document.documentElement.style;
  r.setProperty("--pink",       theme.accent);
  r.setProperty("--pink-deep",  theme.accentDeep);
  r.setProperty("--pink-light", theme.accentLight);
  r.setProperty("--pink-mid",   theme.accentMid);
  r.setProperty("--pink-pale",  theme.accentPale);
  const shell = document.querySelector(".app-shell");
  if (shell) shell.style.background = theme.appBg;
  document.body.style.background = theme.bodyBg;
  // Toggle dark mode class on body
  if (theme.darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

export default function ProfilePage({ onNavigate, orderCount, initialProfile, onProfileChange }) {
  const init = initialProfile || {name:"Hair Queen", avatarIdx:0, themeIdx:0};
  const [name,          setName]          = useState(init.name);
  const [editingName,   setEditingName]   = useState(false);
  const [avatarIdx,     setAvatarIdx]     = useState(init.avatarIdx);
  const [themeIdx,      setThemeIdx]      = useState(init.themeIdx);
  const [showAvatars,   setShowAvatars]   = useState(false);
  const [confirmAvatar, setConfirmAvatar] = useState(null);
  const [confirmTheme,  setConfirmTheme]  = useState(null);

  const isDesktop = window.innerWidth >= 1024;
  const avatar = AVATARS[avatarIdx];
  const theme  = THEMES[themeIdx];

  useEffect(() => { applyTheme(THEMES[themeIdx]); }, []);

  const persist = (updates) => {
    const p = {name, avatarIdx, themeIdx, ...updates};
    saveProfile(p);
    onProfileChange && onProfileChange(p);
  };

  const saveName = () => { setEditingName(false); persist({name}); };

  const applyAvatar = (i) => {
    setAvatarIdx(i); setShowAvatars(false); setConfirmAvatar(null);
    persist({avatarIdx: i});
  };

  const applyThemeChange = (i) => {
    setThemeIdx(i); setConfirmTheme(null);
    applyTheme(THEMES[i]);
    persist({themeIdx: i});
  };

  const contact = (msg = "Hi! I need help 💕") =>
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

  const rows = [
    {icon:"📦", label:"My Orders",       sub:`${orderCount} order${orderCount!==1?"s":""}`, action:()=>onNavigate("orders")},
    {icon:"🎀", label:"Browse Bundles",  sub:"See all packs",   action:()=>onNavigate("bundles")},
    {icon:"💬", label:"Chat on WhatsApp",sub:"Order or support", action:()=>contact()},
    {icon:"⭐", label:"Rate Us",          sub:"Leave a review",  action:()=>contact("Hi! I'd like to leave a review 🌸")},
    {icon:"📍", label:"Track My Order",  sub:"Via WhatsApp",    action:()=>contact("Hi! I'd like to track my order 💕")},
  ];

  const themePicker = (
    <div className="theme-picker-row">
      <div className="theme-picker-label">App Theme 🎨</div>
      <div className="theme-dots">
        {THEMES.map((t,i) => (
          <button key={i}
            className={`theme-dot ${i === themeIdx ? "active" : ""}`}
            style={{
              background: t.darkMode ? "linear-gradient(135deg,#1a0a2e,#0f0118)" : t.accent,
              borderColor: i === themeIdx ? (t.darkMode ? "#a855f7" : "#1a1a2e") : "transparent",
              border: t.darkMode ? "3px solid" : undefined,
            }}
            title={t.name}
            onClick={() => setConfirmTheme(i)}
          >
            {t.darkMode ? <span style={{fontSize:14}}>🖤</span> : null}
          </button>
        ))}
      </div>
      <div className="theme-name-label">{theme.name}</div>
    </div>
  );

  const profileCard = (
    <div>
      <div style={{textAlign:"center", padding:"28px 24px 20px"}}>
        <div className="profile-avatar-wrap" onClick={() => setShowAvatars(true)}>
          <div className="profile-avatar" style={{background: avatar.bg}}>{avatar.emoji}</div>
          <div className="avatar-edit-badge">✏️</div>
        </div>
        {editingName
          ? <input className="profile-name-input" value={name} autoFocus
              onChange={e => setName(e.target.value)}
              onBlur={saveName}
              onKeyDown={e => e.key === "Enter" && saveName()}
              style={{borderBottomColor: theme.accent}}
            />
          : <h2 onClick={() => setEditingName(true)}
              style={{cursor:"pointer", fontWeight:800, fontSize:20, color: theme.darkMode ? "#f0e6ff" : "var(--dark)", marginTop:10}}>
              {name} ✏️
            </h2>
        }
        <p style={{fontSize:13, color:"var(--gray-light)", fontWeight:600, marginTop:4}}>
          Basheerah Hair Boutique VIP 💗
        </p>
      </div>
      <div style={{padding:"0 20px 20px"}}>{themePicker}</div>
    </div>
  );

  const rowsList = (
    <div className="profile-card">
      {rows.map(({icon,label,sub,action},i,arr) => (
        <div key={label} className="profile-row"
          style={{borderBottomWidth: i<arr.length-1 ? 1 : 0, borderBottomStyle:"solid", borderBottomColor:"var(--pink-light)"}}
          onClick={action}>
          <span className="row-icon">{icon}</span>
          <div style={{flex:1}}>
            <div className="row-label">{label}</div>
            {sub && <div style={{fontSize:11, color:"var(--gray-light)", fontWeight:600, marginTop:1}}>{sub}</div>}
          </div>
          <span className="row-arrow" style={{color: theme.accent}}>›</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="page" style={{background: theme.accentPale}}>
      {isDesktop ? (
        <div className="desktop-profile-layout">
          <div style={{background: theme.darkMode ? "#1e0a2e" : "#fff", borderRadius:"var(--radius-lg)", boxShadow:"var(--shadow-sm)", overflow:"hidden"}}>
            {profileCard}
          </div>
          <div>{rowsList}</div>
        </div>
      ) : (
        <>{profileCard}{rowsList}</>
      )}

      {showAvatars && (
        <div className="modal-overlay" onClick={() => setShowAvatars(false)}>
          <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
            <div className="sheet-handle" />
            <div className="sheet-title">Choose Your Avatar ✨</div>
            <div className="avatar-picker-grid">
              {AVATARS.map((a,i) => (
                <div key={i} className={`avatar-option ${i===avatarIdx?"selected":""}`}
                  style={{background:a.bg, borderColor: i===avatarIdx ? theme.accent : "transparent"}}
                  onClick={() => setConfirmAvatar(i)}
                >{a.emoji}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {confirmAvatar !== null && (
        <ConfirmDialog
          title="Change Avatar?"
          message={`Switch to ${AVATARS[confirmAvatar].emoji} as your profile avatar?`}
          confirmLabel="Yes, change it!"
          cancelLabel="Cancel"
          onConfirm={() => applyAvatar(confirmAvatar)}
          onCancel={() => setConfirmAvatar(null)}
        />
      )}

      {confirmTheme !== null && (
        <ConfirmDialog
          title={`Switch to "${THEMES[confirmTheme].name}"? ${THEMES[confirmTheme].emoji}`}
          message={THEMES[confirmTheme].darkMode
            ? `Switch to Dark Mode? The whole app will go beautifully dark 🖤`
            : `Switch to the "${THEMES[confirmTheme].name}" colour theme?`}
          confirmLabel="Yes, apply it!"
          cancelLabel="Cancel"
          onConfirm={() => applyThemeChange(confirmTheme)}
          onCancel={() => setConfirmTheme(null)}
        />
      )}
    </div>
  );
}
