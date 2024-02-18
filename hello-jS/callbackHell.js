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
