// Seleciona o elemento HTML onde os favoritos serão exibidos
const favoritesContainer = document.querySelector("#favorites-container");

// Pega os favoritos salvos
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
const emptyMessage = document.querySelector("#empty-message");
if (favoritos.length === 0) {
    emptyMessage.style.display = "block";
} else {
    emptyMessage.style.display = "none";
}
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
    const removeButton = movieCard.querySelector(".remove-favorite");
    removeButton.addEventListener("click", () => {

    const indice = favoritos.findIndex(
        (favorito) => favorito.id === filme.id
    );

    favoritos.splice(indice, 1);

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    movieCard.remove();

    if (favoritos.length === 0) {
        emptyMessage.style.display = "block";
    }

});
});