"use client";

import React, { useState, useEffect } from "react";
import { CloseIcon, ArrowRightIcon, CheckCircleIcon, WhatsAppIcon, BikeIcon, CarIcon, LaptopIcon, PhoneIcon, ShieldCheckIcon } from "./Icons";

export default function ApplicationModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: initialData.category || "bike",
    productName: initialData.productName || "",
    estimatedAmount: initialData.estimatedAmount || "",
    location: "",
    employmentType: "salaried",
    hasAadhaar: true,
    hasPan: true,
    hasProductPapers: false,
    hasSignature: true,
    fullName: "",
    phoneNumber: "",
    whatsappNumber: "",
    preferredTime: "Anytime",
    notes: "",
  });

  const [refId, setRefId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitted(false);
      setCopied(false);
      if (initialData.category) {
        setFormData((prev) => ({
          ...prev,
          category: initialData.category,
          productName: initialData.productName || "",
          estimatedAmount: initialData.estimatedAmount ? initialData.estimatedAmount.toString() : "",
        }));
      }
    }
  }, [isOpen, initialData]);

  const handleClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setCopied(false);
    onClose();
  };

  if (!isOpen) return null;

  const categories = [
    { id: "bike", label: "Bike Finance", icon: BikeIcon },
    { id: "car", label: "Car Finance", icon: CarIcon },
    { id: "laptop", label: "Laptop Finance", icon: LaptopIcon },
    { id: "mobile", label: "Mobile Finance", icon: PhoneIcon },
    { id: "other", label: "Other Financial Need", icon: ShieldCheckIcon },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Generate reference ID and complete
      const generated = "SHC-" + Math.floor(100000 + Math.random() * 900000);
      setRefId(generated);
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getPlainSummaryText = () => {
    return `*New Finance Application - SH Capital*
----------------------------------------
*Reference ID:* ${refId}
*Category:* ${formData.category.toUpperCase()} Finance
*Product / Model:* ${formData.productName || "To be discussed"}
*Estimated Amount:* Rs. ${formData.estimatedAmount || "To be calculated"}
*Location / City:* ${formData.location || "India"}
*Employment:* ${formData.employmentType}

*Applicant Name:* ${formData.fullName || "Applicant"}
*Phone:* ${formData.phoneNumber}
*WhatsApp:* ${formData.whatsappNumber || formData.phoneNumber}
*Preferred Contact:* ${formData.preferredTime}

*Documents Ready:*
- Aadhaar: ${formData.hasAadhaar ? "Yes" : "Pending"}
- PAN: ${formData.hasPan ? "Yes" : "Pending"}
- Product / Vehicle Papers: ${formData.hasProductPapers ? "Yes" : "Need help"}
- Signature: ${formData.hasSignature ? "Yes" : "Pending"}

Please review my application and guide me on the next steps.`;
  };

  const handleCopySummary = () => {
    const text = getPlainSummaryText();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const generateWhatsAppSummary = () => {
    return encodeURIComponent(getPlainSummaryText());
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(5, 8, 15, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "620px",
          backgroundColor: "#0E1628",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.15)",
          overflow: "hidden",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(16, 24, 43, 0.6)",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF" }}>
              {isSubmitted ? "Application Received!" : "SH Capital Finance Application"}
            </h3>
            <span style={{ fontSize: "0.78rem", color: "#94A3B8" }}>
              {isSubmitted ? "Reference generated successfully" : `Step ${step} of 4: Fast digital enquiry`}
            </span>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              color: "#94A3B8",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
            }}
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "24px", overflowY: "auto", flexGrow: 1 }}>
          {!isSubmitted ? (
            <>
              {/* Stepper Progress Indicator */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    style={{
                      flex: 1,
                      height: "6px",
                      borderRadius: "100px",
                      backgroundColor: s <= step ? "#10B981" : "rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              {/* Step 1: What do you need finance for? */}
              {step === 1 && (
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
                    What do you need finance for?
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#94A3B8", marginBottom: "20px" }}>
                    Select your primary category to customize your approval criteria.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {categories.map((c) => {
                      const Icon = c.icon;
                      const isSelected = formData.category === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: c.id })}
                          style={{
                            padding: "16px",
                            borderRadius: "14px",
                            border: isSelected ? "2px solid #10B981" : "1px solid rgba(255, 255, 255, 0.08)",
                            background: isSelected ? "rgba(16, 185, 129, 0.14)" : "rgba(255, 255, 255, 0.03)",
                            color: isSelected ? "#34D399" : "#E2E8F0",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "10px",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <Icon size={24} />
                          <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{c.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Tell us about your requirement */}
              {step === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "4px" }}>
                      Tell us about your requirement
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                      Provide basic details on the item you wish to buy or finance.
                    </p>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                      Product / Model Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Royal Enfield Hunter 350, Swift, MacBook Air"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                        Estimated Amount (₹)
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 120000"
                        value={formData.estimatedAmount}
                        onChange={(e) => setFormData({ ...formData, estimatedAmount: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#FFFFFF",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                        Your Location / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hyderabad, Mumbai, Bangalore"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#FFFFFF",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                      Employment Type
                    </label>
                    <select
                      value={formData.employmentType}
                      onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        backgroundColor: "#162036",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    >
                      <option value="Salaried (Private / Govt)">Salaried (Private / Govt)</option>
                      <option value="Self-Employed Professional">Self-Employed Professional</option>
                      <option value="Business Owner / Trader">Business Owner / Trader</option>
                      <option value="Student / Freelancer">Student / Freelancer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Upload / Submit Documents Checklist */}
              {step === 3 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "4px" }}>
                      Document Availability Checklist
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                      Confirm which documents you have ready. This accelerates your eligibility verification.
                    </p>
                  </div>

                  {/* Security Best Practice Notice */}
                  <div
                    style={{
                      padding: "14px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(16, 185, 129, 0.08)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <ShieldCheckIcon size={22} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.8rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                      <strong>Privacy & Security Notice:</strong> We do not collect raw sensitive copies over insecure public forms. Your documents will be reviewed securely one-on-one with our verified executive.
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {[
                      { key: "hasAadhaar", label: "Aadhaar Card (Identity & Address)" },
                      { key: "hasPan", label: "PAN Card (Financial KYC)" },
                      { key: "hasProductPapers", label: "Product Quotation / RC / Vehicle Papers" },
                      { key: "hasSignature", label: "Authorized Signature ready" },
                    ].map((doc) => (
                      <label
                        key={doc.key}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          cursor: "pointer",
                        }}
                      >
                        <span style={{ fontSize: "0.9rem", color: "#F1F5F9" }}>{doc.label}</span>
                        <input
                          type="checkbox"
                          checked={formData[doc.key]}
                          onChange={(e) => setFormData({ ...formData, [doc.key]: e.target.checked })}
                          style={{ width: "18px", height: "18px", accentColor: "#10B981" }}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact Confirmation */}
              {step === 4 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "4px" }}>
                      Contact Confirmation
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                      Our team will contact you directly via WhatsApp or phone to finalize the best quote.
                    </p>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#FFFFFF",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Same as above or enter"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#FFFFFF",
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "6px" }}>
                      Preferred Contact Timing
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        backgroundColor: "#162036",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    >
                      <option value="Immediately / Anytime">Immediately / Anytime</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Success / Submission Confirmation */
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "#10B981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircleIcon size={36} />
              </div>

              <h4 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "6px" }}>
                Application Recorded!
              </h4>

              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "0.9rem",
                  color: "#38BDF8",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                Ref ID: {refId}
              </div>

              <p style={{ color: "#94A3B8", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "24px" }}>
                Thank you, <strong>{formData.fullName || "Applicant"}</strong>. Our team at <strong>SH Capital</strong> will review your details and reach out shortly via phone or WhatsApp.
              </p>

              {/* Direct WhatsApp Fast-Track Trigger */}
              <div
                style={{
                  backgroundColor: "rgba(37, 211, 102, 0.08)",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                  borderRadius: "16px",
                  padding: "20px",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p style={{ color: "#E2E8F0", fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>
                  Send your application summary directly to our WhatsApp desk:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Option 1: WhatsApp Web / Direct */}
                  <a
                    href={`https://wa.me/917989308807?text=${generateWhatsAppSummary()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: "100%", padding: "12px 20px", fontSize: "0.95rem" }}
                  >
                    <WhatsAppIcon size={20} />
                    <span>Open in WhatsApp (wa.me)</span>
                  </a>

                  {/* Option 2: WhatsApp Web Direct (Bypasses wa.me redirect) */}
                  <a
                    href={`https://web.whatsapp.com/send?phone=917989308807&text=${generateWhatsAppSummary()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: "100%", padding: "10px 16px", fontSize: "0.88rem" }}
                  >
                    <span>🌐 Open in WhatsApp Web</span>
                  </a>

                  {/* Option 3: Copy to clipboard */}
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="btn btn-outline-emerald"
                    style={{ width: "100%", padding: "10px 16px", fontSize: "0.88rem", cursor: "pointer" }}
                  >
                    <span>{copied ? "✅ Copied to Clipboard!" : "📋 Copy Application Details"}</span>
                  </button>
                </div>

                {/* Corporate Firewall Notice */}
                <div
                  style={{
                    marginTop: "6px",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(245, 158, 11, 0.08)",
                    border: "1px solid rgba(245, 158, 11, 0.2)",
                    fontSize: "0.75rem",
                    color: "#FDE68A",
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  <strong>Office / Firewall Tip:</strong> If your network firewall (e.g. Fortinet) shows a certificate error, click <em>"Advanced" → "Continue"</em> in Edge, or use <strong>Copy Application Details</strong> above and paste directly into WhatsApp.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(16, 24, 43, 0.4)",
          }}
        >
          {!isSubmitted ? (
            <>
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="btn btn-secondary"
                style={{
                  padding: "8px 18px",
                  opacity: step === 1 ? 0.4 : 1,
                  cursor: step === 1 ? "not-allowed" : "pointer",
                }}
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
                style={{ padding: "10px 24px" }}
              >
                <span>{step === 4 ? "Submit Application" : "Continue"}</span>
                <ArrowRightIcon size={16} />
              </button>
            </>
          ) : (
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setCopied(false);
                }}
                className="btn btn-outline-emerald"
                style={{ flex: 1, padding: "10px", fontSize: "0.9rem", cursor: "pointer" }}
              >
                + New Application
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-secondary"
                style={{ flex: 1, padding: "10px", fontSize: "0.9rem", cursor: "pointer" }}
              >
                Done / Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
