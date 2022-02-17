const pegarTitulo = document.querySelector(".tituloNovoQuizz").value;    
const pegarURL = document.querySelector(".URLNovoQuizz").value;
const pegarQtdPerguntas = document.querySelector(".quantidadePerguntas").value;;
const pegarQtdNiveis = document.querySelector(".quantidadeNiveis").value

let novoQuizz = {
    title: "",
    image: "",
    questions: [],
    levels: [],
}

function botaoCriarPerguntas() {
    novoQuizz.title = pegarTitulo;
    novoQuizz.image = pegarURL;
}   
