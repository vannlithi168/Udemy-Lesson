const numbers = [1, 2, 3, 1, 4];

// check the if string "1" have in array or not if not it w'll return -1
// if it have it will find the first element that have that string
console.log(numbers.indexOf("1"));

// number 1is value that we find and number 2 is the index that find start from
// result = 3
console.log(numbers.indexOf(1, 2));

// find the last index that have value 1 even it have the same value 1 but
// it will count the last one
// result: 3
console.log(numbers.lastIndexOf(1));

// it will return false if number not have in array
// and return true if it have in array
console.log(numbers.includes(1));
