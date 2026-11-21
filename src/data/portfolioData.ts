import { ProjectItem, SkillItem, TimelineMilestone, AchievementItem, GitHubRepoData } from '../types';

export const PERSONAL_INFO = {
  name: "Martin Lourduraj",
  firstName: "Martin",
  lastName: "Lourduraj",
  title: "Founder & Full-Stack Architect",
  startup: "CSVS IT Tech",
  startupUrl: "https://csvsittech.in",
  tagline: "Engineering the Future. Building Beyond Boundaries.",
  shortBio: "Founder & Full-Stack Architect at CSVS IT Tech specializing in mission-critical healthcare ERP systems, hospital management software, enterprise automation, and high-concurrency cloud infrastructure.",
  location: "Tamil Nadu, India",
  timezone: "Asia/Kolkata",
  utcOffset: "+05:30",
  email: "contact@csvsittech.in",
  github: "https://github.com/MartinLourduraj",
  githubUsername: "MartinLourduraj",
  linkedin: "https://www.linkedin.com/in/martin-lourduraj",
  availability: "Available for Strategic Architectural Projects & Enterprise Solutions",
  isAvailable: true,
  rotatingTitles: [
    "Founder & Full-Stack Architect",
    "Healthcare ERP Developer",
    "Enterprise Software Architect",
    "Cloud Infrastructure Specialist",
    "Technology Entrepreneur"
  ],
  verifiedStats: [
    { label: "Core Enterprise Platforms", value: "4+", suffix: "" },
    { label: "Public Healthcare Repos", value: "3+", suffix: "" },
    { label: "Hospital Data Sovereignty", value: "100%", suffix: "" },
    { label: "Mission-Critical Uptime Target", value: "99.9%", suffix: "" }
  ]
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "csvs-nova-hms",
    title: "CSVS Nova HMS",
    tagline: "Enterprise Hospital Management & Clinical Workflow Automation Suite",
    category: "Healthcare",
    description: "Full-scale enterprise hospital management system engineered to automate in-patient (IP), out-patient (OP), laboratory diagnostic pipelines, and pharmacy dispensaries with zero data leakage.",
    longDescription: "CSVS Nova HMS is the flagship hospital operating infrastructure built by CSVS IT Tech. Engineered for maximum fault tolerance, it coordinates acute hospital workflows—from token generation and OP consultation to real-time bed allocations, PACS/DICOM diagnostic records, and automated insurance claims processing. Features role-based access control (RBAC) and isolated enterprise data boundaries.",
    technologies: ["Python", "Django", "React", "TypeScript", "PostgreSQL", "AWS", "Docker", "Redis"],
    features: [
      "End-to-end Out-Patient (OP) & In-Patient (IP) clinical workflow management",
      "Laboratory Information System (LIMS) interfacing with automated analyzer support",
      "PACS/DICOM compliant medical diagnostic image and report generation",
      "Automated pharmacy stock deduction, expiry tracking, and dynamic prescription dispensing",
      "Multi-counter billing engine supporting split payments, insurance, and audit trails",
      "100% Data Sovereignty: Zero external AI model training on patient electronic health records (EHR)"
    ],
    status: "Enterprise Production",
    liveUrl: "https://csvsittech.in",
    accentColor: "blue",
    metrics: [
      { label: "Clinical Modules", value: "14+" },
      { label: "Data Sovereignty", value: "100%" },
      { label: "Concurrency Tested", value: "High-Volume" }
    ],
    screenshots: [
      { title: "Clinical Overview HUD", caption: "Centralized real-time patient queue and department status dashboard", mockType: "hms-dashboard" },
      { title: "Diagnostic & Lab Pipeline", caption: "Automated pathology analyzer results and validation interface", mockType: "clinical-lab" },
      { title: "Financial & Billing Engine", caption: "Multi-counter insurance, corporate, and private patient ledger", mockType: "billing-suite" }
    ]
  },
  {
    id: "medical-erp-2",
    title: "medical_erp2",
    tagline: "Full-Stack Hospital Operations & Electronic Health Record Platform",
    category: "Healthcare",
    description: "Comprehensive open-source hospital ERP managing patient records, laboratory diagnostic workflows, billing counters, and pharmacy dispensing in a unified Django/PostgreSQL core.",
    longDescription: "A verified public healthcare repository engineered by Martin Lourduraj. Provides robust clinical record handling, automated test report rendering, out-patient consultation tracking, and secure inventory management for medical centers. Built with strict role-based separation between doctors, receptionists, lab technicians, and pharmacists.",
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    features: [
      "Comprehensive patient registration and electronic health record history",
      "Dynamic test catalog with automated diagnostic report generation",
      "Prescription writing module with pharmacy integration",
      "Daily billing reconciliation, department revenue analytics, and audit logging",
      "Robust PostgreSQL schema with relational integrity and transactional security"
    ],
    status: "Public Open Source",
    githubUrl: "https://github.com/MartinLourduraj/medical_erp2",
    accentColor: "cyan",
    metrics: [
      { label: "Core Architecture", value: "Django MVC" },
      { label: "Database", value: "PostgreSQL" },
      { label: "License", value: "Open Source" }
    ],
    screenshots: [
      { title: "EHR Patient Record Viewer", caption: "Sanitized clinical encounter logs and prescription histories", mockType: "hms-dashboard" },
      { title: "Laboratory Report Engine", caption: "Pathology and hematology diagnostic report generator", mockType: "clinical-lab" }
    ]
  },
  {
    id: "remix-of-gen-tech-hub",
    title: "remix-of-gen-tech-hub",
    tagline: "Next-Gen Reactive Hospital Portal & Clinical Workspace",
    category: "Web Applications",
    description: "Modern, high-performance web application providing reactive doctor-patient portals, appointment queue management, and interactive glassmorphic healthcare dashboards.",
    longDescription: "Engineered with TypeScript, Remix, and React, this verified public repository demonstrates modern server-rendered UX for healthcare workflows. Features instantaneous route transitions, optimistic UI updates for queue booking, and responsive glassmorphism designed for clinical tablets and mobile physician workstations.",
    technologies: ["TypeScript", "Remix", "React", "Tailwind CSS", "Vite", "Node.js"],
    features: [
      "Server-side rendered (SSR) patient scheduling and department directories",
      "Interactive doctor availability matrix with real-time slot locking",
      "Ultra-responsive cybernetic glass interface optimized for mobile and desktop",
      "Type-safe API integrations and form state management with zero layout shifts"
    ],
    status: "Public Open Source",
    githubUrl: "https://github.com/MartinLourduraj/remix-of-gen-tech-hub",
    accentColor: "blue",
    metrics: [
      { label: "Stack", value: "Remix / React" },
      { label: "Typing", value: "Strict TS" },
      { label: "UI System", value: "Tailwind CSS" }
    ],
    screenshots: [
      { title: "Physician Workspace Portal", caption: "Real-time appointment schedule and interactive consultation dashboard", mockType: "doctor-portal" }
    ]
  },
  {
    id: "doctohub",
    title: "DoctoHub",
    tagline: "Doctor-Patient Clinical Social Network & Consultation Suite",
    category: "Healthcare",
    description: "Scalable platform bridging medical practitioners and patients with appointment booking, clinical discussion threads, and secure direct consultation channels.",
    longDescription: "A verified public repository created by Martin Lourduraj. Designed to facilitate healthcare discovery and communication, DoctoHub enables verified doctors to publish clinical insights, manage their outpatient schedule, and interact securely with patients seeking specialist medical opinions.",
    technologies: ["Python", "Django", "AWS", "REST APIs", "PostgreSQL", "JavaScript"],
    features: [
      "Specialist doctor directory categorized by medical discipline and location",
      "Patient booking engine with instant confirmation and status alerts",
      "Secure clinical question-and-answer exchange between patients and physicians",
      "AWS cloud deployment architecture with scalable media and document storage"
    ],
    status: "Public Open Source",
    githubUrl: "https://github.com/MartinLourduraj/DoctoHub",
    accentColor: "red",
    metrics: [
      { label: "Backend", value: "Django / AWS" },
      { label: "Domain", value: "Tele-Health" },
      { label: "Status", value: "Verified Repo" }
    ],
    screenshots: [
      { title: "Doctor Discovery Feed", caption: "Specialty-based physician profile directory and booking widget", mockType: "doctor-portal" }
    ]
  },
  {
    id: "csvs-automation-nova-ai",
    title: "CSVS Automation & Nova AI",
    tagline: "Isolated Enterprise Workflow Automation & Clinical Summarization",
    category: "Automation",
    description: "Proprietary enterprise workflow engine running inside sovereign infrastructure to summarize diagnostic text and automate administrative hospital routines without external AI exposure.",
    longDescription: "Engineered under CSVS IT Tech's core doctrine of complete institutional data sovereignty. This platform automates repetitive hospital operations—such as laboratory inventory reordering, discharge summary synthesis, and billing anomaly detection—strictly within isolated enterprise boundaries, guaranteeing that no private patient health information (PHI) is ever transmitted to third-party AI models.",
    technologies: ["Python", "Celery", "Redis", "Docker", "NLP Pipelines", "PostgreSQL", "Linux"],
    features: [
      "Sovereign natural language summarization of complex clinical notes",
      "Automated low-stock threshold triggers for hospital pharmacy inventories",
      "Discharge summary draft preparation for physician sign-off",
      "Zero-Trust security boundary: 100% on-premises / private VPC data containment"
    ],
    status: "Active Deployment",
    liveUrl: "https://csvsittech.in",
    accentColor: "purple",
    metrics: [
      { label: "Data Leakage", value: "0%" },
      { label: "Architecture", value: "Isolated VPC" },
      { label: "Security", value: "Zero-Trust" }
    ],
    screenshots: [
      { title: "Automation Rules Matrix", caption: "Enterprise trigger conditions and clinical event monitors", mockType: "architecture" }
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: "React", category: "Frontend", proficiencyTier: "Architect Level", description: "Modern functional components, hooks, concurrent rendering, and glassmorphism design systems.", iconName: "Atom" },
  { name: "TypeScript", category: "Frontend", proficiencyTier: "Architect Level", description: "Strict static typing, complex generics, architectural interfaces, and full-stack type safety.", iconName: "Code2" },
  { name: "JavaScript (ESNext)", category: "Frontend", proficiencyTier: "Architect Level", description: "Async/await patterns, DOM performance tuning, Web APIs, and functional paradigms.", iconName: "FileCode" },
  { name: "Tailwind CSS", category: "Frontend", proficiencyTier: "Architect Level", description: "Advanced responsive layouts, custom design tokens, dark mode systems, and HUD animations.", iconName: "Palette" },
  { name: "HTML5 & Semantic Web", category: "Frontend", proficiencyTier: "Architect Level", description: "Accessible markup, SEO semantics, schema structured data, and web standards compliance.", iconName: "Layout" },
  { name: "CSS3 & 3D Transforms", category: "Frontend", proficiencyTier: "Architect Level", description: "Hardware-accelerated animations, glassmorphism, flexbox/grid, and fluid typography.", iconName: "Layers" },

  // Backend
  { name: "Python", category: "Backend", proficiencyTier: "Architect Level", description: "High-performance enterprise services, data structures, automation scripts, and healthcare backends.", iconName: "Terminal" },
  { name: "Django", category: "Backend", proficiencyTier: "Architect Level", description: "Enterprise MVC architecture, ORM optimization, secure authentication, and healthcare ERPs.", iconName: "Server" },
  { name: "Node.js", category: "Backend", proficiencyTier: "Advanced Production", description: "Asynchronous runtime, microservices, REST APIs, and build toolchains.", iconName: "Cpu" },
  { name: "REST APIs", category: "Backend", proficiencyTier: "Architect Level", description: "Stateless RESTful API contract design, rate-limiting, secure headers, and documentation.", iconName: "Network" },

  // Database
  { name: "PostgreSQL", category: "Database", proficiencyTier: "Architect Level", description: "Relational data modeling, ACID transactions, complex indexing, and healthcare audit logging.", iconName: "Database" },
  { name: "MySQL", category: "Database", proficiencyTier: "Advanced Production", description: "High-volume transactional schemas, query optimization, and relational persistence.", iconName: "HardDrive" },
  { name: "Redis", category: "Database", proficiencyTier: "Advanced Production", description: "In-memory caching, message queues with Celery, session storage, and rate-limiting.", iconName: "Zap" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", proficiencyTier: "Advanced Production", description: "EC2, S3, RDS, VPC routing, IAM zero-trust policies, and elastic deployments.", iconName: "Cloud" },
  { name: "Linux Systems", category: "Cloud & DevOps", proficiencyTier: "Architect Level", description: "Server provisioning, systemd services, shell scripting, security hardening, and permissions.", iconName: "Terminal" },
  { name: "Docker", category: "Cloud & DevOps", proficiencyTier: "Advanced Production", description: "Containerized application packaging, multi-stage builds, and microservices isolation.", iconName: "Box" },
  { name: "Nginx", category: "Cloud & DevOps", proficiencyTier: "Advanced Production", description: "Reverse proxying, SSL/TLS certificate management, load balancing, and rate limiting.", iconName: "Shield" },
  { name: "Git & GitHub", category: "Cloud & DevOps", proficiencyTier: "Architect Level", description: "Branching strategies, code review workflows, and public open-source maintainership.", iconName: "GitBranch" },
  { name: "Vercel", category: "Cloud & DevOps", proficiencyTier: "Advanced Production", description: "Edge rendering, serverless functions, continuous deployment, and preview pipelines.", iconName: "Globe" },

  // Development Tools
  { name: "VS Code & Tooling", category: "Development Tools", proficiencyTier: "Specialist", description: "Configured developer environment with linting, typing, and debugging toolchains.", iconName: "Wrench" },
  { name: "Postman", category: "Development Tools", proficiencyTier: "Specialist", description: "API contract testing, integration suites, and automated endpoint validation.", iconName: "Send" },
  { name: "Figma", category: "Development Tools", proficiencyTier: "Specialist", description: "UI/UX wireframing, component design systems, and developer handoff workflows.", iconName: "Figma" },
  { name: "Vite", category: "Development Tools", proficiencyTier: "Specialist", description: "Lightning-fast HMR, Rollup bundling, asset optimization, and TypeScript pipelines.", iconName: "Zap" },

  // AI & Automation
  { name: "Enterprise Automation", category: "AI & Automation", proficiencyTier: "Architect Level", description: "Automated clinical workflows, inventory alert triggers, and hospital event processing.", iconName: "Activity" },
  { name: "Nova AI Engine", category: "AI & Automation", proficiencyTier: "Architect Level", description: "Sovereign, on-premises natural language summarization for diagnostic reports.", iconName: "Sparkles" },
  { name: "Zero-Trust Architecture", category: "AI & Automation", proficiencyTier: "Architect Level", description: "Strict healthcare data sovereignty ensuring zero external training on patient records.", iconName: "Lock" }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2024 — Present",
    period: "Current Milestone",
    role: "Founder & Full-Stack Architect",
    entity: "CSVS IT Tech",
    location: "Tamil Nadu, India",
    description: "Founded and actively architecting CSVS IT Tech as an enterprise healthcare technology platform. Leading software architecture, cloud infrastructure, and hospital deployments.",
    highlights: [
      "Architected CSVS Nova HMS, an enterprise hospital management suite with IP/OP, LIMS, and PACS/DICOM modules.",
      "Established the 100% Healthcare Data Sovereignty doctrine: zero external AI model exposure for patient records.",
      "Engineered resilient multi-tier cloud deployments on AWS with automated zero-downtime database replication."
    ],
    badge: "Current Leadership",
    type: "founding"
  },
  {
    year: "2023 — 2024",
    period: "System Architecture Milestone",
    role: "Lead Healthcare Systems Architect",
    entity: "Enterprise Clinical & Laboratory Deployments",
    location: "Tamil Nadu, India",
    description: "Engineered critical hospital management microservices, laboratory analyzer serial communication protocols, and diagnostic reporting modules.",
    highlights: [
      "Standardized multi-counter hospital billing with split insurance and audit logging.",
      "Designed LIMS interfacing layer connecting clinical analyzers directly to central electronic health records.",
      "Developed high-throughput pharmacy inventory tracking with automatic expiry and stock decrement triggers."
    ],
    badge: "Enterprise Systems",
    type: "deployment"
  },
  {
    year: "2022 — 2023",
    period: "Open-Source & Engineering Milestone",
    role: "Full-Stack Developer & Software Architect",
    entity: "Open-Source Healthcare Innovation",
    location: "Tamil Nadu, India",
    description: "Created and published verified open-source healthcare platforms including medical_erp2 and DoctoHub on GitHub to advance accessible clinical software.",
    highlights: [
      "Published medical_erp2: full hospital ERP handling OPD, IPD, and laboratory modules on Django & PostgreSQL.",
      "Published DoctoHub: doctor-patient consultation suite with appointment scheduling and clinical communication.",
      "Explored reactive frontend architectures with TypeScript and modern web standards."
    ],
    badge: "Open-Source Impact",
    type: "open-source"
  }
];

