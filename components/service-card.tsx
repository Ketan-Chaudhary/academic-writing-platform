"use client"

import type { LucideIcon } from "lucide-react"
import {
  BookOpen,
  FileText,
  GraduationCap,
  BookMarked,
  FileEdit,
  Award,
  Edit3,
  BarChart,
  Presentation,
} from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  detailed?: boolean
}

export default function ServiceCard({ icon, title, description, detailed = false }: ServiceCardProps) {
  const iconMap: Record<string, LucideIcon> = {
    BookOpen,
    FileText,
    GraduationCap,
    BookMarked,
    FileEdit,
    Award,
    Edit3,
    BarChart,
    Presentation,
  }

  const IconComponent = iconMap[icon]

  return (
    <motion.div
      className="bg-background p-6 rounded-lg shadow-sm service-card h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 service-icon"
        transition={{ duration: 0.3 }}
      >
        {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
      </motion.div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={`${detailed ? "text-muted-foreground" : "text-muted-foreground line-clamp-3"}`}>{description}</p>
    </motion.div>
  )
}
