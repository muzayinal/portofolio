import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Full-Stack",
    company: "PT. Jawara Mitra Consulting",
    location: "Jakarta Selatan",
    period: "Oct 2022 – Present",
    type: "Full-time",
    responsibilities: [
      "Designed & deployed company websites and internal systems",
      "Built Internal Control System (2025) for workflow monitoring",
      "Developed DigiFile (2023) with Privy API (login, e-Sign, e-Materai)",
      "Built Pajak Mudah (2022) to automate monthly & yearly tax calculations",
    ],
  },
  {
    title: "Freelance Web Programmer",
    company: "Self-Employed",
    location: "Remote",
    period: "2021 – Present",
    type: "Freelance",
    responsibilities: [
      "Built E-Commerce Admin Panel (2022) for inventory & invoice automation",
      "Developed PPDB Online System (2022) for student admission management",
      "Delivered various custom web apps with CRUD, API integration, and performance optimization",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {exp.type === "Full-time" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <Code className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <CardDescription className="text-base">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
