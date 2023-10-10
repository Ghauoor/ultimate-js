function findMax(arr) {
  return Math.max(...arr);
}

// const result = findMax([2, 3, 4, 5, 6]);

// console.log(result);

function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

const result = findMaxNumber([2, 3, 4, 5, 6]);
console.log(result);
