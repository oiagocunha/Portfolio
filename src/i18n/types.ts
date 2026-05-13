// Contrato central de tipos para todo o conteúdo do portfólio
export type Locale = 'pt' | 'en';

export interface CaseStudyPage {
  label: string;
  title: string;
  subtitle: string;
  tags: string[];
  summaryCards: Array<{
    title: string;
    paragraphs: string[];
  }>;
  imageAlt?: string;
  architectureTitle: string;
  diagramTitles: {
    systemFlow: string;
    backendArchitecture: string;
    sequence: string;
  };
  charts: {
    systemFlow: string;
    backendArchitecture: string;
    sequence: string;
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
  hero: {
    greeting: string;
    headline: string;
    typewriter: string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    alt: string;
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
    stages: Array<{
      id: string;
      title: string;
      goal: string;
      tech: string[];
    }>;
  };
  
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    caseStudy: string;
    items: Array<{
      title: string;
      description: string;
      demo?: string;
      repo?: string;
      caseStudyPath?: string;
      image: string;
      alt: string;
      technologies: string[];
      complexity: 'Low' | 'Medium' | 'High' | 'Very High';
      impact: string[];
    }>;
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

  caseStudies: {
    publicData: CaseStudyPage;
    chatPlatform: CaseStudyPage;
  };
}
