// Map
const array = [2, 4, 5, 5, 9];

function double(x) {
  return x * 2;
}

const output = array.map(double);
// console.log(output);

// Filter
function isOdd(x) {
  return x % 2;
}

const result = array.filter(isOdd);
// console.log(result);

// Reduce
function maximum(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// using reduce
const res = array.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

// console.log(res);

const users = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Doe", age: 32 },
  { firstName: "Alice", lastName: "Johnson", age: 24 },
  { firstName: "Bob", lastName: "Brown", age: 30 },
];

const userNames = users.map((obj) => obj.firstName + obj.lastName);
// console.log(userNames);

const userAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(userAge);
