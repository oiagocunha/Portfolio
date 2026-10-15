# Prospecção Comercial V4 — Search Discovery

Arquivo: [`workflows/prospeccao-comercial.json`](./workflows/prospeccao-comercial.json)

Regenerar: `node n8n/build-workflow.cjs`

## Ideia

Discovery via **busca web** (DuckDuckGo HTML, grátis) — **não** Google Maps / Places / OSM.

```
Google Search (DuckDuckGo)
  → filtrar lixo (gov, CNES, redes, franquias óbvias)
  → dedupe
  → analisar website
  → score (“vale abordar?”)
  → IA só se score ≥ AI_MIN_SCORE (45 inicialmente), com contato e AI_ENABLED=true
  → Google Sheets
```

Meta: ~20 leads bons, não volume de lixo.

## Antes de importar (planilha)

1. Abra: https://docs.google.com/spreadsheets/d/1Z5FHZeHmnLvsayFMbE8nQkl_7Z0wzErlFm0kyWRqvm0
2. Aba **`Leads`** (crie se não existir)
3. Cabeçalhos na linha 1 (ou rode o node **Escrever Cabeçalhos** uma vez):

```
DATA DA DESCOBERTA
EMPRESA
CATEGORIA
CIDADE
ENDEREÇO
TELEFONE
WHATSAPP
GOOGLE RATING
GOOGLE AVALIAÇÕES
GOOGLE MAPS
WEBSITE
SITE STATUS
SITE REASON
MOBILE STATUS
OPORTUNIDADES
OPORTUNIDADE
SERVIÇO SUGERIDO
CONFIANÇA IA
EVIDÊNCIA
INFERÊNCIA
RESUMO
SCORE
PRIORIDADE
STATUS COMERCIAL
ÚLTIMO CONTATO
PRÓXIMA AÇÃO
OBSERVAÇÕES
PLACE_ID
```

4. Compartilhe a planilha com o e-mail da conta Google do n8n (Editor)

## Importar no n8n

1. Workflows → **Import from File** → `prospeccao-comercial.json`
2. Nos nodes **Google Sheets**: selecione a credencial OAuth2
3. (Opcional) Node **IA OpenAI**: Header Auth  
   - Name: `Authorization`  
   - Value: `Bearer sk-sua-chave`  
   Sem OpenAI, o score ainda funciona; configure AI_ENABLED=true para habilitar a IA. Corte: score ≥ AI_MIN_SCORE (45 inicialmente), com contato e AI_ENABLED=true
4. Execute **Manual Trigger**

## Configuração (já preenchida)

| Campo | Valor |
|---|---|
| `DISCOVERY_MODE` | `search` (ou `csv`) |
| `SEARCH_PROVIDER` | `duckduckgo` |
| `NICHO` | clínica odontológica |
| `CIDADE` | Fortaleza |
| `QUANTIDADE` | 20 |
| `SPREADSHEET_ID` | `1Z5FHZeHmnLvsayFMbE8nQkl_7Z0wzErlFm0kyWRqvm0` |
| `SHEET_NAME` | `Leads` |

Sugestões de nicho com dor clara: clínicas pequenas, escritórios, imobiliárias, serviços locais.

## Score (resumo)

Pergunta: **vale a pena abordar?**

| Sinal | Peso |
|---|---:|
| Empresa privada/comercial | +20 |
| Sem site | +25 |
| Site ruim/antigo | +20 |
| Sem CTA | +10 |
| Sem WhatsApp | +5 |
| Automação potencial (evidência) | +15 |
| Instagram | +5 |
| Franquia/rede | −20 |
| Órgão público | −50 |
| Site já excelente | −25 |

Evidência ≠ inferência. Google Sites não vira “site GOOD” nem “automação forte”.

## Modo CSV

`DISCOVERY_MODE=csv` + aba **Entrada** com colunas `EMPRESA` / `WEBSITE` (opcional).

Sem Google Places / sem cartão Maps.


## Atualização de conversão (2026-10-15)

Regere com `node n8n/build-workflow.cjs` e importe o JSON gerado. O arquivo TypeScript em `prospecting/` continua sendo referência, não o produto principal.

- `AI_ENABLED=false` por padrão: configurar credenciais antes de habilitar.
- `AI_MIN_SCORE=45`: corte inicial alcançável. É uma hipótese operacional a calibrar com leads revisados e respostas reais, não probabilidade de compra.
- IA exige também e-mail, telefone, WhatsApp ou Instagram. Sem contato, a próxima ação é localizar um canal.
- As faixas de prioridade são 40/45/55/65. A pontuação favorece oportunidade de presença digital; o campo `SINAL AUTOMAÇÃO` é independente da conclusão de que um site bom implique processos internos bons.
- A busca web continua priorizando sites próprios. Para negócios presentes apenas em redes sociais, use a aba Entrada com EMPRESA, EMAIL, TELEFONE, WHATSAPP URL e INSTAGRAM; WEBSITE é opcional.
- Preserve a linha de cabeçalhos existente e acrescente as novas colunas ao final conforme `headers-leads.tsv`. Não reordene dados comerciais existentes. O node Escrever Cabeçalhos agora está desconectado da execução recorrente: use apenas no preparo de uma aba vazia.
- Novos campos: EMAIL, WHATSAPP URL, INSTAGRAM, ORIGEM, SINAL AUTOMAÇÃO, DATA PRÓXIMA AÇÃO, RESPOSTA, REUNIÃO, PROPOSTA e MOTIVO PERDA.
- Leitura da planilha falhando interrompe a execução, para não repetir abordagens por falta de histórico. Aba vazia é permitida.
- Escrita usa RAW para que textos de fontes externas não sejam interpretados como fórmulas. Leads existentes continuam sendo ignorados, preservando o acompanhamento manual; não execute duas instâncias simultâneas na mesma aba.
- MOBILE STATUS não afirma que o site é bom no celular só pela presença de viewport. A análise de HTML é triagem; sites renderizados por JavaScript e sinais comerciais exigem revisão humana.

Validação local: `npm test` na raiz. Nenhum teste envia mensagens, grava na planilha ou chama OpenAI.
