// odd numbers storage that will be collected in an array
const oddNumbers = [];
//
// const num = [2, 4, 6, 8, 11, 20, 15, 22];
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = [70, 42, 55, 81, 21, 91, 34];
const num = [2, 4, 6, 8, 10, 11, 12];
// for loop function that will iterate through the array
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 1) {
    // using push() method to push the number into the oddNumbers array
    oddNumbers.push(num[i]);
  }
}
// printing the odd numbers array
console.log(oddNumbers);
