let quizzes = [];

<<<<<<< HEAD
// function esconderElemento (elemento) {
//     const sectionPai = elemento.parentNode;
//     sectionPai.classList.add("escondido");
// }

function criarNovoQuizz() {
    
=======
//  requisição
const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
promise.then(quizzesRecebidos);

function quizzesRecebidos (resposta) {
    quizzes = resposta.data
>>>>>>> af8085f9b59a650a236e0e928128bcccc5b62efb
}