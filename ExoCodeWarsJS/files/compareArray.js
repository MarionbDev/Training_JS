function comp(array1, array2) {
  const compSame = array1.some((nombre) => array2.includes(nombre));

  return compSame;
}

// Doit être  "true"
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

// Doit être  "false"
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [110, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
