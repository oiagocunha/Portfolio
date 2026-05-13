# Sistema de Internacionalização (i18n)

Arquitetura de i18n leve e type-safe para React + TypeScript, sem dependências externas.

## 📁 Estrutura

```
src/i18n/
├── types.ts              # Contrato TypeScript central
├── locales/
│   ├── pt.ts            # Conteúdo em Português
│   ├── en.ts            # Conteúdo em Inglês
│   └── es.ts            # Conteúdo em Espanhol
├── I18nProvider.tsx     # Context Provider
├── index.ts             # Exports públicos
└── README.md            # Esta documentação
```

## 🎯 Princípios

1. **Conteúdo como Dados**: Não strings mágicas, apenas estruturas tipadas
2. **Zero Condicionais no JSX**: Sem `{language === 'pt' ? ... : ...}`
3. **Type Safety**: TypeScript garante que todos os idiomas têm a mesma estrutura
4. **Fácil Manutenção**: Um arquivo por idioma, todos seguem o mesmo contrato

## 🚀 Como Usar

### 1. Setup Inicial (já configurado)

No `main.tsx`:

```tsx
import { I18nProvider } from './i18n'

createRoot(document.getElementById("root")!).render(
  <I18nProvider defaultLocale="pt">
    <App />
  </I18nProvider>
);
```

### 2. Acessar Conteúdo em Componentes

```tsx
import { useI18n } from '@/i18n';

function MeuComponente() {
  const { t, locale, setLocale } = useI18n();

  return (
    <div>
      <h1>{t.hero.greeting}</h1>
      <p>{t.hero.description}</p>
      
      <button onClick={() => setLocale('en')}>
        English
      </button>
    </div>
  );
}
```

### 3. Exemplo: Hero Component

**Antes (com condicionais):**

```tsx
const Hero = ({ language }: { language: 'pt' | 'en' | 'es' }) => {
  const content = {
    pt: { greeting: 'Olá!', button: 'Contato' },
    en: { greeting: 'Hello!', button: 'Contact' },
    es: { greeting: '¡Hola!', button: 'Contacto' },
  };
  
  const c = content[language];
  
  return (
    <div>
      <h1>{c.greeting}</h1>
      <button>{c.button}</button>
    </div>
  );
};
```

**Depois (com i18n):**

```tsx
import { useI18n } from '@/i18n';

const Hero = () => {
  const { t } = useI18n();
  
  return (
    <div>
      <h1>{t.hero.greeting}</h1>
      <button>{t.hero.button}</button>
    </div>
  );
};
```

## 📝 Adicionar Novo Conteúdo

### 1. Definir Tipo em `types.ts`

```typescript
export interface PortfolioContent {
  // ... tipos existentes
  
  novaSecao: {
    titulo: string;
    items: Array<{
      nome: string;
      descricao: string;
    }>;
  };
}
```

### 2. Adicionar Conteúdo em Cada Idioma

**`locales/pt.ts`:**
```typescript
export const pt: PortfolioContent = {
  // ... conteúdo existente
  
  novaSecao: {
    titulo: 'Minha Nova Seção',
    items: [
      { nome: 'Item 1', descricao: 'Descrição em PT' }
    ]
  }
};
```

**`locales/en.ts`:**
```typescript
export const en: PortfolioContent = {
  // ... conteúdo existente
  
  novaSecao: {
    titulo: 'My New Section',
    items: [
      { nome: 'Item 1', descricao: 'Description in EN' }
    ]
  }
};
```

**`locales/es.ts`:**
```typescript
export const es: PortfolioContent = {
  // ... conteúdo existente
  
  novaSecao: {
    titulo: 'Mi Nueva Sección',
    items: [
      { nome: 'Item 1', descricao: 'Descripción en ES' }
    ]
  }
};
```

### 3. Usar no Componente

```tsx
function NovaSecao() {
  const { t } = useI18n();
  
  return (
    <section>
      <h2>{t.novaSecao.titulo}</h2>
      {t.novaSecao.items.map((item, i) => (
        <div key={i}>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
        </div>
      ))}
    </section>
  );
}
```

## 🔄 Trocar Idioma

### Via Hook

```tsx
import { useI18n } from '@/i18n';

function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  
  return (
    <div>
      <button onClick={() => setLocale('pt')}>🇧🇷</button>
      <button onClick={() => setLocale('en')}>🇺🇸</button>
      <button onClick={() => setLocale('es')}>🇪🇸</button>
      
      <p>Idioma atual: {locale}</p>
    </div>
  );
}
```

## ✅ Vantagens

### Type Safety

O TypeScript garante que todos os idiomas têm a mesma estrutura:

```typescript
// ✅ OK - todos os idiomas têm essa prop
t.hero.greeting

// ❌ ERRO - TypeScript acusa se faltar em algum idioma
t.hero.naoExiste
```

### Autocomplete

Seu editor sugere todas as chaves disponíveis:

```typescript
t.hero.  // <- VS Code mostra: greeting, typewriter, description, button, alt
```

### Manutenção Simples

- **1 tipo**: Define estrutura
- **3 arquivos**: Um por idioma
- **0 condicionais**: No JSX

### Escalabilidade

Adicionar novo idioma:
1. Criar `locales/fr.ts`
2. Implementar `PortfolioContent`
3. Adicionar em `I18nProvider.tsx`

## 🛠️ API

### `useI18n()`

```typescript
const { t, locale, setLocale } = useI18n();

// t: PortfolioContent - Conteúdo do idioma atual
// locale: 'pt' | 'en' | 'es' - Idioma atual
// setLocale: (locale: Locale) => void - Trocar idioma
```

### `I18nProvider`

```tsx
<I18nProvider defaultLocale="pt">
  {children}
</I18nProvider>
```

## 📊 Comparação

| Aspecto | Antes | Depois |
|---------|-------|--------|
| Props por componente | `language: 'pt' \| 'en' \| 'es'` | Nenhuma |
| Condicionais no JSX | `{lang === 'pt' ? ... : ...}` | Zero |
| Linhas por componente | ~80-150 | ~30-50 |
| Type safety | Parcial | Total |
| Autocomplete | Não | Sim |
| Manutenibilidade | Baixa | Alta |

## 🎓 Exemplo Completo

```tsx
import { useI18n } from '@/i18n';

function Portfolio() {
  const { t } = useI18n();
  
  return (
    <div>
      {/* Hero */}
      <section>
        <h1>{t.hero.greeting}</h1>
        <p>{t.hero.description}</p>
      </section>
      
      {/* About */}
      <section>
        <h2>{t.about.title}</h2>
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
      
      {/* Projects */}
      <section>
        <h2>{t.projects.title}</h2>
        {t.projects.items.map((project) => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
```

---

**Resultado**: Código limpo, tipado e fácil de manter. 🎉
