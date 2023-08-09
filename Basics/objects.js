// when object created from constructor it create it will be singleton --> Object.create
// object literals

const mySymbol = Symbol("Key1");
const JsUser = {
  name: "Ghayoor",
  "Full Name": "Ghayoor Hussain",
  age: 100,
  [mySymbol]: "My Key One",
  email: "ghayoor@gmil.com",
  isLoggesIn: false,
  lastLoggedIn: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]); //? better way
// console.log(JsUser["Full Name"]); //* This value cann't be accessed by the .Full Name
// console.log(JsUser[mySymbol]);

JsUser.email = "ghayoorHussain@gmail.com";
//Object.freeze(JsUser);
// console.log(JsUser);
JsUser.greetings = function () {
  console.log("Hello jS user");
};
JsUser.greetingsTwo = function () {
  console.log(`Hello jS user, ${this.name}`);
};

// console.log(JsUser.greetingsTwo());

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123";
tinderUser.name = "Ghayoor";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "someOne@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Ghayoor",
      lastName: "Hussain",
    },
  },
};

// console.log(regularUser["fullName"]["userFullName"]["firstName"]);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "b",
};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "i@gmail.com",
  },
  {
    id: 3,
    email: "j@gmail.com",
  },
  {
    id: 4,
    email: "k@gmail.com",
  },
];

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// ++++++++++++++ Destructuring ++++++++++++++++
const course = {
  courseName: "jS in urdu",
  price: 999,
  courseIns: "Ghayoor",
};

// course.courseIns;

const { courseIns } = course;
const { courseIns: instructor } = course;
// console.log(courseIns);
// console.log(instructor);

const fName = "Ghayoor";
const lName = "Hussain";

const usrs = {
  fName,
  lName,
};

function printName() {
  return console.log(this.fName, "", this.lName);
}
printName.call(usrs);
