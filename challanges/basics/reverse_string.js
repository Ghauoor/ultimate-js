function reverseStr(str) {
  return str.split("").reverse().join("");
}

// const res = reverseStr("Hello");
// console.log(res);

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const result = isPalindrome("Hello $$$");

console.log(result);
