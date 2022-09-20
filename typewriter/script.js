const output = document.getElementById("kalimat");
const kalimat = [
  "Hi, People...",
  "What your day? ",
  "I hope your guys is good well yet",
  "It's Auto Text",
  "Maybe Typewriter",
  "In JavaScript",
  "I hope you be enjoy. :D",
];
let i = 0;
let j = 0;
let outputKalimat = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  output.innerHTML = outputKalimat.join("");

  if (i < kalimat.length) {
    if (!isDeleting && j <= kalimat[i].length) {
      outputKalimat.push(kalimat[i][j]);
      j++;
      output.innerHTML = outputKalimat.join("");
    }

    if (isDeleting && j <= kalimat[i].length) {
      outputKalimat.pop(kalimat[i][j]);
      j--;
      output.innerHTML = outputKalimat.join("");
    }

    if (j == kalimat[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      outputKalimat = [];
      isDeleting = false;
      i++;
      if (i === kalimat.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();

var cardBx = document.querySelector(".cardBx");

cardBx.onclick = function () {
  cardBx.classList.toggle("aktif");
};
