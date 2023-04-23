// vowel and consonants
// count the number of vowels and consonants in a string
// using arrays, loops and else/if statements
const inputWord = "anomonopia";
const vowelArray = "aeiou",
  consonantArray = "bcdfghjklmnpqrstvwxyz";
var vowel = [],
  consonant = [];
for (let x = 0; x < inputWord.length; x++) {
  for (let y = 0; y < vowelArray.length; y++) {
    if (inputWord[x] === vowelArray[y]) {
      vowel++;
    }
  }
}
for (let x = 0; x < inputWord.length; x++) {
  for (let z = 0; z < consonantArray.length; z++) {
    if (inputWord[x] === consonantArray[z]) {
      consonant++;
    }
  }
}
console.log(
  inputWord + " has " + consonant + " consonant" + "  and " + vowel + " vowel"
);
