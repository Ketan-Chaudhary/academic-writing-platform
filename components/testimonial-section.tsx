"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aarti Mehta",
    role: "PhD Scholar, Sociology – JNU",
    image: "/images/test-wmen1.jpg",
    quote:
      "When I hit a wall during my literature review, this service gave me clarity and structure. Their team guided me through framing my research gap more effectively. I honestly felt more confident defending my thesis after their inputs.",
  },
  {
    id: 2,
    name: "Rohit Nair",
    role: "M.Tech Student, IIT Bombay",
    image: "/images/test-men.jpg",
    quote:
      "My research proposal lacked flow and technical depth until I took their help. The mentor assigned to me patiently worked through each section and ensured it met academic expectations. Even my guide appreciated the improvement!",
  },
  {
    id: 3,
    name: "Dr. Priya Raghavan",
    role: "Postdoctoral Fellow, IISc Bangalore",
    image: "/images/test-wmen1.jpg",
    quote:
      "Their publication support made a huge difference. From shortlisting journals to final submission, they were thorough and professional. I recently published in a Scopus-indexed journal thanks to their guidance!",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause auto-slide on hover
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume auto-slide on mouse leave
  const resumeAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students and researchers who have achieved academic
            success with our services
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={pauseAutoSlide}
          onMouseLeave={resumeAutoSlide}
        >
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
                          src={
                            testimonials[activeIndex].image ||
                            "/placeholder.svg"
                          }
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
                    <p className="text-lg italic">
                      "{testimonials[activeIndex].quote}"
                    </p>
                  </motion.blockquote>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <p className="font-bold">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </p>
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
                  index === activeIndex ? "bg-primary" : "bg-primary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
