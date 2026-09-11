import React from "react";
import { ArrowRightIcon } from "./Icons";

export default function HowItWorks({ onOpenApply }) {
  const steps = [
    {
      num: "01",
      title: "Choose Your Requirement",
      desc: "Tell us whether you need finance for a bike, car, laptop, mobile, or another requirement.",
    },
    {
      num: "02",
      title: "Submit Your Details",
      desc: "Share basic information and checklist documents for quick digital eligibility assessment.",
    },
    {
      num: "03",
      title: "Verification & Review",
      desc: "Our team reviews your application and discusses suitable options tailored to your budget.",
    },
    {
      num: "04",
      title: "Get Started",
      desc: "Complete the process and move forward with your purchase or financial requirement.",
    },
  ];

  return (
    <section id="how-it-works" style={{ padding: "80px 0", backgroundColor: "#FFFFFF" }}>
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
            SIMPLE PROCESS. CLEAR STEPS.
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F172A" }}>
            How It Works
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", marginTop: "10px" }}>
            Experience swift approvals with minimal documentation and transparent communication.
          </p>
        </div>

        {/* 4 Steps Horizontal Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {steps.map((s, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "28px 22px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#C59B27",
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {s.num}
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "12px",
                  borderTop: "1px solid #E2E8F0",
                  fontSize: "0.78rem",
                  color: "#94A3B8",
                  fontWeight: 600,
                }}
              >
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => onOpenApply("bike")}
            className="btn btn-gold"
            style={{ padding: "12px 28px", fontSize: "0.95rem" }}
          >
            <span>Start Your Application</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
