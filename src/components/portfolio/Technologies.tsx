import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TechnologiesProps {
  language: 'pt' | 'en';
}

const Technologies = ({ language }: TechnologiesProps) => {
  const content = {
    pt: {
      title: 'MINHAS',
      subtitle: 'TECNOLOGIAS',
      categories: [
        {
          title: 'Linguagens',
          content: 'JavaScript, TypeScript, Node.js, Python, PHP, HTML5, CSS3',
        },
        {
          title: 'Frameworks',
          content: 'React, Next.js, Express, Vue.js, Laravel',
        },
        {
          title: 'Ferramentas',
          content: 'Git, Docker, VS Code, Vite, Webpack, Babel, Figma',
        },
        {
          title: 'Bancos de Dados',
          content: 'MySQL, PostgreSQL, MongoDB, SQLite, Supabase',
        },
      ],
    },
    en: {
      title: 'MY',
      subtitle: 'TECHNOLOGIES',
      categories: [
        {
          title: 'Languages',
          content: 'JavaScript, TypeScript, Node.js, Python, PHP, HTML5, CSS3',
        },
        {
          title: 'Frameworks',
          content: 'React, Next.js, Express, Vue.js, Laravel',
        },
        {
          title: 'Tools',
          content: 'Git, Docker, VS Code, Vite, Webpack, Babel, Figma',
        },
        {
          title: 'Databases',
          content: 'MySQL, PostgreSQL, MongoDB, SQLite, Supabase',
        },
      ],
    },
  };

  const c = content[language];
  return (
    <section id="tecnologias" className="container py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
        {c.title} <span className="gradient-text">{c.subtitle}</span>.
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {c.categories.map((category, index) => (
          <Card key={index} className="animate-fade-in">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {category.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
