# 📐 Arquitetura do Portfólio

## 🎯 Visão Geral

Portfólio moderno e trilíngue construído com **React 18.3 + TypeScript 5.7 + Vite 7.3**, focado em performance, manutenibilidade e internacionalização.

## 🏗️ Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── portfolio/          # Seções principais do portfólio
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── ...
│   │   ├── shared/             # Componentes reutilizáveis
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   └── SocialLinks.tsx
│   │   └── ui/                 # Componentes base (shadcn/ui)
│   ├── i18n/                   # Sistema de internacionalização
│   │   ├── types.ts            # Contrato TypeScript (PortfolioContent)
│   │   ├── I18nProvider.tsx    # Context + Hook
│   │   ├── index.ts            # Exports públicos
│   │   └── locales/
│   │       ├── pt.ts           # Português (padrão)
│   │       ├── en.ts           # English
│   │       └── es.ts           # Español
│   ├── constants/              # Configurações centralizadas
│   │   └── icons.ts            # Mapeamento de ícones
│   ├── lib/                    # Utilitários
│   │   └── utils.ts            # Helpers (cn, etc.)
│   ├── hooks/                  # Custom hooks
│   └── pages/
│       └── Index.tsx           # Página principal
├── public/
│   ├── images/                 # Assets estáticos
│   └── *.pdf                   # Currículos (PT/EN/ES)
└── package.json
```

## 🌐 Sistema de Internacionalização (i18n)

### **Arquitetura Zero-Dependency**

Implementação customizada sem bibliotecas externas (react-i18next, etc.) para:
- ✅ **Bundle menor** (~166KB gzipped)
- ✅ **Type-safe** com TypeScript
- ✅ **Conteúdo como dados** (não como chaves mágicas)
- ✅ **Fácil manutenção** e escalabilidade

### **Fluxo de Dados**

```
┌─────────────────────────────────────────────────────────────┐
│                      I18nProvider                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Estado: locale ('pt' | 'en' | 'es')                 │   │
│  │  Conteúdo: { pt, en, es }[locale]                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                           ▼                                  │
│              Context API (I18nContext)                       │
└─────────────────────────────────────────────────────────────┘
                            ▼
        ┌───────────────────────────────────────┐
        │      useI18n() Hook                   │
        │  ┌─────────────────────────────────┐  │
        │  │  { t, locale, setLocale }       │  │
        │  └─────────────────────────────────┘  │
        └───────────────────────────────────────┘
                            ▼
        ┌───────────────────────────────────────┐
        │      Componentes React                │
        │  ┌─────────────────────────────────┐  │
        │  │  const { t } = useI18n();       │  │
        │  │  <h1>{t.hero.greeting}</h1>     │  │
        │  │  <p>{t.about.title}</p>         │  │
        │  └─────────────────────────────────┘  │
        └───────────────────────────────────────┘
```

### **Contrato de Tipos**

```typescript
// src/i18n/types.ts
export interface PortfolioContent {
  hero: { greeting: string; typewriter: string[]; ... }
  about: { title: string; stats: Array<...>; ... }
  projects: { title: string; items: Array<...>; ... }
  navbar: { items: Array<...>; downloadCV: string; cvPath: string }
  // ... mais 7 seções
}
```

### **Uso nos Componentes**

```typescript
// ANTES (❌ Hardcoded)
const Hero = ({ language }: Props) => {
  const content = { pt: {...}, en: {...}, es: {...} };
  return <h1>{content[language].greeting}</h1>;
};

