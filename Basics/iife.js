// Immediately Invoked function expression (IIFE)

// use to avoid pollution of global scope vars

//names iife
(function coffee() {
  console.log("DB Connected");
})();

(() => {
  console.log("DB Connected two");
})();
((name) => {
  console.log(`DB Connected to ${name}`);
})("Ghayoor");
s