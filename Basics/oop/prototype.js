let userName = "Ghayoor";
console.log(userName.trueLength);

let myHeros = ["Thor", "spiderman"];
let heroPower = {
  thor: "Hammer",
  spiderMan: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.ghayoor = function () {
  console.log("Ghayoor is present in all objects");
};

Array.prototype.heyGhayoor = function () {
  console.log("Ghayoor say hello");
};

myHeros.ghayoor();
heroPower.ghayoor();
myHeros.heyGhayoor();
// heroPower.heyGhayoor();

// Inheritance

const user = {
  userName: "Ghayoor",
  email: "ghayoor@hmail",
};

const Teacher = {
  makeVedios: true,
};

const TeachingAssistant = {
  isAvailiable: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fullTime: true,
  __proto__: TeachingAssistant,
};

Teacher.__proto__ = user;

// Modern syntax

Object.setPrototypeOf(TeachingAssistant, Teacher);

let anOtherUserName = "Ghayoor     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anOtherUserName.trueLength();

// Jiss ka matlub h this
