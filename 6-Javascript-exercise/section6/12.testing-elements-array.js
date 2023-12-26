// it will check all element in array if it all greater or equal to 0
// it will return true else it will return false
// 01-by using every method
const numbers1 = [1, 2, 3];

const allPositive = numbers1.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

// 02-by using some method
// it will check at least one element in array if it greater or equal to 0
// it will return true
const numbers2 = [1, -1, 2, 3];

const atLeastOnePositive = numbers2.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
