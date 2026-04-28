# CLAUDE.md

Instruções para o Claude seguir sempre que eu interagir com este projeto.

## Sobre mim e o projeto

- **Sobre mim:** sou Camila Ferreira, desenvolvedora frontend júnior, baseada em Valencia, Spain. Estou estudando e construindo meu primeiro portfólio profissional.
- **Sobre o projeto:** portfólio pessoal em React, migrado da versão anterior em HTML/Bootstrap. O objetivo é mostrar minhas habilidades técnicas para recrutadores e potenciais clientes.

## Stack atual

- **React 18** com Vite 5
- **Tailwind CSS 3** para estilização
- **JavaScript** (sem TypeScript por enquanto)
- **Node.js 18+**

Não troque a stack sem me perguntar antes.

## Comunicação

- **Sempre responda em português brasileiro**, exceto se eu pedir explicitamente o contrário
- Lembre que sou júnior — explique conceitos novos de forma didática, sem assumir que já sei tudo
- Ao sugerir uma escolha técnica, explique o "porquê" (trade-offs, alternativas, quando usar)
- Prefira respostas diretas e práticas a respostas longas e teóricas
- Se eu pedir algo que pode ter consequências negativas (ex: trocar de stack, instalar muitas libraries), me avise antes

## Princípios de implementação (obrigatórios)

Toda implementação neste projeto deve seguir **SOLID** e **TDD**. Isso vale tanto para código novo quanto para refatorações.

### SOLID

Aplicar os cinco princípios, adaptados ao contexto React/JavaScript:

- **S — Single Responsibility:** cada componente, função e módulo deve ter uma única responsabilidade clara. Se um componente está renderizando UI E buscando dados E formatando datas, separe.
- **O — Open/Closed:** componentes devem ser abertos para extensão (via `props`, `children`, composição) e fechados para modificação. Em vez de adicionar mais `if`s, prefira passar comportamento por prop ou compor componentes menores.
- **L — Liskov Substitution:** componentes que compartilham um "contrato" (mesmas props) devem ser intercambiáveis sem quebrar a interface. Ex: um `<Button>` e um `<LinkButton>` devem aceitar as mesmas props básicas.
- **I — Interface Segregation:** não force um componente a receber props que ele não usa. Prefira componentes menores e específicos a um componente "canivete suíço" com 20 props opcionais.
- **D — Dependency Inversion:** dependa de abstrações, não de implementações concretas. Em React, isso significa: receber dados via props/context em vez de importar fontes de dados diretamente; injetar handlers em vez de chamar APIs dentro do componente; usar hooks customizados para isolar lógica.

Ao implementar algo novo, sempre se pergunte: "qual princípio do SOLID estou aplicando aqui?" e justifique no comentário do PR ou commit, se necessário.

### TDD (Test-Driven Development)

Seguir o ciclo **Red → Green → Refactor** para toda lógica nova:

1. **Red:** escreva primeiro um teste que falha, descrevendo o comportamento esperado.
2. **Green:** implemente o mínimo de código necessário para o teste passar.
3. **Refactor:** melhore o código mantendo todos os testes verdes.

Regras práticas:

- **Não escrever código de produção sem um teste falhando antes** (exceto setup de configuração, estilos puramente visuais e scaffolding inicial).
- Use **Vitest** + **@testing-library/react** + **@testing-library/jest-dom** como stack de testes (instalar como dev dependencies se ainda não estiverem).
- Estrutura de arquivos: cada `Componente.jsx` tem um `Componente.test.jsx` ao lado, e cada `funcao.js` tem um `funcao.test.js` ao lado.
- Cobrir: renderização de componentes, interações do usuário (cliques, digitação), lógica condicional e funções utilitárias. Não testar implementação interna do React.
- Rodar `npm run test` deve passar em 100% antes de qualquer commit.
- Para componentes puramente visuais (que apenas mostram dados das props), um único teste de smoke ("renderiza sem quebrar e exibe os dados recebidos") é suficiente.
- **Descrições dos testes (strings de `describe`, `it` e `test`) devem ser sempre em inglês**, mesmo que o resto da comunicação no projeto seja em português. Isso alinha o output da suíte com a convenção da comunidade JavaScript e mantém os erros do CI legíveis em qualquer ambiente. Comentários internos podem continuar em português.

Quando me pedir para implementar uma feature, **sempre comece pelo teste**, mostre o teste falhando (descrevendo o erro esperado), e só depois implemente o código.

## Estrutura do projeto

