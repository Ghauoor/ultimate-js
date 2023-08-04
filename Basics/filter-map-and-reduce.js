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

console.log(book);
