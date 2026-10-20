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
  metadataBase: new URL("https://hariniharinisri021.github.io"),
  title: "Harini | MBA Candidate & Business Strategist",
  description:
    "Official portfolio of Harini, First Year MBA student specializing in Corporate Strategy, Management Consulting, and Business Analytics.",
  keywords: [
    "Harini",
    "MBA Candidate",
    "Management Consulting",
    "Corporate Strategy",
    "Business Analytics",
    "Case Studies",
    "Portfolio",
  ],
  authors: [{ name: "Harini" }],
  openGraph: {
    title: "Harini | MBA Candidate & Business Strategist",
    description:
      "Showcasing strategic case studies, business analytics, achievements, and leadership in MBA.",
    images: [
      {
        url: "/harini_profile.jpg",
        width: 1000,
        height: 1000,
        alt: "Harini Sri - MBA Candidate",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased bg-[#080C16] text-[#F8FAFC] selection:bg-indigo-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
