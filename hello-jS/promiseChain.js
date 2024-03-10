const cart = ["shoe", "shirt", "pant"];
createOrder(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
    // return proceedToPayment(orderId);
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (payementInfo) {
    console.log(payementInfo);
  })
  .catch((error) => console.log("ERROR-->", error.message));

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // create an order
    // validate cart
    // OrderID --> success case
    if (!valdateCart(cart)) {
      const error = new Error("Cart is not valide");
      reject(error);
    }

    const orderID = "123456789";
    if (orderID) {
      setTimeout(() => resolve(orderID), 5000);
    }
  });

  return promise;
}

function valdateCart(cart) {
  return true;
  // return false;
}

function proceedToPayment(orderID) {
  const promise = new Promise(function (resolve, reject) {
    resolve("Payement Successfull with this " + orderID);
  });

  return promise;
}
