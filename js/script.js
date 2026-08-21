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

}

form.addEventListener('submit', buscarFilme);