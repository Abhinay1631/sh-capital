import React from "react";
import { CallIcon, WhatsAppIcon } from "./Icons";

export default function Footer({ onOpenApply }) {
  return (
    <footer
      style={{
        backgroundColor: "#050C17",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#94A3B8",
        padding: "50px 0 24px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "36px",
            marginBottom: "40px",
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #0A1C35 40%, #C59B27 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "1rem",
                }}
              >
                SC
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF" }}>
                SH CAPITAL
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#94A3B8", marginBottom: "12px" }}>
              Finance & Asset Solutions across India. Making your next bike, car, laptop, or mobile purchase simple and accessible.
            </p>
            <div style={{ fontSize: "0.78rem", color: "#E5A93C", fontWeight: 600 }}>
              Serving customers across India | 24/7 Contact Support
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "0.92rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: "14px" }}>
              Finance Options
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Bike Finance", "Car Finance", "Laptop Finance", "Mobile Finance"].map((item) => (
                <li key={item}>
                  <a
                    href="#categories"
                    style={{ color: "#94A3B8", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E5A93C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Marketplace */}
          <div>
            <h4 style={{ fontSize: "0.92rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: "14px" }}>
              Product Inventory
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Bikes & Two-Wheelers", "New & Pre-Owned Cars", "Work & Student Laptops", "Flagship Smartphones"].map((item) => (
                <li key={item}>
                  <a
                    href="#marketplace"
                    style={{ color: "#94A3B8", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E5A93C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <h4 style={{ fontSize: "0.92rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFFFFF", marginBottom: "14px" }}>
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="tel:7989308807"
                style={{ display: "flex", alignItems: "center", gap: "8px", color: "#F8FAFC", fontSize: "0.92rem", fontWeight: 700, textDecoration: "none" }}
              >
                <CallIcon size={16} style={{ color: "#E5A93C" }} />
                <span>📞 7989308807</span>
              </a>

              <a
                href="https://wa.me/917989308807?text=Hello%20SH%20Capital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20finance%20options."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "8px", color: "#25D366", fontSize: "0.88rem", textDecoration: "none" }}
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp 24/7 Desk</span>
              </a>

              <p style={{ fontSize: "0.78rem", color: "#64748B", marginTop: "4px" }}>
                Competitive Rates. Transparent Terms. Reliable Support.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            fontSize: "0.78rem",
            color: "#64748B",
          }}
        >
          <p>© {new Date().getFullYear()} SH Capital. All rights reserved.</p>
          <p>Pan-India Service | Fast Assistance | Transparent Process</p>
        </div>
      </div>
    </footer>
  );
}
