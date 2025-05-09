"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AnimatedSection from "@/components/animated-section"

const faqs = [
  {
    question: "What types of academic writing services do you offer?",
    answer:
      "We offer a comprehensive range of academic writing services including thesis writing, dissertation help, research paper writing, publication assistance, editing and proofreading, data analysis, and more. Our services cater to undergraduate, master's, and doctoral level students across all academic disciplines.",
  },
  {
    question: "How do you ensure the quality of your writing services?",
    answer:
      "We maintain high quality standards through a rigorous selection process for our writers, all of whom have advanced degrees in their fields. Each project undergoes multiple rounds of quality checks, including plagiarism detection, fact-checking, and editorial review before delivery to ensure it meets academic standards.",
  },
  {
    question: "What is your revision policy?",
    answer:
      "We offer unlimited revisions until you are completely satisfied with the final product. If you need any changes after receiving your completed work, simply let us know and we'll make the necessary revisions at no additional cost, provided they align with the original requirements.",
  },
  {
    question: "How do you handle confidentiality and privacy?",
    answer:
      "We take confidentiality very seriously. All client information and project details are kept strictly confidential. We use secure systems for data storage and communication, and we never share your personal information or academic work with third parties.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is based on several factors including academic level, project complexity, length, and deadline. We offer competitive rates with flexible pricing options to accommodate different budgets. Contact us for a personalized quote based on your specific requirements.",
  },
  {
    question: "How quickly can you complete my project?",
    answer:
      "Our turnaround time depends on the complexity and length of your project. We can accommodate urgent requests with as little as 24-hour delivery for shorter assignments, while longer projects like dissertations typically require more time. We always work with you to meet your deadlines.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our academic writing services
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={0.1 * index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
