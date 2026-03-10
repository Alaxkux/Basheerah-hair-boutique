const KEYS = { cart:"bhb_cart", orders:"bhb_orders", profile:"bhb_profile" };
export const saveCart    = (v) => { try { localStorage.setItem(KEYS.cart,    JSON.stringify(v)); } catch {} };
export const loadCart    = ()  => { try { return JSON.parse(localStorage.getItem(KEYS.cart))    || []; } catch { return []; } };
export const saveOrders  = (v) => { try { localStorage.setItem(KEYS.orders,  JSON.stringify(v)); } catch {} };
export const loadOrders  = ()  => { try { return JSON.parse(localStorage.getItem(KEYS.orders))  || []; } catch { return []; } };
export const saveProfile = (v) => { try { localStorage.setItem(KEYS.profile, JSON.stringify(v)); } catch {} };
export const loadProfile = ()  => { try { return JSON.parse(localStorage.getItem(KEYS.profile)) || {name:"Hair Queen",avatarIdx:0,themeIdx:0}; } catch { return {name:"Hair Queen",avatarIdx:0,themeIdx:0}; } };
