const arr = [12, 3, 4, 5, 33];

function findLargestByReduce(arr) {
  return arr.reduce((max, curr) => (curr > max ? curr : max));
}

let reduc = findLargestByReduce(arr);
console.log(reduc);
