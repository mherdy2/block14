//  constant array value
const n = 100;
// for loop function call
for (let x = 1; x <= n; x++) {
  // if function call that will print FizzBuzz when the number is divisible by 3 and 5
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
    // else if call that will print Fizz when the number is divisible by 3
  } else if (x % 3 === 0) {
    console.log("Fizz");
    // else if function call that will print Buzz when the number is divisible by 5
  } else if (x % 5 === 0) {
    console.log("Buzz");
    // else function call that will prints the number if not divisible by 3 or 5
  } else {
    console.log(x);
  }
}
