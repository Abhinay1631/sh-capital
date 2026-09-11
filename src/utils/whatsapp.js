export const WHATSAPP_PHONE = "917989308807";

export function getWhatsAppUrl(text, format = "wa.me") {
  const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(text.trim());

  if (format === "app") {
    return `whatsapp://send?phone=${cleanPhone}&text=${encoded}`;
  }

  if (format === "web") {
    return `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}`;
  }

  // Standard wa.me
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}
