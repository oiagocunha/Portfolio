# 🚀 Portfólio Profissional - Iago Cunha

> **Backend Developer | Automation & Data**

## 👨‍💻 Sobre o Desenvolvedor

**Iago Cunha** - Backend Developer focado em automação, integração de sistemas e orquestração de fluxos

- ⚙️ Especialista em **Python**, **Node.js** e **Automação**
- 🔄 Experiência com **n8n**, **Temporal** e **Integração de Sistemas**
- 🛠️ Atuação em sistemas críticos: **nInA**, **GovMonitor**
- 🎤 Palestrante em eventos técnicos (Digital College, Observatório da Indústria)

## 🌟 Características do Portfólio

### ⚡ Arquitetura Moderna
- React 18.3 + TypeScript 5.7 + Vite 7.3
- Sistema i18n próprio (PT/EN/ES)
- Design Tokens centralizados
- Code splitting e lazy loading
- Build otimizado: 162 KB gzipped

### 🎨 Design System
- 10 categorias de tokens (typography, spacing, transitions, etc.)
- Componentes reutilizáveis com shadcn/ui
- Dark/Light theme com persistência
- Layout responsivo mobile-first

### 🔧 Funcionalidades Técnicas
- **i18n System**: Internacionalização sem dependências externas
- **Lazy Loading**: 8 seções carregadas sob demanda
- **Design Tokens**: Consistência visual em 13 componentes
- **Layouts Pattern**: Separação de providers e estrutura
- **TypeScript Strict**: Type-safety completo

## 📐 Stack Tecnológica

### Core
```typescript
React 18.3.1        // UI Library
TypeScript 5.7.3    // Type Safety
Vite 7.3.1          // Build Tool
Tailwind CSS 3.4.1  // Styling
```

### UI & Components
```typescript
shadcn/ui           // Component Library (Radix UI)
Framer Motion       // Animations
Lucide React        // Icons
React Hook Form     // Forms
Zod                 // Validation
```

### Architecture
```typescript
Custom i18n         // Internationalization (zero-dependency)
Design Tokens       // Design System
Lazy Loading        // Performance
Layouts Pattern     // Structure
```

## 📂 Arquitetura do Projeto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── portfolio/          # Seções principais
│   │   ├── shared/             # Componentes reutilizáveis (6)
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── CertificationCard.tsx
│   │   │   └── index.ts        # Barrel exports
│   │   └── ui/                 # shadcn/ui components
│   ├── i18n/                   # Sistema i18n próprio
│   │   ├── types.ts            # PortfolioContent interface
│   │   ├── I18nProvider.tsx    # Context + Hook
│   │   └── locales/
│   │       ├── pt.ts
│   │       ├── en.ts
│   │       └── es.ts
│   ├── constants/
│   │   ├── design-tokens.ts    # 10 categorias de tokens
│   │   └── icons.ts
│   ├── layouts/
│   │   └── MainLayout.tsx      # Layout pattern
│   └── pages/
│       └── Index.tsx           # Lazy loading + Suspense
├── docs/
│   ├── README.md               # Este arquivo
│   └── ARCHITECTURE.md         # Documentação técnica
└── CONFIG.md                   # Guia de configurações
```

## Projetos em Destaque

### 1. **Simulador CLT** - Sistema Governamental
- Ferramenta oficial para beneficiários do Bolsa Família
### Backend & Automation
**Python | Node.js | n8n | Temporal**

#### Sistemas Críticos
- **nInA** - Núcleo de Inteligência Artificial (FIEC)
  - Orquestração de workflows com Temporal
  - Automações inteligentes com n8n
  - Integração multi-sistemas
  
- **GovMonitor** - Observatório da Indústria (FIEC)
  - Backend Node.js + Python
  - Raspagem e processamento de dados governamentais
  - APIs REST para dashboards de indicadores

#### Experiência Técnica
- ⚙️ **Automação**: Python scripts, n8n workflows, Temporal orchestration
- 🔄 **Integração**: APIs REST/SOAP, webhooks, message queues
- 🗄️ **Bancos de Dados**: PostgreSQL, MongoDB, Redis
- 🐳 **DevOps**: Docker, Git, Linux servers

Este é meu portfólio profissional, demonstrando capacidade de construir arquiteturas escaláveis, implementar design systems consistentes e manter código limpo e type-safe. O projeto reflete as mesmas práticas técnicas aplicadas em sistemas de produção.

## 🚀 Performance & Métricas

### Build Performance
- ✅ **Gzipped CSS**: 8.18 KB (otimização de ~34% vs. baseline)
- ✅ **Main Bundle**: 162.17 KB gzipped
- ✅ **Chunks**: 14 arquivos com code splitting
- ✅ **Módulos**: 2136 transformados com SWC

### Otimizações Aplicadas
- **Lazy Loading**: 8 seções carregadas sob demanda
- **Code Splitting**: Bundle dividido em 14 chunks
- **Design Tokens**: Redução de ~64% em componentes Card
- **Tree Shaking**: Eliminação automática de código não usado
- **TypeScript Strict**: Zero erros de tipo

### Developer Experience
- **Type Safety**: Interface `PortfolioContent` com 100% de cobertura
- **i18n System**: Zero dependências, hot reload funcional
- **Barrel Exports**: Importações organizadas via `index.ts`
- **Layouts Pattern**: Separação clara de providers e estrutura

## 📈 Demonstração de Habilidades

### Backend Development
- Orquestração de workflows com Temporal
- Automações complexas com n8n
- Integração de sistemas legados e modernos
- APIs REST com validação robusta
- Processamento de dados em larga escala

### Frontend Architecture
- Design system escalável com tokens centralizados
- Sistema i18n próprio (PT/EN/ES)
- Componentes reutilizáveis (shadcn/ui + custom)
- Lazy loading e code splitting estratégico
- TypeScript strict mode end-to-end

### DevOps & Performance
- Build otimizado (Vite 7.3 + SWC)
- Docker containerization
- Git workflows profissionais
- Monitoramento de bundle size
- CI/CD best practices

## Licença e Uso

**⚠️ ATENÇÃO: Este é um projeto pessoal com direitos autorais protegidos.**

- ❌ **NÃO permitido**: Cópia, reprodução ou uso comercial
- ❌ **NÃO permitido**: Criação de trabalhos derivados
- ❌ **NÃO permitido**: Reutilização para outros portfólios
- ✅ **Permitido**: Visualização para fins educacionais e avaliação

Ver arquivo [LICENSE](./LICENSE) para detalhes completos.

## Contato Profissional

Interessado em colaborar ou discutir oportunidades?

- 💼 **LinkedIn**: [linkedin.com/in/oiagocunha](https://linkedin.com/in/oiagocunha)
- 💻 **GitHub**: [github.com/oiagocunha](https://github.com/oiagocunha)  
- 📧 **Email**: dev.iagocunha@gmail.com
- 🌐 **Portfólio**: [portfolio-oiagocunha.vercel.app](https://portfolio-oiagocunha.vercel.app)

---

## 🏆 Reconhecimentos

Este portfólio representa **1 ano e meio de experiência** em desenvolvimento web, combinando criatividade, técnica e paixão por tecnologia para criar experiências digitais excepcionais.

**Desenvolvido com ❤️ por Iago Cunha** | *Transformando ideias em realidade digital*
