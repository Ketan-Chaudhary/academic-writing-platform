"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <main className="flex-1">{children}</main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
