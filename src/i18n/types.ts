// Contrato central de tipos para todo o conteúdo do portfólio
export type Locale = "pt" | "en";

export type ProjectStatus = "live" | "internal" | "unavailable" | "archived";
export type ProjectKind = "real" | "demo";
export type ProjectIconKey =
  | "publicData"
  | "jobMatch"
  | "chatPlatform"
  | "croche"
  | "leadPilot"
  | "agendaFlow"
  | "assistIa";

export interface ProjectItem {
  title: string;
  description: string;
  /** Commercial framing: problem → solution → delivery */
  problem?: string;
  solution?: string;
  demo?: string;
  repo?: string;
  caseStudyPath?: string;
  image?: string;
  alt: string;
  technologies: string[];
  /** Delivery / outcome bullets (no invented metrics) */
  impact: string[];
  iconKey: ProjectIconKey;
  status?: ProjectStatus;
  /** Live client work vs demonstrative portfolio app */
  kind?: ProjectKind;
  /** Prefill for the per-project WhatsApp CTA */
  whatsappMessage?: string;
  /** What I did on the project (shown when known). */
  role?: string;
  /** Where the work can be checked. */
  evidence?: string;
  /** Honest limits: internal, simulated data, etc. */
  limitation?: string;
  /** Shown next to the demo link, e.g. a free host that is slow to wake up. */
  demoNote?: string;
}

/** Label shown on a work entry, derived from status/kind/repo. */
export type ProjectTag = "internal" | "client" | "authored" | "demo";

export interface CaseStudyPage {
  label: string;
  title: string;
  subtitle: string;
  tags: string[];
  summaryCards: Array<{
    title: string;
    paragraphs: string[];
  }>;
  image?: string;
  imageAlt?: string;
  media?: string;
  demoUrl?: string;
  demoNote?: string;
  githubUrl?: string;
  architectureTitle: string;
  diagramTitles: {
    systemFlow: string;
    backendArchitecture: string;
    sequence: string;
    failureTree?: string;
  };
  charts: {
    systemFlow: string;
    backendArchitecture: string;
    sequence: string;
    failureTree?: string;
  };
  detailCards: Array<{
    title: string;
    items: string[];
  }>;
  roleTitle: string;
  roles: Array<{
    label: string;
    text: string;
  }>;
  cta: {
    demo?: string;
    github?: string;
    backToProjects: string;
    contact: string;
  };
}

export interface PortfolioContent {
  a11y: {
    skipToContent: string;
    toggleMenu: string;
    changeLanguage: string;
    toggleTheme: string;
    scrollTop: string;
    showDiagramSource: string;
    hideDiagramSource: string;
    diagramError: string;
  };

  notFound: {
    title: string;
    description: string;
    backHome: string;
  };

  brand: {
    name: string;
    byline: string;
    /** Nome exibido na navbar/footer de /perfil (identidade pessoal). */
    professionalName: string;
    professionalByline: string;
  };

  hero: {
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    alt: string;
    recruitersLabel: string;
    recruitersLink: string;
  };

  home: {
    status: string;
    role: string;
    lede: string;
    meta: string;
    pathsLabel: string;
    paths: Record<"recruiters" | "companies", {
      eyebrow: string;
      title: string;
      description: string;
      tags: string[];
      cta: string;
    }>;
    workTitle: string;
    workSubtitle: string;
    selectedWork: ProjectIconKey[];
    contactTitle: string;
    contactSubtitle: string;
    whatsappNote: string;
  };

  applications: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };

  services: {
    title: string;
    subtitle: string;
    whenLabel: string;
    talkCta: string;
    whatsappPrefix: string;
    footnote: string;
    items: Array<{
      title: string;
      description: string;
      when: string;
      examples: string[];
    }>;
  };

  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };

  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
  };

  technologies: {
    title: string;
    categories: Array<{
      title: string;
      content: string;
    }>;
  };

  workflowShowcase: {
    title: string;
    subtitle: string;
    cardTitle: string;
    inPracticeLabel: string;
    inPracticeText: string;
    cta: string;
    diagramTitle: string;
    stages: Array<{
      id: string;
      title: string;
      goal: string;
      tech: string[];
      diagram: string;
    }>;
  };

  projects: {
    title: string;
    subtitle: string;
    /** Subtítulo da seção em /perfil (audiência profissional). */
    professionalSubtitle: string;
    demo: string;
    code: string;
    caseStudy: string;
    problemLabel: string;
    deliveryLabel: string;
    earlyWorkLabel: string;
    roleLabel: string;
    stackLabel: string;
    evidenceLabel: string;
    limitationLabel: string;
    tagLabels: Record<ProjectTag, string>;
    similarWhatsappCta: string;
    featured: ProjectItem[];
    earlyWork: ProjectItem[];
  };

  experience: {
    title: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      description: string[];
      technologies: string[];
    }>;
  };

  contact: {
    title: string;
    reassurance: string;
    email: string;
    whatsapp: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    whatsappMessage: string;
    whatsappCta: string;
    location: string;
    locationText: string;
  };

  navbar: {
    items: Array<{
      href: string;
      label: string;
    }>;
    navLabel: string;
    professionalItems: Array<{
      href: string;
      label: string;
    }>;
    /** Itens da página /servicos. Hrefs com "/" são rotas; com "#", âncoras da página. */
    servicesItems: Array<{
      href: string;
      label: string;
    }>;
  };

  /** Conteúdo da página /perfil (identidade profissional). */
  professional: {
    eyebrow: string;
    role: string;
    summary: string;
    meta: string;
    resumeLabel: string;
    resumeHref: string;
    mailSubject: string;
    discussCta: string;
    mailtoLabel: string;
    educationTitle: string;
    educationDegree: string;
    educationExpected: string;
    closing: string;
    icComplement: string;
    icComplementCta: string;
  };

  footer: {
    rights: string;
    tagline: string;
  };

  whatsappFloat: {
    label: string;
  };

  seo: {
    siteName: string;
    keywords: string;
    pages: {
      home: {
        title: string;
        description: string;
      };
      profile: {
        title: string;
        description: string;
      };
      services: {
        title: string;
        description: string;
      };
      chatCaseStudy: {
        title: string;
        description: string;
      };
      publicDataCaseStudy: {
        title: string;
        description: string;
      };
    };
  };

  caseStudies: {
    publicData: CaseStudyPage;
    chatPlatform: CaseStudyPage;
  };
}
