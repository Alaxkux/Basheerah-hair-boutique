import { useState, useEffect } from "react";

export function useIsDesktop() {
  const [v, setV] = useState(() => window.innerWidth >= 1024);
  useEffect(() => {
    const mq = window.matchMedia("(min-width:1024px)");
    const h = e => setV(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return v;
}
