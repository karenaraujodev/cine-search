const apiKey = process.env.TMDB_API_KEY;  // Obtém a chave da API do TMDB a partir das variáveis de ambiente, garantindo que a chave não seja exposta no código-fonte

export default async function handler(request, response) { // Função para lidar com a requisição de busca de filmes

    const query = request.query.query; // Obtém o parâmetro de consulta da requisição, que é o termo de busca fornecido pelo usuário

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`; // URL da API para buscar filmes, codificando a consulta para ser usada na URL

    const options = { // Opções para a requisição, incluindo o método e os cabeçalhos necessários
        method: 'GET', // Método HTTP GET para buscar dados
        headers: { // Cabeçalhos da requisição, incluindo o tipo de conteúdo e a autorização com a chave da API
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    const tmdbResponse = await fetch(url, options); // Faz a requisição para a API do TMDB com as opções definidas

    const data = await tmdbResponse.json(); // Converte a resposta da API para JSON


    response.status(200).json(data); // Retorna a resposta da API do TMDB para o cliente com status 200 (OK) e os dados em formato JSON
}