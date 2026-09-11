"use client";

import React from "react";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloating() {
  const phoneNumber = "917989308807";
  const defaultMsg = "Hello SH Capital, I would like to know more about your finance options.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <aside
      aria-label="Contact via WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
      }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#25D366",
          padding: "10px 18px",
          borderRadius: "100px",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.45)",
          color: "#FFFFFF",
          textDecoration: "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        className="animate-pulse-glow"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            color: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WhatsAppIcon size={20} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, opacity: 0.95, lineHeight: 1.1 }}>
            Chat with Us
          </span>
          <span style={{ fontSize: "0.95rem", fontWeight: 800, lineHeight: 1.1 }}>
            7989308807
          </span>
        </div>
      </a>
    </aside>
  );
}
