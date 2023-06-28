//* Dynamic Typing
let jSisFun = true;
console.log(jSisFun);
jSisFun = false;
console.log(typeof jSisFun);

//* undefine: Value takken by var which is not yet define

let year;
console.log(typeof year);

//? Let Var Const
let age = 100;
age = 12;

const birthDayYear = 1991;
//! not allowed --> birthDayYear = 2000
//! not allowed --> const year

var job = "Programmer";
job = "DBA";

//? let is block scope and var is function scope

//! Never do this --> name = "Ghauoor"

//? Operator are pretty much same as any other lang

//? Strings
const firstName = "Ghayoor";
const profession = "Programmer";
const birthDay = 1991;

const ghayoor = "I'm " + firstName + ", a " + profession;
console.log(ghayoor);

const ghayoorHussain = `I'm ${firstName}, a ${profession}`;
console.log(ghayoorHussain);

//? Conversion and Coresion
const inputYear = "1991";
console.log(Number(inputYear) + 18);

//! If you want to convert a string which is not valid is ie 'ghauoor' it will give `NaN error` NaN still a number but it's a invalid number

//* Type Coercion
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "10" * 3);
console.log("23" / "10" / 3);

let n = "1" + 1; // 11
n = n - 1; // 11 - 1 --> 10
console.log(n);
