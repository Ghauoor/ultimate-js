const array = [0, 1, 2, 3, 4, 5];

const names = ["Ghayoor", "Hussain"];
const myArr = new Array([1]);

// array.push(6);
// array.pop();
// array.unshift(9);
// array.shift();
// console.log(array.includes(2));
// console.log(array.includes(9));
// const newArray = array.join();
// console.log(typeof newArray);
// console.log(array);

// slice and splice
// const myNewArrayOne = array.slice(1, 3); //? return a shallow copy of the portion
// console.log("A", myNewArrayOne);
// const myNewArrayTwo = array.splice(1, 3);
// console.log("B", myNewArrayTwo);

const heros = ["Thor", "IronMan", "SpiderMan"];
const dc = ["SuperMan", "Flash", "BatMan"];

// heros.push(dc);
// console.log(heros);
// console.log(heros[3][1]);

// const allHeros = heros.concat(dc); //? return new array
// console.log(allHeros);

const allNewHeros = [...heros, ...dc];
// console.log(allNewHeros);

// const anOtherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, [3, 4, 5]]];
// const realArr = anOtherArr.flat(Infinity);
// console.log(realArr);

// console.log(Array.isArray("Ghayoor"));
// console.log(Array.from("Ghayoor"));
// console.log(
//   Array.from({
//     name: "Ghayoor",
//   })
// );

let score = 100;
let score_One = 100;
let score_Two = 100;
console.log(Array.of(score, score_One, score_Two));
