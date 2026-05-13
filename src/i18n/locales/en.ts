import { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  hero: {
    greeting: 'Hi! I am',
    headline:
      'Developer focused on distributed systems, automation, and backend architecture.',
    typewriter: [
      'Resilient workflows with Temporal in production.',
      'Event-driven setups with Kafka.',
      'APIs in Python and Node.js.',
      'Automations that cut operational bottlenecks.',
    ],
    description:
      'I am a fullstack developer with most of my work on backend, APIs, and system integration, using Python (FastAPI), Node.js, and async architectures. I also use React and Next.js when it helps shape the final product. I have worked with workflows (Temporal), messaging/events (Kafka), and automations with n8n.',
    primaryCta: 'Get in touch',
    secondaryCta: 'Read case study',
    alt: 'Photo of Iago Cunha, backend developer',
    highlights: [
      '~80% drop in operational errors with n8n automations',
      'Fixed failures in flows with Temporal, Kafka, and vector search (RAG)',
      'Stabilized a multi-service environment for ops and testing',
      'Better logs and easier debugging across systems',
      'Refactored legacy systems for performance and maintainability',
    ],
  },

  about: {
    title: 'ABOUT ME.',
    stats: [
      { value: 3, suffix: '', label: 'Years in software development' },
      { value: 10, suffix: '+', label: 'Automations in production' },
      { value: 80, suffix: '%', label: 'Reduction in operational errors' },
    ],
    paragraphs: [
      'I am Iago Cunha, a fullstack developer focused on backend, automation, and integration.',
      'I like understanding how an app is built end to end: where data comes from, what cannot fail, which services are needed, and how to keep it maintainable.',
      'I have worked on production systems, migrations, incident fixes, homepage refactors, and integration between microservices.',
    ],
  },

  specialties: {
    title: 'MY',
    subtitle: 'SPECIALTIES',
    items: [
      {
        emoji: '⚙️',
        title: 'Backend & APIs',
        description:
          'Services in Python (FastAPI) and Node.js, with clear REST contracts, validation, and SQLAlchemy when it makes sense.',
      },
      {
        emoji: '🔄',
        title: 'Workflows & messaging',
        description:
          'Orchestration with Temporal, events with Kafka, and retry/backoff/DLQ for flows that cannot get lost halfway through.',
      },
      {
        emoji: '🤖',
        title: 'Automation & applied AI',
        description:
          'Flows with n8n, API integrations, and platforms like OpenWebUI/LibreChat. Less manual work, fewer operational errors.',
      },
      {
        emoji: '🔗',
        title: 'Systems integration',
        description:
          'Connecting APIs, webhooks, and internal services without turning everything into a monolith that is hard to evolve and debug.',
      },
      {
        emoji: '💾',
        title: 'Data & queries',
        description:
          'PostgreSQL and MongoDB: modeling, queries that matter in production, and fixes when the data does not add up.',
      },
      {
        emoji: '🚀',
        title: 'Infra & operations',
        description:
          'Docker, GitLab CI/CD, Linux, and monitoring. Reproducible environments and debugging when something breaks outside localhost.',
      },
    ],
  },

  technologies: {
    title: 'MY',
    subtitle: 'TECHNOLOGIES',
    categories: [
      {
        title: 'Languages & frameworks',
        content:
          'Python, TypeScript, JavaScript, Node.js, FastAPI, React, Next.js',
      },
      {
        title: 'Distributed systems',
        content: 'Temporal, Kafka, asyncio, n8n, REST APIs',
      },
      {
        title: 'Data',
        content: 'PostgreSQL, MongoDB, SQLAlchemy',
      },
      {
        title: 'Frontend & UI',
        content: 'React, Next.js, Tailwind CSS, Radix UI, TanStack Query',
      },
      {
        title: 'Infra & tools',
        content: 'Docker, GitLab CI/CD, Git, GitHub, GitLab, Linux',
      },
    ],
  },

  workflowShowcase: {
    title: 'Workflow overview',
    subtitle:
      'A simplified version of the kind of flow I work with daily: event intake, orchestration, automation, and failure recovery.',
    cardTitle: 'Temporal + Kafka + n8n flow',
    inPracticeLabel: 'In practice:',
    inPracticeText:
      'fewer operational errors, more predictable recovery, and a clearer picture of where the flow broke.',
    cta: 'See detailed architecture',
    stages: [
      {
        id: 'ingestion',
        title: '1. Event intake',
        tech: ['Kafka', 'Webhook', 'FastAPI'],
        goal: 'Idempotent entry with correlation tracking between producer and consumer.',
      },
      {
        id: 'orchestration',
        title: '2. Flow orchestration',
        tech: ['Temporal', 'Retry', 'Backoff'],
        goal: 'Coordinate async steps and handle failures without losing control of the process.',
      },
      {
        id: 'automation',
        title: '3. Operational automation',
        tech: ['n8n', 'Integrations', 'Notifications'],
        goal: 'Less manual work, with flows you can monitor and fix later.',
      },
      {
        id: 'recovery',
        title: '4. Recovery and observability',
        tech: ['DLQ', 'Logs', 'Metrics'],
        goal: 'When something fails, isolate the issue and make reprocessing and investigation easier.',
      },
    ],
  },

  projects: {
    title: 'PROJECTS.',
    subtitle:
      'Some projects with real technical problems, production context, and measurable impact.',
    demo: 'Demo',
    code: 'Code',
    caseStudy: 'Case Study',
    items: [
      {
        title: 'Public Data Monitor',
        description:
          'FastAPI service that scrapes G1 news, stores them in PostgreSQL with URL deduplication, and exposes documented REST endpoints. Live Swagger demo on Render.',
        demo: 'https://public-data-monitor.onrender.com/docs',
        repo: 'https://github.com/oiagocunha/public-data-monitor',
        caseStudyPath: '/case-study/public-data-monitor',
        image: '/images/public-data-monitor-swagger.png',
        alt: 'Public Data Monitor Swagger UI',
        technologies: [
          'Python',
          'FastAPI',
          'PostgreSQL',
          'SQLAlchemy',
          'httpx',
          'Docker',
          'Render',
        ],
        complexity: 'High',
        impact: [
          'Idempotent ingestion with unique URL index and ON CONFLICT DO NOTHING',
          'REST at /news: POST collect, GET list and GET by id, with hand-written OpenAPI',
          'Resilient scraper: progressive retry, optional published_at, partial records',
          'Live /docs demo and local setup via Docker Compose',
        ],
      },
      {
        title: 'CLT Simulator (Government System)',
        description:
          'Government financial rules exposed through an API and reactive UI, with critical validations and context-sensitive logic.',
        demo: 'https://simuladorclt.observatorio.ind.br/',
        image: '/images/simuladorCLT.png',
        alt: 'CLT Simulator project thumbnail',
        technologies: ['React', 'REST APIs', 'Domain rules', 'Validation'],
        complexity: 'High',
        impact: [
          'Complex rules turned into a predictable user flow',
          'Consistent results across simulation scenarios',
          'Integration with existing backend services',
        ],
      },
      {
        title: 'Xuxiê - E-commerce',
        description:
          'E-commerce focused on mobile conversion, simplified checkout, and WhatsApp order integration.',
        demo: 'https://xuxie-croche.vercel.app/',
        image: '/images/xuxie-croche.png',
        alt: 'Xuxiê E-commerce project thumbnail',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'WhatsApp API'],
        complexity: 'Medium',
        impact: [
          'Simplified mobile-first purchase flow',
          'ViaCEP integration to reduce registration errors',
          'Direct sales channel through WhatsApp',
        ],
      },
      {
        title: 'Grade Management System',
        description:
          'Desktop application for academic management with local persistence and a simplified operation flow.',
        repo: 'https://github.com/oiagocunha/sistema_notas',
        image: '/images/sistema_notas.png',
        alt: 'Grade Management System thumbnail',
        technologies: ['Python', 'Tkinter', 'SQLite'],
        complexity: 'Medium',
        impact: [
          'Centralized grade entry and lookup',
          'Reduced manual effort in academic routines',
          'Low-cost desktop interface',
        ],
      },
      {
        title: 'QR Code Generator',
        description:
          'Tool for dynamic QR Code generation focused on speed of use and direct export.',
        demo: 'https://link-to-qr-code.vercel.app/',
        repo: 'https://github.com/oiagocunha/link-to-qrCode',
        image: '/images/QRCode.png',
        alt: 'QR Code Generator thumbnail',
        technologies: ['React', 'JavaScript', 'QR Library'],
        complexity: 'Low',
        impact: [
          'Faster identifier generation in internal routines',
          'Simple UX, done in seconds',
          'Less friction in document workflows',
        ],
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
    title: 'PROFESSIONAL',
    subtitle: 'EXPERIENCE',
    items: [
      {
        company: 'FIEC System / Industry Observatory',
        role: 'Backend Developer | Automation & Data',
        period: '11/2025 - Present',
        description: [
          'I build and maintain APIs and distributed workflows with Python, FastAPI, and Temporal, keeping execution reliable between services.',
          'I implemented event-driven flows with Kafka, using retry, backoff, and Dead Letter Queue (DLQ) for fault tolerance and data integrity.',
          'I worked across APIs, Temporal workflows, and OpenWebUI/LibreChat interfaces, helping keep the platform consistent and easier to evolve.',
          'I optimized queries and maintained data in PostgreSQL and MongoDB, including critical incident fixes in production.',
          'I took part in architecture decisions around distributed workflows, service contracts, resilience, and dev environment setup.',
          'I also helped improve platform ops: service integration, setup automation, and the team dev experience.',
        ],
        technologies: [
          'Python',
          'FastAPI',
          'Node.js',
          'Temporal',
          'Kafka',
          'n8n',
          'PostgreSQL',
          'MongoDB',
          'Supabase',
          'Docker',
          'Git',
          'GitHub',
          'GitLab',
          'CI/CD',
          'DevOps',
        ],
      },
      {
        company: 'FIEC System / Industry Observatory',
        role: 'Product Development Intern',
        period: '03/2025 - 11/2025',
        description: [
          'Cut operational errors by about 80% with complex automations and system integration using n8n and REST APIs.',
          'Built apps integrated with government services, turning business rules into automated, scalable flows.',
          'Modernized legacy systems with PHP/Laravel, React, and frontend/backend integration.',
          'Built internal tools to improve operations and give structured access to institutional information.',
        ],
        technologies: [
          'React',
          'Next.js',
          'PHP',
          'Laravel',
          'Node.js',
          'Express',
          'TypeScript',
          'Tailwind CSS',
        ],
      },
      {
        company: 'Entrepreneur & Full Stack Developer',
        role: 'Independent Developer',
        period: '06/2024 - Present',
        description: [
          'Backend apps with Python, FastAPI, and Node.js: scalable architecture, fast APIs, and system integration.',
          'Database modeling and maintenance with PostgreSQL and MongoDB.',
          'Automations and structured data pipelines through REST APIs and automated workflows.',
          'Containerized solutions with Docker to standardize environments for clients.',
          'Requirements gathering, architecture decisions, and shipping working MVPs.',
        ],
        technologies: [
          'Python',
          'FastAPI',
          'Node.js',
          'JavaScript',
          'PostgreSQL',
          'MongoDB',
          'Docker',
          'Git',
          'GitHub',
          'GitLab',
          'CI/CD',
          'DevOps',
        ],
      },
    ],
  },

  contact: {
    title: "LET'S TALK.",
    subtitle:
      'If you want to talk about backend, automation, or production systems, send me a message.',
    email: 'Email',
    location: 'Location',
    locationText: 'Fortaleza, Ceará, Brazil',
    formTitle: 'Send a message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your message...',
    sending: 'Sending...',
    sendButton: 'Send message',
    successTitle: 'Message sent!',
    successDescription: 'Thanks for reaching out. I will reply soon!',
    errorTitle: 'Sending failed',
    errorDescription: 'Please fill in the required fields.',
    formSubject: 'New contact from portfolio',
  },

  navbar: {
    items: [
      { href: '#hero', label: 'Home' },
      { href: '#sobre', label: 'About' },
      { href: '#projetos', label: 'Projects' },
      { href: '#habilidades', label: 'Skills' },
      { href: '#certificacoes', label: 'Certifications' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#contato', label: 'Contact' },
    ],
    downloadCV: 'Download CV',
    cvPath: '/[EN] Resume - Iago Cunha - FullStack Developer.pdf',
  },

  footer: {
    rights: 'All rights reserved.',
  },

  caseStudies: {
    publicData: {
      label: 'Case study',
      title:
        'Async public news pipeline with deduplication and documented API',
      subtitle:
        'Backend MVP to collect G1 Tecnologia news, store them idempotently in PostgreSQL, and expose a REST contract with OpenAPI. There is a live demo on Render if you want to try it without cloning the repo.',
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
      imageAlt: 'Public Data Monitor Swagger documentation',
      architectureTitle: 'Architecture and flow',
      diagramTitles: {
        systemFlow: 'End-to-end flow',
        backendArchitecture: 'Backend layers',
        sequence: 'POST /news collection sequence',
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
      },
      detailCards: [
        {
          title: 'Challenges',
          items: [
            'Treat external sources as messy without throwing away partially valid news.',
            'Keep collection idempotent when triggered manually or run again.',
            'Document how the API really behaves for people who will not open the code.',
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
      label: 'Case study',
      title:
        'Stabilizing an AI chat platform with Temporal, RAG, and LDAP',
      subtitle:
        'Case study at the Industry Observatory: the chat gave wrong answers for one domain, Docker was unstable, and the flow between services was hard to debug. The goal was a fast, effective fix.',
      tags: [
        'Temporal',
        'Kafka',
        'Python',
        'FastAPI',
        'Supabase RPC',
        'LDAP',
        'Docker Compose',
        'MongoDB',
      ],
      summaryCards: [
        {
          title: 'What was happening',
          paragraphs: [
            'GEPLA domain queries returned generic answers even with the correct model selected in the chat.',
            'Containers were unhealthy, there were compose conflicts, and friction between LDAP login and local login.',
          ],
        },
        {
          title: 'What I suspected first',
          paragraphs: [
            'The `model` field was not reaching the workflow → activity → RAG flow correctly.',
            'The Temporal worker was running a different version of the code than the repository.',
            'GEPLA vector search might be using the wrong credential or RPC.',
          ],
        },
        {
          title: 'What improved',
          paragraphs: [
            'Domain/model routing started working consistently.',
            'The local environment became more predictable for testing and fixing issues.',
            'It became easier to see where the flow broke thanks to more useful logs.',
          ],
        },
      ],
      architectureTitle: 'Architecture and flow',
      diagramTitles: {
        systemFlow: 'End-to-end flow',
        backendArchitecture: 'Decoupled backend architecture',
        sequence: 'Async RAG query pipeline',
      },
      charts: {
        systemFlow: `
flowchart LR
  U[User] --> C[Chat UI]
  C --> A[OpenAI-compatible API]
  A --> W[Temporal Workflow]
  W --> T[Activities / Tasks]
  T --> R[RAG Service]
  R --> V[(Supabase Vector RPC)]
  W --> K[Kafka Events]
  K --> D[Dispatcher / Worker]
  D --> Q[DLQ]
  W --> L[Structured logs]
`,
        backendArchitecture: `
flowchart TB
  subgraph clientLayer [Client]
    UI[Chat + LDAP Auth]
  end

  subgraph apiLayer [API]
    API[api]
    AUTH[Session / Permissions]
  end

  subgraph orchestrationLayer [Orchestration]
    TW[temporal-workflows]
    WK[Temporal Worker]
  end

  subgraph dataLayer [Data]
    PG[(PostgreSQL)]
    MG[(MongoDB)]
    SB[(Supabase Vector)]
  end

  subgraph messagingLayer [Messaging]
    KF[Kafka]
    DLQ[Dead Letter Queue]
  end

  UI --> API
  API --> AUTH
  API --> TW
  TW --> WK
  WK --> SB
  WK --> PG
  WK --> MG
  WK --> KF
  KF --> DLQ
`,
        sequence: `
sequenceDiagram
  participant Chat
  participant API as API
  participant WF as Temporal Workflow
  participant ACT as Activity
  participant RAG as RAG Service
  participant VS as Vector Store

  Chat->>API: prompt + selected model
  API->>WF: start workflow
  WF->>ACT: execute retrieval task
  ACT->>RAG: resolve domain by model
  RAG->>VS: RPC / vector search
  VS-->>RAG: domain chunks
  RAG-->>ACT: filtered context
  ACT-->>WF: auditable routed response
  WF-->>API: completion
  API-->>Chat: final response
`,
      },
      detailCards: [
        {
          title: 'Challenges',
          items: [
            'Follow the failure through the chain: chat → API → workflow → activity → vector search.',
            'Keep compatibility with workers on different framework versions.',
            'Tell application bugs apart from infrastructure issues.',
            'Understand LDAP without mixing it up with local login.',
          ],
        },
        {
          title: 'What we decided',
          items: [
            'Propagate `model` explicitly and validate it in logs.',
            'Use signature-based fallback to avoid breaking older workers.',
            'Isolate failures with DLQ instead of contaminating the main flow.',
            'Make the contract between orchestration and vector search explicit.',
          ],
        },
        {
          title: 'Tradeoffs',
          items: [
            'I prioritized tracing the flow before optimizing performance.',
            'I rebuilt the worker to make sure the running code matched the repo.',
            'I kept backward compatibility to lower deploy risk.',
          ],
        },
        {
          title: 'Next steps in production',
          items: [
            'Monitor critical workflow steps (input, search, response, error).',
            'Alert when fallback or DLQ usage starts climbing.',
            'Test the contract between API, workflow, and domain vector search.',
            'Write a short runbook for common incidents.',
          ],
        },
      ],
      roleTitle: 'Where I worked',
      roles: [
        {
          label: 'Chat',
          text: 'OpenAI-compatible API integration, LDAP session, and Docker adjustments.',
        },
        {
          label: 'Workflows',
          text: 'activities, model propagation, and logs for investigation.',
        },
        {
          label: 'Infra',
          text: 'healthchecks, startup, worker, dispatcher, Kafka, and DLQ.',
        },
        {
          label: 'API',
          text: 'making sure the endpoint and model are correct for whoever consumes the flow.',
        },
      ],
      cta: {
        backToProjects: 'Back to projects',
        contact: 'Want to talk about something similar?',
      },
    },
  },
};
