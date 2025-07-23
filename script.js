
const simbolos = ["wild.png", "laranja.png", "envelope.png", "sino.png", "moeda.png"];
let fichas = 10;
function tocarSom(id) { const a = document.getElementById(id); a.currentTime = 0; a.play(); }
function puxarAlavanca() {
  if (fichas <= 0) { document.getElementById("mensagem").innerText = "❌ Sem fichas!"; return; }
  const alavanca = document.getElementById("alavanca");
  alavanca.classList.add("ativa"); tocarSom("som-alavanca");
  setTimeout(() => { alavanca.classList.remove("ativa"); girar(); }, 400);
}
function girar() {
  fichas--; atualizarFichas(); tocarSom("som-spin");
  const r = [], ids = ["reel1", "reel2", "reel3"];
  ids.forEach((id, i) => {
    setTimeout(() => {
      const col = [], el = document.getElementById(id); el.innerHTML = '';
      for (let j = 0; j < 3; j++) {
        const s = simbolos[Math.floor(Math.random() * simbolos.length)];
        const img = document.createElement("img"); img.src = "assets/" + s; el.appendChild(img); col.push(s);
      }
      r[i] = col; if (i === 2) setTimeout(() => verificar(r), 500);
    }, i * 300);
  });
}
function verificar(r) {
  let g = false;
  for (let i = 0; i < 3; i++) if (r[0][i] === r[1][i] && r[1][i] === r[2][i]) g = true;
  const m = document.getElementById("mensagem");
  if (g) { tocarSom("som-win"); fichas += 5; m.innerText = "🎉 Você ganhou 5 fichas!"; }
  else { tocarSom("som-lose"); m.innerText = "😢 Tente novamente!"; }
  atualizarFichas();
}
function atualizarFichas() { document.getElementById("fichas").innerText = fichas; }
