"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function Education() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const images = ["/Certificate-Muzayin-Al-Farosa.jpg", "/Certificate-Muzayin-Al-Farosa-2.jpg"]

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section id="education" className="py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>

        {/* Bachelor Card */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-1">
                  Bachelor of Informatics Engineering
                </CardTitle>
                <CardDescription className="text-base">
                  Nusantara PGRI University, Kediri
                  <br />
                  Graduated September 2022
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">GPA:</span>
              <span className="text-2xl font-bold text-primary">3.89</span>
            </div>
          </CardContent>
        </Card>

        {/* QA Course Card with modal */}
        <Card className="mt-7 cursor-pointer" onClick={() => setOpen(true)}>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-1">Manual QA Course</CardTitle>
                <CardDescription className="text-base">
                  Growia Education
                  <br />
                  Certified August 21, 2025
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

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
