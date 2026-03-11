import React from "react";

// Double-confirmation dialog with matching cancel button
// Used for: removing cart items, clearing cart, placing orders
export default function ConfirmDialog({ title, message, confirmLabel = "Yes, go ahead", cancelLabel = "No, cancel", onConfirm, onCancel, danger = false }) {
  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-dialog" onClick={e => e.stopPropagation()}>
        <div className="confirm-icon">{danger ? "⚠️" : "💗"}</div>
        <h3 className="confirm-title">{title}</h3>
        <p className="confirm-msg">{message}</p>
        <div className="confirm-btns">
          {/* Cancel — always shown first, styled to match theme */}
          <button className="confirm-cancel-btn" onClick={onCancel}>{cancelLabel}</button>
          {/* Confirm */}
          <button
            className={`confirm-ok-btn ${danger ? "danger" : ""}`}
            onClick={onConfirm}
          >{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}
