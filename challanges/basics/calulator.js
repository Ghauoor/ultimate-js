function calculator(num1, num2, oprator) {
  let result;

  switch (oprator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      throw new Error("Invalid Oprator");
  }

  return result;
}

const result = calculator(1, 2, "+");
console.log(result);
