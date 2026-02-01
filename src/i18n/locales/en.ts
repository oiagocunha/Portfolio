import { PortfolioContent } from '../types';

export const en: PortfolioContent = {
  hero: {
    greeting: 'Hello! I am',
    typewriter: [
      'Fullstack Developer',
      'Digital Experience Creator',
      'Performance Focused',
      'Building Scalable Solutions',
    ],
    description: 'I transform ideas into extraordinary digital experiences. As a Fullstack developer, I create solutions that connect people, drive businesses, and make a difference in the digital world.',
    button: 'Get in Touch',
    alt: 'Photo of Iago Cunha, Fullstack developer',
  },

  about: {
    title: 'ABOUT ME.',
    stats: [
      { value: 1, suffix: '+', label: 'Years of Experience' },
      { value: 13, suffix: '+', label: 'Projects Completed' },
      { value: 5, suffix: '+', label: 'Technologies' },
      { value: 100, suffix: '%', label: 'Dedication' },
    ],
    paragraphs: [
      'I am Iago Cunha, a fullstack developer.',
      'I work on building and evolving distributed systems, operating between frontend, backend and automation. My daily routine involves integrating services, orchestrating workflows, and handling state, failures, and dependencies between systems.',
      'I have strong experience with automation using n8n and orchestration with Temporal, as well as developing applications and services in Python, PHP, and C#. On the frontend, I mainly work with JavaScript, building interfaces that connect to existing workflows and services.',
      'I have worked on architecture migration, maintaining operational systems, and continuous technical adjustments, directly dealing with coupling, observability, reliability, and code evolution over time.',
    ],
  },

  specialties: {
    title: 'MY',
    subtitle: 'SPECIALTIES',
    items: [
      {
        emoji: '💻',
        title: 'Frontend Development',
        description: 'Creating modern and responsive interfaces using React, JavaScript, HTML5, and CSS3. Focus on user experience and performance.',
      },
      {
        emoji: '⚙️',
        title: 'Backend Development',
        description: 'Development of robust and scalable APIs with Node.js, Python, and PHP. Integration with databases and external services.',
      },
      {
        emoji: '📱',
        title: 'Responsive Design',
        description: 'Creating layouts that perfectly adapt to all devices, ensuring a consistent experience on any screen.',
      },
      {
        emoji: '🌐',
        title: 'Website',
        description: 'Development of modern and responsive websites, ensuring the best experience for your users.',
      },
      {
        emoji: '🛒',
        title: 'Online Store',
        description: 'Creation of intuitive e-commerce platforms, optimized for conversion and performance.',
      },
      {
        emoji: '📰',
        title: 'Blog',
        description: 'Building dynamic blogs and content platforms, customized to your needs.',
      },
    ],
  },

  technologies: {
    title: 'MY',
    subtitle: 'TECHNOLOGIES',
    categories: [
      {
        title: 'Languages',
        content: 'JavaScript, TypeScript, Node.js, Python, PHP, HTML5, CSS3',
      },
      {
        title: 'Frameworks',
        content: 'React, Next.js, Express, Vue.js, Laravel',
      },
      {
        title: 'Tools',
        content: 'Git, Docker, VS Code, Vite, Webpack, Babel, Figma',
      },
      {
        title: 'Databases',
        content: 'MySQL, PostgreSQL, MongoDB, SQLite, Supabase',
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
        title: 'React Developer Formation',
        issuer: 'Digital Innovation One (DIO)',
        date: '2024',
        credential: 'React course completion certificate',
        link: '#',
        skills: ['React', 'Hooks', 'Context API', 'Router'],
      },
      {
        title: 'Modern JavaScript (ES6+)',
        issuer: 'Udemy',
        date: '2024',
        credential: 'JavaScript ES6+ Mastery',
        link: '#',
        skills: ['ES6+', 'Async/Await', 'Promises', 'Modules'],
      },
      {
        title: 'Node.js and Express',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Backend with Node.js',
        link: '#',
        skills: ['Node.js', 'Express', 'REST API', 'MongoDB'],
      },
      {
        title: 'Tailwind CSS',
        issuer: 'Scrimba',
        date: '2024',
        credential: 'CSS Framework Expert',
        link: '#',
        skills: ['Tailwind', 'CSS', 'Responsive Design'],
      },
    ],
  },

  talks: {
    title: 'TALKS',
    subtitle: 'AND PRESENTATIONS',
    attendees: 'attendees',
    items: [
      {
        title: 'Introduction to React: Building Modern Interfaces',
        event: 'Tech Talks - Local Community',
        date: '2024',
        location: 'Fortaleza, CE',
        description: 'Introductory talk about React, covering fundamental concepts, hooks, and development best practices.',
        attendees: 50,
        topics: ['React', 'Hooks', 'Components', 'Best Practices'],
      },
      {
        title: 'Modern JavaScript: From ES6 to ES2024',
        event: 'Dev Meetup',
        date: '2024',
        location: 'Online',
        description: 'Presentation on the main features of modern JavaScript and how to apply them in daily work.',
        attendees: 80,
        topics: ['JavaScript', 'ES6+', 'Async/Await', 'Modules'],
      },
    ],
  },

  experience: {
    title: 'PROFESSIONAL',
    subtitle: 'EXPERIENCE',
    items: [
      {
        company: 'Freelancer',
        role: 'Fullstack Developer',
        period: '2024 - Present',
        description: [
          'Development of complete web applications using React, TypeScript, and Node.js',
          'Creation of e-commerce and responsive institutional websites',
          'Integration with RESTful APIs and MongoDB and PostgreSQL databases',
          'Implementation of automation solutions with n8n',
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'n8n'],
      },
      {
        company: 'Industry Observatory - FIEB',
        role: 'Frontend Developer',
        period: '2024',
        description: [
          'Development of CLT Simulator for Bolsa Família beneficiaries',
          'Responsive interface with complex form validations',
          'Integration with government APIs',
          'Focus on accessibility and performance',
        ],
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
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
