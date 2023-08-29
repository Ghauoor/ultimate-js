// let const dec are hoisted but in temporal dead zone.

console.log(b);
let a = 10;
var b = 100;

var b = 1007;
console.log(b);

{
  var n = 10;
  let m = 12;
  const g = 77;
}
