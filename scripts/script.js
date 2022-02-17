let quizzes = [];

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