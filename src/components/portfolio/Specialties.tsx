import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SpecialtiesProps {
  language: 'pt' | 'en';
}

const Specialties = ({ language }: SpecialtiesProps) => {
  const content = {
    pt: {
      title: 'MINHAS',
      subtitle: 'ESPECIALIDADES',
      specialties: [
        {
          emoji: "💻",
          title: "Desenvolvimento Frontend",
          desc: "Criação de interfaces modernas e responsivas utilizando React, JavaScript, HTML5 e CSS3. Foco na experiência do usuário e performance.",
        },
        {
          emoji: "⚙️",
          title: "Desenvolvimento Backend",
          desc: "Desenvolvimento de APIs robustas e escaláveis com Node.js, Python e PHP. Integração com bancos de dados e serviços externos.",
        },
        {
          emoji: "📱",
          title: "Design Responsivo",
          desc: "Criação de layouts que se adaptam perfeitamente a todos os dispositivos, garantindo uma experiência consistente em qualquer tela.",
        },
        { emoji: "🌐", title: "Website", desc: "Desenvolvimento de sites modernos e responsivos, garantindo a melhor experiência para seus usuários." },
        { emoji: "🛒", title: "Loja Online", desc: "Criação de e-commerces intuitivos, otimizados para conversão e performance." },
        { emoji: "📰", title: "Blog", desc: "Construção de blogs e plataformas de conteúdo dinâmicas, personalizadas para sua necessidade." },
      ],
    },
    en: {
      title: 'MY',
      subtitle: 'SPECIALTIES',
      specialties: [
        {
          emoji: "💻",
          title: "Frontend Development",
          desc: "Creation of modern and responsive interfaces using React, JavaScript, HTML5 and CSS3. Focus on user experience and performance.",
        },
        {
          emoji: "⚙️",
          title: "Backend Development",
          desc: "Development of robust and scalable APIs with Node.js, Python and PHP. Integration with databases and external services.",
        },
        {
          emoji: "📱",
          title: "Responsive Design",
          desc: "Creation of layouts that adapt perfectly to all devices, ensuring a consistent experience on any screen.",
        },
        { emoji: "🌐", title: "Website", desc: "Development of modern and responsive websites, ensuring the best experience for your users." },
        { emoji: "🛒", title: "Online Store", desc: "Creation of intuitive e-commerces, optimized for conversion and performance." },
        { emoji: "📰", title: "Blog", desc: "Construction of dynamic blogs and content platforms, customized to your needs." },
      ],
    },
  };

  const c = content[language];
  return (
    <section id="especialidades" className="container py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
        {c.title} <span className="gradient-text">{c.subtitle}</span>.
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {c.specialties.map((s) => (
          <Card key={s.title} className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>
                  {s.emoji}
                </span>
                <span>{s.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
