const oddNumbers = [];
const num = [2, 4, 6, 8, 11, 20, 15, 22];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 1) {
    oddNumbers.push(num[i]);
  }
}
console.log(oddNumbers);
