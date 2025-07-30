/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
  let countCall = 0;
  return (...args) => {
    countCall++
    return countCall === 1 ? fn(...args) : undefined
  }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3))// 6
console.log(onceFn(2,3,6)) // returns undefined without calling fn