const coding = ["Java", "Ruby", "Python", "CPP"];

const values = coding.forEach((item) => {
  //! no value return
  //console.log(item);
});
//console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = nums.filter((num) => {
  return num >= 5;
});

//? same work
// const newNums = [];
// nums.forEach((item) => {
//   if (item >= 5) {
//     newNums.push(item);
//   }
// });

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBook = books
//   .filter((bk) => {
//     return bk["genre"] === "History";
//   })
//   .forEach((item) => {
//   console.log(item["genre"]);
//   console.log(item["title"]);
//   console.log(item["edition"]);
// });

const book = books.filter((bk) => {
  //? when ever scope open have to return explicitly
  if (bk["publish"] > 2000 || bk["genre"] === "History") {
    return bk;
  }
});

// console.log(book);

//* ++++++++++++++ .map() +++++++++++++++++++++++++++++

const newNums = nums.map((num) => {
  return num + 10;
});
// console.log(newNums);

nums.forEach((item) => item + 10);

//* +++++++ Chaining +++++++++++++
const nNums = nums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((item) => item >= 40);

// console.log(nNums);

//* ++++++++++++ reduce() +++++++++++++++++++
//? accumulator ==> empty var, in the first itration accumulator val is initial value but after first itration hold the result of first itration

const total = nums.reduce((acc, curVal) => {
  //console.log(`Accumulator val is ${acc} and current val is ${curVal}`);
  return acc + curVal;
}, 0);
// console.log("Total sum is => ", total);

// const bArr = [...nums];
// const lTotal = bArr.reduce(function (accumulator, current) {
//   return accumulator + current;
// });

// console.log(lTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 200,
  },
  {
    itemName: "js course",
    price: 200,
  },
  {
    itemName: "java course",
    price: 400,
  },
  {
    itemName: "ruby course",
    price: 100,
  },
  {
    itemName: "react course",
    price: 500,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

const nPrice = shoppingCart
  .filter((item) => item.price >= 400)
  .reduce((acc, item) => acc + item.price, 0);

console.log(nPrice);
