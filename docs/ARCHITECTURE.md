# Arquitetura do portfólio

SPA em React 18 + TypeScript + Vite, com Tailwind CSS, conteúdo bilíngue (PT/EN) e HTML pré-gerado por rota para metadados. Decisões de produto e visuais: [SPEC_PORTFOLIO_REDESIGN.md](SPEC_PORTFOLIO_REDESIGN.md).

## Páginas

| Rota (PT · EN) | Página | Público |
|---|---|---|
| `/` · `/en` | `pages/Index.tsx`: hero, dois caminhos, trabalho selecionado, contato | todos |
| `/perfil` · `/en/perfil` | `pages/Professional.tsx`: experiência, cases, fluxo, stack, formação | recrutadores |
| `/servicos` · `/en/servicos` | `pages/ServicesPage.tsx`: oferta, exemplos, projetos, processo, sobre, contato | empresas |
| `/case-study/*` | `pages/CaseStudy*.tsx` → `shared/CaseStudyView.tsx` | técnico |

Links antigos como `/#servicos` são redirecionados para `/servicos#…` (`legacyHomeAnchorTarget` em `lib/paths.ts`).

## Pastas

```
src/
  i18n/            types.ts (contrato do conteúdo) e locales/pt.ts, en.ts
  pages/           uma página por rota
  components/
    home/          seções exclusivas da home
    portfolio/     seções de /perfil e /servicos, navbar, toggles
    shared/        WorkEntry, SectionHeading, ResponsiveImage, CaseStudyView, MermaidDiagram
    seo/           SeoManager (metadados em runtime), RouteScroll, ConversionEvents
    ui/            button e dropdown-menu (shadcn)
  layouts/         MainLayout: cabeçalho, rodapé, WhatsApp só em /servicos
  lib/             paths (rotas), contact (canais), projects (rótulos), styles, images
scripts/           build-pages.mjs, optimize-images.py e testes (node --test)
public/images/     originais + variantes WebP geradas
```

## Conteúdo

Todo texto visível vem dos locales e segue o tipo `PortfolioContent`. Projetos (`ProjectItem`) informam o tipo por `status`/`kind`/`repo`; `projectTag` transforma isso no rótulo exibido (Corporativo · interno, Cliente real, Autoral · código aberto, Demonstrativo). Campos opcionais `role`, `evidence`, `limitation` e `demoNote` só aparecem quando preenchidos; não invente valores.

A home escolhe seus projetos em `home.selectedWork`.

## Visual

Tokens de cor em `src/index.css` (`:root` e `.dark`), fontes IBM Plex via `@fontsource` em `main.tsx`, escala e contêiner em `tailwind.config.ts`. O tema é aplicado por um script inline no `index.html` antes do primeiro paint. Não há biblioteca de animação; `prefers-reduced-motion` zera as transições restantes.

## Build e SEO

`npm run build` roda o Vite e depois `scripts/build-pages.mjs`, que copia `dist/index.html` para cada rota com title, description, canonical e hreflang do locale e escreve `dist/sitemap.xml`. Na Vercel, `vercel.json` aponta cada rota para o seu `index.html`. Ao criar uma rota, atualize `App.tsx`, `ROUTES`, `SeoManager`, `build-pages.mjs`, `vercel.json` e o teste `scripts/build-pages.test.mjs`.

## Imagens

`python scripts/optimize-images.py` gera `<nome>-<largura>.webp` e reescreve `src/lib/image-variants.ts`. `ResponsiveImage` serve as variantes via `<picture>` com o original como fallback.

## Testes

`npm test` roda `scripts/*.test.mjs`:
- paridade de chaves PT/EN e rótulo de todo projeto;
- HTML e sitemap gerados por rota;
- contraste AA dos tokens nos dois temas;
- rotas, âncoras antigas e `srcset`;
- workflow n8n de prospecção.
