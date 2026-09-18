// Seleciona o elemento HTML onde os favoritos serão exibidos
const favoritesContainer = document.querySelector("#favorites-container");

// Pega os favoritos salvos
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
// Percorre cada filme
favoritos.forEach((filme) => {

    console.log(filme);

    const movieCard = document.createElement("div");

    movieCard.classList.add("movie-card");

    const poster = filme.poster_path
        ? `${imageBaseUrl}${filme.poster_path}`
        : null;

    const year = filme.release_date
        ? filme.release_date.slice(0, 4)
        : "Ano não informado";

    const overview = filme.overview
        ? filme.overview
        : "Sinopse não disponível.";

    movieCard.innerHTML = `
        ${
            poster
                ? `<img src="${poster}" alt="${filme.title}">`
                : `<div class="no-image">Imagem não disponível</div>`
        }
    `;

    favoritesContainer.appendChild(movieCard);
});