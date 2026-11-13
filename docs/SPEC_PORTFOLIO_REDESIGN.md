# Especificação: redesign do portfólio (SDD)

Status: **implementada em 2026-11-13** (E0 a E8). Decididos: fontes via @fontsource, slug `/servicos`, foto só no `/perfil`, os 4 projetos propostos na home. Em aberto: Instagram no rodapé, D9 (deploy na Vercel) e `bun.lockb` desatualizado.
Data da auditoria: 2026-11-13 · Branch: `claude/portfolio-sdd-audit-19f459` · Base: `8eba697`.
Protótipo isolado: [`docs/prototypes/home-two-paths.html`](prototypes/home-two-paths.html).

## 1. Objetivo e público

Comunicar com clareza a capacidade técnica de Iago Cunha (backend e IA aplicada, com experiência fullstack) e levar cada visitante ao próximo passo certo:

| Público | Precisa encontrar | Próximo passo |
|---|---|---|
| Recrutador / gestor técnico (prioritário) | Cargo atual, stack, o que ele fez de fato, evidência verificável, currículo | Baixar currículo, LinkedIn, e-mail |
| Cliente (pequena/média empresa) | O que ele entrega, exemplos reais e demonstrativos, como funciona | WhatsApp ou e-mail |

Decisões já tomadas pelo titular (2026-11-13):

1. **Home com dois caminhos**: primeira dobra neutra (Iago Cunha) com entradas explícitas para recrutadores e para empresas.
2. **Nova identidade visual**, validada por protótipo antes de ser aplicada.
3. **Remover o formulário de contato**; contato por e-mail, LinkedIn e WhatsApp.

## 2. Como a auditoria foi feita

- Leitura de `README.md`, `docs/`, `src/` (páginas, layout, componentes, locales, SEO) e `scripts/`.
- Checks: `npm test` (5/5 passaram), `npm run typecheck` (sem erros), `npm run lint` (0 erros, 5 avisos `react-refresh`), `npm run build` (ok; aviso de chunks > 500 kB).
- Build servido localmente com `vite preview` e inspecionado no navegador integrado em 1440×900 e 375×812 (home, `/perfil`), com medições via DOM (headings, imagens, alvos de toque, overflow horizontal).
- Produção (`portfolio-oiagocunha.vercel.app`): status HTTP das rotas e links externos; busca de strings no bundle publicado.

**Limitações:** o painel do navegador estava oculto, o que reduz `requestAnimationFrame` a ~2 quadros/s. Por isso, capturas de tela de animações não representam um usuário real. Não rodei Lighthouse e não medi LCP/CLS; nenhum número de desempenho abaixo é métrica de campo. Não enviei o formulário de contato. Não testei leitores de tela.

## 3. Diagnóstico

Legenda: **D** = defeito comprovado · **H** = hipótese técnica (precisa de medição) · **P** = preferência estética/estratégica · **M** = manutenção.

### Defeitos comprovados

