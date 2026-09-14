# Portfólio Iago Cunha

SPA em React + TypeScript + Vite com i18n (PT/EN), case studies com Mermaid e deploy na Vercel.

## Stack

- React 18, TypeScript, Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- Mermaid (diagramas nos case studies e no workflow)
- React Router

## Desenvolvimento

```bash
npm install
cp .env.example .env
npm run dev
```

Configure `VITE_FORMSUBMIT_ENDPOINT` no `.env` (já vem no `.env.example` apontando para FormSubmit).

Na primeira submissão, o FormSubmit envia um e-mail de confirmação para `dev.iagocunha@gmail.com`. Confirme o endereço antes de o formulário começar a entregar as mensagens.

Reinicie o `npm run dev` depois de alterar o `.env`.

## Scripts

- `npm run dev` servidor local
- `npm run build` build de produção
- `npm run preview` preview do build
- `npm run lint` ESLint

## Estrutura útil

- `src/i18n/locales/` conteúdo PT/EN
- `src/components/portfolio/` seções da home
- `src/pages/CaseStudy*.tsx` case studies (view compartilhada)
- `public/images/` imagens, logos e GIFs de demo

## Assets que você deve adicionar

Coloque estes arquivos em `public/images/` para máxima fidelidade:

| Arquivo | Uso |
|---|---|
| `Perfil.jpg` | Foto no Hero e schema SEO |
| `*.gif` / `*.webp` / `*.mp4` | Demos curtas nos cards (`media` no locale) |

Opcional: substitua `logo.svg` por um PNG social (`1200x630`) e atualize `SITE_IMAGE` em `src/lib/seo.ts`.

Nos locales (`pt.ts` / `en.ts`), cada projeto pode ter:

```ts
image: "/images/meu-poster.png",
media: "/images/meu-demo.gif", // ou .webp / .mp4
```

## Case studies

- `/case-study/chat-platform`
- `/case-study/public-data-monitor`

## Idiomas

Apenas `pt` e `en`. O seletor está na navbar.
