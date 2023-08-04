// for loops

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let array = ["BatMan", "SpiderMon", "Steve"];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  //   console.log(element);
}
let arr = 0;
while (arr < array.length) {
  //console.log(`Value is ${array[arr]}`);
  arr++;
}

let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
