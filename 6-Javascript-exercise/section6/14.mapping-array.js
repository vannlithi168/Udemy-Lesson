// mapping array
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => "<li>" + n + "</li>");

// console.log(items);

// mapping and put it back to object

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));

const items = filtered.map((n) => ({ value: n }));

console.log(items);
