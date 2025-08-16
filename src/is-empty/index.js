/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = (obj) => {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
};