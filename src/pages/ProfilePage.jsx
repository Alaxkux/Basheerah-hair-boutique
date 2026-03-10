import React, { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/bundles.js";
import { saveProfile } from "../utils/storage.js";
import ConfirmDialog from "../components/ConfirmDialog.jsx";

const AVATARS = [
  {emoji:"👩🏾",bg:"linear-gradient(135deg,#ec4899,#f472b6)"},
  {emoji:"👑",bg:"linear-gradient(135deg,#d97706,#fbbf24)"},
  {emoji:"🌸",bg:"linear-gradient(135deg,#f472b6,#c084fc)"},
  {emoji:"💜",bg:"linear-gradient(135deg,#a855f7,#818cf8)"},
  {emoji:"✨",bg:"linear-gradient(135deg,#f59e0b,#34d399)"},
  {emoji:"🖤",bg:"linear-gradient(135deg,#374151,#111827)"},
  {emoji:"🌙",bg:"linear-gradient(135deg,#6366f1,#8b5cf6)"},
  {emoji:"🦋",bg:"linear-gradient(135deg,#06b6d4,#3b82f6)"},
  {emoji:"🍓",bg:"linear-gradient(135deg,#ef4444,#f97316)"},
  {emoji:"🌻",bg:"linear-gradient(135deg,#eab308,#84cc16)"},
  {emoji:"💎",bg:"linear-gradient(135deg,#67e8f9,#818cf8)"},
  {emoji:"🔥",bg:"linear-gradient(135deg,#f43f5e,#fb923c)"},
];
const THEMES = [
  {name:"Pink Dream",  bg:"linear-gradient(135deg,#fdf2f8,#f3e8ff)", accent:"#ec4899"},
  {name:"Lavender",    bg:"linear-gradient(135deg,#f5f3ff,#eef2ff)", accent:"#8b5cf6"},
  {name:"Peach Glow",  bg:"linear-gradient(135deg,#fff7ed,#fff1f2)", accent:"#f97316"},
  {name:"Mint Fresh",  bg:"linear-gradient(135deg,#f0fdf4,#ecfeff)", accent:"#10b981"},
  {name:"Gold Luxe",   bg:"linear-gradient(135deg,#fffbeb,#fefce8)", accent:"#d97706"},
];

export default function ProfilePage({ onNavigate, orderCount, initialProfile, onProfileChange }) {
  const init = initialProfile || {name:"Hair Queen",avatarIdx:0,themeIdx:0};
  const [name,        setName]        = useState(init.name);
  const [editingName, setEditingName] = useState(false);
  const [avatarIdx,   setAvatarIdx]   = useState(init.avatarIdx);
  const [themeIdx,    setThemeIdx]    = useState(init.themeIdx);
  const [showAvatars, setShowAvatars] = useState(false);
  const [showThemes,  setShowThemes]  = useState(false);
  const [confirmAvatar, setConfirmAvatar] = useState(null); // pending avatar idx
  const [confirmTheme,  setConfirmTheme]  = useState(null); // pending theme idx
  const isDesktop = window.innerWidth >= 1024;

  const avatar = AVATARS[avatarIdx];
  const theme  = THEMES[themeIdx];

  const persist = (updates) => {
    const p = {name, avatarIdx, themeIdx, ...updates};
    saveProfile(p);
    onProfileChange && onProfileChange(p);
  };

  const saveName = () => {
    setEditingName(false);
    persist({name});
  };

  const applyAvatar = (i) => {
    setAvatarIdx(i);
    setShowAvatars(false);
    setConfirmAvatar(null);
    persist({avatarIdx:i});
  };

  const applyTheme = (i) => {
    setThemeIdx(i);
    setShowThemes(false);
    setConfirmTheme(null);
    persist({themeIdx:i});
  };

  const contact = (msg = "Hi! I need help 💕") =>
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

  const rows = [
    {icon:"📦",label:"My Orders",      sub:`${orderCount} order${orderCount!==1?"s":""}`, action:()=>onNavigate("orders")},
    {icon:"🎀",label:"Browse Bundles", sub:"See all packs",  action:()=>onNavigate("bundles")},
    {icon:"🎨",label:"App Theme",       sub:theme.name,      action:()=>setShowThemes(true)},
    {icon:"💬",label:"Chat on WhatsApp",sub:"Order or support",action:()=>contact()},
    {icon:"⭐",label:"Rate Us",         sub:"Leave a review", action:()=>contact("Hi! I'd like to leave a review 🌸")},
    {icon:"📍",label:"Track My Order",  sub:"Via WhatsApp",  action:()=>contact("Hi! I'd like to track my order 💕")},
  ];

  const avatarPicker = (
    <div className="bottom-sheet" onClick={e=>e.stopPropagation()}>
      <div className="sheet-handle" />
      <div className="sheet-title">Choose Your Avatar ✨</div>
      <div className="avatar-picker-grid">
        {AVATARS.map((a,i) => (
          <div key={i} className={`avatar-option ${i===avatarIdx?"selected":""}`}
            style={{background:a.bg,borderColor:i===avatarIdx?theme.accent:"transparent"}}
            onClick={() => setConfirmAvatar(i)}
          >{a.emoji}</div>
        ))}
      </div>
    </div>
  );

  const profileCard = (
    <div>
      <div style={{textAlign:"center",padding:"28px 24px 20px"}}>
        <div className="profile-avatar-wrap" onClick={()=>setShowAvatars(true)}>
          <div className="profile-avatar" style={{background:avatar.bg}}>{avatar.emoji}</div>
          <div className="avatar-edit-badge">✏️</div>
        </div>
        {editingName
          ? <input className="profile-name-input" value={name} autoFocus
              onChange={e=>setName(e.target.value)}
              onBlur={saveName}
              onKeyDown={e=>e.key==="Enter"&&saveName()}
              style={{borderBottomColor:theme.accent}}
            />
          : <h2 onClick={()=>setEditingName(true)}
              style={{cursor:"pointer",fontWeight:800,fontSize:20,color:"var(--dark)",marginTop:10}}>
              {name} ✏️
            </h2>
        }
        <p style={{fontSize:13,color:"var(--gray-light)",fontWeight:600,marginTop:4}}>
          Basheerah Hair Boutique VIP 💗
        </p>
      </div>
      {isDesktop && (
        <div style={{padding:"0 24px 24px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-light)",marginBottom:10,textTransform:"uppercase",letterSpacing:1}}>App Theme</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {THEMES.map((t,i) => (
              <div key={i} onClick={()=>setConfirmTheme(i)}
                style={{width:34,height:34,borderRadius:"50%",background:t.accent,cursor:"pointer",
                  border:`3px solid ${i===themeIdx?"var(--dark)":"transparent"}`,
                  boxShadow:"0 2px 8px rgba(0,0,0,0.12)",transition:"transform 0.15s"}}
                title={t.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const rowsList = (
    <div className="profile-card">
      {rows.map(({icon,label,sub,action},i,arr)=>(
        <div key={label} className="profile-row"
          style={{borderBottomWidth:i<arr.length-1?1:0,borderBottomStyle:"solid",borderBottomColor:"var(--pink-light)"}}
          onClick={action}>
          <span className="row-icon">{icon}</span>
          <div style={{flex:1}}>
            <div className="row-label">{label}</div>
            {sub && <div style={{fontSize:11,color:"var(--gray-light)",fontWeight:600,marginTop:1}}>{sub}</div>}
          </div>
          <span className="row-arrow" style={{color:theme.accent}}>›</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="page" style={{background:theme.bg}}>
      {isDesktop ? (
        <div className="desktop-profile-layout">
          <div style={{background:"#fff",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-sm)",overflow:"hidden"}}>{profileCard}</div>
          <div>{rowsList}</div>
        </div>
      ) : (
        <>{profileCard}{rowsList}</>
      )}

      {/* Avatar picker */}
      {showAvatars && (
        <div className="modal-overlay" onClick={()=>setShowAvatars(false)}>{avatarPicker}</div>
      )}

      {/* Confirm avatar change */}
      {confirmAvatar !== null && (
        <ConfirmDialog
          title="Change Avatar?"
          message={`Switch to ${AVATARS[confirmAvatar].emoji} as your profile avatar?`}
          confirmLabel="Yes, change it!"
          cancelLabel="Cancel"
          onConfirm={()=>applyAvatar(confirmAvatar)}
          onCancel={()=>setConfirmAvatar(null)}
        />
      )}

      {/* Confirm theme change */}
      {confirmTheme !== null && (
        <ConfirmDialog
          title="Change Theme? 🎨"
          message={`Switch to the "${THEMES[confirmTheme].name}" theme?`}
          confirmLabel="Yes, apply it!"
          cancelLabel="Cancel"
          onConfirm={()=>applyTheme(confirmTheme)}
          onCancel={()=>setConfirmTheme(null)}
        />
      )}

      {/* Mobile theme sheet */}
      {showThemes && !isDesktop && (
        <div className="modal-overlay" onClick={()=>setShowThemes(false)}>
          <div className="bottom-sheet" onClick={e=>e.stopPropagation()}>
            <div className="sheet-handle" />
            <div className="sheet-title">App Theme 🎨</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {THEMES.map((t,i)=>(
                <div key={i}
                  style={{display:"flex",alignItems:"center",gap:14,padding:"12px 16px",borderRadius:14,
                    background:t.bg,cursor:"pointer",border:`2px solid ${i===themeIdx?t.accent:"transparent"}`,transition:"transform 0.15s"}}
                  onClick={()=>setConfirmTheme(i)}
                >
                  <div style={{width:28,height:28,borderRadius:"50%",background:t.accent,flexShrink:0}} />
                  <span style={{fontWeight:700,fontSize:14}}>{t.name}</span>
                  {i===themeIdx && <span style={{marginLeft:"auto",fontSize:18}}>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
