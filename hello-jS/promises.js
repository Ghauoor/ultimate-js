const cart = ["shirts", "pants", "shoes"];

//Flow
// createOrder -> Payment -> order summary -> update wallet
api.createOrder(cart, function () {
  api.procedToPayment(function () {
    api.showSummary(function () {
      api.updateWallet();
    });
  });
});

// handle this situation by promises
const promise = createOrder(cart);
//* promise is nothing just empty object. at first--> {data: undedined} after some time {data: order}
//* after the data aviable attach a cb func with promise object

promise.then(function (orderId) {
  procedToPayment(orderId);
});

//* The diff b/w both of the approaches is huge like in first we pass the callback funcs  but in sec we attaches the cb funcs so we have control back to our hands because now callback call when it get data.

//? Solution of callback hell by promise chainging
//* promise chainging always return promise
promise
  .then(function (orderId) {
    return procedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });

// const GITHUB_API = "https://api.github.com/users/ghauoor";
// const user = fetch(GITHUB_API);
// // console.log(user);
// user.then(function (data) {
//   console.log(data);
// });
