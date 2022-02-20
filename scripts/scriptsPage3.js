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
    abrirPagina("criacaoQuizzSecundaria");
    const perguntas = document.querySelector(".criacaoQuizzSecundaria");
    let contador = 2;
    for (let i = 1; i < pegarQtdPerguntas.value; i++) {
        perguntas.innerHTML += `
        <div class="novaPergunta" onClick="criarNovaPergunta(${contador})">
            <p>Pergunta ${contador}</p>
            <ion-icon name="create-outline"></ion-icon>
        </div>
        `
        contador++
    }
    perguntas.innerHTML += `<button onclick="botaoCriarNiveis()">Prosseguir pra criar níveis</button>`
}

function botaoCriarNiveis() {
    abrirPagina("criacaoQuizzTerciaria");
    const niveis = document.querySelector(".criacaoQuizzTerciaria")
    let contador = 2;
    for (let i = 1; i < pegarQtdNiveis.value; i++) {
        niveis.innerHTML += `
        <div class="novaPergunta" onClick="criaNovoNivel(${contador})">
            <p>Nível ${contador}</p>
            <ion-icon name="create-outline"></ion-icon>
        </div>
        `
        contador++
    }
    niveis.innerHTML += `<button onclick="botaoCriarNiveis()">Finalizar Quizz</button>`
}

function criarNovaPergunta(indice){
    const proximaPergunta = document.querySelector(".novaPergunta");
    proximaPergunta.innerHTML += `<p>Pergunta ${indice}</p>
    <div class="inputsDoUsuario">
        <input class="tituloNovoQuizz" type="text" placeholder="Texto da pergunta">
        <input class="URLNovoQuizz" type="text" placeholder="Cor de fundo da pergunta">
    </div>
    <p>Resposta correta</p>
    <div class="inputsDoUsuario">
        <input class="tituloNovoQuizz" type="text" placeholder="Resposta correta">
        <input class="URLNovoQuizz" type="text" placeholder="URL da imagem">
    </div>
    <p>Respostas incorretas</p>
    <div class="inputsDoUsuario">
        <input class="tituloNovoQuizz" type="text" placeholder="Resposta incorreta 1">
        <input class="URLNovoQuizz" type="text" placeholder="URL da imagem 1">
        <input class="tituloNovoQuizz" type="text" placeholder="Resposta incorreta 2">
        <input class="URLNovoQuizz" type="text" placeholder="URL da imagem 2">
        <input class="tituloNovoQuizz" type="text" placeholder="Resposta incorreta 3">
        <input class="URLNovoQuizz" type="text" placeholder="URL da imagem 3">
    </div>`
}

function criarNovoNivel() {

}

function abrirPagina(classePagina) {
    const todasAsSections = document.querySelectorAll("section");
    const paginaDesejada = document.querySelector(`.${classePagina}`);
    for (let i = 0; i < todasAsSections.length; i++) {
        todasAsSections[i].classList.add("escondido");
    }
    paginaDesejada.classList.remove("escondido");
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
