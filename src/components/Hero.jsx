"use client";

import React from "react";
import Image from "next/image";
import { WhatsAppIcon, ArrowRightIcon, ShieldCheckIcon, IndiaMapIcon } from "./Icons";

export default function Hero({ onOpenApply }) {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#081528",
        background: "linear-gradient(135deg, #061120 0%, #0A1C35 50%, #0E284D 100%)",
        color: "#FFFFFF",
        paddingTop: "60px",
        paddingBottom: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-main-grid"
        >
          {/* Left Column: Copy and Actions */}
          <div style={{ zIndex: 2 }}>
            <span
              style={{
                display: "inline-block",
                color: "#E5A93C",
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              YOUR TRUSTED FINANCE PARTNER
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              Finance Your Next Move{" "}
              <span style={{ color: "#ECC063", display: "block" }}>With Confidence.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.18rem)",
                color: "#CBD5E1",
                fontWeight: 400,
                lineHeight: 1.6,
                marginBottom: "32px",
                maxWidth: "540px",
              }}
            >
              Flexible finance solutions for bikes, cars, laptops and mobile phones — designed to help you get what you need, when you need it.
            </p>

            {/* Action Buttons matching screenshot */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
                marginBottom: "44px",
              }}
            >
              <button
                onClick={() => onOpenApply("bike")}
                className="btn btn-gold"
                style={{
                  padding: "14px 28px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                }}
              >
                <span>Apply for Finance</span>
                <ArrowRightIcon size={18} />
              </button>

              <a
                href="https://wa.me/917989308807?text=Hello%20SH%20Capital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20finance%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-outline"
                style={{
                  padding: "14px 26px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                }}
              >
                <WhatsAppIcon size={20} style={{ color: "#25D366" }} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* 4 Trust Badges Horizontal Strip */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
                color: "#94A3B8",
                fontSize: "0.85rem",
                fontWeight: 500,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#ECC063" }}>🕒</span>
                <span>24/7 Contact Support</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#ECC063" }}>📍</span>
                <span>Across India</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#ECC063" }}>🛡️</span>
                <span>Safe & Transparent</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#ECC063" }}>👥</span>
                <span>Personal Assistance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Heavy Assets Visual Showcase with Floating Card */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(197, 155, 39, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "#0E1C30",
              }}
            >
              <img
                src="/images/hero_skyline.jpg"
                alt="SH Capital Real Vehicles and Technology Showcase"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  transform: "scale(1.01)",
                }}
              />

              {/* Floating Dark Glass Badge matching reference */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: "rgba(8, 21, 40, 0.88)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(236, 192, 99, 0.3)",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
                  maxWidth: "240px",
                }}
                className="hero-floating-card"
              >
                <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "10px", marginBottom: "12px" }}>
                  <strong style={{ display: "block", fontSize: "1rem", color: "#FFFFFF", letterSpacing: "0.02em" }}>
                    SH CAPITAL
                  </strong>
                  <span style={{ fontSize: "0.68rem", color: "#ECC063", fontWeight: 700, letterSpacing: "0.06em" }}>
                    FINANCE & ASSET SOLUTIONS
                  </span>
                  <div style={{ fontSize: "0.65rem", color: "#94A3B8", marginTop: "4px" }}>
                    + BIGGER + BRIGHTER + TOGETHER
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "6px",
                        backgroundColor: "rgba(236, 192, 99, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ECC063",
                      }}
                    >
                      <IndiaMapIcon size={16} />
                    </div>
                    <div>
                      <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#FFFFFF" }}>
                        PAN INDIA SERVICE
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "6px",
                        backgroundColor: "rgba(236, 192, 99, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ECC063",
                      }}
                    >
                      🕒
                    </div>
                    <div>
                      <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#FFFFFF" }}>
                        24/7 CONTACT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .hero-main-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .hero-floating-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
