let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);

// multiplyByTwo(2);
// multiplyByThree(3);

// By using closures
function multi(x) {
  return function (y) {
    console.log(x * y);
  };
}

const multiByTwo = multi(2);
// multiByTwo(6);

// ques sum (1)(2)(3)()...(n) --> return the sum
let sum = function (a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
};

let sumOneLiner = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)());
console.log(sumOneLiner(1)(2)(3)());
