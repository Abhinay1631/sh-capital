import React from "react";
import { IndiaMapIcon, ShieldCheckIcon, StarIcon } from "./Icons";

export default function TrustStrip() {
  const stats = [
    {
      icon: "👥",
      title: "10,000+",
      subtitle: "Happy Customers",
    },
    {
      icon: "⭐",
      title: "Competitive Rates",
      subtitle: "Flexible Options",
    },
    {
      icon: "🛡️",
      title: "Transparent Process",
      subtitle: "No Hidden Charges",
    },
    {
      icon: "🇮🇳",
      title: "Across India",
      subtitle: "Serving All States",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      subtitle: "We're Always Here",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        padding: "24px 0",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "8px 0",
              }}
            >
              <div
                style={{
                  fontSize: "1.6rem",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#64748B",
                    marginTop: "2px",
                    fontWeight: 500,
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
