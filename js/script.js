const form = document.querySelector('#search-form');
const input = document.querySelector('#movie-search');
const resultsContainer = document.querySelector('#results');

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
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`; // URL da API para buscar filmes
    try{ // Bloco try-catch para tratar erros na requisição
        const options = {  // Opções da requisição
            method: 'GET', // Método da requisição
            headers: { // Cabeçalhos da requisição
            accept: 'application/json', // Aceita resposta em JSON
            Authorization: 'Bearer ' 
            }
        };
        const response = await fetch(url, options); // Faz a requisição para a API
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

            <h2>${filme.title}</h2>

            <p class="rating">⭐ ${filme.vote_average.toFixed(1)}</p>

            <p class="year">📅 ${year}</p>

            <p class="overview">${overview}</p>

        </div>
    `;

    resultsContainer.appendChild(movieCard); // Adiciona o cartão do filme ao container de resultados
});
    } catch (erro) {// Captura qualquer erro que ocorra durante a requisição ou processamento dos dados
        console.error('Erro ao buscar o filme:', erro);// Exibe mensagem de erro no console caso ocorra algum problema na requisição
        resultsContainer.innerHTML = `<p>Erro ao realizar a consulta. Tente novamente mais tarde.</p>`;
    }
}
form.addEventListener('submit', buscarFilme);