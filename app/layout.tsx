import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akshat Thesis & Research Services | Professional Academic Writing",
  description:
    "Professional academic writing services including thesis writing, dissertation help, research paper assistance, and publication support for students and researchers.",
  openGraph: {
    title: "Akshat Thesis & Research Services | Professional Academic Writing",
    description:
      "Professional academic writing services including thesis writing, dissertation help, research paper assistance, and publication support for students and researchers.",
    url: "https://akshatthesis.com",
    siteName: "Akshat Thesis & Research Services",
    images: [
      {
        url: "/images/logo.png",
        width: 500,
        height: 500,
        alt: "Akshat Thesis & Research Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
