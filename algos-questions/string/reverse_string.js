function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const fName = "Ghayoor";

let i = 0;
let j = fName.length - 1;
const char = fName.split("");

while (i < j) {
  swap(char, i, j);
  i++;
  j--;
}

const reverseName = char``.join("");
console.log(reverseName);
