// types: String , Number , Boolean , null , undefined , Symbol , BigInt
const score = 100;
const scoreVal = 10.2;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;
// unique
const id = Symbol("123");
const anOtherId = Symbol("123");
const binNum = 2849238498234n;

// Reference Type (Non Primitive)

// Arrays, Objects, Functions
const name = ["Ghayoor", "Hussain", "AnyName"];
let obj = {
  name: "Ghayoor",
  age: 11,
};

const myfunc = function () {
  console.log("Hello World");
};

//! Stack and Heap Memory

let fName = "Ghayoor";

let anotherName = fName;
anotherName = "Hussain";

console.log(anotherName);

let user = {
  email: "user@gmail.com",
  payment: "stripe",
};
