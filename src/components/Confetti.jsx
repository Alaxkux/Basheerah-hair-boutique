import React, { useEffect, useRef } from "react";

const COLORS = ["#f472b6","#c084fc","#fb923c","#34d399","#60a5fa","#fbbf24"];

export function spawnConfetti(x, y) {
  for (let i = 0; i < 14; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.cssText = `
      left:${x + (Math.random()-0.5)*60}px;
      top:${y}px;
      background:${COLORS[Math.floor(Math.random()*COLORS.length)]};
      width:${6+Math.random()*6}px;
      height:${6+Math.random()*6}px;
      animation-delay:${Math.random()*0.15}s;
      animation-duration:${0.6+Math.random()*0.4}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}
