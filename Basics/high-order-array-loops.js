//

const user = [
  {
    id: 1,
    userName: "g",
  },
  {
    id: 2,
    userName: "h",
  },
  {
    id: 3,
    userName: "a",
  },
  {
    id: 4,
    userName: "y",
  },
  {
    id: 5,
    userName: "o",
  },
];

user.forEach((item) => {
  console.log(item["userName"]);
});

for (let i = 0; i < user.length; i++) {
  //console.log(user[i]["id"]);
}

let arr = [1, 2, 3, 4, 5];

//* for of

for (const num of arr) {
  //console.log(num);
}

const greeting = "Hello Ghayoor";

for (const greet of greeting) {
  //console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();

map.set("pk", "Pakistan");
map.set("uk", "UK");
map.set("fr", "France");

for (const [key, value] of map) {
  //console.log(key, ":-", value);
}

const myObject = {
  id: 1,
  userName: "Ghayoor",
  email: "g@mail.com",
  favLang: "Java",
};

// for (const [key, val] of myObject) { //!object is not itrable
//   console.log(val);
// }

// for in loop bring key it itrate over the property names and does so in unspecify order which can bring unpredictable results
for (const key in myObject) {
  //console.log(`${key} and value is ${myObject[key]}`);
}

const langs = ["Java", "Ruby", "Py", "Cpp"];

for (const key in langs) {
  //console.log(langs[key]);
}

// langs.forEach((item) => console.log(item));
function printMe(item) {
  //console.log(item);
}

// By this way donot execute the func just pass the ref
langs.forEach(printMe);

langs.forEach((item, index, arr) => console.log(item, index, arr));
