const array = [1, 2, 3, 4, 5];

const ans = array.reduce((acc, curVal) => {
  return acc + curVal;
}, 0);

// console.log(ans);

// without using any HOF

function sumOfArr(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum);
}

sumOfArr(array);
