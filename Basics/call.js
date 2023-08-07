// call --> current execution context pass to another func

function setUserName(userName) {
  this.userName = userName;
}

function createUser(userName, email, password) {
  setUserName.call(this, userName); // hold the ref of func
  this.email = email;
  this.password = password;
}

const ghayoor = new createUser("Ghayoor", "g@mail.com", 1234);
console.log(ghayoor);
