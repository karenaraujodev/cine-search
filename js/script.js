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
    try{
        const options = { 
            method: 'GET', 
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer .....'
            }
        };
        const response = await fetch(url, options); // Faz a requisição para a API
        const data = await response.json(); // Converte a resposta em JSON
        resultsContainer.innerHTML = ""; // Limpa os resultados anteriores
        data.results.forEach((filme) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.innerHTML = `
                <h3>${filme.title}</h3>
                <p>${filme.overview}</p>
            `;
            resultsContainer.appendChild(movieCard);
        });
    } catch (erro) {// Captura qualquer erro que ocorra durante a requisição ou processamento dos dados
        console.error('Erro ao buscar o filme:', erro);// Exibe mensagem de erro no console caso ocorra algum problema na requisição
        resultsContainer.innerHTML = `<p>Erro ao conectar com a API. Tente novamente mais tarde.</p>`;
    }
}
form.addEventListener('submit', buscarFilme);