let IDQuiz = 2592
let promessaPerguntas = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${IDQuiz}`);
promessaPerguntas.then(criarPerguntasQuizz).catch(() => window.alert('Algo de errado nao esta certo, tente novamente!'))

function criarPerguntasQuizz(promessa) {
    let quantidadeDePerguntas = promessa.data.questions.length;
    let tituloQuizz = document.querySelector('.titulo-quizz');

    tituloQuizz.innerHTML = `
    <div class="titulo-quizz">
        <img src="${promessa.data.image}" alt="">
        <p>${promessa.data.title}</p>
    </div>
    `

    carregarTituloPerguntas(promessa)
    carregarOpcoesRespostas(promessa)
}

function carregarTituloPerguntas(promessa) {
    promessa.data.questions.forEach(elemento => {
        let paginaQuizz = document.querySelector('.pagina-quizz')
        paginaQuizz.innerHTML += `
        <div class="caixa-quizz">
            <div class="pergunta-quizz">
                <p>${elemento.title}</p>
            </div>
            <div class="opcoes-quizz">
            </div>
        </div>
        `
    });
}

function carregarOpcoesRespostas(promessa) {
    let selecaoDePergunta = [...document.querySelectorAll('.opcoes-quizz')]
    let perguntas = promessa.data.questions

    for (let i = 0; i < selecaoDePergunta.length; i++) {
        let dadosRespostas = promessa.data.questions[i].answers
        // Para deixar a distribuição de respostas aleatória
        dadosRespostas.sort(() => { 
            return Math.random() - 0.5; 
        })
        dadosRespostas.forEach(elemento => {
            selecaoDePergunta[i].innerHTML += `
            <div class="opcao ${elemento.isCorrectAnswer}" onclick="selecionarResposta(this)">
                <img src="${elemento.image}" alt="">
                <p>${elemento.text}</p>
            </div>
            `
        });
    }
}

function selecionarResposta(elemento) {
    let elementoPaiPai = elemento.parentNode
    let elementoFilhoTexto = elemento.childNodes[1]
    let todasOpcoes = [...elementoPaiPai.querySelectorAll('.opcao')]
    for (let i = 0; i < todasOpcoes.length; i++) {
        todasOpcoes[i].classList.add('opacidade');
        todasOpcoes[i].classList.add('resposta-errada');
        todasOpcoes[i].setAttribute("onclick", "");
    }
    elemento.classList.remove('opacidade');
    if (elemento.classList.contains('true')) {
        elemento.childNodes[3].classList.add('resposta-certa')
        elemento.childNodes[3].classList.remove('resposta-errada')
    }
}