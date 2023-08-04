// scope --> {}
//var c = 300;
let a = 200; // global scope
if (true) {
  // block scope
  let a = 10;
  const b = 20;
  // var c = 30;
  // console.log("I'm a =>", a);
}

// console.log(a);
// console.log(b);
// console.log(a);

//nestedscopes
function one() {
  const userName = "Ghayoor";

  // closure --> when a inner func have accessed to the variables outside it's scope
  function two() {
    const wesite = "udemy";
    console.log(userName);
  }
  two();
}
// one();

if (true) {
  const userName = "Ghayoor";
  if (userName === "Ghayoor") {
    const web = " youtube";
    // console.log(`${userName} is learning from ${web}`);
  }
  //   console.log(web); //! will through error
}

// console.log(userName); //! will through error

// +++++++++++ Interesting +++++++++++++++++++

console.log(addOne(2));
function addOne(num) {
  return num + 1;
}

// expression

// console.log(addTwo(4)); //! will through an error
const addTwo = function (num) {
  return num + 2;
};
