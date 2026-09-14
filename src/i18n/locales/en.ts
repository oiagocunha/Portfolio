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

  hero: {
    greeting: "Hi, I'm",
    headline: "Backend focused on APIs, automation, and orchestrating AI flows.",
    typewriter: [
      "I orchestrate agents end to end, from chat to Temporal.",
      "OpenAI-style APIs built for continuous production use.",
      "When vector search hits the wrong base, I find where the flow failed.",
      "Less manual work: n8n, Kafka, and retries that hold up day to day.",
    ],
    description:
      "I mostly build backend with Python (FastAPI), Temporal, and integrations. I also work with React when the product needs a UI. I care about systems that survive use: handled failures, predictable retries, and readable logs.",
    primaryCta: "Get in touch",
    secondaryCta: "Read a case study",
    alt: "Photo of Iago Cunha",
    role: "Backend and fullstack developer",
    highlights: [
      "API that takes chat traffic and starts the right Temporal agent",
      "Each domain hits the right knowledge base, without generic answers in the wrong place",
      "On failure: retry, dead-letter queue, and Docker the team can actually run",
      "Corporate login (LDAP) and group-based access in the chat",
    ],
  },

  about: {
    title: "ABOUT ME.",
    stats: [
      { value: 3, suffix: "", label: "Years writing software" },
      { value: 10, suffix: "+", label: "Automations in production" },
      { value: 80, suffix: "%", label: "Fewer ops errors (n8n)" },
    ],
    paragraphs: [
      "I'm Iago. I work on backend: APIs, queues, databases, and the path from input to answer.",
      "These days I spend much of my time on AI flows: chat, Temporal, document search, and what happens when that fails in production.",
      "Before that I automated processes with n8n, integrated systems, and maintained legacy code. I prefer plain language and code another developer can maintain.",
    ],
  },

  specialties: {
    title: "MY",
    subtitle: "SPECIALTIES",
    items: [
      {
        emoji: "",
        title: "Agent flows",
        description:
          "From the prompt in chat to Temporal: which agent runs, what it queries, and how the answer comes back.",
      },
      {
        emoji: "",
        title: "APIs and backend",
        description:
          "FastAPI, REST contracts, streaming, and wiring multiple model providers.",
      },
      {
        emoji: "",
        title: "Document search",
        description:
          "Ingestion, embeddings, and per-domain lookup, including mixing semantic search with SQL when it helps.",
      },
      {
        emoji: "",
        title: "Queues and failure",
        description:
          "Kafka, retries, and DLQ so errors do not disappear mid-flow.",
      },
      {
        emoji: "",
        title: "Corporate access",
        description:
          "LDAP/AD, who can use which model, and sessions with a defined lifetime.",
      },
      {
        emoji: "",
        title: "Environment and deploy",
        description:
          "Docker, healthchecks, and a setup another developer can repeat.",
      },
    ],
  },

  technologies: {
    title: "MY",
    subtitle: "TECH",
    categories: [
      {
        title: "Languages and frameworks",
        content: "Python, TypeScript, JavaScript, Node.js, FastAPI, React, Next.js",
      },
      {
        title: "AI and workflows",
        content: "Temporal, RAG, pgvector, OpenAI-style APIs, n8n",
      },
      {
        title: "Data and messaging",
        content: "PostgreSQL, MongoDB, Kafka, SQLAlchemy",
      },
      {
        title: "Frontend",
        content: "React, Next.js, Tailwind CSS",
      },
      {
        title: "Infra",
        content: "Docker, GitLab CI/CD, Git, Linux, LDAP",
      },
    ],
  },

  workflowShowcase: {
    title: "How a flow usually runs",
    subtitle:
      "Day-to-day summary: the request hits the gateway, enters Temporal, fetches context, and handles failure in a controlled way.",
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
    subtitle: "What I built or helped stabilize, with the problem and the outcome.",
    demo: "Demo",
    docs: "API",
    code: "Code",
    caseStudy: "Case study",
    complexityLabel: "Complexity",
    featuredLabel: "Main work",
    earlyWorkLabel: "Smaller projects",
    earlyWorkSubtitle:
      "Older or simpler work. Here to show the path, not to compete with the main cases.",
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
        title: "Corporate assistant with agents",
        description:
          "I worked on the API, Temporal workflows, document search, and Docker setup for an internal chat with multiple agents.",
        caseStudyPath: "/case-study/chat-platform",
        image: "/images/assistente-corporativo.jpg",
        alt: "Corporate assistant screen with message input and advanced models",
        technologies: [
          "Temporal",
          "FastAPI",
          "RAG",
          "Kafka",
          "PostgreSQL",
          "LDAP",
          "Docker",
        ],
        complexity: "Very High",
        impact: [
          "Fixed wrong-domain answers: the model now reaches search",
          "OpenAI-style API with streaming and end-to-end healthcheck",
          "Doc ingestion, search+SQL agent, and DLQ for failures",
          "LDAP login and group permissions in chat",
        ],
        iconKey: "chatPlatform",
        status: "internal",
      },
      {
        title: "Public data monitor",
        description:
          "API that pulls G1 news, stores them in Postgres without duplicating URLs, and exposes Swagger. Live demo on Render.",
        demo: "https://public-data-monitor.onrender.com/docs",
        repo: "https://github.com/oiagocunha/public-data-monitor",
        caseStudyPath: "/case-study/public-data-monitor",
        image: "/images/public-data-monitor-swagger.png",
        media: "/images/public-data-monitor-swagger.png",
        alt: "Public Data Monitor Swagger",
        technologies: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "SQLAlchemy",
          "httpx",
          "Docker",
          "Render",
        ],
        complexity: "High",
        impact: [
          "Collection can run again without creating duplicates",
          "Clear /news endpoints, documented in OpenAPI",
          "Scraper retries when G1 HTML fails",
          "Runs locally with Docker Compose",
        ],
        iconKey: "publicData",
        status: "live",
      },
      {
        title: "Job Match Alerts",
        description:
          "Upload a resume PDF, import a job by URL, get an ATS score with what matched and what was missing.",
        demo: "https://job-match-alerts.vercel.app/",
        docs: "https://job-match-alerts.onrender.com/docs",
        repo: "https://github.com/oiagocunha/job-match-alerts",
        image: "/images/job-match-alerts-swagger.png",
        alt: "Job Match Alerts",
        technologies: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "React",
          "TypeScript",
          "OpenAI",
          "Docker",
        ],
        complexity: "High",
        impact: [
          "Multiple resumes saved from PDF",
          "Immediate score with matched and missing skills",
          "Job ranking with seniority and remote filters",
          "Documented API and predictable scoring",
        ],
        iconKey: "jobMatch",
        status: "live",
      },
    ],
    earlyWork: [
      {
        title: "FV Crochê",
        description:
          "Crochet storefront in React: catalog, categories, and cart for custom orders.",
        demo: "https://fv-croche.vercel.app/",
        image: "/images/fv-croche.png",
        alt: "FV Crochê landing",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        complexity: "Medium",
        impact: [
          "Home points straight to the catalog",
          "Cart built for custom orders",
          "Rebrand from the older project",
        ],
        iconKey: "croche",
        status: "live",
      },
    ],
  },

  certifications: {
    title: 'CERTIFICATIONS',
    subtitle: 'AND COURSES',
    viewCert: 'View certificate',
    items: [
      {
        title: 'Complete Python (Worlds 1, 2, and 3)',
        issuer: 'Curso em Vídeo',
        date: '2024-2026',
        credential: '3 modules completed + 4th in progress',
        link: '',
        skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
      },
      {
        title: 'Complete JavaScript',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Full JavaScript course',
        link: '',
        skills: ['JavaScript', 'DOM', 'ES6+', 'Async'],
      },
      {
        title: 'Programming Logic',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Logic and algorithm fundamentals',
        link: '',
        skills: ['Algorithms', 'Logic', 'Control Structures'],
      },
      {
        title: 'Tech Generation Program',
        issuer: 'Ger Tech',
        date: '2024',
        credential: 'Technology training',
        link: '',
        skills: ['Web Development', 'Backend', 'Frontend'],
      },
      {
        title: 'Basic English',
        issuer: 'Language Courses',
        date: '2023',
        credential: 'B1 level certified',
        link: 'https://cert.efset.org/en/je23Yi',
        skills: ['Reading', 'Writing', 'Listening', 'Speaking'],
      },
    ],
  },

  experience: {
    title: "EXPERIENCE",
    subtitle: "WORK",
    items: [
      {
        company: "FIEC System / Industry Observatory",
        role: "Backend developer",
        period: "11/2025 - Present",
        description: [
          "I work on the chat API (OpenAI-style), Temporal workflows, and how they connect to the assistant UI.",
          "I fixed the path so `model` reaches document search, and the agent hits the right knowledge base.",
          "I also deal with Kafka/DLQ, healthchecks, and the Docker setup the team uses daily.",
          "LDAP login, group permissions, and chat session behavior.",
          "I join architecture discussions when the topic is splitting services, failure handling, and the local environment.",
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
          "LDAP",
          "n8n",
          "Node.js",
          "GitLab CI/CD",
        ],
      },
      {
        company: "FIEC System / Industry Observatory",
        role: "Development intern",
        period: "03/2025 - 11/2025",
        description: [
          "Automated routines with n8n and APIs, with about 80% fewer ops errors on what we shipped.",
          "Turned business rules into flows the team could use day to day.",
          "Worked on React fronts and PHP backends on existing systems.",
          "Shipped internal tools to help the team move faster.",
        ],
        technologies: [
          "React",
          "Next.js",
          "PHP",
          "Laravel",
          "Node.js",
          "Express",
          "TypeScript",
          "Tailwind CSS",
          "n8n",
        ],
      },
      {
        company: "Freelance",
        role: "Fullstack developer",
        period: "06/2024 - Present",
        description: [
          "On-demand APIs and backends with Python, FastAPI, and Node.js.",
          "PostgreSQL or MongoDB depending on the job.",
          "Automation and system integration when a client needs to leave the spreadsheet behind.",
          "Docker so the environment is reproducible on any machine.",
          "From scoping to a working MVP.",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "Node.js",
          "JavaScript",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "Git",
          "GitHub",
          "GitLab",
          "CI/CD",
        ],
      },
    ],
  },

  contact: {
    title: "CONTACT.",
    subtitle: "Backend, automation, or an AI flow that needs attention? Send a message.",
    email: "Email",
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
    messagePlaceholder: "How can I help?",
    sending: "Sending...",
    sendButton: "Send",
    successTitle: "Message sent",
    successDescription: "I will reply as soon as I can.",
    errorTitle: "Could not send",
    errorDescription: "Please fill in all required fields.",
    errorGeneric: "Try again in a moment.",
    errorEndpoint: "Form endpoint is not configured yet.",
    formSubject: "Portfolio contact",
  },

  navbar: {
    items: [
      { href: "#hero", label: "Home" },
      { href: "#sobre", label: "About" },
      { href: "#projetos", label: "Projects" },
      { href: "#habilidades", label: "Skills" },
      { href: "#certificacoes", label: "Certifications" },
      { href: "#experiencia", label: "Experience" },
      { href: "#contato", label: "Contact" },
    ],
    downloadCV: "Download CV",
    cvPath: "/[EN] Resume - Iago Cunha - FullStack Developer.pdf",
  },

  footer: {
    rights: "All rights reserved.",
  },

  seo: {
    siteName: 'Iago Cunha | Portfolio',
    keywords:
      'Iago Cunha, fullstack developer, backend developer, frontend developer, desenvolvedor fullstack, Python developer, FastAPI, React, Next.js, Node.js, Temporal, Kafka, PostgreSQL, Fortaleza Brazil, software engineer portfolio',
    pages: {
      home: {
        title: "Iago Cunha | Backend and fullstack developer",
        description:
          "Portfolio of Iago Cunha: backend with FastAPI, Temporal, automations, and AI flows. Projects, cases, and contact.",
      },
      chatCaseStudy: {
        title: "Case: multi-agent assistant with Temporal and document search | Iago Cunha",
        description:
          "How an internal chat started calling the right agent, querying the right base, and failing in a controlled way.",
      },
      publicDataCaseStudy: {
        title: "Case: public news API with FastAPI | Iago Cunha",
        description:
          "G1 collection, Postgres without duplicate URLs, and live Swagger. Backend case by Iago Cunha.",
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
      title: "Internal chat with multiple agents: API, Temporal, and document search",
      subtitle:
        "An assistant where each question can go to a different agent. I worked on the API, Temporal, search, and Docker, including a bug where the wrong domain answered with generic text.",
      tags: [
        "Temporal",
        "FastAPI",
        "RAG",
        "Kafka",
        "PostgreSQL",
        "LDAP",
        "Docker",
      ],
      summaryCards: [
        {
          title: "The setup",
          paragraphs: [
            "Chat sends prompt and model to an OpenAI-style API. The API starts a Temporal workflow, which fetches context and returns the answer with streaming.",
            "There is also a queue (Kafka/DLQ) and corporate login. Not a tutorial: a system the team uses.",
          ],
        },
        {
          title: "What was wrong",
          paragraphs: [
            "For one domain, answers came back generic even when the right agent was selected on screen.",
            "The worker sometimes ran an old library version, Docker was unstable, and mixing LDAP with local shortcuts made debugging harder.",
          ],
        },
        {
          title: "What I did",
          paragraphs: [
            "Made sure `model` reached vector search, with logs along the way and a warning when the worker was stale.",
            "Adjustments on the API, workflows, document ingestion, the queue, and chat login and permissions.",
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
