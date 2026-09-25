# 🎬 CineSearch

Uma aplicação web para busca e exploração de filmes utilizando a API do The Movie Database (TMDB).

O projeto foi desenvolvido com JavaScript puro e tem como objetivo praticar conceitos de desenvolvimento web, consumo de APIs, manipulação do DOM, armazenamento de dados, arquitetura cliente-servidor e deploy.

🔗 **Acesse o projeto:** https://cine-search-kappa-topaz.vercel.app/

---

## 📸 Sobre o projeto

O CineSearch permite pesquisar filmes e visualizar informações como:

- 🎬 Título
- ⭐ Avaliação
- 📅 Ano de lançamento
- 📝 Sinopse
- 🖼️ Pôster

A aplicação realiza a busca através da API do TMDB e apresenta os resultados dinamicamente na interface.

Além da busca, o projeto possui um sistema de favoritos, permitindo salvar filmes e acessá-los posteriormente através de uma página dedicada.

A aplicação também conta com páginas de **Início, Favoritos e Sobre**, mantendo uma identidade visual consistente e responsiva.

---

## 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- TMDB API
- Node.js
- Vercel
- Git e GitHub
- Local Storage

---

## 🧠 Conceitos praticados

Durante o desenvolvimento do projeto, foram aplicados conceitos importantes de desenvolvimento web:

- Manipulação do DOM
- Eventos e formulários
- Funções assíncronas (`async/await`)
- `fetch()` e requisições HTTP
- Consumo e tratamento de APIs
- JSON
- Query strings
- Arrays e objetos
- Funções e métodos de arrays
- Template literals
- `try/catch` para tratamento de erros
- Local Storage
- Variáveis de ambiente
- Proteção de chaves de API
- Arquitetura cliente-servidor
- Serverless Functions
- Design responsivo
- Organização de páginas e arquivos
- Deploy com Vercel
- Versionamento com Git e GitHub

---

## 🔐 Segurança da API

A chave da API do TMDB não é exposta diretamente no código do frontend.

A aplicação utiliza uma variável de ambiente:

    TMDB_API_KEY=sua_chave

O acesso à chave é realizado pelo backend através de:

    process.env.TMDB_API_KEY

A comunicação funciona através de uma Serverless Function:

    Usuário
       ↓
    Frontend (JavaScript)
       ↓
    /api/search
       ↓
    Serverless Function
       ↓
    TMDB API
       ↓
    Resultados
       ↓
    Frontend

O arquivo `.env` também está protegido pelo `.gitignore` e não é enviado para o GitHub.

---

## ⚙️ Como funciona

1. O usuário digita o nome de um filme.
2. O JavaScript captura o envio do formulário.
3. A pesquisa é enviada para `/api/search`.
4. A Serverless Function recebe a pesquisa.
5. O backend acessa a chave da TMDB através de uma variável de ambiente.
6. A requisição é enviada para a API do TMDB.
7. Os resultados são retornados em JSON.
8. O JavaScript percorre os resultados e cria os cards dinamicamente.
9. Os filmes são exibidos na interface.
10. O usuário pode adicionar filmes aos favoritos.
11. Os favoritos são armazenados no Local Storage do navegador.
12. Os filmes salvos podem ser visualizados e removidos através da página de favoritos.

---

## ❤️ Sistema de favoritos

O CineSearch possui um sistema de favoritos que permite ao usuário salvar os filmes que deseja consultar posteriormente.

Os filmes favoritos são armazenados utilizando o `Local Storage`, permitindo que os dados permaneçam salvos mesmo após atualizar ou fechar a página.

Na página de favoritos, o usuário pode:

- Visualizar os filmes salvos
- Ver informações dos filmes
- Remover filmes dos favoritos
- Receber uma mensagem quando não houver filmes salvos

---

## 🌐 Deploy

O projeto está hospedado na Vercel.

**🔗 Projeto online:**
https://cine-search-kappa-topaz.vercel.app/

O GitHub é utilizado para versionamento e armazenamento do código, enquanto a Vercel é responsável pela hospedagem da aplicação e execução da Serverless Function utilizada na comunicação segura com a API.

---

## 📚 Objetivo do projeto

O CineSearch faz parte da minha jornada de aprendizado em desenvolvimento web.

O projeto começou como uma aplicação frontend para praticar consumo de APIs e evoluiu para uma aplicação com uma camada de backend, permitindo trabalhar também com:

- APIs externas
- Variáveis de ambiente
- Segurança de credenciais
- Funções serverless
- Manipulação do DOM
- Armazenamento de dados com Local Storage
- Interfaces responsivas
- Organização de páginas
- Deploy em produção

---

## 🔮 Próximos passos

O projeto está em uma versão funcional e concluída para fins de estudo e portfólio.

Algumas melhorias que podem ser exploradas em futuras versões:

- Página de detalhes do filme
- Paginação dos resultados
- Melhor tratamento para pesquisas sem resultados
- Melhorias de acessibilidade
- Filtros e opções avançadas de pesquisa
- Novas funcionalidades para interação com os filmes

---

## 👩‍💻 Desenvolvido por

Karen Alves

Projeto desenvolvido como parte da minha evolução nos estudos de desenvolvimento web.

---

## 📄 API

Os dados dos filmes são fornecidos pela The Movie Database (TMDB).

Este projeto utiliza a API do TMDB exclusivamente para fins de estudo e desenvolvimento.
