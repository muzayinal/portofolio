import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Wrench, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Core languages and markup",
    skills: ["PHP", "JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Globe,
    description: "Development frameworks and tools",
    skills: ["CodeIgniter", "jQuery", "Bootstrap"],
  },
  {
    title: "Database",
    icon: Database,
    description: "Database management systems",
    skills: ["MySQL"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    description: "Development tools and practices",
    skills: ["Git", "GitHub", "VS Code", "REST API", "Responsive Design", "Problem Solving", "Team Collaboration"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
