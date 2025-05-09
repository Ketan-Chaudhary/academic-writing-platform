"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "PhD Candidate, Psychology",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The thesis writing support I received was exceptional. The team helped me refine my research questions and develop a solid methodology. I couldn't have completed my PhD thesis without their guidance.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Master's Student, Engineering",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I was struggling with my research proposal until I found this service. The expert assigned to me helped me clarify my ideas and structure my proposal in a way that impressed my advisor. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Postdoctoral Researcher",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The publication assistance service was a game-changer for me. Their guidance on journal selection and manuscript preparation helped me get published in a high-impact journal. Their expertise is invaluable.",
  },
]

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Pause auto-slide on hover
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  // Resume auto-slide on mouse leave
  const resumeAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      nextTestimonial()
    }, 5000)
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students and researchers who have achieved academic success with our services
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" onMouseEnter={pauseAutoSlide} onMouseLeave={resumeAutoSlide}>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full px-4"
              >
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                      <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-primary/10">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                  <motion.blockquote
                    className="text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-lg italic">"{testimonials[activeIndex].quote}"</p>
                  </motion.blockquote>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <p className="font-bold">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-3 w-3 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-primary/30",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -left-4 -translate-y-1/2 rounded-full bg-background shadow-sm hidden md:flex"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full bg-background shadow-sm hidden md:flex"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
