import { PortfolioContent } from "../types";

export const pt: PortfolioContent = {
  a11y: {
    skipToContent: "Pular para o conteúdo",
    toggleMenu: "Abrir ou fechar menu",
    changeLanguage: "Alterar idioma",
    toggleTheme: "Alternar tema claro ou escuro",
    scrollTop: "Voltar ao topo",
    openMedia: "Reproduzir demonstração",
    showDiagramSource: "Ver código Mermaid",
    hideDiagramSource: "Ocultar código",
    diagramError: "Não foi possível renderizar o diagrama.",
  },

  notFound: {
    title: "Página não encontrada",
    description: "Esse endereço não existe neste portfólio.",
    backHome: "Voltar para o início",
  },

  brand: {
    name: "IC Desenvolvimento",
    byline: "por Iago Cunha",
  },

  hero: {
    greeting: "IC Desenvolvimento",
    headline: "Sites, automações e sistemas sob medida.",
    typewriter: [],
    description:
      "Desenvolvimento web, automação de rotinas, integração entre ferramentas e a primeira versão de sistemas internos — sob a marca IC Desenvolvimento, por Iago Cunha.",
    primaryCta: "Falar pelo WhatsApp",
    secondaryCta: "Ver projetos",
    alt: "Foto de Iago Cunha",
    role: "por Iago Cunha",
    highlights: [],
  },

  applications: {
    title: "Onde isso se aplica",
    subtitle: "Exemplos concretos de uso. Os entregáveis estão na seção de serviços.",
    items: [
      {
        title: "Catálogo com pedido online",
        description:
          "Apresentar produtos com categorias e um fluxo de encomenda, sem depender só de conversa no WhatsApp.",
      },
      {
        title: "Relatório que hoje é manual",
        description:
          "Coletar dados de planilhas ou APIs, gerar o relatório e avisar o time quando estiver pronto.",
      },
      {
        title: "Troca de dados entre ferramentas",
        description:
          "Evitar copiar e colar entre CRM, planilha e e-mail: a informação passa de um sistema para o outro.",
      },
      {
        title: "Controle no lugar da planilha",
        description:
          "Registrar pedidos, status ou estoque em uma ferramenta simples, feita para a operação do negócio.",
      },
    ],
  },

  services: {
    title: "Serviços",
    subtitle: "Três formatos de entrega, com escopo definido na proposta.",
    whenLabel: "O que entra na entrega",
    items: [
      {
        title: "Site para receber contatos",
        description:
          "Site ou aplicação enxuta para apresentar o negócio, receber contatos ou mostrar produtos.",
        when: "",
        examples: [
          "Páginas e conteúdo definidos no escopo",
          "Contato por formulário ou WhatsApp",
          "Publicação e orientação de uso",
        ],
      },
      {
        title: "Automação de uma rotina",
        description:
          "Automatizar uma rotina repetitiva e conectar as ferramentas envolvidas no fluxo.",
        when: "",
        examples: [
          "Mapeamento da rotina e das integrações",
          "Fluxo com tratamento de falhas",
          "Documentação de operação",
        ],
      },
      {
        title: "Primeira versão de um sistema",
        description:
          "Ferramenta interna para o fluxo principal da operação, quando o mercado não cobre o caso.",
        when: "",
        examples: [
          "Fluxo principal com escopo definido",
          "Interface e dados necessários à operação",
          "Critérios de aceite na proposta",
        ],
      },
    ],
  },

  process: {
    title: "Como trabalho",
    subtitle: "Do alinhamento à entrega.",
    steps: [
      {
        title: "Conversa inicial",
        description: "Contexto do negócio e o problema a resolver.",
      },
      {
        title: "Escopo",
        description: "O que entra na entrega, prazo estimado e investimento.",
      },
      {
        title: "Desenvolvimento",
        description: "Construção com acompanhamento do que está sendo feito.",
      },
      {
        title: "Entrega",
        description: "Publicação, orientação de uso e ajustes combinados.",
      },
    ],
  },

  about: {
    title: "SOBRE.",
    subtitle: "IC Desenvolvimento · Iago Cunha",
    paragraphs: [
      "A IC Desenvolvimento é a marca sob a qual atendo projetos para negócios: sites, automações, integrações e sistemas.",
      "Trabalho no Sistema FIEC / Observatório da Indústria com backend, automação e soluções com IA. Em paralelo, desenvolvo projetos como autônomo desde junho de 2024.",
    ],
  },

  specialties: {
    title: "ATUAÇÃO",
    subtitle: "TÉCNICA",
    items: [
      {
        emoji: "",
        title: "Agentes e orquestração",
        description:
          "Do prompt no chat até o workflow: qual agente responde, o que ele consulta e como a resposta volta em streaming.",
      },
      {
        emoji: "",
        title: "APIs e backend",
        description:
          "FastAPI, contratos REST, streaming SSE e integração com provedores de modelo.",
      },
      {
        emoji: "",
        title: "Busca em documentos",
        description:
          "Ingestão, embeddings e consulta por contexto — inclusive misturando busca semântica com SQL quando ajuda.",
      },
      {
        emoji: "",
        title: "Filas e falhas",
        description:
          "Kafka, retry, backoff e DLQ para o erro não sumir no meio do fluxo.",
      },
      {
        emoji: "",
        title: "Acesso corporativo",
        description:
          "Autenticação com Google Workspace/AD e controle de acesso por grupo.",
      },
      {
        emoji: "",
        title: "Ambiente e deploy",
        description:
          "Docker, Kubernetes e setup que outro desenvolvedor consegue repetir.",
      },
    ],
  },

  technologies: {
    title: "STACK",
    subtitle: "TÉCNICA",
    categories: [
      {
        title: "Backend",
        content: "Python, FastAPI, Node.js, TypeScript, SQLAlchemy, Pytest",
      },
      {
        title: "IA e automação",
        content: "LLMs, agentes, RAG, embeddings, pgvector, n8n",
      },
      {
        title: "Orquestração e dados",
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
    title: "Como um fluxo costuma andar",
    subtitle:
      "A requisição chega no gateway, entra no Temporal, busca o contexto certo e trata falha de forma controlada.",
    cardTitle: "Chat → API → Temporal → busca",
    inPracticeLabel: "Na prática:",
    inPracticeText:
      "o agente certo responde com a base certa. Se falhar, ficam log e fila para reprocessar.",
    cta: "Abrir o case completo",
    diagramTitle: "Esquema da etapa",
    stages: [
      {
        id: "ingestion",
        title: "1. Entrada",
        tech: ["Kafka", "Webhook", "FastAPI"],
        goal: "Receber o evento sem duplicar e registrar a origem.",
        diagram: `flowchart LR
  P[Produtor] --> K[Kafka / Webhook]
  K --> API[FastAPI]
  API --> C[Correlacao ID]
  API --> ACK[Ack idempotente]`,
      },
      {
        id: "orchestration",
        title: "2. Orquestração",
        tech: ["Temporal", "Retry", "Backoff"],
        goal: "Encadear etapas e tentar de novo quando uma activity falha.",
        diagram: `flowchart LR
  E[Evento] --> W[Temporal Workflow]
  W --> A1[Activity]
  A1 -->|ok| N[Proxima etapa]
  A1 -->|falha| R[Retry / Backoff]
  R --> A1`,
      },
      {
        id: "automation",
        title: "3. Automação",
        tech: ["n8n", "Integrações", "Notificações"],
        goal: "Reduzir trabalho repetitivo e manter o fluxo visível para o time.",
        diagram: `flowchart LR
  T[Trigger] --> N8[n8n]
  N8 --> I[Integracoes]
  N8 --> NT[Notificacoes]
  N8 --> L[Log de execucao]`,
      },
      {
        id: "recovery",
        title: "4. Quando falha",
        tech: ["DLQ", "Logs", "Métricas"],
        goal: "Isolar a falha, investigar e reprocessar sem afetar o restante.",
        diagram: `flowchart LR
  F[Falha] --> DLQ[Dead Letter Queue]
  DLQ --> LOG[Logs estruturados]
  LOG --> FIX[Investigacao]
  FIX --> REP[Reprocessamento]`,
      },
    ],
  },

  projects: {
    title: "PROJETOS.",
    subtitle: "Entregas recentes e o que cada uma resolveu.",
    demo: "Demo",
    docs: "API",
    code: "Código",
    caseStudy: "Case study",
    complexityLabel: "Complexidade",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    deliveryLabel: "O que foi entregue",
    techLabel: "Tecnologias",
    featuredLabel: "Para o seu negócio",
    earlyWorkLabel: "Projetos técnicos",
    earlyWorkSubtitle:
      "Sistemas e protótipos em que dá para ver decisões de backend, IA e integração.",
    similarWhatsappCta: "Quer algo parecido? Falar pelo WhatsApp",
    statusLabels: {
      internal: "Projeto interno",
      unavailable: "Demo fora do ar",
      archived: "Arquivado",
    },
    complexity: {
      Low: "Baixa",
      Medium: "Média",
      High: "Alta",
      "Very High": "Muito alta",
    },
    featured: [
      {
        title: "FV Crochê",
        description:
          "Aplicação web com catálogo, categorias e carrinho para apresentar produtos e facilitar encomendas.",
        problem:
          "O negócio precisava mostrar produtos com clareza e receber encomendas sem depender só de conversa solta.",
        solution:
          "Catálogo organizado, categorias e carrinho pensado para o fluxo de encomenda.",
        demo: "https://fv-croche.vercel.app/",
        image: "/images/fv-croche.png",
        alt: "Landing do FV Crochê",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        complexity: "Medium",
        impact: [
          "Catálogo online com categorias",
          "Carrinho para encomenda",
          "Página inicial direta para os produtos",
        ],
        iconKey: "croche",
        status: "live",
      },
    ],
    earlyWork: [
      {
        title: "Assistente corporativo com agentes",
        description:
          "Chat interno com gateway compatível com a API OpenAI, agentes via Temporal e busca em documentos por contexto.",
        problem:
          "O time precisava de um assistente interno estável, com a resposta no contexto certo — e sem falhar em silêncio.",
        solution:
          "Participei do gateway, da orquestração no Temporal, dos pipelines de RAG e da estabilização do ambiente usado pelo time.",
        caseStudyPath: "/case-study/chat-platform",
        image: "/images/assistente-corporativo.jpg",
        alt: "Tela do assistente corporativo",
        technologies: ["Temporal", "FastAPI", "RAG", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
        complexity: "Very High",
        impact: [
          "Gateway OpenAI-compatible com streaming SSE",
          "Roteamento por contexto com bases RAG próprias",
          "Retry, backoff e DLQ nos workflows",
        ],
        iconKey: "chatPlatform",
        status: "internal",
      },
      {
        title: "Job Match Alerts",
        description:
          "Comparação de currículos e vagas com LLMs: upload de PDF, importação por URL e ranking explicável de compatibilidade.",
        problem:
          "Avaliar o alinhamento entre currículo e vaga sem revisar tudo manualmente.",
        solution:
          "Aplicação com extração assistida por LLM, score explicável, testes com Pytest e CI no GitHub Actions.",
        demo: "https://job-match-alerts.vercel.app/",
        repo: "https://github.com/oiagocunha/job-match-alerts",
        image: "/images/job-match-alerts-swagger.png",
        alt: "Job Match Alerts",
        technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "OpenAI", "Docker"],
        complexity: "High",
        impact: [
          "Upload de currículo em PDF",
          "Importação de vaga por URL",
          "Ranking explicável de compatibilidade",
        ],
        iconKey: "jobMatch",
        status: "live",
      },
      {
        title: "Monitor de dados públicos",
        description:
          "Pipeline assíncrono de notícias públicas com API paginada, deduplicação e persistência idempotente.",
        problem:
          "Coletar dados de fonte externa de forma confiável, sem duplicar registros e com a API documentada.",
        solution:
          "Coleta com retry e backoff, índice único por URL, OpenAPI e ambiente local com Docker Compose.",
        demo: "https://public-data-monitor.onrender.com/docs",
        repo: "https://github.com/oiagocunha/public-data-monitor",
        caseStudyPath: "/case-study/public-data-monitor",
        image: "/images/public-data-monitor-swagger.png",
        alt: "Monitor de dados públicos",
        technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "asyncio", "Docker"],
        complexity: "High",
        impact: [
          "Coleta sem duplicar por URL",
          "API documentada no Swagger",
          "Ambiente reproduzível com Docker Compose",
        ],
        iconKey: "publicData",
        status: "live",
      },
    ],
  },

  certifications: {
    title: "FORMAÇÃO",
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
        title: "Inglês",
        issuer: "Autodeclaração",
        date: "2025",
        credential: "Nível B2",
        link: "",
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
        role: "Desenvolvedor Backend & IA",
        period: "03/2025 - Atualmente",
        description: [
          "Desenvolvi gateway compatível com a API OpenAI, conectando LibreChat a agentes corporativos via Temporal, com respostas em streaming SSE.",
          "Implementei o roteamento entre quatro habilidades especializadas e dois modelos gerais, cada um com base RAG própria conforme o contexto.",
          "Construí pipelines de ingestão documental e busca semântica com Google Drive, embeddings, PostgreSQL e pgvector.",
          "Automatizei processos com n8n e APIs, reduzindo etapas manuais e erros operacionais.",
          "Implementei retry, backoff e DLQ em workflows assíncronos, além de autenticação corporativa (Google Workspace/AD) com acesso por grupos.",
          "Participei da sustentação em três ambientes Kubernetes e da telemetria do piloto (47 usuários cadastrados, 31 com uso, cerca de 1,4 milhão de tokens).",
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
        company: "Autônomo · IC Desenvolvimento",
        role: "Desenvolvedor Full Stack",
        period: "06/2024 - Atualmente",
        description: [
          "Desenvolvo MVPs, automações e integrações com APIs, da definição técnica ao frontend, backend e bancos relacionais e não relacionais.",
          "Sites, sistemas enxutos e rotinas automatizadas conforme a necessidade de cada projeto.",
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
    title: "CONTATO.",
    subtitle: "WhatsApp, e-mail ou formulário.",
    reassurance:
      "Descreva o contexto do projeto e o que precisa. Se ainda não tiver o escopo fechado, a conversa inicial serve para isso.",
    email: "Email",
    whatsapp: "WhatsApp",
    whatsappNumber: "5585989035010",
    whatsappDisplay: "+55 85 98903-5010",
    whatsappMessage:
      "Olá, Iago! Vi o site da IC Desenvolvimento e queria conversar sobre um projeto.",
    whatsappCta: "Falar pelo WhatsApp",
    location: "Localização",
    locationText: "Fortaleza, Ceará",
    formTitle: "Enviar mensagem",
    nameLabel: "Nome",
    emailLabel: "Email",
    subjectLabel: "Assunto",
    messageLabel: "Mensagem",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "seu@email.com",
    subjectPlaceholder: "Assunto (opcional)",
    messagePlaceholder: "Contexto do projeto e o que precisa.",
    sending: "Enviando...",
    sendButton: "Enviar mensagem",
    successTitle: "Mensagem enviada",
    successDescription: "Respondo assim que possível.",
    errorTitle: "Não foi possível enviar",
    errorDescription: "Preencha todos os campos obrigatórios.",
    errorGeneric: "Tente novamente em instantes.",
    errorEndpoint: "Formulário ainda sem endpoint configurado.",
    formSubject: "Contato — IC Desenvolvimento",
  },

  navbar: {
    items: [
      { href: "#hero", label: "Início" },
      { href: "#servicos", label: "Serviços" },
      { href: "#projetos", label: "Projetos" },
      { href: "#como-trabalho", label: "Como trabalho" },
      { href: "#sobre", label: "Sobre" },
      { href: "#contato", label: "Contato" },
    ],
  },

  footer: {
    rights: "Todos os direitos reservados.",
    tagline: "Sites, automações e sistemas sob medida.",
  },

  whatsappFloat: {
    label: "WhatsApp",
  },

  seo: {
    siteName: "IC Desenvolvimento | Iago Cunha",
    keywords:
      "IC Desenvolvimento, Iago Cunha, desenvolvimento de sites, automação de processos, integração de sistemas, desenvolvimento sob medida, automação n8n, MVP, sistemas internos, IA aplicada, FastAPI, React, Fortaleza, Ceará",
    pages: {
      home: {
        title: "IC Desenvolvimento | Sites, Automação e Sistemas",
        description:
          "Sites, automações, integrações e sistemas sob medida. IC Desenvolvimento, por Iago Cunha — Fortaleza/CE.",
      },
      chatCaseStudy: {
        title: "Case: assistente corporativo com agentes, Temporal e RAG | Iago Cunha",
        description:
          "Gateway compatível com OpenAI, orquestração no Temporal, busca em documentos por contexto e tratamento de falhas com retry e DLQ.",
      },
      publicDataCaseStudy: {
        title: "Case: API de notícias públicas com FastAPI | Iago Cunha",
        description:
          "Coleta assíncrona, deduplicação por URL no PostgreSQL e API documentada no Swagger.",
      },
    },
  },

  caseStudies: {
    publicData: {
      label: "Case study",
      title: "API de notícias públicas: coleta, Postgres e Swagger",
      subtitle:
        "MVP que coleta notícias do G1, grava sem duplicar URL e deixa a API documentada no ar. Quem avalia não precisa clonar o repositório.",
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
      image: "/images/public-data-monitor-swagger.png",
      imageAlt: "Documentação Swagger do Public Data Monitor",
      demoUrl: "https://public-data-monitor.onrender.com/docs",
      githubUrl: "https://github.com/oiagocunha/public-data-monitor",
      architectureTitle: "Arquitetura e fluxo",
      diagramTitles: {
        systemFlow: "Fluxo ponta a ponta",
        backendArchitecture: "Camadas do backend",
        sequence: "Sequência da coleta POST /news",
        failureTree: "Idempotência na coleta",
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
        failureTree: `
flowchart LR
  POST[POST /news] --> SCR[Scrape G1]
  SCR --> INS[INSERT news]
  INS --> UC{URL unica?}
  UC -->|nova| OK[Persistida]
  UC -->|conflito| SKIP[ON CONFLICT DO NOTHING]
`,
      },
      detailCards: [
        {
          title: "Desafios no caminho",
          items: [
            "Tratar fonte externa como instável sem descartar notícias parcialmente válidas.",
            "Garantir idempotência quando a coleta é disparada manualmente ou repetida.",
            "Documentar o comportamento da API para quem não abre o código.",
            "Manter camadas separadas para evoluir scrapers sem reescrever rotas.",
          ],
        },
        {
          title: "Decisões que tomei",
          items: [
            "Constraint única em `url` alinhada ao insert com conflito ignorado.",
            "Schemas Pydantic com `Field(description=...)` para OpenAPI legível.",
            "Convenção REST: recurso `/news` e verbo HTTP para a ação.",
            "DELETE protegido por `NEWS_DELETE_API_KEY` e header `X-API-Key`.",
          ],
        },
        {
          title: "Tradeoffs",
          items: [
            "`create_all` no startup em vez de Alembic: mais rápido no MVP, menos maduro em produção.",
            "Coleta síncrona na requisição POST: simples, mas não escala como fila com workers.",
            "Uma fonte (G1): parsing acoplado ao HTML; a mitigação é scraper isolado.",
            "API pública na demo: sem autenticação global; aceitável para portfólio, não para produção aberta.",
          ],
        },
        {
          title: "Próximos passos",
          items: [
            "Camada de autenticação (JWT/OAuth2) e rate limiting na borda.",
            "Fila de tarefas para desacoplar coleta longa do request HTTP.",
            "Cache em leituras frequentes de `GET /news`.",
            "CI com pytest e ruff, além de teste de integração com Postgres.",
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
        contact: "Quer conversar sobre um desafio parecido?",
      },
    },
    chatPlatform: {
      label: "Case study",
      title: "Assistente corporativo: gateway, Temporal e busca em documentos",
      subtitle:
        "Chat interno em que cada pergunta pode ir para um agente diferente. Atuei no gateway compatível com OpenAI, na orquestração Temporal, nos pipelines de RAG e na estabilização do ambiente — inclusive num bug em que o domínio errado respondia de forma genérica.",
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
          title: "O cenário",
          paragraphs: [
            "O chat envia prompt e modelo para um gateway no estilo OpenAI. O gateway dispara um workflow no Temporal, que busca o contexto certo e devolve a resposta em streaming SSE.",
            "O fluxo inclui fila (Kafka/DLQ), autenticação corporativa e bases de documentos por contexto. É sistema usado pelo time, não um protótipo isolado.",
          ],
        },
        {
          title: "O que estava errado",
          paragraphs: [
            "Em um domínio, a resposta vinha genérica mesmo com o agente certo escolhido na tela.",
            "O worker às vezes rodava versão antiga da lib, o ambiente Docker oscilava e misturar autenticação corporativa com atalho local atrapalhava o debug.",
          ],
        },
        {
          title: "O que eu fiz",
          paragraphs: [
            "Garantir que o `model` chegasse até a busca vetorial, com log no caminho e alerta quando o worker estava desatualizado.",
            "Ajustes no gateway, nos workflows, na ingestão de documentos, na fila e no controle de acesso do chat.",
          ],
        },
      ],
      image: "/images/assistente-corporativo.jpg",
      imageAlt: "Tela do assistente corporativo",
      architectureTitle: "Como as peças se ligam",
      diagramTitles: {
        systemFlow: "Do chat até a resposta",
        backendArchitecture: "Camadas (chat, API, Temporal, dados)",
        sequence: "Ordem das chamadas na busca",
        failureTree: "Hipótese → evidência → correção",
      },
      charts: {
        systemFlow: `
flowchart LR
  U[Usuario] --> C[Chat]
  C --> A[API estilo OpenAI]
  A --> W[Temporal]
  W --> T[Activities]
  T --> R[Busca / Agente]
  R --> V[(Vector store)]
  T --> S[(SQL opcional)]
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
    RT[Escolhe agente pelo model]
  end

  subgraph orchestrationLayer [Temporal]
    TW[Workflows]
    WK[Worker]
  end

  subgraph intelligenceLayer [Inteligencia]
    RAG[Busca por dominio]
    HYB[Busca + SQL]
    LLM[Provedores]
  end

  subgraph dataLayer [Dados]
    PG[(Postgres / pgvector)]
    MG[(MongoDB)]
  end

  subgraph messagingLayer [Fila]
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
  participant RAG as Busca
  participant VS as Vector store

  Chat->>GW: prompt + model
  GW->>WF: start workflow
  WF->>ACT: tarefa de retrieval
  ACT->>RAG: resolve dominio pelo model
  RAG->>VS: busca
  VS-->>RAG: chunks
  RAG-->>ACT: contexto
  ACT-->>WF: resposta
  WF-->>GW: completion / stream
  GW-->>Chat: resposta
`,
        failureTree: `
flowchart TB
  S[Resposta generica no dominio errado] --> H1[model nao chega]
  S --> H2[worker com lib velha]
  S --> H3[busca na funcao errada]
  H1 --> E1[log sem model]
  H2 --> E2[versao diferente do repo]
  H3 --> E3[RPC / funcao por dominio]
  E1 --> FIX1[propagar e validar model]
  E2 --> FIX2[rebuild do worker]
  E3 --> FIX3[ajustar contrato da busca]
  FIX1 --> OK[roteamento ok]
  FIX2 --> OK
  FIX3 --> OK
`,
      },
      detailCards: [
        {
          title: "Pontos difíceis",
          items: [
            "Seguir o bug do chat até a vector store sem adivinhar.",
            "Worker com pacote antigo enquanto o repositório já tinha a correção.",
            "Separar bug de código de problema de Docker.",
            "LDAP no caminho sem atrapalhar o teste local.",
          ],
        },
        {
          title: "O que decidimos",
          items: [
            "Passar o `model` de forma explícita e registrar log em cada etapa.",
            "Detectar lib antiga no worker e pedir rebuild em vez de falhar em silêncio.",
            "Enviar falha irrecuperável para DLQ.",
            "Deixar claro o contrato entre Temporal e a busca por domínio.",
          ],
        },
        {
          title: "Tradeoffs",
          items: [
            "Primeiro entender o fluxo; otimizar latência veio depois.",
            "Rebuild do worker era custoso, mas eliminou o drift de versão.",
            "Mantive fallback para não derrubar a produção de uma vez.",
          ],
        },
        {
          title: "Resultado",
          items: [
            "Agente certo na base certa, de forma estável.",
            "Telemetria do piloto: 47 usuários cadastrados e 31 com uso. Os números descrevem o piloto, não a base ativa atual.",
            "Ambiente mais previsível para depurar.",
            "Próximo passo: métrica e alerta em DLQ e fallback de provedor.",
            "Testes de contrato entre API, workflow e busca.",
          ],
        },
      ],
      roleTitle: "Minha parte",
      roles: [
        {
          label: "API",
          text: "contrato estilo OpenAI, escolha de agente, streaming e healthcheck.",
        },
        {
          label: "Temporal / busca",
          text: "workflows, ingestão, domínio certo e agente busca+SQL.",
        },
        {
          label: "Chat",
          text: "integração com o cliente, LDAP e permissão por grupo.",
        },
        {
          label: "Infra",
          text: "Docker, Kafka/DLQ e smoke test do caminho completo.",
        },
      ],
      cta: {
        backToProjects: "Voltar aos projetos",
        contact: "Quer conversar sobre um fluxo parecido?",
      },
    },
  },
};
