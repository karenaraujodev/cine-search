# 🎬 CineSearch

Uma aplicação web para busca e exploração de filmes utilizando a API do The Movie Database (TMDB).

O projeto foi desenvolvido com JavaScript puro e tem como objetivo praticar conceitos de desenvolvimento web, consumo de APIs, manipulação do DOM, arquitetura cliente-servidor e deploy.

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

---

## 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- TMDB API
- Node.js
- Vercel
- Git e GitHub

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
- `try/catch` para tratamento de erros
- Variáveis de ambiente
- Proteção de chaves de API
- Arquitetura cliente-servidor
- Serverless Functions
- Deploy com Vercel
- Versionamento com Git e GitHub

---

## 🔐 Segurança da API

A chave da API do TMDB não é exposta diretamente no código do frontend.

A aplicação utiliza uma variável de ambiente:

```env
TMDB_API_KEY=sua_chave
```

O acesso à chave é realizado pelo backend através de:

```
process.env.TMDB_API_KEY
```

A comunicação funciona através de uma Serverless Function:

```
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
```
O arquivo .env também está protegido pelo .gitignore e não é enviado para o GitHub.

## ⚙️ Como funciona

1 O usuário digita o nome de um filme.

2 O JavaScript captura o envio do formulário.

3 A pesquisa é enviada para /api/search.

4 A Serverless Function recebe a pesquisa.

5 O backend acessa a chave da TMDB através de uma variável de ambiente.

6 A requisição é enviada para a API do TMDB.

7 Os resultados são retornados em JSON.

8 O JavaScript percorre os resultados e cria os cards dinamicamente.

9 Os filmes são exibidos na interface.

## 🌐 Deploy

O projeto está hospedado na Vercel.

**🔗 Projeto online:**
https://cine-search-kappa-topaz.vercel.app/

O GitHub é utilizado para versionamento e armazenamento do código, enquanto a Vercel é responsável pela hospedagem da aplicação e execução da Serverless Function utilizada na comunicação segura com a API.
## 📚 Objetivo do projeto

O CineSearch faz parte da minha jornada de aprendizado em desenvolvimento web.

O projeto começou como uma aplicação frontend para praticar consumo de APIs e evoluiu para uma aplicação com uma camada de backend, permitindo trabalhar também com:

- APIs externas
- autenticação
- variáveis de ambiente
- segurança de credenciais
- funções serverless
- deploy em produção

## 🔮 Próximos passos

Algumas funcionalidades planejadas para futuras versões:

- Sistema de favoritos
- Persistência de favoritos com Local Storage
- Página de detalhes do filme
- Melhor tratamento para pesquisas sem resultados
- Paginação dos resultados
- Melhorias de responsividade
- Melhorias de acessibilidade
- Conexão automática entre GitHub e Vercel para deploy contínuo

## 👩‍💻 Desenvolvido por

Karen Alves

Projeto desenvolvido como parte da minha evolução nos estudos de desenvolvimento web.

## 📄 API

Os dados dos filmes são fornecidos pela The Movie Database (TMDB).

Este projeto utiliza a API do TMDB exclusivamente para fins de estudo e desenvolvimento.
