class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`USERNAME is ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName); // no need to `call`
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`New Course is added by ${this.userName}`);
  }
}

const foo = new Teacher("coffee", "coffe@mail.com", 12344);

// foo.addCourses();

const bar = new User("Ghayoor");
// bar.logMe();

console.log(bar === foo);
console.log(bar instanceof User);
