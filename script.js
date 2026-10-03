const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const mainCard = document.getElementById("mainCard");
const successCard = document.getElementById("successCard");

// Playful "No" button
function moveNoButton() {
  const card = mainCard.getBoundingClientRect();
  const button = noBtn.getBoundingClientRect();

  const maxX = card.width - button.width - 20;
  const maxY = 180;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Move when mouse gets close
noBtn.addEventListener("mouseenter", moveNoButton);

// Also works on phones
noBtn.addEventListener("touchstart", function (event) {
  event.preventDefault();
  moveNoButton();
});

// Yes button
yesBtn.addEventListener("click", () => {
  mainCard.classList.add("hidden");
  successCard.classList.remove("hidden");

  createHearts();
});

// Floating hearts
function createHearts() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");

      heart.className = "floating-heart";
      heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💕";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration =
        3 + Math.random() * 3 + "s";

      document.getElementById("hearts").appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000);

    }, i * 120);
  }
}
