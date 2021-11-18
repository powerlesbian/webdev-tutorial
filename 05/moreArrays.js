const numbers = [4, 7, 1, 3, 5, 4, 9, 23];

console.log(numbers);
console.log(numbers.slice(0, 3));

console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));
console.log(numbers.indexOf(100));

console.log(numbers.includes(7));

console.log(numbers.filter((number) => number > 5));
console.log(numbers.map((number) => number * 2));

console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