| # | Evidência | Consequência | Proposta | Prioridade · Validação |
|---|---|---|---|---|
| D1 | `Contact.tsx:29` exige `VITE_FORMSUBMIT_ENDPOINT`. O bundle publicado (`/assets/index-CTaPqFwN.js`) não contém `formsubmit`. O `.env.example` citado no `README.md` foi removido em `06b2c81`. | Visitante preenche o formulário e recebe "O formulário não está disponível". Contato perdido. | Remover formulário, `contact-response.ts`, evento `contact_accepted` e referências. | Alta · formulário ausente; `npm test` atualizado; grep sem `FORMSUBMIT`. |
| D2 | `--accent: 270 91% 60%` sobre o fundo escuro dá **4,12:1** (calculado). Ele é usado em texto pequeno: link "experiência e currículo" (`Hero.tsx:99`), eyebrow do `/perfil`, "Conversar sobre este serviço". | Fica abaixo do mínimo WCAG AA de 4,5:1 para texto normal. | Nova paleta com todos os pares de texto ≥ 4,5:1 (seção 5). | Alta · tabela de contraste no PR, conferida por script. |
| D3 | Medição no DOM, desktop: links da navbar com 20 px de altura, "Conversar sobre este serviço" com 20 px, link de recrutadores e contatos com 18 px. Os links de projeto são `<a><Badge>` (`ProjectCard.tsx:198-233`). | Alvos de toque pequenos (WCAG 2.5.8 pede ≥ 24 px) e ações principais de projeto com cara de etiqueta. | Links e botões com área mínima de 44 px no mobile e 24 px no desktop. Ações de projeto viram links de texto claros. | Alta · script de medição: nenhum alvo interativo visível < 24 px. |
| D4 | A home `/` abre com H1 "IC Desenvolvimento por Iago Cunha", CTA de WhatsApp e só projetos comerciais (`Projects.tsx:63`, `audience="commercial"`). O caminho para recrutadores é um link de 14 px depois dos CTAs (`Hero.tsx:96-103`). | Um recrutador que chega pela URL principal vê uma agência de sites e não o perfil backend/IA. Os cases técnicos ficam a dois cliques. | Home com dois caminhos (seção 6). | Alta · na primeira dobra (375 e 1440) aparecem nome, papel e os dois caminhos. |
| D5 | `scripts/build-pages.mjs:16-19` fixa título e descrição de `/perfil` diferentes de `pt.ts › seo.pages.profile`. O `SeoManager` troca o texto em runtime. | Crawlers sem JS e com JS leem metadados diferentes. A mesma informação existe em duas fontes. | Uma única fonte de SEO nos locales, usada pelo build e pelo runtime. | Média · teste do build compara o `<title>` gerado com o locale. |
| D6 | `docs/README.md` cita `docs/CASE_STUDY_CHAT.md` e PDFs que não existem. `README.md` manda copiar `.env.example` e lista "Assets que você deve adicionar" já presentes. | Documentação induz a erro. | Atualizar `README.md` e `docs/README.md`. | Baixa · links relativos dos docs resolvem. |
| D7 | `Perfil.jpg` tem 1080×1200 (166 KB) e é exibida a 288 px. As capturas dos projetos são PNG de 290-480 KB exibidas a ~658 px, sem `srcset`/WebP. | Download maior que o necessário. O impacto em LCP não foi medido. | WebP/AVIF em 1× e 2× do tamanho exibido, com `srcset`/`sizes`. | Média · soma dos bytes de imagem da home antes e depois. |
| D8 | `https://public-data-monitor.onrender.com/docs` não respondeu em 25 s (HTTP 000). Os demais links externos responderam 200. | Quem avalia clica em "API" e vê uma página parada. Hipótese: cold start do plano gratuito. | Priorizar o link do case e do código; avisar no link que a demo pode demorar para acordar. | Média · texto visível ao lado do link. |

| D9 | Em produção (2026-11-13), `/perfil`, `/perfil/index.html`, `/en`, `/en/perfil` e `/case-study/chat-platform` devolvem `<title>IC Desenvolvimento \| Sites, Automação e Sistemas</title>`, o título da home. O build local gera um HTML diferente por rota. | Crawlers e prévias de link (LinkedIn, WhatsApp) mostram o título comercial para o perfil e os cases. Causa não confirmada: o deploy pode ser anterior ao `build-pages.mjs` ou o comando de build da Vercel pode não ser `npm run build`. | O titular confere, no painel da Vercel, o commit do último deploy e o comando de build. | Alta · `curl` de cada rota publicada mostra o título do locale. |

### Hipóteses técnicas

