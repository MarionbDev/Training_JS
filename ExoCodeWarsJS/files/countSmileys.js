//Étant donné un tableau (arr) comme argument, complétez la fonction countSmileysqui devrait renvoyer le nombre total de visages souriants.

//Règles pour un visage souriant :

//Chaque visage souriant doit contenir une paire d'yeux valide. Les yeux peuvent être marqués comme :ou;
//Un visage souriant peut avoir un nez, mais ce n’est pas obligatoire. Les caractères valides pour un nez sont -ou~
//Chaque visage souriant doit avoir une bouche souriante qui doit être marquée soit )ouD
//Aucun caractère supplémentaire n'est autorisé à l'exception de ceux mentionnés.

//Exemples de smileys valides : :) :D ;-D :~)
// Visages souriants invalides : ;( :> :} :]

//Exemple
//countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
//countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
//Note
//Dans le cas d'un tableau vide, renvoyez 0. Vous ne serez pas testé avec une entrée invalide (l'entrée sera toujours un tableau). L’ordre des éléments du visage (yeux, nez, bouche) sera toujours le même.

function countSmileys(arr) {
  var smileys = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D",
  ];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}

// devrait renvoyer 2
console.log(countSmileys([":)", ";(", ";}", ":-D"]));
// devrait renvoyer 3
console.log(countSmileys([";D", ":-(", ":-)", ";~)"]));
// devrait renvoyer 1
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
//

// Fonction avec expression régulière :

function countSmileys(arr) {
  // Définir une expression régulière pour vérifier les visages souriants valides
  const regex = /[:;][-~]?[)D]/;

  // Utiliser filter pour obtenir un tableau des éléments valides
  const validSmileys = arr.filter((smiley) => regex.test(smiley));

  // Retourner le nombre d'éléments valides
  return validSmileys.length;
}

// devrait renvoyer 2
console.log("regex:", countSmileys([":)", ";(", ";}", ":-D"]));
// devrait renvoyer 3
console.log("regex:", countSmileys([";D", ":-(", ":-)", ";~)"]));
// devrait renvoyer 1
console.log("regex:", countSmileys([";]", ":[", ";*", ":$", ";-D"]));
