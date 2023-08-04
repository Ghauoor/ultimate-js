// this refers to the current context
const user = {
  userName: "Ghayoor",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.userName = "SAM";
// user.welcomeMessage();

// console.log(this);

function chai() {
  let userName = "Ghayoor";
  console.log(this.userName); //! will through undefine context will work in obj not in func
}
// chai();
const coffee = () => {
  let userName = "Hussain";
  console.log(this.userName); //! will through undefine context will work in obj not in func
  console.log(this); // will be empty
};
// coffee();

// arrow func ====> () => {};
//explicit arrow func
const addTwo = (numOne, numTwo) => {
  return numOne + numTwo;
};

// Implicit return arrow function if use curley braces than have to use return else don't use return
const addThree = (numOne, numTwo) => numOne + numTwo;
const addFour = (numOne, numTwo) => numOne + numTwo;
//How to return object in jS
const addFive = () => ({ userName: "ghayoor" });
// console.log(addFive());
// console.log(addThree(2, 4));

// const myArr = [1, 2, 3, 4, 4];

// myArr.forEach(function (i) {
//   console.log(i);    
// });

// myArr.forEach((index) => (console.log(index)));
