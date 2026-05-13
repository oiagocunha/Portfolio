import { PortfolioContent } from "../types";

export const pt: PortfolioContent = {
  hero: {
    greeting: "Olá! Me chamo",
    headline:
      "Desenvolvedor focado em sistemas distribuídos, automação e arquitetura backend.",
    typewriter: [
      "Workflows resilientes com Temporal em produção.",
      "Arquiteturas orientadas a eventos com Kafka.",
      "APIs escaláveis em Python e Node.js.",
      "Automações que eliminam gargalos operacionais.",
    ],
    description:
      "Sou desenvolvedor fullstack, com maior atuação em backend, APIs e integração entre sistemas, com python (fastapi), node.js e arquiteturas assíncronas. Possuo, também, experiência em frontend com react e next.js, para maior controle da experiência final do produto. Além de vivencia com a criação de workflows (temporal), mensagerias/eventos (Kafka) e automações com n8n.",
    primaryCta: "Entre em contato",
    secondaryCta: "Ver case study",
    alt: "Foto de Iago Cunha, desenvolvedor backend",
    highlights: [
      "Redução de ~80% em erros operacionais com automações n8n",
      "Correção de falhas em fluxos com Temporal, Kafka e busca vetorial (RAG)",
      "Estabilização de ambiente multi-serviço para operação e testes",
      "Melhoria na observabilidade e debugabilidade de sistemas",
      "Refatoração de sistemas legados para melhor performance e manutenibilidade",
    ],
  },

  about: {
    title: "SOBRE MIM.",
    stats: [
      { value: 3, suffix: "", label: "Anos em desenvolvimento de software" },
      { value: 10, suffix: "+", label: "Automações em produção" },
      { value: 80, suffix: "%", label: "Redução de erros operacionais" },
    ],
    paragraphs: [
      "Me chamo Iago Cunha, desenvolvedor fullstack com foco em backend, automação e integração.",
      "Gosto de entender o fluxo de desenvolvimento de uma aplicação, como ela começa, de onde o dado vem, onde não pode falhar, qual serviços são necessários e como deixar manutenível para o futuro.",
      "Já atuei em sistemas em produção, migrações, correção de incidentes, refatoração de homepages e integração entre sistemas microserviços.",
    ],
  },

  specialties: {
    title: "MINHAS",
    subtitle: "ESPECIALIDADES",
    items: [
      {
        emoji: "⚙️",
        title: "Backend & APIs",
        description:
          "Serviços em Python (FastAPI) e Node.js, com contrato REST claro, validação e persistência com SQLAlchemy quando o caso pede.",
      },
      {
        emoji: "🔄",
        title: "Workflows & mensageria",
        description:
          "Orquestração com Temporal, eventos com Kafka e retry/backoff/DLQ para fluxos que não podem sumir no meio do caminho.",
      },
      {
        emoji: "🤖",
        title: "Automação & IA aplicada",
        description:
          "Fluxos com n8n, integração de APIs e plataformas como OpenWebUI/LibreChat — menos trabalho manual e menos erro operacional.",
      },
      {
        emoji: "🔗",
        title: "Integração entre sistemas",
        description:
          "Conectar APIs, webhooks e serviços internos sem transformar tudo em um monólito difícil de evoluir e de debugar.",
      },
      {
        emoji: "💾",
        title: "Dados & consultas",
        description:
          "PostgreSQL e MongoDB: modelagem, consultas que importam em produção e correção quando o dado não fecha.",
      },
      {
        emoji: "🚀",
        title: "Infra & operação",
        description:
          "Docker, GitLab CI/CD, Linux e monitoramento — ambiente reproduzível e investigação quando algo quebra fora do localhost.",
      },
    ],
  },

  technologies: {
    title: "MINHAS",
    subtitle: "TECNOLOGIAS",
    categories: [
      {
        title: "Linguagens & frameworks",
        content:
          "Python, TypeScript, JavaScript, Node.js, FastAPI, React, Next.js",
      },
      {
        title: "Sistemas distribuídos",
        content: "Temporal, Kafka, asyncio, n8n, REST APIs",
      },
      {
        title: "Dados",
        content: "PostgreSQL, MongoDB, SQLAlchemy",
      },
      {
        title: "Frontend & UI",
        content: "React, Next.js, Tailwind CSS, Radix UI, TanStack Query",
      },
      {
        title: "Infra & ferramentas",
        content: "Docker, GitLab CI/CD, Git, GitHub, GitLab, Linux",
      },
    ],
  },

  workflowShowcase: {
    title: "Visualização de Workflow",
    subtitle:
      "Exemplo do tipo de fluxo que trabalho no dia a dia: entrada de evento, orquestração, automação e recuperação de falha.",
    cardTitle: "Fluxo Temporal + Kafka + n8n",
    inPracticeLabel: "Na prática:",
    inPracticeText:
      "menos erro operacional, recuperação mais previsível e mais clareza sobre onde o fluxo quebrou.",
    cta: "Ver arquitetura detalhada",
    stages: [
      {
        id: "ingestion",
        title: "1. Ingestão de evento",
        tech: ["Kafka", "Webhook", "FastAPI"],
        goal: "Entrada idempotente com rastreabilidade de correlação entre produtor e consumidor.",
      },
      {
        id: "orchestration",
        title: "2. Orquestração de fluxos",
        tech: ["Temporal", "Retry", "Backoff"],
        goal: "Coordenar etapas assíncronas e lidar com falhas sem perder o controle do processo.",
      },
      {
        id: "automation",
        title: "3. Automação operacional",
        tech: ["n8n", "Integrações", "Notificações"],
        goal: "Menos trabalho manual com fluxos que podem ser acompanhados e corrigidos depois.",
      },
      {
        id: "recovery",
        title: "4. Recuperação e observabilidade",
        tech: ["DLQ", "Logs", "Métricas"],
        goal: "Quando algo falha, isolar o problema e facilitar reprocessamento e investigação.",
      },
    ],
  },

  projects: {
    title: "PROJETOS.",
    subtitle:
      "Alguns casos com problemas técnicos, contextos de produção e impactos mensuráveis.",
    demo: "Demo",
    code: "Código",
    caseStudy: "Case Study",
    items: [
      {
        title: "Monitor de dados públicos",
        description:
          "API em FastAPI para coletar notícias do G1, persistir no PostgreSQL com deduplicação por URL e expor endpoints REST documentados no Swagger — com demo online no Render.",
        demo: "https://public-data-monitor.onrender.com/docs",
        repo: "https://github.com/oiagocunha/public-data-monitor",
        caseStudyPath: "/case-study/public-data-monitor",
        image: "/images/public-data-monitor-swagger.png",
        alt: "Swagger do Public Data Monitor",
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
          "Coleta idempotente com índice único em URL e ON CONFLICT DO NOTHING",
          "REST em /news: POST coleta, GET lista e GET por id, com OpenAPI descrito manualmente",
          "Scraper resiliente: retry progressivo, published_at opcional e registro parcial",
          "Demo em /docs e ambiente local via Docker Compose",
        ],
      },
      {
        title: "Simulador CLT — Sistema Governamental",
        description:
          "Camada de domínio financeiro governamental exposta via API e interface reativa, com validações críticas e regras sensíveis a contexto.",
        demo: "https://simuladorclt.observatorio.ind.br/",
        image: "/images/simuladorCLT.png",
        alt: "Thumbnail do projeto Simulador CLT",
        technologies: ["React", "REST APIs", "Regras de domínio", "Validação"],
        complexity: "High",
        impact: [
          "Regra complexa traduzida em fluxo previsível para o usuário",
          "Consistência entre cenários de simulação",
          "Integração com serviços backend existentes",
        ],
      },
      {
        title: "Xuxiê - E-commerce",
        description:
          "E-commerce focado em conversão mobile, checkout simplificado e integração de pedidos via WhatsApp.",
        demo: "https://xuxie-croche.vercel.app/",
        image: "/images/xuxie-croche.png",
        alt: "Thumbnail do projeto Xuxiê E-commerce",
        technologies: ["React", "JavaScript", "Tailwind CSS", "WhatsApp API"],
        complexity: "Medium",
        impact: [
          "Fluxo de compra simplificado para mobile-first",
          "Integração ViaCEP para reduzir erros de cadastro",
          "Canal direto de venda via WhatsApp",
        ],
      },
      {
        title: "Sistema de Gestão de Notas",
        description:
          "Aplicação desktop para gestão acadêmica com persistência local e fluxo de operação simplificado.",
        repo: "https://github.com/oiagocunha/sistema_notas",
        image: "/images/sistema_notas.png",
        alt: "Thumbnail do Sistema de Gestão de Notas",
        technologies: ["Python", "Tkinter", "SQLite"],
        complexity: "Medium",
        impact: [
          "Centralizou lançamentos e consultas de notas",
          "Reduziu esforço manual em rotinas acadêmicas",
          "Interface desktop de baixo custo operacional",
        ],
      },
      {
        title: "QR Code Generator",
        description:
          "Ferramenta para geração dinâmica de QR Codes com foco em velocidade de uso e exportação direta.",
        demo: "https://link-to-qr-code.vercel.app/",
        repo: "https://github.com/oiagocunha/link-to-qrCode",
        image: "/images/QRCode.png",
        alt: "Thumbnail do QR Code Generator",
        technologies: ["React", "JavaScript", "QR Library"],
        complexity: "Low",
        impact: [
          "Acelerou geração de identificadores em rotinas internas",
          "UX enxuta para execução em segundos",
          "Redução de gargalos em processos documentais",
        ],
      },
    ],
  },

  certifications: {
    title: "CERTIFICAÇÕES",
    subtitle: "E CURSOS",
    viewCert: "Ver Certificado",
    items: [
      {
        title: "Python Completo (Mundos 1, 2 e 3)",
        issuer: "Curso em Vídeo",
        date: "2024-2026",
        credential: "3 módulos concluídos + 4º em andamento",
        link: "",
        skills: ["Python", "POO", "Estruturas de Dados", "Algoritmos"],
      },
      {
        title: "JavaScript Completo",
        issuer: "Curso em Vídeo",
        date: "2024",
        credential: "Curso completo de JavaScript",
        link: "",
        skills: ["JavaScript", "DOM", "ES6+", "Async"],
      },
      {
        title: "Lógica de Programação",
        issuer: "Curso em Vídeo",
        date: "2024",
        credential: "Fundamentos de lógica e algoritmos",
        link: "",
        skills: ["Algoritmos", "Lógica", "Estruturas de Controle"],
      },
      {
        title: "Programa Geração Tech",
        issuer: "Ger Tech",
        date: "2024",
        credential: "Formação em tecnologia",
        link: "",
        skills: ["Desenvolvimento Web", "Backend", "Frontend"],
      },
      {
        title: "Inglês Básico",
        issuer: "Cursos de Idiomas",
        date: "2023",
        credential: "Nível B1 comprovado",
        link: "https://cert.efset.org/en/je23Yi",
        skills: ["Reading", "Writing", "Listening", "Speaking"],
      },
    ],
  },

  experience: {
    title: "EXPERIÊNCIA",
    subtitle: "PROFISSIONAL",
    items: [
      {
        company: "Sistema FIEC / Observatório da Indústria",
        role: "Backend Developer | Automation & Data",
        period: "11/2025 - Atualmente",
        description: [
          " Desenvolvimento e manutenção de APIs e workflows distribuídos utilizando Python, FastAPI e Temporal, garantindo execução resiliente e integração confiável entre serviços.",
          "Implementação de fluxos orientados a eventos com Kafka, aplicando estratégias de retry, backoff e Dead Letter Queue (DLQ) para tolerância a falhas e integridade no processamento de dados.",
          "Atuação transversal na integração entre APIs, workflows Temporal e interfaces OpenWebUI/LibreChat, contribuindo para consistência operacional e evolução arquitetural da plataforma.",
          "Otimização de consultas e manutenção de dados em PostgreSQL e MongoDB, atuando na resolução de incidentes críticos e estabilidade de sistemas em produção.",
          "Participação em decisões arquiteturais envolvendo workflows distribuídos, contratos entre serviços, resiliência operacional e padronização de ambientes de desenvolvimento.",
          "Contribuição na evolução da infraestrutura operacional da plataforma, atuando em integração entre serviços, automação de setup e melhoria da experiência de desenvolvimento da equipe.",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "Node.js",
          "Temporal",
          "Kafka",
          "n8n",
          "PostgreSQL", 
          "MongoDB",
          "Supabase",
          "Docker",
          "Git",
          "GitHub",
          "GitLab",
          "CI/CD",
          "DevOps",
        ],
      },
      {
        company: "Sistema FIEC / Observatório da Indústria",
        role: "Estagiário de Desenvolvimento de Produtos",
        period: "03/2025 - 11/2025",
        description: [
          "Redução de aproximadamente 80% em erros operacionais através da entrega de automações complexas e integração de sistemas utilizando n8n e APIs REST.",
          "Desenvolvimento de aplicações integradas a serviços governamentais, transformando regras de negócio em fluxos automatizados e escaláveis.",
          "Modernização de sistemas legados utilizando PHP/Laravel, React e integração frontend/backend.",
          "Implementação de soluções internas voltadas à otimização operacional e acesso estruturado a informações institucionais.",
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
        ],
      },
      {
        company: "Empresário & Desenvolvedor Full Stack",
        role: "Desenvolvedor Autônomo",
        period: "06/2024 - Atualmente",
        description: [
          "Desenvolvimento de aplicações backend utilizando Python, FastAPI e Node.js, focando em arquiteturas escaláveis, APIs performáticas e integração entre sistemas.",
          "Modelagem e manutenção de bancos relacionais e não-relacionais utilizando PostgreSQL e MongoDB.",
          "Implementação de automações e pipelines de processamento estruturado de dados através de APIs REST e workflows automatizados.",
          "Desenvolvimento de soluções containerizadas com Docker para padronização de ambientes e melhoria operacional de clientes.",
          "Atuação no levantamento de requisitos técnicos, definição arquitetural e entrega de MVPs funcionais.",
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
          "DevOps",
        ],
      },
    ],
  },

  contact: {
    title: "VAMOS CONVERSAR.",
    subtitle:
      "Se quiser conversar sobre backend, automação ou sistemas em produção, manda uma mensagem.",
    email: "Email",
    location: "Localização",
    locationText: "Fortaleza, Ceará, Brasil",
    formTitle: "Envie uma mensagem",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu email",
    subjectPlaceholder: "Assunto",
    messagePlaceholder: "Sua mensagem...",
    sending: "Enviando...",
    sendButton: "Enviar Mensagem",
    successTitle: "Mensagem enviada!",
    successDescription: "Obrigado pelo contato. Responderei em breve!",
    errorTitle: "Falha no envio",
    errorDescription: "Preencha os campos obrigatórios.",
    formSubject: "Novo contato do portfólio",
  },

  navbar: {
    items: [
      { href: "#hero", label: "Início" },
      { href: "#sobre", label: "Sobre" },
      { href: "#projetos", label: "Projetos" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#certificacoes", label: "Certificações" },
      { href: "#experiencia", label: "Experiência" },
      { href: "#contato", label: "Contato" },
    ],
    downloadCV: "Baixar CV",
    cvPath: "/[PT] Currículo - Dev. Fullstack- Iago Cunha.pdf",
  },

  footer: {
    rights: "Todos os direitos reservados.",
  },

  caseStudies: {
    publicData: {
      label: "Case study",
      title:
        "Pipeline assíncrono de notícias públicas com deduplicação e API documentada",
      subtitle:
        "MVP de backend para coletar notícias do G1 Tecnologia, persistir com idempotência no PostgreSQL e expor contrato REST com OpenAPI — com demo publicada no Render para quem avalia o projeto sem clonar o repositório.",
      tags: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "asyncio",
        "httpx",
        "Docker",
        "Render",
      ],
      summaryCards: [
        {
          title: "Problema que o MVP resolve",
          paragraphs: [
            "Demonstrar coleta de dados públicos, persistência confiável e API consumível com documentação clara.",
            "Fontes externas são instáveis: HTML muda, campos somem e a mesma coleta pode rodar mais de uma vez.",
          ],
        },
        {
          title: "Decisões centrais",
          paragraphs: [
            "Deduplicação no banco com índice único em `url` e `ON CONFLICT DO NOTHING`.",
            "Scraper isolado por fonte, retry com espera progressiva e `published_at` opcional.",
            "REST em `/news`: POST coleta, GET lista, GET por id; DELETE opcional com API key.",
          ],
        },
        {
          title: "Resultado prático",
          paragraphs: [
            "Reexecução da coleta sem duplicar registros.",
            "Swagger com descrições manuais, não só texto gerado automaticamente.",
            "Demo online em `/docs` e ambiente local reproduzível com Docker Compose.",
          ],
        },
      ],
      imageAlt: "Documentação Swagger do Public Data Monitor",
      architectureTitle: "Arquitetura e fluxo",
      diagramTitles: {
        systemFlow: "Fluxo ponta a ponta",
        backendArchitecture: "Camadas do backend",
        sequence: "Sequência da coleta POST /news",
      },
      charts: {
        systemFlow: `
flowchart LR
  U[Usuario / Cliente HTTP] --> D[Swagger /docs]
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
    CURL[curl / navegador]
    SW[Swagger UI]
  end

  subgraph apiLayer [API]
    R[routes.py]
    SCH[Pydantic Schemas]
    DEP[deps API Key opcional]
  end

  subgraph serviceLayer [Service]
    COL[collect_news]
    LST[list_news / get_by_id]
    DEL[delete_news_by_id]
  end

  subgraph integrationLayer [Integracao]
    G1S[scrapers/g1.py]
    HTTP[httpx AsyncClient]
  end

  subgraph dataLayer [Data]
    PG[(PostgreSQL)]
    IDX[Indice unico URL]
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
  participant C as Cliente
  participant API as FastAPI
  participant SVC as collect_news
  participant SCR as scrape_g1_tech
  participant G1 as G1 HTML
  participant DB as PostgreSQL

  C->>API: POST /news
  API->>SVC: collect_news(session)
  SVC->>SCR: scrape_g1_tech(limit=20)
  SCR->>G1: GET com retry e timeout
  G1-->>SCR: HTML
  SCR-->>SVC: lista de itens normalizados
  SVC->>DB: INSERT ON CONFLICT DO NOTHING url
  DB-->>SVC: rowcount inseridos
  SVC-->>API: inserted
  API-->>C: CollectNewsResponse
`,
      },
      detailCards: [
        {
          title: "Desafios no caminho",
          items: [
            "Tratar fonte externa como caótica sem descartar notícias parcialmente válidas.",
            "Garantir idempotência quando a coleta é disparada manualmente ou repetida.",
            "Documentar comportamento real da API para quem não abre o código.",
            "Manter camadas separadas para evoluir scrapers sem reescrever rotas.",
          ],
        },
        {
          title: "Decisões que tomei",
          items: [
            "Constraint única em `url` alinhada ao insert com conflito ignorado.",
            "Schemas Pydantic com `Field(description=...)` para OpenAPI legível.",
            "Convenção REST: recurso `/news` e verbo HTTP para a ação.",
            "DELETE protegido por `NEWS_DELETE_API_KEY` + header `X-API-Key`.",
          ],
        },
        {
          title: "Tradeoffs",
          items: [
            "`create_all` no startup em vez de Alembic: mais rápido no MVP, menos maduro em produção.",
            "Coleta síncrona na requisição POST: simples, mas não escala como fila + workers.",
            "Uma fonte (G1): parsing acoplado ao HTML; mitigação é scraper isolado.",
            "API pública na demo: sem auth global; aceitável para portfólio, não para produção aberta.",
          ],
        },
        {
          title: "Evoluções futuras",
          items: [
            "Camada de auth (JWT/OAuth2) e rate limiting na borda.",
            "Fila de tarefas para desacoplar coleta longa do request HTTP.",
            "Cache em leituras frequentes de `GET /news`.",
            "CI com pytest + ruff e teste de integração com Postgres.",
          ],
        },
      ],
      roleTitle: "Onde atuei",
      roles: [
        {
          label: "API",
          text: "rotas REST, paginação, health check, OpenAPI e respostas tipadas.",
        },
        {
          label: "Serviços",
          text: "coleta, listagem, contagem, consulta por id e exclusão opcional.",
        },
        {
          label: "Scraper",
          text: "httpx async, retry, parse HTML e normalização de campos.",
        },
        {
          label: "Infra",
          text: "Docker Compose local, deploy no Render e README com tradeoffs.",
        },
      ],
      cta: {
        demo: "Abrir demo (Swagger)",
        github: "Ver código no GitHub",
        backToProjects: "Voltar aos projetos",
        contact: "Quer trocar ideia sobre um desafio parecido?",
      },
    },
    chatPlatform: {
      label: "Case study",
      title:
        "Estabilização de plataforma de chat com IA, Temporal, RAG e LDAP",
      subtitle:
        "Caso de estudo no Observatório da Indústria: o chat respondia errado para um domínio específico, o ambiente Docker estava instável e o fluxo entre serviços era difícil de investigar, para uma correção rápida e eficiente.",
      tags: [
        "Temporal",
        "Kafka",
        "Python",
        "FastAPI",
        "Supabase RPC",
        "LDAP",
        "Docker Compose",
        "MongoDB",
      ],
      summaryCards: [
        {
          title: "O que estava acontecendo",
          paragraphs: [
            "Consultas do domínio GEPLA voltavam respostas genéricas, mesmo com o modelo certo selecionado no chat.",
            "Além disso, containers ficavam unhealthy, havia conflito no compose e fricção entre login LDAP e login local.",
          ],
        },
        {
          title: "O que eu suspeitei primeiro",
          paragraphs: [
            "O campo `model` não estava chegando corretamente no fluxo workflow → activity → RAG.",
            "O worker Temporal estava rodando uma versão diferente do código que estava no repositório.",
            "A busca vetorial do GEPLA podia estar usando credencial ou RPC incorreta.",
          ],
        },
        {
          title: "O que melhorou",
          paragraphs: [
            "O roteamento por domínio/modelo passou a funcionar de forma consistente.",
            "O ambiente local ficou mais previsível para testar e corrigir problemas.",
            "Ficou mais fácil entender onde o fluxo quebrava graças a logs mais úteis.",
          ],
        },
      ],
      architectureTitle: "Arquitetura e fluxo",
      diagramTitles: {
        systemFlow: "Fluxo ponta a ponta",
        backendArchitecture: "Arquitetura backend desacoplada",
        sequence: "Pipeline assíncrono de consulta RAG",
      },
      charts: {
        systemFlow: `
flowchart LR
  U[Usuario] --> C[Chat UI]
  C --> A[API OpenAI-compatible]
  A --> W[Temporal Workflow]
  W --> T[Activities / Tasks]
  T --> R[RAG Service]
  R --> V[(Supabase Vector RPC)]
  W --> K[Kafka Events]
  K --> D[Dispatcher / Worker]
  D --> Q[DLQ]
  W --> L[Logs estruturados]
`,
        backendArchitecture: `
flowchart TB
  subgraph clientLayer [Client]
    UI[Chat + Auth LDAP]
  end

  subgraph apiLayer [API]
    API[api]
    AUTH[Sessao / Permissoes]
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

  Chat->>API: prompt + model selecionado
  API->>WF: start workflow
  WF->>ACT: execute retrieval task
  ACT->>RAG: resolve domain by model
  RAG->>VS: RPC / vector search
  VS-->>RAG: chunks por dominio
  RAG-->>ACT: contexto filtrado
  ACT-->>WF: resposta com roteamento auditavel
  WF-->>API: completion
  API-->>Chat: resposta final
`,
      },
      detailCards: [
        {
          title: "Desafios no caminho",
          items: [
            "Seguir a falha pela cadeia: chat → API → workflow → activity → busca vetorial.",
            "Manter compatibilidade com workers em versões diferentes de framework.",
            "Separar o que era bug de aplicação do que era problema de infraestrutura.",
            "Entender o comportamento do LDAP sem misturar com login local.",
          ],
        },
        {
          title: "Decisões que tomamos",
          items: [
            "Propagar `model` de forma explícita e validar isso nos logs.",
            "Usar fallback por assinatura para não quebrar workers antigos.",
            "Isolar falhas com DLQ em vez de contaminar o fluxo principal.",
            "Deixar claro o contrato entre orquestração e camada de busca vetorial.",
          ],
        },
        {
          title: "Tradeoffs",
          items: [
            "Priorizei entender e rastrear o fluxo antes de otimizar performance.",
            "Aceitei rebuild do worker para garantir que o código em execução era o correto.",
            "Mantive compatibilidade com versões antigas para reduzir risco no deploy.",
          ],
        },
        {
          title: "Próximos passos em produção",
          items: [
            "Monitorar etapas críticas do workflow (entrada, busca, resposta, erro).",
            "Alertar quando fallback ou DLQ começarem a subir.",
            "Testar contrato entre API, workflow e busca vetorial por domínio.",
            "Documentar um passo a passo para incidentes comuns.",
          ],
        },
      ],
      roleTitle: "Onde atuei",
      roles: [
        {
          label: "Chat",
          text: "integração com API compatível com OpenAI, sessão LDAP e ajustes no Docker.",
        },
        {
          label: "Workflows",
          text: "activities, passagem de model e logs para investigação.",
        },
        {
          label: "Infra",
          text: "healthchecks, startup, worker, dispatcher, Kafka e DLQ.",
        },
        {
          label: "API",
          text: "garantir endpoint e modelo corretos para quem consome o fluxo.",
        },
      ],
      cta: {
        backToProjects: "Voltar aos projetos",
        contact: "Quer trocar ideia sobre um desafio parecido?",
      },
    },
  },
};
