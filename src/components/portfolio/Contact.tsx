import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import FadeInSection from "./FadeInSection";

const Contact = () => {
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

      if (!name || !email || !message) throw new Error("Preencha os campos obrigatórios.");

      const formDataToSend = new FormData();
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      if (subject) formDataToSend.append("subject", subject);
      formDataToSend.append("message", message);
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_subject", subject ? `Novo contato do portfólio: ${subject}` : "Novo contato do portfólio");

      const response = await fetch("https://formsubmit.co/0abf524fd7a7652976c723ab11ef2cce", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Erro ao enviar mensagem");

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      form.reset();
    } catch (err: any) {
      toast({
        title: "Falha no envio",
        description: err?.message || "Tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">VAMOS CONVERSAR.</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Tem um projeto em mente? Vamos transformar suas ideias em realidade digital!
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
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">dev.iagocunha@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md border p-2 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-sm text-muted-foreground">Fortaleza, Ceará, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} direction="right">
          <Card>
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                      name="name"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                      name="email"
                    />
                  </div>
                </div>

                <Input
                  placeholder="Assunto"
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                  name="subject"
                />

                <Textarea
                  placeholder="Sua mensagem..."
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
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
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