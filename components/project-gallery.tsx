"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/router';
const projectImages = [
    {
        title: "Internal Control System",
        image: "/semut.png",
        year: "2025",
        tags: ["PHP", "CodeIgniter", "MySQL"],
        link: null
    },
    {
        title: "Company Profile Arutihesa Capital",
        image: "/arutrihesa.png",
        year: "2024",
        tags: ["PHP", "CodeIgniter", "MySQL"],
        link: 'https://arutrihesa-capital.com'
    },
    {
        title: "Company Profile PT. Jawara Mitra Consulting",
        image: "/jawaramitraconsulting.png",
        year: "2022",
        tags: ["PHP", "CodeIgniter", "MySQL"],
        link: 'https://jawaramitraconsulting.id'
    },
    {
        title: "Best Employee System",
        image: "/employee-ranking-evaluation-dashboard-topsis.jpg",
        year: "2022",
        tags: ["PHP", "CodeIgniter", "MySQL"],
        link: null
    },
    {
        title: "DigiFile",
        image: "/digifile/img-1.png",
        year: "2023",
        tags: ["PHP", "CodeIgniter", "MySQL", "API"],
        link: 'https://digifile.id'
    },
    {
        title: "E-Commerce Admin",
        image: "/ssjaya.png",
        year: "2022",
        tags: ["PHP", "CodeIgniter", "MySQL"],
        link: 'https://ssjaya.com'
    },
]

export function ProjectGallery() {
    const handleClick = (url : string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <section id="gallery" className="py-20 scroll-mt-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
            <p className="text-lg text-muted-foreground mb-12">
            Visual showcase of my development projects and system interfaces
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((project, index) => (
                <div
                key={index}
                className={`group relative overflow-hidden rounded-lg border bg-card  transition-all hover:shadow-lg hover:scale-[1.02]${project.link ? " cursor-pointer" : ""}`}
                onClick={project.link !== null ? () => handleClick(project.link) : undefined}
                >
                <div className="aspect-video relative overflow-hidden">
                    <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm leading-tight">{project.title}</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                        {project.year}
                    </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-white/30 text-white">
                        {tag}
                        </Badge>
                    ))}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
