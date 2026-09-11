"use client";

import React, { useState } from "react";
import { CalculatorIcon, ArrowRightIcon, BikeIcon, CarIcon, LaptopIcon, PhoneIcon } from "./Icons";

export default function EmiCalculator({ onOpenApply }) {
  const [category, setCategory] = useState("bike");
  const [loanAmount, setLoanAmount] = useState(120000);
  const [downPayment, setDownPayment] = useState(20000);
  const [interestRate, setInterestRate] = useState(11.5);
  const [tenureMonths, setTenureMonths] = useState(24);

  // Quick category configurations
  const handleCategorySwitch = (cat) => {
    setCategory(cat);
    if (cat === "bike") {
      setLoanAmount(120000);
      setDownPayment(20000);
      setInterestRate(11.5);
      setTenureMonths(24);
    } else if (cat === "car") {
      setLoanAmount(650000);
      setDownPayment(100000);
      setInterestRate(9.2);
      setTenureMonths(48);
    } else if (cat === "laptop") {
      setLoanAmount(65000);
      setDownPayment(10000);
      setInterestRate(12.0);
      setTenureMonths(12);
    } else if (cat === "mobile") {
      setLoanAmount(45000);
      setDownPayment(5000);
      setInterestRate(12.5);
      setTenureMonths(12);
    }
  };

  // Calculation logic
  const principal = Math.max(0, loanAmount - downPayment);
  const monthlyRate = interestRate / 12 / 100;
  
  let emi = 0;
  if (principal > 0 && tenureMonths > 0) {
    if (monthlyRate === 0) {
      emi = Math.round(principal / tenureMonths);
    } else {
      emi = Math.round(
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
          (Math.pow(1 + monthlyRate, tenureMonths) - 1)
      );
    }
  }

  const totalPayment = emi * tenureMonths;
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalPercent = totalPayment > 0 ? Math.round((principal / totalPayment) * 100) : 100;
  const interestPercent = 100 - principalPercent;

  return (
    <section id="calculator" style={{ padding: "90px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Transparent Financial Planning</span>
          <h2>
            Interactive <span className="gradient-text">EMI & Loan Calculator</span>
          </h2>
          <p>
            Estimate your monthly installments with precision before you buy. Clear numbers, transparent terms, and no hidden surprises.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            padding: "36px",
            background: "linear-gradient(180deg, rgba(16, 24, 43, 0.85) 0%, rgba(10, 16, 30, 0.95) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Top category tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "36px",
            }}
          >
            {[
              { id: "bike", label: "Bike Loan", icon: BikeIcon },
              { id: "car", label: "Car Loan", icon: CarIcon },
              { id: "laptop", label: "Laptop Loan", icon: LaptopIcon },
              { id: "mobile", label: "Mobile Loan", icon: PhoneIcon },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = category === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleCategorySwitch(tab.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "100px",
                    border: isActive ? "1px solid #10B981" : "1px solid rgba(255, 255, 255, 0.08)",
                    background: isActive ? "rgba(16, 185, 129, 0.18)" : "rgba(255, 255, 255, 0.03)",
                    color: isActive ? "#34D399" : "#94A3B8",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* 2-column interactive layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
            }}
            className="calc-grid"
          >
            {/* Left Column: Sliders */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {/* Slider 1: Total Asset Value */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label style={{ fontSize: "0.9rem", color: "#CBD5E1", fontWeight: 600 }}>Total Product Cost / Value</label>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>₹{loanAmount.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max={category === "car" ? "3000000" : category === "bike" ? "400000" : "200000"}
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setLoanAmount(val);
                    if (downPayment >= val) setDownPayment(Math.round(val * 0.15));
                  }}
                  style={{ width: "100%", accentColor: "#10B981", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B", marginTop: "4px" }}>
                  <span>₹10,000</span>
                  <span>{category === "car" ? "₹30,00,000" : category === "bike" ? "₹4,00,000" : "₹2,00,000"}</span>
                </div>
              </div>

              {/* Slider 2: Down Payment */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label style={{ fontSize: "0.9rem", color: "#CBD5E1", fontWeight: 600 }}>Upfront Down Payment</label>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#38BDF8" }}>₹{downPayment.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.round(loanAmount * 0.7)}
                  step="1000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#38BDF8", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B", marginTop: "4px" }}>
                  <span>₹0 (Zero Down Payment)</span>
                  <span>Up to 70%</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label style={{ fontSize: "0.9rem", color: "#CBD5E1", fontWeight: 600 }}>Loan Tenure</label>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F59E0B" }}>{tenureMonths} Months ({Math.round((tenureMonths / 12) * 10) / 10} yrs)</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max={category === "car" ? "84" : category === "bike" ? "48" : "24"}
                  step="3"
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#F59E0B", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B", marginTop: "4px" }}>
                  <span>3 Months</span>
                  <span>{category === "car" ? "84 Months (7 yrs)" : "48 Months"}</span>
                </div>
              </div>

              {/* Slider 4: Indicative Interest Rate */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label style={{ fontSize: "0.9rem", color: "#CBD5E1", fontWeight: 600 }}>Indicative Interest Rate (p.a.)</label>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#A855F7" }}>{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="8.0"
                  max="18.0"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#A855F7", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B", marginTop: "4px" }}>
                  <span>8.0%</span>
                  <span>18.0%</span>
                </div>
              </div>
            </div>

            {/* Right Column: Output Summary Card */}
            <div
              style={{
                backgroundColor: "rgba(7, 11, 20, 0.7)",
                borderRadius: "20px",
                padding: "32px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#94A3B8", letterSpacing: "0.08em" }}>
                  ESTIMATED MONTHLY INSTALLMENT
                </span>
                <div
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                    fontWeight: 800,
                    color: "#10B981",
                    lineHeight: 1.1,
                    margin: "12px 0 24px 0",
                  }}
                >
                  ₹{emi.toLocaleString("en-IN")}
                  <span style={{ fontSize: "1rem", color: "#94A3B8", fontWeight: 500 }}> /month*</span>
                </div>

                {/* Progress split bar */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#94A3B8", marginBottom: "6px" }}>
                    <span>Principal: {principalPercent}%</span>
                    <span>Interest: {interestPercent}%</span>
                  </div>
                  <div style={{ display: "flex", height: "10px", borderRadius: "100px", overflow: "hidden", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ width: `${principalPercent}%`, backgroundColor: "#10B981" }} />
                    <div style={{ width: `${interestPercent}%`, backgroundColor: "#F59E0B" }} />
                  </div>
                </div>

                {/* Breakdown details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span style={{ color: "#94A3B8" }}>Loan Principal Amount:</span>
                    <strong style={{ color: "#F8FAFC" }}>₹{principal.toLocaleString("en-IN")}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span style={{ color: "#94A3B8" }}>Estimated Total Interest:</span>
                    <strong style={{ color: "#F59E0B" }}>₹{totalInterest.toLocaleString("en-IN")}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span style={{ color: "#94A3B8" }}>Total Amount Payable:</span>
                    <strong style={{ color: "#38BDF8" }}>₹{totalPayment.toLocaleString("en-IN")}</strong>
                  </div>
                </div>
              </div>

              {/* Action Button inside calculator */}
              <div style={{ marginTop: "28px" }}>
                <button
                  onClick={() =>
                    onOpenApply(category, {
                      estimatedAmount: principal,
                      calculatedEmi: emi,
                    })
                  }
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
                >
                  <span>Apply with This Estimate</span>
                  <ArrowRightIcon size={18} />
                </button>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.72rem", color: "#64748B", marginTop: "8px" }}>
                  *Indicative calculation. Final rate depends on partner credit guidelines & verified profile.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 900px) {
          .calc-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
