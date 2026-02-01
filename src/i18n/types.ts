// Contrato central de tipos para todo o conteúdo do portfólio
export type Locale = 'pt' | 'en' | 'es';

export interface PortfolioContent {
  hero: {
    greeting: string;
    typewriter: string[];
    description: string;
    button: string;
    alt: string;
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
  
  projects: {
    title: string;
    demo: string;
    code: string;
    items: Array<{
      title: string;
      description: string;
      demo?: string;
      repo?: string;
      image: string;
      alt: string;
      technologies: string[];
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
  
  talks: {
    title: string;
    subtitle: string;
    attendees: string;
    items: Array<{
      title: string;
      event: string;
      date: string;
      location: string;
      description: string;
      attendees?: number;
      topics: string[];
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
}
