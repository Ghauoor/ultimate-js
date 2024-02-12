// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is singlethreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

// function check() {
//   setTimeout(() => {
//     console.log("***Inside***");
//   }, 0);

//   console.log("***Outside***");
// }

// check();

//? count how many time a button is clicked
//* 1- use global variable --> not secure, 2- use form a closure

function attachedEventListners() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function xyz() {
    console.log("Clicked", ++count);
  });
}

attachedEventListners();
