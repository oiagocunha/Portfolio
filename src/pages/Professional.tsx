import { MainLayout } from "@/layouts/MainLayout";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Technologies from "@/components/portfolio/Technologies";
import { Download, Mail, ArrowUpRight } from "lucide-react";

export default function Professional() {
  const { locale } = useI18n();
  const pt = locale === "pt";
  const resumeHref = pt ? "/curriculo-iago-cunha.pdf" : "/resume-iago-cunha.pdf";
  const resumeLabel = pt ? "Baixar currículo (PDF)" : "Download résumé (PDF)";
  const email = "dev.iagocunha@gmail.com";
  const mailSubject = encodeURIComponent(pt ? "Oportunidade profissional" : "Job opportunity");
  // mailto often does nothing when no desktop mail client is set; Gmail compose works in the browser.
  const mailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${mailSubject}`;

  return (
    <MainLayout>
      <section id="hero" className="container pt-28 pb-12 grid gap-10 md:grid-cols-[1fr_240px] items-center">
        <div>
          <p className="text-sm font-medium text-accent">
            {pt ? "PERFIL PROFISSIONAL" : "PROFESSIONAL PROFILE"}
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Iago Cunha</h1>
          <p className="mt-4 text-2xl font-semibold">
            Backend · {pt ? "IA Generativa & Automação" : "Generative AI & Automation"}
          </p>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            {pt
              ? "Desenvolvedor Backend & IA no Sistema FIEC / Observatório da Indústria. Trabalho com APIs, orquestração de agentes, pipelines RAG, autenticação corporativa e aplicações em Kubernetes."
              : "Backend & AI developer at Sistema FIEC / Industry Observatory. I work on APIs, agent orchestration, RAG pipelines, corporate authentication, and Kubernetes applications."}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {pt
              ? "Fortaleza, Brasil · Português nativo · Inglês B2 · Disponível para remoto"
              : "Fortaleza, Brazil · Native Portuguese · English B2 · Open to remote"}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="hero">
              <a href={resumeHref} download data-event="resume_download">
                <Download className="mr-2 h-4 w-4" />
                {resumeLabel}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={mailHref} target="_blank" rel="noreferrer" data-event="email_click">
                <Mail className="mr-2 h-4 w-4" />
                {pt ? "Conversar sobre uma vaga" : "Discuss an opportunity"}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/oiagocunha" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {email}
            {" · "}
            <a className="underline underline-offset-4 hover:text-foreground" href={`mailto:${email}?subject=${mailSubject}`}>
              mailto
            </a>
          </p>
        </div>
        <img
          src="/images/Perfil.jpg"
          width="240"
          height="240"
          alt="Iago Cunha"
          className="rounded-3xl w-48 md:w-60 justify-self-center"
        />
      </section>

      <Experience />
      <Projects audience="professional" />
      <Technologies />

      <section className="container py-16" id="formacao">
        <h2 className="text-3xl font-bold">{pt ? "Formação" : "Education"}</h2>
        <p className="mt-5 font-semibold">
          Estácio — {pt ? "Análise e Desenvolvimento de Sistemas" : "Systems Analysis and Development"}
        </p>
        <p className="mt-2 text-muted-foreground">
          {pt ? "Conclusão prevista: dezembro de 2026." : "Expected completion: December 2026."}
        </p>
        <p className="mt-8 text-muted-foreground">
          {pt
            ? "Para oportunidades em backend, IA aplicada ou automação:"
            : "For backend, applied AI, or automation roles:"}
        </p>
        <a className="inline-block mt-3 text-accent underline" href="mailto:dev.iagocunha@gmail.com">
          dev.iagocunha@gmail.com
        </a>
      </section>
    </MainLayout>
  );
}
