const ship = document.getElementById("ship");
const obstacle = document.getElementById("obstacle");
const score = document.getElementById("score");

// Score initialisieren
score.innerText = 0;

function jump() {
  ship.classList.add("jump-animation");
  setTimeout(() => {
    ship.classList.remove("jump-animation");
  }, 800);
}

document.addEventListener("keypress", () => {
  if (!ship.classList.contains("jump-animation")) {
    jump();
  }
});

setInterval(() => {
  const shipTop = parseInt(
    window.getComputedStyle(ship).getPropertyValue("top"),
  );
  const obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left"),
  );

  // Score doppelt so schnell
  score.innerText = parseInt(score.innerText) + 2;

  if (obstacleLeft < 0) {
    obstacle.style.display = "none";
  } else {
    obstacle.style.display = "block";
  }

  if (obstacleLeft < 50 && obstacleLeft > 0 && shipTop > 150) {
    // Game Over (optional)
  }
}, 50);
