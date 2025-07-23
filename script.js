
const simbolos = ["wild.png", "laranja.png", "envelope.png", "sino.png", "moeda.png"];
let fichas = 10;

function tocarSom(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}

function girar() {
  if (fichas <= 0) {
    document.getElementById("mensagem").innerText = "❌ Sem fichas!";
    return;
  }

  fichas--;
  atualizarFichas();
  tocarSom("som-spin");

  const reels = ["reel1", "reel2", "reel3"];
  let resultado = [];

  for (let i = 0; i < reels.length; i++) {
    const reel = document.getElementById(reels[i]);
    reel.innerHTML = '';
    let col = [];
    for (let j = 0; j < 3; j++) {
      const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
      const img = document.createElement("img");
      img.src = "assets/" + simbolo;
      reel.appendChild(img);
      col.push(simbolo);
    }
    resultado.push(col);
  }

  setTimeout(() => verificar(resultado), 500);
}

function verificar(r) {
  let ganhou = false;

  for (let i = 0; i < 3; i++) {
    if (r[0][i] === r[1][i] && r[1][i] === r[2][i]) {
      ganhou = true;
    }
  }

  const msg = document.getElementById("mensagem");
  if (ganhou) {
    tocarSom("som-win");
    fichas += 5;
    msg.innerText = "🎉 Você ganhou 5 fichas!";
  } else {
    tocarSom("som-lose");
    msg.innerText = "😢 Tente novamente!";
  }

  atualizarFichas();
}

function atualizarFichas() {
  document.getElementById("fichas").innerText = fichas;
}
