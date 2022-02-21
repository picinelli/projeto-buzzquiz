let quizzes = [];
let IDQuiz

let promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
promessa.then(buscarTodosQuizzes).catch(() => window.alert('Algo deu errado, tente novamente!'))

// function esconderElemento (elemento) {
//     const sectionPai = elemento.parentNode;
//     sectionPai.classList.add("escondido");
// }

// função que esconde todos os itens e abre a página de criação de quizz
function criarNovoQuizz() {
    const todasAsSections = document.querySelectorAll("section");
    const paginaCriacaoQuizz = document.querySelector(".criacaoQuizz");
    console.log(todasAsSections[0]);
    for (let i = 0; i < todasAsSections.length; i++) {
        todasAsSections[i].classList.add("escondido");
    }
    paginaCriacaoQuizz.classList.remove("escondido");
}

function buscarTodosQuizzes(promessa) {
    console.log(promessa.data)
    let listaDeQuizzesConteudo = document.querySelector('.listaDeQuizzesConteudo');

    promessa.data.forEach(elemento => {
        listaDeQuizzesConteudo.innerHTML += `
        <div class="quizzExemplo" id="${elemento.id}" onclick="selecionarQuizz(this)" data-identifier="quizz-card">
            <div class="gradiente"></div>
            <img src="${elemento.image}" alt="">
            <p>${elemento.title}</p>
        </div>
        `
    });
}

function selecionarQuizz(quizzSelecionado) {
    IDQuiz = parseInt(quizzSelecionado.getAttribute('id'))
    let listaDeQuizzes = document.querySelector('.listaDeQuizzes')
    listaDeQuizzes.classList.add('escondido')
    let paginaQuizz = document.querySelector('.pagina-quizz')
    paginaQuizz.classList.remove('escondido')
    window.scrollTo(0, 0);

    let promessaConteudo = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${IDQuiz}`);
    promessaConteudo.then(criarPerguntasQuizz).catch(() => window.alert('Algo de errado nao esta certo, tente novamente!'))
}

function enviarParaPaginaTres() {
    let listaDeQuizzes = document.querySelector('.listaDeQuizzes')
    let criacaoQuizz = document.querySelector('.criacaoQuizz')
    listaDeQuizzes.classList.add('escondido')
    criacaoQuizz.classList.remove('escondido')
}
