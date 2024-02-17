function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  } else {
    const diffV = v2 - v1;
    const timeInH = g / diffV;

    const hours = Math.floor(timeInH);
    const minutes = Math.floor((timeInH * 60) % 60);
    const seconds = Math.floor((timeInH * 3600) % 60);

    return [hours, minutes, seconds];
  }
}

// tests :
console.log(race(720, 850, 70), [0, 32, 18]);
console.log(race(80, 91, 37), [3, 21, 49]);
console.log(race(80, 100, 40), [2, 0, 0]);
console.log(race(720, 850, 37), [0, 17, 4]);