| # | Evidência | Hipótese | Como validar |
|---|---|---|---|
| H1 | O hero inteiro está em `FadeInSection` + `motion.*` com `initial={{opacity:0}}` (`Hero.tsx:46-95`). Com o painel oculto, a dobra mobile ficou vazia por mais de 5 s. | Conteúdo acima da dobra depende de JS e de animação para aparecer, o que deve atrasar o LCP em aparelhos lentos. | Lighthouse mobile antes e depois. Hero renderizado com opacidade 1 sem JS de animação. |
| H2 | O tema é aplicado em `useEffect` (`ThemeToggle.tsx:18-24`) e `index.html` não tem script inline. `<html>` começa sem a classe `dark`. | Flash de tema claro antes do escuro no primeiro paint. | Gravação de performance com throttling. Script inline mínimo no `<head>`. |
| H3 | Chunk de entrada com 491 kB (162 kB gzip): os dois locales (~1.080 linhas cada), framer-motion, router e Radix. | O JS inicial é maior do que uma página de conteúdo precisa. | Comparar o tamanho do chunk de entrada antes e depois; meta ≤ 120 kB gzip. |

### Preferências estéticas e estratégicas

- **P1** Glow pulsando e foto flutuando em loop infinito (`Hero.tsx:27-41`, `116-118`) e `hover:scale-105` em imagens e botões. Eles respeitam `prefers-reduced-motion` (ponto positivo), mas disputam atenção com o conteúdo.
- **P2** Títulos em caixa alta com ponto ("SOBRE.", "CONTATO.", "STACK TÉCNICA.") e centralizados misturados com títulos em caixa normal. A voz fica inconsistente.
- **P3** Tipografia: só fonte do sistema e degradê roxo no nome. Não há identidade tipográfica.
- **P4** Cards com o mesmo peso visual para tudo. Não há hierarquia entre o case corporativo e um demo.

### Manutenção

- **M1** Sem uso: `Certifications`, `Specialties`, `Typewriter`, `use-mobile` e 11 componentes `ui/*` (alert, avatar, checkbox, input-otp, radio-group, scroll-area, sheet, skeleton, sonner, tabs). 20 dependências sem import em `src` (ex.: `recharts`, `cmdk`, `vaul`, `date-fns`, `@tanstack/react-query`, `zod`). Verificar `mermaid`/`tailwindcss-animate` à parte, porque usam import dinâmico ou config.
- **M2** Imagens sem referência em `public/images` (~1,2 MB): `CRUD.png`, `Logo_semFundo_light.png`, `QRCode.png`, `Site-de-receita.jpg`, `Work_in_progress.png`, `simuladorCLT.png`, `sistema_notas.png`, `xuxie-croche.png`.
- **M3** Campos vestigiais nos tipos e locales (`hero.typewriter: []`, `highlights: []`, `emoji: ""`, `when: ""`). Variáveis `--sidebar-*` sem uso em `index.css`. Três fontes de tokens (`index.css`, `tailwind.config.ts`, `design-tokens.ts`).
- **M4** Testes cobrem só eventos de conversão (`scripts/conversion.test.mjs`). Não há teste da geração de páginas nem da paridade PT/EN.

### O que preservar

Rotas localizadas `/en/*` com HTML pré-gerado por rota (`build-pages.mjs`); `hreflang`, canonical e sitemap; skip link; suporte a `prefers-reduced-motion`; rótulos honestos de projeto (real, demonstrativo, interno); case studies com Mermaid em lazy-load; eventos de conversão sem PII; conteúdo factual dos locales (sem números inventados).

## 4. Escopo

**Dentro:** arquitetura de informação (home, `/perfil`, nova `/servicos`), nova identidade visual, apresentação dos projetos, navegação, acessibilidade, movimento, imagens e fontes, SEO das rotas afetadas, limpeza de código morto e documentação.

**Fora:** reescrita dos textos de case study além de ajustes de rótulo; novos projetos, depoimentos ou métricas; migração para Next.js/SSR; analytics remoto; workflow `n8n/` e pasta `prospecting/`; currículo em PDF; perfil do GitHub.

## 5. Direção visual

