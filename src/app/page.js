"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FinanceCategories from "@/components/FinanceCategories";
import ProductMarketplace from "@/components/ProductMarketplace";
import HowItWorks from "@/components/HowItWorks";
import DocumentsRequired from "@/components/DocumentsRequired";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ApplicationModal from "@/components/ApplicationModal";

export default function Home() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenApply = (category = "bike", extra = {}) => {
    setModalInitialData({
      category,
      ...extra,
    });
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      {/* Top Fixed Navbar */}
      <Navbar onOpenApply={() => handleOpenApply("bike")} />

      {/* Hero Section */}
      <Hero onOpenApply={handleOpenApply} />

      {/* Trust & Highlight Strip */}
      <TrustStrip />

      {/* Finance Categories */}
      <FinanceCategories onOpenApply={handleOpenApply} />

      {/* Integrated Product Marketplace */}
      <ProductMarketplace onOpenApply={handleOpenApply} />

      {/* How It Works (Simple 4-step timeline) */}
      <HowItWorks onOpenApply={() => handleOpenApply("bike")} />

      {/* Documents Required Checklist */}
      <DocumentsRequired onOpenApply={() => handleOpenApply("bike")} />

      {/* Why Choose SH Capital? */}
      <WhyChooseUs />

      {/* Main Bottom CTA Banner */}
      <CtaBanner onOpenApply={() => handleOpenApply("bike")} />

      {/* Comprehensive Footer */}
      <Footer onOpenApply={() => handleOpenApply("bike")} />

      {/* 24/7 WhatsApp Floating Button */}
      <WhatsAppFloating />

      {/* 4-Step Interactive Finance Application Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
        initialData={modalInitialData}
      />
    </main>
  );
}
