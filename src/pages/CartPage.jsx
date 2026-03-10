import React, { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/bundles.js";
import ConfirmDialog from "../components/ConfirmDialog.jsx";

function CartSummary({ cart, total, onCheckout }) {
  return (
    <div style={{background:"#fff",borderRadius:"var(--radius-lg)",padding:"28px",boxShadow:"var(--shadow-sm)",position:"sticky",top:100}}>
      <div style={{fontSize:18,fontWeight:800,marginBottom:20,color:"var(--dark)"}}>Order Summary 🧾</div>
      {cart.map(i => (
        <div key={i.id} style={{display:"flex",justifyContent:"space-between",marginBottom:10,fontSize:14,fontWeight:600,color:"var(--dark)"}}>
          <span>{i.name} × {i.qty}</span>
          <span style={{color:"var(--pink-deep)",fontWeight:700}}>
            ₦{(parseInt(i.price.replace(/[₦,]/g,""))*i.qty).toLocaleString()}
          </span>
        </div>
      ))}
      <div style={{borderTop:"1.5px solid var(--pink-light)",paddingTop:16,marginTop:8,display:"flex",justifyContent:"space-between",fontSize:18,fontWeight:800}}>
        <span>Total</span><span style={{color:"var(--pink-deep)"}}>₦{total.toLocaleString()}</span>
      </div>
      <button className="btn-primary full" style={{marginTop:20}} onClick={onCheckout}>
        💬 Checkout via WhatsApp
      </button>
      <p style={{fontSize:11,color:"var(--gray-light)",textAlign:"center",marginTop:10}}>
        You'll be redirected to WhatsApp to confirm your order
      </p>
    </div>
  );
}

export default function CartPage({ cart, onUpdateQty, onRemove, onNavigate, onPlaceOrder }) {
  const isDesktop = window.innerWidth >= 1024;
  const total = cart.reduce((s,i) => s + parseInt(i.price.replace(/[₦,]/g,"")) * i.qty, 0);

  // Confirm states
  const [removeTarget, setRemoveTarget] = useState(null); // item to remove
  const [showCheckout, setShowCheckout] = useState(false); // checkout confirm

  const confirmRemove = (item) => setRemoveTarget(item);
  const doRemove = () => { onRemove(removeTarget.id); setRemoveTarget(null); };

  const confirmCheckout = () => setShowCheckout(true);
  const doCheckout = () => {
    setShowCheckout(false);
    const lines = cart.map(i => `• ${i.name} x${i.qty} — ${i.price}`).join("\n");
    const msg = `Hi! I'd like to order:\n${lines}\n\nTotal: ₦${total.toLocaleString()} 💕`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    onPlaceOrder && onPlaceOrder();
  };

  if (cart.length === 0) return (
    <div className="page">
      <div className="page-header">My Cart 🛒</div>
      <div className="empty-state">
        <div className="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some beautiful bundles!</p>
        <button className="btn-primary" onClick={() => onNavigate("bundles")}>Browse Bundles</button>
      </div>
    </div>
  );

  const items = (
    <div>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.name} className="cart-item-img" />
          <div className="cart-item-info">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price" style={{color:item.theme.primary}}>{item.price}</div>
            <div className="qty-row">
              <button className="qty-btn" onClick={() => onUpdateQty(item.id,-1)}>−</button>
              <span className="qty-value">{item.qty}</span>
              <button className="qty-btn" onClick={() => onUpdateQty(item.id,+1)}>+</button>
            </div>
          </div>
          <button className="remove-btn" onClick={() => confirmRemove(item)} title="Remove item">🗑</button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="page">
      <div className="page-header">My Cart 🛒</div>

      {isDesktop ? (
        <div className="desktop-cart-layout">
          <div>{items}</div>
          <CartSummary cart={cart} total={total} onCheckout={confirmCheckout} />
        </div>
      ) : (
        <>
          {items}
          <div style={{height:130}} />
          <div className="cart-footer">
            <div className="total-row"><span>Total</span><span>₦{total.toLocaleString()}</span></div>
            <button className="btn-primary full" onClick={confirmCheckout}>💬 Checkout via WhatsApp</button>
          </div>
        </>
      )}

      {/* Confirm remove item */}
      {removeTarget && (
        <ConfirmDialog
          title="Remove Item?"
          message={`Remove "${removeTarget.name}" from your cart?`}
          confirmLabel="Yes, remove it"
          cancelLabel="No, keep it"
          danger
          onConfirm={doRemove}
          onCancel={() => setRemoveTarget(null)}
        />
      )}

      {/* Confirm checkout */}
      {showCheckout && (
        <ConfirmDialog
          title="Ready to Order? 💕"
          message={`You're about to checkout ${cart.length} item${cart.length>1?"s":""} for ₦${total.toLocaleString()} via WhatsApp. Let's go!`}
          confirmLabel="Yes, checkout!"
          cancelLabel="Not yet"
          onConfirm={doCheckout}
          onCancel={() => setShowCheckout(false)}
        />
      )}
    </div>
  );
}
