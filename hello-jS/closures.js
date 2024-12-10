function z() {
  var b = 12;
  function x() {
    var a = 11;

    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
// z();

function d() {
  var i = 7;
  setTimeout(function () {
    console.log(i);
  }, 1000);
  i++; //* it print 8 because closures holds the var ref not the val
}
// d();

function c() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

c();

function a() {
  var x = 10;
  return function b() {
    console.log(x);
  };
}

var y = a();
// console.log(y());
