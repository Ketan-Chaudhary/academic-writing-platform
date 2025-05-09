"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import AnimatedSection from "@/components/animated-section"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"
import Script from "next/script"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus: any] = useState<"idle" | "success" | "error">("idle")
  const [selectedService, setSelectedService] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize EmailJS with your user ID
      window.emailjs.init("qP6z4iL7sH7TANrnP")
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleServiceChange = (value: string) => {
    setSelectedService(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

    if (!formRef.current) return

    // Get form data
    const formData = new FormData(formRef.current)
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      service_type: formData.get("service_type"),
      message: formData.get("message"),
    }

    // Send email using EmailJS
    window.emailjs
      .send("service_14gfzxw", "template_npuxf1y", templateParams)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setFormStatus("success")
          toast({
            title: "Message Sent Successfully",
            description: "Thank you for contacting us! We'll reply soon.",
            variant: "default",
          })
          formRef.current?.reset()
          setSelectedService("")
        },
        (error) => {
          console.log("FAILED...", error)
          setFormStatus("error")
          toast({
            title: "Error Sending Message",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          })
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-lg md:text-xl">
                  Get in touch with our team of academic experts to discuss your writing needs and how we can help you
                  achieve academic excellence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection animation="fade-right">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-lg mb-8 text-muted-foreground">
                    Fill out the form below to get started with our academic writing services. Our team will get back to
                    you within 24 hours to discuss your needs.
                  </p>

                  {formStatus === "success" && (
                    <motion.div
                      className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h3 className="text-xl font-bold">Thank you for contacting us!</h3>
                      </div>
                      <p>We've received your message and will get back to you as soon as possible.</p>
                      <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => setFormStatus("idle")}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-6 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <h3 className="text-xl font-bold">Message could not be sent</h3>
                      </div>
                      <p>There was an error sending your message. Please try again later.</p>
                      <Button className="mt-4 bg-red-600 hover:bg-red-700" onClick={() => setFormStatus("idle")}>
                        Try Again
                      </Button>
                    </motion.div>
                  )}

                  {formStatus === "idle" && (
                    <motion.form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="user_name" className="text-sm font-medium">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <Input id="user_name" name="user_name" placeholder="Your full name" required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="user_email" className="text-sm font-medium">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="user_email"
                            name="user_email"
                            type="email"
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="user_phone" className="text-sm font-medium">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <Input id="user_phone" name="user_phone" placeholder="Your phone number" required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="service_type" className="text-sm font-medium">
                            Service Type <span className="text-red-500">*</span>
                          </label>
                          <Select onValueChange={handleServiceChange} value={selectedService} name="service_type">
                            <SelectTrigger id="service_type">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Topic Selection">Topic Selection</SelectItem>
                              <SelectItem value="Research Proposal">Research Proposal</SelectItem>
                              <SelectItem value="Thesis Writing">Thesis Writing</SelectItem>
                              <SelectItem value="Dissertation Help">Dissertation Help</SelectItem>
                              <SelectItem value="Research Paper Writing">Research Paper Writing</SelectItem>
                              <SelectItem value="Publication Assistance">Publication Assistance</SelectItem>
                              <SelectItem value="Editing & Proofreading">Editing & Proofreading</SelectItem>
                              <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <input type="hidden" name="service_type" value={selectedService} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project and requirements"
                          rows={5}
                          required
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="w-full md:w-auto bg-primary hover:bg-primary/90 button-ripple"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={0.2}>
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: <MapPin className="h-5 w-5 text-primary" />,
                        title: "Our Location",
                        content: ["123 Academic Avenue", "New York, NY 10001", "United States"],
                      },
                      {
                        icon: <Phone className="h-5 w-5 text-primary" />,
                        title: "Phone",
                        content: ["+1 (555) 123-4567", "Mon-Fri, 9am-6pm EST"],
                      },
                      {
                        icon: <Mail className="h-5 w-5 text-primary" />,
                        title: "Email",
                        content: ["info@academicexcellence.com", "support@academicexcellence.com"],
                      },
                      {
                        icon: <Clock className="h-5 w-5 text-primary" />,
                        title: "Working Hours",
                        content: ["Monday-Friday: 24/7", "Saturday-Sunday: 9am-5pm"],
                      },
                    ].map((item, index) => (
                      <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2">
                              {item.icon}
                              {item.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            {item.content.map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <AnimatedSection animation="fade-up" delay={0.4}>
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">How quickly can you complete my project?</h4>
                          <p className="text-muted-foreground">
                            Our turnaround time depends on the complexity and length of your project. We can accommodate
                            urgent requests with as little as 24-hour delivery for shorter assignments.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold">Do you offer revisions?</h4>
                          <p className="text-muted-foreground">
                            Yes, we offer unlimited revisions until you are completely satisfied with the final product.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold">Is my information kept confidential?</h4>
                          <p className="text-muted-foreground">
                            Absolutely. We have strict confidentiality policies in place to protect your personal
                            information and project details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 md:py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <motion.div
                className="relative h-[400px] w-full rounded-lg overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* In a real implementation, you would embed a Google Map or similar here */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map Would Be Embedded Here</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* EmailJS Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.emailjs.init("qP6z4iL7sH7TANrnP")
        }}
      />
    </PageTransition>
  )
}

// Add TypeScript declaration for EmailJS
declare global {
  interface Window {
    emailjs: {
      init: (userId: string) => void
      send: (serviceId: string, templateId: string, templateParams: any) => Promise<any>
    }
  }
}
