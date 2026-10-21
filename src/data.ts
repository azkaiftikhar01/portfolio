export const profile = {
  name: 'Azka Iftikhar',
  role: 'Full Stack Engineer',
  focus: 'Web & Mobile',
  location: 'Islamabad, Pakistan',
  timezone: 'Asia/Karachi',
  utc: 'UTC+5',
  email: 'iftikharazka1@gmail.com',
  phone: '+92 336 000 5517',
  whatsapp: 'https://wa.me/923360005517',
  linkedin: 'https://www.linkedin.com/in/azka-iftikhar-a15916195/',
  github: 'https://github.com/azkaiftikhar01',
}

export const stats = [
  { value: '3+', label: 'years shipping production web & mobile', color: 'grape' },
  { value: '2', label: 'React Native apps live on App Store & Google Play', color: 'pink' },
  { value: '40%', label: 'faster API responses after my Redis caching work', color: 'sun' },
  { value: '14 mo', label: 'fully remote with a Dubai-based team', color: 'mint' },
] as const

export const remote = [
  {
    icon: 'globe',
    title: 'Your hours, overlapped',
    body: 'UTC+5 means a full workday with Europe and the Gulf, mornings with Australia, and flexible evenings for US standups.',
  },
  {
    icon: 'pen',
    title: 'Async by default',
    body: 'Clear PR descriptions, written daily updates and decisions documented where the team can find them. No "any update?" pings needed.',
  },
  {
    icon: 'layers',
    title: 'Owns it end to end',
    body: 'Schema, API, frontend, mobile, CI/CD and the production deploy. Hand me a problem, not a ticket breakdown.',
  },
  {
    icon: 'plane',
    title: 'Proven remote already',
    body: 'Lead developer for an Australian platform today, and 14 months delivering for a UAE company before that.',
  },
]

export type Shot = { src: string; title: string; caption: string }

export type Project = {
  id: string
  name: string
  icon: string
  tagline: string
  kind: 'web' | 'mobile' | 'cli'
  color: string
  summary: string
  highlights: string[]
  stack: string[]
  links: { label: string; href: string }[]
  shots: Shot[]
}

