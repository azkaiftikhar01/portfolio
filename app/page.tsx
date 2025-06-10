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
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Tutoring Platform",
      description:
        "Full-stack platform connecting tutors with students. Features online/offline session booking, custom schedules, and seamless user experience.",
      tech: ["React", "Next.js", "PostgreSQL", "Node.js"],
      github: "https://github.com/azkaiftikhar01/tutoring-platform",
      live: "https://tutoring-platform-nine.vercel.app/",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "NFSYT - Mental Wellness App",
      description:
        "All-in-one wellness application with AI-based chatbot for therapy, therapeutic exercises, and comprehensive mental health support.",
      tech: ["Next.js", "Supabase", "Cloudinary", "Jitsi", "AI/ML"],
      github: "https://github.com/azkaiftikhar01/nfsyt",
      live: "https://nfsyt.vercel.app/therapist",
      gradient: "from-green-500 to-teal-500",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-yellow-400" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Azka Iftikhar
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-4">Passionate Backend Developer</p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building scalable backend systems with Node.js, Python & PostgreSQL. 1+ years of experience in API design,
            system integration & cloud solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              <MapPin className="w-4 h-4 mr-2" />
              Islamabad, Pakistan
            </Badge>
            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              <Briefcase className="w-4 h-4 mr-2" />
              Available for Remote Work
            </Badge>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <a href="#contact">
                <Send className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
              <a href="#projects">
                <Rocket className="w-4 h-4 mr-2" />
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
            <Button variant="outline" asChild className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              <a href="https://github.com/azkaiftikhar01/" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
              <a href="https://www.linkedin.com/in/azka-iftikhar-a15916195/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="border-green-500 text-green-400 hover:bg-green-500/10">
              <a href="tel:+923360005517">
                <Phone className="w-5 h-5 mr-2" />
                +92 336 000 5517
              </a>
            </Button>
            <Button variant="outline" asChild className="border-pink-500 text-pink-400 hover:bg-pink-500/10">
              <a href="mailto:iftikharazka1@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Showcasing my latest work in backend development and full-stack applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Technical Arsenal
            </h2>
            <p className="text-gray-400 text-lg">Technologies and tools I use to build amazing applications</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-cyan-400 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} className="bg-green-500/20 text-green-300 border-green-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-orange-400 flex items-center">
                    <Cloud className="w-5 h-5 mr-2" />
                    Cloud & Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <Badge key={skill} className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="md:col-span-2"
            >
              <Card className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/30">
                <CardHeader>
                  <CardTitle className="text-pink-400 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Tools & Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
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
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-white text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-cyan-400 font-semibold text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-purple-500 text-purple-400">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-gray-400 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <Star className="w-4 h-4 mr-2 mt-1 text-yellow-400 flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Education & Certifications
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center text-xl">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Bachelor of Computer Science
                </CardTitle>
                <CardDescription className="text-orange-400 font-semibold text-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
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
            <Card className="bg-slate-800/50 border-slate-700">
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
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
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
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Azka Iftikhar. Built with Next.js, Tailwind CSS, and lots of ☕</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/azkaiftikhar01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/azka-iftikhar-a15916195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:iftikharazka1@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+923360005517" className="text-gray-400 hover:text-green-400 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
