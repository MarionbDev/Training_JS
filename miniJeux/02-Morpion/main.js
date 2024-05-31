const cells = document.querySelectorAll("[data-cell]");
const gameStatus = document.getElementById("gameStatus");
const endGameStatus = document.getElementById("endGameStatus");
const playerOne = "X";
const playerTwo = "O";
let playerTurn = playerOne;

// Checker les différentes combinaisons -----------------------------------------------------
const winnigPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Gestion de l'écouteur d'évènement au click d'une cellule ---------------------------------
// ---Etape 1---
cells.forEach((cell) => {
  cell.addEventListener("click", playGame, { once: true }); // déclenche une seule fois chaque cellule
});

// Gestion du jeu en global -----------------------------------------------------------------
function playGame(e) {
  // ---Etape 2---
  e.target.innerHTML = playerTurn;

  // ---Etape 8---
  if (checkWin(playerTurn)) {
    updateGameStatus("wins" + playerTurn); // Concaténation du switch case "winsX" et "winsO"
    return endGame();
  } else if (checkEquality()) {
    updateGameStatus("equality");
    return endGame();
  }
  // ---Etape 5---
  updateGameStatus(playerTurn);

  // ---Etape 3---
  playerTurn == playerOne ? (playerTurn = playerTwo) : (playerTurn = playerOne);
}

// Tester chaque combinaison de victoire ----------------------------------------------------
// ---Etape 9---
// Puis vérifier sur chaque combinaison si c'est égale au symbole du player
function checkWin(playerTurn) {
  return winnigPatterns.some((combination) => {
    return combination.every((index) => {
      return cells[index].innerHTML == playerTurn;
    });
  });
}

// Tester l'égalité -------------------------------------------------------------------------
// ---Etape 10---
// mettre nos cellules dans un tableau d'éléments
// On vérifie pour chaque cellule s'il y a la marque du joueur 1 ou du joueur 2
// Si toutes les cases sont remplies alors "égalité"
function checkEquality() {
  return [...cells].every((cell) => {
    return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
  });
}

// Créer un texte à chaque tour de jeu ------------------------------------------------------
// ---Etape 4---
function updateGameStatus(status) {
  let statusText;

  switch (status) {
    case "X":
      statusText = "Au tour du joueur 2 (O)";
      break;
    case "O":
      statusText = "Au tour du joueur 1 (X)";
      break;
    case "winsX":
      statusText = "Le joueur 1 (X) a gagné !";
      break;
    case "winsO":
      statusText = "Le joueur 2 (O) a gagné !";
      break;
    case "equality":
      statusText = "Egalité ! Personne ne gagne !";
      break;
  }

  gameStatus.innerHTML = statusText;
  endGameStatus.innerHTML = statusText;
}

// Gestion de la fin du jeu -----------------------------------------------------------------
// ---Etape 6---
// Enlève la classe "display:none" et faire apparaître l'overlay de fin de jeu
function endGame() {
  document.getElementById("gameEnd").style.display = "block";
}

// Gestion pour relancer le jeu -------------------------------------------------------------
// ---Etape 7---
// Activer le bouton recommencer
function reloadGame() {
  window.location.reload();
}
