let myDate = new Date(); // it's object
// console.log(myDate.toString());
// console.log("This is ISOString =>", myDate.toISOString());
// console.log("This is toLocaleDateString =>", myDate.toLocaleDateString());
// console.log("This is toLocaleString =>", myDate.toLocaleString());
// console.log("This is toUTCString =>", myDate.toUTCString());

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate.toDateString()); //Months start from 0 in jS

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
newDate.toLocaleString("default", {
  weekday: "long",
});
