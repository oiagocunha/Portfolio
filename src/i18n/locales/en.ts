import { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  a11y: {
    skipToContent: "Skip to content",
    toggleMenu: "Open or close menu",
    changeLanguage: "Change language",
    toggleTheme: "Toggle light or dark theme",
    scrollTop: "Back to top",
    openMedia: "Play demo",
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
  },

  hero: {
    greeting: "IC Desenvolvimento",
    headline: "Websites, automation, and custom systems.",
    typewriter: [],
    description:
      "Web development, routine automation, tool integrations, and first versions of internal systems — under IC Desenvolvimento, by Iago Cunha.",
    primaryCta: "Chat on WhatsApp",
    secondaryCta: "See projects",
    alt: "Photo of Iago Cunha",
    role: "by Iago Cunha",
    highlights: [],
  },

  applications: {
    title: "Where this shows up",
    subtitle: "Practical situations. Deliverables are listed under Services.",
    items: [
      {
        title: "Catalog with online orders",
        description:
          "Show products by category and take orders without relying only on WhatsApp chats.",
      },
      {
        title: "Reports that are still manual",
        description:
          "Pull data from spreadsheets or APIs, generate the report, and notify the team when it is ready.",
      },
      {
        title: "Moving data between tools",
        description:
          "Stop copying between CRM, spreadsheets, and email — let information flow from one system to another.",
      },
      {
        title: "Replacing the spreadsheet",
        description:
          "Track orders, status, or inventory in a small tool built for how the business actually works.",
      },
    ],
  },

  services: {
    title: "Services",
    subtitle: "Three delivery formats. Scope is fixed in the proposal.",
    whenLabel: "What is included",
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
          "Operating documentation",
        ],
      },
      {
        title: "First version of a system",
        description:
          "An internal tool for the main operational flow when off-the-shelf software does not fit.",
        when: "",
        examples: [
          "Main workflow with a defined scope",
          "Interface and data required for operations",
          "Acceptance criteria in the proposal",
        ],
      },
    ],
  },

  process: {
    title: "How I work",
    subtitle: "From alignment to delivery.",
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
    title: "ABOUT.",
    subtitle: "IC Desenvolvimento · Iago Cunha",
    paragraphs: [
      "IC Desenvolvimento is the brand under which I take on business projects: websites, automations, integrations, and systems.",
      "I work at Sistema FIEC / Industry Observatory on backend, automation, and AI. Independently, I have shipped client projects since June 2024.",
    ],
  },

  specialties: {
    title: "TECHNICAL",
    subtitle: "WORK",
    items: [
      {
        emoji: "",
        title: "Agents and orchestration",
        description:
          "From the chat prompt to the workflow: which agent answers, what it queries, and how the response streams back.",
      },
      {
        emoji: "",
        title: "APIs and backend",
        description:
          "FastAPI, REST contracts, SSE streaming, and integration with model providers.",
      },
      {
        emoji: "",
        title: "Document search",
        description:
          "Ingestion, embeddings, and context-aware lookup — including mixing semantic search with SQL when it helps.",
      },
      {
        emoji: "",
        title: "Queues and failures",
        description:
          "Kafka, retries, backoff, and DLQ so errors do not disappear mid-flow.",
      },
      {
        emoji: "",
        title: "Corporate access",
        description:
          "Google Workspace/AD authentication and group-based access control.",
      },
      {
        emoji: "",
        title: "Environment and deploy",
        description:
          "Docker, Kubernetes, and a setup another developer can repeat.",
      },
    ],
  },

  technologies: {
    title: "TECH",
    subtitle: "STACK",
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
    title: "How a flow usually runs",
    subtitle:
      "The request hits the gateway, enters Temporal, fetches the right context, and handles failure in a controlled way.",
    cardTitle: "Chat → API → Temporal → search",
    inPracticeLabel: "In practice:",
    inPracticeText:
      "the right agent answers from the right base. If it fails, you get logs and a queue to retry.",
    cta: "Open the full case",
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
        title: "3. Automation",
        tech: ["n8n", "Integrations", "Notifications"],
        goal: "Reduce repetitive work and keep the flow visible to the team.",
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
        goal: "Isolate the failure, investigate, and reprocess without affecting the rest.",
        diagram: `flowchart LR
  F[Failure] --> DLQ[Dead Letter Queue]
  DLQ --> LOG[Structured logs]
  LOG --> FIX[Investigation]
  FIX --> REP[Reprocess]`,
      },
    ],
  },

  projects: {
    title: "PROJECTS.",
    subtitle: "Recent work and what each project solved.",
    demo: "Demo",
    docs: "API",
    code: "Code",
    caseStudy: "Case study",
    complexityLabel: "Complexity",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    deliveryLabel: "What was delivered",
    techLabel: "Technologies",
    featuredLabel: "For your business",
    earlyWorkLabel: "Technical projects",
    earlyWorkSubtitle:
      "Systems and prototypes where you can see backend, AI, and integration decisions.",
    similarWhatsappCta: "Want something similar? Chat on WhatsApp",
    statusLabels: {
      internal: "Internal project",
      unavailable: "Demo offline",
      archived: "Archived",
    },
    complexity: {
      Low: "Low",
      Medium: "Medium",
      High: "High",
      "Very High": "Very high",
    },
    featured: [
      {
        title: "FV Crochê",
        description:
          "A web app with catalog, categories, and cart to present products and make ordering easier.",
        problem:
          "The business needed to show products clearly and take orders without relying only on scattered chats.",
        solution:
          "An organized catalog, categories, and a cart designed for the order flow.",
        demo: "https://fv-croche.vercel.app/",
        image: "/images/fv-croche.png",
        alt: "FV Crochê landing",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        complexity: "Medium",
        impact: [
          "Online catalog with categories",
          "Cart built for orders",
          "Home page that leads straight to products",
        ],
        iconKey: "croche",
        status: "live",
      },
    ],
    earlyWork: [
      {
        title: "Corporate assistant with agents",
        description:
          "Internal chat with an OpenAI-compatible gateway, Temporal-based agents, and document search by context.",
        problem:
          "The team needed a stable internal assistant with answers in the right context — and without silent failures.",
        solution:
          "I worked on the gateway, Temporal orchestration, RAG pipelines, and stabilizing the environment the team uses.",
        caseStudyPath: "/case-study/chat-platform",
        image: "/images/assistente-corporativo.jpg",
        alt: "Corporate assistant screen",
        technologies: ["Temporal", "FastAPI", "RAG", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
        complexity: "Very High",
        impact: [
          "OpenAI-compatible gateway with SSE streaming",
          "Context routing with dedicated RAG bases",
          "Retry, backoff, and DLQ in workflows",
        ],
        iconKey: "chatPlatform",
        status: "internal",
      },
      {
        title: "Job Match Alerts",
        description:
          "Resume-to-job matching with LLMs: PDF upload, URL import, and explainable compatibility ranking.",
        problem:
          "Assess resume–job fit without reviewing everything by hand.",
        solution:
          "An app with LLM-assisted extraction, explainable scoring, Pytest coverage, and GitHub Actions CI.",
        demo: "https://job-match-alerts.vercel.app/",
        repo: "https://github.com/oiagocunha/job-match-alerts",
        image: "/images/job-match-alerts-swagger.png",
        alt: "Job Match Alerts",
        technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "OpenAI", "Docker"],
        complexity: "High",
        impact: [
          "Resume PDF upload",
          "Job import from URL",
          "Explainable compatibility ranking",
        ],
        iconKey: "jobMatch",
        status: "live",
      },
      {
        title: "Public data monitor",
        description:
          "Async public-news pipeline with a paginated API, deduplication, and idempotent persistence.",
        problem:
          "Collect external data reliably, without duplicate records, and with a documented API.",
        solution:
          "Collection with retry and backoff, unique URL index, OpenAPI docs, and local Docker Compose.",
        demo: "https://public-data-monitor.onrender.com/docs",
        repo: "https://github.com/oiagocunha/public-data-monitor",
        caseStudyPath: "/case-study/public-data-monitor",
        image: "/images/public-data-monitor-swagger.png",
        alt: "Public data monitor",
        technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "asyncio", "Docker"],
        complexity: "High",
        impact: [
          "Collection without duplicate URLs",
          "API documented in Swagger",
          "Reproducible Docker Compose setup",
        ],
        iconKey: "publicData",
        status: "live",
      },
    ],
  },

  certifications: {
    title: "EDUCATION",
    subtitle: "AND COURSES",
    viewCert: "View certificate",
    items: [
      {
        title: "Complete Python (Worlds 1, 2, and 3)",
        issuer: "Curso em Vídeo",
        date: "2024-2026",
        credential: "3 modules completed + 4th in progress",
        link: "",
        skills: ["Python", "OOP", "Data Structures", "Algorithms"],
      },
      {
        title: "Complete JavaScript",
        issuer: "Curso em Vídeo",
        date: "2024",
        credential: "Full JavaScript course",
        link: "",
        skills: ["JavaScript", "DOM", "ES6+", "Async"],
      },
      {
        title: "Programming Logic",
        issuer: "Curso em Vídeo",
        date: "2024",
        credential: "Logic and algorithm fundamentals",
        link: "",
        skills: ["Algorithms", "Logic", "Control Structures"],
      },
      {
        title: "Tech Generation Program",
        issuer: "Ger Tech",
        date: "2024",
        credential: "Technology training",
        link: "",
        skills: ["Web Development", "Backend", "Frontend"],
      },
      {
        title: "English",
        issuer: "Self-assessed",
        date: "2025",
        credential: "B2 level",
        link: "",
        skills: ["Reading", "Writing", "Listening", "Speaking"],
      },
    ],
  },

  experience: {
    title: "EXPERIENCE",
    subtitle: "WORK",
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
          "I build MVPs, automations, and API integrations — from technical planning through frontend, backend, and relational and non-relational databases.",
          "I deliver websites, lean systems, and automated routines based on what each project needs.",
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
    title: "CONTACT.",
    subtitle: "WhatsApp, email, or the form below.",
    reassurance:
      "Share the project context and what you need. If the scope is still open, the first conversation is for that.",
    email: "Email",
    whatsapp: "WhatsApp",
    whatsappNumber: "5585989035010",
    whatsappDisplay: "+55 85 98903-5010",
    whatsappMessage:
      "Hi Iago! I found the IC Desenvolvimento site and would like to talk about a project.",
    whatsappCta: "Chat on WhatsApp",
    location: "Location",
    locationText: "Fortaleza, Ceará",
    formTitle: "Send a message",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    subjectPlaceholder: "Subject (optional)",
    messagePlaceholder: "Project context and what you need.",
    sending: "Sending...",
    sendButton: "Send message",
    successTitle: "Message sent",
    successDescription: "I will reply as soon as I can.",
    errorTitle: "Could not send",
    errorDescription: "Please fill in all required fields.",
    errorGeneric: "Try again in a moment.",
    errorEndpoint: "Form endpoint is not configured yet.",
    formSubject: "Contact — IC Desenvolvimento",
  },

  navbar: {
    items: [
      { href: "#hero", label: "Home" },
      { href: "#servicos", label: "Services" },
      { href: "#projetos", label: "Projects" },
      { href: "#como-trabalho", label: "How I work" },
      { href: "#sobre", label: "About" },
      { href: "#contato", label: "Contact" },
    ],
  },

  footer: {
    rights: "All rights reserved.",
    tagline: "Websites, automation, and custom systems.",
  },

  whatsappFloat: {
    label: "WhatsApp",
  },

  seo: {
    siteName: "IC Desenvolvimento | Iago Cunha",
    keywords:
      "IC Desenvolvimento, Iago Cunha, web development, process automation, system integration, custom software, n8n automation, MVP, internal systems, applied AI, FastAPI, React, Fortaleza, Brazil",
    pages: {
      home: {
        title: "IC Desenvolvimento | Websites, Automation & Systems",
        description:
          "Websites, automations, integrations, and custom systems. IC Desenvolvimento, by Iago Cunha — Fortaleza, Brazil.",
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
        'Backend MVP to collect G1 Tecnologia news, store them without duplicating URLs in PostgreSQL, and expose a REST contract with OpenAPI. Live demo on Render if you want to try it without cloning the repository.',
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
            'Show public data collection, reliable persistence, and an API people can actually use, with clear docs.',
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
            'Keep collection idempotent when triggered manually or run again.',
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
        "An internal chat where each question can go to a different agent. I worked on the OpenAI-compatible gateway, Temporal orchestration, RAG pipelines, and environment stability — including a bug where the wrong domain answered with generic text.",
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
            "Made sure `model` reached vector search, with logs along the way and a warning when the worker was stale.",
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
