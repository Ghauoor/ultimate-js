// let const dec are hoisted but in temporal dead zone.

// temporal dead zone --> time b/w when let const is hoisted and it's initiallized

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
