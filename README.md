# 🚀 Portfólio Iago Cunha - Modularizado

Bem-vindo ao meu portfólio! Este site foi desenvolvido para apresentar minhas habilidades, projetos e especialidades como desenvolvedor Full Stack, agora com **arquitetura modular** para melhor manutenibilidade e escalabilidade.

## ✨ Introdução

Este portfólio foi criado com o objetivo de transformar ideias em experiências digitais incríveis. Ele apresenta minhas especialidades, projetos e informações de contato, ajudando empresas e empreendedores a alcançarem seus objetivos através da tecnologia.

**🆕 Nova versão modularizada** - O código foi refatorado para uma arquitetura mais limpa e organizada!

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização modular com variáveis CSS e responsividade
- **JavaScript (ES6+)** - Módulos ES6 para funcionalidades dinâmicas
- **Bootstrap Icons** - Ícones modernos e escaláveis
- **Google Fonts** - Tipografia estilizada com a fonte Poppins

### Bibliotecas Externas

- **Swiper.js** - Carrossel interativo e responsivo
- **Typewriter.js** - Efeito de digitação animada

### Ferramentas de Desenvolvimento

- **Arquitetura Modular** - CSS e JavaScript organizados em módulos
- **ES6 Modules** - Importação/exportação nativa de módulos
- **CSS @import** - Modularização de estilos

## 📁 Estrutura do Projeto (Modularizada)

```text
portfolio/
├── index.html                    # Página principal
├── obrigado.html                # Página de agradecimento
├── README.md                    # Documentação do projeto
├── backup/                      # Arquivos originais (antes da modularização)
│   ├── style.css
│   ├── script.js
│   └── menu.js
├── assets/                      # Recursos estáticos
│   └── img/
│       ├── icons/              # Ícones SVG das tecnologias
│       └── images/             # Imagens do site
├── config/                     # Configurações (se necessário)
└── src/                        # Código fonte modularizado
    ├── css/                    # Estilos CSS modulares
    │   ├── main.css           # Arquivo principal de importação
    │   ├── utilities/         # Utilitários CSS
    │   │   ├── variables.css  # Variáveis CSS e temas
    │   │   ├── base.css       # Reset e estilos base
    │   │   ├── typography.css # Tipografia
    │   │   └── responsive.css # Media queries
    │   ├── layout/            # Layout components
    │   │   ├── header.css     # Cabeçalho
    │   │   └── footer.css     # Rodapé
    │   └── components/        # Componentes específicos
    │       ├── buttons.css    # Botões e elementos interativos
    │       ├── mobile-menu.css # Menu mobile
    │       ├── hero.css       # Seção principal (topo)
    │       ├── especialidades.css # Seção de especialidades
    │       ├── tecnologias.css # Seção de tecnologias
    │       ├── about.css      # Seção sobre mim
    │       ├── portfolio.css  # Seção de projetos
    │       ├── contact-form.css # Formulário de contato
    │       └── back-to-top.css # Botão voltar ao topo
    └── js/                     # JavaScript modular
        ├── main.js            # Arquivo principal de inicialização
        └── modules/           # Módulos JavaScript
            ├── theme-toggle.js # Alternador de tema
            ├── mobile-menu.js  # Menu mobile
            ├── typewriter.js   # Efeito typewriter
            ├── swiper-manager.js # Gerenciador do Swiper
            └── back-to-top.js  # Botão voltar ao topo
```

## 🧩 Modularização HTML

### Componentes HTML

O HTML também foi modularizado para melhor organização e reutilização:

```text
src/html/
├── components/                # Componentes reutilizáveis
│   ├── header.html           # Cabeçalho com navegação
│   ├── footer.html           # Rodapé
│   └── back-to-top.html      # Botão voltar ao topo
└── sections/                 # Seções específicas
    ├── hero.html             # Seção principal (topo)
    ├── especialidades.html   # Carrossel de especialidades
    ├── tecnologias.html      # Grade de tecnologias
    ├── sobre.html            # Seção sobre mim
    ├── portfolio.html        # Galeria de projetos
    └── contato.html          # Formulário de contato
```

### Sistema de Carregamento

- **`src/js/modules/html-loader.js`**: Módulo responsável por carregar e montar os componentes
- **`index-modular.html`**: Versão do site que carrega componentes automaticamente
- **Montagem Dinâmica**: Os componentes são carregados via fetch e inseridos no DOM

### Como Usar

1. **Automático**: Use `index-modular.html` para carregamento dinâmico
2. **Manual**: Consulte `COMPONENTES.md` para instruções de montagem manual
3. **Build Process**: Implemente um sistema de build para concatenar os arquivos

## 🌟 Funcionalidades

### 🎨 Interface

- **🌓 Tema Claro/Escuro**: Alternância dinâmica entre temas com troca automática de logotipo e cores
- **📱 Design Responsivo**: Adaptação perfeita para dispositivos móveis, tablets e desktops
- **⌨️ Efeito Typewriter**: Animação de digitação na seção principal
- **🔄 Carrossel Interativo**: Apresentação de especialidades com Swiper.js

