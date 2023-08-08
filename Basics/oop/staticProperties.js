class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`USERNAME IS ${this.userName}`);
  }
  static creatId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }
}

const foo = new User("Ghayoor");
// console.log(foo.creatId());
const bar = new Teacher("bar", "bar@gmail.com", "123");

// console.log(bar.creatId());
