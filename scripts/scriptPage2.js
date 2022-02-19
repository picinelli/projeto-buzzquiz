// Variaveis globais
let resultado
let resultadoTitulo
let resultadoImagem
let resultadoTexto
let quantidadeDePerguntas = 0
let contadorChecarResultado = 0
let arrayTitulosResultado
let somaResultado = 0


function criarPerguntasQuizz(promessa) {
    let quantidadeDePerguntas = promessa.data.questions.length;
    let tituloQuizz = document.querySelector('.titulo-quizz');
    arrayTitulosResultado = promessa.data.levels
    tituloQuizz.innerHTML = `
    <div class="titulo-quizz">
        <img src="${promessa.data.image}" alt="">
        <div class="escurecimento-imagem"></div>
        <p>${promessa.data.title}</p>
    </div>
    `

    criarTituloPerguntas(promessa)
    criarRespostas(promessa)
}

function criarTituloPerguntas(promessa) {
    quantidadeDePerguntas = promessa.data.questions.length
    promessa.data.questions.forEach(elemento => {
        let paginaQuizz = document.querySelector('.pagina-quizz')
        paginaQuizz.innerHTML += `
        <div class="caixa-quizz">
            <div class="pergunta-quizz" style="background-color: ${elemento.color}">
                <p>${elemento.title}</p>
            </div>
            <div class="opcoes-quizz">
            </div>
        </div>
        `
    });
}

function criarRespostas(promessa) {
    let selecaoDePergunta = [...document.querySelectorAll('.opcoes-quizz')]

    for (let i = 0; i < selecaoDePergunta.length; i++) {
        let corTitulo = promessa.data.questions[i].color[i]
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
    contadorChecarResultado++

    setTimeout(() => {todasOpcoes[1].scrollIntoView({ behavior: "smooth" })}, 2000);
    for (let i = 0; i < todasOpcoes.length; i++) {
        todasOpcoes[i].classList.add('opacidade');
        todasOpcoes[i].classList.add('resposta-errada');
        todasOpcoes[i].setAttribute("onclick", "");
    }
    elemento.classList.remove('opacidade');
    if (elemento.classList.contains('true')) {
        //childNode[3] é o <p> da resposta
        elemento.childNodes[3].classList.add('resposta-certa')
        elemento.childNodes[3].classList.remove('resposta-errada')
        somaResultado++
    }

    checarLiberacaoResultado()
}

function checarLiberacaoResultado(promessaNiveis) {
    let paginaQuizz = document.querySelector('.pagina-quizz');
    criarTituloResultado()

    if (quantidadeDePerguntas === contadorChecarResultado) {
        setTimeout(() => {resultadoQuizz.scrollIntoView({ behavior: "smooth" })}, 2000);
        paginaQuizz.innerHTML += `
        <div class="resultado-quizz">
            <div class="quizz__resultado-titulo">
                <p>${resultado}%: ${resultadoTitulo}</p>
            </div>
            <div class="quizz__resultado-conteudo">
                <img class="quizz__resultado-img" src="${resultadoImagem}" alt="">
                <p class="quizz__resultado-texto">${resultadoTexto}</p>
            </div>
        </div>
        <div class="botoes__quizz">
            <div class="botoes__quizz-reiniciar" onclick="reiniciarQuizz()">
                <p>Reiniciar Quizz</p>
            </div>
            <div class="botoes__quizz-voltarhome" onclick="irParaPaginaInicial()">
                <p>Voltar pra home</p>
            </div>
        </div>
        `
        let resultadoQuizz = document.querySelector('.quizz__resultado-conteudo')
    }
}

function criarTituloResultado() {
    resultado = Math.round(somaResultado / quantidadeDePerguntas * 100)

    arrayTitulosResultado.forEach(element => {
        if (resultado >= element.minValue) {
            resultadoTitulo = element.title
            resultadoImagem = element.image
            resultadoTexto = element.text
        } else {
            resultadoTitulo = resultadoTitulo
        }
    });
}

function reiniciarQuizz() {
    reiniciarConteudo()
    
    let resetarQuizz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${IDQuiz}`);
    resetarQuizz.then(criarPerguntasQuizz)
}

function irParaPaginaInicial() {
    reiniciarConteudo()

    let paginaDois = document.querySelector('.pagina-quizz')
    let paginaUm = document.querySelector('.listaDeQuizzes')

    paginaDois.classList.add('escondido')
    paginaUm.classList.remove('escondido')
    window.scrollTo(0, 0);
}

function reiniciarConteudo() {
    let paginaQuizz = document.querySelector('.pagina-quizz')
    let tituloQuizz = document.querySelector('.titulo-quizz')

    resultado = ''
    resultadoTitulo = ''
    resultadoImagem = ''
    resultadoTexto =  ''
    quantidadeDePerguntas = 0
    contadorChecarResultado = 0
    arrayTitulosResultado
    somaResultado = 0
    window.scrollTo({top: 0, behavior: 'smooth' });
    paginaQuizz.innerHTML = `
    <div class="titulo-quizz">
        <img src="imgs/Hogwarts.svg" alt="">
        <div class="escurecimento-imagem"></div>
        <p>O quão Potterhead é você?</p>
    </div>
    `
}