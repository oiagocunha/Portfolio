// Contrato central de tipos para todo o conteúdo do portfólio
export type Locale = "pt" | "en";

export type ProjectComplexity = "Low" | "Medium" | "High" | "Very High";
export type ProjectStatus = "live" | "internal" | "unavailable" | "archived";
export type ProjectIconKey =
  | "publicData"
  | "jobMatch"
  | "chatPlatform"
  | "croche";

export interface ProjectItem {
  title: string;
  description: string;
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
  impact: string[];
  iconKey: ProjectIconKey;
  status?: ProjectStatus;
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
  };

  about: {
    title: string;
    stats: Array<{
      value: number;
      suffix: string;
      label: string;
    }>;
    paragraphs: string[];
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
    demo: string;
    docs: string;
    code: string;
    caseStudy: string;
    complexityLabel: string;
    featuredLabel: string;
    earlyWorkLabel: string;
    earlyWorkSubtitle: string;
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
    email: string;
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
    formSubject: string;
  };

  navbar: {
    items: Array<{
      href: string;
      label: string;
    }>;
    downloadCV: string;
    cvPath: string;
  };

  footer: {
    rights: string;
  };

  seo: {
    siteName: string;
    keywords: string;
    pages: {
      home: {
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
