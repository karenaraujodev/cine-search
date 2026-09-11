const form = document.querySelector('#search-form');
const input = document.querySelector('#movie-search');
const resultsContainer = document.querySelector('#results');
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // Recupera a lista de filmes favoritos do localStorage, ou inicializa como um array vazio caso não haja favoritos salvos

async function buscarFilme(event) { // Função para buscar filmes
    event.preventDefault(); // Impede o envio do formulário

    input.value = input.value.trim(); // Remove espaços em branco no início e no final da pesquisa

    if (!input.value) { // Verifica se o campo de pesquisa está vazio
        resultsContainer.innerHTML = `
            <p>Por favor, digite o nome de um filme.</p>
        `;
        return;
    }

    const query = encodeURIComponent(input.value);  // Codifica a pesquisa para ser usada na URL
    const url = `/api/search?query=${query}`;

    try {
    const response = await fetch(url);
        const data = await response.json(); // Converte a resposta em JSON
        resultsContainer.innerHTML = ""; // Limpa os resultados anteriores
        const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; // URL base para as imagens dos filmes
        data.results.forEach((filme) => { // Itera sobre cada filme retornado pela API

    const year = filme.release_date
        ? filme.release_date.slice(0, 4)
        : "Ano não informado"; // Extrai o ano de lançamento do filme, caso disponível

    const poster = filme.poster_path
        ? `${imageBaseUrl}${filme.poster_path}`
        : null; // Constrói a URL da imagem do pôster do filme, caso disponível

    const overview = filme.overview 
        ? filme.overview
        : "Sinopse não disponível."; // Define a sinopse do filme, caso disponível

    const movieCard = document.createElement("div"); // Cria um elemento div para o cartão do filme

    movieCard.classList.add("movie-card"); // Adiciona a classe "movie-card" ao elemento div

    movieCard.innerHTML = `
        ${
            poster
                ? `<img src="${poster}" alt="${filme.title}">`
                : `<div class="no-image">Imagem não disponível</div>`
        }

        <div class="movie-info">

        <div class="movie-header">
            <h2>${filme.title}</h2>
            <button class="favorite-button" type="button">
            ☆</button>
        </div>
            <p class="rating">⭐ ${filme.vote_average.toFixed(1)}</p>
            <p class="year">📅 ${year}</p>
            <p class="overview">${overview}</p>
        </div>
    `;

    resultsContainer.appendChild(movieCard); // Adiciona o cartão do filme ao container de resultados
    const favoriteButton = movieCard.querySelector(".favorite-button"); // Seleciona o botão de favorito dentro do cartão do filme
    const jaFavoritado = favoritos.some( // Verifica se o filme já está na lista de favoritos
    (favorito) => favorito.id === filme.id // Compara o ID do filme atual com os IDs dos filmes na lista de favoritos
    );

    if (jaFavoritado) { // Se o filme já estiver na lista de favoritos, altera o texto do botão para indicar que está favoritado
    favoriteButton.textContent = "★";
}
    favoriteButton.addEventListener("click", () => { // Adiciona um evento de clique ao botão de favorito
        const jaFavoritado = favoritos.some( // Verifica novamente se o filme já está na lista de favoritos
        (favorito) => favorito.id === filme.id // Compara o ID do filme atual com os IDs dos filmes na lista de favoritos
    );
    if (jaFavoritado) { // Se o filme já estiver na lista de favoritos, remove-o da lista
        const indice = favoritos.findIndex( // Encontra o índice do filme na lista de favoritos
            (favorito) => favorito.id === filme.id // Compara o ID do filme atual com os IDs dos filmes na lista de favoritos
        );
        favoritos.splice(indice, 1); // Remove o filme da lista de favoritos usando o índice encontrado
        favoriteButton.textContent = "☆"; // Altera o texto do botão para indicar que o filme não está mais favoritado
        console.log("Filme removido dos favoritos!");// Exibe mensagem no console indicando que o filme foi removido dos favoritos
    } else { // Se o filme não estiver na lista de favoritos, adiciona-o à lista
        favoritos.push(filme); // Adiciona o filme à lista de favoritos
        favoriteButton.textContent = "★"; // Altera o texto do botão para indicar que o filme está favoritado
        console.log("Filme adicionado aos favoritos!"); // Exibe mensagem no console indicando que o filme foi adicionado aos favoritos
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));// Salva a lista de favoritos atualizada no localStorage, convertendo o array em uma string JSON
});
});
    } catch (erro) {// Captura qualquer erro que ocorra durante a requisição ou processamento dos dados
        console.error('Erro ao buscar o filme:', erro);// Exibe mensagem de erro no console caso ocorra algum problema na requisição
        resultsContainer.innerHTML = `<p>Erro ao realizar a consulta. Tente novamente mais tarde.</p>`;
    }
}
form.addEventListener('submit', buscarFilme);