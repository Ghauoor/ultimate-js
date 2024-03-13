let a = 10,
  b = 10,
  c = 12;

if (a + b > c && b + c > a && a + c > b) {
  console.log("=".repeat(50));
  console.log("We can form a triangle");
  console.log("=".repeat(50));
} else {
  console.log("=".repeat(50));
  console.log("No");
  console.log("=".repeat(50));
}
