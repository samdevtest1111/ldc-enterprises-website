import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#dc2626", // LDC Red
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ldcenterprises.in"),
  title: {
    default:
      "LDC Enterprises | Industrial Steam Boilers & Garment Machinery Mumbai",
    template: "%s | LDC Enterprises",
  },
  description:
    "India's leading manufacturer of high-pressure steam boilers, vacuum tables, and industrial garment finishing machinery. Custom engineering in Mumbai.",
  keywords: [
    "Industrial Steam Boilers Mumbai",
    "Garment Finishing Machinery India",
    "LDC Enterprises Asalfa",
    "Boiler Manufacturer Mumbai",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LDC Enterprises | Industrial Engineering Excellence",
    description:
      "Heavy-duty machinery and custom steam solutions for modern production lines.",
    url: "/",
    siteName: "LDC Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Make sure this exists in your public folder for social sharing
        width: 1200,
        height: 630,
        alt: "LDC Enterprises Industrial Machinery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className="h-full antialiased scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col font-sans text-slate-900 bg-white`}
      >
        <Navbar />
        <main className="grow w-full">{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
