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

  hero: {
    greeting: "Olá, eu sou",
    headline: "Backend com foco em APIs, automações e orquestração de fluxos com IA.",
    typewriter: [
      "Orquestro agentes de ponta a ponta, do chat ao Temporal.",
      "APIs no contrato OpenAI pensadas para uso contínuo em produção.",
      "Quando a busca vetorial consulta a base errada, eu encontro onde o fluxo falhou.",
      "Menos trabalho manual: n8n, Kafka e retries que aguentam o dia a dia.",
    ],
    description:
      "Atuo principalmente em backend com Python (FastAPI), Temporal e integrações. Também trabalho com React quando o produto precisa de interface. Busco sistemas que aguentam uso: falha tratada, retry previsível e log legível.",
    primaryCta: "Falar comigo",
    secondaryCta: "Ver um case",
    alt: "Foto de Iago Cunha",
    role: "Desenvolvedor backend e fullstack",
    highlights: [
      "API que recebe o chat e dispara o agente certo no Temporal",
      "Cada domínio consulta a base certa, sem resposta genérica no lugar errado",
      "Em falha: retry, fila morta e ambiente Docker que a equipe consegue subir",
      "Login corporativo (LDAP) e permissão por grupo no chat",
    ],
  },

  about: {
    title: "SOBRE MIM.",
    stats: [
      { value: 3, suffix: "", label: "Anos escrevendo software" },
      { value: 10, suffix: "+", label: "Automações em produção" },
      { value: 80, suffix: "%", label: "Menos erro operacional (n8n)" },
    ],
    paragraphs: [
      "Sou o Iago. Trabalho com backend: API, fila, banco e o caminho do dado até a resposta.",
      "Hoje passo boa parte do tempo em fluxos com IA: chat, Temporal, busca em documentos e o que acontece quando isso falha em produção.",
      "Antes, automatizei processos com n8n, integrei sistemas e mantive código legado. Prefiro texto claro e código que outro desenvolvedor consiga manter.",
    ],
  },

  specialties: {
    title: "MINHAS",
    subtitle: "ESPECIALIDADES",
    items: [
      {
        emoji: "",
        title: "Fluxos com agentes",
        description:
          "Do prompt no chat até o Temporal: qual agente executa, o que ele consulta e como a resposta retorna.",
      },
      {
        emoji: "",
        title: "APIs e backend",
        description:
          "FastAPI, contratos REST, streaming e integração com vários provedores de modelo.",
      },
      {
        emoji: "",
        title: "Busca em documentos",
        description:
          "Ingestão, embeddings e consulta por domínio, inclusive misturando busca semântica com SQL quando faz sentido.",
      },
      {
        emoji: "",
        title: "Filas e falha",
        description:
          "Kafka, retry e DLQ para que o erro não desapareça no meio do fluxo.",
      },
      {
        emoji: "",
        title: "Acesso corporativo",
        description:
          "LDAP/AD, controle de quem usa cada modelo e sessão com tempo de vida definido.",
      },
      {
        emoji: "",
        title: "Ambiente e deploy",
        description:
          "Docker, healthcheck e setup que outro desenvolvedor consegue repetir.",
      },
    ],
  },

  technologies: {
    title: "MINHAS",
    subtitle: "TECNOLOGIAS",
    categories: [
      {
        title: "Linguagens e frameworks",
        content: "Python, TypeScript, JavaScript, Node.js, FastAPI, React, Next.js",
      },
      {
        title: "IA e workflows",
        content: "Temporal, RAG, pgvector, APIs no estilo OpenAI, n8n",
      },
      {
        title: "Dados e mensageria",
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
    title: "Como um fluxo costuma andar",
    subtitle:
      "Resumo do dia a dia: a requisição chega no gateway, entra no Temporal, busca contexto e trata erro de forma controlada.",
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
    subtitle: "O que construí ou ajudei a estabilizar, com o problema e o resultado.",
    demo: "Demo",
    docs: "API",
    code: "Código",
    caseStudy: "Case study",
    complexityLabel: "Complexidade",
    featuredLabel: "Principais",
    earlyWorkLabel: "Projetos menores",
    earlyWorkSubtitle:
      "Trabalhos mais antigos ou simples. Mostram o caminho, sem competir com os cases principais.",
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
        title: "Assistente corporativo com agentes",
        description:
          "Atuei na API, nos workflows Temporal, na busca por documentos e no ambiente Docker de um chat interno com vários agentes.",
        caseStudyPath: "/case-study/chat-platform",
        image: "/images/assistente-corporativo.jpg",
        alt: "Tela do assistente corporativo com campo de mensagem e modelos avançados",
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
          "Corrigimos respostas no domínio errado: o model passou a chegar até a busca",
          "API no estilo OpenAI, com streaming e healthcheck de ponta a ponta",
          "Ingestão de documentos, agente que combina busca e SQL, e DLQ para falha",
          "Login LDAP e permissão por grupo no chat",
        ],
        iconKey: "chatPlatform",
        status: "internal",
      },
      {
        title: "Monitor de dados públicos",
        description:
          "API que coleta notícias do G1, grava no Postgres sem duplicar URL e expõe tudo no Swagger. Demo disponível no Render.",
        demo: "https://public-data-monitor.onrender.com/docs",
        repo: "https://github.com/oiagocunha/public-data-monitor",
        caseStudyPath: "/case-study/public-data-monitor",
        image: "/images/public-data-monitor-swagger.png",
        media: "/images/public-data-monitor-swagger.png",
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
          "Coleta que pode rodar de novo sem gerar notícia duplicada",
          "Endpoints claros em /news, documentados no OpenAPI",
          "Scraper com retry quando o HTML do G1 falha",
          "Ambiente local com Docker Compose",
        ],
        iconKey: "publicData",
        status: "live",
      },
      {
        title: "Job Match Alerts",
        description:
          "Envio de currículo em PDF, importação de vaga por link e score ATS com o que bateu e o que faltou.",
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
          "Vários currículos salvos a partir de PDF",
          "Score imediato, com skills matched e missing",
          "Ranking de vagas com filtro de senioridade e remoto",
          "API documentada e score previsível",
        ],
        iconKey: "jobMatch",
        status: "live",
      },
    ],
    earlyWork: [
      {
        title: "FV Crochê",
        description:
          "Loja de crochê em React: catálogo, categorias e carrinho para encomenda.",
        demo: "https://fv-croche.vercel.app/",
        image: "/images/fv-croche.png",
        alt: "Landing do FV Crochê",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        complexity: "Medium",
        impact: [
          "Home direta para o catálogo",
          "Carrinho pensado em encomenda",
          "Rebrand do projeto antigo",
        ],
        iconKey: "croche",
        status: "live",
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
        role: "Desenvolvedor backend",
        period: "11/2025 - Atualmente",
        description: [
          "Atuo na API do chat (estilo OpenAI), nos workflows Temporal e na integração com o front do assistente.",
          "Ajustei o caminho do `model` até a busca em documentos para o agente consultar a base certa.",
          "Também trabalho com Kafka/DLQ, healthcheck e o Docker usado pelo time no dia a dia.",
          "Login LDAP, permissão por grupo e sessão no chat.",
          "Participo de discussões de arquitetura quando o tema é separação de serviço, falha e ambiente de desenvolvimento.",
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
        company: "Sistema FIEC / Observatório da Indústria",
        role: "Estagiário de desenvolvimento",
        period: "03/2025 - 11/2025",
        description: [
          "Automatizei rotinas com n8n e APIs, com cerca de 80% menos erro operacional no que entregamos.",
          "Traduzi regras de negócio em fluxos que o time consegue usar no dia a dia.",
          "Atuei em front React e backend PHP em sistemas já existentes.",
          "Entreguei ferramentas internas para acelerar o trabalho da equipe.",
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
        company: "Autônomo",
        role: "Desenvolvedor fullstack",
        period: "06/2024 - Atualmente",
        description: [
          "APIs e backends sob demanda com Python, FastAPI e Node.js.",
          "PostgreSQL e MongoDB conforme o caso.",
          "Automação e integração entre sistemas quando o cliente precisa sair da planilha.",
          "Docker para o ambiente ser reproduzível em qualquer máquina.",
          "Do alinhamento de escopo até um MVP em funcionamento.",
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
    title: "CONTATO.",
    subtitle: "Backend, automação ou um fluxo com IA que precisa de atenção? Envie uma mensagem.",
    email: "Email",
    location: "Localização",
    locationText: "Fortaleza, Ceará",
    formTitle: "Envie uma mensagem",
    nameLabel: "Nome",
    emailLabel: "Email",
    subjectLabel: "Assunto",
    messageLabel: "Mensagem",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "seu@email.com",
    subjectPlaceholder: "Assunto (opcional)",
    messagePlaceholder: "Em que posso ajudar?",
    sending: "Enviando...",
    sendButton: "Enviar",
    successTitle: "Mensagem enviada",
    successDescription: "Respondo assim que possível.",
    errorTitle: "Não foi possível enviar",
    errorDescription: "Preencha todos os campos obrigatórios.",
    errorGeneric: "Tente novamente em instantes.",
    errorEndpoint: "Formulário ainda sem endpoint configurado.",
    formSubject: "Contato do portfólio",
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

  seo: {
    siteName: "Iago Cunha | Portfólio",
    keywords:
      "Iago Cunha, desenvolvedor fullstack, desenvolvedor backend, desenvolvedor frontend, fullstack developer, backend developer, frontend developer, Python, FastAPI, React, Next.js, Node.js, Temporal, Kafka, n8n, PostgreSQL, Fortaleza, Ceará, Brasil, portfólio desenvolvedor",
    pages: {
      home: {
        title: "Iago Cunha | Desenvolvedor backend e fullstack",
        description:
          "Portfólio de Iago Cunha: backend com FastAPI, Temporal, automações e fluxos com IA. Projetos, cases e contato.",
      },
      chatCaseStudy: {
        title: "Case: assistente com agentes, Temporal e busca em documentos | Iago Cunha",
        description:
          "Como um chat interno passou a chamar o agente certo, consultar a base certa e falhar de forma controlada, com Temporal, FastAPI e RAG.",
      },
      publicDataCaseStudy: {
        title: "Case: API de notícias públicas com FastAPI | Iago Cunha",
        description:
          "Coleta do G1, Postgres sem duplicar URL e Swagger no ar. Case de backend por Iago Cunha.",
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
      title: "Chat interno com vários agentes: API, Temporal e busca em documentos",
      subtitle:
        "Assistente em que cada pergunta pode ir para um agente diferente. Atuei na API, no Temporal, na busca e no Docker, inclusive em um bug em que o domínio errado respondia de forma genérica.",
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
          title: "O cenário",
          paragraphs: [
            "O chat envia prompt e modelo para uma API no estilo OpenAI. A API dispara um workflow no Temporal, que busca contexto e devolve a resposta com streaming.",
            "Há também fila (Kafka/DLQ) e login corporativo. Não é um tutorial: é sistema que o time usa.",
          ],
        },
        {
          title: "O que estava errado",
          paragraphs: [
            "Em um domínio, a resposta vinha genérica mesmo com o agente certo escolhido na tela.",
            "O worker às vezes rodava versão antiga da lib, o Docker oscilava e misturar login LDAP com atalho local atrapalhava o debug.",
          ],
        },
        {
          title: "O que eu fiz",
          paragraphs: [
            "Garantir que o `model` chegasse até a busca vetorial, com log no caminho e alerta quando o worker estava desatualizado.",
            "Ajustes na API, nos workflows, na ingestão de documentos, na fila e no login e permissão do chat.",
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
