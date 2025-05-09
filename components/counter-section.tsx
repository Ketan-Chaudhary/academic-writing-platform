"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

function Counter({ end, duration, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const countingRef = useRef(false)

  useEffect(() => {
    if (isInView && !countingRef.current) {
      countingRef.current = true
      let startTime: number | null = null
      let animationFrameId: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate)
        }
      }

      animationFrameId = requestAnimationFrame(animate)

      return () => {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      className="animate-counter"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl md:text-5xl font-bold">{count}</span>
      {suffix}
    </motion.div>
  )
}

export default function CounterSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Counter end={1200} duration={2000} suffix="+" />
            <p className="text-xl mt-2">Completed Projects</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Counter end={35} duration={2000} suffix="+" />
            <p className="text-xl mt-2">Global Clients</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Counter end={100} duration={2000} suffix="+" />
            <p className="text-xl mt-2">Research Experts</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