// DEPOIS (✅ i18n System)
const Hero = () => {
  const { t } = useI18n();
  return <h1>{t.hero.greeting}</h1>;
};
```

## 🧩 Componentes Compartilhados

### **ProjectCard** (`shared/ProjectCard.tsx`)
Card reutilizável para exibição de projetos com:
- Imagem responsiva (AspectRatio 16:9)
- Animações Framer Motion (hover, rotate)
- Badges de tecnologias
- Links para demo/repo

### **StatCard** (`shared/StatCard.tsx`)
Card de estatísticas com:
- AnimatedCounter para números
- Layout responsivo
- Tipografia otimizada

### **SocialLinks** (`shared/SocialLinks.tsx`)
Links sociais centralizados:
- GitHub, LinkedIn, Instagram
- Ícones Lucide React
- Hover effects

## 📦 Gerenciamento de Estado

### **i18n State**
- **Provider:** `I18nProvider` (Context API)
- **Hook:** `useI18n()`
- **Persistência:** localStorage (locale selecionado)

### **Local State**
- useState para modais, menus mobile, formulários
- Sem Redux/Zustand - projeto pequeno não necessita

## 🎨 Estilização

### **Stack**
- **Tailwind CSS 3.4:** Utility-first
- **shadcn/ui:** Componentes base (Radix UI)
- **CVA:** Variantes de componentes
- **Framer Motion:** Animações

### **Tema**
- Dark/Light mode via `ThemeToggle.tsx`
- Variáveis CSS customizadas
- Persistência localStorage

## 🚀 Performance

### **Build Metrics**
```bash
dist/index.html                   0.48 kB │ gzip:   0.31 kB
dist/assets/index-C9nXHVhN.css   75.08 kB │ gzip:  12.24 kB
dist/assets/index-BnFslbD0.js   519.48 kB │ gzip: 166.69 kB
```

### **Otimizações Aplicadas**
- ✅ Code splitting automático (Vite)
- ✅ Lazy loading de imagens
- ✅ Tree shaking
- ✅ Minificação (SWC)
- ✅ Assets em `/public` (sem processamento)

## 🔧 Configurações Centralizadas

### **Icons** (`constants/icons.ts`)
```typescript
export const projectIcons: Record<number, LucideIcon> = {
  0: Globe,
  1: ShoppingCart,
  2: GraduationCap,
  // ...
};
```

### **CV Paths** (nos locales)
```typescript
navbar: {
  cvPath: '/Currículo - Iago Cunha - Desenvolvedor FullStack.pdf', // PT
  // cvPath: '/[EN] Resume - Iago Cunha - FullStack Developer.pdf', // EN
  // cvPath: '/[ES] Currículo - Iago Cunha - Desarrollador FullStack.pdf', // ES
}
```

## 📋 Boas Práticas

### **TypeScript**
- ✅ Strict mode ativado
- ✅ Interfaces explícitas para props
- ✅ Type inference em hooks
- ✅ Zero `any`

### **React**
- ✅ Componentes funcionais (FC)
- ✅ Hooks customizados (`useI18n`, `use-mobile`, etc.)
- ✅ Fragments para evitar divs desnecessárias
- ✅ Keys únicas em listas

### **Estrutura de Pastas**
- ✅ Separação de concerns (portfolio/shared/ui)
- ✅ Colocation (componentes próximos do uso)
- ✅ Exports centralizados (`index.ts`)

### **Internacionalização**
- ✅ Conteúdo separado da UI
- ✅ Type-safe com `PortfolioContent`
- ✅ Sem condicionais por idioma no JSX
- ✅ Escalável para novos idiomas (adicionar novo locale)

## 🔄 Fluxo de Adição de Novo Idioma

1. **Criar locale:** `src/i18n/locales/fr.ts`
   ```typescript
   import { PortfolioContent } from '../types';
   export const fr: PortfolioContent = { ... };
   ```

2. **Atualizar tipo:** `src/i18n/types.ts`
   ```typescript
   export type Locale = 'pt' | 'en' | 'es' | 'fr';
   ```

3. **Importar no Provider:** `src/i18n/I18nProvider.tsx`
   ```typescript
   import { fr } from './locales/fr';
   const locales = { pt, en, es, fr };
   ```

4. **Adicionar no seletor:** `LanguageToggle.tsx`
   ```typescript
   const languages = [
     { code: 'fr', label: 'FR', flag: '🇫🇷' },
     // ...
   ];
   ```

## 🛠️ Stack Tecnológica

| Categoria | Tecnologia | Versão |
|-----------|-----------|--------|
| Framework | React | 18.3.1 |
| Build Tool | Vite | 7.3.1 |
| Linguagem | TypeScript | 5.7.3 |
| Estilização | Tailwind CSS | 3.4.1 |
| Animações | Framer Motion | 11.15.0 |
| Ícones | Lucide React | 0.468.0 |
| UI Components | Radix UI | Múltiplos |
| Formulários | React Hook Form | 7.54.2 |
| Validação | Zod | 3.24.1 |
| Roteamento | React Router | 7.1.3 |

## 📝 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (http://localhost:5173)
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # ESLint
```

## 🎯 Próximos Passos (Roadmap)

### **Performance**
- [ ] Implementar dynamic imports para locales (code splitting)
- [ ] Adicionar `<link rel="preload">` para fontes
- [ ] Otimizar imagens com `next/image` ou similar

### **Features**
- [ ] Adicionar blog com MDX
- [ ] Sistema de busca de projetos
- [ ] Analytics (Vercel Analytics ou Plausible)
- [ ] SEO otimizado (meta tags por idioma)

### **DX (Developer Experience)**
- [ ] Testes unitários (Vitest + Testing Library)
- [ ] Testes E2E (Playwright)
- [ ] Husky + lint-staged (pre-commit hooks)
- [ ] Storybook para componentes

---

**Última atualização:** 1 de fevereiro de 2026  
**Mantido por:** Iago Cunha
