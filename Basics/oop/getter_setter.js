class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value.toUpperCase();
  }

  get password() {
    return `${this._password.toUpperCase()}ghayoor`;
  }

  set password(value) {
    this._password = value;
  }
}

const ghayoor = new User("h@gmail.com", "abc");
// console.log(ghayoor.password);
// console.log(ghayoor.email);

//* Old scenes
function Users(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const coffee = new Users("coffee@chai.com", "coffee");

// console.log(coffee.email);

//* same work using objects
const UserObj = {
  _email: "s@s.com",
  _password: 123,

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    return (this._password = value);
  },
};

console.log(UserObj.email);
