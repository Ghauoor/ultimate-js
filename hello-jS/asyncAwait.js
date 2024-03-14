const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!!");
  }, 5000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 resolved value!!!");
  }, 3000);
});

//? always return a promise
// async function getData() {
//   return "Ghayoor";
//   return promise;
// }

// const dataPromise = getData();
// dataPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//? before async await
function getData() {
  //? js engine will not wait for the promise to resolved
  promise.then((res) => console.log(res));
  console.log("Console Run first");
}
// getData();

async function handlePromise() {
  console.log("Hello World");
  const value = await promise;
  console.log("Console Run first");
  console.log(value);

  const promiseValue = await promise2;
  console.log("Console of second promise Run first");
  console.log(promiseValue);
}
// handlePromise();

const handleURL = "https://api.github.com/users/Ghauoor";
async function handleGithubData() {
  //   fetch(handleURL)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  try {
    const data = await fetch(handleURL);
    const res = await data.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

handleGithubData();
// handleGithubData().catch((error) => console.log(error));
