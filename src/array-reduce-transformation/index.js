/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
  if(!nums.length) return init

  let acc = init;

  for(let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }

  return acc
};



console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0))
console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 0))
console.log(reduce([], function sum(accum, curr) { return 0; }, 25))
