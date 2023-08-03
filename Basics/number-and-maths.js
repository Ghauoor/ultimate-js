const number = 200;
const balance = new Number(100);
// console.log(balance);
// console.log(number);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

// const otherNumber = 23.22332;
// console.log(otherNumber.toPrecision(3)); // it will return string
// const hundereds = 1000000;
// console.log(hundereds.toLocaleString());

// +++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math.abs(-3));
console.log(Math.round(3.6));
console.log(Math.ceil(2.2));
console.log(Math.floor(2.2));
console.log(Math.min(2, 3, 4, 52, 2));
console.log(Math.max(2, 3, 4, 52, 2));
console.log(Math.random()); // it always lay around 0-1
console.log(Math.floor(Math.random() * 10) + 1); // 1 to onward value
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // range between values
