import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";

const Contact = () => {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;

    try {
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !message) throw new Error(t.contact.errorDescription);

      const formDataToSend = new FormData();
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      if (subject) formDataToSend.append("subject", subject);
      formDataToSend.append("message", message);
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_subject", subject ? `${t.contact.formSubject}: ${subject}` : t.contact.formSubject);

      const response = await fetch("https://formsubmit.co/0abf524fd7a7652976c723ab11ef2cce", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Erro ao enviar mensagem");

      toast({
        title: t.contact.successTitle,
        description: t.contact.successDescription,
      });
      form.reset();
    } catch (err: any) {
      toast({
        title: t.contact.errorTitle,
        description: err?.message || "Tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
      </FadeInSection>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeInSection delay={0.1} direction="left">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-md border p-2 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{t.contact.email}</p>
                  <p className="text-sm text-muted-foreground">dev.iagocunha@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md border p-2 text-accent">
                  <MapPin className="h-5 w-5" />
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
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Input
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                      name="name"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                      name="email"
                    />
                  </div>
                </div>

                <Input
                  placeholder={t.contact.subjectPlaceholder}
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                  name="subject"
                />

                <Textarea
                  placeholder={t.contact.messagePlaceholder}
                  required
                  rows={5}
                  className="transition-all duration-300 focus:scale-[1.02] resize-none"
                  name="message"
                />
                

                <Button
                  type="submit"
                  className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  disabled={loading}
                  variant="hero"
                >
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