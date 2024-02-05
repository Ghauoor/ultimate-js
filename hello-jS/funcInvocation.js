var x = 1;
a();
b();

console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// Memory Allocation of Execution context always looks for first local value so output is 10, 100, 1
