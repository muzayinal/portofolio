"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    title: "Pajak Mudah",
    year: "2022",
    description:
      "Automated tax calculation system for monthly and yearly tax computations, simplifying tax management for businesses.",
    tags: ["PHP", "CodeIgniter", "MySQL", "Tax Automation"],
  },
]

type Project = {
  title: string
  year: string
  description: string
  tags: string[]
}

export function Projects() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [selectedTitle, setSelectedTitle] = useState<string>("")

  // 🖼️ Daftar images untuk tiap project
  const images: { [key: string]: string[] } = {
    DigiFile: [
      "/digifile/img-1.png",
      "/digifile/img-2.png",
      "/digifile/img-3.png",
      "/digifile/img-4.png",
      "/digifile/img-5.png",
      "/digifile/img-6.png",
      "/digifile/img-7.png"
    ]
  }

  const handleOpen = (title: string) => {
    if (images[title]) {
      setSelectedTitle(title)
      setSelectedImages(images[title]) // simpan array gambar
      setIndex(0) // reset index ke awal
      setOpen(true) // buka modal
    }
  }

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % selectedImages.length)
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length)

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground mb-12">
          A selection of projects I've developed over the years, showcasing
          expertise in decision support systems, business applications, and web
          development
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const clickable = !!images[project.title] // bisa klik kalau ada gambar
            return (
              <Card
                key={project.title}
      className={`flex flex-col ${images[project.title] ? "cursor-pointer hover:shadow-lg" : ""}`}
      onClick={images[project.title] ? () => handleOpen(project.title) : undefined}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg leading-tight">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="shrink-0">
                      {project.year}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
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
            )
          })}
        </div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedTitle} – Documentation</DialogTitle>
            </DialogHeader>
            {selectedImages.length > 0 && (
              <div className="flex flex-col items-center">
                <img
                  src={selectedImages[index]}
                  alt={`img-${index + 1}`}
                  className="rounded-lg shadow-lg max-h-[70vh] object-contain"
                />
                {/* Controls */}
                {selectedImages.length > 1 && (
                  <div className="flex justify-between w-full mt-4">
                    <Button variant="outline" onClick={prevImage}>
                      Previous
                    </Button>
                    <Button variant="outline" onClick={nextImage}>
                      Next
                    </Button>
                  </div>
                )}
                {/* Indicator */}
                <p className="text-sm mt-2">
                  {index + 1} / {selectedImages.length}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