```
camila-portfolio-react/
├── public/images/          # Screenshots dos projetos, foto, favicon
├── src/
│   ├── components/         # Um componente por seção
│   ├── data/portfolio.js   # ← TODO conteúdo editável fica aqui
│   ├── App.jsx             # Composição das seções
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais + camada @layer components
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js      # Cores, fontes e tokens de design
└── postcss.config.js
```

## Convenções de código

- **Componentes funcionais** com `export default` (sem class components)
- **Estilização exclusivamente com Tailwind** — não usar CSS modules, styled-components, nem CSS isolado por componente
- **Dados separados de apresentação:** texto, links e listas ficam em `src/data/portfolio.js`. Componentes apenas consomem.
- **Cores e fontes** vêm do `tailwind.config.js` (variáveis customizadas como `bg-dark-navy`, `text-accent-green`)
- **Classes utilitárias compartilhadas** (botões, títulos de seção) ficam em `src/index.css` na camada `@layer components`
- **Acessibilidade básica:** sempre incluir `alt` em imagens, `aria-label` em botões/links sem texto, `target="_blank"` deve vir com `rel="noreferrer"`
- **Imagens** vão em `public/images/` e são referenciadas por path absoluto começando com `/images/...`
- **Imports** entre arquivos do projeto sempre com extensão `.jsx` (ex: `import Hero from './Hero.jsx'`)

## Onde editar o quê

| O que eu quero mudar          | Onde editar                                    |
| ----------------------------- | ---------------------------------------------- |
| Bio, nome, título, foto       | `src/data/portfolio.js` → `personalInfo`       |
| Parágrafos do "About"         | `src/data/portfolio.js` → `aboutParagraphs`    |
| Lista de skills               | `src/data/portfolio.js` → `skills`             |
| Adicionar/editar projetos     | `src/data/portfolio.js` → `projects`           |
| E-mail, GitHub, LinkedIn      | `src/data/portfolio.js` → `contacts`           |
| Itens da navegação            | `src/data/portfolio.js` → `navLinks`           |
| Cores e fontes                | `tailwind.config.js`                            |
| Estilos compartilhados        | `src/index.css` → `@layer components`          |
| Layout/composição das seções  | `src/App.jsx`                                  |
| Comportamento de uma seção    | `src/components/<NomeDaSecao>.jsx`             |

## Comandos úteis

```bash
npm install        # Instalar dependências
npm run dev        # Rodar localmente (http://localhost:5173)
npm run build      # Build de produção (gera pasta dist/)
npm run preview    # Pré-visualizar o build
npm run test       # Rodar a suíte de testes (Vitest)
npm run test:watch # Rodar testes em modo watch durante desenvolvimento
```

## Workflow Git

- Branch principal: `main`
- Repositório: GitHub (`camilapferreira/...`)
- Deploy: Netlify, build automático a cada push na `main`
- Antes de pedir review ou deploy, sempre rodar `npm run build` localmente para garantir que compila sem erros

## O que NÃO fazer (sem perguntar antes)

- Trocar a stack (React → Next.js, JS → TS, Tailwind → outra coisa)
- Instalar libraries de UI prontas (Material UI, Chakra, Ant Design)
- Adicionar muitas dependências novas (mais de 1 por feature)
- Quebrar a identidade visual (paleta dark navy + verde menta + roxo)
- Refatorações grandes que não foram pedidas
- Apagar a foto, projetos ou textos sem confirmar

## O que SEMPRE fazer

- **Seguir SOLID e TDD em toda implementação** (ver seção "Princípios de implementação")
- Começar pelo teste (Red) antes de escrever código de produção
- Rodar `npm run test` e garantir 100% verde antes de commitar
- Verificar com `npm run build` que o projeto compila depois de mudanças
- Manter o código simples e legível (sou júnior, prefiro entender a ter algo "elegante" e confuso)
- Manter responsividade (testar mental ou estruturalmente em mobile)
- Atualizar o `CLAUDE.md` se mudarmos uma convenção importante
- Atualizar o `README.md` quando adicionar uma feature ou comando novo

## Próximas ideias para o portfólio (backlog informal)

- [x] ~~**(prioridade)** Configurar Vitest + Testing Library (pré-requisito para o TDD adotado)~~ ✅ feito em 2026-04-28
- [ ] Adicionar seção de experiência profissional ou timeline
- [ ] Implementar dark/light mode toggle
- [ ] Adicionar formulário de contato funcional (Netlify Forms ou EmailJS)
- [ ] Animações de entrada com Framer Motion
- [ ] SEO + Open Graph tags melhorados
- [ ] Versão em inglês e português
