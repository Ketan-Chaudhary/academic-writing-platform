"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ServiceCard from "@/components/service-card"
import CounterSection from "@/components/counter-section"
import TestimonialSection from "@/components/testimonial-section"
import FaqSection from "@/components/faq-section"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Academic background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <motion.div
              className="relative h-32 w-32 md:h-40 md:w-40 bg-white rounded-full p-2 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/logo.png"
                alt="Akshat Thesis and Research Services Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Academic Excellence Through Professional Writing
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Empowering students, researchers, and professionals with expert thesis writing, dissertation help, and
                publication assistance.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 button-ripple">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 button-ripple"
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academic Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive academic writing solutions tailored to your specific needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={0.1}>
              <ServiceCard
                icon="BookOpen"
                title="Topic Selection"
                description="Find the perfect research topic tailored to your field and interests."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.2}>
              <ServiceCard
                icon="FileText"
                title="Research Proposal"
                description="Develop compelling, well-structured research proposals that get approved."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.3}>
              <ServiceCard
                icon="GraduationCap"
                title="Thesis Writing"
                description="Complete thesis writing support from introduction to conclusion."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.4}>
              <ServiceCard
                icon="BookMarked"
                title="Dissertation Help"
                description="Expert dissertation assistance at every stage of your doctoral journey."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.5}>
              <ServiceCard
                icon="FileEdit"
                title="Research Paper Writing"
                description="Professional writing for publication-ready research papers."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.6}>
              <ServiceCard
                icon="Award"
                title="Publication Assistance"
                description="Journal publication help, review paper support, and document editing."
              />
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={0.7}>
            <div className="text-center mt-12">
              <Button asChild className="bg-secondary hover:bg-secondary/90 button-ripple">
                <Link href="/services" className="flex items-center gap-2">
                  View All Services <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Academic Writing Services?</h2>
                <p className="text-lg mb-8 text-muted-foreground">
                  We combine academic expertise with professional writing skills to deliver exceptional results that
                  help you achieve your academic and professional goals.
                </p>

                <div className="space-y-6">
                  <AnimatedSection animation="fade-up" delay={0.1}>
                    <div className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Expert Academic Writers</h3>
                        <p>Our team consists of PhD-qualified experts across various disciplines.</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={0.2}>
                    <div className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Plagiarism-Free Content</h3>
                        <p>All our work is original and passes through rigorous plagiarism checks.</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={0.3}>
                    <div className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                        <p>We respect deadlines and ensure your work is delivered on time, every time.</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                <AnimatedSection animation="fade-up" delay={0.4}>
                  <Button asChild className="mt-8 bg-primary hover:bg-primary/90 button-ripple">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={0.2}>
              <motion.div
                className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Academic professionals"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Academic Journey?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and take the first step towards academic excellence.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 button-ripple">
                <Link href="/contact">Get Started Now</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
