/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = (functions) => {
  return new Promise((resolve, reject) => {
    const n = functions.length;
    if (n === 0) {
      resolve([]);
      return;
    }

    const results = new Array(n);
    let completed = 0;
    let settled = false;

    const resolveOnce = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };

    const rejectOnce = (err) => {
      if (settled) return;
      settled = true;
      reject(err);
    };

    for (let i = 0; i < n; i++) {
      let p;
      try {
        p = functions[i]();
      } catch (e) {
        rejectOnce(e);
        continue;
      }

      Promise.resolve(p)
        .then((val) => {
          if (settled) return;
          results[i] = val;
          completed += 1;
          if (completed === n) resolveOnce(results);
        })
        .catch(rejectOnce);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */