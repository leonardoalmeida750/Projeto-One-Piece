const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem")


botoes.forEach((botao, indece) => {
  botao.addEventListener("click", () => {

    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[indece].classList.add("selecionado");
  });

});

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
