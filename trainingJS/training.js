// EXTENSION Quokka

const str = "Javascript";

console.log("JavaScript");

console.log(str.slice(2, 4));
console.log(str.split(""));

console.log("length :", str.length);
console.log("str[2] :", str[2]);
console.log("charAt :", str.charAt(5));
console.log("charCodeAt :", str.charCodeAt(2));
console.log("indexOff :", str.indexOf("c"));
console.log("toLowerCase :", str.toLowerCase());
console.log("toUpperCase :", str.toUpperCase());
console.log("slice(2) :", str.slice(2));
console.log("slice(2,-4) :", str.slice(2, -4));
console.log("slice(1,4) :", str.substring(1, 4));
console.log("concat Dev :", str.concat(" Dev"));
console.log("split(' '):", str.split(" "));
console.log("split(''):", str.split(""));

console.log("padStart :", "str".padStart(10, "*"));
console.log("padEnd :", "str".padEnd(10, "*"));
console.log("startWith 'J' :", str.startsWith("J"));
console.log("startWith 'j' :", str.startsWith("j"));
console.log("endsWith 't' :", str.endsWith("t"));

// =======================================
// Example 2 :
const str1 = "JavaScript Training and Test";
console.log(str1);

console.log("split str1 :", str1.split(" "));

const words = str1.split(" ");
console.log("split words", words);
console.log("split[1] :", words[1]);
console.log("split[3]", words[3]);
console.log("repeat(2) :", str1.repeat(2));

const str1Copy = str1.split();
console.log("copy :", str1Copy);

console.log("includes 'Dev' :", str1.includes("Dev"));
console.log("includes 'Test' :", str1.includes("Test"));
console.log("includes 'test' :", str1.includes("test"));

const strReplace = str1.replace("Test", "Exo");
console.log("Replace 'Test', 'Exo' :", strReplace);

const str2 = "JavaScript Training and Test and Test";
const strReplaceAll = str2.replaceAll("Test", "Exo");
console.log("ReplaceAll 'Test', 'Exo' :", strReplaceAll);
