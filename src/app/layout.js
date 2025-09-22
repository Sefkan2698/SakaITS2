// 3. Updated RootLayout
// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SakaITS - KI-Agenten, Webdesign & IT-Support",
  description: "Professionelle IT-Services: KI-Agenten, modernes Webdesign und zuverlässiger IT-Support aus einer Hand.",
  keywords: "KI-Agenten, Webdesign, IT-Support, Künstliche Intelligenz, Webentwicklung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}