Conceito: **caderno de engenharia**. Sóbrio, legível, com metadados em monoespaçada, como uma boa documentação técnica. A identidade vem da tipografia, do ritmo e da precisão, não de efeitos.

**Tipografia.** IBM Plex Sans (400/500/600) para texto e títulos e IBM Plex Mono (400/500) para metadados: datas, rótulos, stack, status. A família foi escolhida pela leitura técnica e pela cobertura de acentos PT. Escala modular 1,25 com base de 16 px: 13 · 14 · 16 · 20 · 25 · 31 · display `clamp(39px → 61px)`. Entrelinha 1,6 no texto e 1,05-1,3 nos títulos. Títulos alinhados à esquerda, em caixa normal, sem ponto final.

**Paleta** (contraste calculado; todos os pares de texto passam AA):

| Token | Claro | Escuro | Texto sobre o fundo |
|---|---|---|---|
| `bg` | `#F7F6F2` | `#0F1114` | — |
| `surface` | `#FFFFFF` | `#16191E` | — |
| `ink` | `#15171C` | `#ECEDEE` | 16,6 / 16,1 |
| `muted` | `#565B66` | `#9BA1AC` | 6,3 / 7,3 |
| `accent` | `#0B6E5F` | `#4FD1B4` | 5,7 / 10,0 |
| `warn` (rótulo "Demonstrativo") | `#8A5A00` | `#E5B45A` | 5,5 / 9,9 |
| `line` | `#DEDBD3` | `#262A31` | decorativo |

Um único acento (verde-petróleo, um "sinal" de terminal), usado em links, foco, status e ação primária. Sem degradês. O tema segue o sistema por padrão, com alternância persistida e aplicada por script inline antes do primeiro paint.

**Espaçamento e largura.** Escala de 4 px (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96). Contêiner de 1120 px, texto corrido limitado a ~640 px (≈ 68 caracteres). Seções separadas por filete e 64 px de respiro. Sem cards empilhados dentro de cards.

**Composição.** Em desktop, as seções usam uma grade de duas colunas: título e metadado à esquerda (224 px) e conteúdo à direita. No mobile, tudo vira uma coluna, mantendo a ordem.

**Projetos.** Os cards de altura igual dão lugar a uma **lista de entradas**. Cada entrada traz o rótulo de tipo (Corporativo · interno / Cliente real / Autoral · código aberto / Demonstrativo), o título, uma frase de problema e entrega, e uma lista de definição com **Papel · Stack · Evidência · Limite**, seguida de links de texto (Case, Demo, Código).

> Ajuste na implementação: a lista também mostra **Problema** e, nas páginas para clientes, **O que inclui**, porque esses textos já existiam nos projetos e se perderiam numa frase única. Sem texto de papel, a linha Papel mostra a Solução. A imagem fica opcional, em 16:9 e só onde ajuda a entender o projeto. O case corporativo abre a lista. Demonstrativos continuam marcados.

**Mobile.** Navbar com nome e 2-3 destinos curtos sem quebra de linha. Menu completo só a partir do 4º item.

> Ajuste na implementação: entre 640 e 1024 px ficam visíveis os 2 destinos principais de cada página, além do menu. Abaixo de 640 px eles não cabem junto ao nome e aos botões de tema, idioma e menu (44 px cada), então só o menu aparece. Alvos ≥ 44 px. O botão flutuante de WhatsApp sai do `/perfil` e da home neutra e fica só em `/servicos`, sem cobrir conteúdo.

**Movimento.** Nada animado acima da dobra. Sem loops infinitos. Permanecem transições de cor e borda (150 ms) em hover e foco, foco visível de 2 px no acento e, opcionalmente, um fade curto em seções abaixo da dobra, desativado com `prefers-reduced-motion`. Sem barra de progresso de rolagem e sem `scale` em hover.

O protótipo `docs/prototypes/home-two-paths.html` mostra a home, as duas entradas, a lista de projetos e o contato, nos temas claro e escuro, em 375 px e 1280 px. Ele foi conferido no navegador integrado: sem overflow horizontal em 375 px e sem alvos < 24 px. Os links do protótipo são ilustrativos.

