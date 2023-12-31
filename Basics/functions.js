/* function statement==> when function keyword is use then it is a func declaration or state and special thing about statement is it is always be hoisted (use anywhere in this file) which means if a func is dec bottom u can use or ref any where in the file

ie. 
function sayHi(name) {
  return `Said.... ${name}`
}

function Expression ==> any code code above it cannot ref it 
const sayHi = function (name) {
  return `Said.... ${name}`
}


- Declaration for global code
- Expression for local code
*/

function sayMyName() {
  console.log("G");
  console.log("h");
  console.log("a");
  console.log("y");
  console.log("o");
  console.log("o");
  console.log("r");
}

//sayMyName();

// function addTwoNumber(numberOne, numberTwo) {
//   console.log(numberOne + numberTwo);
// }
function addTwoNumber(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const res = addTwoNumber(2, 3);
// console.log("Resut => ", res);

function userLoginMessage(userName) {
  if (!userName) {
    // userName === undefined
    console.log("Please Enter a name");
    return;
  }
  return `${userName} is just loggedIn`;
}

// console.log(userLoginMessage());

// rest oprator
function calculateCartPrice(...num) {
  return num;
}

//console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
  userName: "Ghayoor",
  price: 100,
};

function handleObject(anyObject) {
  console.log(
    `UserName is ${anyObject["userName"]} and price is ${anyObject["price"]}`
  );
}

// handleObject(user);

// handleObject({
//   userName: "sam",
//   price: 100,
// });

const arr = [100, 200, 300, 400];

function returnSecondVal(getArr) {
  return getArr[2];
}

// console.log(returnSecondVal(arr));

function arrSum(getArr) {
  let sum = 0;
  for (let i = 0; i < getArr.length; i++) {
    sum += getArr.indexAt(i);
  }
  return sum;
}

// console.log(arrSum(arr));

function maxOfArray(getArr) {
  let max = 0;

  for (let i = 0; i < getArr.length; i++) {
    if (getArr[i] > max) {
      max = getArr[i];
    }
  }

  return max;
}

// console.log(maxOfArray(arr));
