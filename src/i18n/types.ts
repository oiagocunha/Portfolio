// Contrato central de tipos para todo o conteúdo do portfólio
export type Locale = "pt" | "en";

export type ProjectComplexity = "Low" | "Medium" | "High" | "Very High";
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
  docs?: string;
  repo?: string;
  caseStudyPath?: string;
  image?: string;
  /** GIF/WebP/MP4 opcional; se ausente, usa `image` */
  media?: string;
  alt: string;
  technologies: string[];
  complexity: ProjectComplexity;
  /** Delivery / outcome bullets (no invented metrics) */
  impact: string[];
  iconKey: ProjectIconKey;
  status?: ProjectStatus;
  /** Live client work vs demonstrative portfolio app */
  kind?: ProjectKind;
  /** Prefill for the per-project WhatsApp CTA */
  whatsappMessage?: string;
}

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
    openMedia: string;
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
    greeting: string;
    headline: string;
    typewriter: string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    alt: string;
    role: string;
    highlights: string[];
    recruitersLabel: string;
    recruitersLink: string;
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

  specialties: {
    title: string;
    subtitle: string;
    items: Array<{
      emoji: string;
      title: string;
      description: string;
    }>;
  };

  technologies: {
    title: string;
    subtitle: string;
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
    docs: string;
    code: string;
    caseStudy: string;
    complexityLabel: string;
    problemLabel: string;
    solutionLabel: string;
    deliveryLabel: string;
    techLabel: string;
    featuredLabel: string;
    earlyWorkLabel: string;
    earlyWorkSubtitle: string;
    similarWhatsappCta: string;
    kindLabels: {
      real: string;
      demo: string;
    };
    statusLabels: {
      internal: string;
      unavailable: string;
      archived: string;
    };
    complexity: Record<ProjectComplexity, string>;
    featured: ProjectItem[];
    earlyWork: ProjectItem[];
  };

  certifications: {
    title: string;
    subtitle: string;
    viewCert: string;
    items: Array<{
      title: string;
      issuer: string;
      date: string;
      credential: string;
      link: string;
      skills: string[];
    }>;
  };

  experience: {
    title: string;
    subtitle: string;
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
    subtitle: string;
    reassurance: string;
    email: string;
    whatsapp: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    whatsappMessage: string;
    whatsappCta: string;
    location: string;
    locationText: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sending: string;
    sendButton: string;
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
    errorGeneric: string;
    errorEndpoint: string;
    errorNetwork: string;
    formSubject: string;
  };

  navbar: {
    items: Array<{
      href: string;
      label: string;
    }>;
    profileLink: string;
    navLabel: string;
    professionalItems: Array<{
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
