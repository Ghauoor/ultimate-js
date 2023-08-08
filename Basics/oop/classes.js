class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeName() {
    return `${this.userName.toUpperCase()}`;
  }
}

const coffee = new User("Coffee", "coffee@gmail.com", "123");

// console.log(coffee.encryptPassword());
// console.log(coffee.changeName());

// behind the scene

function user(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}
user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const newUser = new user("Coffee", "coffee@gmail.com", "123");
console.log(newUser.encryptPassword());
