"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Code, Database, Cloud, Zap, Award, Send,
  Palette, ArrowRight, CheckCircle2,
} from "lucide-react"

/* --- Themes --- */
const THEMES = [
  { key: "petal",    label: "Petal",    color: "#f472b6" },
  { key: "lavender", label: "Lavender", color: "#a78bfa" },
  { key: "mint",     label: "Mint",     color: "#34d399" },
  { key: "sky",      label: "Sky",      color: "#38bdf8" },
  { key: "peach",    label: "Peach",    color: "#fb923c" },
  { key: "dark",     label: "Dark",     color: "#312e81" },
] as const
type ThemeKey = typeof THEMES[number]["key"]

/* --- Shared styles --- */
const gText: React.CSSProperties = {
  backgroundImage: "linear-gradient(135deg, var(--g-from), var(--g-via), var(--g-to))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}
const gBg: React.CSSProperties = {
  backgroundImage: "linear-gradient(135deg, var(--g-from), var(--g-to))",
}

/* Fixed card icon colours - vivid on white clay cards */
const iconPalette = [
  { bg: "rgba(244,114,182,0.12)", fg: "#f472b6" },
  { bg: "rgba(139,92,246,0.12)",  fg: "#8b5cf6" },
  { bg: "rgba(59,130,246,0.12)",  fg: "#3b82f6" },
  { bg: "rgba(16,185,129,0.12)",  fg: "#10b981" },
  { bg: "rgba(249,115,22,0.12)",  fg: "#f97316" },
]

/* --- Micro-components --- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-bold tracking-widest uppercase text-muted-foreground mb-5 clay">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--g-from)" }} />
      {children}
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/80 font-medium">
      {children}
    </span>
  )
}

/* --- Main --- */
export default function Portfolio() {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>("lavender")
  const [showPicker, setShowPicker]   = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme)
  }, [activeTheme])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        toast({ title: "Message sent!", description: "I'll get back to you soon." })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else throw new Error()
    } catch {
      toast({ title: "Something went wrong", description: "Please email me directly.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Skills",     href: "#skills"     },
    { label: "Projects",   href: "#projects"   },
    { label: "Contact",    href: "#contact"    },
  ]

  const skills = [
    { icon: Code,     label: "Languages",     items: ["JavaScript", "Python", "Java", "SQL"] },
    { icon: Zap,      label: "Frameworks",     items: ["Node.js", "Express.js", "NestJS", "React.js", "Next.js", "Django"] },
    { icon: Database, label: "Databases",      items: ["PostgreSQL", "MongoDB", "Redis"] },
    { icon: Cloud,    label: "Cloud & DevOps", items: ["AWS EC2/S3/Lambda", "Azure", "Docker", "Vercel"] },
    { icon: Award,    label: "CI/CD & Tools",  items: ["GitHub Actions", "GitLab CI/CD", "Airflow", "Postman", "Playwright", "WebSocket"] },
  ]

  const experience = [
    {
      company: "Calcite Technology",
      role: "Senior Full Stack Developer",
      period: "June 2025 - Present",
      location: "Islamabad, Pakistan",
      color: iconPalette[0],
      highlights: [
        "Led end-to-end development of Certified.io, a large-scale Australian certification platform",
        "Built CI/CD pipelines - AWS CodePipeline, CodeBuild, ECS, GitHub Actions, GitLab CI/CD",
        "Integrated Stripe, Meta APIs, WebSockets, and Airflow workflow automation",
        "Managed AWS EC2, S3, Lambda infrastructure with Docker containerization",
      ],
    },
    {
      company: "Priseen Solutions LLC",
      role: "Software Engineer",
      period: "May 2024 - June 2025",
      location: "Dubai (Remote), UAE",
      color: iconPalette[1],
      highlights: [
        "Built location-based services with Node.js, Mapbox, and RESTful APIs",
        "Integrated Stripe payment processing and Azure Blob Storage",
        "Improved backend performance by 40% with Redis caching",
      ],
    },
    {
      company: "Solar Informatics",
      role: "Software Quality Engineer",
      period: "June 2023 - May 2024",
      location: "Islamabad, Pakistan",
      color: iconPalette[2],
      highlights: [
        "Automated API testing with Postman",
        "Built front-end automation with Selenium and Playwright",
      ],
    },
    {
      company: "Askari Bank",
      role: "Database Intern",
      period: "July 2021 - Aug 2021",
      location: "Islamabad, Pakistan",
      color: iconPalette[3],
      highlights: ["Developed SQL queries to rectify records and enhance data quality"],
    },
  ]

  const projects = [
    {
      title: "WatchTower Volunteer Platform",
      description: "Civic tech backend for Code for Pakistan. Migrated from Node.js to Bun.js and MongoDB to PostgreSQL with modular architecture.",
      tech: ["Bun.js", "PostgreSQL", "REST APIs"],
      github: "https://github.com/azkaiftikhar01/watchtower",
      live: null,
      color: iconPalette[0],
    },
    {
      title: "Saveior",
      description: "Personal savings and goal management with group savings, premium wishlists, and advanced tracking. 50+ active users.",
      tech: ["Django", "Python", "PostgreSQL"],
      github: "https://github.com/azkaiftikhar01/saveior",
      live: "https://saveior.onrender.com/",
      color: iconPalette[1],
    },
    {
      title: "Tutoring Platform",
      description: "Full-stack platform for online/offline tutor-student session booking with custom schedules.",
      tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
      github: "https://github.com/azkaiftikhar01/tutoring-platform",
      live: "https://tutoring-platform-nine.vercel.app/",
      color: iconPalette[2],
    },
    {
      title: "NFSYT - Mental Wellness App",
      description: "Wellness app with AI-based chatbot for therapy, therapeutic exercises, and mental health support.",
      tech: ["Next.js", "Supabase", "Cloudinary", "Jitsi"],
      github: "https://github.com/azkaiftikhar01/nfsyt",
      live: "https://nfsyt.vercel.app/therapist",
      color: iconPalette[3],
    },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">

      {/* Ambient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-[650px] h-[650px] rounded-full blur-3xl"
          style={{ background: "var(--blob-1)" }} />
        <div className="absolute bottom-0 -left-40 w-[550px] h-[550px] rounded-full blur-3xl"
          style={{ background: "var(--blob-2)" }} />
        <div className="absolute top-2/3 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-70"
          style={{ background: "var(--blob-1)" }} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between bg-card/80 backdrop-blur-xl rounded-full px-6 py-3 border border-border/50 clay">

            <a href="#" className="font-bold text-foreground text-sm tracking-tight shrink-0">
              Azka Iftikhar
            </a>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map(l => (
                <a key={l.label} href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {[
                { href: "https://github.com/azkaiftikhar01/", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/azka-iftikhar-a15916195/", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}

              {/* Theme picker */}
              <div className="relative ml-1">
                <button onClick={() => setShowPicker(p => !p)} aria-label="Theme"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm"
                  style={gBg}>
                  <Palette className="w-3.5 h-3.5 text-white" />
                </button>
                <AnimatePresence>
                  {showPicker && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: -6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-11 right-0 bg-card border border-border rounded-2xl px-3 py-2.5 flex gap-2 items-center"
                      style={{ boxShadow: "var(--clay-shadow-hover)" }}
                    >
                      {THEMES.map(t => (
                        <button key={t.key}
                          onClick={() => { setActiveTheme(t.key); setShowPicker(false) }}
                          title={t.label}
                          className="w-6 h-6 rounded-full transition-all duration-200 hover:scale-110 shrink-0"
                          style={{
                            background: t.color,
                            outline: activeTheme === t.key ? `3px solid ${t.color}` : "2px solid transparent",
                            outlineOffset: "2px",
                          }} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-5">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-bold text-muted-foreground mb-7 clay">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--g-from)" }} />
              Open to new opportunities
            </div>

            <h1 className="text-5xl md:text-[3.4rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
              I'm Azka Iftikhar,<br />
              <span style={gText}>a Senior Full Stack</span><br />
              <span style={gText}>Engineer.</span>
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed mb-9 max-w-sm">
              3+ years building enterprise systems - Node.js, React, AWS, Docker. I lead teams and ship scalable software end-to-end.
            </p>

            <div className="flex items-center gap-3 mb-12">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                style={gBg}>
                See My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-semibold hover:bg-muted hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 clay">
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-8">
              {[["3+","Years exp."],["4","Companies"],["10+","Projects"]].map(([v, l], i) => (
                <div key={l} className="flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{v}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{l}</div>
                  </div>
                  {i < 2 && <div className="w-px h-9 bg-border" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - arch photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Arch frame */}
              <div className="relative w-[230px] h-[290px] overflow-hidden"
                style={{
                  borderRadius: "9999px 9999px 36px 36px",
                  border: "2.5px solid hsl(var(--border))",
                  boxShadow: "var(--clay-shadow-hover)",
                }}>
                <Image
                  src="/profile.jpg"
                  alt="Azka Iftikhar"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="230px"
                />
              </div>

              {/* Floating chip - experience */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-7 bg-card border border-border rounded-2xl px-4 py-2"
                style={{ boxShadow: "var(--clay-shadow-hover)" }}
              >
                <div className="text-[10px] text-muted-foreground font-medium">Experience</div>
                <div className="font-bold text-foreground text-sm">3+ Years</div>
              </motion.div>

              {/* Floating chip - location */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.6 }}
                className="absolute -top-4 -left-7 bg-card border border-border rounded-2xl px-3 py-2 flex items-center gap-1.5"
                style={{ boxShadow: "var(--clay-shadow-hover)" }}
              >
                <MapPin className="w-3 h-3 shrink-0" style={{ color: "var(--g-from)" }} />
                <span className="text-xs font-semibold text-foreground">Islamabad, PK</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>My Expertise</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Technologies built to{" "}
              <span style={gText}>perform at scale.</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Languages, frameworks, and platforms I use to build reliable, high-performance systems.
            </p>
          </div>

          {/* Horizontal cards - icon left, content right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, label, items }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className={`group flex gap-4 bg-card rounded-2xl border border-border p-5 cursor-default
                  hover:border-[var(--g-from)] transition-colors duration-200 clay
                  ${i === 4 ? "md:col-span-2" : ""}`}
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: iconPalette[i % 5].bg }}>
                  <Icon className="w-5 h-5" style={{ color: iconPalette[i % 5].fg }} />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm mb-2.5">{label}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(item => <Tag key={item}>{item}</Tag>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-5 bg-muted/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Work Experience</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              My professional <span style={gText}>journey.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className="group flex gap-4 bg-card rounded-2xl border border-border p-5 hover:border-[var(--g-from)] transition-colors duration-200 clay"
              >
                {/* Color stripe */}
                <div className="w-1 rounded-full shrink-0 self-stretch"
                  style={{ background: exp.color.fg, opacity: 0.5 }} />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-muted-foreground text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <Tag>{exp.period}</Tag>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />{exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: exp.color.fg }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Featured Work</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Things I've <span style={gText}>built.</span>
            </h2>
          </div>

          {/* Horizontal project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className="group flex gap-4 bg-card rounded-2xl border border-border p-5 hover:border-[var(--g-from)] transition-colors duration-200 clay"
              >
                {/* Color icon box */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 text-lg font-bold group-hover:scale-110 transition-transform duration-300"
                  style={{ background: p.color.bg, color: p.color.fg }}>
                  {i + 1}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tech.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <div className="flex gap-2">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-muted text-foreground text-xs font-semibold hover:bg-muted/70 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200">
                      <Github className="w-3.5 h-3.5 text-muted-foreground" /> Code
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold hover:opacity-90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-sm"
                        style={gBg}>
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Involvement */}
      <section className="py-24 px-5 bg-muted/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Background</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Education &{" "}
              <span style={gText}>involvement.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Bachelor of Computer Science",
                sub: "FAST NUCES Islamabad",
                meta: "Graduated June 2023",
                body: "Data Structures, OOP, Software Engineering, Algorithms, Artificial Intelligence",
                tags: ["Istio Intermediate - Solo.io", "Python for Everybody - Coursera"],
                color: iconPalette[2],
              },
              {
                title: "Officer",
                sub: "Women in Computing - Islamabad",
                meta: "Jan 2022 - Aug 2022",
                body: "Promoted diversity and inclusion in tech by empowering female students entering the industry.",
                tags: [],
                color: iconPalette[0],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className="group flex gap-4 bg-card rounded-2xl border border-border p-5 hover:border-[var(--g-from)] transition-colors duration-200 clay"
              >
                <div className="w-1 rounded-full shrink-0 self-stretch"
                  style={{ background: item.color.fg, opacity: 0.5 }} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm font-medium mt-0.5">{item.sub}</p>
                    </div>
                    <Tag>{item.meta}</Tag>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">{item.body}</p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(t => (
                        <span key={t}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground font-medium">
                          <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: item.color.fg }} />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-5">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Let's build something{" "}
              <span style={gText}>amazing.</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Ready to bring your ideas to life? Let's talk.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-7 clay">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-full bg-muted border-border text-foreground placeholder:text-muted-foreground px-4"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-full bg-muted border-border text-foreground placeholder:text-muted-foreground px-4"
                />
              </div>
              <Input
                placeholder="Subject"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                required
                className="rounded-full bg-muted border-border text-foreground placeholder:text-muted-foreground px-4"
              />
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="rounded-2xl bg-muted border-border text-foreground placeholder:text-muted-foreground px-4"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                style={gBg}
              >
                {isSubmitting
                  ? <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" /> Sending...</>
                  : <><Send className="w-4 h-4" /> Send Message</>
                }
              </button>
            </form>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {[
              { href: "https://github.com/azkaiftikhar01/",                   icon: Github,   label: "GitHub"   },
              { href: "https://www.linkedin.com/in/azka-iftikhar-a15916195/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:iftikharazka1@gmail.com",                        icon: Mail,     label: "Email"    },
              { href: "tel:+923360005517",                                      icon: Phone,    label: "Phone"    },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[var(--g-from)] hover:scale-110 active:scale-95 transition-all duration-200 clay">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-7 px-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-foreground text-sm">Azka Iftikhar</span>
          <p className="text-muted-foreground text-xs">© 2025 · Built with Next.js & Tailwind CSS</p>
          <div className="flex items-center gap-5">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
