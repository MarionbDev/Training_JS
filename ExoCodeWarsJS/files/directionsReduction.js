//Il était une fois, lors d’un voyage à travers le vieil ouest sauvage et montagneux ,…
//… un homme reçut des instructions pour se rendre d'un point à un autre. Les directions étaient « NORD », « SUD », « OUEST », « EST ». Il est clair que « NORD » et « SUD » sont opposés, « OUEST » et « EST » également.

//Aller dans une direction et revenir immédiatement dans la direction opposée est un effort inutile. Comme nous sommes au Far West, avec un temps épouvantable et peu d'eau, il est important d'économiser un peu d'énergie, sinon vous risquez de mourir de soif !

//Comment j'ai traversé un désert montagneux de manière intelligente.
//Les instructions données à l'homme sont par exemple les suivantes (selon la langue) :

//["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
//or
//{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
//or
//[North, South, South, East, West, North, West]
//On voit tout de suite qu'aller "NORD" et tout de suite "SUD" n'est pas raisonnable, mieux vaut rester au même endroit ! La tâche est donc de donner à l'homme une version simplifiée du plan. Un meilleur plan dans ce cas est simplement :

//["WEST"]
//or
//{ "WEST" }
//or
//[West]
//Autres exemples :
//En ["NORTH", "SOUTH", "EAST", "WEST"], la direction "NORTH" + "SOUTH"va vers le nord et revient tout de suite .

//Le chemin devient ["EAST", "WEST"]maintenant "EAST"et "WEST"s'annihile, donc le résultat final est [](nul dans Clojure).

//Dans ["NORD", "EST", "OUEST", "SUD", "OUEST", "OUEST"], "NORD" et "SUD" ne sont pas directement opposés mais ils le deviennent après la réduction de "EST" et "WEST" donc tout le chemin est réductible à ["WEST", "WEST"].

//Tâche
//Écrivez une fonction dirReducqui prendra un tableau de chaînes et renverra un tableau de chaînes avec les directions inutiles supprimées (W<->E ou S<->N côte à côte ).

//La version Haskell prend une liste de directions avec data Direction = North | East | West | South.
//La version Clojure renvoie zéro lorsque le chemin est réduit à néant.
//La version Rust prend une tranche de enum Direction {North, East, West, South}.

//Remarques
//Tous les chemins ne peuvent pas être simplifiés. Le chemin ["NORD", "OUEST", "SUD", "EST"] n'est pas réductible. "NORD" et "OUEST", "OUEST" et "SUD", "SUD" et "EST" ne sont pas directement opposés l'un à l'autre et ne peuvent pas le devenir. Le chemin résultat est donc lui-même : ["NORD", "OUEST", "SUD", "EST"].

function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.length > 0 && arr[i] === opposites[result[result.length - 1]]) {
      console.log(arr[i] + 1);
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// Doit afficher ["WEST"]
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
// Doit afficher ["WEST", "WEST"]
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));
//Doit afficher []
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
