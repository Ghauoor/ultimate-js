//? The concept of currying comes into play when you don't want to run the function until all the function parameters ain't available. A situation like this may arrive when you are taking data from different APIs.

function sum(a, b, c) {
  return a + b + c;
}

//Now i want to run this func only if all the parms is avilible

//? in this case curring is come in to play

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// or

const addOne = (a) => (b) => (c) => a + b + c;

// Paracticle example

function sendAutoMail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `Sending mail to ${to} with this subject ${subject} and with this body ${body}`
      );
    };
  };
}

let stepOne = sendAutoMail("ghayoor@gmail.com");
let stepTwo = stepOne("New Order confirmation is here");
stepTwo("Hey Ghayoor here is somethings is for you");
