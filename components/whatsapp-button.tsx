"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "1234567890"
    const message = "Hi I need help with my thesis writing"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100] pointer-events-none">
      <motion.div
        className="pointer-events-auto"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] text-white shadow-lg transition-all duration-300 relative z-10"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        <div
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"
          style={{ animationDuration: "2s" }}
        ></div>
      </motion.div>
    </div>
  )
}
