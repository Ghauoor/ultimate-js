function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

const arr = [1, 2, 1, 1, 2, 3, 2, 3, 4, 5, 3, 10];
const res = removeDuplicates(arr);
console.log(res);
