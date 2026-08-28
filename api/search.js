const apiKey = process.env.TMDB_API_KEY; // Obtém a chave da API do arquivo .env

export default async function handler(request, response) { // Função para lidar com a requisição de busca de filmes

    const query = request.query.query; // Obtém o parâmetro de consulta da requisição

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`; // URL da API para buscar filmes, codificando a consulta para ser usada na URL

    const options = { // Opções da requisição
        method: 'GET', // Método da requisição
        headers: { // Cabeçalhos da requisição
            accept: 'application/json', // Aceita resposta em JSON
            Authorization: `Bearer ${apiKey}` // Adiciona a chave da API no cabeçalho da requisição
        }
    };

    const tmdbResponse = await fetch(url, options); // Faz a requisição para a API do TMDB com as opções definidas

}