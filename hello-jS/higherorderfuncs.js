function callBack() {
  console.log("Hello jS");
}

function higherOrderFunc(x) {
  x();
}

// higherOrderFunc(callBack);

const radius = [1, 3, 4, 5];

const calcArea = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

// console.log(calcArea(radius));

const calcCircum = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

// console.log(calcCircum(radius));

const calcDiagram = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calcDiagram(radius));

// flow dry principle
// Modular code ref of prev code

function area(radius) {
  return Math.PI * radius * radius;
}
function diameter(radius) {
  return 2 * radius;
}
function cirsumference(radius) {
  return 2 * Math.PI * radius;
}

// generic func for all the calculations

const calculate = function (radius, logic) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, cirsumference));

Array.prototype.mapPollyfil = function (cb) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i]));
  }
  return output;
};

console.log(radius.mapPollyfil(area));
