document.addEventListener("DOMContentLoaded", () => {
  const rocket = document.getElementById("rocket");
  const surface = document.querySelector(".surface");

  let x = 365;
  let y = 400;
  let speed = 15;

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

  // Ecouteur d'évènement pour les touches du clavier ---------------------------
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
