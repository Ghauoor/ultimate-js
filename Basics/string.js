// String as primitives
const name = "Ghayoor";
const repoCount = 38;

console.log(`${name} have ${repoCount} repos`);

// String as objects
const gameName = new String(`Takken-7`);
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toLowerCase());
console.log(gameName.indexOf("k"));
console.log(gameName);
const newString = gameName.substring(0, 3); //last val will not include
console.log(newString);
const anotherString = gameName.slice(-8, 2);
console.log(anotherString);

const newStringOne = "       Ghayoor      ";
console.log(newStringOne.trim());
const url = "https://ghayoor.com/ghayoor%20hussain";
console.log(url.replace("%20", ""));
console.log(url.includes("https"));
