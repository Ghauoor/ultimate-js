// fetch("https://catfact.ninja/breeds")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);

//   })
//   .catch((e) => console.log(e));
const apiReq = "https://catfact.ninja/breeds";
const userReq = "https://jsonplaceholder.typicode.com/users";
const api = async function (api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    const filterArray = data.data.filter(function (item) {
      if (item["origin"] === "Natural" && item["coat"] === "Short") {
        return true;
      }
      return false;
    });
    console.log(filterArray);
  } catch (error) {
    console.log(error);
  }
};

api(apiReq);
