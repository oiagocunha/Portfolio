export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  colors?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  event: string;
}

export const categories: Category[] = [
  {
    id: "baloes-latex",
    name: "Balões de Látex",
    icon: "🎈",
    description: "Balões coloridos em diversos tamanhos e cores",
    productCount: 45,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
  },
  {
    id: "baloes-metalizados",
    name: "Balões Metalizados",
    icon: "✨",
    description: "Balões metalizados com formatos especiais",
    productCount: 32,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop",
  },
  {
    id: "decoracao",
    name: "Decoração",
    icon: "🎉",
    description: "Itens para decoração de festas e eventos",
    productCount: 58,
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=300&fit=crop",
  },
  {
    id: "descartaveis",
    name: "Descartáveis",
    icon: "🍽️",
    description: "Pratos, copos e talheres temáticos",
    productCount: 40,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
  },
  {
    id: "velas-topo",
    name: "Velas e Topos",
    icon: "🕯️",
    description: "Velas decorativas e topos de bolo",
    productCount: 25,
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=300&fit=crop",
  },
  {
    id: "tematicos",
    name: "Kits Temáticos",
    icon: "🎊",
    description: "Kits completos para festas temáticas",
    productCount: 20,
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&h=300&fit=crop",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Pacote 50 Balões Látex Coloridos",
    description: "Pacote com 50 balões de látex em cores variadas. Ideais para decoração de festas de aniversário, chá de bebê e eventos corporativos. Alta qualidade e durabilidade.",
    price: 24.90,
    originalPrice: 34.90,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
    category: "baloes-latex",
    tags: ["balões", "látex", "colorido", "festa"],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true,
    colors: ["vermelho", "azul", "amarelo", "verde", "rosa"],
  },
  {
    id: "2",
    name: "Balão Metalizado Estrela Dourada 45cm",
    description: "Balão metalizado em formato de estrela na cor dourada. Perfeito para decoração de festas elegantes, formaturas e eventos especiais.",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&h=500&fit=crop",
    category: "baloes-metalizados",
    tags: ["metalizado", "estrela", "dourado", "decoração"],
    rating: 4.9,
    reviews: 189,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Kit Decoração Festa Tropical",
    description: "Kit completo para festa tropical com folhas, flores, balões e faixa decorativa. Inclui 30 balões, 10 folhas tropicais e 1 faixa de parabéns.",
    price: 89.90,
    originalPrice: 119.90,
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&h=500&fit=crop",
    category: "decoracao",
    tags: ["kit", "tropical", "decoração", "festa"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Prato Descartável Tema Unicórnio (10un)",
    description: "Pacote com 10 pratos descartáveis temáticos de unicórnio. Feitos em papelão resistente com impressão de alta qualidade.",
    price: 18.90,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop",
    category: "descartaveis",
    tags: ["prato", "unicórnio", "descartável", "temático"],
    rating: 4.5,
    reviews: 98,
    inStock: true,
  },
  {
    id: "5",
    name: "Vela Número Glitter (0-9)",
    description: "Vela decorativa com glitter para bolo de aniversário. Disponível em todos os números de 0 a 9. Brilho intenso que encanta em fotos.",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&h=500&fit=crop",
    category: "velas-topo",
    tags: ["vela", "glitter", "bolo", "aniversário"],
    rating: 4.6,
    reviews: 312,
    inStock: true,
  },
  {
    id: "6",
    name: "Kit Festa Safari Completo (20 pessoas)",
    description: "Kit completo para festa safari para 20 convidados. Inclui pratos, copos, guardanapos, toalha de mesa, convites e decoração.",
    price: 149.90,
    originalPrice: 189.90,
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=500&h=500&fit=crop",
    category: "tematicos",
    tags: ["kit", "safari", "completo", "festa infantil"],
    rating: 4.9,
    reviews: 87,
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "Arco de Balões Desconstruído Pastel",
    description: "Kit para montar arco de balões desconstruído em tons pastel. Inclui 120 balões, fita e guia de montagem. Resultado incrível para fotos!",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1464349153159-968a115e0258?w=500&h=500&fit=crop",
    category: "baloes-latex",
    tags: ["arco", "balões", "pastel", "decoração"],
    rating: 4.8,
    reviews: 445,
    inStock: true,
    featured: true,
  },
  {
    id: "8",
    name: "Balão Metalizado Número (0-9) 100cm",
    description: "Balão metalizado gigante em formato de número. 100cm de altura, perfeito para decoração de aniversários. Disponível em dourado, prata e rosé.",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1520616497079-5c7afb4304be?w=500&h=500&fit=crop",
    category: "baloes-metalizados",
    tags: ["metalizado", "número", "gigante", "aniversário"],
    rating: 4.7,
    reviews: 267,
    inStock: true,
  },
  {
    id: "9",
    name: "Cortina de Papel Crepom Metalizada",
    description: "Cortina decorativa de papel crepom metalizado. Dimensões 1m x 2m. Ideal para fundo de mesa e photobooth.",
    price: 15.90,
    originalPrice: 22.90,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop",
    category: "decoracao",
    tags: ["cortina", "metalizado", "decoração", "photobooth"],
    rating: 4.4,
    reviews: 178,
    inStock: true,
  },
  {
    id: "10",
    name: "Kit Copo + Canudo Neon (20un)",
    description: "Kit com 20 copos coloridos neon e canudos combinando. Perfeito para festas com tema neon, baladas e festas teen.",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=500&h=500&fit=crop",
    category: "descartaveis",
    tags: ["copo", "canudo", "neon", "festa"],
    rating: 4.3,
    reviews: 145,
    inStock: true,
  },
  {
    id: "11",
    name: "Topo de Bolo Acrílico Personalizado",
    description: "Topo de bolo em acrílico espelhado dourado. Texto 'Parabéns' com design elegante. Reutilizável e resistente.",
    price: 25.90,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&h=500&fit=crop",
    category: "velas-topo",
    tags: ["topo", "bolo", "acrílico", "personalizado"],
    rating: 4.8,
    reviews: 203,
    inStock: true,
  },
  {
    id: "12",
    name: "Kit Festa Espacial Galáxia (15 pessoas)",
    description: "Kit temático espacial para 15 convidados. Decoração com planetas, estrelas e foguetes. Visual espetacular para festas infantis.",
    price: 129.90,
    originalPrice: 159.90,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=500&fit=crop",
    category: "tematicos",
    tags: ["kit", "espacial", "galáxia", "festa infantil"],
    rating: 4.9,
    reviews: 67,
    inStock: true,
  },
  {
    id: "13",
    name: "Balões Confete Transparente (10un)",
    description: "Balões transparentes com confete dourado no interior. Efeito visual incrível quando inflados com hélio. Pacote com 10 unidades.",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1464349153159-968a115e0258?w=500&h=500&fit=crop",
    category: "baloes-latex",
    tags: ["balão", "confete", "transparente", "hélio"],
    rating: 4.6,
    reviews: 389,
    inStock: true,
  },
  {
    id: "14",
    name: "Guirlanda de Bandeirolas Coloridas 5m",
    description: "Guirlanda de bandeirolas coloridas com 5 metros de comprimento. Feita em tecido reutilizável, perfeita para decorar qualquer ambiente.",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&h=500&fit=crop",
    category: "decoracao",
    tags: ["guirlanda", "bandeirola", "decoração", "colorido"],
    rating: 4.5,
    reviews: 156,
    inStock: true,
  },
  {
    id: "15",
    name: "Balão Metalizado Coração Vermelho 90cm",
    description: "Balão metalizado gigante em formato de coração vermelho. 90cm, perfeito para decoração de casamentos, Dia dos Namorados e chás.",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1520616497079-5c7afb4304be?w=500&h=500&fit=crop",
    category: "baloes-metalizados",
    tags: ["metalizado", "coração", "vermelho", "casamento"],
    rating: 4.7,
    reviews: 198,
    inStock: true,
    featured: true,
  },
  {
    id: "16",
    name: "Kit Chá Revelação Azul e Rosa",
    description: "Kit completo para chá revelação com balões azuis e rosas, confete, caixa surpresa e acessórios. Momento inesquecível garantido!",
    price: 99.90,
    originalPrice: 129.90,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
    category: "tematicos",
    tags: ["chá revelação", "azul", "rosa", "bebê"],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    featured: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    avatar: "MS",
    rating: 5,
    comment: "A decoração da festa da minha filha ficou perfeita! Os balões são de ótima qualidade e as cores são lindas. Recomendo demais!",
    event: "Aniversário Infantil",
  },
  {
    id: "2",
    name: "João Santos",
    avatar: "JS",
    rating: 5,
    comment: "Comprei o kit completo para o chá de bebê e superou todas as expectativas. Entrega rápida e tudo muito bem embalado.",
    event: "Chá de Bebê",
  },
  {
    id: "3",
    name: "Ana Oliveira",
    avatar: "AO",
    rating: 4,
    comment: "Ótimos produtos e preços justos. O arco de balões desconstruído ficou maravilhoso! Minha festa ficou digna de revista.",
    event: "Festa de 30 anos",
  },
  {
    id: "4",
    name: "Carlos Mendes",
    avatar: "CM",
    rating: 5,
    comment: "Já é a terceira vez que compro aqui. Qualidade impecável e atendimento excelente. Minha esposa amou os balões metalizados!",
    event: "Bodas de Casamento",
  },
  {
    id: "5",
    name: "Fernanda Lima",
    avatar: "FL",
    rating: 5,
    comment: "Fiz a festa temática de safari para meu filho e ficou incrível! Todo mundo elogiou. O kit veio completo e muito bem organizado.",
    event: "Aniversário de 5 anos",
  },
  {
    id: "6",
    name: "Roberto Costa",
    avatar: "RC",
    rating: 4,
    comment: "Produtos de qualidade e bom custo-benefício. Os descartáveis temáticos são lindos e resistentes. Vou comprar novamente com certeza!",
    event: "Festa Corporativa",
  },
];

export const formatPrice = (price: number): string => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
