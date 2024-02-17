function countPositivesSumNegatives(input) {
  // définir si le tableau est vide ou nul
  if (!input || input.length === 0) {
    return [];
  }

  let countPositif = 0;
  let sumNegatif = 0;

  // ensuite itération du tableau pour trouver le count de nbr + et la sum de nbr -
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositif++;
    } else if (input[i] < 0) {
      sumNegatif = input[i] + sumNegatif;
    }
  }
  return [countPositif, sumNegatif];
}

// tests :
const input = [1, 2, 3, 4, -1, -2, -40];
const result = countPositivesSumNegatives(input);
console.log(result);

const input2 = [1, -3, 3, 4, -2, -60];
const result2 = countPositivesSumNegatives(input2);
console.log(result2);

const input3 = [1, -3, 3, 4, -2, -80, 1, 2];
const result3 = countPositivesSumNegatives(input3);
console.log(result3);
