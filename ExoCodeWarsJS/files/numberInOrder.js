//Dans ce Kata, votre fonction reçoit un tableau d'entiers en entrée. Votre tâche consiste à déterminer si les nombres sont classés par ordre croissant. Un tableau est dit croissant s’il n’y a pas deux entiers adjacents où l’entier de gauche dépasse l’entier de droite en valeur.

//Pour les besoins de ce Kata, vous pouvez supposer que toutes les entrées sont valides, c'est-à-dire des tableaux contenant uniquement des nombres entiers.

//Notez qu'un tableau de 0 ou 1 entier(s) est automatiquement considéré comme trié par ordre croissant puisque toutes les paires d'entiers adjacents (zéro) satisfont à la condition selon laquelle l'entier de gauche ne dépasse pas l'entier de droite en valeur.

function inAscOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(
  inAscOrder([1, 2, 4, 7, 19]),
  true,
  'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
);
console.log(
  inAscOrder([1, 2, 3, 4, 5]),
  true,
  'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
);
console.log(
  inAscOrder([1, 6, 10, 18, 2, 4, 20]),
  false,
  'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
);
console.log(
  inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
  false,
  'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
);