## 6. Arquitetura de informação e páginas afetadas

| Rota | Conteúdo | Origem |
|---|---|---|
| `/` · `/en` | Hero neutro (nome, papel, frase de prova, local/idioma), **dois caminhos**, trabalho selecionado (3-4 entradas com rótulo), contato | Nova, a partir de `Hero`, `Projects` |
| `/perfil` · `/en/perfil` | Experiência, cases técnicos, fluxo de automação, stack, formação, currículo | Atual, reestilizada |
| `/servicos` · `/en/servicos` (**nova**) | Serviços, exemplos de uso, projetos comerciais e demonstrativos, processo, sobre IC Desenvolvimento, WhatsApp | Conteúdo atual da home |
| `/case-study/*` | Mesmos cases, com novo layout de leitura | `CaseStudyView` |

Compatibilidade: as âncoras antigas `/#servicos`, `/#projetos`, `/#como-trabalho` e `/#sobre` redirecionam no cliente para `/servicos#…`. `/#contato` continua na home, que tem a própria seção de contato.

**Componentes:** `MainLayout`, `Navbar` (itens por rota), `Hero` (reescrito, sem framer-motion), novo `AudiencePaths`, novo `WorkEntry` (substitui `ProjectCard`), `Projects`, `Services`/`Applications`/`Process`/`About` (passam para `/servicos`), `Contact` (sem formulário), `Experience`, `Technologies`, `CaseStudyView`, `ThemeToggle` + script inline em `index.html`, `index.css`/`tailwind.config.ts` (tokens), `SeoManager`, `build-pages.mjs`, `vercel.json`, `public/sitemap.xml`, locales e `types.ts`.

## 7. Melhorias em ordem de prioridade

1. Remover o formulário quebrado (D1) e corrigir a documentação (D6).
2. Nova arquitetura de informação com a home de dois caminhos e `/servicos` (D4).
3. Tokens de cor e tipografia com contraste AA (D2, P3) e alvos de toque (D3).
4. Lista de projetos com Papel, Stack, Evidência e Limite (P4, D8).
5. Hero estático e sem animação acima da dobra; tema sem flash (H1, H2, P1).
6. Imagens otimizadas e redução do JS inicial (D7, H3).
7. SEO com uma fonte única e as novas rotas no build, sitemap e rewrites (D5).
8. Limpeza de código, dependências e imagens mortas (M1-M3).

## 8. Critérios de aceitação

- **CA1** Em 375×812 e 1440×900, a primeira dobra de `/` mostra "Iago Cunha", o papel "Backend & IA" e os dois caminhos, sem rolagem e com o JS de animação desativado.
- **CA2** Um recrutador chega ao PDF do currículo em ≤ 2 cliques a partir de `/` e de `/en`.
- **CA3** Toda entrada de projeto exibe o rótulo de tipo. Toda entrada demonstrativa diz "Demonstrativo".
- **CA4** Os pares de texto e fundo dos tokens têm contraste ≥ 4,5:1 nos dois temas (script).
- **CA5** Nenhum link ou botão visível tem altura ou largura < 24 px. No mobile, as ações primárias têm ≥ 44 px.
- **CA6** Não há overflow horizontal em 320, 375, 768 e 1440 px nas rotas `/`, `/perfil`, `/servicos` e em um case.
- **CA7** Com `prefers-reduced-motion: reduce`, nenhum elemento anima. Sem essa preferência, nada acima da dobra começa com opacidade 0.
- **CA8** Não há formulário nem `VITE_FORMSUBMIT_ENDPOINT` no código ou nos docs. Os contatos visíveis são e-mail, LinkedIn e WhatsApp (este em `/servicos` e no contato).
- **CA9** O build gera HTML com title, description, canonical e hreflang próprios para as 10 rotas (8 atuais + `/servicos` × 2), iguais aos dos locales. O sitemap lista as 10.
- **CA10** `/#servicos` leva a `/servicos`.
- **CA11** Bytes de imagem da home ≤ 50% do atual. Chunk de entrada menor que os 162 kB gzip atuais (valores registrados no PR).
- **CA12** `npm test`, `typecheck`, `lint` (0 erros) e `build` passam.

