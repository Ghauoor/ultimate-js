let arr = ["Ghayoor", "Hussain"];
let obj = {
  name: "Ghayoor",
  city: "Lahore",
  getInfo: function () {
    console.log(`My name is ${this.name} and I live in ${this.city}`);
  },
};
function func() {}

// console.log(arr.__proto__); // prototype of Array
// console.log(arr.__proto__.__proto__); // prototype of Object
// console.log(arr.__proto__.__proto__.__proto__); // prototype of object which is null

// console.log(Array.prototype);
// console.log(Object.prototype);

let obj2 = {
  name: "Hussain",
};

// Never do this
console.log((obj2.__proto__ = obj));
console.log(obj2.city); // due to proto

obj2.getInfo();

Function.prototype.myBind = function () {
  console.log("Some Random Stuff Inside the Bind");
};

function fun() {}
fun.__proto__.myBind();
