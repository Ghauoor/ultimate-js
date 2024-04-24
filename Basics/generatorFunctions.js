// Iterators

for (const iterator of [1, 2, 3, 4, 5]) {
  console.log(iterator);
}

function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;
  return {
    next() {
      let result;
      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + step;
        iterationCount++;
        return result;
      }

      return { value: iterationCount, done: true };
    },
  };
}

// const myIterator = makeIterator(1, 10, 1);
// let result = myIterator.next();

// while (!result.done) {
//   console.log(result.value);
//   result = myIterator.next();
// }

// for (const iterator of makeIterator(1, 20)) {
//   console.log(iterator);
// }

// Generator function
function* count() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
}
// console.log(count());

// const even = count();
// for (const iterator of even) {
//   console.log(iterator);
// }

function* makeMyIteratorNew(start, end, step = 1) {
  for (let i = start; i <= end; i += step) yield i;
}

const one = makeMyIteratorNew(1, 20);

for (const iterator of one) {
  console.log(iterator);
}
// function* naturals() {
//   let i = 0;
//   while (true) {
//     yield i;
//     i += 1;
//   }
// }

// const countArray = naturals().take(8).toArray();

// console.log("countArray: %o", countArray);
