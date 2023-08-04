const userLoggedIn = true;

// < , > , >= , <= , == , === , != , !==

// if (condition) {

// } else {

// }

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const emptyObject = {};

if (Object.keys(emptyObject) === 0) {
  console.log("Object is Empty");
}

// Nullish coalish operator (??) : null undefine

let val;
val = undefined ?? 10;

console.log(val);

// Ternary operator
condition ? true : false;
