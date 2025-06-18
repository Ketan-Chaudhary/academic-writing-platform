import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaudhary Thesis & Research Services | Professional Academic Writing",
  description:
    "Professional academic writing services including thesis writing, dissertation help, research paper assistance, and publication support for students and researchers.",
  openGraph: {
    title:
      "Chaudhary Thesis & Research Services | Professional Academic Writing",
    description:
      "Professional academic writing services including thesis writing, dissertation help, research paper assistance, and publication support for students and researchers.",
    url: "https://codewithketan.me",
    siteName: "Chaudhary Thesis & Research Services",
    images: [
      {
        url: "/favicon.ico",
        width: 500,
        height: 500,
        alt: "Chaudhary Thesis & Research Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
