function countOccurances(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }

  return count;
}

const result = countOccurances("Hello", "L");
// console.log(result);

//? another approach

const countOcc = (str, char) => {
  console.log(str.split(char).length - 1);
};

const results = countOcc("Hello", "o");
console.log(results);
