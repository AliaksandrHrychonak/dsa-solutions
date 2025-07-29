/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
  return (x) => {
    return functions.reduceRight((acc, cur) => {
      return cur(acc);
    }, x)
  }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
