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
multiByTwo(6);
