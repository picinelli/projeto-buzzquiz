let promessaPerguntas = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
promessaPerguntas.then(criarPerguntasQuizz)
promessaPerguntas.catch(() => window.alert('Algo de errado nao esta certo, tente novamente!'))

/*function criarPerguntasQuizz(promessa) {
    let tituloQuizz = document.querySelector('.titulo-quizz');
    tituloQuizz.innerHTML = `
    <div class="titulo-quizz">
        <img src="${promessa.data[0].image}" alt="">
        <p>${promessa.data[0].title}</p>
    </div>
    `
}
*/



function selecionarResposta(elemento) {
    let elementoPaiPai = elemento.parentNode
    let todasOpcoes = [...elementoPaiPai.querySelectorAll('.opcao')]
    for (let i = 0; i < todasOpcoes.length; i++) {
        todasOpcoes[i].classList.add('opacidade');
        todasOpcoes[i].setAttribute("onclick", "");
    }
    elemento.classList.remove('opacidade');
}




//criarPerguntasQuizz()