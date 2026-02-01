import { PortfolioContent } from '../types';

export const pt: PortfolioContent = {
  hero: {
    greeting: 'Olá! Me chamo',
    typewriter: [
      'Backend Developer',
      'Especialista em Automação',
      'Integrador de Sistemas',
      'Desenvolvedor de Soluções',
    ],
    description: 'Desenvolvedor backend focado em automação, integração de sistemas e orquestração de fluxos. Atuo com Python, Node.js e ferramentas como n8n e Temporal para construir soluções robustas e escaláveis.',
    button: 'Entre em Contato',
    alt: 'Foto de Iago Cunha, Backend Developer',
  },

  about: {
    title: 'SOBRE MIM.',
    stats: [
      { value: 2, suffix: '+', label: 'Anos de Experiência' },
      { value: 15, suffix: '+', label: 'Projetos Entregues' },
      { value: 10, suffix: '+', label: 'Tecnologias' },
      { value: 3, suffix: '', label: 'Palestras' },
    ],
    paragraphs: [
      'Sou Iago Cunha, desenvolvedor backend.',
      'Atuo na construção e evolução de sistemas distribuídos, trabalhando entre backend, automação e integração. Meu dia a dia envolve orquestrar fluxos, integrar serviços e lidar com estado, falhas e dependências entre sistemas.',
      'Tenho forte atuação com automação usando n8n e orquestração com Temporal, além do desenvolvimento de aplicações e serviços em Python, Node.js e PHP. No frontend, trabalho com React e Next.js para construir interfaces conectadas a esses fluxos.',
      'Já atuei em migração de arquiteturas, manutenção de sistemas críticos em produção e ajustes técnicos contínuos, lidando com acoplamento, observabilidade, confiabilidade e evolução de código.',
    ],
  },

  specialties: {
    title: 'MINHAS',
    subtitle: 'ESPECIALIDADES',
    items: [
      {
        emoji: '⚙️',
        title: 'Backend Development',
        description: 'Desenvolvimento de APIs, serviços e integrações com Python, Node.js, Express e PHP. Foco em robustez, escalabilidade e manutenibilidade.',
      },
      {
        emoji: '🔄',
        title: 'Automação de Processos',
        description: 'Implementação de fluxos automatizados com n8n, orquestração com Temporal e integração entre sistemas para otimizar operações.',
      },
      {
        emoji: '🔗',
        title: 'Integração de Sistemas',
        description: 'Conexão e sincronização de serviços, APIs e bases de dados. Experiência com REST APIs, webhooks e mensageria.',
      },
      {
        emoji: '💾',
        title: 'Bancos de Dados',
        description: 'Modelagem, otimização e gestão de dados com PostgreSQL, MySQL e MongoDB. Foco em performance e integridade.',
      },
      {
        emoji: '💻',
        title: 'Desenvolvimento Frontend',
        description: 'Construção de interfaces modernas com React, Next.js e Tailwind CSS. Integração com backends e APIs.',
      },
      {
        emoji: '🚀',
        title: 'Deploy e DevOps',
        description: 'Configuração de ambientes, containerização com Docker e versionamento com Git/GitHub/GitLab.',
      },
    ],
  },

  technologies: {
    title: 'MINHAS',
    subtitle: 'TECNOLOGIAS',
    categories: [
      {
        title: 'Linguagens',
        content: 'Python, JavaScript, TypeScript, PHP',
      },
      {
        title: 'Backend & Automação',
        content: 'Node.js, Express, n8n, Temporal, REST APIs',
      },
      {
        title: 'Frontend',
        content: 'React, Next.js, Tailwind CSS',
      },
      {
        title: 'Bancos de Dados',
        content: 'PostgreSQL, MySQL, MongoDB',
      },
      {
        title: 'Ferramentas',
        content: 'Git, GitHub, GitLab, Docker, Vite, Figma',
      },
    ],
  },

  projects: {
    title: 'MEU PORTFÓLIO.',
    demo: 'Demo',
    code: 'Código',
    items: [
      {
        title: 'Simulador CLT - Sistema Governamental',
        description: 'Ferramenta oficial para beneficiários do Bolsa Família. Interface responsiva e validações complexas.',
        demo: 'https://simuladorclt.observatorio.ind.br/',
        image: '/images/simuladorCLT.png',
        alt: 'Thumbnail do projeto Simulador CLT',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
      },
      {
        title: 'Xuxiê - E-commerce',
        description: 'Loja virtual responsiva com integração ViaCEP e pedidos via WhatsApp.',
        demo: 'https://xuxie-croche.vercel.app/',
        image: '/images/xuxie-croche.png',
        alt: 'Thumbnail do projeto Xuxiê E-commerce',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'WhatsApp API'],
      },
      {
        title: 'Sistema de Gestão de Notas',
        description: 'Aplicação desktop com Python/Tkinter para gerenciamento de notas.',
        repo: 'https://github.com/oiagocunha/sistema_notas',
        image: '/images/sistema_notas.png',
        alt: 'Thumbnail do Sistema de Gestão de Notas',
        technologies: ['Python', 'Tkinter', 'SQLite'],
      },
      {
        title: 'QR Code Generator',
        description: 'Geração de QR Codes com exportação de imagens.',
        demo: 'https://link-to-qr-code.vercel.app/',
        repo: 'https://github.com/oiagocunha/link-to-qrCode',
        image: '/images/QRCode.png',
        alt: 'Thumbnail do QR Code Generator',
        technologies: ['React', 'JavaScript', 'QR Library'],
      },
      {
        title: 'Sistema de Gestão de Produtos',
        description: 'CRUD com persistência local em LocalStorage.',
        demo: 'https://oiagocunha.github.io/Cadastro_Produtos/',
        repo: 'https://github.com/oiagocunha/Cadastro_Produtos',
        image: '/images/CRUD.png',
        alt: 'Thumbnail do Sistema de Gestão de Produtos',
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      },
    ],
  },

  certifications: {
    title: 'CERTIFICAÇÕES',
    subtitle: 'E CURSOS',
    viewCert: 'Ver Certificado',
    items: [
      {
        title: 'Python Completo (Mundos 1, 2 e 3)',
        issuer: 'Curso em Vídeo',
        date: '2024-2026',
        credential: '3 módulos concluídos + 4º em andamento',
        link: '#',
        skills: ['Python', 'POO', 'Estruturas de Dados', 'Algoritmos'],
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
        title: 'Lógica de Programação',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Fundamentos de lógica e algoritmos',
        link: '#',
        skills: ['Algoritmos', 'Lógica', 'Estruturas de Controle'],
      },
      {
        title: 'Programa Geração Tech',
        issuer: 'Ger Tech',
        date: '2024',
        credential: 'Formação em tecnologia',
        link: '#',
        skills: ['Desenvolvimento Web', 'Backend', 'Frontend'],
      },
      {
        title: 'Inglês Básico',
        issuer: 'Cursos de Idiomas',
        date: '2023',
        credential: 'Nível B1 comprovado',
        link: '#',
        skills: ['Reading', 'Writing', 'Listening', 'Speaking'],
      },
    ],
  },

  talks: {
    title: 'PALESTRAS',
    subtitle: 'E APRESENTAÇÕES',
    attendees: 'participantes',
    items: [
      {
        title: 'Apresentação da Plataforma nInA',
        event: 'Observatório da Indústria - Sistema FIEC',
        date: '2025',
        location: 'Fortaleza, CE',
        description: 'Apresentação técnica sobre a arquitetura, funcionalidades e implementação da plataforma nInA, sistema de inteligência artificial para análise de dados industriais.',
        attendees: 20,
        topics: ['nInA', 'Arquitetura', 'Integração', 'IA'],
      },
      {
        title: 'Orquestração de Workflows com Temporal',
        event: 'Observatório da Indústria - Sistema FIEC',
        date: '2026',
        location: 'Fortaleza, CE',
        description: 'Apresentação sobre orquestração de fluxos de trabalho, resiliência e observabilidade usando Temporal em ambientes de produção.',
        attendees: 20,
        topics: ['Temporal', 'Workflows', 'Orquestração', 'Resiliência'],
      },
      {
        title: 'Trajetória Profissional em Tecnologia',
        event: 'Digital College',
        date: '2025',
        location: 'Fortaleza, CE',
        description: 'Palestra sobre jornada profissional, desafios, aprendizados e experiências práticas no desenvolvimento de software e automação de sistemas.',
        attendees: 50,
        topics: ['Carreira', 'Desenvolvimento', 'Experiências', 'Tecnologia'],
      },
    ],
  },

  experience: {
    title: 'EXPERIÊNCIA',
    subtitle: 'PROFISSIONAL',
    items: [
      {
        company: 'Sistema FIEC / Observatório da Indústria',
        role: 'Backend Developer | Automation & Data',
        period: '2025 - Presente (PJ)',
        description: [
          'Desenvolvimento e manutenção de sistemas críticos em produção (nInA, GovMonitor)',
          'Automação de processos e orquestração de workflows com n8n e Temporal',
          'Integração de sistemas e APIs, gestão de estado e resiliência',
          'Trabalho com Python, Node.js e bancos de dados relacionais e NoSQL',
        ],
        technologies: ['Python', 'Node.js', 'Temporal', 'n8n', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        company: 'Sistema FIEC / Observatório da Indústria',
        role: 'Full Stack Developer Intern',
        period: '2025 - 2025',
        description: [
          'Desenvolvimento fullstack de aplicações web e sistemas internos',
          'Implementação de interfaces com React e Next.js',
          'Criação de APIs e serviços backend com Node.js e Express',
          'Participação em migrações de arquitetura e refatorações',
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS'],
      },
      {
        company: 'Empresário & Desenvolvedor Full Stack',
        role: 'Desenvolvedor Autônomo',
        period: '2024 - Presente (PJ)',
        description: [
          'Desenvolvimento de projetos próprios e prestação de serviços',
          'Criação de sistemas, automações e integrações customizadas',
          'Desenvolvimento de produtos digitais e soluções web',
          'Gestão de projetos do conceito à entrega',
        ],
        technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'PHP', 'Docker', 'Git'],
      },
    ],
  },

  contact: {
    title: 'VAMOS CONVERSAR.',
    subtitle: 'Tem um projeto em mente? Vamos transformar suas ideias em realidade digital!',
    email: 'Email',
    location: 'Localização',
    locationText: 'Fortaleza, Ceará, Brasil',
    formTitle: 'Envie uma mensagem',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'Seu email',
    subjectPlaceholder: 'Assunto',
    messagePlaceholder: 'Sua mensagem...',
    sending: 'Enviando...',
    sendButton: 'Enviar Mensagem',
    successTitle: 'Mensagem enviada!',
    successDescription: 'Obrigado pelo contato. Responderei em breve!',
    errorTitle: 'Falha no envio',
    errorDescription: 'Preencha os campos obrigatórios.',
    formSubject: 'Novo contato do portfólio',
  },

  navbar: {
    items: [
      { href: '#hero', label: 'Início' },
      { href: '#sobre', label: 'Sobre' },
      { href: '#projetos', label: 'Projetos' },
      { href: '#habilidades', label: 'Habilidades' },
      { href: '#certificacoes', label: 'Certificações' },
      { href: '#palestras', label: 'Palestras' },
      { href: '#experiencia', label: 'Experiência' },
      { href: '#contato', label: 'Contato' },
    ],
    downloadCV: 'Baixar CV',
    cvPath: '/Currículo - Iago Cunha - Desenvolvedor FullStack.pdf',
  },

  footer: {
    rights: 'Todos os direitos reservados.',
  },
};
