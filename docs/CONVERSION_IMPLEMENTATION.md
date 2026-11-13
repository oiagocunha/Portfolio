# Conversão: implementação e operação

## Páginas

- `/`: apresentação, caminhos para recrutadores e empresas, trabalho selecionado e contato.
- `/servicos`: serviços, projetos comerciais e demonstrativos, processo e contato.
- `/perfil`: experiência, cases técnicos, formação e currículo atualizado.
- `/en`, `/en/perfil` e `/en/servicos`: versões em inglês. O PDF é identificado como português também na página inglesa; não reutilizamos a tradução antiga como se estivesse atualizada.
- Cases disponíveis nos dois idiomas por URLs próprias.
- O build gera HTML com metadados específicos e sitemap com dez URLs. O conteúdo interativo continua sendo uma SPA; isso não é renderização completa no servidor.
- A nova imagem social está em `public/images/social-card.png`.

## Conteúdo e evidências

Fonte do perfil: currículo fornecido pelo titular, “IA Generativa & Automação”. Trabalho autônomo desde junho/2024, inglês B2, graduação com conclusão prevista em dezembro/2026. A redução de 80% foi confirmada pelo titular como medida. Ainda falta registrar período, base e método da medição para um case detalhado.

Os números de 47 cadastrados e 31 com uso são identificados como telemetria do piloto. Não representam usuários atuais. Não foram adicionados depoimentos, faturamento, ganhos de vendas, preços ou prazos não confirmados.

O histórico FIEC mantém a separação anterior entre estágio e desenvolvimento. O currículo consolida a atuação desde março/2025; isso não implica que o cargo atual começou nessa data.

## Eventos de conversão

`page_view`, `whatsapp_click`, `email_click`, `case_open`, e `resume_download` são publicados em `window.dataLayer` e no evento DOM `portfolio:conversion`.

**Instrumentação pronta, sem coleta remota configurada.** Conectar a uma ferramenta de analytics para histórico e relatórios. Não existe painel de conversões ativo nesta entrega. Nenhum texto de mensagem, e-mail, telefone ou URL externa completa é enviado pelos eventos. `utm_source` é limitado a um identificador de campanha; não usar dados pessoais nesse parâmetro.

O formulário de contato (FormSubmit) foi removido: o endpoint não estava configurado no build publicado. Cliques em WhatsApp e e-mail não equivalem a conversas iniciadas.

## Validação

```sh
npm test
npm run typecheck
npm run lint
npm run build
```

O fluxo n8n tem testes locais de funções e conexões; não foi executado contra Google Sheets ou OpenAI. A caixa de e-mail não foi testada com envio real. A publicação na Vercel e a importação no n8n são etapas externas ainda pendentes.

## Próximas evidências de negócio

1. Registrar contexto e período da redução medida de erros.
2. Obter depoimento autorizado e resultado observado do FV Crochê.
3. Validar o corte de prospecção com uma amostra manual e registrar respostas por oferta.
4. Atualizar a versão inglesa do currículo e o perfil GitHub com o mesmo histórico.

Verificação visual: home, perfil e alternância PT/EN conferidos no navegador integrado; case corporativo conferido por acesso direto. Não foi realizada uma matriz completa de dispositivos. O checkout do perfil GitHub não estava mais disponível no caminho informado ao retomar a implementação, então seu README não foi alterado.