export const CSVS_STARTUP_INFO = {
  name: "CSVS IT Tech",
  tagline: "Engineering the Future. Building Beyond Boundaries.",
  heading: "Building Tomorrow with CSVS IT Tech",
  officialUrl: "https://csvsittech.in",
  email: "contact@csvsittech.in",
  location: "Tamil Nadu, India",
  mission: "To engineer resilient, sovereign, and fault-tolerant software infrastructure for healthcare systems, enterprises, and modern digital ecosystems—safeguarding institutional data ownership without compromise.",
  vision: "A future where healthcare institutions and enterprises maintain absolute 100% control over their digital intelligence, backed by zero-downtime cloud architecture and seamless workflow automation.",
  coreOfferings: [
    {
      title: "Enterprise Software Solutions",
      description: "Custom-engineered high-concurrency software architectures, microservices, and secure distributed backend systems tailored for mission-critical operations.",
      icon: "Server"
    },
    {
      title: "Healthcare ERP Development",
      description: "End-to-end hospital management systems (CSVS Nova HMS) encompassing IP/OP workflows, LIMS laboratory automation, and PACS/DICOM diagnostic pipelines.",
      icon: "ShieldAlert"
    },
    {
      title: "Web & Digital Platforms",
      description: "Modern, reactive, ultra-fast web applications built with TypeScript, React, and server-side rendering for doctors, enterprises, and customers.",
      icon: "Globe"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Hardened AWS and Linux cloud infrastructure, Docker containerization, automated CI/CD pipelines, and zero-downtime database replication.",
      icon: "Cloud"
    },
    {
      title: "Business Process Automation",
      description: "Intelligent workflow automation pipelines that eliminate manual operational bottlenecks while keeping sensitive business data completely sovereign.",
      icon: "Cpu"
    },
    {
      title: "100% Data Sovereignty Doctrine",
      description: "Strict guarantee that institutional patient data and business ledgers are never used to train external or public AI models.",
      icon: "Lock"
    }
  ]
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "data-sovereignty",
    title: "100% Sovereign Clinical Architecture",
    issuer: "CSVS IT Tech Standard",
    date: "Verified Architecture",
    badgeCode: "DATA-SOV-100",
    description: "Designed and implemented strict enterprise boundaries ensuring zero clinical data leakage to external models or public cloud services.",
    impactMetric: "Zero-Data-Leakage"
  },
  {
    id: "healthcare-erp-pioneer",
    title: "Verified Open-Source Healthcare Platforms",
    issuer: "GitHub Open Source Ecosystem",
    date: "Public Repositories",
    badgeCode: "OSS-HEALTH-ERP",
    description: "Architected and published medical_erp2, DoctoHub, and remix-of-gen-tech-hub repositories for accessible clinical software design.",
    verificationUrl: "https://github.com/MartinLourduraj",
    impactMetric: "3+ Public Repos"
  },
  {
    id: "aws-cloud-resilience",
    title: "High-Concurrency Cloud Infrastructure",
    issuer: "Enterprise Deployments",
    date: "Production Scale",
    badgeCode: "AWS-CLOUD-HA",
    description: "Implemented containerized microservice architectures with automated failover and zero-downtime database synchronization.",
    impactMetric: "99.9% Reliability"
  }
];

