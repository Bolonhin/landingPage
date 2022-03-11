const quadro1 = document.getElementById("quadro1");
const quadro2 = document.getElementById("quadro2");
const quadro3 = document.getElementById("quadro3");
const quadro4 = document.getElementById("quadro4");
const quadro5 = document.getElementById("quadro5");
const quadro6 = document.getElementById("quadro6");
const quadro7 = document.getElementById("quadro7");
const quadro8 = document.getElementById("quadro8");
const menu = document.getElementById("menu-mobile");
const expandirMenu = document.getElementById("bt-abrir-menu");
let estadoBotao = false;

expandirMenu.addEventListener("click", function () {
  if (estadoBotao == false) {
    abrirMenu();
    estadoBotao = true;
  } else if (estadoBotao == true) {
    fecharMenu();
    estadoBotao = false;
  }
});
function abrirMenu() {
  menu.classList.add("aparecer-menu");
  expandirMenu.classList.add("fundo-bt");
}
function fecharMenu() {
  menu.classList.remove("aparecer-menu");
  expandirMenu.classList.remove("fundo-bt");
}

function limparQuadros() {
  quadro1.classList.remove("opacidade");
  quadro2.classList.remove("opacidade");
  quadro3.classList.remove("opacidade");
  quadro4.classList.remove("opacidade");
  quadro5.classList.remove("opacidade");
  quadro6.classList.remove("opacidade");
  quadro7.classList.remove("opacidade");
  quadro8.classList.remove("opacidade");
}

function quadroClicado(valorQuadro) {
  switch (valorQuadro) {
    case 1:
      console.log("clicado1");
      limparQuadros();
      quadro1.classList.add("opacidade");
      break;
    case 2:
      limparQuadros();
      quadro2.classList.add("opacidade");
      break;
    case 3:
      limparQuadros();
      quadro3.classList.add("opacidade");
      break;
    case 4:
      limparQuadros();
      quadro4.classList.add("opacidade");
      break;
    case 5:
      limparQuadros();
      quadro5.classList.add("opacidade");
      break;
    case 6:
      limparQuadros();
      quadro6.classList.add("opacidade");
      break;
    case 7:
      limparQuadros();
      quadro7.classList.add("opacidade");
      break;
    case 8:
      limparQuadros();
      quadro8.classList.add("opacidade");
      break;
    default:
      limparQuadros();
  }
}

quadro1.addEventListener("click", function () {
  quadroClicado(1);
});
quadro2.addEventListener("click", function () {
  quadroClicado(2);
});
quadro3.addEventListener("click", function () {
  quadroClicado(3);
});
quadro4.addEventListener("click", function () {
  quadroClicado(4);
});
quadro5.addEventListener("click", function () {
  quadroClicado(5);
});
quadro6.addEventListener("click", function () {
  quadroClicado(6);
});
quadro7.addEventListener("click", function () {
  quadroClicado(7);
});
quadro8.addEventListener("click", function () {
  quadroClicado(8);
});
