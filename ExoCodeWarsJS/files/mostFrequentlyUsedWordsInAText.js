function topThreeWords(text) {
  const words = text.toLowerCase().match(/[a-z]+('[a-z]+)*/g) || [];
  const wordCount = {};
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  const sortedWords = Object.keys(wordCount).sort(
    (a, b) => wordCount[b] - wordCount[a]
  );

  return sortedWords.slice(0, 3);
}

console.log("a a a  b  c c  d d d d  e e e e e", ["e", "d", "a"]);
console.log(("a a a c b b", ["a", "b", "c"]));
console.log("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e", [
  "e",
  "ddd",
  "aa",
]);
console.log("  //wont won't won't ", ["won't", "wont"]);
console.log("  , e   .. ", ["e"]);
console.log("  ...  ", []);
console.log("  '  ", []);
console.log(
  `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`,
  ["a", "of", "on"]
);
