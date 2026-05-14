import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./Components/NavbarWrapper";
import Footer from "./Components/Footer";
import QueryProvider from "./Providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fortune Asia Realty | Luxury Real Estate & Investment Opportunities",
description:
  "Fortune Asia Realty creates exceptional real estate experiences with transparency, expertise, and purpose. Discover luxury homes, premium investments, and spaces designed to elevate lifestyles and shape lasting futures.",
  icons: {
    icon: "/far-logo.png", // public/favicon.ico
    shortcut: "/far-logo.png",
    apple: "/far-logo.png", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <NavbarWrapper />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
