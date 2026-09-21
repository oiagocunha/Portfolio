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
    headline: "Sites, automações e sistemas que resolvem problemas reais do seu negócio.",
    typewriter: [],
    description:
      "Eu crio sites, automatizo tarefas repetitivas, conecto ferramentas que hoje trabalham separadas e desenvolvo pequenos sistemas para o dia a dia da sua operação.",
    primaryCta: "Falar pelo WhatsApp",
    secondaryCta: "Ver projetos",
    alt: "Foto de Iago Cunha",
    role: "por Iago Cunha",
    highlights: [],
  },

  problems: {
    title: "Isso parece com o que vocês vivem hoje?",
    subtitle: "Se alguma dessas situações for familiar, provavelmente posso ajudar.",
    bridge:
      "Você não precisa chegar sabendo qual tecnologia usar. Me conte como vocês fazem hoje e onde está o problema  a primeira conversa serve para entender a melhor solução.",
    items: [
      {
        title: "Tarefas manuais demais",
        description:
          "A equipe perde tempo fazendo a mesma tarefa repetida, todo dia, à mão.",
      },
      {
        title: "Informação espalhada",
        description:
          "Dados ficam em planilhas, e-mails e ferramentas diferentes  e ninguém encontra nada com facilidade.",
      },
      {
        title: "Ferramentas que não conversam",
        description:
          "Vocês copiam informação de um sistema para outro porque as ferramentas não estão conectadas.",
      },
      {
        title: "Falta de presença digital",
        description:
          "O negócio precisa de um site, página de serviços ou catálogo que transmita confiança.",
      },
      {
        title: "Ferramenta pronta não resolve",
        description:
          "Existe uma necessidade interna que sistemas genéricos não cobrem do jeito que vocês precisam.",
      },
      {
        title: "Dá para melhorar, mas não sei por onde",
        description:
          "Vocês sabem que o processo atual emperra, mas ainda não definiram qual solução criar.",
      },
    ],
  },

  services: {
    title: "O que eu posso fazer por você",
    subtitle: "Três caminhos claros. Sem jargão.",
    whenLabel: "Quando faz sentido",
    items: [
      {
        title: "Sites e aplicações web",
        description:
          "Um site ou uma pequena aplicação para apresentar o negócio, receber contatos ou mostrar produtos.",
        when: "Quando você precisa aparecer online com clareza  site, página de serviços ou catálogo.",
        examples: [
          "Site institucional",
          "Landing page e página de serviços",
          "Catálogo e pequena aplicação web",
        ],
      },
      {
        title: "Automação e integração",
        description:
          "Automatizo o que a equipe repete todo dia e conecto ferramentas que hoje trabalham separadas.",
        when: "Quando alguém copia dado de um lugar para outro, gera relatório na mão ou perde tempo em rotina previsível.",
        examples: [
          "Automatizar tarefas repetitivas",
          "Conectar planilhas e sistemas",
          "Organizar fluxos que hoje dependem de trabalho manual",
        ],
      },
      {
        title: "Sistemas sob medida",
        description:
          "Controles e ferramentas feitas para a sua operação  quando o que existe no mercado não encaixa.",
        when: "Quando a planilha não dá mais conta, ou você precisa de um sistema inicial para organizar o processo.",
        examples: [
          "Controles internos",
          "Painéis e acompanhamento",
          "Primeira versão de um sistema específico",
        ],
      },
    ],
  },

  process: {
    title: "Como trabalho",
    subtitle: "Do problema à entrega, sem complicar.",
    steps: [
      {
        title: "Conversa inicial",
        description: "Você me conta o contexto e o problema. Não precisa saber exatamente o que contratar.",
      },
      {
        title: "Entendimento",
        description: "Eu olho como vocês fazem hoje e o que dá para melhorar com site, automação ou sistema.",
      },
      {
        title: "Proposta",
        description: "Alinhamos o que entra na entrega, o prazo estimado e o investimento.",
      },
      {
        title: "Desenvolvimento",
        description: "Construo a solução e te mantenho no acompanhamento.",
      },
      {
        title: "Entrega",
        description: "Entrego, explico o uso e faço os ajustes combinados.",
      },
    ],
  },

  about: {
    title: "SOBRE.",
    subtitle: "Quem está por trás da IC Desenvolvimento",
    stats: [
      { value: 3, suffix: "", label: "Anos escrevendo software" },
      { value: 10, suffix: "+", label: "Automações em produção" },
      { value: 80, suffix: "%", label: "Menos erro operacional (n8n)" },
    ],
    paragraphs: [
      "Sou o Iago Cunha. A IC Desenvolvimento é a marca sob a qual eu desenvolvo projetos para negócios: sites, automações, integrações e sistemas.",
      "Tenho experiência profissional no Sistema FIEC / Observatório da Indústria, com backend, automação e soluções com IA em ambiente corporativo. Em paralelo, atendo projetos como autônomo.",
      "Prefiro entender como vocês trabalham hoje antes de propor qualquer ferramenta.",
    ],
  },

  specialties: {
    title: "ATUAÇÃO",
    subtitle: "TÉCNICA",
    items: [
      {
        emoji: "",
        title: "Fluxos com agentes",
        description:
          "Do prompt no chat até a orquestração: qual agente executa, o que ele consulta e como a resposta retorna.",
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
    title: "STACK",
    subtitle: "TÉCNICA",
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
    subtitle: "Exemplos do que eu já construí  começando pelo que mais fala com um negócio real.",
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
    earlyWorkLabel: "Também construo soluções mais técnicas",
    earlyWorkSubtitle:
      "Projetos que mostram profundidade técnica. Úteis se você quiser ver como eu trabalho em sistemas mais complexos.",
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
          "Um negócio precisava apresentar produtos online e facilitar o pedido. Foi criada uma aplicação web com catálogo, categorias e carrinho.",
        problem:
          "O negócio precisava mostrar produtos com clareza e receber encomendas sem depender só de conversa solta.",
        solution:
          "Aplicação web com catálogo organizado, categorias e carrinho pensado para encomenda.",
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
          "Chat interno para a equipe consultar informações e receber respostas de forma mais organizada.",
        problem:
          "O time precisava de um assistente interno estável, com respostas no contexto certo.",
        solution:
          "Participei da construção e estabilização do chat, da busca em documentos e do ambiente usado pelo time.",
        caseStudyPath: "/case-study/chat-platform",
        image: "/images/assistente-corporativo.jpg",
        alt: "Tela do assistente corporativo",
        technologies: ["Temporal", "FastAPI", "RAG", "Kafka", "PostgreSQL", "LDAP", "Docker"],
        complexity: "Very High",
        impact: [
          "Chat interno com múltiplos agentes",
          "Busca em documentos por contexto",
          "Ambiente mais previsível para o time",
        ],
        iconKey: "chatPlatform",
        status: "internal",
      },
      {
        title: "Job Match Alerts",
        description:
          "Ferramenta para comparar currículo e vaga e ver o que bate e o que falta.",
        problem:
          "Avaliar o alinhamento entre currículo e vaga sem revisar tudo manualmente.",
        solution:
          "Aplicação que recebe o currículo, analisa a vaga e devolve um comparativo objetivo.",
        demo: "https://job-match-alerts.vercel.app/",
        repo: "https://github.com/oiagocunha/job-match-alerts",
        image: "/images/job-match-alerts-swagger.png",
        alt: "Job Match Alerts",
        technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "OpenAI", "Docker"],
        complexity: "High",
        impact: [
          "Upload de currículo em PDF",
          "Comparativo objetivo com a vaga",
          "Demo disponível online",
        ],
        iconKey: "jobMatch",
        status: "live",
      },
      {
        title: "Monitor de dados públicos",
        description:
          "API que coleta notícias públicas, grava sem duplicar e deixa a consulta documentada.",
        problem:
          "Precisava de uma forma confiável de coletar dados externos e consultar sem duplicata.",
        solution:
          "Sistema de coleta com armazenamento organizado e documentação pronta para uso.",
        demo: "https://public-data-monitor.onrender.com/docs",
        repo: "https://github.com/oiagocunha/public-data-monitor",
        caseStudyPath: "/case-study/public-data-monitor",
        image: "/images/public-data-monitor-swagger.png",
        alt: "Monitor de dados públicos",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Render"],
        complexity: "High",
        impact: [
          "Coleta sem duplicar registros",
          "Consulta documentada online",
          "Ambiente reproduzível",
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
          "Experiência profissional em backend, automação e soluções com IA em ambiente corporativo.",
          "Atuo em sistemas usados no dia a dia do time: APIs, fluxos automatizados e integração com o front.",
          "Participo de melhorias de estabilidade, falha controlada e ambiente de desenvolvimento.",
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
          "n8n",
          "Node.js",
        ],
      },
      {
        company: "Sistema FIEC / Observatório da Indústria",
        role: "Estagiário de desenvolvimento",
        period: "03/2025 - 11/2025",
        description: [
          "Automatizei rotinas com n8n e APIs, com cerca de 80% menos erro operacional no que entregamos.",
          "Transformei regras de negócio em fluxos que o time consegue usar no dia a dia.",
          "Atuei em sistemas já existentes e entreguei ferramentas internas para acelerar o trabalho.",
        ],
        technologies: [
          "React",
          "Next.js",
          "PHP",
          "Laravel",
          "Node.js",
          "TypeScript",
          "n8n",
        ],
      },
      {
        company: "Autônomo · IC Desenvolvimento",
        role: "Desenvolvedor fullstack",
        period: "06/2024 - Atualmente",
        description: [
          "Desenvolvimento de sites, aplicações web, automações e sistemas conforme a necessidade do projeto.",
          "Integração entre ferramentas e redução de processos manuais.",
          "Do alinhamento do problema até a primeira versão em funcionamento.",
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
    subtitle: "Quer conversar sobre um projeto? Me chama no WhatsApp.",
    reassurance:
      "Não sabe exatamente o que precisa? Tudo bem. Me conte como vocês fazem hoje e qual problema querem resolver.",
    email: "Email",
    whatsapp: "WhatsApp",
    whatsappNumber: "5585989035010",
    whatsappDisplay: "+55 85 98903-5010",
    whatsappMessage:
      "Olá, Iago! Vi o site da IC Desenvolvimento e queria conversar sobre um projeto.",
    whatsappCta: "Falar pelo WhatsApp",
    location: "Localização",
    locationText: "Fortaleza, Ceará",
    formTitle: "Ou envie uma mensagem",
    nameLabel: "Nome",
    emailLabel: "Email",
    subjectLabel: "Assunto",
    messageLabel: "Mensagem",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "seu@email.com",
    subjectPlaceholder: "Assunto (opcional)",
    messagePlaceholder: "Descreva o problema ou o projeto  pode ser em poucas linhas.",
    sending: "Enviando...",
    sendButton: "Enviar mensagem",
    successTitle: "Mensagem enviada",
    successDescription: "Respondo assim que possível.",
    errorTitle: "Não foi possível enviar",
    errorDescription: "Preencha todos os campos obrigatórios.",
    errorGeneric: "Tente novamente em instantes.",
    errorEndpoint: "Formulário ainda sem endpoint configurado.",
    formSubject: "Contato  IC Desenvolvimento",
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
    tagline: "Sites, automações e sistemas para o seu negócio.",
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
        title: "IC Desenvolvimento | Sites, Automação e Sistemas sob Medida",
        description:
          "IC Desenvolvimento, por Iago Cunha: sites, automações, integrações e sistemas sob medida em Fortaleza/CE. Converse sobre o seu projeto.",
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
