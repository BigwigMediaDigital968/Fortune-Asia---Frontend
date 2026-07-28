import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./Components/NavbarWrapper";
import Footer from "./Components/Footer";
import QueryProvider from "./Providers/QueryProvider";
import Script from "next/script";

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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({
            'gtm.start': new Date().getTime(),
            event:'gtm.js'
          });
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NFR4FCJC');
      `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFR4FCJC"
            height={0}
            width={0}
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <QueryProvider>
          <NavbarWrapper />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