### 🔧 Funcionalidades Técnicas

- **🔝 Botão "Voltar ao Topo"**: Navegação facilitada com botão que aparece ao rolar a página
- **📝 Formulário de Contato**: Formulário funcional integrado ao [FormSubmit](https://formsubmit.co/)
- **📊 Otimização SEO**: Estrutura semântica para melhor indexação
- **📱 Menu Mobile**: Menu responsivo com animações para dispositivos móveis

### 🏗️ Arquitetura

- **🧩 Modularização CSS**: Estilos organizados por responsabilidade
- **⚡ ES6 Modules**: JavaScript modular para melhor manutenção
- **🎯 Separation of Concerns**: Separação clara entre estrutura, estilo e comportamento
- **♻️ Reutilização de Código**: Componentes reutilizáveis e bem definidos

## 🚀 Como Usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/oiagocunha/Portfolio.git
   ```

2. **Navegue até o diretório:**

   ```bash
   cd Portfolio
   ```

3. **Abra o projeto:**

   - Abra `index.html` diretamente no navegador, ou
   - Use Live Server no VSCode para desenvolvimento local

## 🎨 Personalização

### 🎨 Alteração de Cores

O site utiliza variáveis CSS centralizadas em `src/css/utilities/variables.css`:

```css
:root {
    /* Tema Escuro (padrão) */
    --background-color: black;
    --text-color: white;
    --primary-color: #8E44AD;
    --button-hover-shadow: #7d23a3;
    /* Outras variáveis */
}

body.light-theme {
    /* Tema Claro */
    --background-color: #fafafa;
    --text-color: black;
    --primary-color: #fa8e50;
    /* Outras variáveis */
}
```

### 🧩 Adição de Novos Componentes

1. Crie um novo arquivo CSS em `src/css/components/`
2. Adicione o import em `src/css/main.css`
3. Se necessário, crie o módulo JavaScript correspondente em `src/js/modules/`
4. Importe e inicialize no `src/js/main.js`

### 📱 Personalização de Responsividade

Edite as media queries em `src/css/utilities/responsive.css`

## 🏗️ Arquitetura Modular

### CSS Modular

- **Utilities**: Variáveis, reset, tipografia e responsividade
- **Layout**: Estruturas principais (header, footer)
- **Components**: Componentes específicos e reutilizáveis

### JavaScript Modular

- **ES6 Modules**: Cada funcionalidade em módulo separado
- **Inicialização Centralizada**: `main.js` coordena todos os módulos
- **Separation of Concerns**: Cada módulo tem responsabilidade única

## 📊 Benefícios da Modularização

- ✅ **Manutenibilidade**: Fácil localização e edição de estilos específicos
- ✅ **Escalabilidade**: Adição simples de novos componentes
- ✅ **Reutilização**: Componentes podem ser reutilizados em outros projetos
- ✅ **Performance**: Melhor controle de carregamento de recursos
- ✅ **Colaboração**: Múltiplos desenvolvedores podem trabalhar simultaneamente
- ✅ **Debugging**: Isolamento facilita identificação de problemas

## 🔗 Links

- **🌐 Live Demo**: [portfolio-oiagocunha.vercel.app](https://portfolio-oiagocunha.vercel.app)
- **📂 Repositório**: [GitHub](https://github.com/oiagocunha/Portfolio)

## 📬 Contato

- **💼 LinkedIn**: [oiagocunha](https://www.linkedin.com/in/oiagocunha/)
- **💻 GitHub**: [oiagocunha](https://github.com/oiagocunha)
- **📸 Instagram**: [oiagocunha](https://www.instagram.com/oiagocunha/)
- **📧 Email**: [dev.iagocunha@gmail.com](mailto:dev.iagocunha@gmail.com)

## 📝 Changelog

### v2.0 - Modularização Completa

- ♻️ **Refatoração total**: CSS e JavaScript modularizados
- 🏗️ **Nova arquitetura**: Separação por responsabilidades
- 📁 **Estrutura organizada**: Componentes bem definidos
- ⚡ **ES6 Modules**: JavaScript moderno
- 🎯 **Melhores práticas**: Código mais limpo e manutenível

### v2.1 - Modularização HTML Completa

- 🧩 **HTML Modularizado**: Componentes e seções em arquivos separados
- ⚡ **Carregamento Dinâmico**: Sistema automático de montagem via JavaScript
- 📁 **Estrutura Organizada**: Componentes em `src/html/components/` e seções em `src/html/sections/`
- 🔧 **Flexibilidade**: Suporte tanto para montagem automática quanto manual
- 📖 **Documentação**: Guia completo de uso dos componentes modulares

### v1.0 - Versão Original

- 🎨 Design responsivo completo
- 🌓 Sistema de temas claro/escuro
- 📱 Menu mobile
- ⌨️ Efeitos de animação

---

**Desenvolvido por [Iago Cunha](https://github.com/oiagocunha)**

*Transformando ideias em experiências digitais incríveis* ✨
