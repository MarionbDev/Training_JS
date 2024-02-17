function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    if (value2 !== 0) {
      return value1 / value2;
    } else {
      return "Division par zéro impossible";
    }
  } else {
    return "opération non valide";
  }
}

// tests :
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 4, 7));
console.log(basicOp("*", 4, 7));
console.log(basicOp("/", 4, 7));
console.log(basicOp("/", 0, 4));
console.log(basicOp("/", 4, 0));
console.log(basicOp("--", 4, 7));
