"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:muzayinalfarosa@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                muzayinalfarosa@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+6285745468769" className="text-muted-foreground hover:text-primary transition-colors">
                +62 857-4546-8769
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Available for remote work</p>
            </CardContent>
          </Card>
        </div>
        <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Muzayin Al Farosa. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
