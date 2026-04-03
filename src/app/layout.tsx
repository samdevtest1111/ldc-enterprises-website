import type { Metadata, Viewport } from "next"; // Added Viewport type
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

// 1. Separate Viewport for Next.js 14/15 standards
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#dc2626", // LDC Red
};

export const metadata: Metadata = {
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
  metadataBase: new URL("https://ldcenterprises.com"),
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
    // 2. Added data-scroll-behavior to fix the warning
    // 3. Added suppressHydrationWarning to prevent extension conflicts
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
        {/* grow ensures footer stays at bottom on short pages */}
        <main className="grow w-full">{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
