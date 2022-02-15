let quizzes = [];

//  requisição
const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
promise.then(quizzesRecebidos);

function quizzesRecebidos (resposta) {
    console.log(resposta.data);
    quizzes = resposta.data
}