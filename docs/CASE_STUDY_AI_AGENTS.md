# Case Study Plataforma corporativa de agentes de IA

## Contexto

Assistente corporativo multiagente com:

- chat OpenAI-compatible
- gateway FastAPI
- workflows Temporal
- RAG multi-domínio (e agentes híbridos RAG + SQL)
- canais assíncronos (Kafka / DLQ)
- autenticação corporativa (LDAP/AD)

## Problema

Em um domínio de conhecimento específico, o chat devolvia respostas genéricas mesmo com o agente/modelo correto selecionado.

## Hipóteses

1. Quebra na propagação de `model`/agente entre gateway → workflow → activity → RAG
2. Drift entre código-fonte e artefato (wheel) no worker Temporal
3. Contrato de busca vetorial apontando para a função/base errada

## O que foi entregue

- Propagação explícita do identificador do agente até o vector store
- Roteamento determinístico multiagente / multi-domínio
- Detecção de incompatibilidade de framework no worker
- Evolução de gateway, ingestões RAG, resiliência e auth no chat

## Anonimização

Não usar nomes internos de produto, framework, bases ou unidades de negócio.
Preferir: “assistente corporativo”, “domínio de conhecimento”, “agente especializado”, “gateway OpenAI-compatible”.
