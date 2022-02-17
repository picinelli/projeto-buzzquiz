const pegarTitulo = document.querySelector(".tituloNovoQuizz");    
const pegarURL = document.querySelector(".URLNovoQuizz");
const pegarQtdPerguntas = document.querySelector(".quantidadePerguntas");
const pegarQtdNiveis = document.querySelector(".quantidadeNiveis");

let novoQuizz = {
    title: "",
    image: "",
    questions: [],
    levels: [],
}

function botaoCriarPerguntas() {
    novoQuizz.title = pegarTitulo.value;
    novoQuizz.image = pegarURL.value;
    const perguntas = document.querySelector(".criacaoQuizzSecundaria");
    let contador = 2;
    for (let i = 1; i < pegarQtdPerguntas.value; i++) {
        perguntas.innerHTML += `
        <div class="novaPergunta">
            <p>Pergunta ${contador}</p>
            <ion-icon name="create-outline"></ion-icon>
        </div>
        `
        contador++
    }
    perguntas.innerHTML += `<button onclick="botaoCriarNiveis()">Prosseguir pra criar níveis</button>`
    mudarPagina()
}

function mudarPagina() {
    const todasAsSections = document.querySelectorAll("section");
    const paginaCriacaoQuizzSecundaria = document.querySelector(".criacaoQuizzSecundaria");
    for (let i = 0; i < todasAsSections.length; i++) {
        todasAsSections[i].classList.add("escondido");
    }
    paginaCriacaoQuizzSecundaria.classList.remove("escondido");
}

// function segundaPaginaCriacao() {
//     const todasAsSections = document.querySelectorAll("section");
//     const paginaCriacaoQuizz = document.querySelector(".criacaoQuizz");
//     console.log(todasAsSections[0]);
//     for (let i = 0; i < todasAsSections.length; i++) {
//         todasAsSections[i].classList.add("escondido");
//     }
//     paginaCriacaoQuizz.classList.remove("escondido");
// }
