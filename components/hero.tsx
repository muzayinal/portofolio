import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-20">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl scale-110" />
            <div className="relative rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary">
              <Image
                src="/profile-2.png"
                alt="Muzayin Al Farosa"
                width={256} 
                height={256} 
                className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 p-1 shadow-2xl ring-4 ring-background"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">Muzayin Al Farosa</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">Full-Stack Web Programmer</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto">
              Full-Stack Web Programmer with 3+ years of experience in designing, developing, and optimizing web
              applications. Strong expertise in PHP (CodeIgniter), JavaScript, and MySQL with proven skills in building
              scalable systems.
            </p>
            <div className="flex flex-col gap-2 text-muted-foreground pt-2 items-center">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kec. Kertosono, Kab. Nganjuk, Jawa Timur, 64315</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:muzayinalfarosa@gmail.com" className="hover:text-primary transition-colors">
                  muzayinalfarosa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+6285745468769" className="hover:text-primary transition-colors">
                  +62 857-4546-8769
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4 justify-center">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/muzayin-al-farosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:muzayinalfarosa@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
