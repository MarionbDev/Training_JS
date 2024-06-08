document.addEventListener("DOMContentLoaded", () => {
  const rocket = document.getElementById("rocket");
  const surface = document.querySelector(".surface");

  let x = 365;
  let y = 400;
  let speed = 15;
  let score = 0;

  // Gestion des mouvements de la fusée -----------------------------------------
  function moveRocket() {
    // Définir la position de la fusée
    // Propriété d'objet du DOM => manipule les styles CSS d'un élément HTML
    rocket.style.top = `${y}px`;
    rocket.style.left = `${x}px`;
    console.log("Position de la fusée : (x,y) ", x, y);
  }

  function updatePosition() {
    moveRocket();
  }

  updatePosition();

  // Gestion des éléments STARS  ----------------------------------------------
  function generateStar() {
    let star = {
      x: Math.floor(Math.random() * surface.clientWidth),
      y: 0,
    };
    return {
      x: star.x,
      y: star.y,
    };
  }

  // Gestion de la création visuelle des STARS  -------------------------------
  function drawStar(star) {
    let gridSurface = document.querySelector(".surface");
    let starElement = document.createElement("div");
    starElement.className = "cell-star";
    starElement.style.left = `${star.x}px`;
    starElement.style.top = `${star.y}px`;
    starElement.textContent = "⭐";
    gridSurface.append(starElement);
    document.getElementById("score").textContent = "Score : " + score;
    // return starElement; // permet de manipuler l'élément dans d'autre partie du code
  }

  // Comparatifs des position ROCKET et STARS  ----------------------------------------
  function checkAtStars(currentStarX, currentStarY) {
    if (
      x >= currentStarX - 60 &&
      x <= currentStarX + 20 &&
      y >= currentStarY - 60 &&
      y <= currentStarY + 20
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Gestion du mouvements des STARS  -----------------------------------------
  function moveStar() {
    let stars = document.querySelectorAll(".cell-star");

    stars.forEach((star) => {
      let currentStarY = parseInt(star.style.top);
      let currentStarX = parseInt(star.style.left);

      if (currentStarY + 60 < surface.clientHeight) {
        star.style.top = `${currentStarY + 5}px`;
      } else {
        star.remove();
      }
      // L'effet d'oscillation
      let horizontalMovement = (Math.random() - 0.5) * 4;
      let newLeft = currentStarX + horizontalMovement;

      newLeft = Math.max(
        0,
        Math.min(newLeft, surface.clientWidth - star.offsetWidth)
      );
      star.style.left = `${newLeft}px`;

      // Gestion des collisions des STARS et du SCORE
      if (checkAtStars(currentStarX, currentStarY)) {
        score++;
        document.getElementById("score").textContent = "Score :" + score;
        star.remove();
        return;
      }
    });
  }

  // Gestion de la boucle des STARS  ------------------------------------------
  function starLoop() {
    if (Math.random() < 0.2) {
      let star = generateStar();
      drawStar(star);
    }
    moveStar();
  }

  setInterval(starLoop, 100);

  // Ecouteur d'évènement pour les touches du clavier -------------------------
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        if (x >= 0) {
          x = x - speed;
          moveRocket();
        }
        break;
      case "ArrowRight":
        if (x + rocket.clientWidth + speed <= surface.clientWidth) {
          x = x + speed;
          moveRocket();
        }
        break;
      case "ArrowUp":
        if (y > 0) {
          y = y - speed;
          moveRocket();
        }
        break;
      case "ArrowDown":
        if (y + rocket.clientHeight + speed <= surface.clientHeight)
          y = y + speed;
        moveRocket();

        break;
    }
  });
});
