//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// creation of promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do all async task ie DB crud
  // Network call

  setTimeout(function () {
    console.log("Async task is complete");
    resolve({
      userName: "Ghayoor",
    });
  }, 1000);
});

// consumption of promise
promiseOne.then(function (data) {
  console.log("Promise comsume", data["userName"]);
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
    console.log("Ghayoor");
  }, 1000);
}).then(function () {
  console.log("Promise2 is resolved");
});

// pass data through resolve()
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      userName: "Ghayoor",
      email: "ghayoor@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true; // pass true to handle error
    if (!error) {
      resolve({ userName: "ghayoor", password: 123 });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    return user.userName;
  })
  .then((userName) => console.log(userName))
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        userName: "JavaScript",
        password: 123,
      });
    } else {
      reject("jS went wrong");
    }
  }, 1000);
});

// consume by using async

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E =>", error);
  }
}

getAllUsers();

fetch("https://api.github.com/users/ghauoor")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
