import { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  hero: {
    greeting: 'Hello! I am',
    typewriter: [
      'Backend Developer',
      'Automation Specialist',
      'Systems Integrator',
      'Solutions Developer',
    ],
    description: 'Backend developer focused on automation, system integration, and workflow orchestration. I work with Python, Node.js, and tools like n8n and Temporal to build robust and scalable solutions.',
    button: 'Get in Touch',
    alt: 'Photo of Iago Cunha, Backend Developer',
  },

  about: {
    title: 'ABOUT ME.',
    stats: [
      { value: 2, suffix: '+', label: 'Years of Experience' },
      { value: 15, suffix: '+', label: 'Projects Delivered' },
      { value: 10, suffix: '+', label: 'Technologies' },
      { value: 3, suffix: '', label: 'Talks Given' },
    ],
    paragraphs: [
      'I am Iago Cunha, a backend developer.',
      'I work on building and evolving distributed systems, operating between backend, automation, and integration. My daily routine involves orchestrating workflows, integrating services, and handling state, failures, and dependencies between systems.',
      'I have strong experience with automation using n8n and orchestration with Temporal, as well as developing applications and services in Python, Node.js, and PHP. On the frontend, I work with React and Next.js to build interfaces connected to these workflows.',
      'I have worked on architecture migration, maintaining critical production systems, and continuous technical adjustments, dealing with coupling, observability, reliability, and code evolution.',
    ],
  },

  specialties: {
    title: 'MY',
    subtitle: 'SPECIALTIES',
    items: [
      {
        emoji: '⚙️',
        title: 'Backend Development',
        description: 'Development of APIs, services, and integrations with Python, Node.js, Express, and PHP. Focus on robustness, scalability, and maintainability.',
      },
      {
        emoji: '🔄',
        title: 'Process Automation',
        description: 'Implementation of automated workflows with n8n, orchestration with Temporal, and system integration to optimize operations.',
      },
      {
        emoji: '🔗',
        title: 'Systems Integration',
        description: 'Connection and synchronization of services, APIs, and databases. Experience with REST APIs, webhooks, and messaging.',
      },
      {
        emoji: '💾',
        title: 'Databases',
        description: 'Modeling, optimization, and data management with PostgreSQL, MySQL, and MongoDB. Focus on performance and integrity.',
      },
      {
        emoji: '💻',
        title: 'Frontend Development',
        description: 'Building modern interfaces with React, Next.js, and Tailwind CSS. Integration with backends and APIs.',
      },
      {
        emoji: '🚀',
        title: 'Deploy & DevOps',
        description: 'Environment configuration, containerization with Docker, and version control with Git/GitHub/GitLab.',
      },
    ],
  },

  technologies: {
    title: 'MY',
    subtitle: 'TECHNOLOGIES',
    categories: [
      {
        title: 'Languages',
        content: 'Python, JavaScript, TypeScript, PHP',
      },
      {
        title: 'Backend & Automation',
        content: 'Node.js, Express, n8n, Temporal, REST APIs',
      },
      {
        title: 'Frontend',
        content: 'React, Next.js, Tailwind CSS',
      },
      {
        title: 'Databases',
        content: 'PostgreSQL, MySQL, MongoDB',
      },
      {
        title: 'Tools',
        content: 'Git, GitHub, GitLab, Docker, Vite, Figma',
      },
    ],
  },

  projects: {
    title: 'MY PORTFOLIO.',
    demo: 'Demo',
    code: 'Code',
    items: [
      {
        title: 'CLT Simulator - Government System',
        description: 'Official tool for Bolsa Família beneficiaries. Responsive interface and complex validations.',
        demo: 'https://simuladorclt.observatorio.ind.br/',
        image: '/images/simuladorCLT.png',
        alt: 'CLT Simulator project thumbnail',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
      },
      {
        title: 'Xuxiê - E-commerce',
        description: 'Responsive online store with ViaCEP integration and WhatsApp orders.',
        demo: 'https://xuxie-croche.vercel.app/',
        image: '/images/xuxie-croche.png',
        alt: 'Xuxiê E-commerce project thumbnail',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'WhatsApp API'],
      },
      {
        title: 'Grade Management System',
        description: 'Desktop application with Python/Tkinter for grade management.',
        repo: 'https://github.com/oiagocunha/sistema_notas',
        image: '/images/sistema_notas.png',
        alt: 'Grade Management System thumbnail',
        technologies: ['Python', 'Tkinter', 'SQLite'],
      },
      {
        title: 'QR Code Generator',
        description: 'QR Code generation with image export.',
        demo: 'https://link-to-qr-code.vercel.app/',
        repo: 'https://github.com/oiagocunha/link-to-qrCode',
        image: '/images/QRCode.png',
        alt: 'QR Code Generator thumbnail',
        technologies: ['React', 'JavaScript', 'QR Library'],
      },
      {
        title: 'Product Management System',
        description: 'CRUD with LocalStorage persistence.',
        demo: 'https://oiagocunha.github.io/Cadastro_Produtos/',
        repo: 'https://github.com/oiagocunha/Cadastro_Produtos',
        image: '/images/CRUD.png',
        alt: 'Product Management System thumbnail',
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      },
    ],
  },

  certifications: {
    title: 'CERTIFICATIONS',
    subtitle: 'AND COURSES',
    viewCert: 'View Certificate',
    items: [
      {
        title: 'Complete Python (Worlds 1, 2, and 3)',
        issuer: 'Curso em Vídeo',
        date: '2024-2026',
        credential: '3 modules completed + 4th in progress',
        link: '#',
        skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
      },
      {
        title: 'Complete JavaScript',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Full JavaScript course',
        link: '#',
        skills: ['JavaScript', 'DOM', 'ES6+', 'Async'],
      },
      {
        title: 'Programming Logic',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Logic and algorithm fundamentals',
        link: '#',
        skills: ['Algorithms', 'Logic', 'Control Structures'],
      },
      {
        title: 'Tech Generation Program',
        issuer: 'Ger Tech',
        date: '2024',
        credential: 'Technology training',
        link: '#',
        skills: ['Web Development', 'Backend', 'Frontend'],
      },
      {
        title: 'Basic English',
        issuer: 'Language Courses',
        date: '2023',
        credential: 'B1 level certified',
        link: '#',
        skills: ['Reading', 'Writing', 'Listening', 'Speaking'],
      },
    ],
  },

  talks: {
    title: 'TALKS',
    subtitle: 'AND PRESENTATIONS',
    attendees: 'attendees',
    items: [
      {
        title: 'nInA Platform Presentation',
        event: 'Industry Observatory - FIEC System',
        date: '2025',
        location: 'Fortaleza, CE',
        description: 'Technical presentation on the architecture, features, and implementation of the nInA platform, an AI system for industrial data analysis.',
        attendees: 20,
        topics: ['nInA', 'Architecture', 'Integration', 'AI'],
      },
      {
        title: 'Workflow Orchestration with Temporal',
        event: 'Industry Observatory - FIEC System',
        date: '2026',
        location: 'Fortaleza, CE',
        description: 'Presentation on workflow orchestration, resilience, and observability using Temporal in production environments.',
        attendees: 20,
        topics: ['Temporal', 'Workflows', 'Orchestration', 'Resilience'],
      },
      {
        title: 'Professional Journey in Technology',
        event: 'Digital College',
        date: '2025',
        location: 'Fortaleza, CE',
        description: 'Talk about professional journey, challenges, learnings, and practical experiences in software development and systems automation.',
        attendees: 50,
        topics: ['Career', 'Development', 'Experiences', 'Technology'],
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
        period: '2025 - Present (Contractor)',
        description: [
          'Development and maintenance of critical production systems (nInA, GovMonitor)',
          'Process automation and workflow orchestration with n8n and Temporal',
          'System and API integration, state management and resilience',
          'Work with Python, Node.js, and relational and NoSQL databases',
        ],
        technologies: ['Python', 'Node.js', 'Temporal', 'n8n', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        company: 'FIEC System / Industry Observatory',
        role: 'Full Stack Developer Intern',
        period: '2025 - 2025',
        description: [
          'Fullstack development of web applications and internal systems',
          'Interface implementation with React and Next.js',
          'Creation of APIs and backend services with Node.js and Express',
          'Participation in architecture migrations and refactorings',
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS'],
      },
      {
        company: 'Entrepreneur & Full Stack Developer',
        role: 'Independent Developer',
        period: '2024 - Present (Contractor)',
        description: [
          'Development of own projects and service provision',
          'Creation of systems, automations, and custom integrations',
          'Development of digital products and web solutions',
          'Project management from concept to delivery',
        ],
        technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'PHP', 'Docker', 'Git'],
      },
    ],
  },

  contact: {
    title: "LET'S TALK.",
    subtitle: 'Have a project in mind? Let\'s turn your ideas into digital reality!',
    email: 'Email',
    location: 'Location',
    locationText: 'Fortaleza, Ceará, Brazil',
    formTitle: 'Send a message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your message...',
    sending: 'Sending...',
    sendButton: 'Send Message',
    successTitle: 'Message sent!',
    successDescription: 'Thank you for reaching out. I\'ll reply soon!',
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
      { href: '#palestras', label: 'Talks' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#contato', label: 'Contact' },
    ],
    downloadCV: 'Download CV',
    cvPath: '/[EN] Resume - Iago Cunha - FullStack Developer.pdf',
  },

  footer: {
    rights: 'All rights reserved.',
  },
};
