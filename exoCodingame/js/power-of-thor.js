var inputs = readline().split(" ");
let lightX = parseInt(inputs[0]); // the X position of the light of power
let lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');


  // My solution :
    // Initialise la direction
  let direction = "";

  // Verticale
  if (initialTy < lightY) {
    direction += "S";
    initialTy++;
  } else if (initialTy > lightY) {
    direction += "N";
    initialTy--;
  }

  // Horizontale
  if (initialTx < lightX) {
    direction += "E";
    initialTx++;
  } else if (initialTx > lightX) {
    direction += "W";
    initialTx--;
  }

  console.log(direction);
}

//  	Règles
// Thor évolue sur une carte de 40 cases de large et 18 cases de hauteur. Notez que les coordonnées (X et Y) commencent en partant du haut ! Ainsi la case la plus en haut à gauche a pour coordonnées "X=0,Y=0" et celle située le plus en bas à droite a pour coordonnées "X=39,Y=17".

// Au début du programme vous recevez :
// la variable lightX : la position X de l'éclair que Thor doit rejoindre.
// la variable lightY : la position Y de l'éclair que Thor doit rejoindre.
// la variable initialTX : la position X initiale de Thor.
// la variable initialTY : la position Y initiale de Thor.
// À la fin du tour de jeu, vous devez afficher la direction que Thor doit prendre parmi :

// N (Nord)
// NE (Nord-Est)
// E (Est)
// SE (Sud-Est)
// S (Sud)
// SW (Sud-Ouest)
// W (Ouest)
// NW (Nord-Ouest)
// Chaque déplacement fait bouger Thor de 1 case dans la direction choisie.

// Conditions de victoire
// Vous gagnez lorsque Thor arrive sur l'éclair de puissance

// Conditions de défaite
// Thor sort de la carte

// Phase initiale
// Thor démarre sur la carte à la position (3, 6). L'éclair se trouve en (3, 8).

// Tour 1
// Action S : Thor se dirige vers le sud.
// Nouvelle position = (3, 7).

// Tour 2
// Action S : Thor se dirige vers le sud.
// Nouvelle position = (3, 8).
//  	Note
// N'oubliez pas d'exécuter les tests depuis la fenêtre "Jeu de tests".
// Attention : les tests fournis et les validateurs utilisés pour le calcul du score sont légèrement différents pour éviter les solutions codées en dur
//  	Entrées du jeu
// Le programme doit d'abord lire les données d'initialisation depuis l'entrée standard, puis, dans une boucle infinie fournir sur la sortie standard les instructions de mouvement de Thor.
// Entrées d'initialisation
// Ligne 1 : 4 entiers lightX lightY initialTX initialTY. (lightX, lightY) indique la position de l'éclair. (initialTX, initialTY) indique la position initiale de Thor.
// Entrée pour un tour de jeu
// Ligne 1 : le nombre de déplacements restant pour permettre à Thor de rejoindre l'éclair de puissance remainingTurns. Vous pouvez ignorer cette valeur mais vous devez la lire.
// Sortie pour un tour de jeu
// Une ligne unique indiquant le mouvement à effectuer : N NE E SE S SW W ou NW
// Contraintes
// 0 ≤ lightX < 40
// 0 ≤ lightY < 18
// 0 ≤ initialTX < 40
// 0 ≤ initialTY < 18
// Temps de réponse pour un tour ≤ 100ms
