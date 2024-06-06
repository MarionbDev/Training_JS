/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");

// définir la 1ère condition si le nb de temp est vide renvoie le résultat sinon on continue
if (n === 0) {
  console.log(0);
} else {
  // initialisation de la variable  avec la 1ère température qui sera la plus proche de zéro
  let closeToZero = parseInt(inputs[0]);

  // parcourir chaque entrée de températures
  for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526

    // définir la logique pour accéder à la valeur proche de zéro
    if (
      // Math.abs() renvoie toujours la valeur absolue d'un nombre (nombre qui sera toujours positif ou zéro)
      Math.abs(t) < Math.abs(closeToZero) || // 2 < 4
      (Math.abs(t) === Math.abs(closeToZero) && t > closeToZero) // 4 === 4 ou 4 === -4 et 4 > -4
    ) {
      closeToZero = t;
    }
  }
  console.log(closeToZero);
}

// Écrivez un programme qui affiche la température la plus proche de 0 parmi les données d'entrée. Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).