export const projects: Project[] = [
  {
    id: 'unslop',
    name: 'unslop',
    icon: 'scan-search',
    tagline: 'Lint your AI-built UI',
    kind: 'cli',
    color: 'sky',
    summary:
      'An open-source command-line tool that audits websites built with Claude Code, Cursor or Codex and reports what makes them feel generic, broken or unfinished: the stock blue-violet gradient, the same card grid in every section, interchangeable marketing copy, placeholder content, links to "#", buttons that do nothing and layouts that scroll sideways on a phone. Every finding comes with evidence, a fix, and a prompt you can paste straight back into your coding agent. It runs entirely on your machine, with no account and no API key.',
    highlights: [
      'Renders every page at desktop and mobile widths with Playwright and runs 37 deterministic rules, so results are the same on every run and need no model',
      'Cross-page sameness: fingerprints each section\'s layout and flags different pages built from one skeleton, while shared navigation and a real design system pass',
      'Evidence you can act on: a screenshot crop with the element outlined, its CSS selector, and the exact file and line when the text can be traced back to source',
      'SSRF-safe crawler: every browser request is served from Node over a connection pinned to a validated public address, so an audited page cannot reach localhost, a private network or cloud metadata',
      'Transparent scoring: severity × confidence × rule weight on a saturating scale, with a broken footer link on ten pages counted once, and measured defects kept separate from design judgment calls',
      'Optional critique from a local vision model through Ollama, kept advisory and never sent off the machine',
    ],
    stack: ['TypeScript', 'Node.js', 'Playwright', 'Commander', 'Vitest', 'Ollama'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/azkaiftikhar01/unslop' }],
    shots: [
      { src: '/projects/unslop/01-overview.webp', title: 'Report overview', caption: "A slop score where lower is better, five weighted categories, what the scan covered and a fix-first list, all in one self-contained HTML file." },
      { src: '/projects/unslop/02-evidence.webp', title: 'Evidence', caption: "Each finding shows the page, viewport and selector with a screenshot crop of the element, and folds the same footer link on every page into one item." },
      { src: '/projects/unslop/03-gradient.webp', title: 'Stock gradients', caption: "The blue-violet-pink gradient is flagged with its computed colours, split into large backgrounds and gradient headline text." },
      { src: '/projects/unslop/04-card-grid.webp', title: 'Repeated card grids', caption: "Sections built from the same three-card composition are grouped across pages and marked as a design observation, not a defect." },
      { src: '/projects/unslop/05-fix-prompt.webp', title: 'Fix prompt', caption: "Tick the findings to fix and copy one prompt for Claude Code, Cursor or Codex, then rerun the audit to confirm they are gone." },
      { src: '/projects/unslop/08-terminal.webp', title: 'In the terminal', caption: "One command serves the project, audits each page at two widths and prints the score with the five things to fix first." },
      { src: '/projects/unslop/07-pages.webp', title: 'Audited pages', caption: "Desktop and mobile screenshots of every audited page, captured during the crawl." },
      { src: '/projects/unslop/06-dark.webp', title: 'Dark mode', caption: "The report follows the system colour scheme." },
    ],
  },
  {
    id: 'leadboard',
    name: 'Leadboard',
    icon: 'mic',
    tagline: 'A voice-first cockpit for team leads',
    kind: 'web',
    color: 'grape',
    summary:
      "A cockpit for engineering team leads that lives in the browser and the macOS menu bar, and replaces the lead's paper notebook. You talk, it structures: spoken updates become tasks, blockers and \"on me\" items as chips to confirm, the morning standup becomes a guided five-minute ritual, and team performance is derived from work that already happens instead of being scored by hand.",
    highlights: [
      'Voice capture two ways: Chrome speech in the browser and local Whisper running in-browser (transformers.js) inside the Electron app, no paid API needed',
      'Pluggable parser: a zero-network rules engine that knows your team and projects and resolves "he/she", with Ollama or Claude as drop-in upgrades behind the same interface',
      'Fair performance scoring: every send-back needs a one-tap reason, so rework is charged to the developer, the client or the lead, alongside on-time rate and cycle time',
      'Bandwidth weighting by project mode shows who has room before work is assigned',
      'Multiple boards with scrypt-hashed sign-in codes, revocable share links and AES-256-GCM encrypted project credentials',
      'Electron shell: menu-bar tray, ⌥Space capture overlay, always-on-top widgets and edge-glow deadline alerts',
    ],
    stack: ['React 19', 'Vite', 'Electron', 'Node.js', 'Express', 'MongoDB', 'Whisper', 'Vercel serverless'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/azkaiftikhar01/leadboard' }],
    shots: [
      { src: '/projects/leadboard/01-today.webp', title: 'Today board', caption: "The lead's day at a glance: open work split into On me, Team and Client tracks, a cleared-today sparkline and a bandwidth dial for every teammate." },
      { src: '/projects/leadboard/02-standup-voice.webp', title: 'Guided standup', caption: "A pre-filled card per project turns the morning standup into a five-minute ritual, where spoken updates are parsed into confirmable task and blocker chips." },
      { src: '/projects/leadboard/03-scoreboard-dark.webp', title: 'Team scoreboard', caption: "A ranked scoreboard in dark mode that adds up the lead's logged awards and rework attribution, with each person's load and praise streak beside their score." },
      { src: '/projects/leadboard/04-team-bandwidth.webp', title: 'Team and bandwidth', caption: "Each teammate's weekly load is weighted by project mode, so the lead can see who is overloaded and who has room before assigning new work." },
      { src: '/projects/leadboard/05-person-scorecard.webp', title: 'Person scorecard', caption: "A drill-down for one engineer showing what their week is made of, their board role, on-time rate, rework index and completed work." },
      { src: '/projects/leadboard/08-inbox-parsed-captures.webp', title: 'Voice capture inbox', caption: "Voice captures the rules-based parser couldn't fully place wait here as editable chips, never as guessed records." },
      { src: '/projects/leadboard/09-review-rework-reasons.webp', title: 'Send-back reasons', caption: "Sending work back takes one tap on a reason, and that reason decides whether the rework counts against the developer, the client or the lead." },
      { src: '/projects/leadboard/06-projects.webp', title: 'Projects', caption: "Client projects with development, support or maintenance modes, member stacks, project managers, resources and a shipped archive." },
      { src: '/projects/leadboard/07-history.webp', title: 'History timeline', caption: "A day-by-day record of completed work, awards and rework, with cycle time and on-time status worked out from task transitions." },
      { src: '/projects/leadboard/11-deadline-alert.webp', title: 'Deadline alert', caption: "An overdue task triggers edge lighting around the window and an alert card with done, snooze and dismiss actions." },
      { src: '/projects/leadboard/10-focus-celebration.webp', title: 'Focus celebration', caption: "Finishing a timed focus block closes the progress ring and fires full-screen confetti with a synthesised chime." },
      { src: '/projects/leadboard/13-quick-task.webp', title: 'Quick add task', caption: "The quick-add sheet asks who a task is pending on and lists teammates by available capacity." },
      { src: '/projects/leadboard/14-widget-on-me.webp', title: 'Desktop widget', caption: "A small always-on-top widget for the Electron app that lists what's waiting on the lead, with quick add and one-tap ticking." },
      { src: '/projects/leadboard/15-shared-list.webp', title: 'Shared list link', caption: "A token-based public link shows a developer only their own tasks, with no account needed and no scores exposed." },
    ],
  },
  {
    id: 'saveiour',
    name: 'Saveiour',
    icon: 'piggy',
    tagline: 'Savings goals that plan themselves',
    kind: 'mobile',
    color: 'pink',
    summary:
      'Pick a dream ("Dubai trip"), a currency, a deadline and how often you can save. Saveiour builds a plan of daily, weekly or monthly cards with amounts that fit real life, then makes ticking them off feel good with streaks, points, badges and full-screen confetti when a goal is funded. Save alone or invite friends into a squad with a shared leaderboard.',
    highlights: [
      'Smart plan generator: every card is weighted by payday rhythm, day of week and habit momentum, rounded to human amounts, and still adds up to the target to the last paisa',
      'Self-healing plans: missed days and extra savings automatically re-spread across the cards that are left',
      'Squad savings: shareable invite links carry the whole plan, each member gets an exact share of every card, and a live leaderboard crowns the top saver',
      'Streaks, levels, nine badges, haptics and a custom confetti engine built on Reanimated',
      'Started life as a Django web app with 50+ active users, rebuilt as a native mobile app',
    ],
    stack: ['React Native', 'Expo SDK 57', 'TypeScript', 'Expo Router', 'Reanimated 4', 'SVG', 'AsyncStorage'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/azkaiftikhar01/saveiour-mobile' }],
    shots: [
      { src: '/projects/saveiour/02-home.webp', title: 'Today', caption: "Every card due today across all goals, the running total and your streak, with one tap to tick a save." },
      { src: '/projects/saveiour/03-new-plan.webp', title: 'Plan preview', caption: "Before you commit, see the whole plan: its shape, smallest and largest cards, and why each card is sized the way it is." },
      { src: '/projects/saveiour/04-dubai.webp', title: 'Goal detail', caption: "Progress ring, pace against plan and the plan-shape chart, with add money, shuffle and rebalance one tap away." },
      { src: '/projects/saveiour/12-celebrate.webp', title: 'Goal funded', caption: "Finishing a goal triggers a custom Reanimated confetti burst and a points reward." },
      { src: '/projects/saveiour/05-bali.webp', title: 'Squad goal', caption: "Each member saves an exact share of every card. The leaderboard shows who is ahead, and missed cards can be rebalanced." },
      { src: '/projects/saveiour/06-squads.webp', title: 'Squads', caption: "All shared goals with each member's contribution and your rank, plus invite and join-by-link." },
      { src: '/projects/saveiour/08-me.webp', title: 'Profile', caption: "Levels, points, streaks and nine badges that reward consistency rather than amounts." },
      { src: '/projects/saveiour/01-welcome.webp', title: 'Welcome', caption: "Onboarding that shows how the product works before you start, with an option to explore sample goals." },
      { src: '/projects/saveiour/09-new-rhythm.webp', title: 'Choose a frequency', caption: "Daily, weekly, fortnightly or monthly, with the typical card size shown live for each option." },
      { src: '/projects/saveiour/07-goals.webp', title: 'Goals', caption: "Active and funded goals with on-track or behind status at a glance." },
      { src: '/projects/saveiour/10-join.webp', title: 'Join a squad', caption: "An invite link carries the full plan, so friends see exactly what they are signing up for." },
      { src: '/projects/saveiour/11-save.webp', title: 'Add money', caption: "Extra savings go straight in, and the upcoming cards shrink so the deadline still holds." },
    ],
  },
]

export const clientWork = [
  {
    icon: 'badge',
    name: 'Certified.io',
    where: 'Calcite Technology',
    body: 'Lead developer on a large-scale Australian certification platform. I own architecture decisions across backend, frontend and cloud, run separate dev, staging and production environments, and built its AI support bot.',
    tags: ['Architecture', 'Node.js', 'React', 'AWS ECS', 'AI support bot'],
  },
  {
    icon: 'lock',
    name: 'Charity Compliance & Audit System',
    where: 'Calcite Technology',
    body: 'Architected a system for a regulated non-profit sector: encrypted records, immutable audit trails, cryptographic timestamping, role-based access isolation, automated compliance workflows and an AI support bot.',
    tags: ['Security', 'PostgreSQL', 'Audit trails', 'RBAC', 'AI support bot'],
  },
  {
    icon: 'scan',
    name: 'Card Trading Marketplace',
    where: 'Calcite Technology',
    body: 'Cross-platform React Native app on the App Store and Google Play. I built the card scanner on my own: OCR reads the text on the card, OpenCV analyses the image, and the two together identify the exact card variant in real time.',
    tags: ['React Native', 'OCR', 'OpenCV', 'Computer vision', 'iOS & Android'],
  },
  {
    icon: 'tower',
    name: 'WatchTower Volunteer Platform',
    where: 'Code for Pakistan · open source',
    body: 'Backend engineer on a civic-tech platform. Migrated the stack from Node.js to Bun.js and led the move from MongoDB to PostgreSQL with a redesigned relational schema.',
    tags: ['Bun.js', 'PostgreSQL', 'Migration'],
    href: 'https://github.com/azkaiftikhar01/watchtower',
  },
]

export const experience = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Calcite Technology',
    place: 'Islamabad',
    period: 'Jun 2025 – Present',
    now: true,
    points: [
      'Lead developer on Certified.io, owning architecture across backend, frontend and cloud infrastructure',
      'Architected a charity compliance and audit management system with encryption, immutable audit trails and cryptographic timestamping',
      'Shipped two cross-platform React Native apps to the App Store and Google Play',
      'Built CI/CD on AWS CodePipeline, CodeBuild, ECS, EC2, GitHub Actions and GitLab CI',
      'Node.js + Express microservices on PostgreSQL and Redis with Stripe, Meta API and WebSocket integrations',
      'Automated recurring data workflows with Apache Airflow; mentor engineers through code review and architecture guidance',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Priseen Solutions LLC',
    place: 'Dubai, UAE · Remote',
    period: 'May 2024 – Jun 2025',
    points: [
      'Cut average API response time by 40% with Redis caching on the highest-traffic endpoints',
      'Built reusable location-based services with Node.js and Mapbox used across multiple client apps',
      'Stripe payments, WebSocket real-time notifications and live system updates',
      'PostgreSQL data modelling and query optimisation; secure file storage on Azure Blob Storage',
      'Owned staging-to-production migrations with CI/CD best practices, fully remote for 14 months',
    ],
  },
  {
    role: 'Software Quality Engineer',
    company: 'Solar Informatics',
    place: 'Islamabad',
    period: 'Jun 2023 – May 2024',
    points: [
      'Automated backend API testing with Postman',
      'Built front-end regression suites in Selenium and Playwright that sped up release cycles',
      'Wrote and ran manual test plans that raised pre-release defect detection',
    ],
  },
  {
    role: 'Database Intern',
    company: 'Askari Bank',
    place: 'Islamabad',
    period: 'Jul – Aug 2021',
    points: ['Wrote SQL remediation queries to fix malformed customer records and improve data quality'],
  },
]

export const skills = [
  { group: 'Languages', icon: 'code', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { group: 'Backend', icon: 'server', items: ['Node.js', 'Express', 'NestJS', 'Bun.js', 'Django', 'REST APIs', 'Microservices', 'WebSockets'] },
  { group: 'Frontend', icon: 'layout', items: ['React', 'HTML5', 'CSS3', 'Responsive UI architecture'] },
  { group: 'Mobile', icon: 'phone', items: ['React Native', 'Expo', 'iOS', 'Android'] },
  { group: 'Data', icon: 'database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Query optimisation', 'Data modelling'] },
  { group: 'Cloud & DevOps', icon: 'cloud', items: ['AWS EC2 · S3 · Lambda · ECS', 'GitHub Actions', 'GitLab CI/CD', 'Apache Airflow'] },
  { group: 'Integrations', icon: 'plug', items: ['Stripe', 'Mapbox', 'Meta APIs', 'Third-party APIs'] },
  { group: 'Testing', icon: 'flask', items: ['Playwright', 'Selenium', 'Postman', 'Regression automation'] },
]

export const marquee = ['Node.js', 'React', 'React Native', 'TypeScript', 'PostgreSQL', 'AWS', 'Redis', 'NestJS', 'Stripe', 'WebSockets', 'Expo', 'GitHub Actions', 'Playwright', 'Bun.js', 'Airflow']
