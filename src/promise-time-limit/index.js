/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = (fn, t) => {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timer);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timer);
          reject(error);
        });
    });
  };
};


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */


// var timeLimit = function(fn, t) {
//
//   return async function(...args) {
//     const promise1 = fn(...args)
//     const promise2 = new Promise((_,reject)=> {
//       setTimeout(()=>reject("Time Limit Exceeded"),t)
//     })
//     return  Promise.race([promise1,promise2])
//   }
// };
