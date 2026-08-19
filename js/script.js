const form = document.querySelector('#search-form');
const input = document.querySelector('#movie-search');

async function buscarFilme(event) {
    event.preventDefault();
    console.log("O formulário foi enviado!");
}

form.addEventListener('submit', buscarFilme);