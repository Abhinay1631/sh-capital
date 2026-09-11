import React from "react";
import { WhatsAppIcon, CallIcon, ArrowRightIcon } from "./Icons";

export default function CtaBanner({ onOpenApply }) {
  const needs = [
    "Need a bike?",
    "Planning a car purchase?",
    "Looking for a laptop or mobile?",
    "Need financial assistance?",
  ];

  return (
    <section id="contact" style={{ padding: "80px 0", backgroundColor: "#061325" }}>
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, #0A1C35 0%, #0E284D 100%)",
            border: "1px solid rgba(236, 192, 99, 0.3)",
            borderRadius: "24px",
            padding: "56px 32px",
            textAlign: "center",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <span
              style={{
                color: "#E5A93C",
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              START THE CONVERSATION
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              Your Next Purchase Starts With{" "}
              <span style={{ color: "#ECC063" }}>One Conversation.</span>
            </h2>

            {/* 4 Prompts */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              {needs.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                    fontSize: "0.85rem",
                    color: "#F1F5F9",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#CBD5E1",
                marginBottom: "36px",
                fontWeight: 500,
              }}
            >
              Let's discuss your requirement.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <a
                href="https://wa.me/917989308807?text=Hello%20Sadik%20Capital%2C%20I%20would%20like%20to%20discuss%20my%20finance%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-solid"
                style={{ padding: "14px 28px", fontSize: "1rem" }}
              >
                <WhatsAppIcon size={20} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:7989308807"
                className="btn btn-whatsapp-outline"
                style={{ padding: "14px 24px", fontSize: "1rem" }}
              >
                <CallIcon size={18} />
                <span>📞 7989308807</span>
              </a>

              <button
                onClick={() => onOpenApply("bike")}
                className="btn btn-gold"
                style={{ padding: "14px 28px", fontSize: "1rem" }}
              >
                <span>Apply for Finance</span>
                <ArrowRightIcon size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
