"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Award,
  Users,
  Clock,
  CheckCircle,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import PageTransition from "@/components/page-transition";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About Us
                </h1>
                <p className="text-lg md:text-xl">
                  We are a team of academic professionals dedicated to helping
                  students, researchers, and professionals achieve excellence in
                  their academic and professional writing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-right">
                <motion.div
                  className="relative h-[400px] rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/section.jpeg"
                    alt="Our story"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg mb-6">
                    Founded in 2010, our academic writing service was born out
                    of a passion for helping students and researchers overcome
                    the challenges of academic writing. What started as a small
                    team of PhD graduates has grown into a global network of
                    academic experts.
                  </p>
                  <p className="text-lg mb-6">
                    Our mission is to empower students and researchers with the
                    tools and support they need to excel in their academic
                    pursuits. We believe that everyone deserves access to
                    high-quality academic writing assistance, regardless of
                    their background or experience.
                  </p>
                  <p className="text-lg">
                    Today, we are proud to have helped thousands of clients from
                    over 35 countries achieve their academic goals and advance
                    their careers through our comprehensive writing services.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our work and commitment to academic
                  excellence
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="h-8 w-8 text-primary" />,
                  title: "Academic Integrity",
                  description:
                    "We uphold the highest standards of academic integrity in all our work, ensuring originality and proper citation.",
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in every project, delivering work that exceeds expectations and helps our clients achieve their goals.",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Client-Centered",
                  description:
                    "We put our clients' needs first, providing personalized support and guidance throughout the writing process.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-primary" />,
                  title: "Timeliness",
                  description:
                    "We respect deadlines and ensure that all work is delivered on time, allowing our clients to meet their academic commitments.",
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-primary" />,
                  title: "Quality Assurance",
                  description:
                    "We have rigorous quality control processes to ensure that all work meets the highest academic standards.",
                },
                {
                  icon: <Globe className="h-8 w-8 text-primary" />,
                  title: "Global Perspective",
                  description:
                    "Our diverse team brings a global perspective to academic writing, enriching the quality and relevance of our work.",
                },
              ].map((value, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={0.1 * index}
                >
                  <motion.div
                    className="bg-background p-8 rounded-lg shadow-sm service-card h-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 service-icon">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work With Our Expert Team?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your academic writing needs and how
                we can help you achieve excellence.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 button-ripple"
                >
                  <Link href="/contact">Contact Us Now</Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
