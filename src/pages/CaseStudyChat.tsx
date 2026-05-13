import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MermaidDiagram } from "@/components/shared/MermaidDiagram";
import { CaseStudyText } from "@/components/shared/CaseStudyText";
import { useI18n } from "@/i18n";

const CaseStudyChat = () => {
  const { t } = useI18n();
  const cs = t.caseStudies.chatPlatform;

  return (
    <MainLayout>
      <section className="container pt-24 pb-12">
        <p className="text-sm text-muted-foreground">{cs.label}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{cs.title}</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">{cs.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <Badge key={tag} variant={tag === "Temporal" ? "default" : "secondary"}>
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      <section className="container pb-12 grid gap-6 lg:grid-cols-3">
        {cs.summaryCards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              {card.paragraphs.map((paragraph) => (
                <CaseStudyText key={paragraph} text={paragraph} />
              ))}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container pb-12 space-y-6">
        <h2 className="text-2xl font-semibold">{cs.architectureTitle}</h2>
        <MermaidDiagram title={cs.diagramTitles.systemFlow} chart={cs.charts.systemFlow} />
        <MermaidDiagram
          title={cs.diagramTitles.backendArchitecture}
          chart={cs.charts.backendArchitecture}
        />
        <MermaidDiagram title={cs.diagramTitles.sequence} chart={cs.charts.sequence} />
      </section>

      <section className="container pb-12 grid gap-6 lg:grid-cols-2">
        {cs.detailCards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              {card.items.map((item) => (
                <CaseStudyText key={item} text={`- ${item}`} />
              ))}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container pb-20">
        <h2 className="text-2xl font-semibold">{cs.roleTitle}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 text-muted-foreground">
          {cs.roles.map((role) => (
            <p key={role.label}>
              <strong>{role.label}:</strong> {role.text}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="hero">
            <Link to="/#contato">{cs.cta.contact}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/#projetos">{cs.cta.backToProjects}</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudyChat;
