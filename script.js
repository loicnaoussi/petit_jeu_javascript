let perso = document.querySelector(".perso");
let obstacles = document.querySelector(".obstacles");

function sauter() {
  if (perso.classList != "animate") {
    perso.classList.add("animation");
  }
  setTimeout(function () {
    perso.classList.remove("animation");
  }, 500);
}

let verification = setInterval(function () {
  let persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top"),
  );
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left"),
  );

  if (obstacleLeft < 20 && obstacleLeft > 0 && persoTop >= 140) {
    obstacles.style.animation = "none";
    alert("Vous avez perdu");
  }
});
