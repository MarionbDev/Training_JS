// Vous savez qu'un morceau de papier a une épaisseur de 0.0001m. En distanceunités de mètres, calculez combien de fois vous devez plier le papier pour que le papier atteigne cette distance.
//(Si vous n'êtes pas familier avec le concept de pliage d'un papier : chaque pli double son épaisseur totale.)

//Remarque : Bien sûr, vous ne pouvez pas effectuer un demi-pli. Tu devrais savoir ce que cela signifie ;P

//De plus, si quelqu'un vous donne une distance négative, c'est clairement faux et vous devriez lui crier dessus en revenant null(ou tout autre équivalent dans votre langue).

function foldTo(distance) {
  let paper = 0.0001;
  let folds = 0;
  if (distance <= 0) {
    return null;
  } else {
    while (distance > paper) {
      paper *= 2;
      folds += 1;
    }
  }
  return folds;
}

console.log(foldTo(384000000), 42);
console.log(foldTo(0.0000001), 0);
console.log(foldTo(0), 0);
console.log(foldTo(-1), null);
