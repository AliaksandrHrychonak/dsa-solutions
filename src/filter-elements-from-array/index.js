/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
  const returnedArr = []
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i], i) && returnedArr.push(arr[i])
  }

  return returnedArr;
};

console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; }));
console.log(filter([1,2,3], function firstIndex(n, i) { return i === 0; }));
console.log(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 }));