## 9. Plano incremental

Cada etapa é um commit revisável, com checks e inspeção no navegador.

| Etapa | Conteúdo | Skill prevista |
|---|---|---|
| E0 | Remover formulário, código, deps e imagens mortos; corrigir docs. Sem mudança visual. | — |
| E1 | Testes primeiro: paridade de chaves PT/EN; build gera metadados a partir dos locales para todas as rotas; sitemap. Depois a correção de D5. | `mattpocock-skills:tdd` |
| E2 | Tokens (cores, fontes self-hosted, escala, espaçamento) e script de tema inline. | — |
| E3 | Shell: `Navbar`, `MainLayout`, rodapé e contato sem formulário. | — |
| E4 | Rota `/servicos` com o conteúdo comercial movido; redirect de âncoras; rewrites e build. | `mattpocock-skills:codebase-design` se a divisão de componentes pedir |
| E5 | Home de dois caminhos e `WorkEntry`. | — |
| E6 | `/perfil`, seções de `/servicos` (hero comercial, serviços, exemplos, projetos, processo, sobre) e `CaseStudyView` no novo layout, usando `WorkEntry` e `SectionHeading`. Aviso de demo lenta (D8). | — |
| E7 | Imagens WebP com `srcset`; remoção das animações restantes; redução de JS inicial; social card nas cores novas. | `mattpocock-skills:diagnosing-bugs` se surgir regressão |
| E8 | Revisão final e matriz de validação. | `mattpocock-skills:code-review` |

## 10. Validação

- **Técnica:** `npm test`, `npm run typecheck`, `npm run lint`, `npm run build` em cada etapa.
- **Funcional:** navegação por teclado (skip link, foco visível, ordem), troca PT/EN preservando a rota, troca de tema sem flash, todos os links internos e externos (script de status HTTP), download do currículo, redirect de âncoras.
- **Visual:** capturas em 375, 768 e 1440 px nos temas claro e escuro das rotas `/`, `/perfil`, `/servicos` e de um case, comparadas com o protótipo.
- **Desempenho:** Lighthouse mobile local antes e depois, só como comparação relativa e registrado como medição de laboratório.

## 11. Riscos e decisões pendentes

**Riscos**

- Busca: o título da home deixa de ser "IC Desenvolvimento | Sites…". O termo passa a `/servicos`, o que pode afetar o ranking atual por esse nome. Mitigação: canonical e links internos claros, e "IC Desenvolvimento" no title de `/servicos`.
- Links já compartilhados com âncoras da home. Mitigação: CA10.
- Fontes adicionam peso. Mitigação: subset latin, 5 arquivos woff2 (Sans 400/500/600, Mono 400/500) e `font-display: swap`. Não há preload: o Vite gera nomes com hash, então o `index.html` não conhece a URL final. Pode ser adicionado com um plugin se a medição justificar.
- Retirar framer-motion por completo pode afetar o menu mobile e outros pontos. A decisão final fica para a E7, com medição.

**Decisões pendentes (do titular)**

1. Entrega das fontes: `@fontsource/ibm-plex-sans` + `@fontsource/ibm-plex-mono` (npm, self-hosted, recomendado) ou Google Fonts.
2. Foto: manter só no `/perfil`, em tamanho menor (recomendado), ou também na home.
3. Slug da página comercial: `/servicos` (segue o padrão atual `/en/perfil`) ou outro.
4. Manter o link do Instagram no rodapé ou deixar só GitHub, LinkedIn, e-mail e WhatsApp.
5. ~~Projetos da home~~: decidido, os 4 propostos.
