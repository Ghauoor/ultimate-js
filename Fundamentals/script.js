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
