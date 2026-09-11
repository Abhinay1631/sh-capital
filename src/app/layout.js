import "./globals.css";

export const metadata = {
  title: "SH Capital | Flexible Finance for Bikes, Cars, Laptops & Mobile Phones",
  description:
    "Flexible finance solutions for bikes, cars, laptops, and mobile phones across India. Transparent terms, competitive rates, integrated product marketplace, and 24/7 WhatsApp assistance at 7989308807.",
  keywords: [
    "SH Capital",
    "Bike Finance",
    "Car Finance",
    "Laptop Finance",
    "Mobile Finance",
    "India Loan",
    "Flexible Finance",
    "Two Wheeler Loan",
    "Asset Purchase",
  ],
  openGraph: {
    title: "SH Capital | Finance Your Next Move With Confidence",
    description:
      "Explore flexible finance options for bikes, cars, laptops, and mobile phones with SH Capital. Pan-India service & fast WhatsApp assistance.",
    url: "https://shcapital.in",
    siteName: "SH Capital",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
