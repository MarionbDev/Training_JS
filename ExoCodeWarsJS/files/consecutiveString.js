//Vous recevez un tableau (liste) strarrde chaînes et un entier k. Votre tâche consiste à renvoyer la première chaîne la plus longue composée de k chaînes consécutives prises dans le tableau.

//Exemples:
//strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

//Concatenate the consecutive strings of strarr by 2, we get:

//treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
//folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
//trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
//blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
//abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

//Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
//The first that came is "folingtrashy" so
//longest_consec(strarr, 2) should return "folingtrashy".

//In the same way:
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//n étant la longueur du tableau de chaînes, if n = 0 ou k > n or k <= 0 return "" (retour Nothingen Elm, "rien" en Erlang).

//Note
//chaînes consécutives : se succèdent sans interruption

function longestConsec(strarr, k) {
  const n = strarr.length;

  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  let longestString = "";

  for (let i = 0; i <= n - k; i++) {
    const currentString = strarr.slice(i, i + k).join("");

    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }

  return longestString;
}

// Exemples :
console.log(
  "test 1 :",
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
  "abigailtheta"
);
console.log(
  "test 2 :",
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  ),
  "oocccffuucccjjjkkkjyyyeehh"
);
console.log("test 3 :", longestConsec([], 3), "");
console.log(
  "test 4 :",
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  ),
  "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
);
console.log(
  "test 5 :",
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2),
  "wlwsasphmxxowiaxujylentrklctozmymu"
);
console.log(
  "test 6 :",
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
  ""
);
console.log(
  "test 7 :",
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
  "ixoyx3452zzzzzzzzzzzz"
);
console.log(
  "test 8 :",
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
  ""
);
console.log(
  "test 9 :",
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0),
  ""
);
