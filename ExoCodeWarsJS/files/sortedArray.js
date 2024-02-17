// Étant donné deux tableaux de chaînes de caractères a1 et a2, il retourne un tableau trié r dans l'ordre lexicographique des chaînes de caractères de a1 qui sont des sous-chaînes de chaînes de caractères de a2

function inArray(array1, array2) {
  return array1
    .filter((str1) => array2.some((str2) => str2.includes(str1)))
    .sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["arp", "live", "strong"];
console.log(a1, a2, ["arp", "live", "strong"]);

a1 = ["xyz", "live", "strong"];
console.log(a1, a2, ["live", "strong"]);

a1 = ["live", "strong", "arp"];
console.log(a1, a2, ["arp", "live", "strong"]);

a1 = ["tarp", "mice", "bull"];
console.log(a1, a2, []);

a1 = ["live", "strong", "lyal", "lysh", "arp"];
console.log(a1, a2, ["arp", "live", "strong"]);

a1 = [];
console.log(a1, a2, []);
