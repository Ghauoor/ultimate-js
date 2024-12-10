"use strict";

function x(params) {
  console.log("THIS IS ", this); // depends upon the strict mode "this substitution"
}
// console.log(x());

const obj = {
  a: 2,
  x: function () {
    console.log(this.a);
  },
};
// obj.x();

const student = {
  name: "Ghayoor",
  printName: function () {
    console.log(this);
  },
};

const student2 = {
  name: "Hussain",
};

// student.printName.call(student2); // override the value of this

// behavior of this in arrow func
const valOfThis = {
  a: 10,
  x: () => {
    console.log(this); // value will be it enclosing lexical scope context
  },
};

const n = {
  a: 10,
  b: {
    f: () => {
      console.log(this);
    },
  },
};

// n.b.f();

const object = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y(); // enclosing this is function(){} so the value will be object { a: 10, x: [Function: x] }
  },
};
// object.x()
