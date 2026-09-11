"use client";

import React, { useState } from "react";
import { FileTextIcon } from "./Icons";

export default function DocumentsRequired({ onOpenApply }) {
  const [docCategory, setDocCategory] = useState("all");

  const docList = [
    {
      name: "Aadhaar Card",
      type: "general",
      desc: "For primary identity & address verification",
      essential: true,
    },
    {
      name: "PAN Card",
      type: "general",
      desc: "Required for credit assessment & financial KYC",
      essential: true,
    },
    {
      name: "RC Card / Vehicle Papers",
      type: "vehicle",
      desc: "For pre-owned car or vehicle transfer hypothecation",
      essential: false,
    },
    {
      name: "Bike Papers / Dealer Quotation",
      type: "vehicle",
      desc: "Dealer proforma invoice for bike financing",
      essential: false,
    },
    {
      name: "Laptop Bills / Purchase Quotation",
      type: "gadget",
      desc: "Dealer bill / quotation for new or refurbished laptop",
      essential: false,
    },
    {
      name: "Digital / Physical Signature",
      type: "general",
      desc: "Agreement signing for loan disbursal authorization",
      essential: true,
    },
  ];

  const filteredDocs = docCategory === "all" ? docList : docList.filter((d) => d.type === "general" || d.type === docCategory);

  return (
    <section id="documents" style={{ padding: "80px 0", backgroundColor: "#F8FAFC" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 40px auto" }}>
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
            WHAT YOU MAY NEED
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F172A" }}>
            Documents Required
          </h2>
          <p style={{ color: "#64748B", fontSize: "0.95rem", marginTop: "8px" }}>
            Depending on the finance or product category, here is what you may need to prepare.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "32px" }}>
          {[
            { id: "all", label: "All Categories" },
            { id: "vehicle", label: "Vehicles (Bike & Car)" },
            { id: "gadget", label: "Tech (Laptop & Mobile)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setDocCategory(tab.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "8px",
                border: docCategory === tab.id ? "1px solid #C59B27" : "1px solid #CBD5E1",
                background: docCategory === tab.id ? "#C59B27" : "#FFFFFF",
                color: docCategory === tab.id ? "#000000" : "#475569",
                fontWeight: 600,
                fontSize: "0.88rem",
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Documents */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredDocs.map((doc, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                padding: "20px",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: doc.essential ? "#FEF3C7" : "#EFF6FF",
                  color: doc.essential ? "#B45309" : "#0284C7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FileTextIcon size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>
                  {doc.name}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.45 }}>
                  {doc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "32px",
            padding: "16px 20px",
            borderRadius: "10px",
            backgroundColor: "#FFFBEB",
            border: "1px solid #FDE68A",
            textAlign: "center",
            maxWidth: "700px",
            margin: "32px auto 0 auto",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "#92400E", margin: 0 }}>
            <strong>Disclaimer:</strong> Document requirements may vary depending on the product and finance category.
          </p>
        </div>
      </div>
    </section>
  );
}
