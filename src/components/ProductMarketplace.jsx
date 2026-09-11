"use client";

import React, { useState } from "react";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";
import productsData from "@/data/products.json";

export default function ProductMarketplace({ onOpenApply }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const productBanners = [
    {
      id: "bike",
      title: "Bikes",
      image: "/images/bike_card.jpg",
      count: "15+ Models Available",
    },
    {
      id: "car",
      title: "Cars",
      image: "/images/car_card.jpg",
      count: "New & Pre-Owned",
    },
    {
      id: "laptop",
      title: "Laptops",
      image: "/images/laptop_card.jpg",
      count: "MacBooks & Workstations",
    },
    {
      id: "mobile",
      title: "Mobile Phones",
      image: "/images/mobile_card.jpg",
      count: "Flagships & 5G Phones",
    },
  ];

  const products = productsData;
  const filteredProducts = activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <section
      id="marketplace"
      style={{
        backgroundColor: "#071324",
        padding: "70px 0",
        color: "#FFFFFF",
      }}
    >
      <div className="container">
        {/* Top Banner Row matching screenshot */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            alignItems: "center",
            marginBottom: "48px",
          }}
          className="purchase-banner-grid"
        >
          {/* Left Text Block */}
          <div>
            <span
              style={{
                color: "#E5A93C",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "10px",
              }}
            >
              MORE THAN FINANCE
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
                lineHeight: 1.15,
              }}
            >
              Your Next Purchase Starts Here.
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                fontSize: "0.98rem",
                lineHeight: 1.6,
                marginBottom: "24px",
                maxWidth: "460px",
              }}
            >
              Looking for a product as well? Explore our available bikes, cars, laptops and mobile phones.
            </p>

            <button
              onClick={() => onOpenApply("bike")}
              className="btn btn-gold"
              style={{ padding: "12px 26px", fontSize: "0.95rem" }}
            >
              <span>Browse Products</span>
              <ArrowRightIcon size={16} />
            </button>
          </div>

          {/* Right 4 Horizontal Product Cards matching screenshot */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "16px",
            }}
          >
            {productBanners.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  setActiveFilter(p.id);
                  onOpenApply(p.id);
                }}
                style={{
                  backgroundColor: "rgba(15, 29, 52, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "16px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#E5A93C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  style={{
                    height: "90px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
                    }}
                  />
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>
                  {p.title}
                </h4>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#E5A93C",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  View Products →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Showcase Cards Filter & Grid */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#FFFFFF" }}>
              Featured Asset Inventory
            </h3>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                { id: "all", label: "All Items" },
                { id: "bike", label: "Bikes" },
                { id: "car", label: "Cars" },
                { id: "laptop", label: "Laptops" },
                { id: "mobile", label: "Mobiles" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "8px",
                    border: activeFilter === tab.id ? "1px solid #E5A93C" : "1px solid rgba(255, 255, 255, 0.12)",
                    background: activeFilter === tab.id ? "rgba(229, 169, 60, 0.15)" : "rgba(255, 255, 255, 0.04)",
                    color: activeFilter === tab.id ? "#ECC063" : "#94A3B8",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#0B1D36",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      height: "140px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                  </div>

                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#ECC063",
                      backgroundColor: "rgba(236, 192, 99, 0.12)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.tag}
                  </span>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#94A3B8", marginBottom: "16px" }}>
                    {item.specs}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.35)",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      marginBottom: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>Price</span>
                    <strong style={{ fontSize: "1.15rem", color: "#ECC063", fontWeight: 800 }}>{item.price}</strong>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button
                    onClick={() =>
                      onOpenApply(item.category, {
                        productName: item.name,
                        estimatedAmount: item.rawPrice,
                      })
                    }
                    className="btn btn-gold"
                    style={{ width: "100%", padding: "10px", fontSize: "0.92rem", borderRadius: "8px" }}
                  >
                    <span>Buy Now</span>
                    <ArrowRightIcon size={14} />
                  </button>

                  <a
                    href={`https://wa.me/917989308807?text=${encodeURIComponent(
                      `Hello SH Capital, I want to buy ${item.name} (Price: ${item.price}). Please share availability and purchase procedure.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-outline"
                    style={{ width: "100%", padding: "8px", fontSize: "0.82rem" }}
                  >
                    <WhatsAppIcon size={16} />
                    <span>Enquire to Buy</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .purchase-banner-grid {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
      `}</style>
    </section>
  );
}
