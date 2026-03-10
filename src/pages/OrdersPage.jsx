import React from "react";
import { WHATSAPP_NUMBER } from "../data/bundles.js";

export default function OrdersPage({ orders }) {
  const isDesktop = window.innerWidth >= 1024;

  const trackOrder = (order) => {
    const msg = `Hi! I'd like to track my order ${order.id} — ${order.bundle} 💕`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  if (!orders || orders.length === 0) return (
    <div className="page">
      <div className="page-header">My Orders 📋</div>
      <div className="empty-state">
        <div className="empty-icon">📦</div>
        <h3>No orders yet</h3>
        <p>Your orders will appear here after you checkout!</p>
      </div>
    </div>
  );

  const cards = orders.map((order, i) => (
    <div key={order.id} className="order-card" style={{animationDelay:`${i*0.07}s`}}>
      <div className="order-row">
        <div>
          <div className="order-id">{order.id}</div>
          <div className="order-date">
            {order.date} · {order.bundle}{order.qty > 1 ? ` ×${order.qty}` : ""}
          </div>
        </div>
        <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:12}}>
        <span style={{fontWeight:800,color:"var(--pink-deep)",fontSize:16}}>{order.price}</span>
        <button className="btn-view" style={{width:"auto",padding:"6px 18px"}} onClick={() => trackOrder(order)}>
          Track Order
        </button>
      </div>
    </div>
  ));

  return (
    <div className="page">
      <div className="page-header">My Orders 📋</div>
      <div className={isDesktop ? "desktop-orders-grid" : ""}>{cards}</div>
      <p style={{textAlign:"center",padding:"16px",color:"var(--gray-light)",fontSize:13,fontWeight:600}}>
        💬 All order tracking is handled via WhatsApp
      </p>
    </div>
  );
}
