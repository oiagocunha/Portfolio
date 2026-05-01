import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CaseStudyCLT = () => {
  return (
    <MainLayout>
      <section className="container pt-24 pb-12">
        <p className="text-sm text-muted-foreground">Case Study</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Estabilização de uma Plataforma de IA Conversacional Multi-Base com Temporal, RAG e LDAP
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Atuação full-stack de plataforma de IA, conectando produto, infraestrutura e operação em ambiente
          de produção/dev, com foco em confiabilidade de workflows LLM e governança de dados.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>Temporal</Badge>
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Kafka</Badge>
          <Badge variant="secondary">Docker Compose</Badge>
          <Badge variant="secondary">Supabase RPC + Vector Search</Badge>
          <Badge variant="secondary">LDAP/AD</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">MongoDB</Badge>
        </div>
      </section>

      <section className="container pb-12 grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader><CardTitle>Contexto</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            O Chat com Agente de IA operava com múltiplos serviços (Chat, workflows, infra e api)
            e precisava garantir respostas corretas por domínio, operação confiável em dev/prod-like e
            autenticação corporativa via LDAP.
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Problema principal</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            Mesmo com seleção de modelo no chat, consultas do domínio GEPLA retornavam respostas genéricas.
            Em paralelo, havia instabilidade em containers/healthchecks e fricção em autenticação LDAP vs local.
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Resultado</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            Roteamento de conhecimento passou a respeitar domínio/modelo, stack local/dev ficou previsível e
            o debug operacional acelerou com telemetria orientada a evidência.
          </CardContent>
        </Card>
      </section>

      <section className="container pb-12">
        <h2 className="text-2xl font-semibold">Atuação por componente</h2>
        <div className="mt-4 space-y-4 text-muted-foreground">
          <p><strong>Chat com Agente de IA:</strong> integração com backend OpenAI-compatible (maio-api), troubleshooting de LDAP/sessão/permissão e estabilização Docker.</p>
          <p><strong>workflows:</strong> ajuste de activities/tasks, propagação de model no pipeline RAG, fallback por assinatura e logs estruturados.</p>
          <p><strong>infra:</strong> operação de stack distribuída (worker, dispatcher, dlq, kafka, temporal), correção de healthchecks e startup.</p>
          <p><strong>api:</strong> integração ponta a ponta com canais consumidores para endpoint/modelo corretos.</p>
        </div>
      </section>

      <section className="container pb-12">
        <h2 className="text-2xl font-semibold">Arquitetura (visão simplificada)</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <div className="rounded-lg border p-4 text-sm">Chat com Agente de IA<br />Entrada, auth e sessão</div>
          <div className="rounded-lg border p-4 text-sm">Workflows<br />Orquestração e regras</div>
          <div className="rounded-lg border p-4 text-sm">RAG + Supabase RPC<br />Busca vetorial por domínio</div>
          <div className="rounded-lg border p-4 text-sm">Api / modelo<br />Resposta final auditável</div>
        </div>
      </section>

      <section className="container pb-12">
        <h2 className="text-2xl font-semibold">Decisões técnicas relevantes</h2>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li>- Compatibilidade por assinatura para não quebrar workers em versões antigas de framework.</li>
          <li>- Roteamento explícito por model com regra verificável em log.</li>
          <li>- Priorização de chave/permissão correta para busca vetorial em ambientes com políticas distintas.</li>
          <li>- Separação clara entre falha de aplicação e falha de infraestrutura no troubleshooting.</li>
        </ul>
      </section>

      <section className="container pb-20">
        <h2 className="text-2xl font-semibold">Minha atuação (resumo objetivo)</h2>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li>- Diagnóstico de roteamento RAG ponta a ponta (workflow → activity → task → service → vector store).</li>
          <li>- Correção de mismatch entre código-fonte e wheel no worker (rebuild + redeploy).</li>
          <li>- Validação de ingestão GEPLA e RPC correta no Supabase.</li>
          <li>- Padronização do fluxo de autenticação LDAP para ambiente corporativo.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Impacto</h2>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li>- Roteamento de conhecimento passou a respeitar domínio/modelo.</li>
          <li>- Stack local/dev estabilizada e previsível para operação e testes.</li>
          <li>- Debug mais rápido com logs estruturados orientados a evidência.</li>
          <li>- Fluxo LDAP compreendido e controlado para ambiente corporativo.</li>
        </ul>
        <div className="mt-6">
          <Button asChild variant="hero">
            <Link to="/#contato">Vamos conversar sobre desafios de plataforma e IA</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudyCLT;
