"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Zap,
  Briefcase,
  GraduationCap,
  Award,
  Send,
  Sparkles,
  Rocket,
  Star,
} from "lucide-react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent! 🚀",
          description: "Thanks for reaching out! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or reach out directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const projects = [
    {
      title: "Saveior",
      description:
        "Django-based application for saving goals, daily savings, team group plans, wishlists, and groups. Features goal tracking, premium features, and robust performance with 50+ active users.",
      tech: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
      github: "https://github.com/azkaiftikhar01/saveior",
      live: "https://saveior.onrender.com/",
      icon: "💰",
    },
    {
      title: "Tutoring Platform",
      description:
        "Full-stack platform connecting tutors with students. Features online/offline session booking, custom schedules, and seamless user experience.",
      tech: ["React", "Next.js", "PostgreSQL", "Node.js"],
      github: "https://github.com/azkaiftikhar01/tutoring-platform",
      live: "https://tutoring-platform-nine.vercel.app/",
      icon: "📚",
    },
    {
      title: "NFSYT - Mental Wellness App",
      description:
        "All-in-one wellness application with AI-based chatbot for therapy, therapeutic exercises, and comprehensive mental health support.",
      tech: ["Next.js", "Supabase", "Cloudinary", "Jitsi", "AI/ML"],
      github: "https://github.com/azkaiftikhar01/nfsyt",
      live: "https://nfsyt.vercel.app/therapist",
      icon: "🧠",
    },
  ]

  const skills = {
    languages: ["JavaScript", "Python", "Java", "SQL"],
    frameworks: ["Node.js", "Express.js", "NestJS", "Django", "React", "Next.js"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    cloud: ["Azure", "AWS", "Vercel", "Render", "Railway"],
    tools: ["Selenium", "Postman", "Playwright", "WebSocket", "Docker"],
  }

  const experience = [
    {
      company: "Priseen Solutions LLC",
      role: "Software Engineer",
      period: "May 2024 – Present",
      location: "Dubai (Remote), UAE",
      highlights: [
        "Developed location-based services using Node.js, Mapbox, and RESTful APIs",
        "Implemented Stripe payment processing and Azure Blob Storage solutions",
        "Improved backend performance by 40% using Redis caching strategies",
        "Integrated WebSockets for real-time communication",
      ],
    },
    {
      company: "Solar Informatics",
      role: "Software Quality Engineer",
      period: "June 2023 – May 2024",
      location: "Islamabad, Pakistan",
      highlights: [
        "Created comprehensive manual test scripts for backend systems",
        "Automated API testing using Postman",
        "Utilized Selenium and Playwright for front-end automation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Blue/Purple Minimalist Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-gradient-to-br from-blue-700/40 via-purple-700/30 to-blue-400/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tr from-purple-700/30 to-blue-900/10 rounded-full blur-2xl opacity-40"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-6">
            Azka Iftikhar
          </h1>

          <p className="text-2xl md:text-3xl text-blue-300 mb-4">Passionate Software Engineer</p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building robust, scalable, and user-centric applications across the stack. Experienced in designing and developing modern web solutions with React, Next.js, Node.js, Python, and PostgreSQL. Skilled in API design, system integration, cloud deployment, and delivering seamless user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-muted text-gray-200 border border-border">
              <MapPin className="w-4 h-4 mr-2 text-blue-400" />
              Islamabad, Pakistan
            </Badge>
            <Badge variant="secondary" className="bg-muted text-gray-200 border border-border">
              <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
              Available for Remote Work
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-none"
            >
              <a href="#contact">
                <Send className="w-4 h-4 mr-2 text-blue-200" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild className="border border-blue-500 text-blue-300 hover:bg-blue-900/20">
              <a href="#projects">
                <Rocket className="w-4 h-4 mr-2 text-blue-400" />
                View Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-6 flex-wrap">
            <Button variant="outline" asChild className="border border-border text-gray-200 hover:bg-gray-800">
              <a href="https://github.com/azkaiftikhar01/" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 text-gray-400" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="border border-border text-gray-200 hover:bg-gray-800">
              <a href="https://www.linkedin.com/in/azka-iftikhar-a15916195/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 text-gray-400" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="border border-border text-gray-200 hover:bg-gray-800">
              <a href="tel:+923360005517">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                +92 336 000 5517
              </a>
            </Button>
            <Button variant="outline" asChild className="border border-border text-gray-200 hover:bg-gray-800">
              <a href="mailto:iftikharazka1@gmail.com">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-4">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border border-border hover:border-gray-400 transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-muted text-gray-200 border border-border font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border border-border text-gray-200 hover:bg-gray-800"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 text-gray-400" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="bg-muted text-white hover:bg-gray-700 border border-border"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 text-gray-400" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-4">
              Technical Arsenal
            </h2>
            <p className="text-gray-400 text-lg">Technologies and tools I use to build amazing applications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <Card className="bg-card border border-border h-full min-h-[180px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-lg font-semibold">
                    <Code className="w-5 h-5 mr-2 text-gray-300" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} className="bg-muted text-gray-200 border border-border font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-1">
              <Card className="bg-card border border-border h-full min-h-[180px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-lg font-semibold">
                    <Zap className="w-5 h-5 mr-2 text-gray-300" />
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} className="bg-muted text-gray-200 border border-border font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-1">
              <Card className="bg-card border border-border h-full min-h-[180px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-lg font-semibold">
                    <Database className="w-5 h-5 mr-2 text-gray-300" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} className="bg-muted text-gray-200 border border-border font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-1">
              <Card className="bg-card border border-border h-full min-h-[180px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-lg font-semibold">
                    <Cloud className="w-5 h-5 mr-2 text-gray-300" />
                    Cloud & Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <Badge key={skill} className="bg-muted text-gray-200 border border-border font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="bg-card border border-border h-full min-h-[180px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-lg font-semibold">
                    <Award className="w-5 h-5 mr-2 text-gray-300" />
                    Tools & Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} className="bg-muted text-gray-200 border border-border font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-400 text-lg">My experience building scalable systems and quality software</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-card border border-border hover:border-gray-400 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-white text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-gray-300 font-semibold text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border border-border text-gray-400">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-gray-400 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {exp.location}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <Star className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-4">
              Education & Certifications
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <GraduationCap className="w-6 h-6 mr-3 text-gray-400" />
                  Bachelor of Computer Science
                </CardTitle>
                <CardDescription className="text-gray-300 font-semibold text-lg">
                  FAST NUCES Islamabad • June 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Relevant Coursework: Data Structures, OOP, Software Engineering, Software Project Management,
                  Algorithms, Artificial Intelligence
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Certifications:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Intermediate for Istio by Solo.io</li>
                    <li>• Programming for Everybody (Getting Started with Python) by Coursera</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to bring your ideas to life? Let's connect and discuss your next project!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-muted border border-border text-gray-200 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-muted border border-border text-gray-200 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-muted border border-border text-gray-200 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-muted border border-border text-gray-200 placeholder-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 text-blue-200" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Azka Iftikhar. Built with Next.js, Tailwind CSS, and lots of ☕</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/azkaiftikhar01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/azka-iftikhar-a15916195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:iftikharazka1@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+923360005517" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
