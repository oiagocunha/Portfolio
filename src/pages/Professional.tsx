import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { useI18n } from "@/i18n";
import { localizedPath } from "@/lib/paths";
import { Button } from "@/components/ui/button";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Technologies from "@/components/portfolio/Technologies";
import { Download, Mail, ArrowUpRight } from "lucide-react";

const WorkflowShowcase = lazy(() => import("@/components/portfolio/WorkflowShowcase"));

export default function Professional() {
  const { t, locale } = useI18n();
  const p = t.professional;
  const email = "dev.iagocunha@gmail.com";
  const mailSubject = encodeURIComponent(p.mailSubject);
  // mailto often does nothing when no desktop mail client is set; Gmail compose works in the browser.
  const mailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${mailSubject}`;

  return (
    <MainLayout>
      <section id="hero" className="container pt-28 pb-12 grid gap-10 md:grid-cols-[1fr_240px] items-center">
        <div>
          <p className="text-sm font-medium text-accent">{p.eyebrow}</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Iago Cunha</h1>
          <p className="mt-4 text-2xl font-semibold">{p.role}</p>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">{p.summary}</p>
          <p className="mt-4 text-sm text-muted-foreground">{p.meta}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="hero">
              <a href={p.resumeHref} download data-event="resume_download">
                <Download className="mr-2 h-4 w-4" />
                {p.resumeLabel}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={mailHref} target="_blank" rel="noreferrer" data-event="email_click">
                <Mail className="mr-2 h-4 w-4" />
                {p.discussCta}
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
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href={`mailto:${email}?subject=${mailSubject}`}
            >
              {p.mailtoLabel}
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
      <Suspense fallback={null}>
        <WorkflowShowcase />
      </Suspense>
      <Technologies />

      <section className="container py-16" id="formacao">
        <h2 className="text-3xl font-bold">{p.educationTitle}</h2>
        <p className="mt-5 font-semibold">{p.educationDegree}</p>
        <p className="mt-2 text-muted-foreground">{p.educationExpected}</p>
        <p className="mt-8 text-muted-foreground">{p.closing}</p>
        <a className="inline-block mt-3 text-accent underline" href={`mailto:${email}`}>
          {email}
        </a>
        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">{p.icComplement}</p>
        <Link
          className="inline-block mt-2 text-sm text-accent underline underline-offset-4"
          to={localizedPath("/", locale)}
        >
          {p.icComplementCta}
        </Link>
      </section>
    </MainLayout>
  );
}
