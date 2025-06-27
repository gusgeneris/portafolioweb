"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Briefcase,
  Download,
} from "lucide-react"
import {
  Cloud,
  Workflow,
} from "lucide-react";
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    { name: "JavaScript", icon: Code, color: "primary" },
    { name: "PHP", icon: Code, color: "accent" },
    { name: "React", icon: Globe, color: "secondary" },
    { name: "Node.js", icon: Server, color: "accent" },
    { name: "MySQL", icon: Database, color: "secondary" },
    { name: "PostgreSQL", icon: Database, color: "primary" },
    { name: "jQuery", icon: Code, color: "secondary" },
    { name: "Git", icon: GitBranch, color: "primary" },
    { name: "AWS", icon: Cloud, color: "primary" },
    { name: "n8n", icon: Workflow, color: "primary" },
    { name: "Yii2", icon: Code, color: "accent" },
    { name: "Wordpress", icon: Code, color: "accent" },
  ];

  const projects = [
    {
      title: "Sistema de Gestión Comercial",
      description: "Plataforma multitienda para control de stock, ventas POS y carga automática de productos con IA desde PDFs o imágenes. Integra React, permite respuestas automáticas en Instagram basadas en la base de datos de cada tienda.",
      image: "/comercia.png?height=200&width=300",
      technologies: ["React", "Node.js", "n8n", "OCR", "Instagram API", "PostgreSQL"],
      github: "https://github.com/gusgeneris", 
      demo: "https://app.comerciaapp.com/",   
      featured: true,
      accent: "accent",
    },
   {
      title: "Sistema Educativo",
      description: "App web para la gestión integral de instituciones educativas: carreras, cátedras, docentes, alumnos, horarios y asistencia. Incluye login con perfiles y dashboard con estadísticas.",
      image: "/proyectogestion.png?height=200&width=300",
      technologies: ["PHP", "MySQL", "jQuery", "CSS", "PDF Export", "Charts"],
      github: "https://github.com/gusgeneris/proyecto-sistema-educativo", 
      demo: "",   
      featured: false,
      accent: "primary",
    },
    {
      title: "Portfolio Website",
      description: "Sitio web personal responsivo y diseño moderno.",
      image: "/porfolioweb.png?height=200&width=300",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      accent: "primary",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Bauhaus geometric background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rotate-45"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 clip-triangle"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-primary/5"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b-2 border-primary z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="text-2xl font-black tracking-tight">
              <span className="bg-primary text-primary-foreground px-3 py-1">GUSS</span>
              <span className="ml-1">DEV</span>
            </Link>
            <div className="hidden md:flex space-x-8 font-medium">
              <Link href="#about" className="hover:text-primary transition-colors uppercase tracking-wide">
                Sobre mí
              </Link>
              <Link href="#skills" className="hover:text-accent transition-colors uppercase tracking-wide">
                Habilidades
              </Link>
              <Link href="#projects" className="hover:text-secondary transition-colors uppercase tracking-wide">
                Proyectos
              </Link>
              {/* <Link href="#contact" className="hover:text-primary transition-colors uppercase tracking-wide">
                Contacto
              </Link> */}
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="outline" size="sm" className="border-2 border-primary font-bold bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -top-5 -left-4 w-8 h-8 bg-accent"></div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  GUSTAVO
                  <br />
                  <span className="text-primary">SANDOVAL</span>
                </h1>
                <div className="absolute -bottom-2 right-0 w-12 h-2 bg-secondary"></div>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
               Fullstack Developer, actualmente como freelance.
               <br />
                  Estuve en <a href="https://isurgob.com/" className="text-primary">IsurGob </a> y colaboré con la empresa
                <a href="https://materiasistemas.com.ar/" className="text-primary"> Materia.</a>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <div className="w-3 h-3 bg-primary"></div>
                  <span>Formosa, Argentina</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <div className="w-3 h-3 bg-accent"></div>
                  <span>Disponible para proyectos</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold px-8">
                  CONTACTAR
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 bg-transparent"
                  onClick={() => window.open("https://github.com/gusgeneris", "_blank")}>
                  GITHUB
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-background border-4 border-foreground">
                  <Image
                    src="/profile001.jpg?height=400&width=300"
                    alt="Profile"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30 relative">
        <div className="absolute top-10 right-10 w-6 h-6 bg-primary"></div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-4xl font-black mb-2 flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent"></div>
                  SOBRE MÍ
                </h2>
                <div className="w-24 h-1 bg-primary"></div>
              </div>

              <div className="space-y-6 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  ¡Hola, soy Gustavo! Soy un Técnico desarrollador de software.

                  Bienvenido a mi lugar en la web para proyectos que he creado, artículos relacionados al desarrollo, reflexiones y cualquier otra cosa que quiera mostrarle al mundo.

                  Soy entusiasta a la hora de resolver problemas y busco siempre ser de ayuda para todo aquel que me necesita. Mi camino en el desarrollo de sistemas comenzó en el 2019 pero mi vida siempre estuvo ligada a la tecnología, desde la reparación de hardware hasta el diseño gráfico.

                </p>
                <p className="text-muted-foreground leading-relaxed">
                 Soy entusiasta a la hora de resolver problemas y busco siempre ser de ayuda para todo aquel que me necesita. Mi camino en el desarrollo de sistemas comenzó en el 2019 pero mi vida siempre estuvo ligada a la tecnología, desde la reparación de hardware hasta el diseño gráfico.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mi sitio no tiene anuncios, ni enlaces de afiliados, ni seguimiento, ni análisis, ni publicaciones patrocinadas.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
                  onClick={() => window.open("https://www.linkedin.com/in/gustavo-sandoval/", "_blank")}
                >
                  LINKEDIN
                </Button>
                {/* <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold bg-transparent"
                >
                  EMAIL
                </Button> */}
              </div>
            </div>

            <div className="relative">
              <Card className="border-2 border-foreground shadow-none bg-card">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2 font-black text-xl">
                    <Briefcase className="w-6 h-6" />
                    EXPERIENCIA
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full"></div>
                      <h4 className="font-bold text-lg">Front/Backend Developer</h4>
                      <p className="text-muted-foreground font-medium">Freelancer • 2025 - Presente</p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-accent rounded-full"></div>
                      <h4 className="font-bold text-lg">Front/Backend Developer</h4>
                      <p className="text-muted-foreground font-medium">Material • 2023 - 2024</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Desarrollo de sistemas a medida para diversos sectores. Trabajé con tecnologías como <strong>Yii</strong>, <strong>PHP</strong>, <strong>React</strong>, <strong>Three.js</strong> y <strong>Material UI</strong>. Integración de <strong>APIs de Google</strong> (como Pipeline) y despliegue en <strong>AWS</strong>. Uso de <strong>Git</strong> y <strong>Jira</strong> para control de versiones y gestión de tareas.
                      </p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-secondary rounded-full"></div>
                      <h4 className="font-bold text-lg">Front/Backend Developer</h4>
                      <p className="text-muted-foreground font-medium">Isur • 2022 - 2024</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Empresa enfocada en el desarrollo y mantenimiento de sistemas de administración municipal en Argentina (El Bolsón, Rawson, El Hoyo, entre otros). Participé en proyectos con tecnologías como <strong>Yii</strong>, <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>jQuery</strong> y <strong>APIs de integración bancaria</strong>.
                      </p>
                    </div>
                  </div>
                </CardContent>


              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute bottom-10 left-10 w-4 h-4 bg-secondary"></div>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">HABILIDADES TÉCNICAS</h2>
            <div className="w-32 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              const colorClass =
                skill.color === "primary"
                  ? "border-primary bg-primary/10"
                  : skill.color === "accent"
                    ? "border-accent bg-accent/10"
                    : "border-secondary bg-secondary/10"

              return (
                <Card
                  key={index}
                  className={`border-2 ${colorClass} shadow-none hover:shadow-lg transition-all duration-300 group`}
                >
                  <CardContent className="p-6 text-center">
                    <IconComponent
                      className={`w-12 h-12 mx-auto mb-4 ${
                        skill.color === "primary"
                          ? "text-primary"
                          : skill.color === "accent"
                            ? "text-accent"
                            : "text-secondary"
                      } group-hover:scale-110 transition-transform`}
                    />
                    <p className="font-bold text-sm uppercase tracking-wide">{skill.name}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30 relative">
        {/* <div className="absolute top-20 left-20 w-6 h-6 bg-accent rotate-45"></div> */}
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">PROYECTOS DESTACADOS</h2>
            <div className="w-32 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const accentColor =
                project.accent === "primary"
                  ? "border-primary"
                  : project.accent === "accent"
                    ? "border-accent"
                    : "border-secondary"

              return (
                <Card
                  key={index}
                  className={`border-2 ${accentColor} shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold">
                        DESTACADO
                      </Badge>
                    )}
                    <div
                      className={`absolute top-4 right-4 w-6 h-6 ${
                        project.accent === "primary"
                          ? "bg-primary"
                          : project.accent === "accent"
                            ? "bg-accent"
                            : "bg-secondary"
                      }`}
                    ></div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between font-black text-xl">
                      {project.title}
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:bg-primary hover:text-primary-foreground"
                        >
                          <Link href={project.github}>
                            <Github className="w-5 h-5" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:bg-accent hover:text-accent-foreground"
                        >
                          <Link href={project.demo}>
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 bg-transparent"
            >
              VER MÁS EN GITHUB
            </Button>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-4 relative">
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-secondary rotate-45"></div>
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">CONTACTO</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <Card className="border-2 border-foreground shadow-none">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="font-black text-2xl">¿TIENES UN PROYECTO EN MENTE?</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-base">
                Me encantaría escuchar sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm font-bold mb-2 block uppercase tracking-wide">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="border-2 border-muted-foreground/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-bold mb-2 block uppercase tracking-wide">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="border-2 border-muted-foreground/20 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-bold mb-2 block uppercase tracking-wide">
                  Asunto
                </label>
                <Input
                  id="subject"
                  placeholder="Asunto del mensaje"
                  className="border-2 border-muted-foreground/20 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-bold mb-2 block uppercase tracking-wide">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  className="border-2 border-muted-foreground/20 focus:border-primary"
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6">
                ENVIAR MENSAJE
              </Button>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 px-4 border-t-4 border-primary bg-muted/50">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <p className="text-muted-foreground font-medium">
              Gustavo Sandoval © 2025.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary hover:text-primary-foreground border-2 border-transparent hover:border-primary"
              onClick={() => window.open("https://github.com/gusgeneris", "_blank")}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground border-2 border-transparent hover:border-accent"
              onClick={() => window.open("https://www.linkedin.com/in/gustavo-sandoval/", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            {/* <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary hover:text-secondary-foreground border-2 border-transparent hover:border-secondary"
            >
              <Mail className="w-5 h-5" />
            </Button> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
