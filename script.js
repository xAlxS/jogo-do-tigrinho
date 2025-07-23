const symbols = [
  'laranja.png', 'envelope.png', 'sino.png', 
  'moeda.png', 'coroa.png', 'wild.png.png'
];
const balanceEl = document.getElementById('balance');
const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
const lever = document.getElementById('lever');
const spinSound = document.getElementById('spinSound');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');

let balance = 100;

function spinReel(reel) {
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  reel.style.backgroundImage = `url('assets/images/${symbol}')`;
  return symbol;
}

function spin() {
  if (balance <= 0) {
    alert("Você está sem fichas!");
    return;
  }

  lever.classList.add("active");
  spinSound.play();
  balance -= 10;

  setTimeout(() => {
    lever.classList.remove("active");

    const results = reels.map(spinReel);
    const [a, b, c] = results;

    if (a === b && b === c) {
      balance += 50;
      winSound.play();
    } else {
      loseSound.play();
    }

    balanceEl.textContent = balance;
  }, 1000);
}

lever.addEventListener('click', spin);
