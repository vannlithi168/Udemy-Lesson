function sum() {
  let total = 0;
  for (let values of arguments) {
    total += values;
    return total;
  }
}

console.log(sum(1, 2, 3, 4, 5, 10));
