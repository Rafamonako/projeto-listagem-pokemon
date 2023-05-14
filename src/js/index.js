const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaotrocaDetema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroestaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroestaAtivo) {
        imagemBotaotrocaDetema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaotrocaDetema.setAttribute("src", "./src/imagens/moon.png");
    }
});