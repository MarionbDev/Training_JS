//Vous êtes le plus grand chef du monde. Personne ne fait bouillir des œufs comme vous ! Votre restaurant est toujours plein de convives qui adorent vos œufs durs. Mais lorsqu’il y a une plus grande commande d’œufs durs, vous avez besoin d’un peu de temps, car vous n’avez qu’une seule casserole pour votre travail. De combien de temps avez-vous besoin ?

//Ta tâche
//Implémentez une fonction, qui prend un entier non négatif, représentant le nombre d'œufs à faire bouillir. Il doit renvoyer le temps en minutes (entier) nécessaire pour faire bouillir tous les œufs.

//Règles
//vous pouvez mettre au maximum 8 œufs dans la marmite à la fois
//il faut 5 minutes pour faire bouillir un œuf
//nous supposons que l'eau bout tout le temps (pas le temps de chauffer)
//par souci de simplicité, nous ne prenons pas non plus en compte le temps nécessaire pour mettre les œufs dans la marmite ou les sortir de celle-ci.

function cookingTime(eggs) {
  const maxEggs = 8;
  const timeEggs = 5;

  const fullTime = Math.ceil(eggs / maxEggs) * timeEggs;

  return fullTime;
}

console.log(cookingTime(0), 0, "0 eggs");
console.log(cookingTime(1), 5, "1 egg");
console.log(cookingTime(5), 5, "5 eggs");
console.log(cookingTime(8), 5, "8 eggs");
console.log(cookingTime(9), 10, "9 eggs");
console.log(cookingTime(10), 10, "10 eggs");
console.log(cookingTime(16), 10, "16 eggs");
console.log(cookingTime(20), 15, "20 eggs");
console.log(cookingTime(100), 65, "100 eggs");
