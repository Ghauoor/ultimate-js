printFullName = function (homeTown, state) {
  return console.log(
    this.firstName,
    "",
    this.lastName,
    "from",
    homeTown,
    ",",
    state
  );
};
const name = {
  firstName: "Ghayoor",
  lastName: "Hussain",

  //! better approach --> keep method outside of the object and then use call().
  printFullName: function () {
    return console.log(this.firstName, "", this.lastName);
  },
};
// printFullName.call(name, "", "");
// name.printFullName();
const nameTwo = {
  firstName: "Taimoor",
  lastName: "Hussain",
};
// with the call() we can do function borrowing
// first argu is ref of the this var and than func other funcs with , seprations
printFullName.call(nameTwo, "Lahore", "Pakistan");

// only diff b/w call() and apply() is the way we pass the arguments
// in apply method we pass the argument in a list

printFullName.apply(name, ["Lahore", "Pakistan"]);

//bind() look exactly the same as apply method but only diff is the instead calling the method it bind the method with object and return the copy of the object and the main catch is the it return the func so we call it later

let print = printFullName.bind(name, "Lahore", "Pakistan");

print();
