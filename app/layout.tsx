import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crowd4Test — AI-Powered Digital Quality Engineering",
  description:
    "Validate AI applications, web, mobile, APIs and enterprise software faster using AI Agents combined with a global community of expert testers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
