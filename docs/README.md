# Portfólio - Iago Cunha

Portfólio profissional focado em engenharia fullstack para cenários reais: sistemas distribuídos, automação, workflows resilientes e interfaces performáticas.

## Objetivo

Demonstrar capacidade técnica com foco em:

- arquitetura de sistemas e decisões de engenharia
- impacto de negócio com métricas
- clareza de comunicação para recrutadores e líderes técnicos

## Stack principal

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui + Framer Motion
- i18n próprio (`pt`, `en`, `es`)
- roteamento com React Router

## Estrutura resumida

```txt
src/
  components/
    portfolio/        # seções da home + visualização de workflow
    shared/           # cards reutilizáveis
    ui/               # base de UI (shadcn)
  i18n/
    locales/          # conteúdo por idioma
    types.ts
  pages/
    Index.tsx
    CaseStudyCLT.tsx  # página de case study (rota nInA)
docs/
  ARCHITECTURE.md
  CASE_STUDY_NINA.md
  RESUMO_ATUACAO_NINA.md
```

## Principais funcionalidades

- Hero com posicionamento técnico e CTA forte
- Cards de projeto com:
  - stack
  - complexidade
  - impacto
  - links de demo/código/case study
- Visualização interativa de workflow (estilo Temporal/Kafka/n8n)
- Página de case study técnico: ` /case-study/nina-platform `
- Navegação por âncoras na home (scroll para seção)

## Conteúdo multilíngue

Todo o conteúdo principal está em:

- `src/i18n/locales/pt.ts`
- `src/i18n/locales/en.ts`
- `src/i18n/locales/es.ts`

## Currículos oficiais (public)

Os únicos currículos válidos do projeto são:

- `public/[EN] Resume - Iago Cunha - FullStack Developer.pdf`
- `public/[PT] Currículo - Dev. Fullstack- Iago Cunha.pdf`

## Rodando o projeto

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Contato

- LinkedIn: [linkedin.com/in/oiagocunha](https://linkedin.com/in/oiagocunha)
- GitHub: [github.com/oiagocunha](https://github.com/oiagocunha)
- Email: dev.iagocunha@gmail.com
- Portfólio: [portfolio-oiagocunha.vercel.app](https://portfolio-oiagocunha.vercel.app)
