// Seleciona o elemento HTML onde os favoritos serão exibidos
const favoritesContainer = document.querySelector("#favorites-container");

console.log(favoritesContainer);


// Pega os favoritos salvos no navegador
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

console.log(favoritos);


// Percorre cada filme salvo nos favoritos
favoritos.forEach((filme) => {
    console.log(filme);
});