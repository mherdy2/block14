function go() {
  const inputWord = document.getElementById("text").value;
  // vowel and consonants
  // count the number of vowels and consonants in a input string
  // use arrays, loops and else/if statements
  //check input string for vowels and consonants
  // count the number of vowels and consonants in a input string
  // return the number of vowels and consonants in a input string
  // const inputWord = "hello";
  const vowelArray = "aeiou",
    consonantArray = "bcdfghjklmnpqrstvwxyz";
  var vowel = [],
    consonant = [];
  //   this function will count the number of vowels in the input string
  for (let x = 0; x < inputWord.length; x++) {
    for (let y = 0; y < vowelArray.length; y++) {
      // comparison of vowels from the input string with the vowel array
      if (inputWord[x] === vowelArray[y]) {
        // counter for vowels
        vowel++;
      }
    }
  }
  // this function will count the number of consonants in the input string
  for (let x = 0; x < inputWord.length; x++) {
    for (let z = 0; z < consonantArray.length; z++) {
      // comparison of consonants from the input string with the consonant array
      if (inputWord[x] === consonantArray[z]) {
        // counter for consonants
        consonant++;
      }
    }
  }
  // prints the result on gathered count for each variable
  document.getElementById("p1").innerHTML =
    inputWord +
    " has " +
    consonant +
    " consonant" +
    "  and " +
    vowel +
    " vowel";
}
// console.log(
//   inputWord + " has " + consonant + " consonant" + "  and " + vowel + " vowel"
// );