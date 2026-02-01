import { PortfolioContent } from '../types';

export const pt: PortfolioContent = {
  hero: {
    greeting: 'Olá! Me chamo',
    typewriter: [
      'Desenvolvedor Fullstack',
      'Criador de Experiências Digitais',
      'Focado em Performance',
      'Construindo Soluções Escaláveis',
    ],
    description: 'Transformo ideias em experiências digitais extraordinárias. Como desenvolvedor Fullstack, crio soluções que conectam pessoas, impulsionam negócios e fazem a diferença no mundo digital.',
    button: 'Entre em Contato',
    alt: 'Foto de Iago Cunha, desenvolvedor Fullstack',
  },

  about: {
    title: 'SOBRE MIM.',
    stats: [
      { value: 1, suffix: '+', label: 'Anos de Experiência' },
      { value: 13, suffix: '+', label: 'Projetos Concluídos' },
      { value: 5, suffix: '+', label: 'Tecnologias' },
      { value: 100, suffix: '%', label: 'Dedicação' },
    ],
    paragraphs: [
      'Sou Iago Cunha, desenvolvedor fullstack.',
      'Atuo na construção e evolução de sistemas distribuídos, trabalhando entre frontend, backend e automação. Meu dia a dia envolve integrar serviços, orquestrar fluxos e lidar com estado, falhas e dependências entre sistemas.',
      'Tenho forte atuação com automação usando n8n e orquestração com Temporal, além do desenvolvimento de aplicações e serviços em Python, PHP e C#. No frontend, trabalho principalmente com JavaScript, construindo interfaces que se conectam a fluxos e serviços já existentes.',
      'Já atuei em migração de arquiteturas, manutenção de sistemas em operação e ajustes técnicos contínuos, lidando diretamente com acoplamento, observabilidade, confiabilidade e a evolução do código ao longo do tempo.',
    ],
  },

  specialties: {
    title: 'MINHAS',
    subtitle: 'ESPECIALIDADES',
    items: [
      {
        emoji: '💻',
        title: 'Desenvolvimento Frontend',
        description: 'Criação de interfaces modernas e responsivas utilizando React, JavaScript, HTML5 e CSS3. Foco na experiência do usuário e performance.',
      },
      {
        emoji: '⚙️',
        title: 'Desenvolvimento Backend',
        description: 'Desenvolvimento de APIs robustas e escaláveis com Node.js, Python e PHP. Integração com bancos de dados e serviços externos.',
      },
      {
        emoji: '📱',
        title: 'Design Responsivo',
        description: 'Criação de layouts que se adaptam perfeitamente a todos os dispositivos, garantindo uma experiência consistente em qualquer tela.',
      },
      {
        emoji: '🌐',
        title: 'Website',
        description: 'Desenvolvimento de sites modernos e responsivos, garantindo a melhor experiência para seus usuários.',
      },
      {
        emoji: '🛒',
        title: 'Loja Online',
        description: 'Criação de e-commerces intuitivos, otimizados para conversão e performance.',
      },
      {
        emoji: '📰',
        title: 'Blog',
        description: 'Construção de blogs e plataformas de conteúdo dinâmicas, personalizadas para sua necessidade.',
      },
    ],
  },

  technologies: {
    title: 'MINHAS',
    subtitle: 'TECNOLOGIAS',
    categories: [
      {
        title: 'Linguagens',
        content: 'JavaScript, TypeScript, Node.js, Python, PHP, HTML5, CSS3',
      },
      {
        title: 'Frameworks',
        content: 'React, Next.js, Express, Vue.js, Laravel',
      },
      {
        title: 'Ferramentas',
        content: 'Git, Docker, VS Code, Vite, Webpack, Babel, Figma',
      },
      {
        title: 'Bancos de Dados',
        content: 'MySQL, PostgreSQL, MongoDB, SQLite, Supabase',
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
        title: 'Formação React Developer',
        issuer: 'Digital Innovation One (DIO)',
        date: '2024',
        credential: 'Certificado de conclusão de curso React',
        link: '#',
        skills: ['React', 'Hooks', 'Context API', 'Router'],
      },
      {
        title: 'JavaScript Moderno (ES6+)',
        issuer: 'Udemy',
        date: '2024',
        credential: 'Domínio de JavaScript ES6+',
        link: '#',
        skills: ['ES6+', 'Async/Await', 'Promises', 'Modules'],
      },
      {
        title: 'Node.js e Express',
        issuer: 'Curso em Vídeo',
        date: '2024',
        credential: 'Backend com Node.js',
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
    title: 'PALESTRAS',
    subtitle: 'E APRESENTAÇÕES',
    attendees: 'participantes',
    items: [
      {
        title: 'Introdução ao React: Construindo Interfaces Modernas',
        event: 'Tech Talks - Comunidade Local',
        date: '2024',
        location: 'Fortaleza, CE',
        description: 'Palestra introdutória sobre React, abordando conceitos fundamentais, hooks e boas práticas de desenvolvimento.',
        attendees: 50,
        topics: ['React', 'Hooks', 'Components', 'Best Practices'],
      },
      {
        title: 'JavaScript Moderno: Do ES6 ao ES2024',
        event: 'Dev Meetup',
        date: '2024',
        location: 'Online',
        description: 'Apresentação sobre as principais features do JavaScript moderno e como aplicá-las no dia a dia.',
        attendees: 80,
        topics: ['JavaScript', 'ES6+', 'Async/Await', 'Modules'],
      },
    ],
  },

  experience: {
    title: 'EXPERIÊNCIA',
    subtitle: 'PROFISSIONAL',
    items: [
      {
        company: 'Freelancer',
        role: 'Desenvolvedor Fullstack',
        period: '2024 - Presente',
        description: [
          'Desenvolvimento de aplicações web completas utilizando React, TypeScript e Node.js',
          'Criação de e-commerces e sites institucionais responsivos',
          'Integração com APIs RESTful e bancos de dados MongoDB e PostgreSQL',
          'Implementação de soluções de automação com n8n',
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'n8n'],
      },
      {
        company: 'Observatório da Indústria - FIEB',
        role: 'Desenvolvedor Frontend',
        period: '2024',
        description: [
          'Desenvolvimento do Simulador CLT para beneficiários do Bolsa Família',
          'Interface responsiva com validações complexas de formulários',
          'Integração com APIs governamentais',
          'Foco em acessibilidade e performance',
        ],
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
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
