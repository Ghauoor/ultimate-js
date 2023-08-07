const user = {
  userName: "Ghayoor",
  logginCount: 3,
  signedIn: true,

  getUserDetails: function () {
    // console.log(`Got ${this.userName} from db`);
    console.log(this);
  },
};
// user.getUserDetails();

function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.userName}`);
  };
}

const userOne = new User("Ghayoor", 5, true);
// const userTwo = User("Hussain", 15, false); //? it will override the values every time
console.log(userOne.constructor);
