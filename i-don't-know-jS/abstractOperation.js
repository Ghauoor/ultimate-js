const obj = {
  valueOf() {
    return 42; // This will be used as the primitive value
  },
  toString() {
    return "hello"; // This will not be used since valueOf returned a primitive value
  },
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 100; // This will be used if the hint is 'number'
    } else {
      return "world"; // This will be used if the hint is 'string' or 'default'
    }
  },
};

console.log(obj + 1); // Output: 43 (valueOf method is used)
console.log(String(obj)); // Output: "world" (toString method is not used since valueOf returned a primitive value)
console.log(Number(obj)); // Output: 100 (Symbol.toPrimitive method is used with hint 'number')

console.log({}.toString());
