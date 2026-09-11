import React from "react";
import { CheckCircleIcon } from "./Icons";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Personal Assistance",
      desc: "Talk directly with our team.",
    },
    {
      title: "Multiple Finance Categories",
      desc: "From vehicles to everyday technology.",
    },
    {
      title: "Convenient WhatsApp Support",
      desc: "Reach us without complicated processes.",
    },
    {
      title: "Across India",
      desc: "Serving customers beyond a single location.",
    },
    {
      title: "Transparent Communication",
      desc: "Clear information before you proceed.",
    },
    {
      title: "Product + Finance Convenience",
      desc: "Explore products and financing in one place.",
    },
  ];

  return (
    <section id="why-us" style={{ padding: "80px 0", backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 48px auto" }}>
          <span
            style={{
              color: "#C59B27",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "8px",
            }}
          >
            BUILT AROUND YOUR FINANCIAL NEEDS
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F172A" }}>
            Why Choose Sadik Capital?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {points.map((pt, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                padding: "24px",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#FEF3C7",
                  color: "#B45309",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                ✔
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>
                  {pt.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#64748B" }}>
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
