import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { useI18n } from "@/i18n";
import { ROUTES, localizedPath } from "@/lib/paths";
import { EMAIL, LINKEDIN_URL } from "@/lib/contact";
import { accentLinkClass } from "@/lib/styles";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Technologies from "@/components/portfolio/Technologies";
import { Download, Mail, ArrowUpRight } from "lucide-react";

const WorkflowShowcase = lazy(() => import("@/components/portfolio/WorkflowShowcase"));

const textLink = accentLinkClass;

export default function Professional() {
  const { t, locale } = useI18n();
  const p = t.professional;
  const email = EMAIL;
  const mailSubject = encodeURIComponent(p.mailSubject);
  // mailto often does nothing when no desktop mail client is set; Gmail compose works in the browser.
  const mailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${mailSubject}`;

  return (
    <MainLayout>
      <section
        id="hero"
        aria-labelledby="profile-title"
        className="container grid gap-8 pb-12 pt-24 md:grid-cols-[1fr_12rem] md:items-start md:gap-12 md:pb-16 md:pt-32"
      >
        <div>
          <p className="font-mono text-xs text-muted-foreground">{p.eyebrow}</p>
          <h1 id="profile-title" className="mt-3 text-display font-semibold">
            Iago Cunha
          </h1>
          <p className="mt-2 text-xl font-medium leading-snug md:text-2xl">{p.role}</p>
          <p className="mt-5 max-w-measure text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">{p.meta}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={p.resumeHref} download data-event="resume_download">
                <Download aria-hidden />
                {p.resumeLabel}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={mailHref} target="_blank" rel="noreferrer" data-event="email_click">
                <Mail aria-hidden />
                {p.discussCta}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight aria-hidden />
              </a>
            </Button>
          </div>
          <p className="mt-3 flex flex-wrap items-center gap-x-2 font-mono text-xs text-muted-foreground">
            <span>{email}</span>
            <span aria-hidden>·</span>
            <a className={textLink} href={`mailto:${email}?subject=${mailSubject}`}>
              {p.mailtoLabel}
            </a>
          </p>
        </div>
        <ResponsiveImage
          src="/images/Perfil.jpg"
          sizes="(min-width: 768px) 192px, 128px"
          width="192"
          height="192"
          alt={t.hero.alt}
          className="aspect-square w-32 rounded-lg border object-cover md:w-48"
        />
      </section>

      <Experience />
      <Projects audience="professional" />
      <Suspense fallback={null}>
        <WorkflowShowcase />
      </Suspense>
      <Technologies />

      <section id="formacao" aria-labelledby="education-title" className="border-t py-16 md:py-20">
        <div className="container">
          <SectionHeading id="education-title" title={p.educationTitle} />
          {/* Aligns with the content column of the other sections (14rem + 2rem gap). */}
          <div className="md:ml-[16rem]">
            <div>
              <p className="font-semibold">{p.educationDegree}</p>
              <p className="mt-1 text-muted-foreground">{p.educationExpected}</p>
              <p className="mt-8">{p.closing}</p>
              <a className={textLink} href={`mailto:${email}`}>
                {email}
              </a>
              <p className="mt-8 max-w-measure text-sm text-muted-foreground">{p.icComplement}</p>
              <Link className={`${textLink} text-sm`} to={localizedPath(ROUTES.services, locale)}>
                {p.icComplementCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
