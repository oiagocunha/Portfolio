# Portfólio Iago Cunha

SPA em React + TypeScript + Vite com i18n (PT/EN), case studies com Mermaid e deploy na Vercel.

## Stack

- React 18, TypeScript, Vite
- Tailwind CSS (+ dois componentes shadcn/ui)
- IBM Plex Sans/Mono via @fontsource
- Mermaid (diagramas nos case studies e no workflow)
- React Router

## Desenvolvimento

```bash
npm install
npm run dev
```

Não há variáveis de ambiente. O contato é feito por e-mail, LinkedIn e WhatsApp; o site não tem formulário.

## Scripts

- `npm run dev` servidor local
- `npm run build` build de produção (inclui HTML por rota e sitemap)
- `npm run preview` preview do build
- `npm run lint` ESLint
- `npm run typecheck` TypeScript
- `npm test` testes (Node 22.18+ ou 24)

## Estrutura útil

- `src/i18n/locales/` conteúdo PT/EN
- `src/components/home/` seções da home; `src/components/portfolio/` seções de `/perfil` e `/servicos`
- `src/pages/CaseStudy*.tsx` case studies (view compartilhada)
- `public/images/` imagens, logos e GIFs de demo

## Imagens dos projetos

As imagens ficam em `public/images/`. A imagem social é `social-card.png` (`SITE_IMAGE` em `src/lib/seo.ts`).

Nos locales (`pt.ts` / `en.ts`), cada projeto aponta para uma captura com `image: "/images/meu-projeto.png"`. Depois de adicionar ou trocar uma imagem, gere as variantes WebP (precisa de Python com Pillow) e inclua o nome em `TARGETS` no script:

```bash
python scripts/optimize-images.py
```

## Case studies

- `/case-study/chat-platform`
- `/case-study/public-data-monitor`

## Prospecção comercial (MVP)

**Produto principal:** workflow n8n em [`n8n/`](./n8n/README.md).

```bash
# Importe no n8n:
# n8n/workflows/prospeccao-comercial.json
```

A pasta `prospecting/` (TypeScript) é apenas referência de lógica — não continue expandindo como app.

## Idiomas

Apenas `pt` e `en`. O seletor está na navbar.

## Conversão e perfil profissional

Home com dois caminhos em `/`, perfil profissional em `/perfil`, serviços para empresas em `/servicos` e versões em inglês sob `/en`.
Veja [implementação, evidências e ativação](docs/CONVERSION_IMPLEMENTATION.md).

Arquitetura: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Redesign: [especificação](docs/SPEC_PORTFOLIO_REDESIGN.md).

Validação: `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`.
