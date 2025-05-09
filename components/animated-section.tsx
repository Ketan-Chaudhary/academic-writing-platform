"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "none"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }
      case "fade-left":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }
      case "fade-right":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      case "none":
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
