// filter only value that we want to get from array
const numbers1 = [1, -1, 2, 3];

const filtered1 = numbers1.filter(function (value) {
  return value >= 0;
});

console.log(filtered1);

// another solution
const numbers2 = [1, -1, 2, 3];

const filtered2 = numbers2.filter((n) => n >= 0);

console.log(filtered2);
