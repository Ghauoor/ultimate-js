function ArrayIntersection(arrOne, arrTwo) {
  const intersectionArr = [];

  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.includes(arrOne[i]) && !intersectionArr.includes(arrOne[i])) {
      intersectionArr.push(arrOne[i]);
    }
  }

  return intersectionArr;
}

const res = ArrayIntersection([12, 3, 45, 6], [12, 3, 4, 5, 6]);
console.log(res);
