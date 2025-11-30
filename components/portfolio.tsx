"use client"

import { useState, useEffect, useRef } from "react"
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
  Brain,
  Network,
  Zap,
  Cpu,
  Cloud,
  Workflow,
  Bot,
  Sparkles,
  CircuitBoard,
  Layers,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ChatWidget from "@/components/chatWidget"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" 

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    setHeroVisible(true)

    // Scroll parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Intersection Observer para animaciones al hacer scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const createObserver = (
      ref: React.RefObject<HTMLElement>,
      setVisible: (visible: boolean) => void,
      threshold = 0.1
    ) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true)
            }
          },
          {
            threshold,
            rootMargin: '0px 0px -50px 0px',
          }
        )
        observer.observe(ref.current)
        observers.push(observer)
      }
    }

    createObserver(aboutRef, setAboutVisible)
    createObserver(skillsRef, setSkillsVisible)
    createObserver(projectsRef, setProjectsVisible)

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  const skills = [
    { name: "IA & Automatización", icon: Brain, color: "primary" },
    { name: "n8n Workflows", icon: Workflow, color: "primary" },
    { name: "Retell AI", icon: Bot, color: "primary" },
    { name: "Meta Graph API", icon: Network, color: "primary" },
    { name: "React", icon: Globe, color: "secondary" },
    { name: "Node.js", icon: Server, color: "secondary" },
    { name: "PostgreSQL", icon: Database, color: "secondary" },
    { name: "AWS Cloud", icon: Cloud, color: "secondary" },
    { name: "JavaScript", icon: Code, color: "accent" },
    { name: "PHP", icon: Code, color: "accent" },
    { name: "MySQL", icon: Database, color: "accent" },
    { name: "Git", icon: GitBranch, color: "accent" },
    { name: "Yii2", icon: Code, color: "accent" },
    { name: "OCR & Vision", icon: Sparkles, color: "primary" },
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
      demo: "",
      featured: false,
      accent: "primary",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
       <ChatWidget />
      
      {/* AI & Automation themed background elements with parallax */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated gradient orbs with parallax scroll */}
        <div 
          className="absolute top-20 right-4 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow animate-float"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-4 sm:left-10 w-40 h-40 sm:w-80 sm:h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animate-float" 
          style={{ 
            animationDelay: '1s',
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-36 h-36 sm:w-72 sm:h-72 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        ></div>
        
        {/* Animated circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" style={{ animation: 'circuit-flow 20s linear infinite' }}>
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5">
                <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5">
                <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1.5s" />
              </stop>
            </linearGradient>
          </defs>
          <path d="M0,100 Q200,50 400,100 T800,100" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
          <path d="M100,0 Q150,200 100,400 T100,800" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
          <path d="M800,200 Q900,300 800,400 T800,600" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
        </svg>
        
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Animated network nodes with connections */}
        <div className="absolute top-32 right-8 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-network-pulse shadow-lg shadow-primary/50">
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="absolute bottom-52 left-4 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-network-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-network-pulse shadow-lg shadow-secondary/50" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-network-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-network-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b-2 border-primary/50 shadow-lg shadow-primary/10 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        <div className="container mx-auto px-4 py-3 sm:py-4 relative z-10">
          <div className="flex justify-between items-center">
            <Link href="#" className="text-xl sm:text-2xl font-black tracking-tight group relative">
              <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-2 sm:px-3 py-1 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative z-10">GUSS</span>
              </span>
              <span className="ml-1 group-hover:text-primary transition-colors relative">
                DEV
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity group-hover:rotate-12 transition-transform duration-300">
                <Brain className="w-5 h-5 inline animate-pulse" />
              </span>
            </Link>
            <div className="hidden md:flex space-x-8 font-medium">
              <Link href="#about" className="hover:text-primary transition-colors uppercase tracking-wide relative group">
                Sobre mí
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#skills" className="hover:text-accent transition-colors uppercase tracking-wide relative group">
                Habilidades
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#projects" className="hover:text-secondary transition-colors uppercase tracking-wide relative group">
                Proyectos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-primary font-bold bg-transparent hidden sm:flex"
                asChild
              >
                <a
                  href="/cv-gustavo-sandoval.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </a>
              </Button>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    <Link
                      href="#about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      Sobre mí
                    </Link>
                    <Link
                      href="#skills"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Habilidades
                    </Link>
                    <Link
                      href="#projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-secondary transition-colors uppercase tracking-wide"
                    >
                      Proyectos
                    </Link>
                    <Button
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold bg-transparent mt-4"
                      asChild
                    >
                      <a
                        href="/cv-gustavo-sandoval.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar CV
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 relative"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div 
              className="space-y-6 sm:space-y-8"
            >
              <div className="relative">
                <div className="absolute -top-5 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent animate-pulse shadow-lg shadow-accent/50"></div>
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="inline-block hover:scale-105 transition-transform duration-300">GUSTAVO</span>
                  <br />
                  <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x hover:scale-105 transition-transform duration-300 inline-block">
                    SANDOVAL
                  </span>
                </h1>
                <div className="absolute -bottom-2 right-0 w-8 sm:w-12 h-2 bg-gradient-to-r from-primary via-accent to-secondary animate-pulse"></div>
                <div className={`flex flex-wrap items-center gap-1 sm:gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground font-mono transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse drop-shadow-lg" />
                  <span className="hover:text-primary transition-colors">Automatización & IA</span>
                  <Network className="w-3 h-3 sm:w-4 sm:h-4 text-accent ml-1 sm:ml-2 animate-pulse drop-shadow-lg" />
                  <span className="hover:text-accent transition-colors">Procesos Inteligentes</span>
                </div>
              </div>

              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               Especialista en <span className="text-primary font-bold relative group cursor-pointer">
                 <span className="relative z-10">Automatización e IA</span>
                 <span className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all"></span>
               </span>, actualmente trabajando como Junior Engineer en <a href="https://raveintelligence.com/" className="text-primary hover:underline font-semibold relative group">
                 <span className="relative z-10">RaveIntelligence</span>
                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
               </a>.
               <br />
               <br />
               Desarrollo soluciones inteligentes que automatizan procesos empresariales, integro agentes de IA conversacionales y creo workflows que optimizan operaciones comerciales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground font-medium">
                  <div className="w-3 h-3 bg-primary"></div>
                  <span>Formosa, Argentina</span>
                </div>
                {/* <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <div className="w-3 h-3 bg-accent"></div>
                  <span>Disponible para proyectos</span>
                </div> */}
              </div>

              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold px-6 sm:px-8 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all relative overflow-hidden group w-full sm:w-auto"
                 onClick={() => window.open("https://linkedin.com/in/gustavo-sandoval/", "_blank")}>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <Network className="w-4 h-4 mr-2 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">CONTACTAR</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-6 sm:px-8 bg-transparent hover:shadow-lg hover:shadow-accent/30 transition-all relative overflow-hidden group w-full sm:w-auto"
                  onClick={() => window.open("https://github.com/gusgeneris", "_blank")}>
                  <span className="absolute inset-0 bg-accent/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                  <Github className="w-4 h-4 mr-2 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">GITHUB</span>
                </Button>
              </div>
            </div>

            <div 
              ref={heroRef}
              className={`relative transition-all duration-1000 delay-300 mt-8 lg:mt-0 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div 
                ref={imageRef}
                className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto group"
              >
                {/* Glowing background effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-lg blur-2xl animate-pulse-glow group-hover:scale-110 transition-transform duration-500"
                ></div>
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-lg blur-xl animate-pulse"
                  style={{ 
                    animationDelay: '1s',
                  }}
                ></div>
                
                {/* Main image container */}
                <div 
                  className="absolute top-4 left-4 right-4 bottom-4 bg-background border-4 border-primary/50 shadow-2xl shadow-primary/20 group-hover:border-primary/80 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-secondary/10 transition-all duration-500 z-10"></div>
                  <Image
                    src="/profile001.png?height=400&width=300"
                    alt="Profile"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover relative z-0 group-hover:scale-110 transition-transform duration-500"
                    priority 
                  />
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                    }}
                  ></div>
                </div>
                
                {/* AI/Network decorative elements */}
                <div 
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float"
                >
                  <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
                </div>
                <div 
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-secondary/50 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 animate-float"
                  style={{ 
                    animationDelay: '0.5s',
                  }}
                >
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Animated network connection lines */}
                <div 
                  className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent group-hover:h-12 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-primary animate-pulse"></div>
                </div>
                <div 
                  className="absolute bottom-0 right-1/2 w-0.5 h-8 bg-gradient-to-t from-accent to-transparent group-hover:h-12 transition-all duration-300"
                >
                  <div className="absolute bottom-0 left-0 w-full h-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Rotating ring effect */}
                <div 
                  className="absolute inset-0 rounded-lg border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 animate-spin-slow"
                  style={{ 
                    animationDuration: '20s',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 bg-muted/30 relative overflow-hidden transition-all duration-1000 ${
          aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        style={{
          transform: `translateY(${aboutVisible ? Math.max(0, (scrollY - 600) * 0.1) : 0}px)`,
        }}
      >
        {/* Animated background elements */}
        <div className="absolute top-10 right-4 sm:right-10 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full animate-network-pulse shadow-lg shadow-primary/50">
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-network-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-network-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-black mb-2 flex items-center gap-2 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent"></div>
                  SOBRE MÍ
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-primary"></div>
              </div>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  ¡Hola, soy Gustavo! Especialista en <span className="text-primary font-semibold">automatización e inteligencia artificial</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Me dedico a crear soluciones que transforman procesos empresariales mediante <span className="text-accent font-semibold">workflows automatizados</span>, <span className="text-primary font-semibold">agentes de IA conversacionales</span> y sistemas que optimizan operaciones comerciales. Mi enfoque combina desarrollo fullstack con las últimas tecnologías de automatización.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajo con tecnologías como <strong>Retell AI</strong> para agentes de voz inteligentes, <strong>n8n</strong> para automatización de procesos, <strong>Meta Graph API</strong> para integración de redes sociales, y desarrollo de sistemas de <strong>OCR y visión computacional</strong> que procesan información automáticamente.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold bg-transparent text-sm sm:text-base"
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
                <CardHeader className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x text-primary-foreground relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
                  <CardTitle className="flex items-center gap-2 font-black text-xl relative z-10">
                    <Briefcase className="w-6 h-6 animate-pulse" />
                    EXPERIENCIA
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
                      <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        <Brain className="w-5 h-5 text-primary" />
                        RaveIntelligence - Junior Engineer
                      </h4>
                      <p className="text-muted-foreground font-medium"> • 2025 - Presente</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Desarrollo de soluciones de <span className="text-primary font-semibold">IA y automatización</span> para empresas. Especialización en <strong>Retell AI</strong> para agentes de voz inteligentes, integración de <strong>Meta Graph API</strong> para automatización de redes sociales, y creación de sistemas de IA que optimizan procesos comerciales y de soporte. Diseño de workflows complejos que conectan múltiples plataformas y servicios.
                      </p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-accent rounded-full"></div>
                      <h4 className="font-bold text-lg">Material</h4>
                      <p className="text-muted-foreground font-medium"> • 2023 - 2024</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Desarrollo de sistemas a medida para diversos sectores. Trabajé con tecnologías como <strong>Yii</strong>, <strong>PHP</strong>, <strong>React</strong>, <strong>Three.js</strong> y <strong>Material UI</strong>. Integración de <strong>APIs de Google</strong> (como Pipeline) y despliegue en <strong>AWS</strong>. Uso de <strong>Git</strong> y <strong>Jira</strong> para control de versiones y gestión de tareas.
                      </p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-secondary rounded-full"></div>
                      <h4 className="font-bold text-lg">Isur empresa consultora</h4>
                      <p className="text-muted-foreground font-medium"> • 2022 - 2024</p>
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
      <section 
        id="skills" 
        ref={skillsRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden transition-all duration-1000 ${
          skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        style={{
          transform: `translateY(${skillsVisible ? Math.max(0, (scrollY - 1200) * 0.08) : 0}px)`,
        }}
      >
        {/* Animated background elements */}
        <div className="absolute bottom-10 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full animate-network-pulse shadow-lg shadow-secondary/50">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="absolute top-20 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-network-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-network-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse drop-shadow-lg" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                HABILIDADES TÉCNICAS
              </h2>
              <CircuitBoard className="w-6 h-6 sm:w-8 sm:h-8 text-accent animate-pulse drop-shadow-lg" />
            </div>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto animate-pulse"></div>
            <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg hover:text-primary transition-colors cursor-default px-4">
              Especializado en <span className="text-primary font-semibold">automatización</span> e <span className="text-accent font-semibold">inteligencia artificial</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
                  className={`border-2 ${colorClass} shadow-none hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group hover:scale-110 hover:-translate-y-2 relative overflow-hidden ${
                    skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: `translateY(${skillsVisible ? Math.max(0, (scrollY - 1200 - index * 50) * 0.05) : 0}px)`,
                  }}
                >
                  {/* Animated glow effect on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    skill.color === "primary"
                      ? "bg-primary/20"
                      : skill.color === "accent"
                        ? "bg-accent/20"
                        : "bg-secondary/20"
                  }`}></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                  
                  <CardContent className="p-3 sm:p-4 lg:p-6 text-center relative z-10">
                    <div className="relative inline-block">
                      <IconComponent
                        className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 lg:mb-4 ${
                          skill.color === "primary"
                            ? "text-primary"
                            : skill.color === "accent"
                              ? "text-accent"
                              : "text-secondary"
                        } group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg`}
                      />
                      {/* Pulsing ring around icon */}
                      <div className={`absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        skill.color === "primary"
                          ? "border-primary"
                          : skill.color === "accent"
                            ? "border-accent"
                            : "border-secondary"
                      } animate-ping`} style={{ animationDuration: '2s' }}></div>
                    </div>
                    <p className="font-bold text-xs sm:text-sm uppercase tracking-wide group-hover:text-primary transition-colors duration-300 break-words">{skill.name}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={projectsRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 pb-24 sm:pb-32 md:pb-24 bg-muted/30 relative transition-all duration-1000 ${
          projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* <div className="absolute top-20 left-20 w-6 h-6 bg-accent rotate-45"></div> */}
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse drop-shadow-lg" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                PROYECTOS DESTACADOS
              </h2>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-accent animate-pulse drop-shadow-lg" />
            </div>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
            <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg hover:text-primary transition-colors cursor-default px-4">
              Soluciones con <span className="text-primary font-semibold">IA</span> y <span className="text-accent font-semibold">automatización</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
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
                  className={`border-2 ${accentColor} shadow-none hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 overflow-hidden group hover:scale-[1.05] hover:-translate-y-2 relative ${
                    projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: `translateY(${projectsVisible ? Math.max(0, (scrollY - 1800 - index * 100) * 0.04) : 0}px)`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    {/* Animated gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-primary/30 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                    
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-accent to-primary text-accent-foreground font-bold shadow-lg z-20 flex items-center gap-1 animate-pulse-glow group-hover:scale-110 transition-transform">
                        <Sparkles className="w-3 h-3 animate-spin-slow" style={{ animationDuration: '3s' }} />
                        DESTACADO
                      </Badge>
                    )}
                    <div
                      className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center shadow-lg z-20 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 ${
                        project.accent === "primary"
                          ? "bg-primary"
                          : project.accent === "accent"
                            ? "bg-accent"
                            : "bg-secondary"
                      }`}
                    >
                      <Zap className="w-3 h-3 text-primary-foreground group-hover:scale-110" />
                      <div className={`absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 animate-ping ${
                        project.accent === "primary"
                          ? "border-primary"
                          : project.accent === "accent"
                            ? "border-accent"
                            : "border-secondary"
                      }`}></div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 font-black text-lg sm:text-xl">
                      <span className="flex-1">{project.title}</span>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:bg-primary hover:text-primary-foreground h-8 w-8 sm:h-10 sm:w-10"
                        >
                          <Link href={project.github}>
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                          </Link>
                        </Button>
                        {project.demo && (
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-10 sm:w-10"
                          >
                            <Link href={project.demo}>
                              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
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

      {/* Spacer to prevent footer overlap - ensures proper spacing */}
      <div className="h-16 md:h-8"></div>

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
      <footer className="py-12 px-4 border-t-4 border-primary bg-muted/50 relative" style={{ zIndex: 0, position: 'relative', marginTop: '0' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v2H0v-2zm4 0h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 4h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H8v-2zm-4 0h2v2H4v-2zm0 4h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <p className="text-muted-foreground font-medium flex flex-col sm:flex-row items-center justify-center gap-2">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Gustavo Sandoval © 2025
              </span>
              <span className="hidden sm:inline text-primary">•</span>
              <span>Automatización & IA</span>
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
