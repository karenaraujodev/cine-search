// Seleciona o elemento HTML onde os favoritos serão exibidos
const favoritesContainer = document.querySelector("#favorites-container");

// Pega os favoritos salvos no localStorage
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Seleciona a mensagem de favoritos vazios
const emptyMessage = document.querySelector("#empty-message");

// Verifica se existem favoritos
if (favoritos.length === 0) {
    emptyMessage.style.display = "block";
} else {
    emptyMessage.style.display = "none";
}

// URL base para buscar os pôsteres dos filmes
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

// Percorre cada filme favorito
favoritos.forEach((filme) => {

    console.log(filme);

    // Cria o elemento que será o card
    const movieCard = document.createElement("div");

    // Adiciona a classe CSS ao card
    movieCard.classList.add("movie-card");

    // Verifica se o filme possui pôster
    const poster = filme.poster_path
        ? `${imageBaseUrl}${filme.poster_path}`
        : null;

    // Pega o ano do lançamento
    const year = filme.release_date
        ? filme.release_date.slice(0, 4)
        : "Ano não informado";

    // Pega a sinopse
    const overview = filme.overview
        ? filme.overview
        : "Sinopse não disponível.";

    // Monta o conteúdo do card
    movieCard.innerHTML = `
        ${
            poster
                ? `<img src="${poster}" alt="${filme.title}">`
                : `<div class="no-image">Imagem não disponível</div>`
        }

        <div class="movie-info">

            <div class="movie-header">
                <h2>${filme.title}</h2>
            </div>

            <p class="rating">
                ⭐ ${filme.vote_average.toFixed(1)}
            </p>

            <p class="year">
                📅 ${year}
            </p>

            <p class="overview">
                ${overview}
            </p>

            <button class="remove-favorite" type="button">
                Remover dos favoritos
            </button>

        </div>
    `;

    // Adiciona o card ao container de favoritos
    favoritesContainer.appendChild(movieCard);

    // Seleciona o botão de remover deste card
    const removeButton = movieCard.querySelector(".remove-favorite");

    // Cria o evento de clique no botão
    removeButton.addEventListener("click", () => {

        // Procura a posição do filme dentro do array
        const indice = favoritos.findIndex(
            (favorito) => favorito.id === filme.id
        );

        // Remove o filme do array
        favoritos.splice(indice, 1);

        // Atualiza o localStorage
        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

        // Remove o card da tela
        movieCard.remove();

        // Se não houver mais favoritos, mostra a mensagem
        if (favoritos.length === 0) {
            emptyMessage.style.display = "block";
        }

    });

});
