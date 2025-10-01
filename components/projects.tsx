"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { 
  Badge,
 } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Internal Control System",
    year: "2025",
    description:
      "Comprehensive workflow monitoring system for PT. Jawara Mitra Consulting to track and manage internal processes and controls.",
    tags: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
  },
  {
    title: "Selection System (Motorcycle Credit Scoring)",
    year: "2025",
    description:
      "Decision support system for motorcycle credit approval using Profile Matching algorithm to evaluate applicant eligibility.",
    tags: ["PHP", "Profile Matching", "MySQL", "Decision Support"],
  },
  {
    title: "Best Employee System",
    year: "2024",
    description:
      "Employee ranking and evaluation system using TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) and ROC (Rank Order Centroid) methods.",
    tags: ["PHP", "TOPSIS", "ROC", "MySQL"],
  },
  {
    title: "DigiFile",
    year: "2023",
    description:
      "Digital file management system integrated with Privy API for secure login, electronic signatures (e-Sign), and digital stamps (e-Materai).",
    tags: ["PHP", "Privy API", "e-Sign", "e-Materai"],
  },
  {
    title: "Online Bus Booking System",
    year: "2023",
    description:
      "End-to-end bus ticketing application with payment integration and electronic ticket generation for seamless booking experience.",
    tags: ["PHP", "CodeIgniter", "Payment Gateway", "MySQL"],
  },
  {
    title: "Student Excellence System",
    year: "2023",
    description:
      "Decision support system using SAW (Simple Additive Weighting) method for fair and objective student selection based on multiple criteria.",
    tags: ["PHP", "SAW Method", "MySQL", "Decision Support"],
  },
  {
    title: "E-Commerce Admin Panel",
    year: "2022",
    description:
      "Comprehensive admin dashboard for e-commerce management with automated inventory tracking and invoice generation.",
    tags: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
  },
  {
    title: "PPDB Online System",
    year: "2022",
    description:
      "Online student admission management system (Penerimaan Peserta Didik Baru) for streamlined enrollment processes.",
    tags: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
  },
  {
    title: "Pajak Mudah",
    year: "2022",
    description:
      "Automated tax calculation system for monthly and yearly tax computations, simplifying tax management for businesses.",
    tags: ["PHP", "CodeIgniter", "MySQL", "Tax Automation"],
  },
]

export function Projects() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  const images = ["/Certificate-Muzayin-Al-Farosa.jpg", "/Certificate-Muzayin-Al-Farosa-2.jpg"]

  const handleOpen = (project) => {
    setSelectedProject(project) // simpan data project
    setOpen(true)               // buka modal
  }
  const nextImage = () => setIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground mb-12">
          A selection of projects I've developed over the years, showcasing expertise in decision support systems,
          business applications, and web development
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col" onClick={project.title === "DigiFile" ? () => handleOpen(project) : undefined}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <Badge variant="outline" className="shrink-0">
                    {project.year}
                  </Badge>
                </div>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Certificates</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-center">
              <img
                src={images[index]}
                alt={`Certificate ${index + 1}`}
                className="rounded-lg shadow-lg max-h-[70vh] object-contain"
              />

              {/* Controls */}
              <div className="flex justify-between w-full mt-4">
                <Button variant="outline" onClick={prevImage} className="cursor-pointer">Previous</Button>
                <Button variant="outline" onClick={nextImage} className="cursor-pointer">Next</Button>
              </div>

              {/* Indicator */}
              <p className="text-sm mt-2">
                {index + 1} / {images.length}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
