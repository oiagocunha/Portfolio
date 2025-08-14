import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Technologies = () => {
  return (
    <section id="tecnologias" className="container py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
        MINHAS <span className="gradient-text">TECNOLOGIAS</span>.
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Linguagens</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            JavaScript, TypeScript, Node.js, Python, PHP, HTML5, CSS3
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Frameworks</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            React, Next.js, Express, Vue.js, Laravel
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Ferramentas</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Git, Docker, VS Code, Vite, Webpack, Babel, Figma
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Bancos de Dados</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            MySQL, PostgreSQL, MongoDB, SQLite, Supabase
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Technologies;
