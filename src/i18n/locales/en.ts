import { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  a11y: {
    skipToContent: "Skip to content",
    toggleMenu: "Open or close menu",
    changeLanguage: "Change language",
    toggleTheme: "Toggle light or dark theme",
    scrollTop: "Back to top",
    showDiagramSource: "View Mermaid source",
    hideDiagramSource: "Hide source",
    diagramError: "Could not render the diagram.",
  },

  notFound: {
    title: "Page not found",
    description: "This URL does not exist on this portfolio.",
    backHome: "Back to home",
  },

  brand: {
    name: "IC Desenvolvimento",
    byline: "by Iago Cunha",
    professionalName: "Iago Cunha",
    professionalByline: "Backend · AI & Automation",
  },

  hero: {
    headline: "Websites, automation, and custom systems.",
    description:
      "I build websites, automations, tool integrations, and internal systems. Each project starts from the problem to solve, and scope is locked in the proposal.",
    primaryCta: "Chat on WhatsApp",
    secondaryCta: "See projects",
    alt: "Photo of Iago Cunha",
    recruitersLabel: "Recruiters: ",
    recruitersLink: "experience and résumé",
  },

  home: {
    status: "Backend & AI at Sistema FIEC · since 03/2025",
    role: "Backend & Applied AI Developer",
    lede:
      "APIs, agent orchestration with Temporal, RAG pipelines, and corporate authentication at Sistema FIEC. I also build websites, automations, and internal systems for businesses.",
    meta: "Fortaleza, Brazil · English B2 · Open to remote",
    pathsLabel: "Where to start",
    paths: {
      recruiters: {
        eyebrow: "For recruiters",
        title: "Experience, technical cases, and résumé",
        description:
          "What I built on the corporate assistant, architecture decisions, and open-source projects.",
        tags: ["Python", "FastAPI", "Temporal", "RAG", "Kubernetes"],
        cta: "See professional profile",
      },
      companies: {
        eyebrow: "For businesses",
        title: "Websites, automation, and internal systems",
        description:
          "Scope agreed in the proposal, starting from the operation's problem. Real and demo projects to explore before we talk.",
        tags: ["Websites", "n8n automation", "Internal systems"],
        cta: "See services",
      },
    },
    workTitle: "Selected work",
    workSubtitle:
      "Each item states the kind of project, my role, and where you can check it. Demo projects are labeled as such.",
    selectedWork: ["chatPlatform", "jobMatch", "croche", "assistIa"],
    contactTitle: "Contact",
    contactSubtitle: "Job or project: tell me the context and what you need.",
    whatsappNote: "Business projects",
  },

  applications: {
    title: "Examples of use",
    items: [
      {
        title: "Catalog with online orders",
        description:
          "When chat-only selling gets messy: customers need clear categories and a simple way to order.",
      },
      {
        title: "Reports that are still manual",
        description:
          "When someone still pulls spreadsheets or APIs by hand and the team waits for the file.",
      },
      {
        title: "Moving data between tools",
        description:
          "When the same information is typed again into the CRM, spreadsheet, and email.",
      },
      {
        title: "Operations beyond the spreadsheet",
        description:
          "When orders, status, or inventory no longer fit a shared spreadsheet and create rework.",
      },
    ],
  },

  services: {
    title: "Services",
    subtitle:
      "The scope adjusts to the problem. Timeline, investment, and what is included are set in the proposal.",
    whenLabel: "What's included",
    talkCta: "Talk about this service",
    whatsappPrefix: "Hi Iago, I'd like to talk about: ",
    footnote:
      "The proposal covers deliverables, timeline, investment, revisions, and post-delivery support. Hosting, domain, and third-party costs appear in the proposal when the project needs them.",
    items: [
      {
        title: "Website for inquiries",
        description:
          "A lean website or app to present the business, take inquiries, or show products.",
        when: "",
        examples: [
          "Pages and content defined in the scope",
          "Contact form or WhatsApp",
          "Publishing and usage guidance",
        ],
      },
      {
        title: "Automate one workflow",
        description:
          "Automate a repetitive routine and connect the tools involved in the flow.",
        when: "",
        examples: [
          "Map the routine and its integrations",
          "Workflow with failure handling",
          "Documentation for running it",
        ],
      },
      {
        title: "Internal system for operations",
        description:
          "An internal tool for the main business flow when off-the-shelf software does not cover the case.",
        when: "",
        examples: [
          "Main workflow agreed in the scope",
          "Interface and data the operation needs",
          "Acceptance criteria in the proposal",
        ],
      },
    ],
  },

  process: {
    title: "How I work",
    subtitle: "From the first conversation to launch.",
    steps: [
      {
        title: "Initial conversation",
        description: "Business context and the problem to solve.",
      },
      {
        title: "Scope",
        description: "What is included, estimated timeline, and investment.",
      },
      {
        title: "Development",
        description: "Build with regular visibility into what is being done.",
      },
      {
        title: "Delivery",
        description: "Launch, usage guidance, and agreed adjustments.",
      },
    ],
  },

  about: {
    title: "About",
    subtitle: "IC Desenvolvimento · Iago Cunha",
    paragraphs: [
      "Through IC Desenvolvimento I take on website, automation, integration, and systems projects.",
      "I work at Sistema FIEC / Observatório da Indústria on backend, automation, and AI. In parallel, I have been taking on independent projects since June 2024.",
    ],
    imageAlt:
      "Iago Cunha at an event, in front of a screen showing his name and the text Estagiário em Desenvolvimento de Produto.",
  },

  technologies: {
    title: "Tech stack",
    categories: [
      {
        title: "Backend",
        content: "Python, FastAPI, Node.js, TypeScript, SQLAlchemy, Pytest",
      },
      {
        title: "AI and automation",
        content: "LLMs, agents, RAG, embeddings, pgvector, n8n",
      },
      {
        title: "Orchestration and data",
        content: "Temporal, Kafka, asyncio, PostgreSQL, MongoDB, Redis",
      },
      {
        title: "Frontend",
        content: "React, Next.js, Tailwind CSS",
      },
      {
        title: "Infra",
        content: "Docker, Kubernetes, GitLab CI/CD, GitHub Actions, Linux",
      },
    ],
  },

  workflowShowcase: {
    title: "How an automation flow is organized",
    subtitle:
      "A concrete integration example: the event comes in, the workflow orchestrates steps, fetches context, and handles failure without losing the trail.",
    cardTitle: "Intake → orchestration → integration → recovery",
    inPracticeLabel: "In practice:",
    inPracticeText:
      "each stage has a clear job. If something fails, you get logs, a queue, and a path to reprocess. The error doesn't disappear mid-flow.",
    cta: "View the corporate assistant case",
    diagramTitle: "Stage sketch",
    stages: [
      {
        id: "ingestion",
        title: "1. Intake",
        tech: ["Kafka", "Webhook", "FastAPI"],
        goal: "Accept the event without duplicates and record where it came from.",
        diagram: `flowchart LR
  P[Producer] --> K[Kafka / Webhook]
  K --> API[FastAPI]
  API --> C[Correlation ID]
  API --> ACK[Idempotent ack]`,
      },
      {
        id: "orchestration",
        title: "2. Orchestration",
        tech: ["Temporal", "Retry", "Backoff"],
        goal: "Chain steps and retry when an activity fails.",
        diagram: `flowchart LR
  E[Event] --> W[Temporal Workflow]
  W --> A1[Activity]
  A1 -->|ok| N[Next step]
  A1 -->|fail| R[Retry / Backoff]
  R --> A1`,
      },
      {
        id: "automation",
        title: "3. Integration",
        tech: ["n8n", "Integrations", "Notifications"],
        goal: "Connect tools and notify the team without repeating manual work.",
        diagram: `flowchart LR
  T[Trigger] --> N8[n8n]
  N8 --> I[Integrations]
  N8 --> NT[Notifications]
  N8 --> L[Execution log]`,
      },
      {
        id: "recovery",
        title: "4. When it fails",
        tech: ["DLQ", "Logs", "Metrics"],
        goal: "Isolate the failure, investigate, and reprocess without taking down the rest of the flow.",
        diagram: `flowchart LR
  F[Failure] --> DLQ[Dead Letter Queue]
  DLQ --> LOG[Structured logs]
  LOG --> FIX[Investigation]
  FIX --> REP[Reprocess]`,
      },
    ],
  },

  projects: {
    title: "Projects",
    subtitle: "Recent work and what each one solves.",
    professionalSubtitle:
      "Corporate systems and personal projects: the problem, what I did, and the technical decisions.",
    demo: "View project",
    code: "Code",
    caseStudy: "Case study",
    problemLabel: "Problem",
    deliveryLabel: "What's included",
    earlyWorkLabel: "Technical cases and projects",
    roleLabel: "Role",
    stackLabel: "Stack",
    evidenceLabel: "Evidence",
    limitationLabel: "Limits",
    tagLabels: {
      internal: "Corporate · internal",
      client: "Real client",
      authored: "Personal · open source",
      demo: "Demo",
    },
    similarWhatsappCta: "Request something similar",
    featured: [
      {
        title: "FV Crochê",
        description:
          "FV Crochê storefront with categories and cart. Orders go to WhatsApp, with a shipping quote at checkout.",
        demo: "https://fv-croche.vercel.app/",
        image: "/images/fv-croche.png",
        alt: "FV Crochê hero with crochet scrunchies",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        impact: [
          "Catalog with category filters",
          "Persistent cart in the browser",
          "WhatsApp checkout",
          "Shipping quote",
        ],
        iconKey: "croche",
        evidence: "Published website.",
        status: "live",
        kind: "real",
        whatsappMessage:
          "Hi Iago, I saw FV Crochê on your portfolio and want a similar catalog/order flow for my business.",
      },
      {
        title: "LeadPilot",
        description:
          "Demo: quote requests become a queue with protocol, status, and history — Casa Norte Serviços scenario (browser-only data).",
        demo: "https://lead-pilot-ruddy.vercel.app/",
        image: "/images/lead-pilot.png",
        alt: "LeadPilot hero with Casa Norte Serviços queue",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        impact: [
          "Validated quote request form",
          "Queue with filters and search",
          "Request detail and status history",
          "Session-scoped browser data",
        ],
        iconKey: "leadPilot",
        status: "live",
        kind: "demo",
        whatsappMessage:
          "Hi Iago, I saw LeadPilot and want a similar quote/request queue.",
      },
      {
        title: "AgendaFlow",
        description:
          "Demo barbershop booking: clients pick service, professional, and time; staff confirm, cancel, or reschedule without double-booking.",
        demo: "https://agenda-flow-three.vercel.app/",
        image: "/images/agenda-flow.png",
        alt: "AgendaFlow hero for Corte & Cia with services list",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        impact: [
          "Services and professionals",
          "Conflict-aware time slots",
          "Day and week panel",
          "Confirm, cancel, and reschedule",
        ],
        iconKey: "agendaFlow",
        status: "live",
        kind: "demo",
        whatsappMessage:
          "Hi Iago, I saw AgendaFlow and want similar online booking.",
      },
      {
        title: "AssistIA",
        description:
          "Demo document-based support: simulated answers from Atlas docs, with cited sources.",
        demo: "https://assist-ia.vercel.app/",
        image: "/images/assist-ia.png",
        alt: "AssistIA hero for Atlas Serviços Técnicos",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        impact: [
          "Support chat",
          "Searchable document base",
          "Answers with sources",
          "Session history and simulated handoff",
        ],
        iconKey: "assistIa",
        limitation: "Simulated answers based on documents from a fictional company (Atlas).",
        status: "live",
        kind: "demo",
        whatsappMessage:
          "Hi Iago, I saw AssistIA and want similar document-based support.",
      },
    ],
    earlyWork: [
      {
        title: "Corporate assistant with agents",
        description:
          "Internal chat with an OpenAI-compatible gateway, Temporal-based agents, and document search by context.",
        problem:
          "The team needed a stable internal assistant with answers in the right context and without silent failures.",
        solution:
          "I worked on the gateway, Temporal orchestration, RAG pipelines, and stabilizing the environment the team uses.",
        caseStudyPath: "/case-study/chat-platform",
        image: "/images/assistente-corporativo.jpg",
        alt: "Corporate assistant screen",
        technologies: ["Temporal", "FastAPI", "RAG", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
        impact: [
          "OpenAI-compatible gateway with SSE streaming",
          "Context routing with dedicated RAG bases",
          "Retry, backoff, and DLQ in workflows",
        ],
        iconKey: "chatPlatform",
        role:
          "SSE streaming gateway, routing between skills with dedicated RAG bases, retry/backoff/DLQ, and environment stabilization.",
        evidence:
          "Case study with diagrams. Pilot telemetry: 47 registered users, 31 active.",
        limitation: "Internal system: no public demo or code.",
        status: "internal",
      },
      {
        title: "Job Match Alerts",
        description:
          "Resume-to-job matching with LLMs: PDF upload, URL import, and explainable compatibility ranking.",
        problem:
          "Assess resume-to-job fit without reviewing everything by hand.",
        solution:
          "An app with LLM-assisted extraction, explainable scoring, Pytest coverage, and GitHub Actions CI.",
        demo: "https://job-match-alerts.vercel.app/",
        repo: "https://github.com/oiagocunha/job-match-alerts",
        image: "/images/job-match-alerts-swagger.png",
        alt: "Job Match Alerts",
        technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "OpenAI", "Docker"],
        impact: [
          "Resume PDF upload",
          "Job import from URL",
          "Explainable compatibility ranking",
        ],
        iconKey: "jobMatch",
        role: "Personal project, from backend to frontend.",
        evidence: "Published demo and code on GitHub, with Pytest tests and GitHub Actions CI.",
        status: "live",
      },
      {
        title: "Public data monitor",
        description:
          "Portfolio MVP: async public-news pipeline with a paginated API, deduplication, and idempotent persistence.",
        problem:
          "Collect external data reliably, without duplicate records, and with a documented API.",
        solution:
          "Collection with retry and backoff, unique URL index, OpenAPI docs, and local Docker Compose.",
        demo: "https://public-data-monitor.onrender.com/docs",
        repo: "https://github.com/oiagocunha/public-data-monitor",
        caseStudyPath: "/case-study/public-data-monitor",
        image: "/images/public-data-monitor-swagger.png",
        alt: "Public Data Monitor Swagger screen, with the news endpoints and the API schemas.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "asyncio", "Docker"],
        impact: [
          "Collection without duplicate URLs",
          "API documented in Swagger",
          "Reproducible Docker Compose setup",
        ],
        iconKey: "publicData",
        demoNote: "The demo runs on a free plan and may take about a minute to wake up on the first visit.",
        status: "live",
      },
    ],
  },

  experience: {
    title: "Experience",
    items: [
      {
        company: "Sistema FIEC / Observatório da Indústria",
        role: "Backend & AI Developer",
        period: "03/2025 - Present",
        description: [
          "Built an OpenAI-compatible gateway connecting LibreChat to corporate agents through Temporal, with SSE streaming responses.",
          "Implemented routing across four specialized capabilities and two general-purpose models, each with its own RAG knowledge base by context.",
          "Built document ingestion and semantic search pipelines with Google Drive, embeddings, PostgreSQL, and pgvector.",
          "Automated corporate workflows with n8n and APIs, reducing manual steps and operational errors.",
          "Implemented retries, backoff, and DLQ in async workflows, plus corporate auth (Google Workspace/AD) with group-based access.",
          "Helped support apps across three Kubernetes environments and pilot telemetry (47 registered users, 31 with usage, ~1.4 million tokens).",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "Temporal",
          "Kafka",
          "RAG",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "Kubernetes",
          "n8n",
        ],
      },
      {
        company: "Independent · IC Desenvolvimento",
        role: "Full Stack Developer",
        period: "06/2024 - Present",
        description: [
          "I build websites, automations, and API integrations, from technical planning through frontend, backend, and databases.",
          "Lean systems and automated routines based on what each project needs.",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "Node.js",
          "React",
          "PostgreSQL",
          "MongoDB",
          "Docker",
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    reassurance:
      "Tell me the project context and what you need. If scope is still open, that is what the first conversation is for.",
    email: "Email",
    whatsapp: "WhatsApp",
    whatsappNumber: "5585989035010",
    whatsappDisplay: "+55 85 98903-5010",
    whatsappMessage:
      "Hi Iago! I found the IC Desenvolvimento site and would like to talk about a project.",
    whatsappCta: "Chat on WhatsApp",
    location: "Location",
    locationText: "Fortaleza, Ceará",
  },

  navbar: {
    items: [
      { href: "#trabalho", label: "Work" },
      { href: "/perfil", label: "Recruiters" },
      { href: "/servicos", label: "Businesses" },
      { href: "#contato", label: "Contact" },
    ],
    navLabel: "Primary",
    professionalItems: [
      { href: "#hero", label: "Profile" },
      { href: "#experiencia", label: "Experience" },
      { href: "#projetos", label: "Projects" },
      { href: "/servicos", label: "IC Desenvolvimento" },
    ],
    servicesItems: [
      { href: "/", label: "Home" },
      { href: "#servicos", label: "Services" },
      { href: "#projetos", label: "Projects" },
      { href: "#como-trabalho", label: "How I work" },
      { href: "#sobre", label: "About" },
      { href: "#contato", label: "Contact" },
    ],
  },

  professional: {
    eyebrow: "PROFESSIONAL PROFILE",
    role: "Backend · Generative AI & Automation",
    summary:
      "Backend & AI developer at Sistema FIEC / Observatório da Indústria. APIs, agent orchestration, RAG pipelines, corporate auth, and apps on Kubernetes.",
    meta: "Fortaleza, Brazil · Native Portuguese · English B2 · Open to remote",
    resumeLabel: "Download résumé (PDF)",
    resumeHref: "/resume-iago-cunha.pdf",
    mailSubject: "Job opportunity",
    discussCta: "Discuss an opportunity",
    mailtoLabel: "open in email app",
    educationTitle: "Education",
    educationDegree: "Estácio · Systems Analysis and Development",
    educationExpected: "Expected completion: December 2026.",
    closing: "For backend, applied AI, or automation roles:",
    icComplement:
      "In parallel, I take commercial projects through IC Desenvolvimento (websites, automations, and systems).",
    icComplementCta: "See business services",
  },

  footer: {
    rights: "All rights reserved.",
    tagline: "Websites, automation, and custom systems.",
  },

  whatsappFloat: {
    label: "WhatsApp",
  },

  seo: {
    siteName: "Iago Cunha",
    keywords:
      "Iago Cunha, backend developer, applied AI, FastAPI, Temporal, RAG, Kubernetes, n8n automation, web development, IC Desenvolvimento, Fortaleza, Brazil",
    pages: {
      home: {
        title: "Iago Cunha | Backend & Applied AI",
        description:
          "Backend & AI developer: APIs, Temporal agents, RAG, and Kubernetes. Also websites, automation, and internal systems for businesses. Fortaleza, Brazil.",
      },
      profile: {
        title: "Iago Cunha | Backend, Generative AI & Automation",
        description:
          "Backend, generative AI, and automation. Projects, experience, and résumé: Python, FastAPI, Temporal, RAG, and Kubernetes.",
      },
      services: {
        title: "Services | IC Desenvolvimento, by Iago Cunha",
        description:
          "Custom websites, automation, integrations, and internal systems. Scope, timeline, and investment defined in the proposal. Fortaleza, Brazil.",
      },
      chatCaseStudy: {
        title: "Case: corporate assistant with agents, Temporal, and RAG | Iago Cunha",
        description:
          "OpenAI-compatible gateway, Temporal orchestration, context-specific document search, and failure handling with retries and DLQ.",
      },
      publicDataCaseStudy: {
        title: "Case: public news API with FastAPI | Iago Cunha",
        description:
          "Async collection, URL deduplication in PostgreSQL, and a documented Swagger API.",
      },
    },
  },

  caseStudies: {
    publicData: {
      label: 'Case study',
      title:
        'Public news API: collection, Postgres, and Swagger',
      subtitle:
        'MVP that collects G1 news, stores them without duplicating URLs, and keeps the API documented live. Reviewers do not need to clone the repository.',
      tags: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'SQLAlchemy',
        'asyncio',
        'httpx',
        'Docker',
        'Render',
      ],
      summaryCards: [
        {
          title: 'What the MVP solves',
          paragraphs: [
            'Demonstrate public data collection, reliable persistence, and a usable API with clear docs.',
            'External sources are unstable: HTML changes, fields disappear, and the same job may run more than once.',
          ],
        },
        {
          title: 'Main decisions',
          paragraphs: [
            'Database deduplication with a unique index on `url` and `ON CONFLICT DO NOTHING`.',
            'Source-isolated scraper, progressive retry, and optional `published_at`.',
            'REST at `/news`: POST collect, GET list, GET by id; optional DELETE with API key.',
          ],
        },
        {
          title: 'What worked in practice',
          paragraphs: [
            'You can rerun collection without duplicating records.',
            'Swagger has hand-written descriptions, not only auto-generated text.',
            'Live demo at `/docs` and a local setup with Docker Compose.',
          ],
        },
      ],
      image: '/images/public-data-monitor-swagger.png',
      imageAlt: 'Public Data Monitor Swagger documentation',
      demoUrl: 'https://public-data-monitor.onrender.com/docs',
      demoNote: "The demo runs on a free plan and may take about a minute to wake up on the first visit.",
      githubUrl: 'https://github.com/oiagocunha/public-data-monitor',
      architectureTitle: 'Architecture and flow',
      diagramTitles: {
        systemFlow: 'End-to-end flow',
        backendArchitecture: 'Backend layers',
        sequence: 'POST /news collection sequence',
        failureTree: 'Idempotent collection',
      },
      charts: {
        systemFlow: `
flowchart LR
  U[User / HTTP Client] --> D[Swagger /docs]
  U --> A[FastAPI]
  A --> S[Service Layer]
  S --> SC[G1 Scraper]
  SC --> G1[(G1 Tecnologia)]
  S --> DB[(PostgreSQL)]
  A --> H[GET /health]
`,
        backendArchitecture: `
flowchart TB
  subgraph clientLayer [Client]
    CURL[curl / browser]
    SW[Swagger UI]
  end

  subgraph apiLayer [API]
    R[routes.py]
    SCH[Pydantic Schemas]
    DEP[deps optional API Key]
  end

  subgraph serviceLayer [Service]
    COL[collect_news]
    LST[list_news / get_by_id]
    DEL[delete_news_by_id]
  end

  subgraph integrationLayer [Integration]
    G1S[scrapers/g1.py]
    HTTP[httpx AsyncClient]
  end

  subgraph dataLayer [Data]
    PG[(PostgreSQL)]
    IDX[unique URL index]
  end

  CURL --> R
  SW --> R
  R --> SCH
  R --> DEP
  R --> COL
  R --> LST
  R --> DEL
  COL --> G1S
  G1S --> HTTP
  COL --> PG
  LST --> PG
  DEL --> PG
  PG --> IDX
`,
        sequence: `
sequenceDiagram
  participant C as Client
  participant API as FastAPI
  participant SVC as collect_news
  participant SCR as scrape_g1_tech
  participant G1 as G1 HTML
  participant DB as PostgreSQL

  C->>API: POST /news
  API->>SVC: collect_news(session)
  SVC->>SCR: scrape_g1_tech(limit=20)
  SCR->>G1: GET with retry and timeout
  G1-->>SCR: HTML
  SCR-->>SVC: normalized item list
  SVC->>DB: INSERT ON CONFLICT DO NOTHING url
  DB-->>SVC: inserted rowcount
  SVC-->>API: inserted
  API-->>C: CollectNewsResponse
`,
        failureTree: `
flowchart LR
  POST[POST /news] --> SCR[Scrape G1]
  SCR --> INS[INSERT news]
  INS --> UC{Unique URL?}
  UC -->|new| OK[Persisted]
  UC -->|conflict| SKIP[ON CONFLICT DO NOTHING]
`,
      },
      detailCards: [
        {
          title: 'Challenges',
          items: [
            'Treat external sources as messy without throwing away partially valid news.',
            'Keep collection idempotent when it is triggered again.',
            'Document how the API behaves for people who will not open the code.',
            'Keep layers separate so scrapers can evolve without rewriting routes.',
          ],
        },
        {
          title: 'What I decided',
          items: [
            'Unique constraint on `url` aligned with conflict-ignored inserts.',
            'Pydantic schemas with `Field(description=...)` for readable OpenAPI.',
            'REST convention: `/news` resource and HTTP verb for the action.',
            'DELETE protected by `NEWS_DELETE_API_KEY` + `X-API-Key` header.',
          ],
        },
        {
          title: 'Tradeoffs',
          items: [
            '`create_all` on startup instead of Alembic: faster for the MVP, less mature for production.',
            'Synchronous collection on POST request: simple, but does not scale like queue + workers.',
            'Single source (G1): parsing coupled to HTML; mitigation is an isolated scraper.',
            'Public API on the demo: no global auth; acceptable for a portfolio, not for open production.',
          ],
        },
        {
          title: 'Future improvements',
          items: [
            'Auth layer (JWT/OAuth2) and rate limiting at the edge.',
            'Task queue to decouple long collection from the HTTP request.',
            'Cache on frequent `GET /news` reads.',
            'CI with pytest + ruff and Postgres integration tests.',
          ],
        },
      ],
      roleTitle: 'Where I worked',
      roles: [
        {
          label: 'API',
          text: 'REST routes, pagination, health check, OpenAPI, and typed responses.',
        },
        {
          label: 'Services',
          text: 'collection, listing, counting, lookup by id, and optional deletion.',
        },
        {
          label: 'Scraper',
          text: 'async httpx, retry, HTML parsing, and field normalization.',
        },
        {
          label: 'Infra',
          text: 'local Docker Compose, Render deploy, and README with tradeoffs.',
        },
      ],
      cta: {
        demo: 'Open demo (Swagger)',
        github: 'View code on GitHub',
        backToProjects: 'Back to projects',
        contact: 'Want to talk about something similar?',
      },
    },
    chatPlatform: {
      label: "Case study",
      title: "Corporate assistant: gateway, Temporal, and document search",
      subtitle:
        "An internal chat where each question can go to a different agent. I worked on the OpenAI-compatible gateway, Temporal orchestration, RAG pipelines, and environment stability, including a bug where the wrong domain answered with generic text.",
      tags: [
        "Temporal",
        "FastAPI",
        "RAG",
        "Kafka",
        "PostgreSQL",
        "Kubernetes",
        "Docker",
      ],
      summaryCards: [
        {
          title: "The setup",
          paragraphs: [
            "Chat sends prompt and model to an OpenAI-compatible gateway. The gateway starts a Temporal workflow, which fetches the right context and returns the answer with SSE streaming.",
            "The flow includes a queue (Kafka/DLQ), corporate authentication, and per-context document bases. It is a system the team uses, not a standalone prototype.",
          ],
        },
        {
          title: "What was wrong",
          paragraphs: [
            "For one domain, answers came back generic even when the right agent was selected on screen.",
            "The worker sometimes ran an old library version, the Docker environment drifted, and mixing corporate auth with local shortcuts made debugging harder.",
          ],
        },
        {
          title: "What I did",
          paragraphs: [
            "I made sure `model` reached vector search, with logs along the way and a warning when the worker was stale.",
            "Adjustments on the gateway, workflows, document ingestion, the queue, and chat access control.",
          ],
        },
      ],
      image: "/images/assistente-corporativo.jpg",
      imageAlt: "Corporate assistant screen",
      architectureTitle: "How the pieces connect",
      diagramTitles: {
        systemFlow: "From chat to answer",
        backendArchitecture: "Layers (chat, API, Temporal, data)",
        sequence: "Call order for search",
        failureTree: "Hypothesis → evidence → fix",
      },
      charts: {
        systemFlow: `
flowchart LR
  U[User] --> C[Chat]
  C --> A[OpenAI-style API]
  A --> W[Temporal]
  W --> T[Activities]
  T --> R[Search / Agent]
  R --> V[(Vector store)]
  T --> S[(Optional SQL)]
  A --> K[Kafka]
  K --> D[Dispatcher]
  D --> Q[DLQ]
`,
        backendArchitecture: `
flowchart TB
  subgraph clientLayer [Client]
    UI[Chat + LDAP]
  end

  subgraph apiLayer [API]
    API[FastAPI]
    RT[Pick agent by model]
  end

  subgraph orchestrationLayer [Temporal]
    TW[Workflows]
    WK[Worker]
  end

  subgraph intelligenceLayer [Intelligence]
    RAG[Domain search]
    HYB[Search + SQL]
    LLM[Providers]
  end

  subgraph dataLayer [Data]
    PG[(Postgres / pgvector)]
    MG[(MongoDB)]
  end

  subgraph messagingLayer [Queue]
    KF[Kafka]
    DLQ[DLQ]
  end

  UI --> API
  API --> RT
  RT --> TW
  TW --> WK
  WK --> RAG
  WK --> HYB
  WK --> LLM
  RAG --> PG
  HYB --> PG
  API --> KF
  KF --> DLQ
  UI --> MG
`,
        sequence: `
sequenceDiagram
  participant Chat
  participant GW as API
  participant WF as Temporal
  participant ACT as Activity
  participant RAG as Search
  participant VS as Vector store

  Chat->>GW: prompt + model
  GW->>WF: start workflow
  WF->>ACT: retrieval task
  ACT->>RAG: resolve domain by model
  RAG->>VS: search
  VS-->>RAG: chunks
  RAG-->>ACT: context
  ACT-->>WF: answer
  WF-->>GW: completion / stream
  GW-->>Chat: response
`,
        failureTree: `
flowchart TB
  S[Generic answer for wrong domain] --> H1[model never arrives]
  S --> H2[worker on old lib]
  S --> H3[search hits wrong function]
  H1 --> E1[logs without model]
  H2 --> E2[version differs from repo]
  H3 --> E3[RPC / domain function]
  E1 --> FIX1[propagate and validate model]
  E2 --> FIX2[rebuild worker]
  E3 --> FIX3[fix search contract]
  FIX1 --> OK[routing ok]
  FIX2 --> OK
  FIX3 --> OK
`,
      },
      detailCards: [
        {
          title: "Difficult points",
          items: [
            "Trace the bug from chat to the vector store without guessing.",
            "Worker on an old package while the repository already had the fix.",
            "Tell code bugs apart from Docker problems.",
            "Keep LDAP in the path without breaking local testing.",
          ],
        },
        {
          title: "What we decided",
          items: [
            "Pass `model` explicitly and log each step.",
            "Detect a stale worker lib and ask for a rebuild instead of failing silently.",
            "Send unrecoverable failures to a DLQ.",
            "Make the contract between Temporal and domain search clear.",
          ],
        },
        {
          title: "Tradeoffs",
          items: [
            "Understand the flow first; latency tuning came later.",
            "Worker rebuild was costly, but it removed version drift.",
            "Kept fallbacks so production did not drop all at once.",
          ],
        },
        {
          title: "Outcome",
          items: [
            "Right agent on the right base, reliably.",
            "Pilot telemetry: 47 registered users, 31 with usage. The numbers describe the pilot, not the current active base.",
            "Environment more predictable to debug.",
            "Next: metrics and alerts on DLQ and provider fallback.",
            "Contract tests between API, workflow, and search.",
          ],
        },
      ],
      roleTitle: "My part",
      roles: [
        {
          label: "API",
          text: "OpenAI-style contract, agent selection, streaming, and healthcheck.",
        },
        {
          label: "Temporal / search",
          text: "workflows, ingestion, correct domain, and search+SQL agent.",
        },
        {
          label: "Chat",
          text: "client integration, LDAP, and group permissions.",
        },
        {
          label: "Infra",
          text: "Docker, Kafka/DLQ, and smoke tests for the full path.",
        },
      ],
      cta: {
        backToProjects: "Back to projects",
        contact: "Want to talk about a similar flow?",
      },
    },
  },
};