// Verified Fallback Cache for GitHub Repositories (ensures 100% uptime even if GitHub API rate-limits)
export const GITHUB_REPOS_CACHE: GitHubRepoData[] = [
  {
    name: "remix-of-gen-tech-hub",
    description: "Next-Gen Healthcare & Hospital Management Platform with interactive portals and responsive glassmorphism UI.",
    language: "TypeScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/MartinLourduraj/remix-of-gen-tech-hub",
    updatedAt: "2024-11",
    topics: ["typescript", "remix", "react", "tailwindcss", "healthcare-portal"]
  },
  {
    name: "medical_erp2",
    description: "Hospital ERP handling Out-Patient (OP), In-Patient (IP), Clinical Labs, Pharmacy, and Diagnostic Billing counters.",
    language: "Python",
    stars: 3,
    forks: 1,
    url: "https://github.com/MartinLourduraj/medical_erp2",
    updatedAt: "2024-10",
    topics: ["python", "django", "postgresql", "hospital-management", "medical-erp"]
  },
  {
    name: "DoctoHub",
    description: "Doctor-Patient Clinical Social Network and appointment management suite with secure physician discovery.",
    language: "Python",
    stars: 2,
    forks: 0,
    url: "https://github.com/MartinLourduraj/DoctoHub",
    updatedAt: "2024-09",
    topics: ["python", "django", "aws", "tele-health", "appointment-booking"]
  },
  {
    name: "csvs-github-theme",
    description: "CSVS Underworld & Cyber Gaming Themes extension for developer profiles and automated sync.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/MartinLourduraj",
    updatedAt: "2024-11",
    topics: ["chrome-extension", "cyberpunk", "theme", "github-profile"]
  }
];
