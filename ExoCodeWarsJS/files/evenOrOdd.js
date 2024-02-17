//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2) {
    return "Odd";
  } else {
    return "Even";
  }
}

console.log(evenOrOdd(0), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(-7), "Odd");
console.log(evenOrOdd(-42), "Even");
console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(119), "Odd");
console.log(evenOrOdd(120), "Even");
