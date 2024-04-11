// EXTENSION Quokka

// ================ STRING =======================
// Example 1 :
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

// ================== MANY STRINGS =====================
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

// Converting string to number
string = "essai";
string1 = "123";
const number = parseInt(string);
console.log(number);
const number2 = parseInt(string1);
console.log(number2);

// ================= DATE ======================
// Get current date and times
const now = new Date();
console.log(now);

// ================ ARRAY =======================

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [4, 5, 2, 1, 3];

//Merge two arrays
const newArray = array1.concat(array2);
console.log(newArray);

//Check if a variable is an Array
console.log(Array.isArray(array1));

// Remove duplicates from an array:
const uniqyeArray = [...new Set(array1)];
console.log(uniqyeArray);

// Sort an array in ascending orders :
const ascendArray = array3.sort((a, b) => a - b);
console.log(ascendArray);

// Reverse an array :
const revArray = array1.reverse();
console.log(revArray);

// =========== NUMBER =============

// generate a random number between two values :
const max = 100;
const min = 1;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// ============== OBJECT ========
const obj = { 1: "a", 2: "b" };
const array = Object.entries(obj);
console.log(array);
console.log(Object.keys(obj).length);

// ======= URL =======
// Get current url :
// const currentUrl = window.location.href;

// Redirect to a new url :
// const newUrl = window.location.replace(url);

// ======== OTHERS ========

// Copy text to clipboard :
// navigator.clipboard.writeText(text);
