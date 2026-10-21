import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Clock,
  Cloud,
  Code2,
  Copy,
  Database,
  FlaskConical,
  GraduationCap,
  Globe,
  Layers,
  LayoutTemplate,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  PenLine,
  PiggyBank,
  Plane,
  Plug,
  ScanLine,
  ScanSearch,
  Server,
  Ship,
  Smartphone,
  Users,
  X,
  ZoomIn,
  type LucideIcon,
} from 'lucide-react'
import { useCallback, useEffect, useState, type CSSProperties, type ReactNode } from 'react'

import { clientWork, experience, marquee, profile, projects, remote, skills, stats, type Project, type Shot } from './data'

const ICONS: Record<string, LucideIcon> = {
  globe: Globe,
  pen: PenLine,
  layers: Layers,
  plane: Plane,
  mic: Mic,
  piggy: PiggyBank,
  badge: BadgeCheck,
  lock: Lock,
  scan: ScanLine,
  'scan-search': ScanSearch,
  tower: Users,
  code: Code2,
  server: Server,
  layout: LayoutTemplate,
  phone: Smartphone,
  database: Database,
  cloud: Cloud,
  plug: Plug,
  flask: FlaskConical,
}

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const I = ICONS[name] ?? Code2
  return <I size={size} strokeWidth={2.2} aria-hidden />
}

function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedinMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

/** Decorative geometry that replaces sticker emojis */
function Shape({ kind, className }: { kind: 'ring' | 'plus' | 'squiggle' | 'dot'; className: string }) {
  if (kind === 'ring') return <svg className={className} viewBox="0 0 40 40" aria-hidden><circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="6" /></svg>
  if (kind === 'plus') return <svg className={className} viewBox="0 0 40 40" aria-hidden><path d="M20 6v28M6 20h28" stroke="currentColor" strokeWidth="7" strokeLinecap="round" /></svg>
  if (kind === 'squiggle') return <svg className={className} viewBox="0 0 80 24" aria-hidden><path d="M4 14 Q 14 2 24 12 T 44 12 T 64 12 T 78 10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg>
  return <svg className={className} viewBox="0 0 20 20" aria-hidden><circle cx="10" cy="10" r="9" fill="currentColor" /></svg>
}

function useClock(timeZone: string) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(t)
  }, [])
  const fmt = (tz?: string) => new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: tz }).format(now)
  const hour = Number(new Intl.DateTimeFormat('en-US', { hour: 'numeric', hourCycle: 'h23', timeZone }).format(now))
  return { there: fmt(timeZone), here: fmt(), awake: hour >= 9 && hour < 23 }
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [el, setEl] = useState<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [el])
  return (
    <div ref={setEl} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}

function CopyEmail({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className={`btn ${className}`}
      onClick={() => {
        navigator.clipboard?.writeText(profile.email).then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 1800)
        })
      }}>
      {copied ? <Check size={18} aria-hidden /> : <Copy size={18} aria-hidden />}
      {copied ? 'Copied' : 'Copy email'}
    </button>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="logo">
        <span className="logo-mark">A</span>
        <span>azka.</span>
      </a>
      <nav>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="btn btn-sm btn-ink" href="#contact">
        Hire me
      </a>
    </header>
  )
}

function Hero() {
  const clock = useClock(profile.timezone)
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <div className="status">
          <span className="pulse" /> Open to full-time remote roles
        </div>
        <p className="hi">Hi, I'm Azka</p>
        <h1>
          I build <span className="marker">web & mobile</span> products and ship them to <span className="squiggle">production.</span>
        </h1>
        <p className="lede">
          Full stack engineer with 3+ years on Node.js, React, React Native, PostgreSQL and AWS. Right now I'm lead developer on a large Australian certification platform. Before that I spent 14 months shipping remotely for a team in Dubai.
        </p>
        <div className="cta">
          <a className="btn btn-grape" href={`mailto:${profile.email}?subject=Let's%20work%20together`}>
            <Mail size={18} aria-hidden /> Email me
          </a>
          <a className="btn" href="#work">
            See my work <ArrowDown size={18} aria-hidden />
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={16} aria-hidden /> {profile.location}
          </span>
          <span>
            <Clock size={16} aria-hidden /> {clock.there} in Islamabad ({profile.utc}){clock.awake ? ' · usually online now' : ''}
          </span>
        </div>
      </div>

      <div className="hero-art" aria-hidden>
        <div className="browser tilt-l">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>leadboard.app</span>
          </div>
          <img src="/projects/leadboard/hero.webp" alt="" />
        </div>
        <div className="phone tilt-r">
          <img src="/projects/saveiour/02-home.webp" alt="" />
        </div>
        <span className="sticker s1">Node.js</span>
        <span className="sticker s2">React Native</span>
        <span className="sticker s3">AWS</span>
        <span className="sticker s4">PostgreSQL</span>
        <Shape kind="ring" className="doodle d1" />
        <Shape kind="plus" className="doodle d2" />
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {items.map((m, i) => (
          <span key={i}>
            {m} <b />
          </span>
        ))}
      </div>
    </div>
  )
}

