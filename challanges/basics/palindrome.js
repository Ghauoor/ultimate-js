// function palindromeStr(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   reverseString = formattedStr.split("").reverse().join("");

//   return formattedStr === reverseString;
// }

// // const res = palindromeStr("A Man, a plan, a canal, Panama");
// // console.log(res);

// // Another approach
// function isPalindrome(str) {
//   const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
//   const reversedStr = reverseString(formattedStr);
//   return formattedStr === reversedStr;
// }

// function isAlphaNumeric(char) {
//   const code = char.charCodeAt(0);
//   return (
//     (code >= 48 && code <= 57) || // numbers 0-9
//     (code >= 97 && code <= 122) // lowercase a-z
//   );
// }

// function removeNonAlphaNumeric(str) {
//   let formattedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (isAlphaNumeric(char)) {
//       formattedStr += char;
//     }
//   }

//   return formattedStr;
// }

function reversedString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
}

const result = reversedString("A Man, a plan, a canal, Panama");
console.log(result);
