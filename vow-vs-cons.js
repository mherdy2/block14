// count the number of vowels and consonants in a input string
// use arrays, loops and else/if statements
//check input string for vowels and consonants
// count the number of vowels and consonants in a input string
function go() {
  let inputWord = document.getElementById("text").value;
  inputWord = inputWord.toUpperCase();
  const vowelArray = "AEIOU";
  // storage the number of vowels an
  var vowel = [],
    consonant = [];
  //  this loop function will count the number of vowels
  // in the inputWord and search if it is in the vowelArray
  for (let x = 0; x < inputWord.length; x++) {
    for (let y = 0; y < vowelArray.length; y++) {
      // comparison of vowels from the inputWord with the vowelArray
      // then store it in the vowelArray
      if (inputWord[x] === vowelArray[y]) {
        // counter for vowels
        vowel++;
      }
      // function to count the number
      //  in the inputWord minus the number of vowels
      // will be the number of consonants
      consonant = inputWord.length - vowel;
      // returns the result on gathered count for variables "consonant", "vowel to p1.
      document.getElementById("p1").innerHTML =
        inputWord +
        " has " +
        consonant +
        " consonant" +
        "  and " +
        vowel +
        " vowel";
    }
  }
}
