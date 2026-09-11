"use client";

import React, { useState } from "react";
import { WhatsAppIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "./Icons";

export default function Navbar({ onOpenApply }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero", active: true },
    { name: "About Us", href: "#why-us" },
    { name: "Finance Solutions", href: "#categories" },
    { name: "Products", href: "#marketplace" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
          padding: "14px 0",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Brand Logo matching reference screenshot */}
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0A1C35 40%, #C59B27 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "1.3rem",
                letterSpacing: "-0.05em",
                boxShadow: "0 4px 12px rgba(10, 28, 53, 0.2)",
              }}
            >
              SC
            </div>
            <div>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#0F172A",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                SH CAPITAL
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  color: "#64748B",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Finance & Asset Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              gap: "28px",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: link.active ? "#C59B27" : "#334155",
                  fontWeight: link.active ? 700 : 500,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "4px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C59B27")}
                onMouseLeave={(e) => {
                  if (!link.active) e.currentTarget.style.color = "#334155";
                }}
              >
                {link.name}
                {link.active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "15%",
                      right: "15%",
                      height: "2px",
                      backgroundColor: "#C59B27",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* WhatsApp Phone Badge matching screenshot */}
            <a
              href="https://wa.me/917989308807?text=Hello%20SH%20Capital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20finance%20options."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "none",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "#0F172A",
              }}
              className="desktop-whatsapp-badge"
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(37, 211, 102, 0.4)",
                }}
              >
                <WhatsAppIcon size={20} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600 }}>
                  Chat on WhatsApp
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0F172A" }}>
                  7989308807
                </span>
              </div>
            </a>

            {/* Gold CTA Apply Button */}
            <button
              onClick={() => onOpenApply()}
              className="btn btn-gold"
              style={{ padding: "10px 22px", fontSize: "0.92rem", borderRadius: "8px" }}
            >
              <span>Apply Now</span>
              <ArrowRightIcon size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                background: "#F1F5F9",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                color: "#1E293B",
                padding: "8px",
                cursor: "pointer",
              }}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#FFFFFF",
            zIndex: 99,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            overflowY: "auto",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: link.active ? "#C59B27" : "#0F172A",
                fontSize: "1.05rem",
                fontWeight: link.active ? 700 : 600,
                padding: "10px 0",
                borderBottom: "1px solid #F1F5F9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: "#C59B27" }}>→</span>
            </a>
          ))}

          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="https://wa.me/917989308807?text=Hello%20SH%20Capital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20finance%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-solid"
              style={{ width: "100%", padding: "12px" }}
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp: 7989308807</span>
            </a>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-whatsapp-badge {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          #mobile-menu-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
