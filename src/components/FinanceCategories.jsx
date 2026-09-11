"use client";

import React from "react";
import { BikeIcon, CarIcon, LaptopIcon, PhoneIcon, ArrowRightIcon } from "./Icons";

export default function FinanceCategories({ onOpenApply }) {
  const categories = [
    {
      id: "bike",
      title: "Bike Finance",
      image: "/images/bike_card.jpg",
      icon: BikeIcon,
      desc: "Get closer to your next ride with flexible options.",
    },
    {
      id: "car",
      title: "Car Finance",
      image: "/images/car_card.jpg",
      icon: CarIcon,
      desc: "Drive your future with convenient finance solutions.",
    },
    {
      id: "laptop",
      title: "Laptop Finance",
      image: "/images/laptop_card.jpg",
      icon: LaptopIcon,
      desc: "Upgrade your productivity with easy finance options.",
    },
    {
      id: "mobile",
      title: "Mobile Finance",
      image: "/images/mobile_card.jpg",
      icon: PhoneIcon,
      desc: "Get the latest smartphones with flexible plans.",
    },
  ];

  return (
    <section
      id="categories"
      style={{
        backgroundColor: "#F8FAFC",
        padding: "80px 0 60px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header matching reference */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "36px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <span
              style={{
                color: "#C59B27",
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "6px",
              }}
            >
              FINANCE FOR WHAT MATTERS MOST
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-0.02em",
              }}
            >
              Choose Your Finance Option
            </h2>
          </div>

          <button
            onClick={() => onOpenApply("bike")}
            style={{
              background: "none",
              border: "none",
              color: "#0284C7",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: 0,
            }}
          >
            <span>Explore All Solutions</span>
            <span>→</span>
          </button>
        </div>

        {/* 4 Cards Grid with Real Product Cutouts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="category-card"
                onClick={() => onOpenApply(cat.id)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                {/* Top Floating Circular Icon Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: "18px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#EFF6FF",
                    border: "1px solid #DBEAFE",
                    color: "#0284C7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <Icon size={20} />
                </div>

                {/* Real Asset Image Container */}
                <div
                  style={{
                    height: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>

                {/* Card Information */}
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      marginBottom: "6px",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#64748B",
                      lineHeight: 1.5,
                      marginBottom: "16px",
                      minHeight: "42px",
                    }}
                  >
                    {cat.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#0284C7",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
