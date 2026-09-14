import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, MapPin } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { spacing, typography, iconSizes, borderRadius } from "@/constants/design-tokens";

const Contact = () => {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const endpoint = import.meta.env.VITE_FORMSUBMIT_ENDPOINT;
      if (!endpoint) throw new Error(t.contact.errorEndpoint);

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();
      const honeypot = String(data.get("company") || "").trim();

      if (honeypot) {
        toast({
          title: t.contact.successTitle,
          description: t.contact.successDescription,
        });
        form.reset();
        return;
      }

      if (!name || !email || !message) throw new Error(t.contact.errorDescription);

      const formDataToSend = new FormData();
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      formDataToSend.append("_replyto", email);
      if (subject) formDataToSend.append("subject", subject);
      formDataToSend.append("message", message);
      formDataToSend.append("_captcha", "false");
      formDataToSend.append(
        "_subject",
        subject ? `${t.contact.formSubject}: ${subject}` : t.contact.formSubject,
      );

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formDataToSend,
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(t.contact.errorGeneric);

      const result = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;
      if (result && result.success === false) {
        throw new Error(result.message || t.contact.errorGeneric);
      }

      toast({
        title: t.contact.successTitle,
        description: t.contact.successDescription,
      });
      form.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error && err.message ? err.message : t.contact.errorGeneric;
      toast({
        title: t.contact.errorTitle,
        description: message,
      });
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  };

  return (
    <section id="contato" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.contact.title}</h2>
        <p className={`mt-4 text-center text-muted-foreground max-w-2xl mx-auto`}>
          {t.contact.subtitle}
        </p>
      </FadeInSection>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeInSection delay={0.1} direction="left">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`${borderRadius.md} border p-2 text-accent`}>
                  <Mail className={iconSizes.md} />
                </div>
                <div>
                  <p className="font-medium">{t.contact.email}</p>
                  <a
                    href="mailto:dev.iagocunha@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
                  >
                    dev.iagocunha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className={`${borderRadius.md} border p-2 text-accent`}>
                  <MapPin className={iconSizes.md} />
                </div>
                <div>
                  <p className="font-medium">{t.contact.location}</p>
                  <p className="text-sm text-muted-foreground">{t.contact.locationText}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} direction="right">
          <Card>
            <CardHeader>
              <CardTitle>{t.contact.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.nameLabel}</Label>
                    <Input
                      id="name"
                      placeholder={t.contact.namePlaceholder}
                      required
                      name="name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.emailLabel}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      required
                      name="email"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.subjectLabel}</Label>
                  <Input
                    id="subject"
                    placeholder={t.contact.subjectPlaceholder}
                    name="subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.messageLabel}</Label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.messagePlaceholder}
                    required
                    rows={5}
                    className="resize-none"
                    name="message"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading} variant="hero">
                  {loading ? (
                    t.contact.sending
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t.contact.sendButton}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