function Stats() {
  return (
    <section className="wrap stats">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 80}>
          <div className={`stat card bg-${s.color}`}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        </Reveal>
      ))}
    </section>
  )
}

function Remote() {
  const clock = useClock(profile.timezone)
  return (
    <section className="wrap section" id="remote">
      <Reveal>
        <div className="section-head">
          <span className="eyebrow">Why remote teams like working with me</span>
          <h2>
            Timezone? <span className="marker marker-mint">Sorted.</span>
          </h2>
        </div>
      </Reveal>
      <div className="remote-grid">
        <Reveal className="span-2">
          <div className="card clock-card">
            <div>
              <span className="eyebrow">Right now</span>
              <div className="clocks">
                <div>
                  <b>{clock.there}</b>
                  <span>Islamabad</span>
                </div>
                <ArrowRight className="arrow" size={26} aria-hidden />
                <div>
                  <b>{clock.here}</b>
                  <span>Your time</span>
                </div>
              </div>
            </div>
            <div className="bands">
              {[
                ['London', 'full day overlap', 100],
                ['Dubai', 'full day overlap', 100],
                ['Sydney', 'your afternoon', 60],
                ['New York', 'your morning', 45],
              ].map(([city, note, w]) => (
                <div className="band" key={city as string}>
                  <span>{city}</span>
                  <div className="band-bar">
                    <i style={{ width: `${w}%` }} />
                  </div>
                  <small>{note}</small>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        {remote.map((r, i) => (
          <Reveal key={r.title} delay={i * 70}>
            <div className="card remote-card">
              <span className="icon-tile">
                <Icon name={r.icon} />
              </span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Gallery({ project, onOpen }: { project: Project; onOpen: (shots: Shot[], i: number) => void }) {
  const [active, setActive] = useState(0)
  const shots = project.shots
  if (!shots.length) return null

  if (project.kind === 'mobile') {
    return (
      <div className="phones">
        {shots.map((s, i) => (
          <button key={s.src} className="phone-card" onClick={() => onOpen(shots, i)} style={{ '--i': i } as CSSProperties}>
            <div className="phone">
              <img src={s.src} alt={s.title} loading="lazy" />
            </div>
            <b>{s.title}</b>
            <span>{s.caption}</span>
          </button>
        ))}
      </div>
    )
  }

  const current = shots[active]
  return (
    <div className="web-gallery">
      <button className="browser big" onClick={() => onOpen(shots, active)}>
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>{current.title}</span>
        </div>
        <img key={current.src} src={current.src} alt={current.title} className="fade-in" />
        <span className="zoom">
          <ZoomIn size={14} aria-hidden /> Click to zoom
        </span>
      </button>
      <p className="shot-caption">
        <b>{current.title}.</b> {current.caption}
      </p>
      <div className="thumbs">
        {shots.map((s, i) => (
          <button key={s.src} className={`thumb ${i === active ? 'on' : ''}`} onClick={() => setActive(i)} aria-label={s.title}>
            <img src={s.src} alt="" loading="lazy" />
            <span>{s.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function ProjectBlock({ project, index, onOpen }: { project: Project; index: number; onOpen: (shots: Shot[], i: number) => void }) {
  return (
    <article className={`project project-${project.id} project-${project.color}`} id={project.id}>
      <Reveal>
        <div className="project-head">
          <div className="project-title">
            <span className={`project-emoji bg-${project.color}-strong`}>
              <Icon name={project.icon} size={36} />
            </span>
            <div>
              <span className="eyebrow">
                Project {String(index + 1).padStart(2, '0')} · {project.kind === 'mobile' ? 'iOS & Android app' : project.kind === 'cli' ? 'Open-source CLI' : 'Web + desktop app'}
              </span>
              <h3>{project.name}</h3>
              <p className="tagline">{project.tagline}</p>
            </div>
          </div>
          <div className="project-links">
            {project.links.map((l) => (
              <a key={l.href} className="btn btn-sm" href={l.href} target="_blank" rel="noreferrer">
                {l.label} <ArrowUpRight size={16} aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="project-body">
        <Reveal className="project-text">
          <p className="summary">{project.summary}</p>
          <ul className="highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="chips">
            {project.stack.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="project-media">
          <Gallery project={project} onOpen={onOpen} />
        </Reveal>
      </div>
    </article>
  )
}

function Work({ onOpen }: { onOpen: (shots: Shot[], i: number) => void }) {
  return (
    <section className="wrap section" id="work">
      <Reveal>
        <div className="section-head">
          <span className="eyebrow">Things I've built</span>
          <h2>
            Selected <span className="marker marker-pink">work</span>
          </h2>
        </div>
      </Reveal>
      {projects.map((p, i) => (
        <ProjectBlock key={p.id} project={p} index={i} onOpen={onOpen} />
      ))}

      <Reveal>
        <h3 className="sub-head">Production work for clients</h3>
      </Reveal>
      <div className="client-grid">
        {clientWork.map((c, i) => (
          <Reveal key={c.name} delay={i * 70}>
            <div className="card client">
              <div className="client-top">
                <span className="icon-tile">
                  <Icon name={c.icon} />
                </span>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer" className="mini-link">
                    GitHub <ArrowUpRight size={13} aria-hidden />
                  </a>
                ) : (
                  <span className="mini-tag">Client · NDA</span>
                )}
              </div>
              <h4>{c.name}</h4>
              <small>{c.where}</small>
              <p>{c.body}</p>
              <div className="chips">
                {c.tags.map((t) => (
                  <span className="chip chip-sm" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="wrap section" id="experience">
      <Reveal>
        <div className="section-head">
          <span className="eyebrow">Where I've been</span>
          <h2>
            Experience <Shape kind="squiggle" className="head-shape" />
          </h2>
        </div>
      </Reveal>
      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={e.company + e.role} delay={i * 60}>
            <div className="job">
              <span className={`dot ${e.now ? 'now' : ''}`} />
              <div className="card job-card">
                <div className="job-head">
                  <div>
                    <h3>{e.role}</h3>
                    <p>
                      <b>{e.company}</b> · {e.place}
                    </p>
                  </div>
                  <span className={`period ${e.now ? 'now' : ''}`}>{e.period}</span>
                </div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="wrap section" id="skills">
      <Reveal>
        <div className="section-head">
          <span className="eyebrow">The toolbox</span>
          <h2>
            Skills & <span className="marker">stack</span>
          </h2>
        </div>
      </Reveal>
      <div className="skills">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 50}>
            <div className="card skill">
              <h4>
                <Icon name={s.icon} size={18} /> {s.group}
              </h4>
              <div className="chips">
                {s.items.map((it) => (
                  <span className="chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="edu">
        <Reveal>
          <div className="card edu-card bg-sky">
            <span className="icon-tile bg-sky-strong">
              <GraduationCap size={24} aria-hidden />
            </span>
            <div>
              <h4>BS Computer Science</h4>
              <p>FAST-NUCES, Islamabad · 2023</p>
              <small>Data Structures, Algorithms, OOP, Software Engineering, AI</small>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card edu-card bg-sun">
            <span className="icon-tile bg-sun-strong">
              <Ship size={24} aria-hidden />
            </span>
            <div>
              <h4>Istio Intermediate</h4>
              <p>Certified by Solo.io</p>
              <small>Service mesh, traffic management, security</small>
            </div>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="card edu-card bg-pink">
            <span className="icon-tile bg-pink-strong">
              <Users size={24} aria-hidden />
            </span>
            <div>
              <h4>Women in Computing</h4>
              <p>Officer, FAST-NUCES · 2022</p>
              <small>Ran events and mentoring for women in tech</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="wrap section" id="contact">
      <Reveal>
        <div className="contact card">
          <Shape kind="ring" className="doodle c1" />
          <Shape kind="plus" className="doodle c2" />
          <span className="eyebrow light">Got a role or a product in mind?</span>
          <h2>
            Let's build something <span className="squiggle light">great.</span>
          </h2>
          <p>I'm looking for a full-time remote role with a team that ships. I reply within a day, usually a lot faster.</p>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="cta center">
            <a className="btn btn-sun" href={`mailto:${profile.email}?subject=Let's%20work%20together`}>
              <Mail size={18} aria-hidden /> Send an email
            </a>
            <CopyEmail />
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinMark /> LinkedIn
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              <GithubMark /> GitHub
            </a>
            <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden /> WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Azka Iftikhar</span>
        <span>Built with React and Vite</span>
      </footer>
    </section>
  )
}

function Lightbox({ shots, index, onClose, onMove }: { shots: Shot[]; index: number; onClose: () => void; onMove: (d: number) => void }) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', key)
      document.body.style.overflow = ''
    }
  }, [onClose, onMove])
  const s = shots[index]
  const tall = s.src.includes('/saveiour/')
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal>
      <button className="lb-close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>
      <button className="lb-nav prev" onClick={(e) => (e.stopPropagation(), onMove(-1))} aria-label="Previous">
        <ArrowLeft size={22} />
      </button>
      <figure onClick={(e) => e.stopPropagation()} className={tall ? 'tall' : ''}>
        <img key={s.src} src={s.src} alt={s.title} className="fade-in" />
        <figcaption>
          <b>{s.title}</b> {s.caption}
          <span>
            {index + 1} / {shots.length}
          </span>
        </figcaption>
      </figure>
      <button className="lb-nav next" onClick={(e) => (e.stopPropagation(), onMove(1))} aria-label="Next">
        <ArrowRight size={22} />
      </button>
    </div>
  )
}

export default function App() {
  const [box, setBox] = useState<{ shots: Shot[]; i: number } | null>(null)
  const open = useCallback((shots: Shot[], i: number) => setBox({ shots, i }), [])
  const close = useCallback(() => setBox(null), [])
  const move = useCallback((d: number) => setBox((b) => (b ? { ...b, i: (b.i + d + b.shots.length) % b.shots.length } : b)), [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Work onOpen={open} />
        <Remote />
        <Experience />
        <Skills />
        <Contact />
      </main>
      {box ? <Lightbox shots={box.shots} index={box.i} onClose={close} onMove={move} /> : null}
    </>
  )
}
