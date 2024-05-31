function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 6, 2]));
