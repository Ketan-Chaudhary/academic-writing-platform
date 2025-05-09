"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import AnimatedSection from "@/components/animated-section"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Academic Services</h1>
                <p className="text-lg md:text-xl">
                  Comprehensive academic writing solutions tailored to your specific needs, from topic selection to
                  publication assistance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Academic Writing Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer a wide range of academic writing services to support students, researchers, and professionals
                  at every stage of their academic journey.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "BookOpen",
                  title: "Topic Selection",
                  description:
                    "Find the perfect research topic tailored to your field and interests. Our experts help you identify relevant, original, and manageable research topics.",
                },
                {
                  icon: "FileText",
                  title: "Research Proposal",
                  description:
                    "Develop compelling, well-structured research proposals that get approved. We help you articulate your research questions, methodology, and significance.",
                },
                {
                  icon: "GraduationCap",
                  title: "Thesis Writing",
                  description:
                    "Complete thesis writing support from introduction to conclusion. Our experts guide you through literature review, methodology, results, and discussion.",
                },
                {
                  icon: "BookMarked",
                  title: "Dissertation Help",
                  description:
                    "Expert dissertation assistance at every stage of your doctoral journey. We provide comprehensive support for all chapters and defense preparation.",
                },
                {
                  icon: "FileEdit",
                  title: "Research Paper Writing",
                  description:
                    "Professional writing for publication-ready research papers. Our experts help you craft well-structured, original papers that meet publication standards.",
                },
                {
                  icon: "Award",
                  title: "Publication Assistance",
                  description:
                    "Journal publication help, review paper support, and document editing. We guide you through the publication process from submission to revision.",
                },
                {
                  icon: "Edit3",
                  title: "Editing & Proofreading",
                  description:
                    "Professional editing and proofreading services to polish your academic work. We ensure clarity, coherence, and correct grammar and formatting.",
                },
                {
                  icon: "BarChart",
                  title: "Data Analysis",
                  description:
                    "Expert data analysis for quantitative and qualitative research. We help you analyze your data using appropriate statistical methods and software.",
                },
                {
                  icon: "Presentation",
                  title: "Presentation Design",
                  description:
                    "Professional academic presentation design for conferences, defense, and lectures. We create engaging slides that effectively communicate your research.",
                },
              ].map((service, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={0.1 * index}>
                  <ServiceCard icon={service.icon} title={service.title} description={service.description} detailed />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A streamlined process designed to deliver exceptional results while ensuring a smooth and transparent
                  experience for our clients.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "We discuss your requirements, timeline, and expectations to understand your needs.",
                },
                {
                  step: "2",
                  title: "Expert Assignment",
                  description: "We match you with the most qualified expert in your specific academic field.",
                },
                {
                  step: "3",
                  title: "Research & Writing",
                  description: "Your expert conducts thorough research and creates high-quality academic content.",
                },
                {
                  step: "4",
                  title: "Review & Delivery",
                  description: "We review the work for quality and deliver it to you with time for revisions.",
                },
              ].map((process, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={0.2 * index}>
                  <motion.div
                    className="bg-background p-8 rounded-lg shadow-sm text-center service-card"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-2xl font-bold text-primary">{process.step}</div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Academic Excellence?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and take the first step towards academic success.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 button-ripple">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
