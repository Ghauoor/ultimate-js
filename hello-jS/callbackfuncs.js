// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is singlethreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

console.log("Before");
getUser(1, (user) => {
  console.log("User is", user);
  callingTheRepo(user.gitHubName, (repos) => {
    console.log("Repos-->", repos);
    commitsForUser(user.gitHubName, (commits) => console.log(commits));
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading data from db");
    callback({ id: id, gitHubName: "Ghauoor" });
  }, 1000);
}

function callingTheRepo(userName, callback) {
  setTimeout(() => {
    console.log("Calling the repos");
    callback(["repo1", "repo2", "repo3"]);
  }, 1000);
}

function commitsForUser(userName, callback) {
  setTimeout(() => {
    console.log("Calling the repos");
    callback("Commits");
  }, 3000);
}

function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Ghayoor Hussain", gender: "Male" };
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    data.name = data.name.toUpperCase();
    callback(data);
  }, 1000);
}

function printData(data) {
  console.log("Data is -->", data);
}

fetchData(function (data) {
  processData(data, function (data) {
    printData(data);
  });
});

// function check() {
//   setTimeout(() => {
//     console.log("***Inside***");
//   }, 0);

//   console.log("***Outside***");
// }

// check();

//? count how many time a button is clicked
//* 1- use global variable --> not secure, 2- use form a closure

// function attachedEventListners() {
//   let count = 0;
//   document.getElementById("btn").addEventListener("click", function xyz() {
//     console.log("Clicked", ++count);
//   });
// }

// attachedEventListners();
