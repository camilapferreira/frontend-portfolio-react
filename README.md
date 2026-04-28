# Camila Ferreira — Frontend Developer Portfolio

Portfólio pessoal construído em **React + Vite + Tailwind CSS**, modernizando a versão anterior em HTML/Bootstrap. Mantém a identidade visual original (dark navy + verde menta) e organiza todo o conteúdo em um único arquivo de dados para facilitar a edição.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- JavaScript (ES6+)

## Pré-requisitos

- Node.js 18 ou superior
- npm (vem com o Node)

## Como rodar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev

# 3. Abra no navegador
# http://localhost:5173
```

## Como editar o conteúdo

Todo o conteúdo (bio, skills, projetos e contatos) está centralizado em **um único arquivo**:

```
src/data/portfolio.js
```

Edite esse arquivo para atualizar:
- Informações pessoais (`personalInfo`)
- Parágrafos da seção "About" (`aboutParagraphs`)
- Lista de habilidades (`skills`)
- Projetos com imagens, links e tags (`projects`)
- Redes sociais e e-mail (`contacts`)
- Itens da navegação (`navLinks`)

As **imagens dos projetos** ficam em `public/images/`. Para adicionar um projeto novo:

1. Coloque a screenshot em `public/images/meu-projeto.png`
2. Adicione um item ao array `projects` em `src/data/portfolio.js`
3. Salve — o Vite recarrega automaticamente

## Como customizar o visual

As cores, fontes e gradientes estão em `tailwind.config.js`. Os estilos compartilhados (botões, títulos de seção) ficam em `src/index.css` na camada `@layer components`.

## Build de produção

```bash
npm run build
```

A pasta `dist/` é gerada com tudo pronto para deploy.

Para testar o build localmente:

```bash
npm run preview
```

## Deploy no Netlify

A forma mais simples é conectar o repositório do GitHub ao Netlify:

1. Faça push do projeto para um repositório no GitHub
2. No Netlify, clique em **Add new site → Import an existing project**
3. Selecione o repositório
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **Deploy site**

Pronto, o portfólio fica online com URL pública e deploy automático a cada push.

## Estrutura de pastas

```
camila-portfolio-react/
├── public/
│   └── images/          # Screenshots, foto e favicon
├── src/
│   ├── components/      # Componentes React (uma seção cada)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js # ← Edite aqui o conteúdo
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Estilos globais e camada de components Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Próximos passos sugeridos

- Adicionar uma seção de blog ou artigos
- Implementar dark/light mode toggle
- Adicionar animações de entrada com Framer Motion
- Incluir formulário de contato funcional (Formspree, EmailJS ou Netlify Forms)
- Adicionar testes com Vitest + Testing Library
- Configurar SEO mais detalhado e Open Graph tags
