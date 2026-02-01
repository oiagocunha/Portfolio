import { PortfolioContent } from '../types';

export const es: PortfolioContent = {
  hero: {
    greeting: '¡Hola! Me llamo',
    typewriter: [
      'Desarrollador Fullstack',
      'Creador de Experiencias Digitales',
      'Enfocado en Rendimiento',
      'Construyendo Soluciones Escalables',
    ],
    description: 'Transformo ideas en experiencias digitales extraordinarias. Como desarrollador Fullstack, creo soluciones que conectan personas, impulsan negocios y hacen la diferencia en el mundo digital.',
    button: 'Contactar',
    alt: 'Foto de Iago Cunha, desarrollador Fullstack',
  },

  about: {
    title: 'SOBRE MÍ.',
    stats: [
      { value: 1, suffix: '+', label: 'Años de Experiencia' },
      { value: 13, suffix: '+', label: 'Proyectos Completados' },
      { value: 5, suffix: '+', label: 'Tecnologías' },
      { value: 100, suffix: '%', label: 'Dedicación' },
    ],
    paragraphs: [
      'Soy Iago Cunha, desarrollador fullstack.',
      'Actúo en la construcción y evolución de sistemas distribuidos, trabajando entre frontend, backend y automatización. Mi rutina diaria involucra integrar servicios, orquestar flujos y manejar estado, fallos y dependencias entre sistemas.',
      'Tengo fuerte experiencia con automatización usando n8n y orquestación con Temporal, además del desarrollo de aplicaciones y servicios en Python, PHP y C#. En el frontend, trabajo principalmente con JavaScript, construyendo interfaces que se conectan a flujos y servicios existentes.',
      'He trabajado en migración de arquitecturas, mantenimiento de sistemas en operación y ajustes técnicos continuos, lidiando directamente con acoplamiento, observabilidad, confiabilidad y la evolución del código a lo largo del tiempo.',
    ],
  },

  specialties: {
    title: 'MIS',
    subtitle: 'ESPECIALIDADES',
    items: [
      {
        emoji: '💻',
        title: 'Desarrollo Frontend',
        description: 'Creación de interfaces modernas y responsivas utilizando React, JavaScript, HTML5 y CSS3. Enfoque en la experiencia del usuario y rendimiento.',
      },
      {
        emoji: '⚙️',
        title: 'Desarrollo Backend',
        description: 'Desarrollo de APIs robustas y escalables con Node.js, Python y PHP. Integración con bases de datos y servicios externos.',
      },
      {
        emoji: '📱',
        title: 'Diseño Responsivo',
        description: 'Creación de diseños que se adaptan perfectamente a todos los dispositivos, garantizando una experiencia consistente en cualquier pantalla.',
      },
      {
        emoji: '🌐',
        title: 'Sitio Web',
        description: 'Desarrollo de sitios web modernos y responsivos, garantizando la mejor experiencia para sus usuarios.',
      },
      {
        emoji: '🛒',
        title: 'Tienda Online',
        description: 'Creación de e-commerces intuitivos, optimizados para conversión y rendimiento.',
      },
      {
        emoji: '📰',
        title: 'Blog',
        description: 'Construcción de blogs y plataformas de contenido dinámicas, personalizadas para su necesidad.',
      },
    ],
  },

  technologies: {
    title: 'MIS',
    subtitle: 'TECNOLOGÍAS',
    categories: [
      {
        title: 'Lenguajes',
        content: 'JavaScript, TypeScript, Node.js, Python, PHP, HTML5, CSS3',
      },
      {
        title: 'Frameworks',
        content: 'React, Next.js, Express, Vue.js, Laravel',
      },
      {
        title: 'Herramientas',
        content: 'Git, Docker, VS Code, Vite, Webpack, Babel, Figma',
      },
      {
        title: 'Bases de Datos',
        content: 'MySQL, PostgreSQL, MongoDB, SQLite, Supabase',
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
        title: 'Formación React Developer',
        issuer: 'Digital Innovation One (DIO)',
        date: '2024',
        credential: 'Certificado de finalización de curso React',
        link: '#',
        skills: ['React', 'Hooks', 'Context API', 'Router'],
      },
      {
        title: 'JavaScript Moderno (ES6+)',
        issuer: 'Udemy',
        date: '2024',
        credential: 'Dominio de JavaScript ES6+',
        link: '#',
        skills: ['ES6+', 'Async/Await', 'Promises', 'Modules'],
      },
      {
        title: 'Node.js y Express',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Backend con Node.js',
        link: '#',
        skills: ['Node.js', 'Express', 'REST API', 'MongoDB'],
      },
      {
        title: 'Tailwind CSS',
        issuer: 'Scrimba',
        date: '2024',
        credential: 'Experto en Framework CSS',
        link: '#',
        skills: ['Tailwind', 'CSS', 'Responsive Design'],
      },
    ],
  },

  talks: {
    title: 'CHARLAS',
    subtitle: 'Y PRESENTACIONES',
    attendees: 'participantes',
    items: [
      {
        title: 'Introducción a React: Construyendo Interfaces Modernas',
        event: 'Tech Talks - Comunidad Local',
        date: '2024',
        location: 'Fortaleza, CE',
        description: 'Charla introductoria sobre React, abordando conceptos fundamentales, hooks y buenas prácticas de desarrollo.',
        attendees: 50,
        topics: ['React', 'Hooks', 'Components', 'Best Practices'],
      },
      {
        title: 'JavaScript Moderno: Del ES6 al ES2024',
        event: 'Dev Meetup',
        date: '2024',
        location: 'Online',
        description: 'Presentación sobre las principales características del JavaScript moderno y cómo aplicarlas en el día a día.',
        attendees: 80,
        topics: ['JavaScript', 'ES6+', 'Async/Await', 'Modules'],
      },
    ],
  },

  experience: {
    title: 'EXPERIENCIA',
    subtitle: 'PROFESIONAL',
    items: [
      {
        company: 'Freelancer',
        role: 'Desarrollador Fullstack',
        period: '2024 - Presente',
        description: [
          'Desarrollo de aplicaciones web completas utilizando React, TypeScript y Node.js',
          'Creación de e-commerces y sitios institucionales responsivos',
          'Integración con APIs RESTful y bases de datos MongoDB y PostgreSQL',
          'Implementación de soluciones de automatización con n8n',
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'n8n'],
      },
      {
        company: 'Observatorio de la Industria - FIEB',
        role: 'Desarrollador Frontend',
        period: '2024',
        description: [
          'Desarrollo del Simulador CLT para beneficiarios de Bolsa Família',
          'Interfaz responsiva con validaciones complejas de formularios',
          'Integración con APIs gubernamentales',
          'Enfoque en accesibilidad y rendimiento',
        ],
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
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
