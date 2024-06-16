const rocket = document.getElementById("rocket");
const surface = document.querySelector(".surface");
const imageMeteorite = document.createElement("img");

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

// Gestion des éléments METEORITES  -----------------------------------------
function generateMeteorite() {
  let meteorite = {
    x: Math.floor(Math.random() * surface.clientWidth),
    y: 0,
  };
  return {
    x: meteorite.x,
    y: meteorite.y,
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

// Gestion de la création visuelle des METEORITES  --------------------------
function drawMeteorite(meteorite) {
  let gridSurface = document.querySelector(".surface");
  let meteoriteElement = document.createElement("div");
  meteoriteElement.className = "cell-meteorite";
  meteoriteElement.style.left = `${meteorite.x}px`;
  meteoriteElement.style.top = `${meteorite.y}px`;

  const imageMeteorite = document.createElement("img");
  imageMeteorite.src = "./meteorite.png";
  imageMeteorite.className = "img-meteorite";
  meteoriteElement.appendChild(imageMeteorite);

  gridSurface.append(meteoriteElement);
  // document.getElementById("score").textContent = "Score : " - score;
}

// Comparatifs des position ROCKET et STARS  --------------------------------
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

// Comparatifs des position ROCKET et METEORITES  ---------------------------
function checkAtMeteorites(currentMeteoriteX, currentMeteoriteY) {
  if (
    x >= currentMeteoriteX - 60 &&
    x <= currentMeteoriteX + 20 &&
    y >= currentMeteoriteY - 60 &&
    y <= currentMeteoriteY + 20
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

// Gestion du mouvements des METEORITES  ------------------------------------
function moveMeteorite() {
  let meteorites = document.querySelectorAll(".cell-meteorite");

  meteorites.forEach((meteorite) => {
    let currentMeteoriteY = parseInt(meteorite.style.top);
    let currentMeteoriteX = parseInt(meteorite.style.left);

    if (currentMeteoriteY + 60 < surface.clientHeight) {
      meteorite.style.top = `${currentMeteoriteY + 5}px`;
    } else {
      meteorite.remove();
    }
    // L'effet d'oscillation
    let horizontalMovement = (Math.random() - 0.5) * 4;
    let newLeft = currentMeteoriteX + horizontalMovement;

    newLeft = Math.max(
      0,
      Math.min(newLeft, surface.clientWidth - meteorite.offsetWidth)
    );
    meteorite.style.left = `${newLeft}px`;

    // Gestion des collisions des METEORITES et du SCORE
    if (checkAtMeteorites(currentMeteoriteX, currentMeteoriteY)) {
      score--;
      document.getElementById("score").textContent = "Score :" + score;
      meteorite.remove();
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

// Gestion de la boucle des METEORITES --------------------------------------
function meteoriteLoop() {
  if (Math.random() < 0.05) {
    let meteorite = generateMeteorite();
    drawMeteorite(meteorite);
  }
  moveMeteorite();
}

setInterval(meteoriteLoop, 120);

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
