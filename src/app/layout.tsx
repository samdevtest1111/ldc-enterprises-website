import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LDC Enterprises | Precision Steam & Machinery",
  description:
    "High-performance industrial steam generation and garment machinery solutions.",
  icons: {
    icon: "/favicon.ico", // Ensure you add a favicon later for a pro look
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col font-sans`}
      >
        {/* Navbar will be imported here next */}
        {children}
        {/* Footer will go here */}
      </body>
    </html>
  );
}
