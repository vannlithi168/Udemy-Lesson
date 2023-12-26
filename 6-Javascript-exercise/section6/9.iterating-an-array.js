const numbers = [1, 2, 3];

// use for of to iterating element in array
for (let number of numbers) {
  console.log(number);
}

// use for each and arrow functions to iterating
numbers.forEach((number, index) => console.log(index, number));
