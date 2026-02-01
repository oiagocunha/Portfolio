import { PortfolioContent } from '../types';

export const es: PortfolioContent = {
  hero: {
    greeting: '¡Hola! Me llamo',
    typewriter: [
      'Desarrollador Backend',
      'Especialista en Automatización',
      'Integrador de Sistemas',
      'Desarrollador de Soluciones',
    ],
    description: 'Desarrollador backend enfocado en automatización, integración de sistemas y orquestación de flujos. Trabajo con Python, Node.js y herramientas como n8n y Temporal para construir soluciones robustas y escalables.',
    button: 'Contactar',
    alt: 'Foto de Iago Cunha, Desarrollador Backend',
  },

  about: {
    title: 'SOBRE MÍ.',
    stats: [
      { value: 2, suffix: '+', label: 'Años de Experiencia' },
      { value: 15, suffix: '+', label: 'Proyectos Entregados' },
      { value: 10, suffix: '+', label: 'Tecnologías' },
      { value: 3, suffix: '', label: 'Charlas Impartidas' },
    ],
    paragraphs: [
      'Soy Iago Cunha, desarrollador backend.',
      'Actúo en la construcción y evolución de sistemas distribuidos, trabajando entre backend, automatización e integración. Mi rutina diaria involucra orquestar flujos, integrar servicios y manejar estado, fallos y dependencias entre sistemas.',
      'Tengo fuerte experiencia con automatización usando n8n y orquestación con Temporal, además del desarrollo de aplicaciones y servicios en Python, Node.js y PHP. En el frontend, trabajo con React y Next.js para construir interfaces conectadas a estos flujos.',
      'He trabajado en migración de arquitecturas, mantenimiento de sistemas críticos en producción y ajustes técnicos continuos, lidiando con acoplamiento, observabilidad, confiabilidad y evolución de código.',
    ],
  },

  specialties: {
    title: 'MIS',
    subtitle: 'ESPECIALIDADES',
    items: [
      {
        emoji: '⚙️',
        title: 'Desarrollo Backend',
        description: 'Desarrollo de APIs, servicios e integraciones con Python, Node.js, Express y PHP. Enfoque en robustez, escalabilidad y mantenibilidad.',
      },
      {
        emoji: '🔄',
        title: 'Automatización de Procesos',
        description: 'Implementación de flujos automatizados con n8n, orquestación con Temporal e integración entre sistemas para optimizar operaciones.',
      },
      {
        emoji: '🔗',
        title: 'Integración de Sistemas',
        description: 'Conexión y sincronización de servicios, APIs y bases de datos. Experiencia con REST APIs, webhooks y mensajería.',
      },
      {
        emoji: '💾',
        title: 'Bases de Datos',
        description: 'Modelado, optimización y gestión de datos con PostgreSQL, MySQL y MongoDB. Enfoque en rendimiento e integridad.',
      },
      {
        emoji: '💻',
        title: 'Desarrollo Frontend',
        description: 'Construcción de interfaces modernas con React, Next.js y Tailwind CSS. Integración con backends y APIs.',
      },
      {
        emoji: '🚀',
        title: 'Deploy y DevOps',
        description: 'Configuración de entornos, containerización con Docker y control de versiones con Git/GitHub/GitLab.',
      },
    ],
  },

  technologies: {
    title: 'MIS',
    subtitle: 'TECNOLOGÍAS',
    categories: [
      {
        title: 'Lenguajes',
        content: 'Python, JavaScript, TypeScript, PHP',
      },
      {
        title: 'Backend y Automatización',
        content: 'Node.js, Express, n8n, Temporal, REST APIs',
      },
      {
        title: 'Frontend',
        content: 'React, Next.js, Tailwind CSS',
      },
      {
        title: 'Bases de Datos',
        content: 'PostgreSQL, MySQL, MongoDB',
      },
      {
        title: 'Herramientas',
        content: 'Git, GitHub, GitLab, Docker, Vite, Figma',
      },
    ],
  },

  projects: {
    title: 'MI PORTAFOLIO.',
    demo: 'Demo',
    code: 'Código',
    items: [
      {
        title: 'Simulador CLT - Sistema Gubernamental',
        description: 'Herramienta oficial para beneficiarios de Bolsa Família. Interfaz responsiva y validaciones complejas.',
        demo: 'https://simuladorclt.observatorio.ind.br/',
        image: '/images/simuladorCLT.png',
        alt: 'Miniatura del proyecto Simulador CLT',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
      },
      {
        title: 'Xuxiê - E-commerce',
        description: 'Tienda virtual responsiva con integración ViaCEP y pedidos vía WhatsApp.',
        demo: 'https://xuxie-croche.vercel.app/',
        image: '/images/xuxie-croche.png',
        alt: 'Miniatura del proyecto Xuxiê E-commerce',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'WhatsApp API'],
      },
      {
        title: 'Sistema de Gestión de Notas',
        description: 'Aplicación de escritorio con Python/Tkinter para gestión de notas.',
        repo: 'https://github.com/oiagocunha/sistema_notas',
        image: '/images/sistema_notas.png',
        alt: 'Miniatura del Sistema de Gestión de Notas',
        technologies: ['Python', 'Tkinter', 'SQLite'],
      },
      {
        title: 'Generador de Códigos QR',
        description: 'Generación de códigos QR con exportación de imágenes.',
        demo: 'https://link-to-qr-code.vercel.app/',
        repo: 'https://github.com/oiagocunha/link-to-qrCode',
        image: '/images/QRCode.png',
        alt: 'Miniatura del Generador de Códigos QR',
        technologies: ['React', 'JavaScript', 'QR Library'],
      },
      {
        title: 'Sistema de Gestión de Productos',
        description: 'CRUD con persistencia local en LocalStorage.',
        demo: 'https://oiagocunha.github.io/Cadastro_Produtos/',
        repo: 'https://github.com/oiagocunha/Cadastro_Produtos',
        image: '/images/CRUD.png',
        alt: 'Miniatura del Sistema de Gestión de Productos',
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      },
    ],
  },

  certifications: {
    title: 'CERTIFICACIONES',
    subtitle: 'Y CURSOS',
    viewCert: 'Ver Certificado',
    items: [
      {
        title: 'Python Completo (Mundos 1, 2 y 3)',
        issuer: 'Curso em Vídeo',
        date: '2024-2026',
        credential: '3 módulos completados + 4º en progreso',
        link: '#',
        skills: ['Python', 'POO', 'Estructuras de Datos', 'Algoritmos'],
      },
      {
        title: 'JavaScript Completo',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Curso completo de JavaScript',
        link: '#',
        skills: ['JavaScript', 'DOM', 'ES6+', 'Async'],
      },
      {
        title: 'Lógica de Programación',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Fundamentos de lógica y algoritmos',
        link: '#',
        skills: ['Algoritmos', 'Lógica', 'Estructuras de Control'],
      },
      {
        title: 'Programa Generación Tech',
        issuer: 'Ger Tech',
        date: '2024',
        credential: 'Formación en tecnología',
        link: '#',
        skills: ['Desarrollo Web', 'Backend', 'Frontend'],
      },
      {
        title: 'Inglés Básico',
        issuer: 'Cursos de Idiomas',
        date: '2023',
        credential: 'Nivel B1 certificado',
        link: '#',
        skills: ['Reading', 'Writing', 'Listening', 'Speaking'],
      },
    ],
  },

  talks: {
    title: 'CHARLAS',
    subtitle: 'Y PRESENTACIONES',
    attendees: 'participantes',
    items: [
      {
        title: 'Presentación de la Plataforma nInA',
        event: 'Observatorio de la Industria - Sistema FIEC',
        date: '2025',
        location: 'Fortaleza, CE',
        description: 'Presentación técnica sobre la arquitectura, funcionalidades e implementación de la plataforma nInA, sistema de inteligencia artificial para análisis de datos industriales.',
        attendees: 20,
        topics: ['nInA', 'Arquitectura', 'Integración', 'IA'],
      },
      {
        title: 'Orquestación de Workflows con Temporal',
        event: 'Observatorio de la Industria - Sistema FIEC',
        date: '2026',
        location: 'Fortaleza, CE',
        description: 'Presentación sobre orquestación de flujos de trabajo, resiliencia y observabilidad usando Temporal en entornos de producción.',
        attendees: 20,
        topics: ['Temporal', 'Workflows', 'Orquestación', 'Resiliencia'],
      },
      {
        title: 'Trayectoria Profesional en Tecnología',
        event: 'Digital College',
        date: '2025',
        location: 'Fortaleza, CE',
        description: 'Charla sobre jornada profesional, desafíos, aprendizajes y experiencias prácticas en desarrollo de software y automatización de sistemas.',
        attendees: 50,
        topics: ['Carrera', 'Desarrollo', 'Experiencias', 'Tecnología'],
      },
    ],
  },

  experience: {
    title: 'EXPERIENCIA',
    subtitle: 'PROFESIONAL',
    items: [
      {
        company: 'Sistema FIEC / Observatorio de la Industria',
        role: 'Desarrollador Backend | Automatización y Datos',
        period: '2025 - Presente (Contratista)',
        description: [
          'Desarrollo y mantenimiento de sistemas críticos en producción (nInA, GovMonitor)',
          'Automatización de procesos y orquestación de workflows con n8n y Temporal',
          'Integración de sistemas y APIs, gestión de estado y resiliencia',
          'Trabajo con Python, Node.js y bases de datos relacionales y NoSQL',
        ],
        technologies: ['Python', 'Node.js', 'Temporal', 'n8n', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        company: 'Sistema FIEC / Observatorio de la Industria',
        role: 'Desarrollador Full Stack Intern',
        period: '2025 - 2025',
        description: [
          'Desarrollo fullstack de aplicaciones web y sistemas internos',
          'Implementación de interfaces con React y Next.js',
          'Creación de APIs y servicios backend con Node.js y Express',
          'Participación en migraciones de arquitectura y refactorizaciones',
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS'],
      },
      {
        company: 'Empresario y Desarrollador Full Stack',
        role: 'Desarrollador Autónomo',
        period: '2024 - Presente (Contratista)',
        description: [
          'Desarrollo de proyectos propios y prestación de servicios',
          'Creación de sistemas, automatizaciones e integraciones personalizadas',
          'Desarrollo de productos digitales y soluciones web',
          'Gestión de proyectos desde el concepto hasta la entrega',
        ],
        technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'PHP', 'Docker', 'Git'],
      },
    ],
  },

  contact: {
    title: 'CONVERSEMOS.',
    subtitle: '¿Tienes un proyecto en mente? ¡Transformemos tus ideas en realidad digital!',
    email: 'Email',
    location: 'Ubicación',
    locationText: 'Fortaleza, Ceará, Brasil',
    formTitle: 'Enviar un mensaje',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu email',
    subjectPlaceholder: 'Asunto',
    messagePlaceholder: 'Tu mensaje...',
    sending: 'Enviando...',
    sendButton: 'Enviar Mensaje',
    successTitle: '¡Mensaje enviado!',
    successDescription: 'Gracias por contactar. ¡Responderé pronto!',
    errorTitle: 'Error al enviar',
    errorDescription: 'Por favor completa los campos obligatorios.',
    formSubject: 'Nuevo contacto desde el portafolio',
  },

  navbar: {
    items: [
      { href: '#hero', label: 'Inicio' },
      { href: '#sobre', label: 'Sobre' },
      { href: '#projetos', label: 'Proyectos' },
      { href: '#habilidades', label: 'Habilidades' },
      { href: '#certificacoes', label: 'Certificaciones' },
      { href: '#palestras', label: 'Charlas' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#contato', label: 'Contacto' },
    ],
    downloadCV: 'Descargar CV',
    cvPath: '/[ES] Currículum - Iago Cunha - Desarrollador Full Stack.pdf',
  },

  footer: {
    rights: 'Todos los derechos reservados.',
  },
};
