const des = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(des);

const coffee = {
  name: "IceCoffee",
  price: 999,
  isAvailable: true,
  orderCoffee: function () {
    console.log("Coffee is not ready yet");
  },
};
// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, "name", { writable: false, enumerable: false });

// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// console.log(coffee);

for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key}, ${value}`);
  }
}
