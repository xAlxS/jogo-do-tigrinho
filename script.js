
let fichas = 10;
function girar() {
  if (fichas <= 0) {
    document.getElementById("mensagem").innerText = "Você ficou sem fichas!";
    return;
  }
  fichas--;
  let resultado = Math.random();
  let msg = "";
  if (resultado > 0.7) {
    fichas += 3;
    msg = "🎉 Você ganhou 3 fichas!";
  } else {
    msg = "😢 Não foi dessa vez!";
  }
  document.getElementById("mensagem").innerText = msg;
  document.getElementById("fichas").innerText = fichas;
}
