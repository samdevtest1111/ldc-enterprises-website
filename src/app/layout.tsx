import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "LDC Enterprises | Industrial Steam Boilers & Garment Machinery Mumbai",
    template: "%s | LDC Enterprises",
  },
  description:
    "India's leading manufacturer of high-pressure steam boilers, vacuum tables, diesel boilers, and industrial garment finishing machinery. Custom engineering and machine parts in Mumbai.",
  keywords: [
    "Industrial Steam Boilers Mumbai",
    "Garment Finishing Machinery India",
    "Vacuum Ironing Tables",
    "Diesel Fired Boilers",
    "Steam Iron Parts",
    "Industrial Laundry Machines",
    "LDC Enterprises Asalfa",
    "Boiler Manufacturer Mumbai",
    "Custom Industrial Machinery",
  ],
  metadataBase: new URL("https://ldcenterprises.com"), // Replace with actual domain later
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col font-sans text-slate-900 bg-white`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
