/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
  var inputs = readline().split(" ");
  const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
  const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
while (true) {
  var inputs = readline().split(" ");
  const X = parseInt(inputs[0]);
  const Y = parseInt(inputs[1]);
  const hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
  const vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
  const fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
  const rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
  const power = parseInt(inputs[6]); // the thrust power (0 to 4).

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  // My solution :
  let targetPower;

  if (vSpeed <= -40) {
    targetPower = 4;
  } else {
    targetPower = 0;
  }

  // 2 integers: rotate power. rotate is the desired rotation angle (should be 0 for level 1), power is the desired thrust power (0 to 4).
  console.log(`0 ${targetPower}`);
}

//  	Objectif
// L'objectif de votre programme est de faire atterrir, sans crash, la capsule "Mars Lander" qui contient le rover Opportunity. La capsule “Mars Lander” permettant de débarquer le rover est pilotée par un programme qui échoue trop souvent dans le simulateur de la NASA.

// Notez que ce problème peut sembler difficile, mais en réalité il est simple à résoudre. Ce puzzle constitue le premier des trois niveaux, par conséquent, certains contrôles sont présentés mais ne sont pas nécessaires pour résoudre ce premier niveau.
//  	Règles
// Sous forme de jeu, le simulateur place Mars Lander dans une zone du ciel de Mars.

// 	La zone fait 7000m de large et 3000m de haut.

// Pour ce niveau, Mars Lander se situe au dessus de la zone d’atterrissage, en position verticale, avec aucune vitesse initiale.

// Il existe une unique zone d'atterrissage plane sur la surface de Mars et elle mesure au moins 1000 mètres de large.Toutes les secondes, en fonction des paramètres d’entrée (position, vitesse, fuel, etc.), le programme doit fournir le nouvel angle de rotation souhaité ainsi que la nouvelle puissance des fusées de Mars Lander:
// 	Angle de -90° à 90°. Puissance des fusées de 0 à 4.

// Pour ce niveau, vous n'avez besoin de contrôler que la puissance des fusées : l'angle doit rester à 0.Le jeu modélise une chute libre sans atmosphère. La gravité sur Mars est de 3,711 m/s². Pour une puissance des fusées de X, on génère une poussée équivalente à X m/s² et on consomme X litres de fuel. Il faut donc une poussée de 4 quasi verticale pour compenser la gravité de Mars.

// Pour qu’un atterrissage soit réussi, la capsule doit :
// atterrir sur un sol plat
// atterrir dans une position verticale (angle = 0°)
// la vitesse verticale doit être limitée ( ≤ 40 m/s en valeur absolue)
// la vitesse horizontale doit être limitée ( ≤ 20 m/s en valeur absolue)

// Souvenez-vous que ce puzzle a été simplifié, ainsi :
// la zone d'atterrissage est juste en dessous du robot. Vous pouvez donc ignorer la rotation et toujours indiquer 0 en angle de rotation.
// vous n'avez pas besoin de tenir compte des coordonnées de la surface.
// il vous suffit que votre vitesse d'atterrissage soit entre 0 et 40m/s.
// lorsque la capsule descend vers le sol, la vitesse verticale est négative. Lorsque la capsule s'élève dans les airs, la vitesse verticale est positive.
//  	Note
// Pour ce premier niveau d'introduction, Mars Lander doit passer un unique test.

// Les validateurs sont différents des tests mais restent très similaires. Un programme qui passe un test passera le validateur correspondant sans problème.
//  	Entrées du jeu
// Le programme doit d'abord lire les données d'initialisation depuis l'entrée standard, puis, dans une boucle infinie, lire depuis l'entrée standard les données relatives à Mars Lander et fournir sur la sortie standard les instructions de mouvement de Mars Lander.
// Entrées d'initialisation
// Ligne 1 : le nombre surfaceN de points formant le sol de Mars.
// Les surfaceN lignes suivantes : un couple d'entiers landX landY donnant les coordonnées d’un point du sol. En reliant les points entre eux de manière séquentielle on obtient la surface de Mars formée de segments. Pour le premier point, landX = 0 et pour le dernier point, landX = 6999.
// Entrées pour un tour de jeu
// Une ligne unique constituée de 7 entiers : X Y hSpeed vSpeed fuel rotate power
// X,Y sont les coordonnées en mètres de la capsule.
// hSpeed et vSpeed sont respectivement la vitesse horizontale et la vitesse verticale de Mars Lander (en m/s). Suivant le déplacement de Mars Lander, les vitesses peuvent être négatives.
// fuel est la quantité de fuel restant en litre. Quand le fuel vient à manquer, la puissance des fusées tombe à zéro.
// rotate est l’angle de rotation de Mars Lander en degré.
// power est la puissance des fusées de la capsule.
// Sortie pour un tour de jeu
// Une ligne unique constituée de 2 entiers : rotate power
// rotate est l’angle de rotation souhaité pour Mars Lander. à noter que la rotation effective d’un tour à l’autre est limitée à +/- 15° par rapport à l’angle du tour précedent.
// power est la puissance des fusées. 0 = éteintes. 4 = puissance maximum. La puissance effective d'un tour à l'autre est limitée à +/- 1.
// Contraintes
// 2 ≤ surfaceN < 30
// 0 ≤ X < 7000
// 0 ≤ Y < 3000
// -500 < hSpeed, vSpeed < 500
// 0 ≤ fuel ≤ 2000
// -90 ≤ rotate ≤ 90
// 0 ≤ power ≤ 4
// Temps de réponse pour un tour ≤ 100ms
