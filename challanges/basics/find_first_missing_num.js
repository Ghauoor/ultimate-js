function findFirstMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expactedSum = (n * (n + 1)) / 2;

  let acctualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    acctualSum += arr[i];
  }

  return expactedSum - acctualSum;
}

const result = findFirstMissingNumber([1, 2, 3, 5]);
console.log(result);
